import React, { useEffect, useState } from 'react';
import { createPlayerNote, deleteNote, listPlayerNotes, updateNote } from '../../util/bmApi';

// BM lets admins paste rich-text HTML into notes (blockquote / span style / etc.).
// Rendering that raw is both ugly and unsafe; rendering as innerHTML would be
// a small XSS risk for any future BM bug. We strip tags and decode common
// entities so notes appear as plain readable text while preserving line breaks.
function htmlToText(html: string): string {
  if (!html) return '';
  // Convert block-level closers to line breaks before stripping.
  let s = html
    .replace(/<br\s*\/?>(\r?\n)?/gi, '\n')
    .replace(/<\/(p|div|blockquote|li|h[1-6])>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<[^>]+>/g, '');
  // Decode common HTML entities.
  s = s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x?([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, /^x/i.test(_) ? 16 : 10)));
  return s.replace(/\n{3,}/g, '\n\n').trim();
}

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
              <div className="bmNotes-text">{htmlToText(a.note || '')}</div>
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
