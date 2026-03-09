import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { addBan, getBans, removeBan, addMute, getMutes, removeMute, type BanEntry, type MuteEntry } from '../../util/api';
import { getSessionClaims } from '../../util/session';
import { useServer } from '../ServerContext';

const BAN_DURATIONS = [
  { label: 'Permanent', value: 0 },
  { label: '1 hour', value: 3600 },
  { label: '6 hours', value: 21600 },
  { label: '1 day', value: 86400 },
  { label: '3 days', value: 259200 },
  { label: '7 days', value: 604800 },
  { label: '30 days', value: 2592000 },
];

const MUTE_DURATIONS = [
  { label: 'Permanent', value: 0 },
  { label: '5 minutes', value: 300 },
  { label: '30 minutes', value: 1800 },
  { label: '1 hour', value: 3600 },
  { label: '6 hours', value: 21600 },
  { label: '1 day', value: 86400 },
  { label: '7 days', value: 604800 },
];

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

function expiryTag(ts: number, dur: number): { color: string; bg: string } {
  if (dur === 0) return { color: 'var(--red)', bg: 'var(--red-dim)' };
  const rem = (ts + dur) * 1000 - Date.now();
  if (rem <= 0) return { color: 'var(--text-dim)', bg: 'rgba(255,255,255,0.04)' };
  return { color: 'var(--yellow)', bg: 'var(--yellow-dim)' };
}

