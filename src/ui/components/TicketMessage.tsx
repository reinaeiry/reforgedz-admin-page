import React from 'react';
import type { TicketAttachment, TicketMessage as TicketMessageT } from '../../util/ticketsApi';

const URL_RE = /\bhttps?:\/\/[^\s<>"]+/g;

function autoLink(text: string): React.ReactNode[] {
  if (!text) return [];
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  URL_RE.lastIndex = 0;
  while ((match = URL_RE.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    parts.push(<a key={match.index} href={match[0]} target="_blank" rel="noreferrer">{match[0]}</a>);
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

function isImage(att: TicketAttachment): boolean {
  if (att.contentType && att.contentType.startsWith('image/')) return true;
  return /\.(png|jpe?g|gif|webp|bmp)$/i.test(att.name || '');
}

function fmtSize(n: number): string {
  if (!n) return '';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

function fmtTime(ts: number): string {
  const d = new Date(ts);
  const today = new Date();
  const sameDay = d.toDateString() === today.toDateString();
  return sameDay
    ? d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    : d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function TicketMessage({ msg }: { msg: TicketMessageT }) {
  const isRelay = msg.author.isAdminRelay;
  return (
    <article className={`ticketMessage ${isRelay ? 'adminRelay' : ''} ${msg.author.isBot ? 'bot' : ''}`}>
      {msg.author.avatarUrl ? (
        <img src={msg.author.avatarUrl} alt={msg.author.name} className="ticketMessage-avatar" loading="lazy" />
      ) : (
        <div className="ticketMessage-avatar ticketMessage-avatarFallback">{(msg.author.name?.[0] || '?').toUpperCase()}</div>
      )}
      <div className="ticketMessage-body">
        <header className="ticketMessage-header">
          <strong>{msg.author.name}</strong>
          {isRelay && msg.author.relayUsername ? <span className="ticketMessage-relay">via admin · {msg.author.relayUsername}</span> : null}
          {!isRelay && msg.author.isBot ? <span className="ticketMessage-bot">bot</span> : null}
          <span className="ticketMessage-time">{fmtTime(msg.ts)}</span>
        </header>
        {msg.content ? <div className="ticketMessage-content">{autoLink(msg.content)}</div> : null}
        {msg.attachments.length ? (
          <div className="ticketMessage-attachments">
            {msg.attachments.map((a, i) => isImage(a) ? (
              <a key={i} href={a.url} target="_blank" rel="noreferrer" className="ticketAttachment-img">
                <img src={a.url} alt={a.name} loading="lazy" />
              </a>
            ) : (
              <a key={i} href={a.url} target="_blank" rel="noreferrer" className="ticketAttachment-file">
                <span className="ticketAttachment-name">{a.name}</span>
                <span className="muted">{fmtSize(a.size)}</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
