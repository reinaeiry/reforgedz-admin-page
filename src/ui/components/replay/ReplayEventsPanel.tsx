import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  baseKeyOf, bestScore, buildFeedRows, buildOffsets, chooseBucketMs, formatSince,
  keyDisambiguator, variableWindowSlice, type FeedRow,
} from './panelUtils';
import type { TimelineEvent } from './ReplayTimeline';
import {
  IconArrowIn, IconArrowOut, IconChevronDown, IconChevronUp, IconExport,
  IconKill, IconRestart, IconTarget, IconTargetLocked, IconWarning,
} from './icons';

export type AcFlagRow = {
  id: string;
  name?: string | null;
  note?: string | null;
  severity?: string | null;
  tsMs: number;
  // carried through to the page's investigate handler unchanged
  x: number;
  y: number;
  z: number;
  playerId?: number;
};

type Props = {
  /** Every parsed event in the loaded recording, ascending by tsMs. */
  events: TimelineEvent[];
  players: { playerId: number; name: string }[];
  currentTsMs: number | null;
  recordingStartMs: number;
  formatWallClock: ((tsMs: number) => string) | null;
  selectedKey: string | null;
  onSelect: (key: string, ev: TimelineEvent) => void;
  eventKeyOf: (ev: TimelineEvent) => string;
  offsetSeconds: number;
  setOffsetSeconds: (n: number) => void;
  playerFilterId: number | null;
  setPlayerFilterId: (id: number | null) => void;
  acFlags: AcFlagRow[];
  showAnticheat: boolean;
  onInvestigateAc: (f: AcFlagRow) => void;
  canAct: boolean;
  onPing: (ev: TimelineEvent) => void;
  onExport: (ev: TimelineEvent) => void;
  isPlaying: boolean;
  live: boolean;
};

type IconComponent = (props: { size?: number; className?: string }) => JSX.Element;

const TYPE_META: Record<TimelineEvent['type'], { label: string; Icon: IconComponent; color: string }> = {
  kill: { label: 'Kills', Icon: IconKill, color: '#ff4a4a' },
  death: { label: 'Deaths', Icon: IconKill, color: '#ff4a4a' },
  aiKill: { label: 'AI kills', Icon: IconKill, color: '#ff8c4a' },
  join: { label: 'Joins', Icon: IconArrowIn, color: '#b7f7c8' },
  disconnect: { label: 'Leaves', Icon: IconArrowOut, color: '#78aa8c' },
  restart: { label: 'Restarts', Icon: IconRestart, color: '#ffd966' },
  gmPing: { label: 'GM pings', Icon: IconTarget, color: '#78c8ff' },
};
const ALL_TYPES = Object.keys(TYPE_META) as TimelineEvent['type'][];

const ROW_ITEM = 46;
const ROW_ITEM_SELECTED = 92;   // the selected row grows to hold its actions
const ROW_GROUP = 26;
const MAX_ROWS = 5000;


