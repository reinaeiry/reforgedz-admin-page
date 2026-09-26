import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  MIN_SPAN_MS, chooseTickStep, clampSpan, clusterByPixel, densityBuckets, firstTickAfter,
  formatElapsedMs, formatTick, labelFits, panBy, pxToTs, scrollIntoView, snapToEvent, tsToPx, zoomAt,
  type Span,
} from './timelineMath';

// Structurally identical to ReplayToolPage.tsx's ParsedEvent (defined inside
// that component, not exported) - duplicated rather than hoisted/shared, same
// small-per-file-type convention this codebase already uses elsewhere
// (e.g. replaySeverityBadgeClass is duplicated rather than imported).
export type TimelineEvent = {
  tsMs: number;
  type: 'kill' | 'death' | 'aiKill' | 'join' | 'disconnect' | 'restart' | 'gmPing';
  title: string;
  subtitle: string;
  focusPos: { x: number; y: number; z: number } | null;
  focusPlayerId: number | null;
  playerIds: number[];
};

const TYPE_COLOR: Record<TimelineEvent['type'], string> = {
  kill: 'rgba(255,74,74,0.95)',
  death: 'rgba(255,74,74,0.95)',
  aiKill: 'rgba(255,140,74,0.95)',
  restart: 'rgba(255,217,102,0.95)',
  join: 'rgba(183,247,200,0.95)',
  disconnect: 'rgba(120,170,140,0.95)',
  gmPing: 'rgba(120,200,255,0.95)',
};
const TYPE_LABEL: Record<TimelineEvent['type'], string> = {
  kill: 'Kills', death: 'Deaths', aiKill: 'AI kills', join: 'Joins',
  disconnect: 'Disconnects', restart: 'Restarts', gmPing: 'GM pings',
};
const ALL_TYPES: TimelineEvent['type'][] = ['kill', 'death', 'aiKill', 'join', 'disconnect', 'restart', 'gmPing'];

const DETAIL_H = 58;      // css px: ruler + marker lane + scrub lane
const OVERVIEW_H = 34;
const PARENT_COMMIT_MS = 70; // during a drag, seek the (heavy) page at most ~14x/s

type Props = {
  scrubber: { min: number; max: number; value: number; disabled: boolean };
  range: { minTsMs: number | null; maxTsMs: number | null };
  isPlaying: boolean;
  setIsPlaying: (fn: boolean | ((prev: boolean) => boolean)) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (v: number) => void;
  live: boolean;
  setLive: (v: boolean) => void;
  setCurrentTsMs: (v: number) => void;
  allEvents: TimelineEvent[]; // full, uncapped - density, prev/next-event
  eventDots: TimelineEvent[]; // capped/downsampled - the rendered marker lane
  wallClockAnchor: { tsMs: number; receivedAt: number } | null;
  formatWallClock: ((tsMs: number) => string) | null;
  onJumpToEvent: (ev: TimelineEvent) => void;
};

