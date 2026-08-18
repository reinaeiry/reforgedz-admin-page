// Regression test for replay event retention: `npm run test:retention`.
//
// Exercises server/lib/retention.js against synthetic NDJSON logs in a temp dir.
// Nothing here touches the real data directory.

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';

import { createRetention, findCutoffOffset } from '../server/lib/retention.js';

const DAY = 24 * 60 * 60 * 1000;
const RETENTION_MS = 7 * DAY;
const now = Date.now();

// ---- the bits server/index.js injects ---------------------------------------
async function ensureDir(dir) { await fs.mkdir(dir, { recursive: true }); }

async function readJsonOrNull(p) {
  try { return JSON.parse(await fs.readFile(p, 'utf8')); } catch { return null; }
}

async function writeJsonAtomic(p, obj) {
  const tmp = `${p}.tmp-${crypto.randomBytes(4).toString('hex')}`;
  await fs.writeFile(tmp, JSON.stringify(obj), 'utf8');
  await fs.rename(tmp, p);
}

const ingestLocks = new Map();
function withIngestLock(key, fn) {
  const prev = ingestLocks.get(key) || Promise.resolve();
  const next = prev.then(fn, fn);
  ingestLocks.set(key, next.catch(() => {}));
  return next;
}

// ---- fixtures ---------------------------------------------------------------
function makeRecord(receivedAt, tsMs, filler) {
  return JSON.stringify({
    receivedAt,
    remoteAddr: '10.0.0.1',
    payload: { type: 'snapshot', tsMs, players: [{ id: 'p1', pad: 'x'.repeat(filler) }] },
  });
}

// `count` records evenly spread over `spanDays`, ending `endedDaysAgo` ago.
async function buildLog(dir, { count, spanDays, filler = 200, endedDaysAgo = 0 }) {
  await ensureDir(dir);
  const p = path.join(dir, 'events.ndjson');
  const step = (spanDays * DAY) / count;
  const end = now - endedDaysAgo * DAY;
  const out = [];
  const meta = [];
  for (let i = 0; i < count; i++) {
    // + step/2 keeps every record clear of the retention boundary, so the few ms
    // between `now` here and Date.now() inside the trim cannot move the expected
    // answer by a whole record.
    const receivedAt = Math.round(end - spanDays * DAY + i * step + step / 2);
    const rec = makeRecord(receivedAt, i * 1000, filler + (i % 7) * 37); // vary line lengths
    meta.push({ receivedAt, tsMs: i * 1000, bytes: Buffer.byteLength(rec) + 1 });
    out.push(rec);
  }
  await fs.writeFile(p, `${out.join('\n')}\n`, 'utf8');
  await writeJsonAtomic(path.join(dir, 'index.json'), {
    id: path.basename(dir),
    storedEvents: count,
    totalEvents: count,
    minTsMs: 0,
    maxTsMs: (count - 1) * 1000,
    firstReceivedAt: meta[0].receivedAt,
    lastReceivedAt: meta[count - 1].receivedAt,
  });
  return { p, meta };
}

function expectedCutoffOffset(meta, cutoff) {
  let off = 0;
  for (const m of meta) {
    if (m.receivedAt >= cutoff) return off;
    off += m.bytes;
  }
  return off; // everything expired
}

let failures = 0;
function check(name, fn) {
  return Promise.resolve().then(fn).then(
    () => console.log(`  ok   ${name}`),
    (err) => { failures++; console.log(`  FAIL ${name}: ${err && err.message}`); },
  );
}

// ---- setup ------------------------------------------------------------------
const root = await fs.mkdtemp(path.join(os.tmpdir(), 'retention-test-'));
const serversDir = path.join(root, 'servers');
await ensureDir(serversDir);

const retention = createRetention({
  dataDir: root,
  retentionMs: RETENTION_MS,
  withIngestLock,
  readJsonOrNull,
  writeJsonAtomic,
  // The real gate needs 256MB reclaimable, which would need an absurd fixture.
  env: { ...process.env, RETENTION_MIN_RECLAIM_BYTES: '1000' },
});
const { trimServer, sweep, sweepStaleTmp, config } = retention;

console.log(`retention ${config.retentionMs / DAY} day(s); gate ${config.minReclaimBytes} bytes / ${config.minReclaimRatio}; interval ${config.minIntervalMs}ms`);

// ---- tests ------------------------------------------------------------------

