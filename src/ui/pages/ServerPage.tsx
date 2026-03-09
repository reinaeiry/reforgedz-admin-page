import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getEventLog, getServerHealth, sendGlobalMessage, type EventLogEntry, type ServerHealth } from '../../util/api';
import { useServer } from '../ServerContext';

const EVENT_TYPES = [
  { label: 'All', value: '' },
  { label: 'Kills', value: 'kill' },
  { label: 'Deaths', value: 'death' },
  { label: 'AI Kills', value: 'aiKill' },
  { label: 'Joins', value: 'join' },
  { label: 'Disconnects', value: 'disconnect' },
  { label: 'Server', value: 'serverStart,serverStop' },
];

function formatEventSummary(entry: EventLogEntry): string {
  const e = entry.event ?? {};
  switch (entry.type) {
    case 'kill': {
      const killer = (e.killerName as string) ?? '?';
      const victim = (e.victimName as string) ?? '?';
      const weapon = (e.weaponName as string) ?? '';
      const dist = typeof e.distanceM === 'number' ? ` at ${Math.round(e.distanceM as number)}m` : '';
      return `${killer} eliminated ${victim}${weapon ? ` with ${weapon}` : ''}${dist}`;
    }
    case 'death': {
      const victim = (e.victimName as string) ?? '?';
      const killer = (e.killerName as string) ?? '';
      const weapon = (e.weaponName as string) ?? '';
      if (killer) return `${victim} eliminated by ${killer}${weapon ? ` with ${weapon}` : ''}`;
      return `${victim} died`;
    }
    case 'aiKill': {
      const killer = (e.killerName as string) ?? '?';
      const ai = (e.victimName as string) ?? 'AI';
      const weapon = (e.weaponName as string) ?? '';
      return `${killer} eliminated ${ai} (AI)${weapon ? ` with ${weapon}` : ''}`;
    }
    case 'join': {
      const name = (e.name as string) ?? '?';
      return `${name} joined the server`;
    }
    case 'disconnect': {
      const name = (e.name as string) ?? '?';
      const cause = (e.kickCause as string) ?? '';
      return `${name} disconnected${cause ? ` (${cause})` : ''}`;
    }
    case 'serverStart':
      return 'Server started';
    case 'serverStop':
      return 'Server stopped';
    default:
      return entry.type;
  }
}

function typeTagClass(type: string): string {
  switch (type) {
    case 'kill': return 'tagKill';
    case 'death': return 'tagDeath';
    case 'aiKill': return 'tagAiKill';
    case 'join': return 'tagJoin';
    case 'disconnect': return 'tagDisconnect';
    case 'serverStart': return 'tagServer';
    case 'serverStop': return 'tagKill';
    default: return 'tagDisconnect';
  }
}

function fpsColor(fps: number): string {
  if (fps >= 30) return 'var(--rz-success)';
  if (fps >= 15) return 'var(--rz-warning)';
  return 'var(--rz-danger)';
}

