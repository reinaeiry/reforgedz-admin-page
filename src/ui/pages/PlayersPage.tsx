import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getLivePlayers, getEventLog, listServers, kickPlayer, getPlayerProfile, type LivePlayer, type ServerInfo, type PlayerProfile } from '../../util/api';

function formatExpiry(timestamp: number, duration: number): string {
  if (duration === 0) return 'Permanent';
  const expiresAt = (timestamp + duration) * 1000;
  const remaining = expiresAt - Date.now();
  if (remaining <= 0) return 'Expired';
  const hours = Math.floor(remaining / 3600000);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days}d ${hours % 24}h remaining`;
  const mins = Math.floor((remaining % 3600000) / 60000);
  if (hours > 0) return `${hours}h ${mins}m remaining`;
  return `${mins}m remaining`;
}

function LivePlayersTab({ serverId }: { serverId: string }) {
  const [players, setPlayers] = useState<LivePlayer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const lastEventCheckMs = useRef(0);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true);
    setError(null);
    try {
      setPlayers(await getLivePlayers(serverId));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load players');
    } finally {
      setBusy(false);
    }
  }, [serverId]);

  useEffect(() => {
    if (!serverId || !autoRefresh) return;
    refresh();
    lastEventCheckMs.current = Date.now();
    const id = setInterval(async () => {
      try {
        const events = await getEventLog({ serverId, types: 'join,disconnect', sinceTsMs: lastEventCheckMs.current, limit: 1 });
        lastEventCheckMs.current = Date.now();
        if (events.length > 0) refresh();
      } catch { /* next poll */ }
    }, 5000);
    return () => clearInterval(id);
  }, [serverId, autoRefresh, refresh]);

  const filtered = useMemo(() => {
    if (!search.trim()) return players;
    const q = search.toLowerCase();
    return players.filter((p) => p.name.toLowerCase().includes(q) || p.identityId.toLowerCase().includes(q));
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
    <div className="stack">
      <div className="row" style={{ gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div className="label">Search</div>
          <input className="input" placeholder="Filter by name or UID..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
          <label className="row" style={{ gap: 6 }}>
            <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
            <span className="muted" style={{ fontSize: 12 }}>Auto</span>
          </label>
          <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
        </div>
      </div>

      {error ? <div className="error">{error}</div> : null}

      <div className="pageHeader">
        <div className="label">{filtered.length} player{filtered.length !== 1 ? 's' : ''} online</div>
        <div className="muted" style={{ fontSize: 11 }}>Refreshes on join / leave</div>
      </div>

      <div className="listContainer">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr auto',
          gap: 8, padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.10)',
          fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(230,237,243,0.4)',
        }}>
          <div>Player</div><div>Position</div><div>Vehicle</div><div>Weapon</div><div style={{ textAlign: 'right' }}>Actions</div>
        </div>
        <div className="scroll" style={{ maxHeight: 520, overflow: 'auto' }}>
          {filtered.length === 0 ? (
            <div className="muted" style={{ padding: 20, fontSize: 12, textAlign: 'center' }}>
              {serverId ? 'No players online.' : 'Select a server.'}
            </div>
          ) : (
            filtered.map((p) => (
              <div key={p.playerId} className="listRow" style={{
                display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr auto', gap: 8, alignItems: 'center',
              }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                  <div className="muted" style={{ fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.identityId || `ID: ${p.playerId}`}</div>
                </div>
                <div className="muted" style={{ fontSize: 12 }}>{p.pos ? `${Math.round(p.pos.x)}, ${Math.round(p.pos.y)}, ${Math.round(p.pos.z)}` : '-'}</div>
                <div>{p.inVehicle && p.vehicle ? <span className="tag" style={{ background: 'rgba(100,180,255,0.12)', color: '#8ec8ff' }}>{p.vehicle.name || p.vehicle.prefab}</span> : <span className="muted" style={{ fontSize: 12 }}>-</span>}</div>
                <div>{p.weapon ? <span className="tag" style={{ background: 'rgba(255,180,100,0.12)', color: '#ffc88e' }}>{p.weapon.name || p.weapon.prefab}</span> : <span className="muted" style={{ fontSize: 12 }}>-</span>}</div>
                <div className="row" style={{ gap: 4, justifyContent: 'flex-end' }}>
                  <button className="button" style={{ fontSize: 11, padding: '4px 8px' }} disabled={busy || !p.identityId} onClick={() => navigator.clipboard.writeText(p.identityId)}>Copy UID</button>
                  <button className="button" style={{ fontSize: 11, padding: '4px 8px', borderColor: 'rgba(255,180,180,0.35)' }} disabled={busy || !p.identityId} onClick={() => onKick(p)}>Kick</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function PlayerLookupTab({ serverId }: { serverId: string }) {
  const [uid, setUid] = useState('');
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSearch() {
    if (!uid.trim() || !serverId) return;
    setBusy(true); setError(null); setProfile(null);
    try {
      setProfile(await getPlayerProfile(serverId, uid.trim()));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Player not found');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="stack">
      <div className="row" style={{ gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div className="label">Player UID</div>
          <input className="input" value={uid} onChange={(e) => setUid(e.target.value)} placeholder="BI Identity ID"
            onKeyDown={(e) => { if (e.key === 'Enter') onSearch(); }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button className="button buttonPrimary" disabled={busy || !serverId || !uid.trim()} onClick={onSearch}>Search</button>
        </div>
      </div>

      {error ? <div className="error">{error}</div> : null}

      {profile ? (
        <div className="stack">
          <div className="card">
            <div style={{ fontWeight: 800, fontSize: 16 }}>{profile.playerName}</div>
            <div className="muted" style={{ fontSize: 11, marginTop: 4 }}>UID: {profile.playerUID}</div>
            {profile.lastSeen ? <div className="muted" style={{ fontSize: 11 }}>Last seen: {new Date(profile.lastSeen).toLocaleString()}</div> : null}
          </div>

          <div className="statsGrid">
            <div className="card statCard"><div className="label">Kills</div><div className="statValue">{profile.totalKills}</div></div>
            <div className="card statCard"><div className="label">Deaths</div><div className="statValue">{profile.totalDeaths}</div></div>
            <div className="card statCard"><div className="label">K/D</div><div className="statValue">{profile.totalDeaths > 0 ? (profile.totalKills / profile.totalDeaths).toFixed(2) : profile.totalKills > 0 ? '---' : '0.00'}</div></div>
          </div>

          {profile.bans.length > 0 ? (
            <div className="card">
              <div className="label" style={{ marginBottom: 8 }}>Ban History ({profile.bans.length})</div>
              <div className="listContainer"><div className="scroll" style={{ maxHeight: 200, overflow: 'auto' }}>
                {profile.bans.map((b, i) => (
                  <div key={i} className="listRow">
                    <div style={{ fontWeight: 700, color: '#ffb4b4', fontSize: 13 }}>{b.reason}</div>
                    <div className="muted" style={{ fontSize: 11 }}>By: {b.bannedBy} &middot; {formatExpiry(b.timestamp, b.duration)}</div>
                  </div>
                ))}
              </div></div>
            </div>
          ) : null}

          {profile.mutes.length > 0 ? (
            <div className="card">
              <div className="label" style={{ marginBottom: 8 }}>Mute History ({profile.mutes.length})</div>
              <div className="listContainer"><div className="scroll" style={{ maxHeight: 200, overflow: 'auto' }}>
                {profile.mutes.map((m, i) => (
                  <div key={i} className="listRow">
                    <div style={{ fontWeight: 700, color: '#ffd4b4', fontSize: 13 }}>{m.reason}</div>
                    <div className="muted" style={{ fontSize: 11 }}>By: {m.mutedBy} &middot; {formatExpiry(m.timestamp, m.duration)}</div>
                  </div>
                ))}
              </div></div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function PlayersPage() {
  const [searchParams] = useSearchParams();
  const initialServerId = searchParams.get('serverId') ?? '';
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [serverId, setServerId] = useState(initialServerId);
  const [tab, setTab] = useState<'live' | 'lookup'>('live');

  useEffect(() => { listServers().then(setServers).catch(() => {}); }, []);

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Players</h1>

        <div className="card">
          <div className="label">Server</div>
          <select className="input" value={serverId} onChange={(e) => setServerId(e.target.value)}>
            <option value="">Select server...</option>
            {servers.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>

        <div className="tabBar">
          <button className={`tab${tab === 'live' ? ' tabActive' : ''}`} onClick={() => setTab('live')}>Live Players</button>
          <button className={`tab${tab === 'lookup' ? ' tabActive' : ''}`} onClick={() => setTab('lookup')}>Player Lookup</button>
        </div>

        {tab === 'live' ? <LivePlayersTab serverId={serverId} /> : <PlayerLookupTab serverId={serverId} />}
      </div>
    </div>
  );
}
