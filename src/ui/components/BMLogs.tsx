import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { listGameLogs, type GameLogRow } from '../../util/bmApi';

type LogType = 'anticheat' | 'shop' | 'kill' | 'death' | 'chat' | 'base';

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
  showPlayerSearch?: boolean;
  pageSize?: number;
};

export function BMLogs({ guid, showPlayerSearch, pageSize = 100 }: Props) {
  const [activeTypes, setActiveTypes] = useState<Set<LogType>>(new Set(TYPE_OPTIONS.map((t) => t.key)));
  const [q, setQ] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [rows, setRows] = useState<GameLogRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);

  const filters = useMemo(() => ({
    guid: guid || undefined,
    name: !guid && playerName.trim() ? playerName.trim() : undefined,
    types: activeTypes.size === TYPE_OPTIONS.length ? undefined : Array.from(activeTypes),
    q: q.trim() || undefined,
    limit: pageSize,
    offset
  }), [guid, playerName, activeTypes, q, pageSize, offset]);

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
  }, [filters, q, playerName]);

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
          {TYPE_OPTIONS.map((t) => (
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

function PlayerLink({ name, guid }: { name: string | null; guid: string | null }) {
  if (!name) return null;
  if (guid) return <Link to={`/player/${guid}`} className="bmLogPlayer">{name}</Link>;
  return <span className="bmLogPlayer">{name}</span>;
}

function LogBody({ row }: { row: GameLogRow }) {
  const d = row.details || {};
  switch (row.log_type) {
  case 'kill':
    return (
      <>
        <PlayerLink name={row.player_name} guid={row.player_guid} />
        <span className="muted"> killed </span>
        <PlayerLink name={row.target_name} guid={row.target_guid} />
        {d.weapon ? <> <span className="bmLogTag">{d.weapon}</span></> : null}
        {typeof d.distance === 'number' ? <> <span className="muted">{Math.round(d.distance)}m</span></> : null}
        {typeof d.points === 'number' ? <> <span className="muted">{d.points} pts</span></> : null}
      </>
    );
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
