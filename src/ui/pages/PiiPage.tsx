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
    try { setPlayers((await getPiiPlayers(serverId)).players); }
    catch (e) { setError(e instanceof Error ? e.message : 'Failed'); }
    finally { setBusy(false); }
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

  const uidToNames = useMemo(() => {
    const map: Record<string, string[]> = {};
    for (const p of players) map[p.uid] = p.names;
    return map;
  }, [players]);

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">PII Data</h1>

        <div className="row" style={{ gap: 10 }}>
          <div style={{ flex: 1 }}>
            <input className="input" placeholder={revealed ? 'Search name, UID, or IP...' : 'Search name or UID...'}
              value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <button className={`button ${revealed ? 'buttonSuccess' : 'buttonDanger'}`} onClick={() => setRevealed(!revealed)}>
            {revealed ? 'Hide' : 'Reveal'}
          </button>
          <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
        </div>

        {error ? <div className="error">{error}</div> : null}

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>{filtered.length}</span>
          <span className="muted">record{filtered.length !== 1 ? 's' : ''}{players.length > 0 ? ` of ${players.length}` : ''}</span>
        </div>

        <div className="listContainer">
          <div className="listHeader" style={{ gridTemplateColumns: '2fr 1.5fr 1.5fr 0.8fr 0.8fr auto' }}>
            <div>Player</div><div>UID</div><div>{revealed ? 'Addresses' : 'Data'}</div><div>Sessions</div><div>Last Seen</div><div>Alts</div>
          </div>
          <div className="scroll" style={{ maxHeight: 600, overflow: 'auto' }}>
            {filtered.length === 0 ? (
              <div className="listEmpty">{serverId ? 'No records.' : 'Select a server.'}</div>
            ) : filtered.map((p) => (
              <div key={p.uid} className="listRow" style={{
                display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 0.8fr 0.8fr auto', gap: 8, alignItems: 'center',
                background: p.altUids.length > 0 ? 'rgba(251,146,60,0.03)' : undefined,
              }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--text-bright)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {p.names[p.names.length - 1] || '???'}
                  </div>
                  {p.names.length > 1 ? (
                    <div className="muted" style={{ fontSize: 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      aka: {p.names.slice(0, -1).join(', ')}
                    </div>
                  ) : null}
                </div>
                <div className="muted" style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {revealed ? p.uid : maskValue(p.uid)}
                </div>
                <div style={{ fontSize: 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {p.ips.length > 0 ? (
                    <span className="muted" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {revealed ? p.ips.join(', ') : p.ips.map(() => '***.***.***').join(', ')}
                    </span>
                  ) : <span className="muted">-</span>}
                </div>
                <div className="muted" style={{ fontSize: 11 }}>{p.sessionCount}</div>
                <div className="muted" style={{ fontSize: 10, whiteSpace: 'nowrap' }}>
                  {p.lastSeen ? new Date(p.lastSeen).toLocaleDateString() : '-'}
                </div>
                <div>
                  {p.altUids.length > 0 ? (
                    <span className="tag tagDeath"
                      title={p.altUids.map((u) => {
                        const names = uidToNames[u];
                        return names?.length > 0 ? names[names.length - 1] : u;
                      }).join(', ')}>
                      {p.altUids.length} alt{p.altUids.length !== 1 ? 's' : ''}
                    </span>
                  ) : <span className="muted" style={{ fontSize: 10 }}>-</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
