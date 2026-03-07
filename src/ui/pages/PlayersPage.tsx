import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getLivePlayers, getEventLog, listServers, kickPlayer, type LivePlayer, type ServerInfo } from '../../util/api';

export function PlayersPage() {
  const [searchParams] = useSearchParams();
  const initialServerId = searchParams.get('serverId') ?? '';

  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [serverId, setServerId] = useState(initialServerId);
  const [players, setPlayers] = useState<LivePlayer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const lastEventCheckMs = useRef(0);
  const lastPlayerCount = useRef(-1);

  useEffect(() => {
    listServers().then(setServers).catch(() => {});
  }, []);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true);
    setError(null);
    try {
      const data = await getLivePlayers(serverId);
      setPlayers(data);
      lastPlayerCount.current = data.length;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load players');
    } finally {
      setBusy(false);
    }
  }, [serverId]);

  // Poll for join/disconnect events and refresh player list when detected
  useEffect(() => {
    if (!serverId || !autoRefresh) return;
    refresh();
    lastEventCheckMs.current = Date.now();

    const id = setInterval(async () => {
      try {
        const events = await getEventLog({
          serverId,
          types: 'join,disconnect',
          sinceTsMs: lastEventCheckMs.current,
          limit: 1,
        });
        lastEventCheckMs.current = Date.now();
        if (events.length > 0) {
          refresh();
        }
      } catch {
        // silent — next poll will retry
      }
    }, 5000);

    return () => clearInterval(id);
  }, [serverId, autoRefresh, refresh]);

  const filtered = useMemo(() => {
    if (!search.trim()) return players;
    const q = search.toLowerCase();
    return players.filter(
      (p) => p.name.toLowerCase().includes(q) || p.identityId.toLowerCase().includes(q)
    );
  }, [players, search]);

  async function onKick(p: LivePlayer) {
    const reason = prompt(`Kick reason for ${p.name}:`);
    if (!reason) return;
    setBusy(true);
    try {
      await kickPlayer({ serverId, playerUID: p.identityId, reason });
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to kick player');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container">
      <div className="stack">
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className="h1">Live Players</h1>
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
              <div className="label">Search</div>
              <input
                className="input"
                placeholder="Filter by name or UID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {error ? <div className="error">{error}</div> : null}

        <div className="card">
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div className="label">
              {filtered.length} player{filtered.length !== 1 ? 's' : ''} online
            </div>
            <div className="muted" style={{ fontSize: 11 }}>
              Refreshes on join / leave
            </div>
          </div>

          {/* Table header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1.5fr 1fr 1fr auto',
              gap: 8,
              padding: '8px 12px',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(230,237,243,0.5)',
            }}
          >
            <div>Player</div>
            <div>Position</div>
            <div>Vehicle</div>
            <div>Weapon</div>
            <div style={{ textAlign: 'right' }}>Actions</div>
          </div>

          <div className="scroll" style={{ maxHeight: 600, overflow: 'auto' }}>
            {filtered.length === 0 ? (
              <div className="muted" style={{ padding: 16, fontSize: 12, textAlign: 'center' }}>
                {serverId ? 'No players online.' : 'Select a server to view players.'}
              </div>
            ) : (
              filtered.map((p) => (
                <div
                  key={p.playerId}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1.5fr 1fr 1fr auto',
                    gap: 8,
                    padding: '10px 12px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    alignItems: 'center',
                  }}
                >
                  {/* Player info */}
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {p.name}
                    </div>
                    <div className="muted" style={{ fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {p.identityId || `ID: ${p.playerId}`}
                    </div>
                  </div>

                  {/* Position */}
                  <div className="muted" style={{ fontSize: 12 }}>
                    {p.pos ? `${Math.round(p.pos.x)}, ${Math.round(p.pos.y)}, ${Math.round(p.pos.z)}` : '-'}
                  </div>

                  {/* Vehicle */}
                  <div style={{ fontSize: 12 }}>
                    {p.inVehicle && p.vehicle ? (
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: 6,
                        background: 'rgba(100,180,255,0.12)',
                        color: '#8ec8ff',
                        fontSize: 11,
                        fontWeight: 600,
                      }}>
                        {p.vehicle.name || p.vehicle.prefab}
                      </span>
                    ) : (
                      <span className="muted">-</span>
                    )}
                  </div>

                  {/* Weapon */}
                  <div style={{ fontSize: 12 }}>
                    {p.weapon ? (
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: 6,
                        background: 'rgba(255,180,100,0.12)',
                        color: '#ffc88e',
                        fontSize: 11,
                        fontWeight: 600,
                      }}>
                        {p.weapon.name || p.weapon.prefab}
                      </span>
                    ) : (
                      <span className="muted">-</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="row" style={{ gap: 6, justifyContent: 'flex-end' }}>
                    <button
                      className="button"
                      style={{ fontSize: 11, padding: '4px 10px' }}
                      disabled={busy || !p.identityId}
                      onClick={() => navigator.clipboard.writeText(p.identityId)}
                    >
                      Copy UID
                    </button>
                    <button
                      className="button"
                      style={{ fontSize: 11, padding: '4px 10px', borderColor: 'rgba(255,180,180,0.35)' }}
                      disabled={busy || !p.identityId}
                      onClick={() => onKick(p)}
                    >
                      Kick
                    </button>
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
