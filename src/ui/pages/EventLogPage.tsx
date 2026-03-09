import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getEventLog, listServers, type EventLogEntry, type ServerInfo } from '../../util/api';

const EVENT_TYPES = [
  { label: 'All', value: '' },
  { label: 'Kills', value: 'kill' },
  { label: 'Deaths', value: 'death' },
  { label: 'AI Kills', value: 'aiKill' },
  { label: 'Joins', value: 'join' },
  { label: 'Disconnects', value: 'disconnect' },
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
    case 'join': return `${(e.name as string) ?? '?'} joined`;
    case 'disconnect': {
      const name = (e.name as string) ?? '?';
      const cause = (e.kickCause as string) ?? '';
      return `${name} disconnected${cause ? ` (${cause})` : ''}`;
    }
    default: return entry.type;
  }
}

function typeTagClass(type: string): string {
  switch (type) {
    case 'kill': return 'tagKill';
    case 'death': return 'tagDeath';
    case 'aiKill': return 'tagAiKill';
    case 'join': return 'tagJoin';
    case 'disconnect': return 'tagDisconnect';
    default: return 'tagDisconnect';
  }
}

export function EventLogPage() {
  const [searchParams] = useSearchParams();
  const initialServerId = searchParams.get('serverId') ?? '';

  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [serverId, setServerId] = useState(initialServerId);
  const [events, setEvents] = useState<EventLogEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [search, setSearch] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => { listServers().then(setServers).catch(() => {}); }, []);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true); setError(null);
    try { setEvents(await getEventLog({ serverId, types: typeFilter || undefined, limit: 200 })); }
    catch (e) { setError(e instanceof Error ? e.message : 'Failed'); }
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
    <div className="container">
      <div className="stack">
        <div className="pageHeader">
          <h1 className="h1">Event Log</h1>
          <div className="row" style={{ gap: 8 }}>
            <label className="row" style={{ gap: 6, cursor: 'pointer' }}>
              <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
              <span className="muted" style={{ fontSize: 11 }}>Auto</span>
            </label>
            <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
          </div>
        </div>

        <div className="card">
          <div className="row" style={{ gap: 10 }}>
            <div style={{ flex: 1 }}>
              <div className="label">Server</div>
              <select className="input" value={serverId} onChange={(e) => setServerId(e.target.value)}>
                <option value="">Select server...</option>
                {servers.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <div className="label">Type</div>
              <select className="input" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                {EVENT_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <div className="label">Search</div>
              <input className="input" placeholder="Filter..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        </div>

        {error ? <div className="error">{error}</div> : null}

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>{filtered.length}</span>
          <span className="muted">event{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        <div className="listContainer">
          <div className="scroll" style={{ maxHeight: 600, overflow: 'auto' }}>
            {filtered.length === 0 ? (
              <div className="listEmpty">{serverId ? 'No events.' : 'Select a server.'}</div>
            ) : filtered.map((e, i) => (
              <div key={`${e.tsMs}-${i}`} className="listRow" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                  <span className={`tag ${typeTagClass(e.type)}`} style={{ minWidth: 64, textAlign: 'center', textTransform: 'capitalize' }}>{e.type}</span>
                  <span style={{ fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{formatEventSummary(e)}</span>
                </div>
                <span className="muted" style={{ fontSize: 10, whiteSpace: 'nowrap', flexShrink: 0, fontFamily: "'JetBrains Mono', monospace" }}>
                  {new Date(e.receivedAt).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
