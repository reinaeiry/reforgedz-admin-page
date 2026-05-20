import React, { useMemo } from 'react';
import { TICKET_CATEGORIES, type TicketCategoryKey } from '../../util/session';
import type { TicketSummary } from '../../util/ticketsApi';
import { DiscordAvatar } from './DiscordAvatar';

type Props = {
  tickets: TicketSummary[];
  loading: boolean;
  err: string | null;
  selectedId: string | null;
  statusFilter: 'open' | 'closed' | 'all';
  onChangeStatus: (s: 'open' | 'closed' | 'all') => void;
  onSelect: (t: TicketSummary) => void;
};

const UNREAD_LSKEY = 'rz.tickets.lastSeen.v1';
function loadLastSeen(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(UNREAD_LSKEY) || '{}'); }
  catch { return {}; }
}

export function TicketSidebar({ tickets, loading, err, selectedId, statusFilter, onChangeStatus, onSelect }: Props) {
  const lastSeen = useMemo(loadLastSeen, [tickets]);

  const groups = useMemo(() => {
    const byCat = new Map<TicketCategoryKey, TicketSummary[]>();
    for (const t of tickets) {
      const k = t.permKey as TicketCategoryKey;
      if (!byCat.has(k)) byCat.set(k, []);
      byCat.get(k)!.push(t);
    }
    return TICKET_CATEGORIES
      .map(({ key, label }) => ({ key, label, items: byCat.get(key) || [] }))
      .filter((g) => g.items.length > 0);
  }, [tickets]);

  return (
    <aside className="ticketsSidebar">
      <div className="ticketsSidebar-controls">
        {(['open', 'closed', 'all'] as const).map((s) => (
          <button
            key={s}
            type="button"
            className={`bmChip ${statusFilter === s ? 'bmChip-on' : ''}`}
            onClick={() => onChangeStatus(s)}
          >
            {s === 'open' ? 'Open' : s === 'closed' ? 'Closed' : 'All'}
          </button>
        ))}
      </div>

      {err ? <div className="bmError">{err}</div> : null}
      {loading && !tickets.length ? <div className="muted" style={{ padding: 12 }}>Loading…</div> : null}
      {!loading && !tickets.length && !err ? (
        <div className="muted" style={{ padding: 12 }}>No tickets in your categories.</div>
      ) : null}

      {groups.map((g) => (
        <section key={g.key} className="ticketsSidebar-group">
          <div className="ticketsSidebar-groupLabel">{g.label} <span className="muted">({g.items.length})</span></div>
          <ul>
            {g.items.map((t) => {
              const unread = (t.createdAt > (lastSeen[t.channelId] || 0))
                || (t.status !== 'closed' && t.createdAt > 0); // best-effort placeholder
              return (
                <li
                  key={t.channelId}
                  className={`ticketRow ${selectedId === t.channelId ? 'on' : ''} ${unread && selectedId !== t.channelId ? 'unread' : ''}`}
                  onClick={() => onSelect(t)}
                >
                  <DiscordAvatar
                    name={t.creator.discordName}
                    guid={t.creator.guid}
                    avatarUrl={t.creator.discordAvatarUrl}
                    size={32}
                  />
                  <div className="ticketRow-body">
                    <div className="ticketRow-title">
                      <strong>#{t.id}</strong>
                      <span className="ticketRow-name">{t.creator.discordName}</span>
                    </div>
                    <div className="ticketRow-meta">
                      <span>{new Date(t.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                      {t.status === 'claimed' ? <span className="bmBadge">claimed</span> : null}
                      {t.status === 'closed' ? <span className="bmBadge">closed</span> : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </aside>
  );
}

export function markTicketSeen(channelId: string): void {
  try {
    const cur = JSON.parse(localStorage.getItem(UNREAD_LSKEY) || '{}');
    cur[channelId] = Date.now();
    localStorage.setItem(UNREAD_LSKEY, JSON.stringify(cur));
  } catch { /* ignore */ }
}
