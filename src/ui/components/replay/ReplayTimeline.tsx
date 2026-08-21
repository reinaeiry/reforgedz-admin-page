import React, { useMemo, useState } from 'react';

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

function formatElapsedMs(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

const TYPE_COLOR: Record<TimelineEvent['type'], string> = {
  kill: 'rgba(255,74,74,0.95)',
  death: 'rgba(255,74,74,0.95)',
  aiKill: 'rgba(255,74,74,0.95)',
  restart: 'rgba(255,217,102,0.95)',
  join: 'rgba(183,247,200,0.95)',
  disconnect: 'rgba(183,247,200,0.95)',
  gmPing: 'rgba(183,247,200,0.95)',
};
const TYPE_LABEL: Record<TimelineEvent['type'], string> = {
  kill: 'Kills', death: 'Deaths', aiKill: 'AI kills', join: 'Joins',
  disconnect: 'Disconnects', restart: 'Restarts', gmPing: 'GM pings',
};
const ALL_TYPES: TimelineEvent['type'][] = ['kill', 'death', 'aiKill', 'join', 'disconnect', 'restart', 'gmPing'];

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

type Props = {
  scrubber: { min: number; max: number; value: number; disabled: boolean };
  range: { minTsMs: number | null; maxTsMs: number | null };
  isPlaying: boolean;
  setIsPlaying: (fn: boolean | ((prev: boolean) => boolean)) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (v: number) => void;
  live: boolean;
  setLive: (v: boolean) => void;
  scrubberZoom: number;
  setScrubberZoom: (v: number) => void;
  setCurrentTsMs: (v: number) => void;
  allEvents: TimelineEvent[]; // full, uncapped - used for day buckets and prev/next-event
  eventDots: TimelineEvent[]; // capped/downsampled - used for the rendered marker track
  wallClockAnchor: { tsMs: number; receivedAt: number } | null;
  formatWallClock: ((tsMs: number) => string) | null;
  onJumpToEvent: (ev: TimelineEvent) => void;
};

// The scrubber this replaces had two real, concrete bugs, not just a vague
// "hard to use" feel: the "Go to" control was <input type="time"> with no
// date component, so typing a time while browsing an older buffered day
// silently jumped you to *today* at that time; and there was no way to jump
// directly to the next/previous event or a specific day at all. This adds,
// in order: a day strip (fixes the date bug outright - clicking a day is
// unambiguous), a denser marker track with clustering + snap-to-marker, and
// prev/next-event buttons (the NVR "smart playback" pattern) - on top of the
// exact same state (scrubber/currentTsMs/eventDots/jumpToEventTs-equivalent)
// the old scrubber already used, not a new timeline model.
export function ReplayTimeline({
  scrubber, range, isPlaying, setIsPlaying, playbackSpeed, setPlaybackSpeed, live, setLive,
  scrubberZoom, setScrubberZoom, setCurrentTsMs, allEvents, eventDots,
  wallClockAnchor, formatWallClock, onJumpToEvent,
}: Props) {
  const [hovered, setHovered] = useState<null | { title: string; subtitle: string; leftPct: number; count: number }>(null);
  const [typeFilter, setTypeFilter] = useState<Set<TimelineEvent['type']>>(new Set());

  function toDate(tsMs: number): Date | null {
    if (!wallClockAnchor) return null;
    return new Date(wallClockAnchor.receivedAt + (tsMs - wallClockAnchor.tsMs));
  }

  const visibleTypes = useMemo(() => new Set(ALL_TYPES.filter((t) => allEvents.some((e) => e.type === t))), [allEvents]);

  function toggleType(t: TimelineEvent['type']) {
    setTypeFilter((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });
  }

  const filteredDots = typeFilter.size ? eventDots.filter((e) => typeFilter.has(e.type)) : eventDots;
  const filteredAll = typeFilter.size ? allEvents.filter((e) => typeFilter.has(e.type)) : allEvents;

  // One cell per calendar day the *absolute loaded* range spans (wall-clock,
  // via wallClockAnchor) - deliberately range.min/maxTsMs, NOT scrubber.min/
  // max, since scrubber narrows to the current zoomed window: using it here
  // would make the day strip shrink to near-nothing while zoomed in, exactly
  // when a quick day-jump is most useful. Not proportional to seconds-
  // covered - a plain segmented calendar strip is clearer for "jump to a
  // day" than a time-proportional one would be for a range that may start/
  // end mid-day.
  const days = useMemo(() => {
    if (!wallClockAnchor || typeof range.minTsMs !== 'number' || typeof range.maxTsMs !== 'number') {
      return [] as { key: string; label: string; startTsMs: number; count: number }[];
    }
    const buckets = new Map<string, { label: string; startTsMs: number; count: number }>();
    const first = toDate(range.minTsMs);
    const last = toDate(range.maxTsMs);
    if (!first || !last) return [];
    const cursor = new Date(first.getFullYear(), first.getMonth(), first.getDate());
    const endCursor = new Date(last.getFullYear(), last.getMonth(), last.getDate());
    while (cursor.getTime() <= endCursor.getTime()) {
      const key = dayKey(cursor);
      const startTsMs = range.minTsMs + (cursor.getTime() - first.getTime()) - (first.getHours() * 3600000 + first.getMinutes() * 60000 + first.getSeconds() * 1000 + first.getMilliseconds());
      buckets.set(key, { label: cursor.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }), startTsMs: Math.max(range.minTsMs, startTsMs), count: 0 });
      cursor.setDate(cursor.getDate() + 1);
    }
    for (const ev of filteredAll) {
      const d = toDate(ev.tsMs);
      if (!d) continue;
      const b = buckets.get(dayKey(d));
      if (b) b.count += 1;
    }
    return Array.from(buckets.entries()).map(([key, b]) => ({ key, ...b }));
  }, [wallClockAnchor, range.minTsMs, range.maxTsMs, filteredAll]);

  // Cluster markers within ~0.6% of the track width (roughly 6px at the
  // bar's ~980px max width - close enough without a live pixel measurement)
  // into one pip with a count badge, expanding back out to individuals as
  // scrubberZoom narrows the visible window and spreads them apart.
  const clusters = useMemo(() => {
    const span = Math.max(1, scrubber.max - scrubber.min);
    const sorted = filteredDots.map((ev) => ({ ev, pct: Math.min(1, Math.max(0, (ev.tsMs - scrubber.min) / span)) * 100 })).sort((a, b) => a.pct - b.pct);
    const CLUSTER_PCT = 0.6;
    const out: { leftPct: number; type: TimelineEvent['type']; events: TimelineEvent[] }[] = [];
    for (const { ev, pct } of sorted) {
      const last = out[out.length - 1];
      if (last && last.type === ev.type && pct - last.leftPct < CLUSTER_PCT) {
        last.events.push(ev);
        last.leftPct = (last.leftPct * (last.events.length - 1) + pct) / last.events.length;
      } else {
        out.push({ leftPct: pct, type: ev.type, events: [ev] });
      }
    }
    return out;
  }, [filteredDots, scrubber.min, scrubber.max]);

  function nearestEvent(fromTsMs: number, direction: 1 | -1): TimelineEvent | null {
    const pool = filteredAll.length ? filteredAll : allEvents;
    let best: TimelineEvent | null = null;
    for (const ev of pool) {
      if (direction === 1 ? ev.tsMs <= fromTsMs : ev.tsMs >= fromTsMs) continue;
      if (!best || (direction === 1 ? ev.tsMs < best.tsMs : ev.tsMs > best.tsMs)) best = ev;
    }
    return best;
  }

  function snapValue(raw: number): number {
    const span = Math.max(1, scrubber.max - scrubber.min);
    const thresholdMs = span * 0.006;
    let best: TimelineEvent | null = null;
    let bestDist = thresholdMs;
    for (const ev of filteredDots) {
      const dist = Math.abs(ev.tsMs - raw);
      if (dist <= bestDist) { best = ev; bestDist = dist; }
    }
    return best ? best.tsMs : raw;
  }

  return (
    <div className="replayTimeline">
      <div className="replayTimeline-header">
        <div>
          <div className="label">Replay time</div>
          <div className="muted" style={{ fontSize: 12 }}>
            +{formatElapsedMs(scrubber.value - scrubber.min)} of +{formatElapsedMs(scrubber.max - scrubber.min)}
            {formatWallClock ? ` • ${formatWallClock(scrubber.value)}` : ''}
          </div>
        </div>

        <div className="row" style={{ gap: 10, alignItems: 'center' }}>
          <button type="button" className="button" style={{ padding: '6px 10px' }}
            onClick={() => { if (live) setLive(false); setIsPlaying((v) => !v); }}
            disabled={scrubber.disabled}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <select className="input" style={{ width: 110, padding: '6px 10px' }}
            value={String(playbackSpeed)} onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
            disabled={scrubber.disabled} title="Playback speed">
            <option value="0.25">0.25×</option>
            <option value="0.5">0.5×</option>
            <option value="1">1×</option>
            <option value="2">2×</option>
            <option value="4">4×</option>
          </select>
          <label className="row" style={{ gap: 8, userSelect: 'none' }}>
            <input type="checkbox" checked={live} onChange={(e) => { const next = e.target.checked; setLive(next); if (next) setIsPlaying(false); }} />
            <span className="muted" style={{ fontSize: 12 }}>Live</span>
          </label>
        </div>
      </div>

      {days.length > 1 ? (
        <div className="replayTimeline-dayStrip">
          {days.map((d) => (
            <button
              key={d.key}
              type="button"
              className="replayTimeline-dayCell"
              title={`${d.count} event(s)`}
              disabled={scrubber.disabled}
              onClick={() => { setLive(false); setIsPlaying(false); setCurrentTsMs(d.startTsMs); }}
            >
              <span>{d.label}</span>
              {d.count > 0 ? <span className="replayTimeline-dayCount">{d.count}</span> : null}
            </button>
          ))}
        </div>
      ) : null}

      <div className="row" style={{ gap: 6, flexWrap: 'wrap', margin: '6px 0' }}>
        {ALL_TYPES.filter((t) => visibleTypes.has(t)).map((t) => (
          <button
            key={t}
            type="button"
            className={typeFilter.size === 0 || typeFilter.has(t) ? 'replayTimeline-chip replayTimeline-chip-on' : 'replayTimeline-chip'}
            style={{ borderColor: TYPE_COLOR[t] }}
            onClick={() => toggleType(t)}
          >
            {TYPE_LABEL[t]}
          </button>
        ))}
        {typeFilter.size > 0 ? (
          <button type="button" className="btn btn-sm" onClick={() => setTypeFilter(new Set())}>Clear</button>
        ) : null}
        <div style={{ flex: 1 }} />
        <button type="button" className="button" style={{ padding: '2px 8px', fontSize: 11 }}
          disabled={scrubber.disabled}
          onClick={() => { const ev = nearestEvent(scrubber.value, -1); if (ev) { setLive(false); setIsPlaying(false); onJumpToEvent(ev); } }}>
          ◀ Prev event
        </button>
        <button type="button" className="button" style={{ padding: '2px 8px', fontSize: 11 }}
          disabled={scrubber.disabled}
          onClick={() => { const ev = nearestEvent(scrubber.value, 1); if (ev) { setLive(false); setIsPlaying(false); onJumpToEvent(ev); } }}>
          Next event ▶
        </button>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-dim)', marginLeft: 6 }}>Zoom</span>
        <input type="range" min={1} max={48} step={1} value={scrubberZoom}
          onChange={(e) => setScrubberZoom(Number(e.target.value))}
          style={{ width: 90 }} title="Narrow the visible time range" />
        <span style={{ fontSize: 11, color: 'var(--text-dim)', minWidth: 26 }}>{scrubberZoom > 1 ? `${scrubberZoom}×` : 'Full'}</span>
      </div>

      <div className="replayTimeline-track">
        {hovered ? (
          <div className="replayTimeline-tooltip" style={{ left: `${hovered.leftPct}%` }}>
            <div style={{ fontWeight: 800, fontSize: 12, lineHeight: 1.2 }}>{hovered.title}{hovered.count > 1 ? ` (×${hovered.count})` : ''}</div>
            <div className="muted" style={{ fontSize: 11, marginTop: 2, lineHeight: 1.2 }}>{hovered.subtitle}</div>
          </div>
        ) : null}
        {clusters.map((c, idx) => {
          const rep = c.events[0];
          const subtitle = `+${formatElapsedMs(rep.tsMs - scrubber.min)}${formatWallClock ? ` • ${formatWallClock(rep.tsMs)}` : ''}${rep.subtitle ? ` • ${rep.subtitle}` : ''}`;
          const isCluster = c.events.length > 1;
          return (
            <button
              key={`${c.leftPct}-${idx}-${c.type}`}
              type="button"
              className="replayTimeline-pip"
              style={{
                left: `calc(${c.leftPct}% - ${isCluster ? 7 : 5}px)`,
                width: isCluster ? 14 : 10, height: isCluster ? 14 : 10,
                background: TYPE_COLOR[c.type],
                filter: c.type === 'disconnect' ? 'brightness(0.65) saturate(1.1)' : undefined,
              }}
              onMouseEnter={() => setHovered({ title: rep.title, subtitle, leftPct: c.leftPct, count: c.events.length })}
              onMouseLeave={() => setHovered(null)}
              onClick={() => { setIsPlaying(false); setLive(false); onJumpToEvent(rep); }}
            >
              {isCluster ? <span className="replayTimeline-pipCount">{c.events.length}</span> : null}
            </button>
          );
        })}
      </div>

      <input
        style={{ width: '100%' }}
        type="range"
        min={scrubber.min}
        max={scrubber.max}
        value={scrubber.value}
        disabled={scrubber.disabled}
        onChange={(e) => {
          const raw = Number(e.target.value);
          if (!Number.isFinite(raw)) return;
          if (live) setLive(false);
          if (isPlaying) setIsPlaying(false);
          setCurrentTsMs(snapValue(raw));
        }}
      />
    </div>
  );
}
