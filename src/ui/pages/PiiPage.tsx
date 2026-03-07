import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getPiiPlayers, type PiiPlayer } from '../../util/api';
import { useServer } from '../ServerContext';

function maskValue(value: string): string {
  if (value.length <= 4) return '****';
  return value.slice(0, 2) + '*'.repeat(value.length - 4) + value.slice(-2);
}

export function PiiPage() {
  const { serverId } = useServer();
  const [players, setPlayers] = useState<PiiPlayer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');
  const [revealed, setRevealed] = useState(false);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true); setError(null);
    try {
      const data = await getPiiPlayers(serverId);
      setPlayers(data.players);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load data');
    } finally {
      setBusy(false);
    }
  }, [serverId]);

  useEffect(() => { if (serverId) refresh(); }, [serverId, refresh]);

  const filtered = useMemo(() => {
    if (!search.trim()) return players;
    const q = search.toLowerCase();
    return players.filter((p) => {
      if (p.uid.toLowerCase().includes(q)) return true;
      if (p.names.some((n) => n.toLowerCase().includes(q))) return true;
      if (revealed && p.ips.some((ip) => ip.toLowerCase().includes(q))) return true;
      return false;
    });
  }, [players, search, revealed]);

  // Build a lookup map for alt names
  const uidToNames = useMemo(() => {
    const map: Record<string, string[]> = {};
    for (const p of players) {
      map[p.uid] = p.names;
    }
    return map;
  }, [players]);

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">PII</h1>

        <div className="row" style={{ gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div className="label">Search</div>
            <input className="input" placeholder={revealed ? 'Search by name, UID, or address...' : 'Search by name or UID...'}
              value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
            <button className={`button${revealed ? ' buttonPrimary' : ''}`}
              style={!revealed ? { borderColor: 'rgba(255,180,180,0.35)' } : undefined}
              onClick={() => setRevealed(!revealed)}>
              {revealed ? 'Hide All' : 'Reveal All'}
            </button>
            <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
          </div>
        </div>

        {error ? <div className="error">{error}</div> : null}

        <div className="label">{filtered.length} record{filtered.length !== 1 ? 's' : ''}{players.length > 0 ? ` of ${players.length} total` : ''}</div>

        <div className="listContainer">
          <div style={{
            display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 0.8fr 0.8fr auto',
            gap: 8, padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.10)',
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(230,237,243,0.4)',
          }}>
            <div>Player</div><div>UID</div><div>{revealed ? 'Addresses' : 'Data'}</div><div>Sessions</div><div>Last Seen</div><div>Alts</div>
          </div>
          <div className="scroll" style={{ maxHeight: 600, overflow: 'auto' }}>
            {filtered.length === 0 ? (
              <div className="muted" style={{ padding: 20, fontSize: 12, textAlign: 'center' }}>
                {serverId ? 'No records found.' : 'Select a server.'}
              </div>
            ) : (
              filtered.map((p) => (
                <div key={p.uid} className="listRow" style={{
                  display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 0.8fr 0.8fr auto', gap: 8, alignItems: 'center',
                  background: p.altUids.length > 0 ? 'rgba(255,180,100,0.06)' : undefined,
                }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {p.names[p.names.length - 1] || '???'}
                    </div>
                    {p.names.length > 1 ? (
                      <div className="muted" style={{ fontSize: 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        aka: {p.names.slice(0, -1).join(', ')}
                      </div>
                    ) : null}
                  </div>
                  <div className="muted" style={{ fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'monospace' }}>
                    {revealed ? p.uid : maskValue(p.uid)}
                  </div>
                  <div style={{ fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {p.ips.length > 0 ? (
                      <span className="muted" style={{ fontFamily: 'monospace' }}>
                        {revealed ? p.ips.join(', ') : p.ips.map(() => '***.***.***').join(', ')}
                      </span>
                    ) : (
                      <span className="muted">-</span>
                    )}
                  </div>
                  <div className="muted" style={{ fontSize: 12 }}>{p.sessionCount}</div>
                  <div className="muted" style={{ fontSize: 11, whiteSpace: 'nowrap' }}>
                    {p.lastSeen ? new Date(p.lastSeen).toLocaleDateString() : '-'}
                  </div>
                  <div>
                    {p.altUids.length > 0 ? (
                      <span className="tag" style={{ background: 'rgba(255,180,100,0.15)', color: '#ffc88e', fontSize: 10 }}
                        title={p.altUids.map((u) => {
                          const names = uidToNames[u];
                          return names && names.length > 0 ? names[names.length - 1] : u;
                        }).join(', ')}>
                        {p.altUids.length} alt{p.altUids.length !== 1 ? 's' : ''}
                      </span>
                    ) : (
                      <span className="muted" style={{ fontSize: 11 }}>-</span>
                    )}
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
