import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  type AdminEntry,
  type AdminManagerSnapshot,
  type PriorityQueueEntry,
  type PriorityQueueServer,
  type PriorityQueueSnapshot,
  type PriorityQueueSource,
  type ReforgerServer,
  addAdminToCache,
  addManualPriorityQueue,
  deleteAdmin,
  deletePriorityQueue,
  getAdminManagerSnapshot,
  getPriorityQueue,
  renameAdmin,
  setPriorityQueueExpiry,
  toggleAdminOnServer,
  togglePriorityQueueServer,
} from '../../util/api';

const GUID_RE = /^[0-9a-fA-F-]{36}$/;
const SESSION_KEY = 'gm.snapshot.v1';
const REVALIDATE_INTERVAL_MS = 30 * 1000;
const PQ_SESSION_KEY = 'pq.snapshot.v1';
const PQ_REVALIDATE_INTERVAL_MS = 30 * 1000;

// Format a priority-queue expiry (unix seconds). null = permanent, undefined = unknown.
function fmtPqExpiry(ts: number | null | undefined): { text: string; soon: boolean } {
  if (ts === undefined) return { text: '—', soon: false };
  if (ts === null) return { text: 'Permanent', soon: false };
  const days = Math.ceil((ts * 1000 - Date.now()) / 86400000);
  return {
    text: new Date(ts * 1000).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }),
    soon: days <= 7,
  };
}