await check('cutoff offset matches a linear scan at every record boundary', async () => {
  const dir = path.join(serversDir, 'search');
  const { p, meta } = await buildLog(dir, { count: 500, spanDays: 20 });
  const size = (await fs.stat(p)).size;
  const fh = await fs.open(p, 'r');
  try {
    for (let i = 0; i < meta.length; i++) {
      for (const cutoff of [meta[i].receivedAt, meta[i].receivedAt + 1]) {
        const got = await findCutoffOffset(fh, size, cutoff);
        const want = expectedCutoffOffset(meta, cutoff);
        assert.equal(got, want, `cutoff ${cutoff} (record ${i}) -> ${got}, want ${want}`);
      }
    }
    assert.equal(await findCutoffOffset(fh, size, meta[0].receivedAt - 5000), 0);
    assert.equal(await findCutoffOffset(fh, size, meta[meta.length - 1].receivedAt + 5000), size);
  } finally {
    await fh.close();
  }
});

await check('trim drops only expired records and keeps the rest byte-exact', async () => {
  const dir = path.join(serversDir, 'trim');
  const { p } = await buildLog(dir, { count: 4000, spanDays: 20, filler: 400 });
  const beforeLines = (await fs.readFile(p, 'utf8')).trimEnd().split('\n');

  const cutoff = now - RETENTION_MS;
  const res = await trimServer('trim', dir);
  assert.ok(res, 'expected a trim to happen');

  const after = (await fs.readFile(p, 'utf8')).trimEnd().split('\n');
  const wantKept = beforeLines.filter((l) => JSON.parse(l).receivedAt >= cutoff);
  assert.equal(after.length, wantKept.length, `kept ${after.length} lines, want ${wantKept.length}`);
  assert.ok(after.every((l, i) => l === wantKept[i]), 'retained lines differ from expectation');
  // a pure suffix: nothing rewritten, nothing reordered
  const suffixStart = beforeLines.length - after.length;
  assert.ok(after.every((l, i) => l === beforeLines[suffixStart + i]), 'retained region is not a byte-exact suffix');
  for (const l of after) JSON.parse(l); // no half-line at the seam
  console.log(`       kept ${after.length}/${beforeLines.length} records`);
});

await check('index.json min/first are re-derived from the retained head', async () => {
  const dir = path.join(serversDir, 'trim');
  const idx = await readJsonOrNull(path.join(dir, 'index.json'));
  const first = JSON.parse((await fs.readFile(path.join(dir, 'events.ndjson'), 'utf8')).split('\n')[0]);
  assert.equal(idx.minTsMs, first.payload.tsMs, 'minTsMs should be the first retained tsMs');
  assert.equal(idx.firstReceivedAt, first.receivedAt, 'firstReceivedAt should be the first retained receivedAt');
  assert.ok(idx.lastRetentionAt > 0, 'lastRetentionAt stamped');
  assert.equal(idx.retentionMs, RETENTION_MS);
  assert.ok(idx.storedEvents > 0 && idx.storedEvents <= idx.totalEvents, `storedEvents ${idx.storedEvents}`);
});

// The bulk copy runs outside the ingest lock, so this is the one that matters.
await check('records appended during the trim survive the swap', async () => {
  const dir = path.join(serversDir, 'concurrent');
  const { p: eventsPath } = await buildLog(dir, { count: 120000, spanDays: 20, filler: 800 });

  let appended = 0;
  let stop = false;
  // Appends take the ingest lock, exactly like the real ingest handler.
  const writer = (async () => {
    while (!stop) {
      await withIngestLock('concurrent', async () => {
        const rec = JSON.stringify({
          receivedAt: Date.now(),
          live: appended,
          payload: { type: 'snapshot', tsMs: 900_000_000 + appended, players: [] },
        });
        await fs.appendFile(eventsPath, `${rec}\n`, 'utf8');
        appended++;
      });
      await new Promise((r) => setImmediate(r));
    }
  })();

  const res = await trimServer('concurrent', dir);
  stop = true;
  await writer;
  assert.ok(res, 'expected a trim to happen');

  const after = (await fs.readFile(eventsPath, 'utf8')).trimEnd().split('\n');
  for (const l of after) JSON.parse(l); // no torn line at the splice point
  const live = after.map((l) => JSON.parse(l)).filter((r) => typeof r.live === 'number');
  assert.equal(live.length, appended, `kept ${live.length} of ${appended} concurrent appends`);
  assert.ok(live.every((r, i) => r.live === i), 'live records out of order');
  assert.equal(JSON.parse(after[after.length - 1]).live, appended - 1, 'live records are not at the tail');
  console.log(`       ${appended} records appended mid-trim, all retained in order`);
});

