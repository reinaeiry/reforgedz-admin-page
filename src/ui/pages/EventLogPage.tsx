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
      const dist = typeof e.distanceM === 'number' ? ` (${Math.round(e.distanceM as number)}m)` : '';
      return `${killer} killed ${victim}${weapon ? ` with ${weapon}` : ''}${dist}`;
    }
    case 'death': {
      const victim = (e.victimName as string) ?? '?';
      const killer = (e.killerName as string) ?? '';
      if (killer) return `${victim} killed by ${killer}`;
      return `${victim} died`;
    }
    case 'aiKill': {
      const killer = (e.killerName as string) ?? '?';
      const ai = (e.victimName as string) ?? 'AI';
      return `${killer} killed ${ai} (AI)`;
    }
    case 'join': {
      const name = (e.name as string) ?? '?';
      return `${name} joined`;
    }
    case 'disconnect': {
      const name = (e.name as string) ?? '?';
      const cause = (e.kickCause as string) ?? '';
      return `${name} disconnected${cause ? ` (${cause})` : ''}`;
    }
    default:
      return entry.type;
  }
}

function typeColor(type: string): string {
  switch (type) {
    case 'kill': return '#ffb4b4';
    case 'death': return '#ffd4b4';
    case 'aiKill': return '#d4b4ff';
    case 'join': return '#b7f7c8';
    case 'disconnect': return 'rgba(230,237,243,0.6)';
    default: return 'rgba(230,237,243,0.75)';
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

  useEffect(() => {
    listServers().then(setServers).catch(() => {});
  }, []);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true);
    setError(null);
    try {
      const data = await getEventLog({
        serverId,
        types: typeFilter || undefined,
        limit: 200,
      });
      setEvents(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load events');
    } finally {
      setBusy(false);
    }
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
    return events.filter((e) => {
      const summary = formatEventSummary(e).toLowerCase();
      return summary.includes(q);
    });
  }, [events, search]);

  return (
    <div className="container">
      <div className="stack">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h1 className="h1">Event Log</h1>
          <div className="row" style={{ gap: 8 }}>
            <label className="row" style={{ gap: 6 }}>
              <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
              <span className="muted" style={{ fontSize: 12 }}>Auto-refresh</span>
            </label>
            <button className="button" onClick={refresh} disabled={busy || !serverId}>
              Refresh
            </button>
          </div>
        </div>

        <div className="card">
          <div className="row" style={{ gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div className="label">Server</div>
              <select className="input" value={serverId} onChange={(e) => setServerId(e.target.value)}>
                <option value="">Select server...</option>
                {servers.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <div className="label">Type</div>
              <select className="input" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                {EVENT_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <div className="label">Search</div>
              <input className="input" placeholder="Filter events..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        </div>

        {error ? <div className="error">{error}</div> : null}

        <div className="card">
          <div className="label" style={{ marginBottom: 8 }}>
            {filtered.length} event{filtered.length !== 1 ? 's' : ''}
          </div>

          <div className="scroll" style={{ maxHeight: 600, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
            {filtered.length === 0 ? (
              <div className="muted" style={{ padding: 10, fontSize: 12 }}>
                {serverId ? 'No events found.' : 'Select a server.'}
              </div>
            ) : (
              filtered.map((e, i) => (
                <div key={`${e.tsMs}-${i}`} style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '2px 8px',
                          borderRadius: 6,
                          fontSize: 11,
                          fontWeight: 800,
                          background: 'rgba(0,0,0,0.3)',
                          color: typeColor(e.type),
                          marginRight: 8,
                          minWidth: 60,
                          textAlign: 'center',
                        }}
                      >
                        {e.type}
                      </span>
                      <span style={{ fontSize: 13 }}>{formatEventSummary(e)}</span>
                    </div>
                    <div className="muted" style={{ fontSize: 11, whiteSpace: 'nowrap' }}>
                      {new Date(e.receivedAt).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
