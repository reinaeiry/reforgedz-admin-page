import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { listGameLogs, type GameLogRow } from '../../util/bmApi';
import { allowedLogLevels, type LogLevel } from '../../util/session';

type LogType = LogLevel;

const TYPE_OPTIONS: { key: LogType; label: string }[] = [
  { key: 'kill', label: 'Kills' },
  { key: 'death', label: 'Deaths' },
  { key: 'anticheat', label: 'Anticheat' },
  { key: 'shop', label: 'Shops' },
  { key: 'chat', label: 'Chat' },
  { key: 'base', label: 'Base' }
];

const SEV_CLASS: Record<string, string> = {
  CRITICAL: 'bmLogSev-crit',
  WARNING: 'bmLogSev-warn',
  SERVER: 'bmLogSev-info',
  INFO: 'bmLogSev-info'
};

type Props = {
  guid?: string;
  // Extra names to OR onto the player filter (current BM name +
  // historical name identifiers). Catches chat / kill rows where the
  // player's UID was never recorded.
  extraNames?: string[];
  showPlayerSearch?: boolean;
  pageSize?: number;
  // Sticky server filter from the dashboard chips. Per-server scopes
  // (NA1/NA2/EU1/EU2) only — region/global scopes (NA/EU/ALL) are kept
  // unless explicitly excluded.
  scopes?: string[];
};

