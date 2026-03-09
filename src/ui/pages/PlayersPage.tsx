import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getLivePlayers, getEventLog, kickPlayer, getPlayerProfile, type LivePlayer, type PlayerProfile } from '../../util/api';
import { useServer } from '../ServerContext';

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
    setBusy(true); setError(null);
    try { setPlayers(await getLivePlayers(serverId)); }
    catch (e) { setError(e instanceof Error ? e.message : 'Failed to load players'); }
    finally { setBusy(false); }
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
    try { await kickPlayer({ serverId, playerUID: p.identityId, reason }); await refresh(); }
    catch (e) { setError(e instanceof Error ? e.message : 'Failed to kick player'); }
    finally { setBusy(false); }
  }

  return (
    <div className="stack">
      <div className="row" style={{ gap: 10 }}>
        <div style={{ flex: 1 }}>
          <input className="input" placeholder="Search by name or UID..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <label className="row" style={{ gap: 6, cursor: 'pointer' }}>
          <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
          <span className="muted" style={{ fontSize: 11 }}>Auto</span>
        </label>
        <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
      </div>

      {error ? <div className="error">{error}</div> : null}

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span className={`statusDot ${filtered.length > 0 ? 'statusDotOnline' : 'statusDotOffline'}`} />
        <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>{filtered.length}</span>
        <span className="muted">player{filtered.length !== 1 ? 's' : ''} online</span>
      </div>

      <div className="listContainer">
        <div className="listHeader" style={{ gridTemplateColumns: '2fr 1.5fr 1fr 1fr auto' }}>
          <div>Player</div><div>Position</div><div>Vehicle</div><div>Weapon</div><div style={{ textAlign: 'right' }}>Actions</div>
        </div>
        <div className="scroll" style={{ maxHeight: 560, overflow: 'auto' }}>
          {filtered.length === 0 ? (
            <div className="listEmpty">{serverId ? 'No players online.' : 'Select a server.'}</div>
          ) : filtered.map((p) => (
            <div key={p.playerId} className="listRow" style={{
              display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr auto', gap: 8, alignItems: 'center',
            }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-bright)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                <div className="muted" style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.identityId || `ID: ${p.playerId}`}</div>
              </div>
              <div className="muted" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
                {p.pos ? `${Math.round(p.pos.x)}, ${Math.round(p.pos.y)}, ${Math.round(p.pos.z)}` : '-'}
              </div>
              <div>
                {p.inVehicle && p.vehicle
                  ? <span className="tag tagServer">{p.vehicle.name || p.vehicle.prefab}</span>
                  : <span className="muted" style={{ fontSize: 11 }}>-</span>}
              </div>
              <div>
                {p.weapon
                  ? <span className="tag tagDeath">{p.weapon.name || p.weapon.prefab}</span>
                  : <span className="muted" style={{ fontSize: 11 }}>-</span>}
              </div>
              <div className="row" style={{ gap: 4, justifyContent: 'flex-end' }}>
                <button className="button" style={{ fontSize: 10, padding: '4px 8px' }} disabled={busy || !p.identityId} onClick={() => navigator.clipboard.writeText(p.identityId)}>Copy UID</button>
                <button className="button buttonDanger" style={{ fontSize: 10, padding: '4px 8px' }} disabled={busy || !p.identityId} onClick={() => onKick(p)}>Kick</button>
              </div>
            </div>
          ))}
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
    try { setProfile(await getPlayerProfile(serverId, uid.trim())); }
    catch (e) { setError(e instanceof Error ? e.message : 'Player not found'); }
    finally { setBusy(false); }
  }

  return (
    <div className="stack">
      <div className="row" style={{ gap: 10 }}>
        <div style={{ flex: 1 }}>
          <input className="input" value={uid} onChange={(e) => setUid(e.target.value)} placeholder="BI Identity ID"
            onKeyDown={(e) => { if (e.key === 'Enter') onSearch(); }} />
        </div>
        <button className="button buttonPrimary" disabled={busy || !serverId || !uid.trim()} onClick={onSearch}>Search</button>
      </div>

      {error ? <div className="error">{error}</div> : null}

      {profile ? (
        <div className="stack" style={{ animation: 'fadeUp 250ms var(--ease)' }}>
          <div className="card cardGlow" style={{ padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 'var(--r)',
                background: 'var(--cyan-dim)', border: '1px solid rgba(56,189,248,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, fontWeight: 900, color: 'var(--cyan)',
              }}>{(profile.playerName || '?')[0].toUpperCase()}</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--text-bright)' }}>{profile.playerName}</div>
                <div className="muted" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>{profile.playerUID}</div>
                {profile.lastSeen ? <div className="muted" style={{ fontSize: 11 }}>Last seen: {new Date(profile.lastSeen).toLocaleString()}</div> : null}
              </div>
            </div>
          </div>

          <div className="statsGrid">
            <div className="card statCard">
              <div className="label">Kills</div>
              <div className="statValue" style={{ color: 'var(--red)' }}>{profile.totalKills}</div>
            </div>
            <div className="card statCard">
              <div className="label">Deaths</div>
              <div className="statValue" style={{ color: 'var(--orange)' }}>{profile.totalDeaths}</div>
            </div>
            <div className="card statCard">
              <div className="label">K/D</div>
              <div className="statValue" style={{ color: 'var(--cyan)' }}>
                {profile.totalDeaths > 0 ? (profile.totalKills / profile.totalDeaths).toFixed(2) : profile.totalKills > 0 ? '---' : '0.00'}
              </div>
            </div>
          </div>

          {profile.bans.length > 0 ? (
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div className="label" style={{ marginBottom: 0 }}>Bans</div>
                <span className="badge" style={{ background: 'var(--red-dim)', color: 'var(--red)' }}>{profile.bans.length}</span>
              </div>
              <div className="listContainer"><div className="scroll" style={{ maxHeight: 200, overflow: 'auto' }}>
                {profile.bans.map((b, i) => (
                  <div key={i} className="listRow">
                    <div style={{ fontWeight: 700, color: 'var(--red)', fontSize: 12 }}>{b.reason}</div>
                    <div className="muted" style={{ fontSize: 11 }}>By: {b.bannedBy} &middot; {formatExpiry(b.timestamp, b.duration)}</div>
                  </div>
                ))}
              </div></div>
            </div>
          ) : null}

          {profile.mutes.length > 0 ? (
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div className="label" style={{ marginBottom: 0 }}>Mutes</div>
                <span className="badge" style={{ background: 'var(--orange-dim)', color: 'var(--orange)' }}>{profile.mutes.length}</span>
              </div>
              <div className="listContainer"><div className="scroll" style={{ maxHeight: 200, overflow: 'auto' }}>
                {profile.mutes.map((m, i) => (
                  <div key={i} className="listRow">
                    <div style={{ fontWeight: 700, color: 'var(--orange)', fontSize: 12 }}>{m.reason}</div>
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
  const { serverId } = useServer();
  const [tab, setTab] = useState<'live' | 'lookup'>('live');

  return (
    <div className="container">
      <div className="stack">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h1 className="h1">Players</h1>
          <div className="tabBar">
            <button className={`tab${tab === 'live' ? ' tabActive' : ''}`} onClick={() => setTab('live')}>Live</button>
            <button className={`tab${tab === 'lookup' ? ' tabActive' : ''}`} onClick={() => setTab('lookup')}>Lookup</button>
          </div>
        </div>
        {tab === 'live' ? <LivePlayersTab serverId={serverId} /> : <PlayerLookupTab serverId={serverId} />}
      </div>
    </div>
  );
}
