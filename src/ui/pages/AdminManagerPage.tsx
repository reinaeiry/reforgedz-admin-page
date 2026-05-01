import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  type AdminEntry,
  type AdminManagerSnapshot,
  type ReforgerServer,
  addAdminToCache,
  deleteAdmin,
  getAdminManagerSnapshot,
  renameAdmin,
  toggleAdminOnServer,
} from '../../util/api';

const GUID_RE = /^[0-9a-fA-F-]{36}$/;
const SESSION_KEY = 'gm.snapshot.v1';
const REVALIDATE_INTERVAL_MS = 30 * 1000;

function toggleKey(guid: string, pteroId: string): string {
  return `${guid}:${pteroId}`;
}

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

export function AdminManagerPage() {
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
      // Silent on background errors. First-load failures still surface via the empty state.
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

  // Optimistic add: insert into the local snapshot immediately, fire the cache write
  // in the background. The server only stores name + GUID — no SSH involved — so we
  // don't need to revalidate at all on success.
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

  // Optimistic rename: update local display, close editor instantly, fire request in bg.
  // Pure local cache write on the server — no SSH, no need to revalidate.
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

  // Optimistic delete: remove from local snapshot immediately, fire the SSH writes in bg.
  // On error we resync from the boxes since the partial removal could be in any state.
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

  // Fire-and-forget toggle: flip the dot locally immediately, send the request in the
  // background. Server serializes per-server via withIngestLock so rapid clicks queue
  // safely. On error we resync from the source of truth instead of guessing.
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

  return (
    <div className="container">
      <div className="stack">
        <div className="gm-page-head">
          <h1 className="h1">GM Management</h1>
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
      </div>
    </div>
  );
}
