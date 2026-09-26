// Unit tests for the replay panel helpers (src/ui/components/replay/panelUtils.ts).
// Run: node scripts/test-panels.mjs
import assert from 'node:assert/strict';
import {
  bestScore, bucketOf, buildFeedRows, chooseBucketMs, formatSince, indexNearestTs,
  matchScore, windowSlice, buildOffsets, variableWindowSlice, keyDisambiguator, baseKeyOf,
} from '../src/ui/components/replay/panelUtils.ts';

let passed = 0;
const test = (name, fn) => {
  try { fn(); passed += 1; console.log(`  ok  ${name}`); }
  catch (err) { console.error(`FAIL  ${name}\n      ${err.message}`); process.exitCode = 1; }
};

console.log('replay panel helpers');

test('search ranks exact over prefix over word-start over substring', () => {
  const exact = matchScore('Osmodium', 'osmodium');
  const prefix = matchScore('Osmodium the Second', 'osmo');
  const word = matchScore('The Osmodium', 'osmodium');
  const mid = matchScore('xxosmodiumxx', 'osmodium');
  assert.ok(exact > prefix, 'exact should beat prefix');
  assert.ok(prefix > word, 'prefix should beat word-start');
  assert.ok(word > mid, 'word-start should beat mid-string');
  assert.equal(matchScore('nothing here', 'zzz'), null);
});

test('an empty query matches everything equally', () => {
  assert.equal(matchScore('anything', ''), 0);
  assert.equal(bestScore(['a', 'b'], ''), 0);
});

test('shorter matches outrank longer ones at the same quality', () => {
  assert.ok(matchScore('Osmo', 'osmo') > matchScore('Osmodium the Longer Name', 'osmo'));
});

test('bestScore takes the strongest field and survives nulls', () => {
  const s = bestScore([null, 'killed by Osmodium', 'Osmodium'], 'osmodium');
  assert.equal(s, matchScore('Osmodium', 'osmodium'));
  assert.equal(bestScore([null, undefined], 'x'), null);
});

test('bucket size grows with the span', () => {
  assert.equal(chooseBucketMs(10 * 60_000), 60_000);
  assert.equal(chooseBucketMs(2 * 3_600_000), 5 * 60_000);
  assert.equal(chooseBucketMs(8 * 3_600_000), 15 * 60_000);
  assert.equal(chooseBucketMs(24 * 3_600_000), 3_600_000);
});

test('bucketOf floors to the bucket', () => {
  assert.equal(bucketOf(65_000, 60_000), 60_000);
  assert.equal(bucketOf(59_999, 60_000), 0);
});

test('feed rows: newest first, one header per bucket, counts correct', () => {
  const items = [
    { t: 0 }, { t: 10_000 }, { t: 61_000 }, { t: 121_000 }, { t: 125_000 },
  ];
  const rows = buildFeedRows(items, (i) => i.t, (_i, idx) => `k${idx}`, 60_000, true);
  const groups = rows.filter((r) => r.kind === 'group');
  const itemRows = rows.filter((r) => r.kind === 'item');
  assert.equal(itemRows.length, 5, 'every item kept');
  assert.equal(groups.length, 3, 'three minute buckets');
  assert.deepEqual(groups.map((g) => g.count), [2, 1, 2], 'counts per bucket');
  // newest first
  assert.ok(itemRows[0].tsMs > itemRows[itemRows.length - 1].tsMs);
  // a header always precedes its items
  assert.equal(rows[0].kind, 'group');
});

test('feed rows can run oldest first too', () => {
  const rows = buildFeedRows([{ t: 5 }, { t: 100_000 }], (i) => i.t, (_i, idx) => `k${idx}`, 60_000, false);
  const itemRows = rows.filter((r) => r.kind === 'item');
  assert.ok(itemRows[0].tsMs < itemRows[1].tsMs);
});

test('windowing renders a slice and pads the rest', () => {
  const w = windowSlice(1000, 44, 4400, 440, 6);
  assert.ok(w.start <= 100 && w.start >= 90, `start ${w.start} should sit just above the scroll row`);
  assert.ok(w.end > w.start);
  assert.equal(w.padTop, w.start * 44);
  assert.equal(w.padTop + (w.end - w.start) * 44 + w.padBottom, 1000 * 44, 'total height preserved');
});

test('windowing copes with an empty list and a short one', () => {
  assert.deepEqual(windowSlice(0, 44, 0, 400), { start: 0, end: 0, padTop: 0, padBottom: 0 });
  const w = windowSlice(3, 44, 0, 400);
  assert.equal(w.start, 0);
  assert.equal(w.end, 3);
  assert.equal(w.padBottom, 0);
});

test('windowing never scrolls past the end', () => {
  const w = windowSlice(50, 44, 99_999, 400);
  assert.ok(w.end <= 50);
  assert.ok(w.start <= w.end);
  assert.equal(w.padBottom, 0);
});

test('nearest row to the playhead skips group headers', () => {
  const rows = buildFeedRows([{ t: 0 }, { t: 60_000 }, { t: 120_000 }], (i) => i.t, (_i, i2) => `k${i2}`, 60_000, true);
  const idx = indexNearestTs(rows, 61_000);
  assert.equal(rows[idx].kind, 'item');
  assert.equal(rows[idx].tsMs, 60_000);
});

