import React, { useMemo, useRef, useState } from 'react';
import type { ReplayPlayer } from '../../../util/api';
import { bestScore } from './panelUtils';

type SortKey = 'status' | 'name' | 'risk';

type Props = {
  /** Already search-filtered by the page (same ranking helper). */
  players: ReplayPlayer[];
  totalPlayers: number;
  /** Player ids with a position at the current instant - i.e. visible on the map. */
  placedIds: Set<number>;
  selectedPlayerId: number | null;
  attachedPlayerId: number | null;
  onSelect: (playerId: number) => void;
  onToggleFollow: (playerId: number) => void;
  onOpenProfile: (identityId: string) => void;
  identityIdOf: (playerId: number) => string | undefined;
  search: string;
  setSearch: (s: string) => void;
  gotoCoords: string;
  setGotoCoords: (s: string) => void;
  onGoto: (raw: string) => void;
  severityClassOf: (severity: 'low' | 'medium' | 'high') => string;
  settingsOpen: boolean;
  setSettingsOpen: (v: boolean) => void;
  /** Collapsed shows the header only, so the map underneath is visible. */
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  /** The display-settings block and the selected-player detail stay in the page. */
  settings: React.ReactNode;
  detail: React.ReactNode;
};

const SEVERITY_RANK: Record<string, number> = { high: 3, medium: 2, low: 1 };

