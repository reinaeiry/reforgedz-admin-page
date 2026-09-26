// Pure helpers for the replay timeline. Kept separate from the component so the
// awkward parts - tick ladders, cursor-anchored zoom, pixel-space clustering -
// are unit-testable without a DOM (scripts/test-timeline.mjs).

export type Span = { start: number; end: number };

export const MIN_SPAN_MS = 2_000; // deepest zoom: 2s across the whole track
const MS = 1, S = 1000, M = 60 * S, H = 60 * M, D = 24 * H;

/** Ladder of "round" tick intervals, coarsest choice that still leaves >= minPx between ticks. */
const TICK_LADDER = [
  100 * MS, 250 * MS, 500 * MS,
  1 * S, 2 * S, 5 * S, 10 * S, 15 * S, 30 * S,
  1 * M, 2 * M, 5 * M, 10 * M, 15 * M, 30 * M,
  1 * H, 2 * H, 3 * H, 6 * H, 12 * H,
  1 * D, 2 * D, 7 * D,
];

export function chooseTickStep(spanMs: number, widthPx: number, minPx = 72): number {
  const want = (Math.max(1, spanMs) / Math.max(1, widthPx)) * minPx;
  for (const step of TICK_LADDER) if (step >= want) return step;
  return TICK_LADDER[TICK_LADDER.length - 1];
}

export function clampSpan(view: Span, bounds: Span): Span {
  const boundSpan = Math.max(1, bounds.end - bounds.start);
  let span = Math.min(Math.max(MIN_SPAN_MS, view.end - view.start), boundSpan);
  let start = view.start;
  if (start < bounds.start) start = bounds.start;
  if (start + span > bounds.end) start = bounds.end - span;
  if (start < bounds.start) { start = bounds.start; span = Math.min(span, boundSpan); }
  return { start, end: start + span };
}

/**
 * Zoom keeping the time under the pointer pinned to the same pixel - the
 * property that makes DevTools/Perfetto zooming feel predictable. `factor` < 1
 * zooms in. `anchorRatio` is the pointer's 0..1 position across the track.
 */
export function zoomAt(view: Span, bounds: Span, factor: number, anchorRatio: number): Span {
  const span = view.end - view.start;
  const anchorTs = view.start + span * anchorRatio;
  const nextSpan = Math.min(Math.max(MIN_SPAN_MS, span * factor), Math.max(1, bounds.end - bounds.start));
  return clampSpan({ start: anchorTs - nextSpan * anchorRatio, end: anchorTs - nextSpan * anchorRatio + nextSpan }, bounds);
}

export function panBy(view: Span, bounds: Span, deltaMs: number): Span {
  return clampSpan({ start: view.start + deltaMs, end: view.end + deltaMs }, bounds);
}

/** Keep `ts` inside the view, nudging the window only when it would fall outside. */
export function scrollIntoView(view: Span, bounds: Span, ts: number, edgePad = 0.12): Span {
  const span = view.end - view.start;
  const pad = span * edgePad;
  if (ts >= view.start + pad && ts <= view.end - pad) return view;
  return clampSpan({ start: ts - span / 2, end: ts + span / 2 }, bounds);
}

export function tsToPx(ts: number, view: Span, width: number): number {
  return ((ts - view.start) / Math.max(1, view.end - view.start)) * width;
}

export function pxToTs(px: number, view: Span, width: number): number {
  return view.start + (px / Math.max(1, width)) * (view.end - view.start);
}

/**
 * Cluster by PIXEL distance, not by a percentage of the span: the old scrubber
 * clustered within 0.6% of the range, which is ~4.6 minutes across a 12h buffer,
 * so distinct events merged and the snap yanked the playhead minutes away.
 */
export function clusterByPixel<T extends { tsMs: number }>(
  items: T[], view: Span, width: number, gapPx = 10,
): { ts: number; px: number; items: T[] }[] {
  const out: { ts: number; px: number; items: T[] }[] = [];
  const sorted = items
    .filter((it) => it.tsMs >= view.start && it.tsMs <= view.end)
    .sort((a, b) => a.tsMs - b.tsMs);
  for (const it of sorted) {
    const px = tsToPx(it.tsMs, view, width);
    const last = out[out.length - 1];
    if (last && px - last.px < gapPx) {
      last.items.push(it);
      last.px = (last.px * (last.items.length - 1) + px) / last.items.length;
      last.ts = last.items[0].tsMs;
    } else {
      out.push({ ts: it.tsMs, px, items: [it] });
    }
  }
  return out;
}

/** Nearest event within `tolerancePx`; null when nothing is close enough. */
export function snapToEvent<T extends { tsMs: number }>(
  rawTs: number, items: T[], view: Span, width: number, tolerancePx = 8,
): T | null {
  const toleranceMs = (tolerancePx / Math.max(1, width)) * (view.end - view.start);
  let best: T | null = null;
  let bestDist = toleranceMs;
  for (const it of items) {
    const dist = Math.abs(it.tsMs - rawTs);
    if (dist <= bestDist) { best = it; bestDist = dist; }
  }
  return best;
}

/** Density histogram for the overview strip: one bucket per pixel column. */
export function densityBuckets<T extends { tsMs: number }>(
  items: T[], bounds: Span, width: number, bucketPx = 3,
): number[] {
  const buckets = new Array(Math.max(1, Math.ceil(width / bucketPx))).fill(0);
  const span = Math.max(1, bounds.end - bounds.start);
  for (const it of items) {
    if (it.tsMs < bounds.start || it.tsMs > bounds.end) continue;
    // An event exactly at bounds.end maps to buckets.length; clamp it into the
    // last column rather than dropping it - that event is the newest one, which
    // is the one that matters most while ingest is live.
    const idx = Math.min(buckets.length - 1, Math.floor(((it.tsMs - bounds.start) / span) * buckets.length));
    if (idx >= 0) buckets[idx] += 1;
  }
  return buckets;
}

export function formatElapsedMs(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

/** Tick label whose precision follows the zoom level. */
export function formatTick(date: Date, stepMs: number): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  if (stepMs >= D) return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  if (stepMs >= H) {
    const h = date.getHours();
    if (h === 0) return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    return `${pad(h)}:${pad(date.getMinutes())}`;
  }
  if (stepMs >= M) return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  if (stepMs >= S) return `${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  return `${pad(date.getSeconds())}.${String(Math.floor(date.getMilliseconds() / 100))}`;
}

/** Would a label drawn at `x` run past the right edge? Used to drop the last tick
 *  label rather than render it clipped ("04:3"). */
export function labelFits(x: number, textWidth: number, trackWidth: number, pad = 4): boolean {
  return x + textWidth + pad <= trackWidth;
}

/** First tick at or after `from`, aligned to local wall-clock boundaries. */
export function firstTickAfter(from: number, stepMs: number, tzOffsetMs: number): number {
  const shifted = from - tzOffsetMs;
  return Math.ceil(shifted / stepMs) * stepMs + tzOffsetMs;
}