test('relative time reads like a human wrote it', () => {
  assert.equal(formatSince(1_000), 'now');
  assert.equal(formatSince(12_000), '12s');
  assert.equal(formatSince(4 * 60_000), '4m');
  assert.equal(formatSince(2 * 3_600_000 + 5 * 60_000), '2h 05m');
});

test('variable windowing: offsets are prefix sums', () => {
  assert.deepEqual(buildOffsets([26, 44, 44]), [0, 26, 70, 114]);
  assert.deepEqual(buildOffsets([]), [0]);
});

test('variable windowing picks the rows actually on screen', () => {
  const heights = [];
  for (let i = 0; i < 200; i += 1) heights.push(i % 5 === 0 ? 26 : 44);
  const offsets = buildOffsets(heights);

  const w = variableWindowSlice(offsets, 0, 400, 2);
  assert.equal(w.start, 0);
  assert.equal(w.padTop, 0);
  assert.ok(w.end >= 9 && w.end <= 18, `end ${w.end} should cover a 400px viewport`);

  const target = 120;
  const w2 = variableWindowSlice(offsets, offsets[target] + 5, 400, 2);
  assert.ok(w2.start <= target && w2.end > target, 'target row inside the slice');
  assert.equal(w2.padTop, offsets[w2.start]);
  assert.equal(
    w2.padTop + (offsets[w2.end] - offsets[w2.start]) + w2.padBottom,
    offsets[200],
    'total height preserved',
  );
});

test('variable windowing clamps past the end and handles empty', () => {
  const offsets = buildOffsets([44, 44, 44]);
  const w = variableWindowSlice(offsets, 99999, 400, 2);
  assert.ok(w.end <= 3 && w.start <= w.end);
  assert.equal(w.padBottom, 0);
  assert.deepEqual(
    variableWindowSlice(buildOffsets([]), 0, 400),
    { start: 0, end: 0, padTop: 0, padBottom: 0 },
  );
});

test('row keys are unique even when two events are identical', () => {
  const next = keyDisambiguator();
  const base = '123|kill|A killed B|100, 200';
  const keys = [next(base), next(base), next(base), next('other')];
  assert.equal(new Set(keys).size, 4, 'keys collided');
  assert.equal(keys[0], base, 'the first occurrence keeps the page key unchanged');
  for (const k of keys.slice(0, 3)) assert.equal(baseKeyOf(k), base, 'base key not recoverable');
  assert.equal(baseKeyOf('other'), 'other');
});

test('the separator cannot be produced by ordinary text', () => {
  const next = keyDisambiguator();
  // titles with pipes, hashes and unicode must still round-trip
  const odd = '9|gmPing|GM ping by #1 | "x" • ü|0, 0';
  assert.equal(baseKeyOf(next(odd)), odd);
  assert.equal(baseKeyOf(next(odd)), odd);
});

test('adjacent repeats collapse into one row with a count', () => {
  const items = [
    { t: 1000, k: 'zombie' }, { t: 2000, k: 'zombie' }, { t: 3000, k: 'zombie' },
    { t: 4000, k: 'join' },
    { t: 5000, k: 'zombie' },
  ];
  const rows = buildFeedRows(items, (i) => i.t, (_i, idx) => `k${idx}`, 60_000, true, (i) => i.k);
  const itemRows = rows.filter((r) => r.kind === 'item');
  // newest first: zombie(5000), join(4000), then the run of three zombies
  assert.equal(itemRows.length, 3, 'three visible rows');
  assert.deepEqual(itemRows.map((r) => r.repeat), [1, 1, 3]);
  const group = rows.find((r) => r.kind === 'group');
  assert.equal(group.count, 5, 'the header still counts every underlying event');
});

test('collapsing never crosses a bucket boundary', () => {
  const items = [{ t: 59_000, k: 'a' }, { t: 61_000, k: 'a' }];
  const rows = buildFeedRows(items, (i) => i.t, (_i, idx) => `k${idx}`, 60_000, true, (i) => i.k);
  const itemRows = rows.filter((r) => r.kind === 'item');
  assert.equal(itemRows.length, 2, 'same key, different minute -> two rows');
  assert.deepEqual(itemRows.map((r) => r.repeat), [1, 1]);
});

test('without a collapse key every event keeps its own row', () => {
  const items = [{ t: 1, k: 'a' }, { t: 2, k: 'a' }];
  const rows = buildFeedRows(items, (i) => i.t, (_i, idx) => `k${idx}`, 60_000, true);
  assert.equal(rows.filter((r) => r.kind === 'item').length, 2);
  assert.deepEqual(rows.filter((r) => r.kind === 'item').map((r) => r.repeat), [1, 1]);
});

test('a collapsed row keeps the representative event and its timestamp', () => {
  const items = [{ t: 1000, k: 'z', id: 'old' }, { t: 2000, k: 'z', id: 'new' }];
  const rows = buildFeedRows(items, (i) => i.t, (i) => i.id, 60_000, true, (i) => i.k);
  const row = rows.find((r) => r.kind === 'item');
  assert.equal(row.repeat, 2);
  assert.equal(row.item.id, 'new', 'newest-first keeps the newest as the representative');
  assert.equal(row.tsMs, 2000);
  assert.equal(row.key, 'new', 'the key is the representative event, so selection is stable');
});

console.log(`\n${passed} passed${process.exitCode ? ' (with failures)' : ''}`);
