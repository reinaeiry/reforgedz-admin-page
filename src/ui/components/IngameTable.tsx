import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listIngame, removeIngame, patchIngame, type IngameKind, type IngameRecord } from '../../util/ingameApi';
import { hasBmPerm } from '../../util/session';
import { ConfirmModal } from './ConfirmModal';

type Props = {
  kind: IngameKind;
  serverFilter: string;  // 'all' | 'EU1' | 'NA1' | ...
};

function fmtDuration(seconds: number, ts: number): string {
  if (!seconds) return 'Permanent';
  const exp = (ts + seconds) * 1000;
  if (exp < Date.now()) return 'Expired';
  const remaining = exp - Date.now();
  const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
  if (days > 0) return `${days}d left`;
  const hrs = Math.floor(remaining / (60 * 60 * 1000));
  if (hrs > 0) return `${hrs}h left`;
  const mins = Math.max(0, Math.floor(remaining / 60_000));
  return `${mins}m left`;
}

export function IngameTable({ kind, serverFilter }: Props) {
  const [rows, setRows] = useState<IngameRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [editing, setEditing] = useState<IngameRecord | null>(null);
  const [removing, setRemoving] = useState<IngameRecord | null>(null);
  const [busy, setBusy] = useState(false);

  const canEdit = kind === 'mutes' ? hasBmPerm('editIngameMutes') : hasBmPerm('editIngameBans');

  async function refresh() {
    setLoading(true);
    try {
      const out = await listIngame(kind, { server: serverFilter });
      setRows(out.records);
      setErr(null);
    } catch (e: any) {
      setErr(e?.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [kind, serverFilter]);

  async function doRemove(rec: IngameRecord) {
    setBusy(true);
    try {
      await removeIngame(kind, rec.uid, [rec.server]);
      setRemoving(null);
      refresh();
    } catch (e: any) {
      setErr(e?.message || 'Remove failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      {err ? <div className="bmError">{err}</div> : null}
      {loading && !rows.length ? <div className="muted">Loading…</div> : null}
      {!loading && !rows.length && !err ? (
        <div className="muted">No {kind === 'mutes' ? 'mutes' : 'bans'} on {serverFilter === 'all' ? 'any server' : serverFilter}.</div>
      ) : null}
      {rows.length ? (
        <table className="bmTable">
          <thead>
            <tr>
              <th>Server</th>
              <th>Name</th>
              <th>UID</th>
              <th>Reason</th>
              <th>Expires</th>
              <th>{kind === 'mutes' ? 'Muted by' : 'Banned by'}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.server}-${r.uid}`}>
                <td><span className="bmBadge">{r.server}</span></td>
                <td>
                  <Link to={`/player/${r.uid}`}>{r.name}</Link>
                </td>
                <td><code className="bmGuid">{r.uid.slice(0, 8)}…</code></td>
                <td title={r.reason}>{r.reason}</td>
                <td>{fmtDuration(r.duration, r.timestamp)}</td>
                <td>{r.by}</td>
                <td>
                  {canEdit ? (
                    <>
                      <button className="btn btn-sm" onClick={() => setEditing(r)}>Edit</button>
                      {' '}
                      <button className="btn btn-sm btn-danger" onClick={() => setRemoving(r)}>Remove</button>
                    </>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {removing ? (
        <ConfirmModal
          title={kind === 'mutes' ? 'Unmute player?' : 'Unban player?'}
          body={<p>Remove {removing.name} from {removing.server}'s {kind} list.</p>}
          danger
          busy={busy}
          confirmLabel={kind === 'mutes' ? 'Unmute' : 'Unban'}
          onConfirm={() => doRemove(removing)}
          onCancel={() => setRemoving(null)}
        />
      ) : null}

      {editing ? (
        <EditModal
          kind={kind}
          rec={editing}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); refresh(); }}
        />
      ) : null}
    </div>
  );
}

function EditModal({ kind, rec, onClose, onSaved }: {
  kind: IngameKind; rec: IngameRecord; onClose: () => void; onSaved: () => void;
}) {
  const [reason, setReason] = useState(rec.reason);
  const [duration, setDuration] = useState<number>(rec.duration);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function save() {
    setBusy(true);
    setErr(null);
    try {
      await patchIngame(kind, rec.uid, {
        servers: [rec.server],
        patch: { reason: reason.trim(), duration }
      });
      onSaved();
    } catch (e: any) {
      setErr(e?.message || 'Save failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="modalBackdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modalCard">
        <header className="modalHeader"><h3>Edit {kind === 'mutes' ? 'mute' : 'ban'} · {rec.name} on {rec.server}</h3></header>
        <div className="modalBody">
          {err ? <div className="bmError">{err}</div> : null}
          <div className="field">
            <label>Reason</label>
            <input value={reason} onChange={(e) => setReason(e.target.value)} maxLength={500} />
          </div>
          <div className="field">
            <label>Duration (seconds, 0 = permanent)</label>
            <input
              type="text"
              value={String(duration)}
              onChange={(e) => setDuration(Math.max(0, parseInt(e.target.value.replace(/[^0-9]/g, '') || '0', 10)))}
            />
          </div>
        </div>
        <footer className="modalFooter">
          <button className="btn" onClick={onClose} disabled={busy}>Cancel</button>
          <button className="btn btn-primary" onClick={save} disabled={busy}>
            {busy ? 'Saving…' : 'Save'}
          </button>
        </footer>
      </div>
    </div>
  );
}
