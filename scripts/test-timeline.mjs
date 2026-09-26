// Unit tests for the replay timeline maths (src/ui/components/replay/timelineMath.ts).
// Run: node scripts/test-timeline.mjs        (Node strips the TS types on import)
import assert from 'node:assert/strict';
import {
  MIN_SPAN_MS, chooseTickStep, clampSpan, clusterByPixel, densityBuckets, firstTickAfter,
  formatElapsedMs, panBy, pxToTs, scrollIntoView, snapToEvent, tsToPx, zoomAt,
} from '../src/ui/components/replay/timelineMath.ts';

let passed = 0;
const test = (name, fn) => {
  try { fn(); passed += 1; console.log(`  ok  ${name}`); }
  catch (err) { console.error(`FAIL  ${name}\n      ${err.message}`); process.exitCode = 1; }
};

const H = 3_600_000;
const bounds = { start: 1_000_000, end: 1_000_000 + 12 * H };   // a 12h recording

console.log('timeline maths');

test('px/ts round-trip is stable across the track', () => {
  const view = { start: bounds.start, end: bounds.start + H };
  for (const px of [0, 1, 250, 499.5, 980]) {
    const ts = pxToTs(px, view, 980);
    assert.ok(Math.abs(tsToPx(ts, view, 980) - px) < 1e-6, `px ${px} did not round-trip`);
  }
});

test('zoom keeps the time under the cursor pinned to the same pixel', () => {
  const view = { start: bounds.start, end: bounds.end };
  const width = 1000;
  for (const anchor of [0, 0.25, 0.5, 0.83, 1]) {
    const anchorTs = pxToTs(anchor * width, view, width);
    const zoomed = zoomAt(view, bounds, 0.5, anchor);
    const afterPx = tsToPx(anchorTs, zoomed, width);
    // clamping at the very edges can shift by a pixel; centre must be exact
    assert.ok(Math.abs(afterPx - anchor * width) < 1.5, `anchor ${anchor} drifted to ${afterPx}`);
  }
});

test('zoom never escapes the bounds or the minimum span', () => {
  let view = { start: bounds.start, end: bounds.end };
  for (let i = 0; i < 40; i += 1) view = zoomAt(view, bounds, 0.5, 0.5);
  assert.ok(view.end - view.start >= MIN_SPAN_MS - 1, 'zoomed past the floor');
  assert.ok(view.start >= bounds.start && view.end <= bounds.end, 'escaped bounds');
  for (let i = 0; i < 60; i += 1) view = zoomAt(view, bounds, 2, 0.5);
  assert.equal(view.start, bounds.start);
  assert.equal(view.end, bounds.end);
});

test('pan clamps at both ends without shrinking the window', () => {
  const view = { start: bounds.start + H, end: bounds.start + 2 * H };
  const span = view.end - view.start;
  const left = panBy(view, bounds, -999 * H);
  assert.equal(left.start, bounds.start);
  assert.equal(left.end - left.start, span);
  const right = panBy(view, bounds, 999 * H);
  assert.equal(right.end, bounds.end);
  assert.equal(right.end - right.start, span);
});

test('clampSpan copes with a window wider than the recording', () => {
  const out = clampSpan({ start: 0, end: 10 ** 12 }, bounds);
  assert.equal(out.start, bounds.start);
  assert.equal(out.end, bounds.end);
});

test('scrollIntoView only moves when the playhead is outside the pad', () => {
  const view = { start: bounds.start, end: bounds.start + H };
  const inside = scrollIntoView(view, bounds, bounds.start + H / 2);
  assert.deepEqual(inside, view, 'moved while the playhead was comfortably inside');
  const outside = scrollIntoView(view, bounds, bounds.start + 6 * H);
  assert.ok(outside.start < bounds.start + 6 * H && outside.end > bounds.start + 6 * H, 'playhead not brought into view');
  assert.equal(outside.end - outside.start, H, 'window span changed while scrolling');
});

test('tick step grows with the span and stays on round numbers', () => {
  assert.equal(chooseTickStep(60_000, 1000), 5_000);          // 1 min across 1000px
  assert.equal(chooseTickStep(12 * H, 1000), 3_600_000);      // 12h across 1000px
  assert.ok(chooseTickStep(10_000, 1000) < chooseTickStep(10 * H, 1000));
});

test('ticks align to local wall-clock boundaries', () => {
  const tz = -new Date().getTimezoneOffset() * 60_000;
  const step = 3_600_000;
  const t = firstTickAfter(Date.now(), step, tz);
  const d = new Date(t);
  assert.equal(d.getMinutes(), 0, 'hourly tick not on the hour');
  assert.equal(d.getSeconds(), 0);
});

test('clustering merges by pixel distance, not by a share of the span', () => {
  const view = { start: 0, end: 12 * H };
  const width = 1000;
  const msPerPx = (12 * H) / width;
  const events = [
    { tsMs: 0 },
    { tsMs: msPerPx * 2 },          // 2px away  -> merges
    { tsMs: msPerPx * 40 },         // 40px away -> separate
  ];
  const out = clusterByPixel(events, view, width, 10);
  assert.equal(out.length, 2);
  assert.equal(out[0].items.length, 2);
  assert.equal(out[1].items.length, 1);
});

test('clustering ignores events outside the view', () => {
  const view = { start: 5 * H, end: 6 * H };
  const out = clusterByPixel([{ tsMs: 0 }, { tsMs: 5.5 * H }, { tsMs: 11 * H }], view, 800, 10);
  assert.equal(out.length, 1);
  assert.equal(out[0].items[0].tsMs, 5.5 * H);
});

test('snapping is bounded by pixels, so deep zoom stops yanking the playhead', () => {
  const width = 1000;
  const wide = { start: 0, end: 12 * H };
  const msPerPx = (12 * H) / width;
  const events = [{ tsMs: 6 * H }];
  // 4px away: snaps
  assert.ok(snapToEvent(6 * H + msPerPx * 4, events, wide, width, 8));
  // 40px away: does not
  assert.equal(snapToEvent(6 * H + msPerPx * 40, events, wide, width, 8), null);
  // zoomed right in, the same absolute offset is far away in pixels -> no snap
  const tight = { start: 6 * H - 5000, end: 6 * H + 5000 };
  assert.equal(snapToEvent(6 * H + msPerPx * 4, events, tight, width, 8), null);
});

test('density buckets land in the right columns and count everything', () => {
  const out = densityBuckets([{ tsMs: bounds.start }, { tsMs: bounds.end }, { tsMs: bounds.start + 6 * H }], bounds, 300, 3);
  assert.equal(out.reduce((a, b) => a + b, 0), 3);
  assert.equal(out[0], 1, 'first event not in the first column');
  assert.ok(out[Math.floor(out.length / 2)] >= 1, 'midpoint event missing');
});

test('elapsed formatting pads and floors', () => {
  assert.equal(formatElapsedMs(0), '00:00:00');
  assert.equal(formatElapsedMs(61_999), '00:01:01');
  assert.equal(formatElapsedMs(12 * H), '12:00:00');
  assert.equal(formatElapsedMs(-5), '00:00:00');
});

console.log(`\n${passed} passed${process.exitCode ? ' (with failures)' : ''}`);
