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
      const data = await getPlayerProfile(serverId, uid.trim());
      setProfile(data);
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
                  {servers.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: 2 }}>
                <div className="label">Player UID</div>
                <input
                  className="input"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  placeholder="BI Identity ID"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onSearch();
                  }}
                />
              </div>
            </div>
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button className="button buttonPrimary" disabled={busy || !serverId || !uid.trim()} onClick={onSearch}>
                Search
              </button>
            </div>
          </div>
        </div>

        {error ? <div className="error">{error}</div> : null}

        {profile ? (
          <div className="stack">
            <div className="card">
              <div className="stack" style={{ gap: 8 }}>
                <div style={{ fontSize: 18, fontWeight: 900 }}>{profile.playerName}</div>
                <div className="muted" style={{ fontSize: 12 }}>UID: {profile.playerUID}</div>
                {profile.lastSeen ? (
                  <div className="muted" style={{ fontSize: 12 }}>
                    Last seen: {new Date(profile.lastSeen).toLocaleString()}
                  </div>
                ) : null}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <div className="card">
                <div className="label">Total Kills</div>
                <div style={{ fontSize: 28, fontWeight: 900 }}>{profile.totalKills}</div>
              </div>
              <div className="card">
                <div className="label">Total Deaths</div>
                <div style={{ fontSize: 28, fontWeight: 900 }}>{profile.totalDeaths}</div>
              </div>
              <div className="card">
                <div className="label">K/D Ratio</div>
                <div style={{ fontSize: 28, fontWeight: 900 }}>
                  {profile.totalDeaths > 0 ? (profile.totalKills / profile.totalDeaths).toFixed(2) : profile.totalKills > 0 ? '---' : '0.00'}
                </div>
              </div>
            </div>

            {profile.bans.length > 0 ? (
              <div className="card">
                <div className="label" style={{ marginBottom: 8 }}>Ban History ({profile.bans.length})</div>
                <div className="scroll" style={{ maxHeight: 300, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
                  {profile.bans.map((b, i) => (
                    <div key={i} style={{ padding: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontWeight: 800, color: '#ffb4b4' }}>{b.reason}</div>
                      <div className="muted" style={{ fontSize: 12 }}>
                        By: {b.bannedBy} | {formatExpiry(b.timestamp, b.duration)}
                      </div>
                      <div className="muted" style={{ fontSize: 11 }}>
                        {new Date(b.timestamp * 1000).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="label">Ban History</div>
                <div className="muted" style={{ fontSize: 12 }}>No bans on record.</div>
              </div>
            )}

            {profile.mutes.length > 0 ? (
              <div className="card">
                <div className="label" style={{ marginBottom: 8 }}>Mute History ({profile.mutes.length})</div>
                <div className="scroll" style={{ maxHeight: 300, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
                  {profile.mutes.map((m, i) => (
                    <div key={i} style={{ padding: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontWeight: 800, color: '#ffd4b4' }}>{m.reason}</div>
                      <div className="muted" style={{ fontSize: 12 }}>
                        By: {m.mutedBy} | {formatExpiry(m.timestamp, m.duration)}
                      </div>
                      <div className="muted" style={{ fontSize: 11 }}>
                        {new Date(m.timestamp * 1000).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="label">Mute History</div>
                <div className="muted" style={{ fontSize: 12 }}>No mutes on record.</div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
