import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTicket, getTicketMessages, closeTicket, type TicketDetail, type TicketMessage as TicketMessageT } from '../../util/ticketsApi';
import { TicketMessage } from './TicketMessage';
import { TicketComposer } from './TicketComposer';
import { DiscordAvatar } from './DiscordAvatar';
import { ConfirmModal } from './ConfirmModal';
import { canCloseTickets } from '../../util/session';
import { bmEvents } from '../../util/sseClient';
import { markTicketSeen } from './TicketSidebar';

type Props = {
  channelId: string;
  onClosed?: () => void;
};

export function TicketDetailPanel({ channelId, onClosed }: Props) {
  const [ticket, setTicket] = useState<TicketDetail | null>(null);
  const [messages, setMessages] = useState<TicketMessageT[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [confirmClose, setConfirmClose] = useState(false);
  const [closing, setClosing] = useState(false);
  const [showQA, setShowQA] = useState(true);
  const listRef = useRef<HTMLDivElement | null>(null);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const [t, m] = await Promise.all([
        getTicket(channelId),
        getTicketMessages(channelId, { limit: 100 })
      ]);
      setTicket(t.ticket);
      setMessages(m.messages);
      markTicketSeen(channelId);
    } catch (e: any) {
      setErr(e?.message || 'Failed to load ticket');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [channelId]);

  useEffect(() => {
    bmEvents.start();
    const unsub = bmEvents.subscribe((evt) => {
      if (!evt || !evt.payload) return;
      // The relay wraps every event so channelId is on the top-level
      // SseEvent (we stuffed it through `payload?.payload ?? payload` in
      // sseClient, but channelId rides alongside ts at the top — read both).
      const eventChannelId = (evt as any).channelId || evt.payload?.channelId;
      if (eventChannelId !== channelId) return;
      switch (evt.type) {
        case 'ticket.message':
          setMessages((cur) => {
            if (cur.some((m) => m.id === evt.payload.id)) return cur;
            return [...cur, evt.payload as TicketMessageT];
          });
          break;
        case 'ticket.message.update':
          setMessages((cur) => cur.map((m) => (m.id === evt.payload.id ? (evt.payload as TicketMessageT) : m)));
          break;
        case 'ticket.message.delete':
          setMessages((cur) => cur.filter((m) => m.id !== evt.payload.messageId));
          break;
        case 'ticket.close':
          load();
          break;
      }
    });
    return () => { unsub(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive.
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages.length]);

  async function doClose(reason: string) {
    if (!ticket) return;
    setClosing(true);
    try {
      await closeTicket(channelId, reason);
      setConfirmClose(false);
      onClosed?.();
      load();
    } catch (e: any) {
      setErr(e?.message || 'Close failed');
    } finally {
      setClosing(false);
    }
  }

  if (loading && !ticket) return <div className="ticketDetail"><div className="muted" style={{ padding: 16 }}>Loading…</div></div>;
  if (!ticket) return <div className="ticketDetail"><div className="bmError" style={{ margin: 16 }}>{err || 'Not found'}</div></div>;

  const isClosed = ticket.status === 'closed';
  const profileTo = ticket.creator.guid
    ? `/player/${ticket.creator.guid}`
    : (ticket.creator.discordName ? `/player/by-name/${encodeURIComponent(ticket.creator.discordName)}` : null);

  return (
    <div className="ticketDetail">
      <header className="ticketDetail-header">
        <DiscordAvatar
          name={ticket.creator.discordName}
          guid={ticket.creator.guid}
          avatarUrl={ticket.creator.discordAvatarUrl}
          size={48}
        />
        <div className="ticketDetail-headerText">
          <h2>
            {profileTo
              ? <Link to={profileTo}>{ticket.creator.discordName}</Link>
              : <span>{ticket.creator.discordName}</span>}
            {' '}<span className="muted">#{ticket.id}</span>
          </h2>
          <div className="muted ticketDetail-headerMeta">
            <span className="bmBadge">{ticket.categoryLabel}</span>
            {ticket.creator.discordId ? <code>{ticket.creator.discordId}</code> : null}
            {ticket.creator.guid ? <code>{ticket.creator.guid}</code> : null}
            <span>opened {new Date(ticket.createdAt).toLocaleString()}</span>
            {isClosed ? <span className="bmBadge bmBadge-warn">closed</span> : null}
          </div>
        </div>
        <div className="ticketDetail-actions">
          {canCloseTickets() && !isClosed ? (
            <button className="btn btn-danger" onClick={() => setConfirmClose(true)}>Close ticket</button>
          ) : null}
          {ticket.transcript ? (
            <a className="btn btn-sm" href={ticket.transcript} target="_blank" rel="noreferrer">View transcript</a>
          ) : null}
        </div>
      </header>

      {ticket.qa.length ? (
        <section className={`ticketDetail-qa ${showQA ? '' : 'collapsed'}`}>
          <button className="ticketDetail-qaToggle" onClick={() => setShowQA(!showQA)}>
            {showQA ? '▾ Hide answers' : '▸ Show answers'}
          </button>
          {showQA ? (
            <dl>
              {ticket.qa.map((q, i) => (
                <React.Fragment key={i}>
                  <dt>{q.label}</dt>
                  <dd>{q.value || <span className="muted">—</span>}</dd>
                </React.Fragment>
              ))}
            </dl>
          ) : null}
        </section>
      ) : null}

      <div className="ticketDetail-messages" ref={listRef}>
        {messages.length === 0 ? <div className="muted" style={{ padding: 16 }}>No messages yet.</div> : null}
        {messages.map((m) => <TicketMessage key={m.id} msg={m} />)}
      </div>

      {!isClosed ? (
        <TicketComposer channelId={channelId} onSent={(m) => {
          setMessages((cur) => (cur.some((x) => x.id === m.id) ? cur : [...cur, m]));
        }} />
      ) : (
        <div className="ticketDetail-closedNote muted">This ticket is closed. Reopen from Discord to chat again.</div>
      )}

      {confirmClose ? (
        <CloseModal busy={closing} onCancel={() => setConfirmClose(false)} onConfirm={doClose} />
      ) : null}
    </div>
  );
}

function CloseModal({ busy, onCancel, onConfirm }: { busy: boolean; onCancel: () => void; onConfirm: (reason: string) => void }) {
  const [reason, setReason] = useState('');
  return (
    <ConfirmModal
      title="Close this ticket?"
      body={
        <div>
          <p>Closes the Discord channel after 10 minutes, uploads a transcript, and removes the ticket from the open list.</p>
          <label className="muted" style={{ display: 'block', marginTop: 8 }}>
            Reason
            <textarea
              autoFocus
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Closing reason — sent to Discord + audit log"
              style={{ display: 'block', width: '100%', minHeight: 60, marginTop: 4, background: 'var(--bg-raised)', border: '1px solid var(--border)', color: 'var(--text)', padding: 6, borderRadius: 4 }}
            />
          </label>
        </div>
      }
      danger
      busy={busy}
      confirmLabel="Close ticket"
      onConfirm={() => onConfirm(reason.trim() || 'Closed via admin panel')}
      onCancel={onCancel}
    />
  );
}
