// Rolling retention for the replay event logs (data/servers/<id>/events.ndjson).
//
// Retention drops a PREFIX of the log (the oldest bytes) and keeps the rest
// verbatim: binary-search the byte offset of the first record still inside the
// window, then byte-copy the suffix. No record is ever parsed during the copy,
// so the cost is proportional to what we KEEP, not to what the file contains.
//
// The copy is still large on a busy server, so it is:
//   - run from a background sweep, NOT from the ingest path;
//   - done outside the ingest lock (appends only ever touch the end of the
//     file, so the bytes being copied are stable); the lock is taken only to
//     splice on whatever arrived during the copy and swap the file in;
//   - gated, so it rarely runs at all: a worthwhile chunk must be reclaimable
//     and enough time must have passed since the last pass on that server.
//
// The predecessor rewrote the whole multi-GB log line-by-line every 60s while
// holding the ingest lock, which is what made the live view stall. Keep the
// "never parse per record, never hold the lock for the copy" properties.

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createReadStream } from 'node:fs';

const SCAN_CHUNK = 1 << 18; // 256 KiB
const MAX_LINE_BYTES = 16 * 1024 * 1024;
const STALE_TMP_AGE_MS = 60 * 60 * 1000;

export const DEFAULT_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;

export function readEnvInt(env, name, fallback) {
  const raw = env ? env[name] : undefined;
  if (raw === undefined || raw === null || String(raw).trim() === '') return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 0) return fallback;
  return Math.floor(n);
}

export function resolveRetentionMs(env) {
  return readEnvInt(env, 'RETENTION_MS', DEFAULT_RETENTION_MS);
}

async function readFileChunk(fh, position, length) {
  const buf = Buffer.allocUnsafe(length);
  const { bytesRead } = await fh.read(buf, 0, length, position);
  return buf.subarray(0, bytesRead);
}

// Byte offset of the first record starting at or after `offset`. A record starts
// at byte 0 or immediately after a newline.
async function findLineStart(fh, offset, fileSize) {
  if (offset <= 0) return 0;
  let pos = offset - 1;
  while (pos < fileSize) {
    const chunk = await readFileChunk(fh, pos, SCAN_CHUNK);
    if (chunk.length === 0) return null;
    const nl = chunk.indexOf(0x0a);
    if (nl !== -1) return pos + nl + 1;
    pos += chunk.length;
  }
  return null;
}

export async function readRecordAtOrAfter(fh, offset, fileSize) {
  const start = await findLineStart(fh, offset, fileSize);
  if (start === null || start >= fileSize) return null;

  let pos = start;
  let total = 0;
  const parts = [];
  let end = null;
  while (pos < fileSize && total <= MAX_LINE_BYTES) {
    const chunk = await readFileChunk(fh, pos, SCAN_CHUNK);
    if (chunk.length === 0) break;
    const nl = chunk.indexOf(0x0a);
    if (nl !== -1) {
      parts.push(chunk.subarray(0, nl));
      end = pos + nl + 1;
      break;
    }
    parts.push(chunk);
    total += chunk.length;
    pos += chunk.length;
  }
  if (end === null) return null; // no terminating newline: a partially written tail

  let obj = null;
  try {
    obj = JSON.parse(Buffer.concat(parts).toString('utf8'));
  } catch {
    obj = null;
  }
  const receivedAt = obj && typeof obj.receivedAt === 'number' ? obj.receivedAt : null;
  const payload = obj && obj.payload;
  const tsMs = payload && typeof payload.tsMs === 'number' ? payload.tsMs : null;
  return { start, end, receivedAt, tsMs };
}

// Smallest record-start offset whose receivedAt is still inside the window.
// receivedAt is stamped at append time, so it is monotonic along the file.
// Returns fileSize when every record has expired.
export async function findCutoffOffset(fh, fileSize, cutoffReceivedAt) {
  let lo = 0;
  let hi = fileSize;
  let answer = fileSize;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const rec = await readRecordAtOrAfter(fh, mid, fileSize);
    if (!rec || rec.start >= hi) {
      hi = mid;
      continue;
    }
    if (rec.receivedAt !== null && rec.receivedAt >= cutoffReceivedAt) {
      answer = rec.start;
      hi = rec.start;
    } else {
      // Expired, or unparseable (treated as expired: it sits before the cutoff).
      lo = rec.end;
    }
  }

  return answer;
}

