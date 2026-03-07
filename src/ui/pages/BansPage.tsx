import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { addBan, getBans, listServers, removeBan, type BanEntry, type ServerInfo } from '../../util/api';
import { getSessionClaims } from '../../util/session';

const DURATION_OPTIONS = [
  { label: 'Permanent', value: 0 },
  { label: '1 hour', value: 3600 },
  { label: '6 hours', value: 21600 },
  { label: '1 day', value: 86400 },
  { label: '3 days', value: 259200 },
  { label: '7 days', value: 604800 },
  { label: '30 days', value: 2592000 },
];

function formatExpiry(entry: BanEntry): string {
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

export function BansPage() {
  const [searchParams] = useSearchParams();
  const initialServerId = searchParams.get('serverId') ?? '';

  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [serverId, setServerId] = useState(initialServerId);
  const [bans, setBans] = useState<BanEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');

  const [banUID, setBanUID] = useState('');
  const [banName, setBanName] = useState('');
  const [banReason, setBanReason] = useState('');
  const [banDuration, setBanDuration] = useState(0);

  useEffect(() => {
    listServers().then(setServers).catch(() => {});
  }, []);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true);
    setError(null);
    try {
      setBans(await getBans(serverId));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load bans');
    } finally {
      setBusy(false);
    }
  }, [serverId]);

  useEffect(() => {
    if (serverId) refresh();
  }, [serverId, refresh]);

  const filtered = useMemo(() => {
    if (!search.trim()) return bans;
    const q = search.toLowerCase();
    return bans.filter(
      (b) =>
        b.playerName.toLowerCase().includes(q) ||
        b.playerUID.toLowerCase().includes(q) ||
        b.reason.toLowerCase().includes(q)
    );
  }, [bans, search]);

  async function onBan() {
    if (!banUID.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const claims = getSessionClaims();
      await addBan({
        serverId,
        playerUID: banUID.trim(),
        playerName: banName.trim(),
        reason: banReason.trim() || 'No reason',
        duration: banDuration,
        bannedBy: claims?.sub ?? 'WebAdmin',
      });
      setBanUID('');
      setBanName('');
      setBanReason('');
      setBanDuration(0);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to ban player');
    } finally {
      setBusy(false);
    }
  }

  async function onUnban(uid: string, name: string) {
    if (!confirm(`Unban ${name || uid}?`)) return;
    setBusy(true);
    setError(null);
    try {
      await removeBan(serverId, uid);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to unban');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Ban Management</h1>

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
              <div className="label">Search bans</div>
              <input className="input" placeholder="Name, UID, or reason..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        </div>

        {error ? <div className="error">{error}</div> : null}

        <div className="card">
          <div className="stack">
            <div className="label">Add ban</div>
            <div className="row">
              <div style={{ flex: 1 }}>
                <div className="label">Player UID</div>
                <input className="input" value={banUID} onChange={(e) => setBanUID(e.target.value)} placeholder="BI Identity ID" />
              </div>
              <div style={{ flex: 1 }}>
                <div className="label">Player name (optional)</div>
                <input className="input" value={banName} onChange={(e) => setBanName(e.target.value)} placeholder="Name" />
              </div>
            </div>
            <div className="row">
              <div style={{ flex: 2 }}>
                <div className="label">Reason</div>
                <input className="input" value={banReason} onChange={(e) => setBanReason(e.target.value)} placeholder="Ban reason" />
              </div>
              <div style={{ flex: 1 }}>
                <div className="label">Duration</div>
                <select className="input" value={banDuration} onChange={(e) => setBanDuration(Number(e.target.value))}>
                  {DURATION_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button className="button buttonPrimary" disabled={busy || !serverId || !banUID.trim()} onClick={onBan}>
                Ban player
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
            <div className="label">{filtered.length} ban{filtered.length !== 1 ? 's' : ''}</div>
            <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
          </div>

          <div className="scroll" style={{ maxHeight: 520, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
            {filtered.length === 0 ? (
              <div className="muted" style={{ padding: 10, fontSize: 12 }}>
                {serverId ? 'No bans found.' : 'Select a server.'}
              </div>
            ) : (
              filtered.map((b) => (
                <div key={b.playerUID} style={{ padding: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: 800 }}>{b.playerName || b.playerUID}</div>
                      <div className="muted" style={{ fontSize: 12 }}>
                        UID: {b.playerUID}
                      </div>
                      <div className="muted" style={{ fontSize: 12 }}>
                        Reason: {b.reason} | By: {b.bannedBy} | {formatExpiry(b)}
                      </div>
                      <div className="muted" style={{ fontSize: 11 }}>
                        Banned: {new Date(b.timestamp * 1000).toLocaleString()}
                      </div>
                    </div>
                    <button
                      className="button"
                      style={{ borderColor: 'rgba(183,247,200,0.35)' }}
                      disabled={busy}
                      onClick={() => onUnban(b.playerUID, b.playerName)}
                    >
                      Unban
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