await check('a log fully inside the window is not rewritten', async () => {
  const dir = path.join(serversDir, 'fresh');
  const { p } = await buildLog(dir, { count: 2000, spanDays: 1, filler: 400 });
  const st1 = await fs.stat(p);
  const res = await trimServer('fresh', dir);
  const st2 = await fs.stat(p);
  assert.equal(res, null, 'no trim expected');
  assert.equal(st1.size, st2.size, 'file size changed');
  assert.equal(st1.mtimeMs, st2.mtimeMs, 'file was rewritten');
});

await check('a barely-expired log is not rewritten (below the reclaim gate)', async () => {
  const dir = path.join(serversDir, 'barely');
  // 8 days of data against a 7-day window: ~1/8 expired, under the 15% ratio gate
  const { p } = await buildLog(dir, { count: 4000, spanDays: 8, filler: 400 });
  const st1 = await fs.stat(p);
  const res = await trimServer('barely', dir);
  const st2 = await fs.stat(p);
  assert.equal(res, null, 'no trim expected');
  assert.equal(st1.size, st2.size, 'file size changed');
  const idx = await readJsonOrNull(path.join(dir, 'index.json'));
  assert.ok(idx.lastRetentionAt > 0, 'the check should still be stamped so we back off');
});

await check('the min interval throttles repeat passes', async () => {
  const dir = path.join(serversDir, 'trim');
  const st1 = await fs.stat(path.join(dir, 'events.ndjson'));
  const res = await trimServer('trim', dir);
  const st2 = await fs.stat(path.join(dir, 'events.ndjson'));
  assert.equal(res, null, 'second pass should be throttled');
  assert.equal(st1.size, st2.size);
});

await check('stale .tmp- files are removed, recent ones kept', async () => {
  const dir = path.join(serversDir, 'tmpsweep');
  await buildLog(dir, { count: 10, spanDays: 1 });
  const stale = path.join(dir, 'events.ndjson.tmp-deadbeef');
  const recent = path.join(dir, 'events.ndjson.tmp-cafe01');
  await fs.writeFile(stale, 'x', 'utf8');
  await fs.writeFile(recent, 'x', 'utf8');
  const old = new Date(now - 3 * 60 * 60 * 1000);
  await fs.utimes(stale, old, old);
  await sweepStaleTmp(dir);
  assert.equal(await fs.stat(stale).then(() => true, () => false), false, 'stale temp should be gone');
  assert.equal(await fs.stat(recent).then(() => true, () => false), true, 'recent temp should survive');
});

await check('sweep visits every server dir without throwing', async () => {
  await sweep();
});

await check('a fully expired log is emptied rather than half-kept', async () => {
  const dir = path.join(serversDir, 'allold');
  // ends 30 days ago: every record is outside a 7-day window
  const { p } = await buildLog(dir, { count: 3000, spanDays: 90, filler: 400, endedDaysAgo: 30 });
  const res = await trimServer('allold', dir);
  assert.ok(res, 'expected a trim');
  assert.equal(await fs.readFile(p, 'utf8'), '', 'file should be empty');
  const idx = await readJsonOrNull(path.join(dir, 'index.json'));
  assert.equal(idx.minTsMs, null, 'minTsMs cleared');
  assert.equal(idx.storedEvents, 0, 'storedEvents zeroed');
});

await check('retentionMs=0 disables trimming entirely', async () => {
  const dir = path.join(serversDir, 'disabled');
  const { p } = await buildLog(dir, { count: 2000, spanDays: 90, filler: 400, endedDaysAgo: 30 });
  const off = createRetention({
    dataDir: root, retentionMs: 0, withIngestLock, readJsonOrNull, writeJsonAtomic,
  });
  const st1 = await fs.stat(p);
  assert.equal(await off.trimServer('disabled', dir), null, 'no trim when disabled');
  await off.sweep();
  const st2 = await fs.stat(p);
  assert.equal(st1.size, st2.size, 'file must be untouched');
});

console.log(failures === 0 ? '\nALL PASS' : `\n${failures} FAILURE(S)`);
await fs.rm(root, { recursive: true, force: true });
process.exit(failures === 0 ? 0 : 1);
