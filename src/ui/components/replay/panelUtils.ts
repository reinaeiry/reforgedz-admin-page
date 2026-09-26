// Shared, DOM-free helpers for the replay side panels (events + players).
// Kept pure so the fiddly parts - match ranking, time bucketing, windowing
// arithmetic - are unit-testable (scripts/test-panels.mjs).

/** Row height used for windowing. Touch gets taller rows via CSS; the windowing
 *  measures the real height at runtime and falls back to these. */
export const ROW_H = 44;
export const GROUP_H = 26;

// ── search ────────────────────────────────────────────────────────────────

/**
 * Rank a match so the obvious answer comes first: an exact hit beats a prefix,
 * a prefix beats a word start, a word start beats "somewhere in the middle".
 * Returns null when the text does not match at all.
 */
export function matchScore(text: string, query: string): number | null {
  if (!query) return 0;
  const t = text.toLowerCase();
  const q = query.toLowerCase();
  if (t === q) return 1000;
  if (t.startsWith(q)) return 800 - Math.min(99, t.length - q.length);
  const wordStart = new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(t);
  if (wordStart) return 600 - Math.min(99, t.length - q.length);
  const idx = t.indexOf(q);
  if (idx >= 0) return 400 - Math.min(99, idx);
  return null;
}

/** Best score across several fields; null when none match. */
export function bestScore(fields: (string | null | undefined)[], query: string): number | null {
  if (!query) return 0;
  let best: number | null = null;
  for (const f of fields) {
    if (!f) continue;
    const s = matchScore(f, query);
    if (s !== null && (best === null || s > best)) best = s;
  }
  return best;
}

// ── time bucketing ────────────────────────────────────────────────────────

/**
 * Bucket size for grouping a feed by time: small spans group by the minute,
 * long ones by the hour, so the headers stay useful instead of one per row (or
 * one for everything).
 */
export function chooseBucketMs(spanMs: number): number {
  if (spanMs <= 15 * 60_000) return 60_000;            // <= 15 min -> per minute
  if (spanMs <= 3 * 3_600_000) return 5 * 60_000;      // <= 3 h    -> 5 minutes
  if (spanMs <= 12 * 3_600_000) return 15 * 60_000;    // <= 12 h   -> 15 minutes
  return 3_600_000;                                     // otherwise -> hourly
}

export function bucketOf(tsMs: number, bucketMs: number): number {
  return Math.floor(tsMs / bucketMs) * bucketMs;
}

export type FeedRow<T> =
  | { kind: 'group'; key: string; bucketTs: number; count: number }
  | { kind: 'item'; key: string; item: T; tsMs: number };

/**
 * Flatten a chronological list into group headers + items. `newestFirst` walks
 * the feed backwards, which is how an event log reads, while keeping each
 * group's own items in that same order.
 */
export function buildFeedRows<T>(
  items: T[],
  getTs: (item: T) => number,
  getKey: (item: T, index: number) => string,
  bucketMs: number,
  newestFirst = true,
): FeedRow<T>[] {
  const sorted = items
    .map((item, index) => ({ item, index, tsMs: getTs(item) }))
    .sort((a, b) => (newestFirst ? b.tsMs - a.tsMs : a.tsMs - b.tsMs));

  const rows: FeedRow<T>[] = [];
  let currentBucket: number | null = null;
  let groupRowIndex = -1;
  for (const entry of sorted) {
    const bucket = bucketOf(entry.tsMs, bucketMs);
    if (bucket !== currentBucket) {
      currentBucket = bucket;
      groupRowIndex = rows.length;
      rows.push({ kind: 'group', key: `g${bucket}`, bucketTs: bucket, count: 0 });
    }
    const groupRow = rows[groupRowIndex];
    if (groupRow && groupRow.kind === 'group') groupRow.count += 1;
    rows.push({ kind: 'item', key: getKey(entry.item, entry.index), item: entry.item, tsMs: entry.tsMs });
  }
  return rows;
}

// ── windowing ─────────────────────────────────────────────────────────────

/**
 * Which slice of a uniform-height list to render for a given scroll position.
 * `overscan` rows either side keep scrolling from flashing blank. Rendering a
 * few hundred event cards was the panel's own contribution to a laggy page.
 */