// Rewritten 2026-09-26. The roster was an unsorted list of names with a risk
// badge, where the only status signal was whether a name happened to be there,
// the only action was "click to attach", and the reason a badge was red lived in
// a hover title. Now: status is visible, the list can be sorted, the row's
// actions are on the row (not on hover), and it is keyboard navigable.
export function ReplayPlayersPanel({
  players, totalPlayers, placedIds, selectedPlayerId, attachedPlayerId, onSelect, onToggleFollow,
  onOpenProfile, identityIdOf, search, setSearch, gotoCoords, setGotoCoords, onGoto,
  severityClassOf, settingsOpen, setSettingsOpen, collapsed, setCollapsed, settings, detail,
}: Props) {
  const [sort, setSort] = useState<SortKey>('status');
  const searchRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const sorted = useMemo(() => {
    const copy = players.slice();
    // While searching, the best match wins regardless of the sort - a roster is
    // looked at to find one person. The time-ordered event feed deliberately
    // does the opposite and keeps its order.
    const q = search.trim();
    if (q) {
      copy.sort((a, b) => {
        const sa = bestScore([a.name, String(a.playerId)], q) ?? -1;
        const sb = bestScore([b.name, String(b.playerId)], q) ?? -1;
        if (sb !== sa) return sb - sa;
        return (a.name || '').localeCompare(b.name || '');
      });
      return copy;
    }
    copy.sort((a, b) => {
      if (sort === 'name') return (a.name || '').localeCompare(b.name || '');
      if (sort === 'risk') {
        const ra = (SEVERITY_RANK[String(a.highestSeverity || '')] || 0) * 1000 + (a.riskScore || 0);
        const rb = (SEVERITY_RANK[String(b.highestSeverity || '')] || 0) * 1000 + (b.riskScore || 0);
        if (rb !== ra) return rb - ra;
        return (a.name || '').localeCompare(b.name || '');
      }
      // status: on the map first, then flagged, then by name
      const pa = placedIds.has(a.playerId) ? 0 : 1;
      const pb = placedIds.has(b.playerId) ? 0 : 1;
      if (pa !== pb) return pa - pb;
      const fa = a.highestSeverity ? 0 : 1;
      const fb = b.highestSeverity ? 0 : 1;
      if (fa !== fb) return fa - fb;
      return (a.name || '').localeCompare(b.name || '');
    });
    return copy;
  }, [players, sort, placedIds, search]);

  function move(delta: 1 | -1) {
    if (!sorted.length) return;
    const idx = sorted.findIndex((p) => p.playerId === selectedPlayerId);
    const next = Math.min(sorted.length - 1, Math.max(0, (idx < 0 ? 0 : idx + delta)));
    const p = sorted[next];
    if (p) {
      onSelect(p.playerId);
      const el = listRef.current?.querySelector<HTMLElement>(`[data-pid="${p.playerId}"]`);
      el?.scrollIntoView({ block: 'nearest' });
    }
  }

  const placedCount = useMemo(
    () => sorted.reduce((n, p) => (placedIds.has(p.playerId) ? n + 1 : n), 0),
    [sorted, placedIds],
  );

  return (
    <div className="rpPanel">
      <div className="rpPanel-head">
        <div className="rpPanel-title">
          Players <span className="muted">
            ({placedCount} on map{sorted.length !== placedCount ? ` · ${sorted.length - placedCount} away` : ''}
            {sorted.length !== totalPlayers ? ` · ${totalPlayers} total` : ''})
          </span>
        </div>
        <div className="rpPanel-headActions">
          <button type="button" className={`rpChip${settingsOpen ? ' is-on' : ''}`}
            onClick={() => setSettingsOpen(!settingsOpen)}
            aria-expanded={settingsOpen}
            title="Map display settings">⚙ Display</button>
          <button type="button" className="rpChip"
            onClick={() => setCollapsed(!collapsed)}
            aria-expanded={!collapsed}
            title={collapsed ? 'Show the roster' : 'Collapse to the header'}>{collapsed ? '▾' : '▴'}</button>
        </div>
      </div>

      {collapsed ? null : (
        <>
      {settingsOpen ? <div className="rpSettings">{settings}</div> : null}

      <div className="rpPanel-controls">
        <input
          ref={searchRef}
          className="rpInput"
          placeholder="Search players…   /"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') { setSearch(''); (e.target as HTMLInputElement).blur(); }
            if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
          }}
        />

        <div className="rpPanel-row">
          <span className="muted" style={{ fontSize: 10 }}>Sort</span>
          {(['status', 'name', 'risk'] as SortKey[]).map((k) => (
            <button key={k} type="button"
              className={`rpChip${sort === k ? ' is-on' : ''}`}
              aria-pressed={sort === k}
              onClick={() => setSort(k)}>
              {k === 'status' ? 'On map' : k === 'name' ? 'Name' : 'Risk'}
            </button>
          ))}
        </div>

        <div className="rpPanel-row">
          <input className="rpInput" placeholder="Go to coords (x, y, z)"
            value={gotoCoords}
            onChange={(e) => setGotoCoords(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') onGoto(gotoCoords); }} />
          <button type="button" className="rpChip is-on" onClick={() => onGoto(gotoCoords)}>Go</button>
        </div>
      </div>

      <div
        ref={listRef}
        className="rpFeed scroll"
        tabIndex={0}
        role="listbox"
        aria-label="Players"
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'j') { e.preventDefault(); move(1); }
          else if (e.key === 'ArrowUp' || e.key === 'k') { e.preventDefault(); move(-1); }
          else if (e.key === '/') { e.preventDefault(); searchRef.current?.focus(); }
        }}
      >
        {sorted.length === 0 ? (
          <div className="rpEmpty">
            {totalPlayers === 0 ? 'Nobody on the server at this moment.' : 'No player matches that search.'}
            {search ? (
              <button type="button" className="rpChip" style={{ marginTop: 8 }} onClick={() => setSearch('')}>Clear search</button>
            ) : null}
          </div>
        ) : sorted.map((p) => {
          const isSelected = selectedPlayerId === p.playerId;
          const isFollowing = attachedPlayerId === p.playerId;
          const placed = placedIds.has(p.playerId);
          const identityId = identityIdOf(p.playerId);
          return (
            <div
              key={p.playerId}
              data-pid={p.playerId}
              className={`rpRow rpRow-player${isSelected ? ' is-selected' : ''}`}
              role="option"
              aria-selected={isSelected}
              onClick={() => onSelect(p.playerId)}
              onKeyDown={(e) => {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                e.preventDefault();
                onSelect(p.playerId);
              }}
            >
              {/* Status is a shape as well as a colour: filled = on the map at
                  this instant, hollow = connected but without a position. */}
              <span className={`rpDot${placed ? ' is-placed' : ''}`} aria-hidden="true" />
              <span className="rpRow-main">
                <span className="rpRow-title">
                  {p.name}
                  {isFollowing ? <span className="rpFollowTag">following</span> : null}
                </span>
                <span className="rpRow-sub muted">
                  {placed ? 'on the map' : 'no position at this moment'}
                  {p.flaggedCount ? ` · ${p.flaggedCount} flagged` : ''}
                </span>
              </span>
              {p.highestSeverity ? (
                <span className={severityClassOf(p.highestSeverity)} style={{ fontSize: 9, padding: '1px 4px', fontWeight: 700 }}>
                  {p.highestSeverity} {p.confidence ?? 0}%
                </span>
              ) : null}

              {isSelected ? (
                <span className="rpRow-actions" onClick={(e) => e.stopPropagation()}>
                  <button type="button" className={`rpChip${isFollowing ? ' is-on' : ''}`}
                    onClick={() => onToggleFollow(p.playerId)}>
                    {isFollowing ? '◉ Following' : '◎ Follow'}
                  </button>
                  {identityId ? (
                    <button type="button" className="rpChip" onClick={() => onOpenProfile(identityId)}>Profile →</button>
                  ) : null}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      {detail ? <div className="rpDetail">{detail}</div> : null}
        </>
      )}
    </div>
  );
}
