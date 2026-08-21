// One-time (but safe-to-rerun) backfill: scan every server's existing
// events.ndjson into just the inventory_sightings table. Deliberately does
// NOT call recordEvent (see backfill-player-index.mjs) - that path sums
// kill/death/hit/session deltas and WILL double-count them on a second run
// over already-covered data, which the original backfill already ran over
// earlier. inventory_sightings is a streak upsert (extend-or-insert, not a
// sum), so re-scanning the same range re-derives the same streaks - genuinely
// idempotent, unlike the full recordEvent path.
//
// Manual chunk+newline splitting instead of readline, same reasoning as the
// anti-cheat scanner's rewrite (server/lib/anticheat.js): readline's
// per-line async-iteration step is real overhead at millions of lines.
//
// Usage: node scripts/backfill-inventory-index.mjs [serverId ...]
//   With no args, backfills every server directory, smallest file first.

import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { initPlayerIndex, recordInventorySighting, getDb } from '../server/lib/playerIndex.js';

const DATA_DIR = process.env.DATA_DIR || 'data';

async function listServerDirs() {
  const serversDir = path.join(DATA_DIR, 'servers');
  const entries = await fs.readdir(serversDir, { withFileTypes: true });
  const dirs = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const filePath = path.join(serversDir, e.name, 'events.ndjson');
    try {
      const st = await fs.stat(filePath);
      dirs.push({ serverId: e.name, filePath, size: st.size });
    } catch { /* no events file yet, skip */ }
  }
  dirs.sort((a, b) => a.size - b.size);
  return dirs;
}

async function backfillOne(serverId, filePath, size) {
  const t0 = Date.now();
  let lines = 0;
  let snapshots = 0;
  console.log(`[backfill-inv] ${serverId}: starting (${(size / 1e9).toFixed(2)} GB)`);

  const db = getDb();
  const runInTx = db.transaction((batch) => {
    for (const { identityId, inventory, tsMs } of batch) {
      recordInventorySighting(identityId, serverId, inventory, tsMs);
    }
  });

  const TYPE_PREFIX = Buffer.from('"type":"snapshot"');
  let stream;
  try {
    stream = createReadStream(filePath, { highWaterMark: 1 << 20 });
  } catch {
    console.log(`[backfill-inv] ${serverId}: could not open file, skipping`);
    return;
  }

  let batch = [];
  const BATCH_SIZE = 2000;
  let bytesRead = 0;
  let leftover = Buffer.alloc(0);

  function processLine(lineBuf) {
    lines++;
    bytesRead += lineBuf.length + 1;
    if (!lineBuf.length) return;
    if (lineBuf.indexOf(TYPE_PREFIX) === -1) return; // cheap pre-skip, same trick as anticheat.js

    let outer;
    try { outer = JSON.parse(lineBuf.toString('utf8')); } catch { return; }
    const p = outer && outer.payload;
    if (!p || typeof outer.receivedAt !== 'number' || p.type !== 'snapshot') return;
    // Unlike every other event type, snapshot's data lives directly on the
    // payload (payload.players), not wrapped in payload.event - confirmed
    // against real ingested data (see the matching fix in anticheat.js and
    // playerIndex.js's recordEvent).
    if (!Array.isArray(p.players)) return;

    snapshots++;
    for (const pl of p.players) {
      if (!pl || !pl.identityId || !Array.isArray(pl.inventory)) continue;
      batch.push({ identityId: pl.identityId, inventory: pl.inventory, tsMs: outer.receivedAt });
    }
    if (batch.length >= BATCH_SIZE) {
      runInTx(batch);
      batch = [];
    }
    if (lines % 500000 === 0) {
      const pct = (bytesRead / size * 100).toFixed(1);
      console.log(`[backfill-inv] ${serverId}: ${lines} lines, ~${pct}%`);
    }
  }

  for await (const chunk of stream) {
    const buf = leftover.length ? Buffer.concat([leftover, chunk]) : chunk;
    let start = 0;
    let nl;
    while ((nl = buf.indexOf(0x0a, start)) !== -1) {
      processLine(buf.subarray(start, nl));
      start = nl + 1;
    }
    leftover = start < buf.length ? Buffer.from(buf.subarray(start)) : Buffer.alloc(0);
  }
  if (leftover.length) processLine(leftover);
  if (batch.length) runInTx(batch);

  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`[backfill-inv] ${serverId}: done - ${lines} lines, ${snapshots} snapshots, ${secs}s`);
}

async function main() {
  initPlayerIndex(DATA_DIR);

  const requested = process.argv.slice(2);
  let targets = await listServerDirs();
  if (requested.length) {
    const set = new Set(requested);
    targets = targets.filter((t) => set.has(t.serverId));
  }

  if (!targets.length) {
    console.log('[backfill-inv] nothing to do');
    return;
  }

  for (const t of targets) {
    await backfillOne(t.serverId, t.filePath, t.size);
  }
  console.log('[backfill-inv] all done');
}

main().catch((e) => { console.error('[backfill-inv] fatal:', e); process.exitCode = 1; });