// Short server tag for column headers / count chips: drop anything after a "(" or a dash
// (so "EU1 (CHERNARUS)" and "09 — [DEV] Official Chernarus" become "EU1" / "09").
function shortServer(label: string): string {
  return (label || '').split(/\s+[—–-]\s+|\s*\(/)[0].trim() || label;
}

// Unix seconds -> "YYYY-MM-DD" (local) for <input type="date">.
function toYMD(tsSeconds: number): string {
  const d = new Date(tsSeconds * 1000);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
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
    setSnapshot((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        admins: prev.admins.map((a) =>
          a.guid === guid ? { ...a, presence: { ...a.presence, [pteroId]: present } } : a,
        ),
      };
    });
    void (async () => {
      try {
        await toggleAdminOnServer(guid, pteroId, present);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to update server');
        await revalidate(true);
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
                    return (
                      <td key={s.pteroId} className={`gm-col-server ${region.toLowerCase()}`}>
                        <button
                          type="button"
                          className={`gm-dot ${on ? 'on' : ''}`}
                          disabled={!s.sshConfigured}
                          onClick={() => onToggle(a.guid, s.pteroId, !on)}
                          aria-label={on ? `Remove ${a.displayName} from ${s.tag}` : `Grant ${a.displayName} access on ${s.tag}`}
                          title={on ? `Click to remove from ${s.tag}` : `Click to grant on ${s.tag}`}
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
// Priority Queue tab — manages who has priority queue on each game server.
// Data lives in reforgedz-dotnet (the shop). Purchase-driven dots are locked;
// manual dots can be toggled.
// ────────────────────────────────────────────────────────────────────────────

function pqRegion(serverId: string): 'EU' | 'NA' | 'unknown' {
  const l = serverId.toLowerCase();
  if (l.startsWith('eu')) return 'EU';
  if (l.startsWith('na')) return 'NA';
  return 'unknown';
}

function PriorityQueueTab() {
  const cached = loadCachedPq();
  const [snapshot, setSnapshot] = useState<PriorityQueueSnapshot | null>(cached);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [newGuid, setNewGuid] = useState('');
  const [newName, setNewName] = useState('');
  const [newServerId, setNewServerId] = useState<string>('');

  async function revalidate(): Promise<void> {
    try {
      const s = await getPriorityQueue();
      setSnapshot(s);
      saveCachedPq(s);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load priority queue');
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

  const newGuidValid = GUID_RE.test(newGuid.trim());
  const totalPresence = (e: PriorityQueueEntry) => Object.values(e.presence).filter(Boolean).length;

  function applyEntry(entry: PriorityQueueEntry): void {
    setSnapshot((prev) => {
      if (!prev) return { servers, entries: [entry] };
      const idx = prev.entries.findIndex((x) => x.guid === entry.guid);
      const stillPresent = Object.values(entry.presence).some(Boolean);
      let next = prev.entries.slice();
      if (idx >= 0) {
        if (!stillPresent) next.splice(idx, 1);
        else next[idx] = entry;
      } else if (stillPresent) {
        next.unshift(entry);
      }
      const updated = { ...prev, entries: next };
      saveCachedPq(updated);
      return updated;
    });
  }

  function onAdd(): void {
    if (!newGuidValid) {
      setError('GUID must be 36 chars with hyphens, e.g. fa3dab9d-f22a-44e4-959d-a4afd597acbc');
      return;
    }
    if (!newServerId) {
      setError('Pick a server to grant on.');
      return;
    }
    setError(null);
    const guid = newGuid.trim().toLowerCase();
    const name = newName.trim();
    setNewGuid('');
    setNewName('');
    setShowAdd(false);
    setInfo(`Granting priority queue on ${newServerId.toUpperCase()}…`);
    void (async () => {
      try {
        const r = await addManualPriorityQueue(guid, { displayName: name || undefined, serverId: newServerId });
        applyEntry(r.entry);
        setInfo('Granted. Restart the affected server for it to take effect in-game.');
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to add');
        await revalidate();
      }
    })();
  }

  function onToggle(entry: PriorityQueueEntry, serverId: string): void {
    const source = entry.sources[serverId];
    const present = !!entry.presence[serverId];
    // Any server is togglable for anyone — toggling a purchase-driven server off records a
    // "deny" on the backend (hides queue access there) without touching their order.
    setError(null);
    const nextPresent = !present;
    // Optimistic update
    const optimistic: PriorityQueueEntry = {
      ...entry,
      presence: { ...entry.presence, [serverId]: nextPresent },
      sources: {
        ...entry.sources,
        [serverId]: nextPresent
          ? source === 'purchase' ? 'both' : 'manual'
          : source === 'both' ? 'purchase' : null,
      },
    };
    applyEntry(optimistic);
    void (async () => {
      try {
        const r = await togglePriorityQueueServer(entry.guid, serverId, nextPresent, entry.displayName || undefined);
        applyEntry(r.entry);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to toggle');
        await revalidate();
      }
    })();
  }

  function onDelete(entry: PriorityQueueEntry): void {
    const manualCount = Object.values(entry.sources).filter((s) => s === 'manual' || s === 'both').length;
    if (manualCount === 0) {
      setError("This entry only exists from purchases. Revoke the order in the shop's admin panel.");
      return;
    }
    const ok = window.confirm(
      `Remove all ${manualCount} manual priority queue grant${manualCount === 1 ? '' : 's'} for ${entry.displayName || entry.guid}? Any purchase-driven slots will remain.`,
    );
    if (!ok) return;
    setError(null);
    void (async () => {
      try {
        await deletePriorityQueue(entry.guid);
        await revalidate();
        setInfo('Manual grants removed.');
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to delete');
        await revalidate();
      }
    })();
  }

  const expiryRefs = useRef<Record<string, HTMLInputElement | null>>({});

  function onSetExpiry(entry: PriorityQueueEntry, ymd: string): void {
    if (!ymd) return;
    const until = Math.floor(new Date(`${ymd}T23:59:59`).getTime() / 1000);
    if (!Number.isFinite(until)) return;
    const label = entry.displayName || entry.guid;
    const nice = new Date(until * 1000).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
    setError(null);
    setInfo(`Setting ${label} to expire ${nice}…`);
    void (async () => {
      try {
        await setPriorityQueueExpiry(entry.guid, until);
        await revalidate();
        setInfo(`${label} now expires ${nice}.`);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to set expiry');
        await revalidate();
      }
    })();
  }

  return (
    <>
      <div className="gm-page-head" style={{ marginTop: -10 }}>
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
        <span className="spacer" />
        <button className="button" onClick={() => setShowAdd((v) => !v)}>
          {showAdd ? 'Cancel' : '+ Grant priority queue'}
        </button>
      </div>

      <div className="gm-banner">
        Buying the Priority Queue product in the shop automatically grants this. Use this tab to grant manually
        without a purchase, or to toggle which servers anyone has it on — including purchases (that only changes
        queue access here, it never touches their order). Restart the affected server for game.admins changes to apply in-game.
      </div>

      {error ? <div className="error">{error}</div> : null}
      {info ? <div className="card" style={{ fontSize: 12, color: 'var(--text-dim)' }}>{info}</div> : null}

      {showAdd ? (
        <div className="card">
          <div className="stack" style={{ gap: 10 }}>
            <div style={{ fontWeight: 700, color: 'var(--text-bright)' }}>Grant priority queue</div>
            <div className="row" style={{ gap: 10 }}>
              <div style={{ flex: 2 }}>
                <div className="label">GUID</div>
                <input className="input" value={newGuid} onChange={(e) => setNewGuid(e.target.value)} placeholder="fa3dab9d-f22a-44e4-959d-a4afd597acbc" />
              </div>
              <div style={{ flex: 1 }}>
                <div className="label">Display name (optional)</div>
                <input className="input" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="NattiKitten" />
              </div>
              <div style={{ minWidth: 120 }}>
                <div className="label">Server</div>
                <select className="input" value={newServerId} onChange={(e) => setNewServerId(e.target.value)}>
                  <option value="">Pick…</option>
                  {servers.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
              <div style={{ alignSelf: 'end' }}>
                <button className="buttonPrimary button" onClick={onAdd} disabled={!newGuidValid || !newServerId}>Grant</button>
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
              The GUID will be added to that server's <code>game.admins</code> array and written into the shop's <code>purchases.json</code>. Use the dots in the table to add this person to additional servers afterwards.
            </div>
          </div>
        </div>
      ) : null}

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
                  </th>
                );
              })}
              <th>Expires</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4 + servers.length} className="gm-empty">
                  {snapshot ? 'Nobody has priority queue yet.' : 'Loading...'}
                </td>
              </tr>
            ) : null}
            {filtered.map((e) => {
              const total = totalPresence(e);
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
                    const source: PriorityQueueSource = e.sources[s.id];
                    const region = pqRegion(s.id);
                    const title = on
                      ? `Click to remove from ${s.label}${source === 'purchase' ? ' (hides it without changing their order)' : ''}`
                      : `Click to grant on ${s.label}`;
                    return (
                      <td key={s.id} className={`gm-col-server ${region.toLowerCase()}`}>
                        <button
                          type="button"
                          className={`gm-dot ${on ? 'on' : ''}`}
                          onClick={() => onToggle(e, s.id)}
                          aria-label={title}
                          title={title}
                        />
                      </td>
                    );
                  })}
                  <td>
                    {(() => {
                      const x = fmtPqExpiry(e.expiresAt);
                      return (
                        <span className="pq-expiry">
                          <button
                            type="button"
                            className="pq-date-btn"
                            style={{ color: x.soon ? 'var(--danger, #e66)' : 'var(--text-dim)' }}
                            onClick={() => {
                              const el = expiryRefs.current[e.guid];
                              if (el?.showPicker) el.showPicker();
                              else el?.focus();
                            }}
                            title="Click to pick an expiry date"
                          >
                            {x.text}<span className="pq-cal" aria-hidden="true">📅</span>
                          </button>
                          <input
                            ref={(el) => { expiryRefs.current[e.guid] = el; }}
                            type="date"
                            className="pq-date-input"
                            min={toYMD(Date.now() / 1000)}
                            defaultValue={e.expiresAt != null ? toYMD(e.expiresAt) : ''}
                            onChange={(ev) => onSetExpiry(e, ev.target.value)}
                          />
                        </span>
                      );
                    })()}
                  </td>
                  <td>
                    <div className="gm-actions">
                      <button
                        className="gm-icon-btn danger"
                        onClick={() => onDelete(e)}
                        disabled={total === 0}
                      >
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
