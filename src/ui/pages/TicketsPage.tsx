import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { allowedTicketCategories, hasToolAccess } from '../../util/session';
import { listTickets, type TicketSummary } from '../../util/ticketsApi';
import { TicketSidebar } from '../components/TicketSidebar';
import { TicketDetailPanel } from '../components/TicketDetailPanel';
import { bmEvents } from '../../util/sseClient';
import { useToast } from '../components/Toast';

const LAST_SEEN_KEY = 'rz.tickets.lastSeen.v1';

function loadLastSeen(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(LAST_SEEN_KEY) || '{}'); }
  catch { return {}; }
}

export function TicketsPage() {
  const { channelId } = useParams();
  const nav = useNavigate();
  const toast = useToast();
  const [tickets, setTickets] = useState<TicketSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  // Per-channel last-event-at, updated from live SSE. Combined with the
  // localStorage lastSeen[] map to compute unread state.
  const [lastEvent, setLastEvent] = useState<Record<string, number>>({});
  const ticketsRef = useRef<TicketSummary[]>([]);
  const selectedRef = useRef<string | null>(channelId || null);

  const canEnter = hasToolAccess('tickets');
  const allowed = useMemo(allowedTicketCategories, []);

  useEffect(() => { ticketsRef.current = tickets; }, [tickets]);
  useEffect(() => { selectedRef.current = channelId || null; }, [channelId]);

  async function refresh() {
    try {
      const out = await listTickets({ status: 'open', categories: allowed.length ? allowed : undefined });
      setTickets(out.tickets);
      setErr(null);
    } catch (e: any) {
      setErr(e?.message || 'Failed to load tickets');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!canEnter) { setLoading(false); return; }
    let alive = true;
    setLoading(true);
    refresh();
    const t = setInterval(() => { if (alive) refresh(); }, 15_000);
    return () => { alive = false; clearInterval(t); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bmEvents.start();
    const unsub = bmEvents.subscribe((evt) => {
      const id = evt.channelId || evt.payload?.channelId;
      if (evt.type === 'ticket.create') {
        refresh();
        return;
      }
      if (evt.type === 'ticket.close') {
        refresh();
        return;
      }
      if (evt.type === 'ticket.message') {
        if (!id) return;
        setLastEvent((cur) => ({ ...cur, [id]: Date.now() }));
        const t = ticketsRef.current.find((x) => x.channelId === id);
        // First time we see this channel — the bot probably just emitted
        // ticket.create but our SSE connect was after; pull a fresh list.
        if (!t) refresh();
        if (selectedRef.current !== id) {
          const who = evt.payload?.author?.name || 'someone';
          const preview = (evt.payload?.content || '').slice(0, 80);
          toast.push(
            t ? `New message in #${t.id} ${t.categoryLabel}: ${who} — ${preview}`
              : `New ticket message from ${who} — ${preview}`,
            { kind: 'info' }
          );
        }
      }
    });
    return () => { unsub(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const unreadChannels = useMemo(() => {
    const seen = loadLastSeen();
    const set = new Set<string>();
    for (const t of tickets) {
      const lastTs = Math.max(t.createdAt, lastEvent[t.channelId] || 0);
      if (lastTs > (seen[t.channelId] || 0)) set.add(t.channelId);
    }
    return set;
  }, [tickets, lastEvent]);

  if (!canEnter) {
    return (
      <div className="page" style={{ padding: 24 }}>
        Your account doesn't have access to the Tickets panel.
        Ask a manager at <a href="https://auth.reforgedz.net/manage">auth.reforgedz.net</a>.
      </div>
    );
  }

  return (
    <div className="ticketsPage">
      <TicketSidebar
        tickets={tickets}
        loading={loading}
        err={err}
        selectedId={channelId || null}
        unreadChannels={unreadChannels}
        onSelect={(t) => nav(`/tickets/${t.channelId}`)}
      />
      <div className="ticketsContent">
        {channelId ? (
          <TicketDetailPanel channelId={channelId} onClosed={refresh} />
        ) : (
          <div className="ticketsEmpty">
            <h2>No ticket selected</h2>
            <div className="muted">Pick a ticket from the sidebar to start chatting.</div>
          </div>
        )}
      </div>
    </div>
  );
}