function BansTab({ serverId }: { serverId: string }) {
  const [bans, setBans] = useState<BanEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');
  const [banUID, setBanUID] = useState('');
  const [banName, setBanName] = useState('');
  const [banReason, setBanReason] = useState('');
  const [banDuration, setBanDuration] = useState(0);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true); setError(null);
    try { setBans(await getBans(serverId)); } catch (e) { setError(e instanceof Error ? e.message : 'Failed to load bans'); } finally { setBusy(false); }
  }, [serverId]);

  useEffect(() => { if (serverId) refresh(); }, [serverId, refresh]);

  const filtered = useMemo(() => {
    if (!search.trim()) return bans;
    const q = search.toLowerCase();
    return bans.filter((b) => b.playerName.toLowerCase().includes(q) || b.playerUID.toLowerCase().includes(q) || b.reason.toLowerCase().includes(q));
  }, [bans, search]);

  async function onBan() {
    if (!banUID.trim()) return;
    setBusy(true); setError(null);
    try {
      const claims = getSessionClaims();
      await addBan({ serverId, playerUID: banUID.trim(), playerName: banName.trim(), reason: banReason.trim() || 'No reason', duration: banDuration, bannedBy: claims?.sub ?? 'WebAdmin' });
      setBanUID(''); setBanName(''); setBanReason(''); setBanDuration(0);
      await refresh();
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed to ban'); } finally { setBusy(false); }
  }

  async function onUnban(uid: string, name: string) {
    if (!confirm(`Unban ${name || uid}?`)) return;
    setBusy(true); setError(null);
    try { await removeBan(serverId, uid); setBans((p) => p.filter((b) => b.playerUID !== uid)); } catch (e) { setError(e instanceof Error ? e.message : 'Failed to unban'); } finally { setBusy(false); }
  }

  return (
    <div className="stack">
      <div className="card">
        <div className="stack" style={{ gap: 12 }}>
          <div style={{ fontWeight: 700, color: 'var(--text-bright)' }}>Add Ban</div>
          <div className="row" style={{ gap: 10 }}>
            <div style={{ flex: 1 }}><div className="label">Player UID</div><input className="input" value={banUID} onChange={(e) => setBanUID(e.target.value)} placeholder="BI Identity ID" /></div>
            <div style={{ flex: 1 }}><div className="label">Name</div><input className="input" value={banName} onChange={(e) => setBanName(e.target.value)} placeholder="Optional" /></div>
          </div>
          <div className="row" style={{ gap: 10 }}>
            <div style={{ flex: 2 }}><div className="label">Reason</div><input className="input" value={banReason} onChange={(e) => setBanReason(e.target.value)} placeholder="Ban reason" /></div>
            <div style={{ flex: 1 }}><div className="label">Duration</div><select className="input" value={banDuration} onChange={(e) => setBanDuration(Number(e.target.value))}>{BAN_DURATIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button className="button buttonPrimary" disabled={busy || !serverId || !banUID.trim()} onClick={onBan}>Ban Player</button>
          </div>
        </div>
      </div>

      {error ? <div className="error">{error}</div> : null}

      <div className="row" style={{ gap: 10 }}>
        <div style={{ flex: 1 }}><input className="input" placeholder="Search bans..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>{filtered.length}</span>
        <span className="muted">ban{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="listContainer">
        <div className="scroll" style={{ maxHeight: 440, overflow: 'auto' }}>
          {filtered.length === 0 ? (
            <div className="listEmpty">{serverId ? 'No bans.' : 'Select a server.'}</div>
          ) : filtered.map((b) => {
            const et = expiryTag(b.timestamp, b.duration);
            return (
              <div key={b.playerUID} className="listRow">
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>{b.playerName || b.playerUID}</span>
                      <span className="tag" style={{ color: et.color, background: et.bg }}>{formatExpiry(b.timestamp, b.duration)}</span>
                    </div>
                    <div className="muted" style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{b.playerUID}</div>
                    <div className="muted" style={{ fontSize: 11, marginTop: 1 }}>{b.reason} &middot; by {b.bannedBy}</div>
                  </div>
                  <button className="button buttonSuccess" style={{ fontSize: 10, padding: '4px 10px', flexShrink: 0 }} disabled={busy} onClick={() => onUnban(b.playerUID, b.playerName)}>Unban</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MutesTab({ serverId }: { serverId: string }) {
  const [mutes, setMutes] = useState<MuteEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [search, setSearch] = useState('');
  const [muteUID, setMuteUID] = useState('');
  const [muteName, setMuteName] = useState('');
  const [muteReason, setMuteReason] = useState('');
  const [muteDuration, setMuteDuration] = useState(0);

  const refresh = useCallback(async () => {
    if (!serverId) return;
    setBusy(true); setError(null);
    try { setMutes(await getMutes(serverId)); } catch (e) { setError(e instanceof Error ? e.message : 'Failed to load mutes'); } finally { setBusy(false); }
  }, [serverId]);

  useEffect(() => { if (serverId) refresh(); }, [serverId, refresh]);

  const filtered = useMemo(() => {
    if (!search.trim()) return mutes;
    const q = search.toLowerCase();
    return mutes.filter((m) => m.playerName.toLowerCase().includes(q) || m.playerUID.toLowerCase().includes(q) || m.reason.toLowerCase().includes(q));
  }, [mutes, search]);

  async function onMute() {
    if (!muteUID.trim()) return;
    setBusy(true); setError(null);
    try {
      const claims = getSessionClaims();
      await addMute({ serverId, playerUID: muteUID.trim(), playerName: muteName.trim(), reason: muteReason.trim() || 'No reason', duration: muteDuration, mutedBy: claims?.sub ?? 'WebAdmin' });
      setMuteUID(''); setMuteName(''); setMuteReason(''); setMuteDuration(0);
      await refresh();
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed to mute'); } finally { setBusy(false); }
  }

  async function onUnmute(uid: string, name: string) {
    if (!confirm(`Unmute ${name || uid}?`)) return;
    setBusy(true); setError(null);
    try { await removeMute(serverId, uid); setMutes((p) => p.filter((m) => m.playerUID !== uid)); } catch (e) { setError(e instanceof Error ? e.message : 'Failed to unmute'); } finally { setBusy(false); }
  }

  return (
    <div className="stack">
      <div className="card">
        <div className="stack" style={{ gap: 12 }}>
          <div style={{ fontWeight: 700, color: 'var(--text-bright)' }}>Add Mute</div>
          <div className="row" style={{ gap: 10 }}>
            <div style={{ flex: 1 }}><div className="label">Player UID</div><input className="input" value={muteUID} onChange={(e) => setMuteUID(e.target.value)} placeholder="BI Identity ID" /></div>
            <div style={{ flex: 1 }}><div className="label">Name</div><input className="input" value={muteName} onChange={(e) => setMuteName(e.target.value)} placeholder="Optional" /></div>
          </div>
          <div className="row" style={{ gap: 10 }}>
            <div style={{ flex: 2 }}><div className="label">Reason</div><input className="input" value={muteReason} onChange={(e) => setMuteReason(e.target.value)} placeholder="Mute reason" /></div>
            <div style={{ flex: 1 }}><div className="label">Duration</div><select className="input" value={muteDuration} onChange={(e) => setMuteDuration(Number(e.target.value))}>{MUTE_DURATIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button className="button buttonPrimary" disabled={busy || !serverId || !muteUID.trim()} onClick={onMute}>Mute Player</button>
          </div>
        </div>
      </div>

      {error ? <div className="error">{error}</div> : null}

      <div className="row" style={{ gap: 10 }}>
        <div style={{ flex: 1 }}><input className="input" placeholder="Search mutes..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        <button className="button" onClick={refresh} disabled={busy || !serverId}>Refresh</button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>{filtered.length}</span>
        <span className="muted">mute{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="listContainer">
        <div className="scroll" style={{ maxHeight: 440, overflow: 'auto' }}>
          {filtered.length === 0 ? (
            <div className="listEmpty">{serverId ? 'No mutes.' : 'Select a server.'}</div>
          ) : filtered.map((m) => {
            const et = expiryTag(m.timestamp, m.duration);
            return (
              <div key={m.playerUID} className="listRow">
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>{m.playerName || m.playerUID}</span>
                      <span className="tag" style={{ color: et.color, background: et.bg }}>{formatExpiry(m.timestamp, m.duration)}</span>
                    </div>
                    <div className="muted" style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{m.playerUID}</div>
                    <div className="muted" style={{ fontSize: 11, marginTop: 1 }}>{m.reason} &middot; by {m.mutedBy}</div>
                  </div>
                  <button className="button buttonSuccess" style={{ fontSize: 10, padding: '4px 10px', flexShrink: 0 }} disabled={busy} onClick={() => onUnmute(m.playerUID, m.playerName)}>Unmute</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ModerationPage() {
  const { serverId } = useServer();
  const [tab, setTab] = useState<'bans' | 'mutes'>('bans');

  return (
    <div className="container">
      <div className="stack">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h1 className="h1">Moderation</h1>
          <div className="tabBar">
            <button className={`tab${tab === 'bans' ? ' tabActive' : ''}`} onClick={() => setTab('bans')}>Bans</button>
            <button className={`tab${tab === 'mutes' ? ' tabActive' : ''}`} onClick={() => setTab('mutes')}>Mutes</button>
          </div>
        </div>
        {tab === 'bans' ? <BansTab serverId={serverId} /> : <MutesTab serverId={serverId} />}
      </div>
    </div>
  );
}
