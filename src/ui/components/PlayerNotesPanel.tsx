import React, { useEffect, useState } from 'react';
import { addNote, editNote, getNotes, removeNote, type ArchivedNote, type PlayerNote } from '../../util/playersApi';

// Staff notes on a player, kept by us (replaces BattleMetrics notes). Notes BattleMetrics held before
// 2026-09-28 are shown below ours, read-only, from the archive. Nothing is ever hard-deleted: a
// deleted note leaves the list but keeps who deleted it and when.

// Archived BattleMetrics notes can hold pasted rich-text HTML. Show it as plain text (never as HTML).
function htmlToText(html: string): string {
  if (!html) return '';
  let s = html
    .replace(/<br\s*\/?>(\r?\n)?/gi, '\n')
    .replace(/<\/(p|div|blockquote|li|h[1-6])>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<[^>]+>/g, '');
  s = s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x?([0-9a-f]+);/gi, (m, code) => String.fromCodePoint(parseInt(code, /^&#x/i.test(m) ? 16 : 10)));
  return s.replace(/\n{3,}/g, '\n\n').trim();
}

type Props = { guid: string; canWrite: boolean };

export function PlayerNotesPanel({ guid, canWrite }: Props) {
  const [notes, setNotes] = useState<PlayerNote[]>([]);
  const [archived, setArchived] = useState<ArchivedNote[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState('');
  const [editing, setEditing] = useState<{ id: number; text: string } | null>(null);

  async function load() {
    try {
      const out = await getNotes(guid);
      setNotes(out.notes || []);
      setArchived(out.archived || []);
      setErr(null);
    } catch (e: any) {
      setErr(e?.message || 'Failed to load notes');
    }
  }

  useEffect(() => { load(); }, [guid]);

  async function run(fn: () => Promise<unknown>, failMsg: string) {
    setBusy(true);
    try {
      await fn();
      await load();
    } catch (e: any) {
      setErr(e?.message || failMsg);
    } finally {
      setBusy(false);
    }
  }

  const add = () => draft.trim() && run(async () => { await addNote(guid, draft.trim()); setDraft(''); }, 'Failed to add note');
  const saveEdit = () => editing && editing.text.trim()
    && run(async () => { await editNote(editing.id, editing.text.trim()); setEditing(null); }, 'Failed to save note');
  const remove = (id: number) => window.confirm('Delete this note? It is kept in the history, with your name.')
    && run(() => removeNote(id), 'Failed to delete note');

  return (
    <div className="bmNotes">
      {err ? <div className="bmError">{err}</div> : null}
      {canWrite ? (
        <div className="bmNotes-add">
          <textarea
            rows={2}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Add a note (visible to every admin)…"
            disabled={busy}
          />
          <button className="btn btn-primary" onClick={add} disabled={busy || !draft.trim()}>Add note</button>
        </div>
      ) : null}
      <ul className="bmNotes-list">
        {notes.length === 0 && archived.length === 0 ? <li className="muted">No notes yet.</li> : null}
        {notes.map((n) => (
          <li key={`n${n.id}`} className="bmNotes-row">
            {editing?.id === n.id ? (
              <div className="bmNotes-add">
                <textarea rows={2} value={editing.text} disabled={busy}
                  onChange={(e) => setEditing({ id: n.id, text: e.target.value })} />
                <button className="btn btn-primary" onClick={saveEdit} disabled={busy || !editing.text.trim()}>Save</button>
                <button className="btn" onClick={() => setEditing(null)} disabled={busy}>Cancel</button>
              </div>
            ) : (
              <div className="bmNotes-text">{n.note}</div>
            )}
            <div className="bmNotes-meta">
              <span>
                {n.author} · {new Date(n.createdMs).toLocaleString()}
                {n.editedMs ? ` · edited by ${n.editedBy || '?'} ${new Date(n.editedMs).toLocaleString()}` : ''}
              </span>
              {canWrite && editing?.id !== n.id ? (
                <>
                  <button className="btn btn-sm" onClick={() => setEditing({ id: n.id, text: n.note })} disabled={busy}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => remove(n.id)} disabled={busy}>Delete</button>
                </>
              ) : null}
            </div>
          </li>
        ))}
        {archived.map((n) => (
          <li key={`a${n.id}`} className="bmNotes-row">
            <div className="bmNotes-text">{htmlToText(n.note || '')}</div>
            <div className="bmNotes-meta">
              <span>
                {n.author || 'unknown'} · {n.createdMs ? new Date(n.createdMs).toLocaleString() : ''} ·{' '}
                <span className="muted">from BattleMetrics (archived, read-only)</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
