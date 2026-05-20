import React, { useRef, useState } from 'react';
import { sendTicketMessage, type TicketMessage } from '../../util/ticketsApi';

type Props = {
  channelId: string;
  onSent: (m: TicketMessage) => void;
};

const MAX_BYTES = 10 * 1024 * 1024;

function fmtSize(n: number): string {
  if (n < 1024) return `${n}B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)}KB`;
  return `${(n / 1024 / 1024).toFixed(1)}MB`;
}

export function TicketComposer({ channelId, onSent }: Props) {
  const [text, setText] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const taRef = useRef<HTMLTextAreaElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  function addFiles(next: FileList | File[]) {
    const list = Array.from(next);
    const merged = [...files, ...list].slice(0, 5);
    const oversized = merged.find((f) => f.size > MAX_BYTES);
    if (oversized) {
      setErr(`"${oversized.name}" is over the 10 MB Discord upload limit.`);
      return;
    }
    setErr(null);
    setFiles(merged);
  }

  async function send() {
    if (sending) return;
    if (!text.trim() && !files.length) return;
    setSending(true);
    setErr(null);
    try {
      const form = new FormData();
      form.append('content', text);
      for (const f of files) form.append('files', f, f.name);
      const out = await sendTicketMessage(channelId, form);
      onSent(out.message);
      setText('');
      setFiles([]);
      if (fileRef.current) fileRef.current.value = '';
      taRef.current?.focus();
    } catch (e: any) {
      setErr(e?.message || 'Send failed');
    } finally {
      setSending(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      send();
    }
  }

  function onDragOver(e: React.DragEvent) { e.preventDefault(); setDragging(true); }
  function onDragLeave(e: React.DragEvent) { e.preventDefault(); setDragging(false); }
  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  }

  return (
    <div
      className={`ticketComposer ${dragging ? 'dragging' : ''}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {err ? <div className="bmError" style={{ marginBottom: 6 }}>{err}</div> : null}
      {files.length ? (
        <div className="ticketComposer-attachments">
          {files.map((f, i) => (
            <span key={i} className="ticketComposer-attachment">
              {f.name} <span className="muted">({fmtSize(f.size)})</span>
              <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))}>×</button>
            </span>
          ))}
        </div>
      ) : null}
      <div className="ticketComposer-row">
        <button
          type="button"
          className="btn btn-sm ticketComposer-paperclip"
          onClick={() => fileRef.current?.click()}
          disabled={sending || files.length >= 5}
          title="Attach files (up to 5, 10 MB each)"
        >📎</button>
        <input
          ref={fileRef}
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={(e) => { if (e.target.files) addFiles(e.target.files); }}
        />
        <textarea
          ref={taRef}
          className="ticketComposer-text"
          placeholder="Message  (Ctrl/Cmd + Enter to send)"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={sending}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={send}
          disabled={sending || (!text.trim() && !files.length)}
        >{sending ? 'Sending…' : 'Send'}</button>
      </div>
      {dragging ? <div className="ticketComposer-dropOverlay">Drop to attach</div> : null}
    </div>
  );
}
