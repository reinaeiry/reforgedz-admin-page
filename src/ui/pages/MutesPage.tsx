import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { addMute, getMutes, listServers, removeMute, type MuteEntry, type ServerInfo } from '../../util/api';
import { getSessionClaims } from '../../util/session';

const DURATION_OPTIONS = [
  { label: 'Permanent', value: 0 },
  { label: '5 minutes', value: 300 },
  { label: '30 minutes', value: 1800 },
  { label: '1 hour', value: 3600 },
  { label: '6 hours', value: 21600 },
  { label: '1 day', value: 86400 },
  { label: '7 days', value: 604800 },
];

function formatExpiry(entry: MuteEntry): string {
  if (entry.duration === 0) return 'Permanent';
  const expiresAt = (entry.timestamp + entry.duration) * 1000;
  const remaining = expiresAt - Date.now();
  if (remaining <= 0) return 'Expired';
  const hours = Math.floor(remaining / 3600000);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days}d ${hours % 24}h remaining`;
  const mins = Math.floor((remaining % 3600000) / 60000);
  if (hours > 0) return `${hours}h ${mins}m remaining`;
  return `${mins}m remaining`;
}

export function MutesPage() {
  const [searchParams] = useSearchParams();
  const initialServerId = searchParams.get('serverId') ?? '';

  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [serverId, setServerId] = useState(initialServerId);
  const [mutes, setMutes] = useState<MuteEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');

  const [muteUID, setMuteUID] = useState('');
  const [muteName, setMuteName] = useState('');
  const [muteReason, setMuteReason] = useState('');
  const [muteDuration, setMuteDuration] = useState(0);

  useEffect(() => {
    listServers().then(setServers).catch(() => {});
  }, []);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true);
    setError(null);
    try {
      setMutes(await getMutes(serverId));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load mutes');
    } finally {
      setBusy(false);
    }
  }, [serverId]);

  useEffect(() => {
    if (serverId) refresh();
  }, [serverId, refresh]);

  const filtered = useMemo(() => {
    if (!search.trim()) return mutes;
    const q = search.toLowerCase();
    return mutes.filter(
      (m) => m.playerName.toLowerCase().includes(q) || m.playerUID.toLowerCase().includes(q) || m.reason.toLowerCase().includes(q)
    );
  }, [mutes, search]);

  async function onMute() {
    if (!muteUID.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const claims = getSessionClaims();
      await addMute({
        serverId, playerUID: muteUID.trim(), playerName: muteName.trim(),
        reason: muteReason.trim() || 'No reason', duration: muteDuration,
        mutedBy: claims?.sub ?? 'WebAdmin',
      });
      setMuteUID(''); setMuteName(''); setMuteReason(''); setMuteDuration(0);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to mute player');
    } finally {
      setBusy(false);
    }
  }

  async function onUnmute(uid: string, name: string) {
    if (!confirm(`Unmute ${name || uid}?`)) return;
    setBusy(true);
    setError(null);
    try {
      await removeMute(serverId, uid);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to unmute');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Mute Management</h1>

        <div className="card">
          <div className="row" style={{ gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div className="label">Server</div>
              <select className="input" value={serverId} onChange={(e) => setServerId(e.target.value)}>
                <option value="">Select server...</option>
                {servers.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <div className="label">Search mutes</div>
              <input className="input" placeholder="Name, UID, or reason..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        </div>

        {error ? <div className="error">{error}</div> : null}

        <div className="card">
          <div className="stack">
            <div className="label">Add mute</div>
            <div className="row" style={{ gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div className="label">Player UID</div>
                <input className="input" value={muteUID} onChange={(e) => setMuteUID(e.target.value)} placeholder="BI Identity ID" />
              </div>
              <div style={{ flex: 1 }}>
                <div className="label">Player name (optional)</div>
                <input className="input" value={muteName} onChange={(e) => setMuteName(e.target.value)} placeholder="Name" />
              </div>
            </div>
            <div className="row" style={{ gap: 12 }}>
              <div style={{ flex: 2 }}>
                <div className="label">Reason</div>
                <input className="input" value={muteReason} onChange={(e) => setMuteReason(e.target.value)} placeholder="Mute reason" />
              </div>
              <div style={{ flex: 1 }}>
                <div className="label">Duration</div>
                <select className="input" value={muteDuration} onChange={(e) => setMuteDuration(Number(e.target.value))}>
                  {DURATION_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
            </div>
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button className="button buttonPrimary" disabled={busy || !serverId || !muteUID.trim()} onClick={onMute}>Mute player</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="pageHeader" style={{ marginBottom: 8 }}>
            <div className="label">{filtered.length} mute{filtered.length !== 1 ? 's' : ''}</div>
            <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
          </div>

          <div className="listContainer">
            <div className="scroll" style={{ maxHeight: 520, overflow: 'auto' }}>
              {filtered.length === 0 ? (
                <div className="muted" style={{ padding: 20, fontSize: 12, textAlign: 'center' }}>
                  {serverId ? 'No mutes found.' : 'Select a server.'}
                </div>
              ) : (
                filtered.map((m) => (
                  <div key={m.playerUID} className="listRow">
                    <div className="row" style={{ justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontWeight: 700 }}>{m.playerName || m.playerUID}</div>
                        <div className="muted" style={{ fontSize: 11 }}>UID: {m.playerUID}</div>
                        <div className="muted" style={{ fontSize: 11 }}>
                          {m.reason} &middot; By: {m.mutedBy} &middot; {formatExpiry(m)}
                        </div>
                        <div className="muted" style={{ fontSize: 10 }}>{new Date(m.timestamp * 1000).toLocaleString()}</div>
                      </div>
                      <button className="button" style={{ fontSize: 11, padding: '4px 10px', borderColor: 'rgba(183,247,200,0.35)' }}
                        disabled={busy} onClick={() => onUnmute(m.playerUID, m.playerName)}>Unmute</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