export function windowSlice(
  total: number, rowHeight: number, scrollTop: number, viewportH: number, overscan = 6,
): { start: number; end: number; padTop: number; padBottom: number } {
  if (total <= 0 || rowHeight <= 0) return { start: 0, end: 0, padTop: 0, padBottom: 0 };
  const visible = Math.ceil(Math.max(0, viewportH) / rowHeight) + overscan * 2;
  // Clamp the start to the last row. Without this, a scroll position left over
  // from a longer list - which is exactly what happens when a filter shortens
  // it - puts start past end, and the panel renders nothing at all under a
  // full-height spacer.
  const maxStart = Math.max(0, total - 1);
  const start = Math.min(maxStart, Math.max(0, Math.floor(Math.max(0, scrollTop) / rowHeight) - overscan));
  const end = Math.min(total, start + visible);
  return {
    start,
    end,
    padTop: start * rowHeight,
    padBottom: Math.max(0, (total - end) * rowHeight),
  };
}

/** Index of the row closest to `tsMs` - what "where am I in this feed" means. */
export function indexNearestTs<T>(rows: FeedRow<T>[], tsMs: number): number {
  let best = -1;
  let bestDist = Infinity;
  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    if (row.kind !== 'item') continue;
    const dist = Math.abs(row.tsMs - tsMs);
    if (dist < bestDist) { bestDist = dist; best = i; }
  }
  return best;
}

/** Short, human relative time: "now", "12s", "4m", "2h 05m". */
export function formatSince(deltaMs: number): string {
  const s = Math.round(Math.abs(deltaMs) / 1000);
  if (s < 5) return 'now';
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  return `${h}h ${String(m % 60).padStart(2, '0')}m`;
}

/**
 * Windowing for rows of DIFFERENT heights (the feed mixes 26px group headers
 * with 44px event rows). `offsets` is a prefix-sum array of length n+1, so
 * offsets[i] is the top of row i and offsets[n] is the total height.
 */
export function buildOffsets(heights: number[]): number[] {
  const offsets = new Array(heights.length + 1);
  offsets[0] = 0;
  for (let i = 0; i < heights.length; i += 1) offsets[i + 1] = offsets[i] + heights[i];
  return offsets;
}

/** Largest index whose top is <= `y` (binary search over the prefix sums). */
function rowAt(offsets: number[], y: number): number {
  let lo = 0;
  let hi = offsets.length - 2;
  if (hi < 0) return 0;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (offsets[mid] <= y) lo = mid; else hi = mid - 1;
  }
  return lo;
}

export function variableWindowSlice(
  offsets: number[], scrollTop: number, viewportH: number, overscan = 6,
): { start: number; end: number; padTop: number; padBottom: number } {
  const total = offsets.length - 1;
  if (total <= 0) return { start: 0, end: 0, padTop: 0, padBottom: 0 };
  const top = Math.max(0, scrollTop);
  const start = Math.max(0, rowAt(offsets, top) - overscan);
  const bottomRow = rowAt(offsets, top + Math.max(0, viewportH));
  const end = Math.min(total, bottomRow + 1 + overscan);
  return {
    start,
    end,
    padTop: offsets[start],
    padBottom: Math.max(0, offsets[total] - offsets[end]),
  };
}

// ── row keys ──────────────────────────────────────────────────────────────

/** Separator for the occurrence suffix: a control character, so it cannot occur
 *  inside an event title or subtitle. */
export const KEY_SEP = String.fromCharCode(31);

/**
 * Two events can share a timestamp, type, title AND subtitle, so the composite
 * key the page builds is not unique - React then duplicates or drops rows.
 * Returns a stateful function that appends an occurrence suffix to repeats.
 */
export function keyDisambiguator(): (base: string) => string {
  const seen = new Map<string, number>();
  return (base: string) => {
    const n = seen.get(base) || 0;
    seen.set(base, n + 1);
    return n === 0 ? base : `${base}${KEY_SEP}${n}`;
  };
}

/** The page's key, recovered from a disambiguated row key. */
export function baseKeyOf(key: string): string {
  return key.split(KEY_SEP)[0];
}