// Rewritten 2026-09-26. The old feed listed only events BEFORE the playhead,
// newest first, capped at 200 and rendered in full - so scrubbing backwards made
// entries vanish, you could never see what was coming, there was no search, no
// type filter, no keyboard, and the only way to know where you were in the
// recording was the row you had clicked. This shows the whole recording with a
// NOW divider, windowed so the length no longer costs anything.
export function ReplayEventsPanel({
  events, players, currentTsMs, recordingStartMs, formatWallClock, selectedKey, onSelect,
  eventKeyOf, offsetSeconds, setOffsetSeconds, playerFilterId, setPlayerFilterId,
  acFlags, showAnticheat, onInvestigateAc, canAct, onPing, onExport, isPlaying, live,
}: Props) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<Set<TimelineEvent['type']>>(new Set());
  const [follow, setFollow] = useState(true);
  // A game feed runs in streaks - the same player killing AI a dozen times in a
  // row. Folding those into one row is what makes the rest readable, but it is a
  // toggle because it does hide individual timestamps.
  const [groupRepeats, setGroupRepeats] = useState(true);
  const [acOpen, setAcOpen] = useState(false);
  // The filter block is 216px of fixed chrome. In a phone sheet that left the
  // feed 2px, so it is collapsed by default and the search box stays out.
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportH, setViewportH] = useState(320);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const programmaticScrollRef = useRef(false);

  const visibleTypes = useMemo(
    () => new Set(ALL_TYPES.filter((t) => events.some((e) => e.type === t))),
    [events],
  );

  // Filtering deliberately does NOT depend on the playhead: it would rebuild the
  // whole feed on every frame of playback.
  const filteredResult = useMemo(() => {
    const q = query.trim();
    const out: TimelineEvent[] = [];
    for (const ev of events) {
      if (typeFilter.size && !typeFilter.has(ev.type)) continue;
      if (playerFilterId !== null) {
        const involved = ev.focusPlayerId === playerFilterId
          || (Array.isArray(ev.playerIds) && ev.playerIds.includes(playerFilterId));
        if (!involved) continue;
      }
      if (q && bestScore([ev.title, ev.subtitle], q) === null) continue;
      out.push(ev);
    }
    // The count has to come from here: out is sliced below, so subtracting the
    // cap from the sliced length afterwards can only ever yield 0 - the note
    // would never appear precisely when filters had trimmed the list.
    const dropped = Math.max(0, out.length - MAX_ROWS);
    return { items: dropped ? out.slice(out.length - MAX_ROWS) : out, dropped };
  }, [events, typeFilter, playerFilterId, query]);

  const filtered = filteredResult.items;
  const droppedForCap = filteredResult.dropped;

  const bucketMs = useMemo(() => {
    if (filtered.length < 2) return 60_000;
    return chooseBucketMs(filtered[filtered.length - 1].tsMs - filtered[0].tsMs);
  }, [filtered]);

  const rows = useMemo(() => {
    const nextKey = keyDisambiguator();
    return buildFeedRows(
      filtered,
      (e) => e.tsMs,
      (e) => nextKey(eventKeyOf(e)),
      bucketMs,
      true,
      // subtitle carries coordinates, which differ every time - collapse on what
      // actually reads as "the same thing happening again"
      groupRepeats ? (e) => `${e.type}|${e.title}` : undefined,
    );
  }, [filtered, bucketMs, eventKeyOf, groupRepeats]);

  // Where "now" sits in a newest-first feed: the first row at or before the
  // playhead. Cheap to recompute, so it can follow the playhead every frame.
  // Quantised to whole seconds: the playhead moves ~20x a second, and without
  // this the feed recomputed its position - and could scroll - on every commit.
  // (PostHog's session-replay inspector does the same, for the same reason.)
  const nowSecond = typeof currentTsMs === 'number' ? Math.floor(currentTsMs / 1000) : null;
  const nowIndex = useMemo(() => {
    if (nowSecond === null) return -1;
    const t = nowSecond * 1000 + 999;
    for (let i = 0; i < rows.length; i += 1) {
      const r = rows[i];
      if (r.kind === 'item' && r.tsMs <= t) return i;
    }
    return rows.length;
  }, [rows, nowSecond]);

  // The page may hand us a base key (the timeline builds one without knowing
  // about duplicates). Resolve it to exactly one row: an exact match wins,
  // otherwise the first occurrence - so a selection never lights up nine rows.
  const selectedRowKey = useMemo(() => {
    if (!selectedKey) return null;
    let firstBase: string | null = null;
    for (const r of rows) {
      if (r.kind !== 'item') continue;
      if (r.key === selectedKey) return r.key;
      if (firstBase === null && baseKeyOf(r.key) === selectedKey) firstBase = r.key;
    }
    return firstBase;
  }, [rows, selectedKey]);

  const heights = useMemo(() => rows.map((r) => {
    if (r.kind === 'group') return ROW_GROUP;
    return r.key === selectedRowKey ? ROW_ITEM_SELECTED : ROW_ITEM;
  }), [rows, selectedRowKey]);
  const offsets = useMemo(() => buildOffsets(heights), [heights]);
  const slice = useMemo(
    () => variableWindowSlice(offsets, scrollTop, viewportH, 6),
    [offsets, scrollTop, viewportH],
  );

  // ── follow the playhead, but yield the moment the operator scrolls ────────
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setViewportH(el.clientHeight));
    ro.observe(el);
    setViewportH(el.clientHeight);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !follow || nowIndex < 0 || nowIndex >= offsets.length) return;
    const target = Math.max(0, offsets[nowIndex] - el.clientHeight * 0.4);
    if (Math.abs(el.scrollTop - target) < 8) return;
    programmaticScrollRef.current = true;
    el.scrollTop = target;
  }, [follow, nowIndex, offsets]);

  // A selection can arrive from outside (clicking a marker on the timeline, or
  // the map). Bring it into view without taking over follow mode.
  const lastRevealedRef = useRef<string | null>(null);
  useEffect(() => {
    if (!selectedKey || selectedKey === lastRevealedRef.current) return;
    lastRevealedRef.current = selectedKey;
    const idx = rows.findIndex((r) => r.kind === 'item' && r.key === selectedRowKey);
    const el = scrollRef.current;
    if (idx < 0 || !el || idx >= offsets.length) return;
    const top = offsets[idx];
    if (top >= el.scrollTop && top <= el.scrollTop + el.clientHeight - ROW_ITEM) return;
    programmaticScrollRef.current = true;
    el.scrollTop = Math.max(0, top - el.clientHeight / 2);
  }, [selectedKey, selectedRowKey, rows, offsets]);

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    setScrollTop(el.scrollTop);
    if (programmaticScrollRef.current) {
      // our own scroll, not the operator's
      programmaticScrollRef.current = false;
      return;
    }
    if (follow) setFollow(false);
  }, [follow]);

  const jumpToNow = useCallback(() => {
    setFollow(true);
    const el = scrollRef.current;
    if (el && nowIndex >= 0 && nowIndex < offsets.length) {
      programmaticScrollRef.current = true;
      el.scrollTop = Math.max(0, offsets[nowIndex] - el.clientHeight * 0.4);
    }
  }, [nowIndex, offsets]);

  // ── keyboard ─────────────────────────────────────────────────────────────
  const itemIndices = useMemo(
    () => rows.map((r, i) => (r.kind === 'item' ? i : -1)).filter((i) => i >= 0),
    [rows],
  );

  function moveSelection(delta: 1 | -1) {
    if (!itemIndices.length) return;
    const currentPos = selectedKey
      ? itemIndices.findIndex((i) => (rows[i] as { key: string }).key === selectedRowKey)
      : -1;
    const from = currentPos >= 0 ? currentPos : itemIndices.findIndex((i) => i >= nowIndex);
    const nextPos = Math.min(itemIndices.length - 1, Math.max(0, (from < 0 ? 0 : from) + delta));
    const row = rows[itemIndices[nextPos]];
    if (row.kind !== 'item') return;
    setFollow(false);
    onSelect(row.key, row.item);
    const el = scrollRef.current;
    if (el) {
      const top = offsets[itemIndices[nextPos]];
      if (top < el.scrollTop || top > el.scrollTop + el.clientHeight - ROW_ITEM) {
        programmaticScrollRef.current = true;
        el.scrollTop = Math.max(0, top - el.clientHeight / 2);
      }
    }
  }

  function onListKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'j') { e.preventDefault(); moveSelection(1); }
    else if (e.key === 'ArrowUp' || e.key === 'k') { e.preventDefault(); moveSelection(-1); }
    else if (e.key === '/') { e.preventDefault(); searchRef.current?.focus(); }
    else if (e.key === 'Escape') { setQuery(''); setTypeFilter(new Set()); }
  }

  const activeFilters = (query ? 1 : 0) + (typeFilter.size ? 1 : 0) + (playerFilterId !== null ? 1 : 0);
  const critCount = acFlags.filter((f) => String(f.severity || '').toUpperCase() === 'CRITICAL').length;

  return (
    <div className="rpPanel">
      <div className="rpPanel-head">
        <div className="rpPanel-title">
          Events <span className="muted">({filtered.length}{filtered.length !== events.length ? ` of ${events.length}` : ''})</span>
        </div>
        <div className="rpPanel-headActions">
          <button type="button"
            className={`rpChip${groupRepeats ? ' is-on' : ''}`}
            onClick={() => setGroupRepeats((v) => !v)}
            aria-pressed={groupRepeats}
            aria-label="Group repeated events"
            title="Fold runs of the same event into one row">×N</button>
          <button type="button"
            className={`rpChip${follow ? ' is-on' : ''}`}
            onClick={() => (follow ? setFollow(false) : jumpToNow())}
            title={follow ? 'Following the playhead - click to stop' : 'Scroll with the playhead'}>
            {follow ? <><IconTargetLocked size={12} /> Following</> : <><IconTarget size={12} /> Follow</>}
          </button>
        </div>
      </div>

      <div className="rpPanel-controls">
        <div className="rpPanel-row">
          <input
            ref={searchRef}
            className="rpInput"
            placeholder="Search events…   /"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Escape') { setQuery(''); (e.target as HTMLInputElement).blur(); } }}
          />
          <button
            type="button"
            className={`rpChip rpFiltersToggle${filtersOpen ? ' is-on' : ''}`}
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
          >
            Filters{activeFilters ? ` (${activeFilters})` : ''}
          </button>
        </div>

        {filtersOpen ? (
        <>
        <div className="rpChips">
          {ALL_TYPES.filter((t) => visibleTypes.has(t)).map((t) => {
            const on = typeFilter.size === 0 || typeFilter.has(t);
            return (
              <button key={t} type="button"
                className={`rpChip${on ? ' is-on' : ''}`}
                aria-pressed={typeFilter.has(t)}
                style={{ borderColor: TYPE_META[t].color }}
                onClick={() => setTypeFilter((prev) => {
                  const next = new Set(prev);
                  if (next.has(t)) next.delete(t); else next.add(t);
                  return next;
                })}>
                {React.createElement(TYPE_META[t].Icon, { size: 12 })}
                {TYPE_META[t].label}
              </button>
            );
          })}
        </div>

        <div className="rpPanel-row">
          <select className="rpInput rpSelect"
            value={playerFilterId === null ? '' : String(playerFilterId)}
            onChange={(e) => {
              const raw = String(e.target.value || '');
              if (!raw) { setPlayerFilterId(null); return; }
              const id = Number(raw);
              setPlayerFilterId(Number.isFinite(id) ? id : null);
            }}
            aria-label="Filter events by player">
            <option value="">All players</option>
            {players.map((p) => (
              <option key={p.playerId} value={String(p.playerId)}>{p.name} (#{p.playerId})</option>
            ))}
          </select>

          <label className="rpOffset" title="Clicking an event jumps this many seconds before it, so you see the run-up">
            <span className="muted">jump</span>
            <input className="rpInput rpOffset-input" type="number" min={0} max={60} step={1}
              value={offsetSeconds}
              onChange={(e) => setOffsetSeconds(Math.max(0, Math.min(60, Math.floor(Number(e.target.value) || 0))))} />
            <span className="muted">s before</span>
          </label>
        </div>
        </>
        ) : null}

        {activeFilters > 0 ? (
          <button type="button" className="rpChip rpChip-clear" onClick={() => { setQuery(''); setTypeFilter(new Set()); setPlayerFilterId(null); }}>
            Clear {activeFilters} filter{activeFilters > 1 ? 's' : ''}
          </button>
        ) : null}

        {showAnticheat && acFlags.length > 0 ? (
          <div className="rpAc">
            <button type="button" className="rpAc-toggle" onClick={() => setAcOpen((v) => !v)} aria-expanded={acOpen}>
              <span className="rpAc-head"><IconWarning size={13} /> Anticheat flags ({acFlags.length}{critCount ? `, ${critCount} critical` : ''})</span>
              {acOpen ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
            </button>
            {acOpen ? (
              <div className="rpAc-list">
                {acFlags.slice().reverse().map((f) => {
                  const crit = String(f.severity || '').toUpperCase() === 'CRITICAL';
                  return (
                    <button key={f.id} type="button" className="rpAc-row" onClick={() => onInvestigateAc(f)}>
                      <span className={crit ? 'rpAc-crit' : 'rpAc-warn'}>{crit ? 'CRIT' : 'WARN'}</span>
                      <span className="rpAc-name">{f.name || '—'}{f.note ? <span className="muted"> — {f.note}</span> : null}</span>
                      {formatWallClock ? <span className="muted rpAc-time">{formatWallClock(f.tsMs)}</span> : null}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {!follow && nowIndex >= 0 && nowIndex < rows.length ? (
        <button type="button" className="rpJumpNow" onClick={jumpToNow}>
          <IconChevronDown size={13} /> Jump to the playhead
        </button>
      ) : null}

      <div
        ref={scrollRef}
        className="rpFeed scroll"
        tabIndex={0}
        role="listbox"
        aria-label="Replay events"
        onScroll={onScroll}
        onKeyDown={onListKeyDown}
      >
        {rows.length === 0 ? (
          <div className="rpEmpty">
            {events.length === 0 ? 'No events yet.' : 'Nothing matches those filters.'}
            {activeFilters > 0 ? (
              <button type="button" className="rpChip" style={{ marginTop: 8 }}
                onClick={() => { setQuery(''); setTypeFilter(new Set()); setPlayerFilterId(null); }}>
                Clear filters
              </button>
            ) : null}
          </div>
        ) : (
          <>
            {droppedForCap > 0 ? (
              <div className="rpCapNote muted">Showing the most recent {MAX_ROWS} — narrow the filters to see older ones.</div>
            ) : null}
            <div style={{ height: slice.padTop }} />
            {rows.slice(slice.start, slice.end).map((row, i) => {
              const absoluteIndex = slice.start + i;
              if (row.kind === 'group') {
                return (
                  <div key={row.key} className="rpGroup" style={{ height: ROW_GROUP }}>
                    <span>{formatWallClock ? formatWallClock(row.bucketTs) : `+${Math.round((row.bucketTs - recordingStartMs) / 1000)}s`}</span>
                    <span className="muted">{row.count}</span>
                  </div>
                );
              }
              return (
                <EventRow
                  key={row.key}
                  row={row}
                  isSelected={row.key === selectedRowKey}
                  isNow={absoluteIndex === nowIndex}
                  isFuture={typeof currentTsMs === 'number' && row.tsMs > currentTsMs}
                  currentTsMs={currentTsMs}
                  formatWallClock={formatWallClock}
                  canAct={canAct}
                  onSelect={onSelect}
                  onPing={onPing}
                  onExport={onExport}
                />
              );
            })}
            <div style={{ height: slice.padBottom }} />
          </>
        )}
      </div>

      <div className="rpPanel-foot muted">
        ↑↓ move · Enter jump · / search{isPlaying || live ? ' · following playback' : ''}
      </div>
    </div>
  );
}

function EventRow({
  row, isSelected, isNow, isFuture, currentTsMs, formatWallClock, canAct, onSelect, onPing, onExport,
}: {
  row: Extract<FeedRow<TimelineEvent>, { kind: 'item' }>;
  isSelected: boolean;
  isNow: boolean;
  isFuture: boolean;
  currentTsMs: number | null;
  formatWallClock: ((tsMs: number) => string) | null;
  canAct: boolean;
  onSelect: (key: string, ev: TimelineEvent) => void;
  onPing: (ev: TimelineEvent) => void;
  onExport: (ev: TimelineEvent) => void;
}) {
  const ev = row.item;
  const meta = TYPE_META[ev.type];
  const canPing = canAct && ev.type !== 'gmPing' && !!ev.focusPos;
  const rel = typeof currentTsMs === 'number' ? formatSince(ev.tsMs - currentTsMs) : null;

  return (
    <div
      className={`rpRow${isSelected ? ' is-selected' : ''}${isNow ? ' is-now' : ''}${isFuture ? ' is-future' : ''}`}
      style={{ height: isSelected ? ROW_ITEM_SELECTED : ROW_ITEM }}
      role="option"
      aria-selected={isSelected}
      tabIndex={-1}
      onClick={() => onSelect(row.key, ev)}
      onKeyDown={(e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        onSelect(row.key, ev);
      }}
    >
      <span className="rpRow-glyph" style={{ color: meta.color }} aria-hidden="true"><meta.Icon size={13} /></span>
      <span className="rpRow-main">
        <span className="rpRow-title">
          {ev.title}
          {row.repeat > 1 ? <span className="rpRepeat">×{row.repeat}</span> : null}
        </span>
        <span className="rpRow-sub muted">
          {row.repeat > 1 ? `${row.repeat} in a row · ` : ''}{ev.subtitle || meta.label}
        </span>
      </span>
      <span className="rpRow-time">
        <span>{formatWallClock ? formatWallClock(ev.tsMs) : ''}</span>
        {rel ? <span className="muted rpRow-rel">{isFuture ? `in ${rel}` : rel === 'now' ? 'now' : `${rel} ago`}</span> : null}
      </span>

      {isSelected ? (
        <span className="rpRow-actions" onClick={(e) => e.stopPropagation()}>
          {canPing ? (
            <button type="button" className="rpChip" onClick={() => onPing(ev)} title="Send a GM ping at this spot">
              <IconTarget size={12} /> Ping
            </button>
          ) : null}
          {canAct && ev.focusPos ? (
            <button type="button" className="rpChip" onClick={() => onExport(ev)} title="Export a clip to Discord">
              <IconExport size={12} /> Export
            </button>
          ) : null}
        </span>
      ) : null}
    </div>
  );
}
