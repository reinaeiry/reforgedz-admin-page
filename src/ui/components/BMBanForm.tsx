import React, { useMemo, useState } from 'react';
import { type BmDashServer, createBan } from '../../util/bmApi';
import { ConfirmModal } from './ConfirmModal';

type Props = {
  player: { bmPlayerId: string; name: string; guid?: string | null };
  servers: BmDashServer[];
  onClose: () => void;
  onCreated?: () => void;
};

const DURATIONS = [
  { label: 'Permanent', ms: 0 },
  { label: '1 day', ms: 24 * 60 * 60 * 1000 },
  { label: '7 days', ms: 7 * 24 * 60 * 60 * 1000 },
  { label: '30 days', ms: 30 * 24 * 60 * 60 * 1000 },
];

/**
 * Turn the server's `enforced.reason` into something an admin can act on. Every one of
 * these means the same thing operationally: BattleMetrics has a record, the game servers
 * do not, so the player can still play.
 */
function explainNotEnforced(reason?: string): string {
  switch (reason) {
    case 'temporary_ban_not_enforceable_centrally':
      return 'Recorded in BattleMetrics ONLY. Timed bans cannot be enforced on the game '
        + 'servers - our ban list has no expiry, so enforcing it would make it permanent. '
        + 'For a ban that actually applies in game, make it permanent.';
    case 'no_reforger_guid':
      return 'Recorded in BattleMetrics ONLY. We could not find a Reforger UUID for this '
        + 'player, so there is nothing to ban on the game servers. They can still play.';
    case 'controller_not_configured':
      return 'Recorded in BattleMetrics ONLY - the ban controller is not configured here, '
        + 'so nothing reached the game servers. Tell a systems dev.';
    default:
      return 'Recorded in BattleMetrics ONLY - it did NOT reach the game servers'
        + (reason ? ` (${reason})` : '') + '. The player can still play. Use `.ban <uuid>` '
        + 'in Discord, or retry.';
  }
}

export function BMBanForm({ player, servers, onClose, onCreated }: Props) {
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');
  const [durationMs, setDurationMs] = useState<number>(0);
  const [customExpires, setCustomExpires] = useState<string>(''); // local datetime string
  const [orgWide, setOrgWide] = useState(true);
  const [serverIds, setServerIds] = useState<string[]>(servers.map((s) => s.bmServerId));
  const [dualWrite, setDualWrite] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const expiresIso = useMemo(() => {
    if (customExpires) {
      const t = Date.parse(customExpires);
      return Number.isFinite(t) ? new Date(t).toISOString() : null;
    }
    if (durationMs <= 0) return null;
    return new Date(Date.now() + durationMs).toISOString();
  }, [durationMs, customExpires]);

  const summary = useMemo(() => {
    const scope = orgWide ? 'all servers' : `${serverIds.length} of ${servers.length} servers`;
    const dur = expiresIso ? `until ${new Date(expiresIso).toLocaleString()}` : 'permanent';
    return `Ban ${player.name || '(unknown)'} ${dur} (${scope}).`;
  }, [orgWide, serverIds, servers.length, expiresIso, dualWrite, player.name]);

  function toggleServer(id: string) {
    setServerIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  async function submit() {
    setBusy(true);
    setErr(null);
    try {
      const out = await createBan({
        playerId: player.bmPlayerId,
        // Without this the ban lands in every game ban file as "Unknown", losing the
        // audit trail on exactly the bans that matter most.
        playerName: player.name || undefined,
        guid: player.guid || undefined,
        reason: reason.trim(),
        note: note.trim() || undefined,
        expires: expiresIso,
        orgWide,
        serverIds: orgWide ? undefined : serverIds,
        dualWrite,
      });

      // A 2xx means BattleMetrics recorded it, NOT that the player is banned. BM reaches
      // a Reforger server over RCON, which we have not had since 1.8. Only `enforced.ok`
      // says the ban went through the controller that actually keeps them out. Stay open
      // and say so rather than closing on a green result.
      if (out && out.enforced && !out.enforced.ok) {
        setErr(explainNotEnforced(out.enforced.reason));
        onCreated?.();
        return;
      }
      onCreated?.();
      onClose();
    } catch (e: any) {
      setErr(e?.message || 'Failed to ban');
    } finally {
      setBusy(false);
      setConfirmOpen(false);
    }
  }

  return (
    <>
      <div className="modalBackdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="modalCard bmBanForm">
          <header className="modalHeader"><h3>Ban {player.name || '(unknown)'}</h3></header>
          <div className="modalBody">
            {err ? <div className="bmError">{err}</div> : null}
            <div className="field">
              <label>Reason</label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="e.g. cheating, toxicity"
                autoFocus
              />
            </div>
            <div className="field">
              <label>Internal note (optional)</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                placeholder="Context only visible to admins"
              />
            </div>
            <div className="field">
              <label>Duration</label>
              <div className="bmRadioRow">
                {DURATIONS.map((d) => (
                  <label key={d.ms} className={`bmRadioChip ${durationMs === d.ms && !customExpires ? 'on' : ''}`}>
                    <input
                      type="radio"
                      name="dur"
                      checked={durationMs === d.ms && !customExpires}
                      onChange={() => { setDurationMs(d.ms); setCustomExpires(''); }}
                    /> {d.label}
                  </label>
                ))}
                <label className={`bmRadioChip ${customExpires ? 'on' : ''}`}>
                  Custom:
                  <input
                    type="datetime-local"
                    value={customExpires}
                    onChange={(e) => setCustomExpires(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <label className="bmInlineLabel">
                <input
                  type="checkbox"
                  checked={orgWide}
                  onChange={(e) => setOrgWide(e.target.checked)}
                /> Apply across all servers (org-wide)
              </label>
            </div>
            {!orgWide ? (
              <div className="field">
                <label>Scope (pick servers)</label>
                <div className="bmServerChips">
                  {servers.map((s) => (
                    <button
                      key={s.bmServerId}
                      type="button"
                      className={`bmServerChip ${serverIds.includes(s.bmServerId) ? 'on' : ''}`}
                      onClick={() => toggleServer(s.bmServerId)}
                    >
                      {s.tag || s.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="field">
              <label className="bmInlineLabel">
                <input
                  type="checkbox"
                  checked={dualWrite}
                  onChange={(e) => setDualWrite(e.target.checked)}
                /> Also write to game-server config via SSH
              </label>
            </div>
          </div>
          <footer className="modalFooter">
            <button className="btn" onClick={onClose} disabled={busy}>Cancel</button>
            <button
              className="btn btn-danger"
              onClick={() => setConfirmOpen(true)}
              disabled={busy || !reason.trim()}
            >
              Continue
            </button>
          </footer>
        </div>
      </div>
      {confirmOpen ? (
        <ConfirmModal
          title="Confirm ban"
          danger
          busy={busy}
          body={(
            <div>
              <p>{summary}</p>
              {reason ? <p><strong>Reason:</strong> {reason}</p> : null}
            </div>
          )}
          confirmLabel="Ban"
          onConfirm={submit}
          onCancel={() => setConfirmOpen(false)}
        />
      ) : null}
    </>
  );
}