export function BMLogs({ guid, extraNames, showPlayerSearch, pageSize = 100, scopes }: Props) {
  // Only show chips the user is actually allowed to read.
  const allowed = useMemo(() => new Set<LogLevel>(allowedLogLevels()), []);
  const visibleOptions = useMemo(() => TYPE_OPTIONS.filter((t) => allowed.has(t.key)), [allowed]);
  const [activeTypes, setActiveTypes] = useState<Set<LogType>>(new Set(visibleOptions.map((t) => t.key)));
  const [q, setQ] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [rows, setRows] = useState<GameLogRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);

  // Server-side enforcement is still the source of truth, but we also pin the
  // request to only the user's allowed types so we don't waste bandwidth on
  // rows that'll be filtered out.
  const effectiveTypes = useMemo(() => {
    const xs = Array.from(activeTypes).filter((t) => allowed.has(t));
    return xs.length === visibleOptions.length ? Array.from(allowed) : xs;
  }, [activeTypes, allowed, visibleOptions.length]);

  const filters = useMemo(() => ({
    guid: guid || undefined,
    name: !guid && playerName.trim() ? playerName.trim() : undefined,
    names: guid && extraNames && extraNames.length ? extraNames : undefined,
    types: effectiveTypes,
    servers: scopes && scopes.length ? scopes : undefined,
    q: q.trim() || undefined,
    limit: pageSize,
    offset
  }), [guid, extraNames, playerName, effectiveTypes, scopes, q, pageSize, offset]);

  // Polling: refetch every 15s while the tab is visible. Lines up with the
  // server-side Cache-Control max-age=15, so most polls are a cheap 304 from
  // the browser cache and never hit the bot.
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setErr(null);
    const t = setTimeout(async () => {
      try {
        const data = await listGameLogs(filters);
        if (alive) setRows(data.logs);
      } catch (e: any) {
        if (alive) setErr(e?.message || 'Failed to load logs');
      } finally {
        if (alive) setLoading(false);
      }
    }, q || playerName ? 300 : 0);
    return () => { alive = false; clearTimeout(t); };
  }, [filters, q, playerName, tick]);

  useEffect(() => {
    let timer: number | null = null;
    function start() {
      stop();
      timer = window.setInterval(() => setTick((n) => n + 1), 15_000);
    }
    function stop() {
      if (timer != null) { clearInterval(timer); timer = null; }
    }
    function onVis() {
      if (document.visibilityState === 'visible') start(); else stop();
    }
    if (document.visibilityState === 'visible') start();
    document.addEventListener('visibilitychange', onVis);
    return () => { stop(); document.removeEventListener('visibilitychange', onVis); };
  }, []);

  function toggleType(t: LogType) {
    setOffset(0);
    setActiveTypes((cur) => {
      const next = new Set(cur);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });
  }

  return (
    <div className="bmLogs">
      <div className="bmLogs-controls">
        <div className="bmLogs-chips">
          {visibleOptions.length === 0 ? (
            <span className="muted" style={{ fontSize: '.78rem' }}>No log types enabled on your account.</span>
          ) : visibleOptions.map((t) => (
            <button
              key={t.key}
              type="button"
              className={`bmChip ${activeTypes.has(t.key) ? 'bmChip-on' : ''}`}
              onClick={() => toggleType(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <input
          className="bmLogs-search"
          type="search"
          placeholder="Search text…"
          value={q}
          onChange={(e) => { setOffset(0); setQ(e.target.value); }}
        />
        {showPlayerSearch ? (
          <input
            className="bmLogs-search"
            type="search"
            placeholder="Filter by player name…"
            value={playerName}
            onChange={(e) => { setOffset(0); setPlayerName(e.target.value); }}
          />
        ) : null}
      </div>

      {err ? <div className="bmError">{err}</div> : null}
      {loading && !rows.length ? <div className="muted">Loading…</div> : null}
      {!loading && !rows.length && !err ? <div className="muted">No logs match.</div> : null}

      <ul className="bmLogList">
        {rows.map((r) => <LogRow key={r.id} row={r} />)}
      </ul>

      {rows.length === pageSize ? (
        <div className="bmLogs-pager">
          <button className="btn btn-sm" disabled={offset === 0} onClick={() => setOffset(Math.max(0, offset - pageSize))}>← Newer</button>
          <span className="muted">Showing {offset + 1}–{offset + rows.length}</span>
          <button className="btn btn-sm" onClick={() => setOffset(offset + pageSize)}>Older →</button>
        </div>
      ) : offset > 0 ? (
        <div className="bmLogs-pager">
          <button className="btn btn-sm" onClick={() => setOffset(Math.max(0, offset - pageSize))}>← Newer</button>
        </div>
      ) : null}
    </div>
  );
}

function LogRow({ row }: { row: GameLogRow }) {
  const date = new Date(row.ts_ms);
  const time = date.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <li className={`bmLogRow bmLogType-${row.log_type}`}>
      <span className="bmLogTime">{time}</span>
      <span className="bmLogServer">{row.server || (row.log_type === 'anticheat' ? '—' : '')}</span>
      <span className={`bmLogType ${row.severity ? SEV_CLASS[row.severity] || '' : ''}`}>
        {row.severity ? `${row.severity}` : labelFor(row.log_type)}
      </span>
      <span className="bmLogBody"><LogBody row={row} /></span>
    </li>
  );
}

function labelFor(t: string) {
  switch (t) {
  case 'kill': return 'KILL';
  case 'death': return 'DEATH';
  case 'shop': return 'SHOP';
  case 'chat': return 'CHAT';
  case 'base': return 'BASE';
  case 'anticheat': return 'AC';
  default: return t.toUpperCase();
  }
}

function prettifyWeapon(raw: string | undefined | null): string {
  if (!raw) return '';
  let s = String(raw).trim();
  // Strip localization-key prefix/suffix produced by ReforgedZ's kill log:
  //   "#AR-Weapon_M9Bayonet_Name" -> "M9 Bayonet"
  //   "#AR-Weapon_AK74_Name"      -> "AK74"
  if (s.startsWith('#AR-Weapon_')) s = s.slice('#AR-Weapon_'.length);
  if (s.endsWith('_Name')) s = s.slice(0, -'_Name'.length);
  // Split CamelCase boundaries and replace underscores so "M9Bayonet" -> "M9 Bayonet".
  s = s.replace(/_+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
  return s;
}

function PlayerLink({ name, guid }: { name: string | null; guid: string | null }) {
  if (!name) return null;
  // Direct GUID link when we have one (server-side already resolves most names
  // via the name_to_guid table). When we don't, route through a name-resolver
  // page that searches BM and redirects to the canonical profile.
  const to = guid ? `/player/${guid}` : `/player/by-name/${encodeURIComponent(name)}`;
  return <Link to={to} className="bmLogPlayer">{name}</Link>;
}

function LogBody({ row }: { row: GameLogRow }) {
  const d = row.details || {};
  switch (row.log_type) {
  case 'kill': {
    const weapon = prettifyWeapon(d.weapon);
    return (
      <>
        <PlayerLink name={row.player_name} guid={row.player_guid} />
        <span className="muted"> killed </span>
        <PlayerLink name={row.target_name} guid={row.target_guid} />
        {weapon ? <> <span className="bmLogTag">{weapon}</span></> : null}
        {typeof d.distance === 'number' ? <> <span className="muted">{Math.round(d.distance)}m</span></> : null}
      </>
    );
  }
  case 'death':
    return (
      <>
        <PlayerLink name={row.player_name} guid={row.player_guid} />
        <span className="muted"> died</span>
        {d.category ? <span className="muted"> [{d.category}]</span> : null}
      </>
    );
  case 'chat':
    return (
      <>
        <PlayerLink name={row.player_name} guid={row.player_guid} />
        <span className="muted">: </span>
        <span>{d.message || ''}</span>
      </>
    );
  case 'shop':
    return (
      <>
        <span className="bmLogTag">{row.category}</span>{' '}
        <PlayerLink name={row.player_name} guid={row.player_guid} />
        {d.item ? <> <span className="muted">{row.target_name ? 'sold' : 'bought'}</span> <span>{d.item}</span></> : null}
        {row.target_name ? <> <span className="muted">to</span> <PlayerLink name={row.target_name} guid={row.target_guid} /></> : null}
        {typeof d.caps === 'number' ? <> <span className="muted">for</span> <strong>{d.caps}</strong> <span className="muted">caps</span></> : null}
      </>
    );
  case 'anticheat':
    return (
      <>
        <span className="bmLogTag">{row.category}</span>{' '}
        {row.player_name ? <PlayerLink name={row.player_name} guid={row.player_guid} /> : null}
        {d.note ? <> <span className="muted">— {d.note}</span></> : null}
        {d.pos ? <span className="bmLogPos"> [{Math.round(d.pos.x)}, {Math.round(d.pos.y)}, {Math.round(d.pos.z)}]</span> : null}
      </>
    );
  case 'base':
    return (
      <>
        <span className="bmLogTag">{row.category}</span>
        {d.raider ? <> <span className="muted">raider:</span> <PlayerLink name={d.raider} guid={null} /></> : null}
        {(d['base owner'] || d.owner) ? <> <span className="muted">owner:</span> <PlayerLink name={d['base owner'] || d.owner} guid={null} /></> : null}
        {d.location ? <> <span className="muted">— {d.location}</span></> : null}
      </>
    );
  default:
    return <span>{row.raw}</span>;
  }
}
