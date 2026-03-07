import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPlayerProfile, listServers, type PlayerProfile, type ServerInfo } from '../../util/api';

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

export function PlayerProfilePage() {
  const [searchParams] = useSearchParams();
  const initialServerId = searchParams.get('serverId') ?? '';
  const initialUID = searchParams.get('uid') ?? '';

  const [servers, setServers] = React.useState<ServerInfo[]>([]);
  const [serverId, setServerId] = useState(initialServerId);
  const [uid, setUid] = useState(initialUID);
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  React.useEffect(() => {
    listServers().then(setServers).catch(() => {});
  }, []);

  async function onSearch() {
    if (!uid.trim() || !serverId) return;
    setBusy(true);
    setError(null);
    setProfile(null);
    try {
      setProfile(await getPlayerProfile(serverId, uid.trim()));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Player not found');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Player Lookup</h1>

        <div className="card">
          <div className="stack">
            <div className="row" style={{ gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div className="label">Server</div>
                <select className="input" value={serverId} onChange={(e) => setServerId(e.target.value)}>
                  <option value="">Select server...</option>
                  {servers.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div style={{ flex: 2 }}>
                <div className="label">Player UID</div>
                <input className="input" value={uid} onChange={(e) => setUid(e.target.value)}
                  placeholder="BI Identity ID"
                  onKeyDown={(e) => { if (e.key === 'Enter') onSearch(); }} />
              </div>
            </div>
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button className="button buttonPrimary" disabled={busy || !serverId || !uid.trim()} onClick={onSearch}>Search</button>
            </div>
          </div>
        </div>

        {error ? <div className="error">{error}</div> : null}

        {profile ? (
          <div className="stack">
            <div className="card">
              <div style={{ fontWeight: 800, fontSize: 18 }}>{profile.playerName}</div>
              <div className="muted" style={{ fontSize: 11, marginTop: 4 }}>UID: {profile.playerUID}</div>
              {profile.lastSeen ? (
                <div className="muted" style={{ fontSize: 11 }}>Last seen: {new Date(profile.lastSeen).toLocaleString()}</div>
              ) : null}
            </div>

            <div className="statsGrid">
              <div className="card statCard">
                <div className="label">Total Kills</div>
                <div className="statValue">{profile.totalKills}</div>
              </div>
              <div className="card statCard">
                <div className="label">Total Deaths</div>
                <div className="statValue">{profile.totalDeaths}</div>
              </div>
              <div className="card statCard">
                <div className="label">K/D Ratio</div>
                <div className="statValue">
                  {profile.totalDeaths > 0 ? (profile.totalKills / profile.totalDeaths).toFixed(2) : profile.totalKills > 0 ? '---' : '0.00'}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="label" style={{ marginBottom: 8 }}>Ban History ({profile.bans.length})</div>
              {profile.bans.length > 0 ? (
                <div className="listContainer">
                  <div className="scroll" style={{ maxHeight: 300, overflow: 'auto' }}>
                    {profile.bans.map((b, i) => (
                      <div key={i} className="listRow">
                        <div style={{ fontWeight: 700, color: '#ffb4b4' }}>{b.reason}</div>
                        <div className="muted" style={{ fontSize: 11 }}>
                          By: {b.bannedBy} &middot; {formatExpiry(b.timestamp, b.duration)}
                        </div>
                        <div className="muted" style={{ fontSize: 10 }}>{new Date(b.timestamp * 1000).toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 12 }}>No bans on record.</div>
              )}
            </div>

            <div className="card">
              <div className="label" style={{ marginBottom: 8 }}>Mute History ({profile.mutes.length})</div>
              {profile.mutes.length > 0 ? (
                <div className="listContainer">
                  <div className="scroll" style={{ maxHeight: 300, overflow: 'auto' }}>
                    {profile.mutes.map((m, i) => (
                      <div key={i} className="listRow">
                        <div style={{ fontWeight: 700, color: '#ffd4b4' }}>{m.reason}</div>
                        <div className="muted" style={{ fontSize: 11 }}>
                          By: {m.mutedBy} &middot; {formatExpiry(m.timestamp, m.duration)}
                        </div>
                        <div className="muted" style={{ fontSize: 10 }}>{new Date(m.timestamp * 1000).toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 12 }}>No mutes on record.</div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
