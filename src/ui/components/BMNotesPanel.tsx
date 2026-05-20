import React, { useEffect, useState } from 'react';
import { createPlayerNote, deleteNote, listPlayerNotes, updateNote } from '../../util/bmApi';

type Props = {
  bmPlayerId: string;
  canWrite: boolean;
};

export function BMNotesPanel({ bmPlayerId, canWrite }: Props) {
  const [notes, setNotes] = useState<any[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState('');

  async function load() {
    try {
      const out = await listPlayerNotes(bmPlayerId);
      setNotes(out.notes);
      setErr(null);
    } catch (e: any) {
      setErr(e?.message || 'Failed to load notes');
    }
  }

  useEffect(() => { load(); }, [bmPlayerId]);

  async function add() {
    if (!draft.trim()) return;
    setBusy(true);
    try {
      await createPlayerNote(bmPlayerId, { note: draft.trim(), shared: true });
      setDraft('');
      await load();
    } catch (e: any) {
      setErr(e?.message || 'Failed to add note');
    } finally {
      setBusy(false);
    }
  }

  async function remove(noteId: string) {
    if (!window.confirm('Delete this note?')) return;
    setBusy(true);
    try {
      await deleteNote(noteId);
      await load();
    } catch (e: any) {
      setErr(e?.message || 'Failed to delete');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="bmNotes">
      {err ? <div className="bmError">{err}</div> : null}
      {canWrite ? (
        <div className="bmNotes-add">
          <textarea
            rows={2}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Add a note (visible to other admins in the org)…"
            disabled={busy}
          />
          <button className="btn btn-primary" onClick={add} disabled={busy || !draft.trim()}>Add note</button>
        </div>
      ) : null}
      <ul className="bmNotes-list">
        {notes.length === 0 ? <li className="muted">No notes yet.</li> : null}
        {notes.map((n) => {
          const a = n.attributes || {};
          return (
            <li key={n.id} className="bmNotes-row">
              <div className="bmNotes-text">{a.note}</div>
              <div className="bmNotes-meta">
                <span>{a.createdAt ? new Date(a.createdAt).toLocaleString() : ''}</span>
                {canWrite ? <button className="btn btn-sm btn-danger" onClick={() => remove(n.id)}>Delete</button> : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
