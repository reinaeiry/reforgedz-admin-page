import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getLivePlayers, listServers, kickPlayer, type LivePlayer, type ServerInfo } from '../../util/api';

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
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load players');
    } finally {
      setBusy(false);
    }
  }, [serverId]);

  useEffect(() => {
    if (!serverId) return;
    refresh();
    if (!autoRefresh) return;
    const id = setInterval(refresh, 10000);
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
        <div className="row" style={{ justifyContent: 'space-between' }}>
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
              <select
                className="input"
                value={serverId}
                onChange={(e) => setServerId(e.target.value)}
              >
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
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
            <div className="label">
              {filtered.length} player{filtered.length !== 1 ? 's' : ''} online
            </div>
          </div>

          <div className="scroll" style={{ maxHeight: 600, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
            {filtered.length === 0 ? (
              <div className="muted" style={{ padding: 10, fontSize: 12 }}>
                {serverId ? 'No players online.' : 'Select a server.'}
              </div>
            ) : (
              filtered.map((p) => (
                <div key={p.playerId} style={{ padding: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: 800 }}>{p.name}</div>
                      <div className="muted" style={{ fontSize: 12 }}>
                        ID: {p.playerId}
                        {p.identityId ? ` | UID: ${p.identityId}` : ''}
                      </div>
                      <div className="muted" style={{ fontSize: 12 }}>
                        {p.pos ? `Pos: ${Math.round(p.pos.x)}, ${Math.round(p.pos.y)}, ${Math.round(p.pos.z)}` : ''}
                        {p.inVehicle && p.vehicle ? ` | Vehicle: ${p.vehicle.name || p.vehicle.prefab}` : ''}
                        {p.weapon ? ` | Weapon: ${p.weapon.name || p.weapon.prefab}` : ''}
                      </div>
                    </div>
                    <div className="row" style={{ gap: 6 }}>
                      <button className="button" disabled={busy || !p.identityId} onClick={() => navigator.clipboard.writeText(p.identityId)}>
                        Copy UID
                      </button>
                      <button
                        className="button"
                        style={{ borderColor: 'rgba(255,180,180,0.35)' }}
                        disabled={busy || !p.identityId}
                        onClick={() => onKick(p)}
                      >
                        Kick
                      </button>
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
