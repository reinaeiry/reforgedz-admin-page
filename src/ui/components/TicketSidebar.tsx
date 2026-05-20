import React, { useEffect, useMemo, useState } from 'react';
import { TICKET_CATEGORIES, type TicketCategoryKey } from '../../util/session';
import type { TicketSummary } from '../../util/ticketsApi';
import { DiscordAvatar } from './DiscordAvatar';

type Props = {
  tickets: TicketSummary[];
  loading: boolean;
  err: string | null;
  selectedId: string | null;
  unreadChannels: Set<string>;
  onSelect: (t: TicketSummary) => void;
};

const SEEN_KEY = 'rz.tickets.lastSeen.v1';
const STAR_KEY = 'rz.tickets.starred.v1';
const COLLAPSE_KEY = 'rz.tickets.collapsed.v1';

function loadJson<T>(key: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; }
  catch { return fallback; }
}

export function markTicketSeen(channelId: string): void {
  try {
    const cur = loadJson<Record<string, number>>(SEEN_KEY, {});
    cur[channelId] = Date.now();
    localStorage.setItem(SEEN_KEY, JSON.stringify(cur));
  } catch { /* ignore */ }
}

export function TicketSidebar({ tickets, loading, err, selectedId, unreadChannels, onSelect }: Props) {
  const [starred, setStarred] = useState<Set<string>>(() => new Set(loadJson<string[]>(STAR_KEY, [])));
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set(loadJson<string[]>(COLLAPSE_KEY, [])));

  // Persist localStorage on each change.
  useEffect(() => { localStorage.setItem(STAR_KEY, JSON.stringify(Array.from(starred))); }, [starred]);
  useEffect(() => { localStorage.setItem(COLLAPSE_KEY, JSON.stringify(Array.from(collapsed))); }, [collapsed]);

  function toggleStar(e: React.MouseEvent, channelId: string) {
    e.stopPropagation();
    setStarred((cur) => {
      const next = new Set(cur);
      if (next.has(channelId)) next.delete(channelId); else next.add(channelId);
      return next;
    });
  }

  function toggleCollapsed(key: string) {
    setCollapsed((cur) => {
      const next = new Set(cur);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }

  const favorites = useMemo(() => tickets.filter((t) => starred.has(t.channelId)), [tickets, starred]);

  const groups = useMemo(() => {
    const byCat = new Map<TicketCategoryKey, TicketSummary[]>();
    for (const t of tickets) {
      if (starred.has(t.channelId)) continue;
      const k = t.permKey as TicketCategoryKey;
      if (!byCat.has(k)) byCat.set(k, []);
      byCat.get(k)!.push(t);
    }
    return TICKET_CATEGORIES
      .map(({ key, label }) => ({ key, label, items: byCat.get(key) || [] }))
      .filter((g) => g.items.length > 0);
  }, [tickets, starred]);

  return (
    <aside className="ticketsSidebar">
      {err ? <div className="bmError">{err}</div> : null}
      {loading && !tickets.length ? <div className="muted" style={{ padding: 12 }}>Loading…</div> : null}
      {!loading && !tickets.length && !err ? (
        <div className="muted" style={{ padding: 12 }}>No open tickets.</div>
      ) : null}

      {favorites.length > 0 ? (
        <section className="ticketsSidebar-group">
          <button
            className="ticketsSidebar-groupHeader"
            onClick={() => toggleCollapsed('__favorites__')}
          >
            <span className="ticketsSidebar-groupCaret">{collapsed.has('__favorites__') ? '▸' : '▾'}</span>
            <span className="ticketsSidebar-groupLabel">★ Favorites</span>
            <span className="muted ticketsSidebar-groupCount">{favorites.length}</span>
          </button>
          {!collapsed.has('__favorites__') ? (
            <ul>
              {favorites.map((t) => (
                <TicketRow
                  key={t.channelId}
                  t={t}
                  selected={selectedId === t.channelId}
                  unread={unreadChannels.has(t.channelId) && selectedId !== t.channelId}
                  starred
                  onClick={() => onSelect(t)}
                  onToggleStar={(e) => toggleStar(e, t.channelId)}
                />
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      {groups.map((g) => (
        <section key={g.key} className="ticketsSidebar-group">
          <button
            className="ticketsSidebar-groupHeader"
            onClick={() => toggleCollapsed(g.key)}
          >
            <span className="ticketsSidebar-groupCaret">{collapsed.has(g.key) ? '▸' : '▾'}</span>
            <span className="ticketsSidebar-groupLabel">{g.label}</span>
            <span className="muted ticketsSidebar-groupCount">{g.items.length}</span>
          </button>
          {!collapsed.has(g.key) ? (
            <ul>
              {g.items.map((t) => (
                <TicketRow
                  key={t.channelId}
                  t={t}
                  selected={selectedId === t.channelId}
                  unread={unreadChannels.has(t.channelId) && selectedId !== t.channelId}
                  starred={false}
                  onClick={() => onSelect(t)}
                  onToggleStar={(e) => toggleStar(e, t.channelId)}
                />
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </aside>
  );
}

function TicketRow({ t, selected, unread, starred, onClick, onToggleStar }: {
  t: TicketSummary;
  selected: boolean;
  unread: boolean;
  starred: boolean;
  onClick: () => void;
  onToggleStar: (e: React.MouseEvent) => void;
}) {
  return (
    <li
      className={`ticketRow ${selected ? 'on' : ''} ${unread ? 'unread' : ''}`}
      onClick={onClick}
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
      <button
        type="button"
        className={`ticketRow-star ${starred ? 'on' : ''}`}
        onClick={onToggleStar}
        title={starred ? 'Unstar' : 'Star'}
        aria-label={starred ? 'Unstar ticket' : 'Star ticket'}
      >{starred ? '★' : '☆'}</button>
    </li>
  );
}