function renderMiniChart(data: number[], maxVal: number, color: string) {
  if (data.length < 2) return null;
  const w = 280;
  const h = 52;
  const clampedMax = Math.max(maxVal, 1);
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - (Math.min(v, clampedMax) / clampedMax) * (h - 4) - 2;
    return `${x},${y}`;
  });
  const fillPoints = [`0,${h}`, ...points, `${w},${h}`].join(' ');
  return (
    <svg width={w} height={h} style={{ display: 'block', marginTop: 10 }} className="miniChart">
      <defs>
        <linearGradient id={`grad-${color.replace(/[^a-z0-9]/gi, '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={fillPoints} fill={`url(#grad-${color.replace(/[^a-z0-9]/gi, '')})`} />
      <polyline points={points.join(' ')} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function EventsTab({ serverId }: { serverId: string }) {
  const [events, setEvents] = useState<EventLogEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [search, setSearch] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true); setError(null);
    try { setEvents(await getEventLog({ serverId, types: typeFilter || undefined, limit: 200 })); }
    catch (e) { setError(e instanceof Error ? e.message : 'Failed to load events'); }
    finally { setBusy(false); }
  }, [serverId, typeFilter]);

  useEffect(() => {
    if (!serverId) return;
    refresh();
    if (!autoRefresh) return;
    const id = setInterval(refresh, 10000);
    return () => clearInterval(id);
  }, [serverId, typeFilter, autoRefresh, refresh]);

  const filtered = useMemo(() => {
    if (!search.trim()) return events;
    const q = search.toLowerCase();
    return events.filter((e) => formatEventSummary(e).toLowerCase().includes(q));
  }, [events, search]);

  return (
    <div className="stack">
      <div className="row" style={{ gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div className="label">Type</div>
          <select className="input" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            {EVENT_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <div className="label">Search</div>
          <input className="input" placeholder="Filter events..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
          <label className="row" style={{ gap: 6, cursor: 'pointer' }}>
            <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
            <span className="muted" style={{ fontSize: 12 }}>Auto</span>
          </label>
          <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
        </div>
      </div>

      {error ? <div className="error">{error}</div> : null}

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--rz-text-bright)' }}>{filtered.length}</span>
        <span className="muted" style={{ fontSize: 13 }}>event{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="listContainer">
        <div className="scroll" style={{ maxHeight: 560, overflow: 'auto' }}>
          {filtered.length === 0 ? (
            <div className="listEmpty">{serverId ? 'No events found.' : 'Select a server.'}</div>
          ) : filtered.map((e, i) => (
            <div key={`${e.tsMs}-${i}`} className="listRow" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                <span className={`tag ${typeTagClass(e.type)}`} style={{ minWidth: 70, textAlign: 'center', textTransform: 'capitalize' }}>{e.type}</span>
                <span style={{ fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{formatEventSummary(e)}</span>
              </div>
              <div className="muted" style={{ fontSize: 11, whiteSpace: 'nowrap', flexShrink: 0 }}>
                {new Date(e.receivedAt).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HealthTab({ serverId }: { serverId: string }) {
  const [health, setHealth] = useState<ServerHealth | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [fpsHistory, setFpsHistory] = useState<number[]>([]);
  const [playerHistory, setPlayerHistory] = useState<number[]>([]);
  const [message, setMessage] = useState('');
  const [msgTitle, setMsgTitle] = useState('');
  const [msgSuccess, setMsgSuccess] = useState(false);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true); setError(null);
    try {
      const data = await getServerHealth(serverId);
      setHealth(data);
      setFpsHistory((prev) => [...prev.slice(-59), data.fps]);
      setPlayerHistory((prev) => [...prev.slice(-59), data.playerCount]);
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed to get health'); }
    finally { setBusy(false); }
  }, [serverId]);

  useEffect(() => {
    if (!serverId) return;
    setFpsHistory([]); setPlayerHistory([]); setHealth(null);
    refresh();
    if (!autoRefresh) return;
    const id = setInterval(refresh, 15000);
    return () => clearInterval(id);
  }, [serverId, autoRefresh, refresh]);

  async function onSendMessage() {
    if ((!message.trim() && !msgTitle.trim()) || !serverId) return;
    setBusy(true); setError(null); setMsgSuccess(false);
    try {
      await sendGlobalMessage({ serverId, title: msgTitle.trim(), message: message.trim() });
      setMessage(''); setMsgTitle(''); setMsgSuccess(true);
      setTimeout(() => setMsgSuccess(false), 3000);
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed to send message'); }
    finally { setBusy(false); }
  }

  return (
    <div className="stack">
      <div className="row" style={{ justifyContent: 'flex-end', gap: 8 }}>
        <label className="row" style={{ gap: 6, cursor: 'pointer' }}>
          <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
          <span className="muted" style={{ fontSize: 12 }}>Auto-refresh (15s)</span>
        </label>
        <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
      </div>

      {error ? <div className="error">{error}</div> : null}

      {health ? (
        <div className="statsGrid">
          <div className="card statCard">
            <div className="label">Server FPS</div>
            <div className="statValue" style={{
              background: `linear-gradient(135deg, ${fpsColor(health.fps)}, var(--rz-text-bright))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {health.fps.toFixed(1)}
            </div>
            {renderMiniChart(fpsHistory, 60, fpsColor(health.fps))}
          </div>
          <div className="card statCard">
            <div className="label">Players Online</div>
            <div className="statValue">{health.playerCount}</div>
            {renderMiniChart(playerHistory, Math.max(64, ...playerHistory), 'var(--rz-accent)')}
          </div>
        </div>
      ) : serverId ? (
        <div className="muted">Loading health data...</div>
      ) : null}

      <div className="card">
        <div className="stack">
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--rz-text-bright)', marginBottom: 4 }}>Global Announcement</div>
            <div className="muted" style={{ fontSize: 12 }}>Broadcast a message to all connected players.</div>
          </div>
          <div>
            <div className="label">Title</div>
            <input className="input" value={msgTitle} onChange={(e) => setMsgTitle(e.target.value)} placeholder="Announcement" />
          </div>
          <div className="row" style={{ gap: 12 }}>
            <input className="input" style={{ flex: 1 }} value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="Server restarting in 5 minutes..."
              onKeyDown={(e) => { if (e.key === 'Enter') onSendMessage(); }} />
            <button className="button buttonPrimary" disabled={busy || !serverId || (!message.trim() && !msgTitle.trim())} onClick={onSendMessage}>Send</button>
          </div>
          {msgSuccess ? <div className="success">Message sent successfully!</div> : null}
        </div>
      </div>
    </div>
  );
}

export function ServerPage() {
  const { serverId } = useServer();
  const [tab, setTab] = useState<'events' | 'health'>('events');

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Server</h1>

        <div className="tabBar">
          <button className={`tab${tab === 'events' ? ' tabActive' : ''}`} onClick={() => setTab('events')}>Event Log</button>
          <button className={`tab${tab === 'health' ? ' tabActive' : ''}`} onClick={() => setTab('health')}>Health &amp; Messages</button>
        </div>

        {tab === 'events' ? <EventsTab serverId={serverId} /> : <HealthTab serverId={serverId} />}
      </div>
    </div>
  );
}
