// One-time backfill: scan every server's existing events.ndjson into the
// permanent player index (server/lib/playerIndex.js) before the retention
// sweep trims it away. Safe to re-run - recordEvent's upserts are idempotent
// for player/name/stat rows (INSERT OR UPDATE, summed deltas), though re-running
// WILL double-count kill/death/hit/session deltas for whatever range it
// re-scans, so don't re-run over a range it already covered.
//
// Wraps each file in a single transaction (not per-line auto-commit) - this
// is the difference between hours and minutes for the larger logs.
//
// Usage: node scripts/backfill-player-index.mjs [serverId ...]
//   With no args, backfills every server directory, smallest file first.

import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import readline from 'node:readline';
import path from 'node:path';
import { initPlayerIndex, recordEvent, getDb } from '../server/lib/playerIndex.js';

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
  let indexed = 0;
  console.log(`[backfill] ${serverId}: starting (${(size / 1e9).toFixed(2)} GB)`);

  const db = getDb();
  const runInTx = db.transaction((batch) => {
    for (const { type, tsMs, payload } of batch) recordEvent(serverId, type, tsMs, payload);
  });

  const stream = createReadStream(filePath, { encoding: 'utf8' });
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

  let batch = [];
  const BATCH_SIZE = 5000;

  for await (const line of rl) {
    lines++;
    if (!line) continue;
    let outer;
    try { outer = JSON.parse(line); } catch { continue; }
    const p = outer && outer.payload;
    // receivedAt (the admin server's own Date.now() at ingest), not payload.tsMs -
    // tsMs is the exporter's engine-uptime clock, not wall-clock time.
    if (!p || typeof outer.receivedAt !== 'number' || !p.type) continue;
    batch.push({ type: p.type, tsMs: outer.receivedAt, payload: p });
    indexed++;
    if (batch.length >= BATCH_SIZE) {
      runInTx(batch);
      batch = [];
    }
    if (lines % 500000 === 0) {
      const pct = ((rl.input.bytesRead || 0) / size * 100).toFixed(1);
      console.log(`[backfill] ${serverId}: ${lines} lines, ~${pct}%`);
    }
  }
  if (batch.length) runInTx(batch);

  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`[backfill] ${serverId}: done - ${lines} lines, ${indexed} recorded, ${secs}s`);
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
    console.log('[backfill] nothing to do');
    return;
  }

  for (const t of targets) {
    await backfillOne(t.serverId, t.filePath, t.size);
  }
  console.log('[backfill] all done');
}

main().catch((e) => { console.error('[backfill] fatal:', e); process.exitCode = 1; });
