import React, { useMemo, useState } from 'react';
import { addIngame, type IngameKind } from '../../util/ingameApi';

type Player = { uid: string; name: string };

type Props = {
  kind: IngameKind;
  player: Player;
  servers: string[];          // tag list, e.g. ['EU1', 'EU2', 'NA1', 'NA2']
  onClose: () => void;
  onCreated?: () => void;
};

// Common moderation durations. 0 = permanent. Mutes get a shorter set in
// practice; ban-style 30d+ presets still work for mutes if needed.
const DURATIONS = [
  { label: '5 min', s: 5 * 60 },
  { label: '30 min', s: 30 * 60 },
  { label: '1 hour', s: 60 * 60 },
  { label: '1 day', s: 24 * 60 * 60 },
  { label: '7 days', s: 7 * 24 * 60 * 60 },
  { label: '30 days', s: 30 * 24 * 60 * 60 },
  { label: 'Permanent', s: 0 }
];

export function IngameActionForm({ kind, player, servers, onClose, onCreated }: Props) {
  const action = kind === 'mutes' ? 'mute' : 'ban';
  const [reason, setReason] = useState('');
  const [duration, setDuration] = useState<number>(kind === 'mutes' ? 60 * 60 : 0);
  const [customSeconds, setCustomSeconds] = useState<string>('');
  const [allServers, setAllServers] = useState(true);
  const [selectedServers, setSelectedServers] = useState<string[]>(servers);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const effectiveDuration = useMemo(() => {
    if (customSeconds.trim()) {
      const n = parseInt(customSeconds, 10);
      return Number.isFinite(n) && n >= 0 ? n : 0;
    }
    return duration;
  }, [customSeconds, duration]);

  const targets = allServers ? servers : selectedServers;

  function toggle(tag: string) {
    setSelectedServers((prev) => prev.includes(tag) ? prev.filter((x) => x !== tag) : [...prev, tag]);
  }

  async function submit() {
    if (!reason.trim()) { setErr('Reason is required'); return; }
    if (!targets.length) { setErr('Pick at least one server'); return; }
    setBusy(true);
    setErr(null);
    try {
      await addIngame(kind, {
        uid: player.uid,
        name: player.name,
        reason: reason.trim(),
        duration: effectiveDuration,
        servers: targets
      });
      onCreated?.();
      onClose();
    } catch (e: any) {
      setErr(e?.message || `Failed to ${action}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="modalBackdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modalCard bmBanForm">
        <header className="modalHeader">
          <h3>{action[0].toUpperCase() + action.slice(1)} {player.name}</h3>
        </header>
        <div className="modalBody">
          {err ? <div className="bmError">{err}</div> : null}

          <div className="field">
            <label>Player</label>
            <div className="muted"><code>{player.uid}</code> · {player.name}</div>
          </div>

          <div className="field">
            <label>Reason</label>
            <input
              autoFocus
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={`Reason for ${action}`}
              maxLength={500}
            />
          </div>

          <div className="field">
            <label>Duration</label>
            <div className="bmLogs-chips">
              {DURATIONS.map((d) => (
                <button
                  key={d.s}
                  type="button"
                  className={`bmChip ${duration === d.s && !customSeconds ? 'bmChip-on' : ''}`}
                  onClick={() => { setDuration(d.s); setCustomSeconds(''); }}
                >{d.label}</button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Custom duration in seconds (overrides preset)"
              value={customSeconds}
              onChange={(e) => setCustomSeconds(e.target.value.replace(/[^0-9]/g, ''))}
              style={{ marginTop: 6 }}
            />
            <div className="muted" style={{ fontSize: '.72rem', marginTop: 4 }}>
              {effectiveDuration === 0 ? 'Permanent' : `Expires in ${Math.round(effectiveDuration / 60)} minutes`}
            </div>
          </div>

          <div className="field">
            <label>Servers</label>
            <label className="muted" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <input type="checkbox" checked={allServers} onChange={(e) => setAllServers(e.target.checked)} />
              <span>Apply to all servers ({servers.length})</span>
            </label>
            {!allServers ? (
              <div className="bmLogs-chips">
                {servers.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`bmChip ${selectedServers.includes(tag) ? 'bmChip-on' : ''}`}
                    onClick={() => toggle(tag)}
                  >{tag}</button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <footer className="modalFooter">
          <button className="btn" onClick={onClose} disabled={busy}>Cancel</button>
          <button className="btn btn-danger" onClick={submit} disabled={busy}>
            {busy ? 'Working…' : (action[0].toUpperCase() + action.slice(1))}
          </button>
        </footer>
      </div>
    </div>
  );
}