async function copyRange(srcPath, destHandle, from, to) {
  if (to <= from) return 0;
  let copied = 0;
  await new Promise((resolve, reject) => {
    const rs = createReadStream(srcPath, { start: from, end: to - 1, highWaterMark: 1 << 20 });
    rs.on('error', reject);
    rs.on('data', (chunk) => {
      rs.pause();
      destHandle.write(chunk).then(() => {
        copied += chunk.length;
        rs.resume();
      }, reject);
    });
    rs.on('end', resolve);
  });
  return copied;
}

/**
 * @param {object} deps
 * @param {string} deps.dataDir
 * @param {number} deps.retentionMs         0 disables retention entirely
 * @param {(key: string, fn: () => Promise<any>) => Promise<any>} deps.withIngestLock
 * @param {(p: string) => Promise<any>} deps.readJsonOrNull
 * @param {(p: string, obj: any) => Promise<void>} deps.writeJsonAtomic
 * @param {object} [deps.env]
 * @param {Console} [deps.log]
 */
export function createRetention({
  dataDir,
  retentionMs,
  withIngestLock,
  readJsonOrNull,
  writeJsonAtomic,
  env = process.env,
  log = console,
}) {
  // How often the sweep looks at the servers at all.
  const sweepIntervalMs = readEnvInt(env, 'RETENTION_SWEEP_INTERVAL_MS', 5 * 60 * 1000);
  // Never trim the same server more often than this.
  const minIntervalMs = readEnvInt(env, 'RETENTION_MIN_INTERVAL_MS', 30 * 60 * 1000);
  // A trim must reclaim at least this many bytes AND this fraction of the file,
  // otherwise we would copy gigabytes to free megabytes.
  const minReclaimBytes = readEnvInt(env, 'RETENTION_MIN_RECLAIM_BYTES', 256 * 1024 * 1024);
  const minReclaimRatio = (() => {
    const n = Number(env.RETENTION_MIN_RECLAIM_RATIO);
    if (!Number.isFinite(n) || n <= 0 || n >= 1) return 0.15;
    return n;
  })();

  const config = { retentionMs, sweepIntervalMs, minIntervalMs, minReclaimBytes, minReclaimRatio };

  // Remove leftovers from a pass that died mid-copy (a restart, a full disk).
  async function sweepStaleTmp(serverDir) {
    let names = [];
    try {
      names = await fs.readdir(serverDir);
    } catch {
      return;
    }
    const now = Date.now();
    for (const name of names) {
      if (!name.startsWith('events.ndjson.tmp-')) continue;
      const p = path.join(serverDir, name);
      try {
        const st = await fs.stat(p);
        if (now - st.mtimeMs < STALE_TMP_AGE_MS) continue;
        await fs.unlink(p);
        log.warn(`[retention] removed stale temp file ${p}`);
      } catch {
        // ignore
      }
    }
  }

  async function stampChecked(idxPath) {
    const fresh = (await readJsonOrNull(idxPath)) || {};
    await writeJsonAtomic(idxPath, { ...fresh, lastRetentionAt: Date.now(), retentionMs });
  }

  async function trimServer(safeId, serverDir) {
    if (retentionMs <= 0) return null;

    const eventsPath = path.join(serverDir, 'events.ndjson');
    const idxPath = path.join(serverDir, 'index.json');

    await sweepStaleTmp(serverDir);

    const idx = (await readJsonOrNull(idxPath)) || {};
    const lastRun = typeof idx.lastRetentionAt === 'number' ? idx.lastRetentionAt : 0;
    if (Date.now() - lastRun < minIntervalMs) return null;

    let stat;
    try {
      stat = await fs.stat(eventsPath);
    } catch {
      return null;
    }
    if (!stat || stat.size <= 0) return null;

    const cutoff = Date.now() - retentionMs;
    const size = stat.size;

    let offset = 0;
    const fh = await fs.open(eventsPath, 'r');
    try {
      // Cheap exit for the common case: the oldest record is still in the window.
      const first = await readRecordAtOrAfter(fh, 0, size);
      if (first && first.receivedAt !== null && first.receivedAt >= cutoff) {
        await stampChecked(idxPath);
        return null;
      }
      offset = await findCutoffOffset(fh, size, cutoff);
    } finally {
      try { await fh.close(); } catch { /* ignore */ }
    }

    const worthIt = offset > 0 && offset >= minReclaimBytes && offset >= size * minReclaimRatio;
    if (!worthIt) {
      await stampChecked(idxPath);
      return null;
    }

    const tmpPath = `${eventsPath}.tmp-${crypto.randomBytes(6).toString('hex')}`;
    const startedAt = Date.now();
    let out = await fs.open(tmpPath, 'w');
    let result = null;

    try {
      // Unlocked: ingest only ever appends past `size`, so [offset, size) is stable.
      await copyRange(eventsPath, out, offset, size);

      await withIngestLock(safeId, async () => {
        let tailTo = size;
        try {
          const st2 = await fs.stat(eventsPath);
          tailTo = st2.size;
        } catch {
          tailTo = size;
        }

        // Splice on everything that arrived during the copy, then swap.
        await copyRange(eventsPath, out, size, tailTo);
        try { await out.sync(); } catch { /* ignore */ }
        await out.close();
        out = null;

        await fs.rename(tmpPath, eventsPath);

        const newSize = Math.max(0, tailTo - offset);
        let firstKept = null;
        try {
          const nh = await fs.open(eventsPath, 'r');
          try {
            firstKept = await readRecordAtOrAfter(nh, 0, newSize);
          } finally {
            await nh.close();
          }
        } catch {
          firstKept = null;
        }

        const fresh = (await readJsonOrNull(idxPath)) || {};
        const prevStored = typeof fresh.storedEvents === 'number'
          ? fresh.storedEvents
          : (typeof fresh.lastCompactionKept === 'number' ? fresh.lastCompactionKept : 0);
        // Records are near-uniform in size, so scale the count by the bytes kept.
        const keptApprox = tailTo > 0 ? Math.max(0, Math.round(prevStored * (newSize / tailTo))) : 0;

        await writeJsonAtomic(idxPath, {
          ...fresh,
          minTsMs: firstKept && firstKept.tsMs !== null ? firstKept.tsMs : null,
          firstReceivedAt: firstKept && firstKept.receivedAt !== null ? firstKept.receivedAt : undefined,
          storedEvents: keptApprox,
          lastRetentionAt: Date.now(),
          lastRetentionDroppedBytes: offset,
          lastRetentionKeptBytes: newSize,
          retentionMs,
        });

        result = { droppedBytes: offset, keptBytes: newSize };
      });
    } catch (err) {
      log.error(`[retention] ${safeId}: trim failed`, err && err.message);
      try { if (out) await out.close(); } catch { /* ignore */ }
      try { await fs.unlink(tmpPath); } catch { /* ignore */ }
      return null;
    } finally {
      try { if (out) await out.close(); } catch { /* ignore */ }
    }

    if (result) {
      const mb = (n) => `${(n / (1024 * 1024)).toFixed(1)}MB`;
      log.log(`[retention] ${safeId}: dropped ${mb(result.droppedBytes)}, kept ${mb(result.keptBytes)} in ${Date.now() - startedAt}ms`);
    }
    return result;
  }

  let sweeping = false;
  async function sweep() {
    if (retentionMs <= 0 || sweeping) return;
    sweeping = true;
    try {
      const serversDir = path.join(dataDir, 'servers');
      let entries = [];
      try {
        entries = await fs.readdir(serversDir, { withFileTypes: true });
      } catch {
        return;
      }
      // Sequential, so only one large temp copy exists on disk at a time.
      for (const e of entries) {
        if (!e.isDirectory()) continue;
        try {
          await trimServer(e.name, path.join(serversDir, e.name));
        } catch (err) {
          log.error(`[retention] sweep failed for ${e.name}`, err && err.message);
        }
      }
    } finally {
      sweeping = false;
    }
  }

  // Kicks off a delayed first pass then a periodic sweep. Timers are unref'd so
  // they never hold the process open.
  function start() {
    if (retentionMs <= 0) {
      log.warn('[retention] RETENTION_MS=0 - replay events are never trimmed');
      return () => {};
    }
    const days = (retentionMs / (24 * 60 * 60 * 1000)).toFixed(2).replace(/\.?0+$/, '');
    log.log(`[retention] keeping ${days} day(s) of replay events; sweeping every ${Math.round(sweepIntervalMs / 1000)}s`);

    // Give ingest a minute to settle after boot before the first (possibly large) trim.
    const first = setTimeout(() => { sweep().catch(() => {}); }, 60_000);
    if (typeof first.unref === 'function') first.unref();
    const timer = setInterval(() => { sweep().catch(() => {}); }, sweepIntervalMs);
    if (typeof timer.unref === 'function') timer.unref();

    return () => { clearTimeout(first); clearInterval(timer); };
  }

  return { config, sweep, trimServer, sweepStaleTmp, start };
}
