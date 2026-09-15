import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ApiError,
  type AdminEntry,
  type AdminManagerSnapshot,
  type PriorityQueueEntry,
  type PriorityQueueOrder,
  type PriorityQueueServer,
  type PriorityQueueSnapshot,
  type ReforgerServer,
  type ServerCapacity,
  addAdminToCache,
  deleteAdmin,
  getAdminManagerSnapshot,
  getPriorityQueue,
  renameAdmin,
  switchPriorityQueueServer,
  toggleAdminOnServer,
} from '../../util/api';

const GUID_RE = /^[0-9a-fA-F-]{36}$/;
const SESSION_KEY = 'gm.snapshot.v1';
const REVALIDATE_INTERVAL_MS = 30 * 1000;
const PQ_SESSION_KEY = 'pq.snapshot.v1';
const PQ_REVALIDATE_INTERVAL_MS = 30 * 1000;

// The end of a holder's paid period (unix seconds). A subscription still billing keeps
// its slot for a few hours past that date while PayPal takes the renewal, so a listed
// holder with a date in the past has a renewal due.
function fmtPqExpiry(ts: number | null | undefined): { text: string; color: string; title: string } {
  if (ts == null) return { text: '-', color: 'var(--text-dim)', title: '' };
  const ms = ts * 1000;
  const date = new Date(ms).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  if (ms <= Date.now()) {
    return {
      text: `${date}, renewal due`,
      color: '#e6a23c',
      title: 'The paid period has ended. The subscription keeps its slot for a few hours while PayPal takes the renewal, and loses it if no payment arrives.',
    };
  }
  const soon = Math.ceil((ms - Date.now()) / 86400000) <= 7;
  return { text: date, color: soon ? 'var(--danger, #e66)' : 'var(--text-dim)', title: `Paid until ${new Date(ms).toLocaleString()}` };
}

// Short server tag for column headers / count chips: drop anything after a "(" or a dash
// (so "EU1 (CHERNARUS)" and "09 — [DEV] Official Chernarus" become "EU1" / "09").
function shortServer(label: string): string {
  return (label || '').split(/\s+[—–-]\s+|\s*\(/)[0].trim() || label;
}

// When they last paid for priority queue (the newest live order).
function fmtPqPurchased(e: { purchasedAt?: number | null }): { text: string; title: string } {
  const ts = e.purchasedAt ?? null;
  if (ts == null) return { text: '-', title: 'No purchase date recorded' };
  const text = new Date(ts * 1000).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  return { text, title: `Latest paid order ${new Date(ts * 1000).toLocaleString()}` };
}

// Total slots used per server, against the game.admins limit. GMs and queue
// holders share the allowance, so this is the combined figure.
function slotTotalFor(
  tag: string,
  capacity?: Record<string, ServerCapacity | null>,
): ServerCapacity | null {
  if (!capacity) return null;
  // Matched on tag so both tabs can use this — the GM tab keys servers by
  // Pterodactyl id while the priority-queue tab keys them by shop id.
  const want = tag.toUpperCase();
  for (const c of Object.values(capacity)) if (c && c.tag.toUpperCase() === want) return c;
  return null;
}

function SlotTotal({ tag, capacity }: { tag: string; capacity?: Record<string, ServerCapacity | null> }) {
  const c = slotTotalFor(tag, capacity);
  if (!c) return null;
  const pct = c.limit > 0 ? c.total / c.limit : 0;
  const color = pct >= 1 ? 'var(--danger, #e66)' : pct >= 0.9 ? '#e6a23c' : undefined;
  return (
    <b style={{ marginLeft: 6, fontWeight: 600, ...(color ? { color } : {}) }} title={`${c.total} of ${c.limit} slots used · ${c.remaining} free`}>
      {c.total}/{c.limit}
    </b>
  );
}

// One bar, identical on both tabs: every server's slot usage against the limit.
function SlotChips({ capacity }: { capacity?: Record<string, ServerCapacity | null> }) {
  const all = Object.values(capacity || {}).filter(Boolean) as ServerCapacity[];
  if (!all.length) return null;
  const servers = [...all].sort((a, b) => a.tag.localeCompare(b.tag));

  return (
    <div className="pq-stats">
      {servers.map((c) => {
        // Priority queue the shop has sold for the server but not written yet takes a place too.
        const waiting = c.pqWaiting || 0;
        const pct = c.limit > 0 ? (c.total + waiting) / c.limit : 0;
        const color = pct >= 1 ? 'var(--danger, #e66)' : pct >= 0.9 ? '#e6a23c' : undefined;
        const title = `${c.tag}: ${c.gms} GM + ${c.pq} priority queue = ${c.total} of ${c.limit} slots`
          + (waiting ? `, plus ${waiting} priority queue added at the shop's next sync` : '')
          + ` · ${c.remaining} free`;
        return (
          <span
            key={c.tag}
            className="pq-stat"
            title={title}
          >
            {c.tag} <b style={color ? { color } : undefined}>{c.total}/{c.limit}</b>
          </span>
        );
      })}
    </div>
  );
}

type AdminTab = 'gms' | 'priorityQueue';

function loadCachedSnapshot(): AdminManagerSnapshot | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AdminManagerSnapshot) : null;
  } catch {
    return null;
  }
}