// Rewritten 2026-09-26. The previous scrubber was an <input type="range"> whose
// min/max were absolute timestamps, so one pixel covered ~47s of a 12h buffer
// (arrow keys, conversely, moved 1ms) - pinpointing a moment was impossible by
// construction. Worse, zoom was derived from the playhead (window = value +/-
// half), so the window re-centred on every change and the thumb sprang back to
// the middle mid-drag. This version separates the VIEW (an independent
// start/end window you pan and zoom) from the PLAYHEAD, renders to canvas, and
// drives everything through Pointer Events so mouse, pen and touch share one
// path. Precision now comes from four independent routes: zoom in as far as 2s
// across the track, snap to markers (pixel-based, Alt to bypass), step by
// keyboard, or type an exact time.
export function ReplayTimeline({
  scrubber, range, isPlaying, setIsPlaying, playbackSpeed, setPlaybackSpeed, live, setLive,
  setCurrentTsMs, allEvents, eventDots, wallClockAnchor, formatWallClock, onJumpToEvent,
}: Props) {
  const bounds: Span = useMemo(
    () => ({ start: scrubber.min, end: Math.max(scrubber.min + 1, scrubber.max) }),
    [scrubber.min, scrubber.max],
  );

  const [view, setView] = useState<Span>(bounds);
  const [detailW, setDetailW] = useState(0);
  const [overviewW, setOverviewW] = useState(0);
  const [hoverTs, setHoverTs] = useState<number | null>(null);
  const [dragTs, setDragTs] = useState<number | null>(null);  // local playhead while scrubbing
  const [touchScrub, setTouchScrub] = useState(false);        // finger-friendly readout
  const [typeFilter, setTypeFilter] = useState<Set<TimelineEvent['type']>>(new Set());
  const [popover, setPopover] = useState<null | { px: number; events: TimelineEvent[] }>(null);
  const [goToOpen, setGoToOpen] = useState(false);
  // Collapsed = clock + transport + scrub track only. On a phone the full sheet
  // covers most of the map, which is the thing being reviewed.
  const [compact, setCompact] = useState(false);

  const detailRef = useRef<HTMLCanvasElement | null>(null);
  const overviewRef = useRef<HTMLCanvasElement | null>(null);
  const lastCommitRef = useRef(0);
  const commitTimerRef = useRef<number | null>(null);
  const pointersRef = useRef(new Map<number, { x: number; y: number }>());
  const pinchRef = useRef<null | { startSpan: number; startDistPx: number; anchorRatio: number }>(null);
  const modeRef = useRef<'idle' | 'scrub' | 'pan' | 'pinch' | 'ovWindow' | 'ovEdgeL' | 'ovEdgeR'>('idle');
  const panStartRef = useRef<{ px: number; view: Span } | null>(null);
  // Pressing ON the playhead keeps the grab offset (so it does not jump under
  // the finger); pressing anywhere else seeks straight to that point.
  const grabOffsetRef = useRef(0);

  const playheadTs = dragTs !== null ? dragTs : scrubber.value;
  const disabled = scrubber.disabled;

  // ── data ────────────────────────────────────────────────────────────────
  const filteredAll = useMemo(
    () => (typeFilter.size ? allEvents.filter((e) => typeFilter.has(e.type)) : allEvents),
    [allEvents, typeFilter],
  );
  const filteredDots = useMemo(
    () => (typeFilter.size ? eventDots.filter((e) => typeFilter.has(e.type)) : eventDots),
    [eventDots, typeFilter],
  );
  const visibleTypes = useMemo(
    () => new Set(ALL_TYPES.filter((t) => allEvents.some((e) => e.type === t))),
    [allEvents],
  );
  const clusters = useMemo(
    () => (detailW > 0 ? clusterByPixel(filteredDots, view, detailW, 11) : []),
    [filteredDots, view, detailW],
  );

  // ── view lifecycle ──────────────────────────────────────────────────────
  // Re-clamp when the loaded range grows (live ingest) or the server changes.
  const prevBoundsRef = useRef(bounds);
  useEffect(() => {
    const prev = prevBoundsRef.current;
    prevBoundsRef.current = bounds;
    setView((v) => {
      const wasFull = v.end - v.start >= (prev.end - prev.start) - 1;
      if (wasFull) return { ...bounds };                 // stay "showing everything"
      if (v.start < bounds.start || v.end > bounds.end) return clampSpan(v, bounds);
      return v;
    });
  }, [bounds]);

  // Live mode always shows the leading edge.
  useEffect(() => {
    if (!live) return;
    setView((v) => scrollIntoView(v, bounds, bounds.end, 0.02));
  }, [live, bounds]);

  // Keep the playhead on screen when the page moves it (event list, search, playback).
  useEffect(() => {
    if (dragTs !== null || disabled) return;
    setView((v) => scrollIntoView(v, bounds, scrubber.value));
  }, [scrubber.value, bounds, dragTs, disabled]);

  // ── measurement ─────────────────────────────────────────────────────────
  useLayoutEffect(() => {
    const el = detailRef.current, ov = overviewRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setDetailW(el.clientWidth);
      if (ov) setOverviewW(ov.clientWidth);
    });
    ro.observe(el);
    if (ov) ro.observe(ov);
    setDetailW(el.clientWidth);
    if (ov) setOverviewW(ov.clientWidth);
    return () => ro.disconnect();
  }, []);

  // ── seeking ─────────────────────────────────────────────────────────────
  const commitToParent = useCallback((ts: number, immediate: boolean) => {
    if (commitTimerRef.current !== null) {
      window.clearTimeout(commitTimerRef.current);
      commitTimerRef.current = null;
    }
    const now = Date.now();
    if (immediate || now - lastCommitRef.current >= PARENT_COMMIT_MS) {
      lastCommitRef.current = now;
      setCurrentTsMs(ts);
      return;
    }
    // Trailing commit so the final position always lands even if the drag stops
    // between throttle windows.
    commitTimerRef.current = window.setTimeout(() => {
      lastCommitRef.current = Date.now();
      commitTimerRef.current = null;
      setCurrentTsMs(ts);
    }, PARENT_COMMIT_MS - (now - lastCommitRef.current));
  }, [setCurrentTsMs]);

  const seekTo = useCallback((ts: number, opts: { snap?: boolean; immediate?: boolean; coarse?: boolean } = {}) => {
    const clamped = Math.min(bounds.end, Math.max(bounds.start, ts));
    let next = clamped;
    if (opts.snap !== false && detailW > 0) {
      // A fingertip is far less precise than a cursor, so it gets a wider catch.
      const hit = snapToEvent(clamped, filteredDots, view, detailW, opts.coarse ? 14 : 8);
      if (hit) next = hit.tsMs;
    }
    setDragTs(next);
    commitToParent(next, opts.immediate === true);
    return next;
  }, [bounds, detailW, filteredDots, view, commitToParent]);

  const stopFollowing = useCallback(() => {
    if (live) setLive(false);
    if (isPlaying) setIsPlaying(false);
  }, [live, isPlaying, setLive, setIsPlaying]);

  // ── drawing ─────────────────────────────────────────────────────────────
  const drawDetail = useCallback(() => {
    const cv = detailRef.current;
    if (!cv || detailW <= 0) return;
    const dpr = Math.min(3, window.devicePixelRatio || 1);
    if (cv.width !== Math.round(detailW * dpr) || cv.height !== Math.round(DETAIL_H * dpr)) {
      cv.width = Math.round(detailW * dpr);
      cv.height = Math.round(DETAIL_H * dpr);
    }
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, detailW, DETAIL_H);

    const rulerY = 14, laneY = 30, barY = 44;

    // ruler
    const step = chooseTickStep(view.end - view.start, detailW);
    const tzOffsetMs = -new Date().getTimezoneOffset() * 60_000;
    const toWall = (ts: number) => (wallClockAnchor ? wallClockAnchor.receivedAt + (ts - wallClockAnchor.tsMs) : ts);
    ctx.font = '10px ui-sans-serif, system-ui, sans-serif';
    ctx.textBaseline = 'alphabetic';
    const firstWall = firstTickAfter(toWall(view.start), step, tzOffsetMs);
    for (let wall = firstWall; ; wall += step) {
      const ts = wallClockAnchor ? wall - (wallClockAnchor.receivedAt - wallClockAnchor.tsMs) : wall;
      if (ts > view.end) break;
      const x = Math.round(tsToPx(ts, view, detailW)) + 0.5;
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.beginPath(); ctx.moveTo(x, rulerY); ctx.lineTo(x, DETAIL_H - 4); ctx.stroke();
      const text = formatTick(new Date(wall), step);
      if (labelFits(x + 3, ctx.measureText(text).width, detailW)) {
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fillText(text, x + 3, 10);
      }
    }

    // marker lane
    for (const c of clusters) {
      const x = c.px;
      const type = c.items[0].type;
      ctx.fillStyle = TYPE_COLOR[type];
      const r = c.items.length > 1 ? 5 : 3.5;
      ctx.beginPath(); ctx.arc(x, laneY, r, 0, Math.PI * 2); ctx.fill();
      if (c.items.length > 1) {
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.font = '8px ui-sans-serif, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(String(Math.min(99, c.items.length)), x, laneY + 3);
        ctx.textAlign = 'left';
        ctx.font = '10px ui-sans-serif, system-ui, sans-serif';
      }
    }

    // scrub bar
    ctx.fillStyle = 'rgba(255,255,255,0.10)';
    ctx.fillRect(0, barY, detailW, 4);
    const headX = tsToPx(playheadTs, view, detailW);
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    ctx.fillRect(0, barY, Math.max(0, headX), 4);

    // hover guide
    if (hoverTs !== null && !disabled) {
      const hx = Math.round(tsToPx(hoverTs, view, detailW)) + 0.5;
      ctx.strokeStyle = 'rgba(255,255,255,0.28)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(hx, rulerY); ctx.lineTo(hx, DETAIL_H); ctx.stroke();
      ctx.setLineDash([]);
    }

    // playhead - or, when the view has been panned away from it, an arrow at
    // the edge pointing the way back (the view is deliberately independent, so
    // this is a normal state, not an error)
    if (headX < 0 || headX > detailW) {
      const atLeft = headX < 0;
      const x = atLeft ? 8 : detailW - 8;
      ctx.fillStyle = 'rgba(255,255,255,0.55)';
      ctx.beginPath();
      ctx.moveTo(atLeft ? x - 6 : x + 6, barY + 2);
      ctx.lineTo(x + (atLeft ? 4 : -4), barY - 4);
      ctx.lineTo(x + (atLeft ? 4 : -4), barY + 8);
      ctx.closePath();
      ctx.fill();
    }
    if (headX >= -2 && headX <= detailW + 2) {
      const x = Math.round(headX) + 0.5;
      ctx.strokeStyle = live ? 'rgba(120,200,255,0.95)' : 'rgba(255,255,255,0.95)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x, rulerY - 2); ctx.lineTo(x, DETAIL_H); ctx.stroke();
      ctx.lineWidth = 1;
      ctx.fillStyle = live ? 'rgba(120,200,255,0.95)' : 'rgba(255,255,255,0.95)';
      ctx.beginPath();
      ctx.moveTo(x - 6, rulerY - 8); ctx.lineTo(x + 6, rulerY - 8); ctx.lineTo(x, rulerY + 1);
      ctx.closePath(); ctx.fill();
    }
  }, [detailW, view, clusters, playheadTs, hoverTs, disabled, live, wallClockAnchor]);

  const drawOverview = useCallback(() => {
    const cv = overviewRef.current;
    if (!cv || overviewW <= 0) return;
    const dpr = Math.min(3, window.devicePixelRatio || 1);
    if (cv.width !== Math.round(overviewW * dpr) || cv.height !== Math.round(OVERVIEW_H * dpr)) {
      cv.width = Math.round(overviewW * dpr);
      cv.height = Math.round(OVERVIEW_H * dpr);
    }
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, overviewW, OVERVIEW_H);

    // density of ALL events across the whole recording
    const bucketPx = 3;
    const buckets = densityBuckets(filteredAll, bounds, overviewW, bucketPx);
    const peak = buckets.reduce((m, v) => (v > m ? v : m), 0) || 1;
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    buckets.forEach((count, i) => {
      if (!count) return;
      const h = Math.max(2, (count / peak) * (OVERVIEW_H - 8));
      ctx.fillRect(i * bucketPx, OVERVIEW_H - 4 - h, bucketPx - 1, h);
    });

    // the window currently shown in the detail track
    const x0 = tsToPx(view.start, bounds, overviewW);
    const x1 = tsToPx(view.end, bounds, overviewW);
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(0, 0, Math.max(0, x0), OVERVIEW_H);
    ctx.fillRect(Math.min(overviewW, x1), 0, overviewW, OVERVIEW_H);
    ctx.strokeStyle = 'rgba(255,255,255,0.65)';
    ctx.strokeRect(Math.round(x0) + 0.5, 0.5, Math.max(2, Math.round(x1 - x0)), OVERVIEW_H - 1);
    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    ctx.fillRect(Math.round(x0) - 1, 0, 3, OVERVIEW_H);
    ctx.fillRect(Math.round(x1) - 2, 0, 3, OVERVIEW_H);

    // playhead
    const hx = Math.round(tsToPx(playheadTs, bounds, overviewW)) + 0.5;
    ctx.strokeStyle = live ? 'rgba(120,200,255,0.95)' : 'rgba(255,90,90,0.95)';
    ctx.beginPath(); ctx.moveTo(hx, 0); ctx.lineTo(hx, OVERVIEW_H); ctx.stroke();
  }, [overviewW, filteredAll, bounds, view, playheadTs, live]);

  useEffect(() => { drawDetail(); }, [drawDetail]);
  useEffect(() => { drawOverview(); }, [drawOverview]);

  // ── detail track pointer handling ───────────────────────────────────────
  const localX = (el: HTMLElement, clientX: number) => clientX - el.getBoundingClientRect().left;

  // Pointer capture throws (NotFoundError / InvalidPointerId) if the pointer has
  // already been released - e.g. a touch cancelled by the browser's own gesture
  // handling. An exception here would abort the handler mid-drag, so both calls
  // are guarded.
  const capture = (el: Element, id: number) => { try { (el as HTMLElement).setPointerCapture(id); } catch { /* fine */ } };
  const release = (el: Element, id: number) => { try { (el as HTMLElement).releasePointerCapture(id); } catch { /* fine */ } };

  function onDetailPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (disabled) return;
    const el = e.currentTarget;
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointersRef.current.size === 2) {
      // second finger: switch from scrubbing to pinch-zoom
      const pts = Array.from(pointersRef.current.values());
      const distPx = Math.abs(pts[0].x - pts[1].x) || 1;
      const midX = localX(el, (pts[0].x + pts[1].x) / 2);
      modeRef.current = 'pinch';
      pinchRef.current = {
        startSpan: view.end - view.start,
        startDistPx: distPx,
        anchorRatio: Math.min(1, Math.max(0, midX / Math.max(1, detailW))),
      };
      setDragTs(null);
      setTouchScrub(false);
      return;
    }

    capture(el, e.pointerId);
    if (e.button === 1 || e.shiftKey) {             // middle-drag / shift-drag pans
      modeRef.current = 'pan';
      panStartRef.current = { px: localX(el, e.clientX), view };
      return;
    }
    modeRef.current = 'scrub';
    setPopover(null);
    stopFollowing();
    const isTouch = e.pointerType === 'touch';
    if (isTouch) setTouchScrub(true);
    const x = localX(el, e.clientX);
    const headPx = tsToPx(playheadTs, view, detailW);
    const grabRadius = isTouch ? 22 : 10;
    if (Math.abs(x - headPx) <= grabRadius) {
      // hold the playhead where it is and carry the offset through the drag
      grabOffsetRef.current = playheadTs - pxToTs(x, view, detailW);
      setDragTs(playheadTs);
      return;
    }
    grabOffsetRef.current = 0;
    seekTo(pxToTs(x, view, detailW), { snap: !e.altKey, immediate: true, coarse: isTouch });
  }

  function onDetailPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    const el = e.currentTarget;
    if (pointersRef.current.has(e.pointerId)) pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (modeRef.current === 'pinch' && pinchRef.current && pointersRef.current.size >= 2) {
      const pts = Array.from(pointersRef.current.values());
      const distPx = Math.abs(pts[0].x - pts[1].x) || 1;
      const factor = pinchRef.current.startDistPx / distPx;
      const targetSpan = Math.max(MIN_SPAN_MS, pinchRef.current.startSpan * factor);
      setView((v) => zoomAt(v, bounds, targetSpan / Math.max(1, v.end - v.start), pinchRef.current!.anchorRatio));
      return;
    }
    if (modeRef.current === 'pan' && panStartRef.current) {
      const dxPx = localX(el, e.clientX) - panStartRef.current.px;
      const span = panStartRef.current.view.end - panStartRef.current.view.start;
      setView(clampSpan(panBy(panStartRef.current.view, bounds, -(dxPx / Math.max(1, detailW)) * span), bounds));
      return;
    }
    if (modeRef.current === 'scrub') {
      const ts = pxToTs(localX(el, e.clientX), view, detailW) + grabOffsetRef.current;
      seekTo(ts, { snap: !e.altKey, coarse: e.pointerType === 'touch' });
      return;
    }
    if (e.pointerType === 'mouse' && !disabled) setHoverTs(pxToTs(localX(el, e.clientX), view, detailW));
  }

  function endPointer(e: React.PointerEvent<HTMLCanvasElement>) {
    pointersRef.current.delete(e.pointerId);
    release(e.currentTarget, e.pointerId);
    if (modeRef.current === 'scrub' && dragTs !== null) commitToParent(dragTs, true);
    if (pointersRef.current.size === 0) {
      modeRef.current = 'idle';
      pinchRef.current = null;
      panStartRef.current = null;
      grabOffsetRef.current = 0;
      setDragTs(null);
      setTouchScrub(false);
    }
  }

  function onDetailClick(e: React.MouseEvent<HTMLCanvasElement>) {
    // A tap on a marker cluster opens the list (the touch equivalent of the
    // old hover tooltip, which no phone could ever show).
    if (disabled || detailW <= 0) return;
    const x = localX(e.currentTarget, e.clientX);
    const hit = clusters.find((c) => Math.abs(c.px - x) <= 9 && c.items.length > 1);
    if (hit) { setPopover({ px: hit.px, events: hit.items.slice(0, 8) }); return; }
    const single = clusters.find((c) => Math.abs(c.px - x) <= 9);
    if (single) { stopFollowing(); onJumpToEvent(single.items[0]); }
  }

  // Wheel must be non-passive to preventDefault, so it is attached manually.
  useEffect(() => {
    const el = detailRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (disabled) return;
      e.preventDefault();
      const ratio = Math.min(1, Math.max(0, localX(el, e.clientX) / Math.max(1, el.clientWidth)));
      if (e.shiftKey) {
        setView((v) => panBy(v, bounds, (e.deltaY / Math.max(1, el.clientWidth)) * (v.end - v.start)));
        return;
      }
      // ctrlKey = trackpad pinch; both paths zoom anchored at the cursor.
      const factor = Math.pow(1.0015, e.deltaY * (e.ctrlKey ? 2 : 1));
      setView((v) => zoomAt(v, bounds, factor, ratio));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [bounds, disabled]);

  // ── overview pointer handling ───────────────────────────────────────────
  function onOverviewPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (disabled || overviewW <= 0) return;
    const el = e.currentTarget;
    capture(el, e.pointerId);
    const x = localX(el, e.clientX);
    const x0 = tsToPx(view.start, bounds, overviewW);
    const x1 = tsToPx(view.end, bounds, overviewW);
    const EDGE = 12;
    if (Math.abs(x - x0) <= EDGE) modeRef.current = 'ovEdgeL';
    else if (Math.abs(x - x1) <= EDGE) modeRef.current = 'ovEdgeR';
    else if (x > x0 && x < x1) { modeRef.current = 'ovWindow'; panStartRef.current = { px: x, view }; }
    else {
      const span = view.end - view.start;
      const center = pxToTs(x, bounds, overviewW);
      setView(clampSpan({ start: center - span / 2, end: center + span / 2 }, bounds));
      modeRef.current = 'ovWindow';
      panStartRef.current = { px: x, view: clampSpan({ start: center - span / 2, end: center + span / 2 }, bounds) };
    }
  }

  function onOverviewPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (modeRef.current === 'idle' || overviewW <= 0) return;
    const x = localX(e.currentTarget, e.clientX);
    const ts = pxToTs(x, bounds, overviewW);
    if (modeRef.current === 'ovWindow' && panStartRef.current) {
      const dxPx = x - panStartRef.current.px;
      const span = panStartRef.current.view.end - panStartRef.current.view.start;
      const deltaMs = (dxPx / Math.max(1, overviewW)) * (bounds.end - bounds.start);
      setView(clampSpan({ start: panStartRef.current.view.start + deltaMs, end: panStartRef.current.view.start + deltaMs + span }, bounds));
    } else if (modeRef.current === 'ovEdgeL') {
      setView((v) => clampSpan({ start: Math.min(ts, v.end - MIN_SPAN_MS), end: v.end }, bounds));
    } else if (modeRef.current === 'ovEdgeR') {
      setView((v) => clampSpan({ start: v.start, end: Math.max(ts, v.start + MIN_SPAN_MS) }, bounds));
    }
  }

  function onOverviewPointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    release(e.currentTarget, e.pointerId);
    modeRef.current = 'idle';
    panStartRef.current = null;
  }

  // ── keyboard ────────────────────────────────────────────────────────────
  function nearestEvent(fromTsMs: number, direction: 1 | -1): TimelineEvent | null {
    const pool = filteredAll.length ? filteredAll : allEvents;
    let best: TimelineEvent | null = null;
    for (const ev of pool) {
      if (direction === 1 ? ev.tsMs <= fromTsMs : ev.tsMs >= fromTsMs) continue;
      if (!best || (direction === 1 ? ev.tsMs < best.tsMs : ev.tsMs > best.tsMs)) best = ev;
    }
    return best;
  }

  function onTrackKeyDown(e: React.KeyboardEvent) {
    if (disabled) return;
    const span = view.end - view.start;
    const fine = span / Math.max(1, detailW);            // exactly one pixel
    const coarse = span / 10;
    let handled = true;
    switch (e.key) {
      case 'ArrowLeft': case 'ArrowRight': {
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const stepMs = e.shiftKey ? coarse : e.altKey ? fine : Math.max(1000, fine * 10);
        stopFollowing();
        seekTo(playheadTs + dir * stepMs, { snap: false, immediate: true });
        break;
      }
      case 'Home': stopFollowing(); seekTo(bounds.start, { snap: false, immediate: true }); break;
      case 'End': stopFollowing(); seekTo(bounds.end, { snap: false, immediate: true }); break;
      case ',': case '.': {
        const ev = nearestEvent(playheadTs, e.key === '.' ? 1 : -1);
        if (ev) { stopFollowing(); onJumpToEvent(ev); }
        break;
      }
      case '+': case '=': setView((v) => zoomAt(v, bounds, 0.5, 0.5)); break;
      case '-': case '_': setView((v) => zoomAt(v, bounds, 2, 0.5)); break;
      case '0': setView({ ...bounds }); break;
      case ' ': if (live) setLive(false); setIsPlaying((p) => !p); break;
      default: handled = false;
    }
    if (handled) { e.preventDefault(); e.stopPropagation(); }
  }

  // ── precise "go to" ─────────────────────────────────────────────────────
  const wallToTs = (wallMs: number) => (wallClockAnchor ? wallMs - (wallClockAnchor.receivedAt - wallClockAnchor.tsMs) : wallMs);
  const tsToWall = (ts: number) => (wallClockAnchor ? wallClockAnchor.receivedAt + (ts - wallClockAnchor.tsMs) : ts);
  function localInputValue(ts: number): string {
    const d = new Date(tsToWall(ts));
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  const zoomLabel = useMemo(() => {
    const span = view.end - view.start;
    if (span >= (bounds.end - bounds.start) - 1) return 'Full';
    return formatElapsedMs(span).replace(/^00:/, '');
  }, [view, bounds]);

  return (
    <div className={`replayTimeline${touchScrub ? ' is-scrubbing' : ''}${compact ? ' is-compact' : ''}`}>
      <div className="replayTimeline-header">
        <div className="replayTimeline-readout">
          <div className="label">Replay time</div>
          <div className="replayTimeline-clock">
            {formatWallClock ? formatWallClock(playheadTs) : formatElapsedMs(playheadTs - bounds.start)}
          </div>
          <div className="muted replayTimeline-elapsed">
            +{formatElapsedMs(playheadTs - bounds.start)} of +{formatElapsedMs(bounds.end - bounds.start)}
          </div>
        </div>

        <div className="replayTimeline-transport">
          <button type="button" className="replayTimeline-btn" title="Previous event (,)"
            disabled={disabled}
            onClick={() => { const ev = nearestEvent(playheadTs, -1); if (ev) { stopFollowing(); onJumpToEvent(ev); } }}>
            ⏮
          </button>
          <button type="button" className="replayTimeline-btn replayTimeline-btn-primary" title="Play / pause (space)"
            disabled={disabled}
            onClick={() => { if (live) setLive(false); setIsPlaying((v) => !v); }}>
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <button type="button" className="replayTimeline-btn" title="Next event (.)"
            disabled={disabled}
            onClick={() => { const ev = nearestEvent(playheadTs, 1); if (ev) { stopFollowing(); onJumpToEvent(ev); } }}>
            ⏭
          </button>
          <select className="replayTimeline-select" value={String(playbackSpeed)}
            onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
            disabled={disabled} title="Playback speed" aria-label="Playback speed">
            <option value="0.25">0.25×</option>
            <option value="0.5">0.5×</option>
            <option value="1">1×</option>
            <option value="2">2×</option>
            <option value="4">4×</option>
          </select>
          <button type="button"
            className={`replayTimeline-btn replayTimeline-live${live ? ' is-on' : ''}`}
            onClick={() => { const next = !live; setLive(next); if (next) setIsPlaying(false); }}
            title="Follow the live edge">
            ● LIVE
          </button>
          {playheadTs < view.start || playheadTs > view.end ? (
            <button type="button" className="replayTimeline-btn replayTimeline-btn-sm replayTimeline-btn-accent"
              onClick={() => setView((v) => scrollIntoView(v, bounds, playheadTs, 0.4))}
              title="Bring the view back to the playhead">↵ Playhead</button>
          ) : null}
          <button type="button" className="replayTimeline-btn replayTimeline-btn-sm"
            onClick={() => setCompact((v) => !v)}
            aria-expanded={!compact}
            title={compact ? 'Show filters and overview' : 'Collapse to the bar'}>
            {compact ? '▴' : '▾'}
          </button>
        </div>
      </div>

      <div className="replayTimeline-tools">
        <div className="replayTimeline-chips">
          {ALL_TYPES.filter((t) => visibleTypes.has(t)).map((t) => (
            <button key={t} type="button"
              className={typeFilter.size === 0 || typeFilter.has(t) ? 'replayTimeline-chip replayTimeline-chip-on' : 'replayTimeline-chip'}
              style={{ borderColor: TYPE_COLOR[t] }}
              aria-pressed={typeFilter.size === 0 || typeFilter.has(t)}
              onClick={() => setTypeFilter((prev) => {
                const next = new Set(prev);
                if (next.has(t)) next.delete(t); else next.add(t);
                return next;
              })}>
              <span className="replayTimeline-chipDot" style={{ background: TYPE_COLOR[t] }} />
              {TYPE_LABEL[t]}
            </button>
          ))}
          {typeFilter.size > 0 ? (
            <button type="button" className="replayTimeline-chip" onClick={() => setTypeFilter(new Set())}>Clear</button>
          ) : null}
        </div>

        <div className="replayTimeline-zoomGroup">
          <button type="button" className="replayTimeline-btn replayTimeline-btn-sm" title="Zoom out (-)"
            disabled={disabled} onClick={() => setView((v) => zoomAt(v, bounds, 2, 0.5))}>−</button>
          <span className="replayTimeline-zoomLabel" title="Visible window">{zoomLabel}</span>
          <button type="button" className="replayTimeline-btn replayTimeline-btn-sm" title="Zoom in (+)"
            disabled={disabled} onClick={() => setView((v) => zoomAt(v, bounds, 0.5, 0.5))}>+</button>
          <button type="button" className="replayTimeline-btn replayTimeline-btn-sm" title="Show the whole recording (0)"
            disabled={disabled} onClick={() => setView({ ...bounds })}>Fit</button>
          <button type="button" className="replayTimeline-btn replayTimeline-btn-sm"
            disabled={disabled} onClick={() => setGoToOpen((v) => !v)} title="Jump to an exact time">Go to…</button>
        </div>
      </div>

      {goToOpen ? (
        <div className="replayTimeline-goto">
          <input type="datetime-local" step="1" className="replayTimeline-gotoInput"
            defaultValue={localInputValue(playheadTs)}
            onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur(); }}
            onChange={(e) => {
              const ms = new Date(e.target.value).getTime();
              if (!Number.isFinite(ms)) return;
              stopFollowing();
              const ts = Math.min(bounds.end, Math.max(bounds.start, wallToTs(ms)));
              setView((v) => scrollIntoView(v, bounds, ts, 0.4));
              seekTo(ts, { snap: false, immediate: true });
              setDragTs(null);
            }} />
          <span className="muted" style={{ fontSize: 11 }}>
            {wallClockAnchor ? 'Your local clock' : 'Relative to recording start'}
          </span>
        </div>
      ) : null}

      {/* Overview: the whole recording, with event density and the window the
          detail track is showing. Drag the window, drag its edges to zoom. */}
      <canvas
        ref={overviewRef}
        className="replayTimeline-overview"
        style={{ height: OVERVIEW_H }}
        onPointerDown={onOverviewPointerDown}
        onPointerMove={onOverviewPointerMove}
        onPointerUp={onOverviewPointerUp}
        onPointerCancel={onOverviewPointerUp}
        aria-hidden="true"
      />

      <div className="replayTimeline-detailWrap">
        <canvas
          ref={detailRef}
          className="replayTimeline-detail"
          style={{ height: DETAIL_H }}
          tabIndex={disabled ? -1 : 0}
          role="slider"
          aria-label="Replay position"
          aria-valuemin={bounds.start}
          aria-valuemax={bounds.end}
          aria-valuenow={playheadTs}
          aria-valuetext={formatWallClock ? formatWallClock(playheadTs) : formatElapsedMs(playheadTs - bounds.start)}
          onPointerDown={onDetailPointerDown}
          onPointerMove={onDetailPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
          onPointerLeave={() => setHoverTs(null)}
          onClick={onDetailClick}
          onKeyDown={onTrackKeyDown}
          onDoubleClick={(e) => {
            const ratio = localX(e.currentTarget, e.clientX) / Math.max(1, detailW);
            setView((v) => zoomAt(v, bounds, 0.5, ratio));
          }}
        />

        {/* Floating readout while dragging: sits well above the contact point so
            a finger never covers the value it is trying to place. */}
        {dragTs !== null && detailW > 0 ? (
          <div className="replayTimeline-scrubReadout"
            style={{ left: `${Math.min(100, Math.max(0, (tsToPx(dragTs, view, detailW) / detailW) * 100))}%` }}>
            {formatWallClock ? formatWallClock(dragTs) : formatElapsedMs(dragTs - bounds.start)}
          </div>
        ) : null}

        {hoverTs !== null && dragTs === null && detailW > 0 ? (
          <div className="replayTimeline-hoverReadout"
            style={{ left: `${Math.min(100, Math.max(0, (tsToPx(hoverTs, view, detailW) / detailW) * 100))}%` }}>
            {formatWallClock ? formatWallClock(hoverTs) : formatElapsedMs(hoverTs - bounds.start)}
          </div>
        ) : null}

        {popover ? (
          <div className="replayTimeline-popover"
            style={{ left: `${Math.min(100, Math.max(0, (popover.px / Math.max(1, detailW)) * 100))}%` }}>
            <div className="replayTimeline-popoverHead">
              <span>{popover.events.length} events</span>
              <button type="button" className="replayTimeline-btn replayTimeline-btn-sm"
                onClick={() => setPopover(null)} aria-label="Close">✕</button>
            </div>
            {popover.events.map((ev, i) => (
              <button key={`${ev.tsMs}-${i}`} type="button" className="replayTimeline-popoverRow"
                onClick={() => { setPopover(null); stopFollowing(); onJumpToEvent(ev); }}>
                <span className="replayTimeline-chipDot" style={{ background: TYPE_COLOR[ev.type] }} />
                <span className="replayTimeline-popoverTitle">{ev.title}</span>
                <span className="muted">{formatWallClock ? formatWallClock(ev.tsMs) : formatElapsedMs(ev.tsMs - bounds.start)}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="replayTimeline-hint muted">
        Drag to scrub · wheel or pinch to zoom · shift-drag to pan · ←/→ step (alt = 1px, shift = 10%) · , . events
      </div>
    </div>
  );
}
