import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { allowedTicketCategories, hasToolAccess } from '../../util/session';
import { listTickets, type TicketSummary } from '../../util/ticketsApi';
import { TicketSidebar } from '../components/TicketSidebar';
import { TicketDetailPanel } from '../components/TicketDetailPanel';
import { bmEvents } from '../../util/sseClient';

export function TicketsPage() {
  const { channelId } = useParams();
  const nav = useNavigate();
  const [statusFilter, setStatusFilter] = useState<'open' | 'closed' | 'all'>('open');
  const [tickets, setTickets] = useState<TicketSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const canEnter = hasToolAccess('tickets');
  const allowed = allowedTicketCategories();

  async function refresh() {
    try {
      const out = await listTickets({ status: statusFilter, categories: allowed.length ? allowed : undefined });
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
  }, [statusFilter]);

  useEffect(() => {
    // Live updates — refresh sidebar on any ticket lifecycle event.
    bmEvents.start();
    const unsub = bmEvents.subscribe((evt) => {
      if (evt.type === 'ticket.close' || evt.type === 'ticket.create' || evt.type === 'ticket.message') {
        refresh();
      }
    });
    return () => { unsub(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        statusFilter={statusFilter}
        onChangeStatus={setStatusFilter}
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