function saveCachedSnapshot(s: AdminManagerSnapshot | null): void {
  try {
    if (s) sessionStorage.setItem(SESSION_KEY, JSON.stringify(s));
    else sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore quota errors
  }
}

function loadCachedPq(): PriorityQueueSnapshot | null {
  try {
    const raw = sessionStorage.getItem(PQ_SESSION_KEY);
    return raw ? (JSON.parse(raw) as PriorityQueueSnapshot) : null;
  } catch {
    return null;
  }
}

function saveCachedPq(s: PriorityQueueSnapshot | null): void {
  try {
    if (s) sessionStorage.setItem(PQ_SESSION_KEY, JSON.stringify(s));
    else sessionStorage.removeItem(PQ_SESSION_KEY);
  } catch {
    // ignore
  }
}

function formatTime(ms: number | null | undefined): string {
  if (!ms) return 'never';
  const diff = Date.now() - ms;
  const s = Math.floor(diff / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function isUnknown(a: AdminEntry): boolean {
  return !a.displayName || a.displayName === '?';
}

type ServerGroup = { region: 'EU' | 'NA' | 'unknown'; label: string; servers: ReforgerServer[] };

function buildServerGroups(servers: ReforgerServer[]): ServerGroup[] {
  const eu = servers.filter((s) => s.region === 'EU').sort((a, b) => a.tag.localeCompare(b.tag));
  const na = servers.filter((s) => s.region === 'NA').sort((a, b) => a.tag.localeCompare(b.tag));
  const other = servers.filter((s) => s.region !== 'EU' && s.region !== 'NA');
  const groups: ServerGroup[] = [];
  if (eu.length) groups.push({ region: 'EU', label: 'Europe', servers: eu });
  if (na.length) groups.push({ region: 'NA', label: 'North America', servers: na });
  if (other.length) groups.push({ region: 'unknown', label: 'Other', servers: other });
  return groups;
}

// ────────────────────────────────────────────────────────────────────────────

export function AdminManagerPage() {
  const [tab, setTab] = useState<AdminTab>('gms');

  return (
    <div className="container">
      <div className="stack">
        <div className="gm-page-head">
          <h1 className="h1">{tab === 'gms' ? 'GM Management' : 'Priority Queue'}</h1>
          <div className="gm-tab-strip" style={{ display: 'flex', gap: 4, marginLeft: 16 }}>
            <button
              className={`button ${tab === 'gms' ? 'buttonPrimary' : ''}`}
              onClick={() => setTab('gms')}
            >
              GMs
            </button>
            <button
              className={`button ${tab === 'priorityQueue' ? 'buttonPrimary' : ''}`}
              onClick={() => setTab('priorityQueue')}
            >
              Priority Queue
            </button>
          </div>
        </div>

        {tab === 'gms' ? <GmsTab /> : <PriorityQueueTab />}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// GMs tab — original GM Management UI, lightly extracted so it can sit beside
// the new Priority Queue tab without changing behaviour.
// ────────────────────────────────────────────────────────────────────────────

function GmsTab() {
  const cached = loadCachedSnapshot();
  const [snapshot, setSnapshot] = useState<AdminManagerSnapshot | null>(cached);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const [showAdd, setShowAdd] = useState(false);
  const [newGuid, setNewGuid] = useState('');
  const [newName, setNewName] = useState('');

  const [editingGuid, setEditingGuid] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  const snapshotRef = useRef<AdminManagerSnapshot | null>(cached);
  snapshotRef.current = snapshot;

  async function revalidate(force = false): Promise<void> {
    try {
      const sinceVersion = !force && snapshotRef.current?.version ? snapshotRef.current.version : undefined;
      const s = await getAdminManagerSnapshot({ force, sinceVersion });
      if (s) {
        setSnapshot(s);
        saveCachedSnapshot(s);
      }
    } catch (e) {
      if (force) setError(e instanceof Error ? e.message : 'Failed to load');
    }
  }

  useEffect(() => {
    revalidate(false);
    const t = setInterval(() => revalidate(false), REVALIDATE_INTERVAL_MS);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const groups = useMemo<ServerGroup[]>(
    () => buildServerGroups(snapshot?.servers || []),
    [snapshot?.servers],
  );
  const orderedServers = useMemo<ReforgerServer[]>(
    () => groups.flatMap((g) => g.servers),
    [groups],
  );

  const filteredAdmins: AdminEntry[] = useMemo(() => {
    if (!snapshot) return [];
    const q = search.trim().toLowerCase();
    if (!q) return snapshot.admins;
    return snapshot.admins.filter(
      (a) => a.guid.toLowerCase().includes(q) || a.displayName.toLowerCase().includes(q),
    );
  }, [snapshot, search]);

  const newGuidValid = GUID_RE.test(newGuid.trim());

  function onAdd(): void {
    if (!newGuidValid) {
      setError('GUID must be 36 chars with hyphens, e.g. fa3dab9d-f22a-44e4-959d-a4afd597acbc');
      return;
    }
    const guid = newGuid.trim();
    const name = newName.trim();
    setError(null);

    setSnapshot((prev) => {
      if (!prev) return prev;
      if (prev.admins.some((a) => a.guid === guid)) return prev;
      const entry: AdminEntry = {
        guid,
        displayName: name || '?',
        source: name ? 'manual' : 'unknown',
        presence: {},
      };
      return { ...prev, admins: [entry, ...prev.admins] };
    });
    setNewGuid('');
    setNewName('');
    setShowAdd(false);
    setInfo('Admin added. Click a dot to grant on a server.');

    void (async () => {
      try {
        await addAdminToCache(guid, name);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to add');
        await revalidate(true);
      }
    })();
  }

  function onRename(guid: string): void {
    const name = editingName.trim();
    if (!name) {
      setError('Name cannot be empty');
      return;
    }
    setError(null);
    setEditingGuid(null);
    setEditingName('');
    setSnapshot((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        admins: prev.admins.map((a) =>
          a.guid === guid ? { ...a, displayName: name, source: 'manual' } : a,
        ),
      };
    });
    void (async () => {
      try {
        await renameAdmin(guid, name);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to rename');
        await revalidate(true);
      }
    })();
  }

  function onDelete(admin: AdminEntry): void {
    const presentCount = Object.values(admin.presence).filter(Boolean).length;
    const label = isUnknown(admin) ? admin.guid : `${admin.displayName} (${admin.guid})`;
    const ok = window.confirm(
      `Remove ${label} from all ${presentCount} server config${presentCount === 1 ? '' : 's'}?`,
    );
    if (!ok) return;
    setError(null);
    setSnapshot((prev) => {
      if (!prev) return prev;
      return { ...prev, admins: prev.admins.filter((a) => a.guid !== admin.guid) };
    });
    setInfo(presentCount > 0 ? `Removing from ${presentCount} server${presentCount === 1 ? '' : 's'}…` : 'Removed from roster.');
    void (async () => {
      try {
        const result = await deleteAdmin(admin.guid);
        const removed = result.results.filter((r) => r.removed).length;
        setInfo(`Removed from ${removed}/${result.results.length} servers.`);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to delete');
        await revalidate(true);
      }
    })();
  }

  function onToggle(guid: string, pteroId: string, present: boolean): void {
    const setPresence = (value: boolean) => setSnapshot((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        admins: prev.admins.map((a) =>
          a.guid === guid ? { ...a, presence: { ...a.presence, [pteroId]: value } } : a,
        ),
      };
    });
    setPresence(present);
    void (async () => {
      try {
        await toggleAdminOnServer(guid, pteroId, present);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to update server');
        // A full admin list changed nothing on the server, so only the dot goes back.
        if (e instanceof ApiError && e.code === 'admin_list_full') setPresence(!present);
        else await revalidate(true);
      }
    })();
  }

  const regionByPteroId = useMemo<Record<string, 'EU' | 'NA' | 'unknown'>>(() => {
    const m: Record<string, 'EU' | 'NA' | 'unknown'> = {};
    for (const s of orderedServers) m[s.pteroId] = s.region;
    return m;
  }, [orderedServers]);

  // Per-server GM counts (all admins).
  const gmServerCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of orderedServers) counts[s.pteroId] = 0;
    for (const a of snapshot?.admins || []) {
      for (const s of orderedServers) if (a.presence[s.pteroId]) counts[s.pteroId] += 1;
    }
    return counts;
  }, [snapshot, orderedServers]);

  return (
    <>
      <div className="gm-page-head" style={{ marginTop: -10 }}>
        {snapshot?.capacity ? (
          <SlotChips capacity={snapshot.capacity} />
        ) : (
          <div className="pq-stats">
            {orderedServers.map((s) => (
              <span
                key={s.pteroId}
                className={`pq-stat ${s.region.toLowerCase()}`}
                title={`${s.tag}: ${gmServerCounts[s.pteroId] ?? 0} GMs`}
              >
                {s.tag} <b>{gmServerCounts[s.pteroId] ?? 0}</b>
              </span>
            ))}
            <span className="pq-stat total" title="Total GMs">Total <b>{snapshot?.admins.length ?? 0}</b></span>
          </div>
        )}
        {snapshot?.dryRun ? <span className="gm-dryrun">Dry run</span> : null}
        <span className="spacer" />
        <button className="button" onClick={() => setShowAdd((v) => !v)}>
          {showAdd ? 'Cancel' : '+ Add admin'}
        </button>
      </div>

      <div className="gm-banner">
        Reforger loads its admin list at startup. Toggling a server here writes to the live config but does not
        kick existing players or grant access to currently-connected ones &mdash; restart each affected server to apply changes in-game.
      </div>

      {error ? <div className="error">{error}</div> : null}
      {info ? <div className="card" style={{ fontSize: 12, color: 'var(--text-dim)' }}>{info}</div> : null}

      {showAdd ? (
        <div className="card">
          <div className="stack" style={{ gap: 10 }}>
            <div style={{ fontWeight: 700, color: 'var(--text-bright)' }}>Add admin</div>
            <div className="row" style={{ gap: 10 }}>
              <div style={{ flex: 2 }}>
                <div className="label">GUID</div>
                <input className="input" value={newGuid} onChange={(e) => setNewGuid(e.target.value)} placeholder="fa3dab9d-f22a-44e4-959d-a4afd597acbc" />
              </div>
              <div style={{ flex: 1 }}>
                <div className="label">Display name (optional)</div>
                <input className="input" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="NattiKitten" />
              </div>
              <div style={{ alignSelf: 'end' }}>
                <button className="buttonPrimary button" onClick={onAdd} disabled={!newGuidValid}>Add</button>
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
              Adding here only registers the admin in the central roster. Use the dots in the matrix to grant access on each server. Names are auto-resolved from local activity and BattleMetrics in the background.
            </div>
          </div>
        </div>
      ) : null}

      {snapshot?.errors && snapshot.errors.length > 0 ? (
        <div className="gm-errors">
          <div className="gm-errors-title">Read errors</div>
          <ul>
            {snapshot.errors.map((e) => (
              <li key={e.pteroId}>{e.tag || e.pteroId}: {e.error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="gm-toolbar">
        <input className="input gm-search" placeholder="Search by name or GUID" value={search} onChange={(e) => setSearch(e.target.value)} />
        <span className="gm-meta">
          {filteredAdmins.length} of {snapshot?.admins.length || 0} admins · {orderedServers.length} server{orderedServers.length === 1 ? '' : 's'} · synced {formatTime(snapshot?.lastSyncAt || null)}
        </span>
      </div>

      <div className="gm-table-wrap scroll">
        <table className="gm-table">
          <thead>
            <tr className="gm-region-row">
              <th className="gm-sticky" colSpan={2} />
              {groups.map((g) => (
                <th key={g.region} colSpan={g.servers.length}>
                  <span className={`gm-region-pill ${g.region.toLowerCase()}`}>{g.label}</span>
                </th>
              ))}
              <th />
            </tr>
            <tr className="gm-server-row">
              <th className="gm-sticky">Name</th>
              <th>GUID</th>
              {orderedServers.map((s) => (
                <th key={s.pteroId} className={`gm-col-server ${s.region.toLowerCase()}`}>
                  <span className="gm-tag">{s.tag}</span>
                  <span className="gm-col-count" title={`${gmServerCounts[s.pteroId] ?? 0} GMs on ${s.tag}`}>
                    ({gmServerCounts[s.pteroId] ?? 0})
                  </span>
                </th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {filteredAdmins.length === 0 ? (
              <tr>
                <td colSpan={3 + orderedServers.length} className="gm-empty">
                  {snapshot ? 'No admins found.' : 'Loading...'}
                </td>
              </tr>
            ) : null}
            {filteredAdmins.map((a) => {
              const editing = editingGuid === a.guid;
              const unknown = isUnknown(a);
              return (
                <tr key={a.guid}>
                  <td className="gm-sticky">
                    {editing ? (
                      <div className="gm-rename-row">
                        <input
                          value={editingName}
                          autoFocus
                          onChange={(e) => setEditingName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') onRename(a.guid);
                            if (e.key === 'Escape') { setEditingGuid(null); setEditingName(''); }
                          }}
                        />
                        <button className="gm-icon-btn" onClick={() => onRename(a.guid)}>save</button>
                        <button className="gm-icon-btn" onClick={() => { setEditingGuid(null); setEditingName(''); }}>cancel</button>
                      </div>
                    ) : unknown ? (
                      <span className="gm-unknown">Unknown</span>
                    ) : (
                      <span className="gm-name">{a.displayName}</span>
                    )}
                  </td>
                  <td><span className="gm-guid">{a.guid}</span></td>
                  {orderedServers.map((s) => {
                    const on = !!a.presence[s.pteroId];
                    const region = regionByPteroId[s.pteroId] || 'unknown';
                    // A hint only: the server checks the list as it is when the dot is clicked.
                    const cap = snapshot?.capacity?.[s.pteroId];
                    const full = !on && cap ? cap.total + (cap.pqWaiting || 0) >= cap.limit : false;
                    const title = on
                      ? `Click to remove from ${s.tag}`
                      : full && cap
                        ? `${s.tag}'s admin list is full (${cap.total} of ${cap.limit}). Remove a game master there first.`
                        : `Click to grant on ${s.tag}`;
                    return (
                      <td key={s.pteroId} className={`gm-col-server ${region.toLowerCase()}`}>
                        <button
                          type="button"
                          className={`gm-dot ${on ? 'on' : ''}`}
                          disabled={!s.sshConfigured}
                          onClick={() => onToggle(a.guid, s.pteroId, !on)}
                          aria-label={on ? `Remove ${a.displayName} from ${s.tag}` : `Grant ${a.displayName} access on ${s.tag}`}
                          title={title}
                        />
                      </td>
                    );
                  })}
                  <td>
                    <div className="gm-actions">
                      <button
                        className="gm-icon-btn"
                        onClick={() => {
                          setEditingGuid(a.guid);
                          setEditingName(unknown ? '' : a.displayName);
                        }}
                        disabled={editing}
                      >
                        edit
                      </button>
                      <button className="gm-icon-btn danger" onClick={() => onDelete(a)}>
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Priority Queue tab: who holds priority queue on each game server, read from the
// shop. Priority queue comes only from a paid order, so the list is read-only apart
// from moving a paying holder's order to another server. Taking priority queue away
// is a revoke in the shop's admin panel.
// ────────────────────────────────────────────────────────────────────────────

function pqRegion(serverId: string): 'EU' | 'NA' | 'unknown' {
  const l = serverId.toLowerCase();
  if (l.startsWith('eu')) return 'EU';
  if (l.startsWith('na')) return 'NA';
  return 'unknown';
}

// Orders that can move: priority queue for one server. A product that covers every
// server has no server to move.
function movableOrders(entry: PriorityQueueEntry): PriorityQueueOrder[] {
  return (entry.orders || []).filter((o) => !!o.serverId);
}

function pqServerName(servers: PriorityQueueServer[], id: string | null | undefined): string {
  if (!id) return 'no server';
  const s = servers.find((x) => x.id === id);
  return s ? shortServer(s.label) : id.toUpperCase();
}

function pqOrderLabel(o: PriorityQueueOrder, servers: PriorityQueueServer[]): string {
  const until = new Date(o.effectiveUntil * 1000).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  return `#${o.id} · ${pqServerName(servers, o.serverId)} · ${o.isSubscription ? 'subscription' : 'one-time'} · paid to ${until}`;
}

type PqMove = {
  guid: string;
  // The order to move; null until staff pick one when the ID has several.
  orderId: number | null;
  from: string;
  to: string;
  reason: string;
  busy: boolean;
};

function PriorityQueueTab() {
  const cached = loadCachedPq();
  const [snapshot, setSnapshot] = useState<PriorityQueueSnapshot | null>(cached);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [move, setMove] = useState<PqMove | null>(null);
  // Slot usage lives on the GM snapshot (it is read from each server's real
  // game.admins), but the same allowance is what the queue eats into.
  const [capacity, setCapacity] = useState<Record<string, ServerCapacity | null> | undefined>(
    () => loadCachedSnapshot()?.capacity,
  );

  async function revalidate(): Promise<void> {
    try {
      const s = await getPriorityQueue();
      setSnapshot(s);
      saveCachedPq(s);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load priority queue');
    }
    try {
      const gm = await getAdminManagerSnapshot();
      if (gm?.capacity) setCapacity(gm.capacity);
    } catch {
      // Slot usage is supplementary — leave the last known figures in place.
    }
  }

  useEffect(() => {
    revalidate();
    const t = setInterval(revalidate, PQ_REVALIDATE_INTERVAL_MS);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const servers: PriorityQueueServer[] = useMemo(() => snapshot?.servers || [], [snapshot]);

  const filtered: PriorityQueueEntry[] = useMemo(() => {
    if (!snapshot) return [];
    const q = search.trim().toLowerCase();
    if (!q) return snapshot.entries;
    return snapshot.entries.filter(
      (e) => e.guid.toLowerCase().includes(q) || (e.displayName || '').toLowerCase().includes(q),
    );
  }, [snapshot, search]);

  // Per-server holder counts (all holders — ignores the search box).
  const serverCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of servers) counts[s.id] = 0;
    for (const e of snapshot?.entries || []) {
      for (const s of servers) if (e.presence[s.id]) counts[s.id] += 1;
    }
    return counts;
  }, [snapshot, servers]);

  function applyEntry(entry: PriorityQueueEntry): void {
    setSnapshot((prev) => {
      if (!prev) return { servers, entries: [entry] };
      const idx = prev.entries.findIndex((x) => x.guid === entry.guid);
      const stillListed = Object.values(entry.presence).some(Boolean) || entry.hasEntitlement === true;
      const next = prev.entries.slice();
      if (idx >= 0) {
        if (!stillListed) next.splice(idx, 1);
        else next[idx] = entry;
      } else if (stillListed) {
        next.unshift(entry);
      }
      const updated = { ...prev, entries: next };
      saveCachedPq(updated);
      return updated;
    });
  }

  function onStartMove(entry: PriorityQueueEntry): void {
    setError(null);
    setInfo(null);
    if (!entry.orders) {
      // A shop from before order details would move by writing a grant and a block,
      // which the owner has retired, so there is no move until the shop is updated.
      setMove(null);
      setError('The shop needs updating before orders can be moved.');
      return;
    }
    const orders = movableOrders(entry);
    if (orders.length === 0) {
      setMove(null);
      setError(`${entry.displayName || entry.guid} has priority queue from a product that covers every server, so there is no server to move.`);
      return;
    }
    const only = orders.length === 1 ? orders[0] : null;
    setMove({ guid: entry.guid, orderId: only ? only.id : null, from: only?.serverId || '', to: '', reason: '', busy: false });
  }

  function onApplyMove(entry: PriorityQueueEntry): void {
    if (!move || move.busy || !move.to || move.to === move.from) return;
    if (move.orderId == null) {
      setError('Pick which order to move.');
      return;
    }
    const label = entry.displayName || entry.guid;
    const request = { to: move.to, from: move.from || null, orderId: move.orderId, reason: move.reason };
    setMove({ ...move, busy: true });
    setError(null);
    setInfo(`Moving ${label} to ${pqServerName(servers, move.to)}…`);
    void (async () => {
      try {
        const r = await switchPriorityQueueServer(entry.guid, request);
        applyEntry(r.entry);
        setMove(null);
        const rows = Array.isArray(r.orderIds) ? r.orderIds.length : 0;
        setInfo(
          `Moved ${label} from ${pqServerName(servers, r.from)} to ${pqServerName(servers, r.to)}`
          + (r.orderId ? ` (order #${r.orderId}${rows > 1 ? `, ${rows} payment rows of the subscription` : ''})` : '')
          + '. Each server applies it at its next restart.',
        );
        void revalidate();
      } catch (e) {
        setInfo(null);
        setError(e instanceof Error ? e.message : 'Failed to move priority queue');
        if (e instanceof ApiError && e.code === 'ambiguous') {
          // The list on screen was older than the shop's: reload it so every order can be picked.
          setMove((m) => (m ? { ...m, orderId: null, busy: false } : m));
          await revalidate();
          return;
        }
        setMove((m) => (m ? { ...m, busy: false } : m));
      }
    })();
  }

  return (
    <>
      <div className="gm-page-head" style={{ marginTop: -10 }}>
        {capacity ? (
          <SlotChips capacity={capacity} />
        ) : (
          <div className="pq-stats">
            {servers.map((s) => (
              <span
                key={s.id}
                className={`pq-stat ${pqRegion(s.id).toLowerCase()}`}
                title={`${s.label}: ${serverCounts[s.id] ?? 0} on priority queue`}
              >
                {shortServer(s.label)} <b>{serverCounts[s.id] ?? 0}</b>
              </span>
            ))}
            <span className="pq-stat total" title="Total people on priority queue">
              Total <b>{snapshot?.entries.length ?? 0}</b>
            </span>
          </div>
        )}
      </div>

      <div className="gm-banner">
        Priority queue comes only from a paid order in the shop, so this list is read-only. Use move to put a paying
        holder&apos;s order on another server. To take priority queue away, revoke the order in the shop&apos;s admin panel.
        Game servers read the admin list at start, so every change applies at each server&apos;s next restart.
      </div>

      {error ? <div className="error">{error}</div> : null}
      {info ? <div className="card" style={{ fontSize: 12, color: 'var(--text-dim)' }}>{info}</div> : null}

      {(() => {
        if (!move) return null;
        const entry = snapshot?.entries.find((x) => x.guid === move.guid);
        if (!entry) return null;
        const orders = movableOrders(entry);
        // A server the shop does not sell (the dev server) cannot take a move.
        const destinations = servers.filter((s) => s.sellable !== false && s.id !== move.from);
        const needsOrder = move.orderId == null;
        return (
          <div className="card">
            <div className="stack" style={{ gap: 10 }}>
              <div style={{ fontWeight: 700, color: 'var(--text-bright)' }}>
                Move priority queue: {entry.displayName || entry.guid}
              </div>
              <div className="row" style={{ gap: 10, flexWrap: 'wrap' }}>
                <div style={{ minWidth: 260 }}>
                  <div className="label">Order</div>
                  <select
                    className="input"
                    value={move.orderId == null ? '' : String(move.orderId)}
                    disabled={move.busy || (orders.length < 2 && move.orderId != null)}
                    onChange={(ev) => {
                      const o = orders.find((x) => String(x.id) === ev.target.value) || null;
                      const from = o?.serverId || '';
                      setMove({ ...move, orderId: o ? o.id : null, from, to: move.to === from ? '' : move.to });
                    }}
                  >
                    {orders.length > 1 || move.orderId == null ? <option value="">Pick which order…</option> : null}
                    {orders.map((o) => (
                      <option key={o.id} value={String(o.id)}>{pqOrderLabel(o, servers)}</option>
                    ))}
                  </select>
                </div>
                <div style={{ minWidth: 140 }}>
                  <div className="label">To</div>
                  <select className="input" value={move.to} disabled={move.busy} onChange={(ev) => setMove({ ...move, to: ev.target.value })}>
                    <option value="">Pick…</option>
                    {destinations.map((s) => (
                      <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                </div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div className="label">Reason</div>
                  <input
                    className="input"
                    value={move.reason}
                    maxLength={400}
                    disabled={move.busy}
                    onChange={(ev) => setMove({ ...move, reason: ev.target.value })}
                    placeholder="Ticket number, and what the player asked for"
                  />
                </div>
                <div style={{ alignSelf: 'end' }}>
                  <button
                    className="buttonPrimary button"
                    onClick={() => onApplyMove(entry)}
                    disabled={move.busy || needsOrder || !move.to || move.to === move.from}
                  >
                    {move.busy ? 'Moving…' : 'Move'}
                  </button>
                </div>
                <div style={{ alignSelf: 'end' }}>
                  <button className="button" onClick={() => setMove(null)} disabled={move.busy}>Cancel</button>
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
                This changes the order itself: every payment of the subscription moves to the new server, so the paid time
                carries over and renewals pay for the new server. The shop refuses a server with no free slot, an order that
                has lapsed or was refunded, and a server this ID already has priority queue on. Your name and the reason go
                into the shop&apos;s audit record and onto the staff card.
              </div>
            </div>
          </div>
        );
      })()}

      <div className="gm-toolbar">
        <input className="input gm-search" placeholder="Search by name or GUID" value={search} onChange={(e) => setSearch(e.target.value)} />
        <span className="gm-meta">
          {filtered.length} of {snapshot?.entries.length || 0} on priority queue · {servers.length} server{servers.length === 1 ? '' : 's'}
        </span>
      </div>

      <div className="gm-table-wrap scroll">
        <table className="gm-table gm-table--pq">
          <thead>
            <tr className="gm-server-row">
              <th className="gm-sticky">Name</th>
              <th>GUID</th>
              {servers.map((s) => {
                const region = pqRegion(s.id);
                return (
                  <th key={s.id} className={`gm-col-server ${region.toLowerCase()}`}>
                    <span className="gm-tag" title={s.label}>{shortServer(s.label)}</span>
                    <span className="gm-col-count" title={`${serverCounts[s.id] ?? 0} on priority queue on ${s.label}`}>
                      ({serverCounts[s.id] ?? 0})
                    </span>
                  </th>
                );
              })}
              <th>Purchased</th>
              <th>Paid until</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5 + servers.length} className="gm-empty">
                  {snapshot ? 'Nobody holds priority queue right now.' : 'Loading...'}
                </td>
              </tr>
            ) : null}
            {filtered.map((e) => {
              const p = fmtPqPurchased(e);
              const x = fmtPqExpiry(e.expiresAt);
              return (
                <tr key={e.guid}>
                  <td className="gm-sticky">
                    {e.displayName
                      ? <span className="gm-name">{e.displayName}</span>
                      : <span className="gm-unknown">Unknown</span>}
                  </td>
                  <td><span className="gm-guid">{e.guid}</span></td>
                  {servers.map((s) => {
                    const on = !!e.presence[s.id];
                    const region = pqRegion(s.id);
                    const title = on ? `Paid priority queue on ${s.label}` : `No priority queue on ${s.label}`;
                    return (
                      <td key={s.id} className={`gm-col-server ${region.toLowerCase()}`}>
                        <span className={`gm-dot gm-dot--readonly ${on ? 'on' : ''}`} role="img" aria-label={title} title={title} />
                      </td>
                    );
                  })}
                  <td>
                    <span className="pq-purchased" title={p.title} style={{ color: 'var(--text-dim)' }}>{p.text}</span>
                  </td>
                  <td>
                    <span title={x.title || undefined} style={{ color: x.color, whiteSpace: 'nowrap' }}>{x.text}</span>
                  </td>
                  <td>
                    <div className="gm-actions">
                      <button
                        className="gm-icon-btn"
                        onClick={() => onStartMove(e)}
                        title="Move this holder's order to another server"
                      >
                        move
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
