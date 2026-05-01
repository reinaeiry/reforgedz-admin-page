import React, { useEffect, useMemo, useState } from 'react';
import {
  type AdminEntry,
  type AdminManagerSnapshot,
  type ReforgerServer,
  addAdminToCache,
  deleteAdmin,
  getAdminManagerSnapshot,
  renameAdmin,
  runAdminBackfill,
  toggleAdminOnServer,
} from '../../util/api';

const GUID_RE = /^[0-9a-fA-F-]{36}$/;
const SESSION_KEY = 'gm.snapshot.v1';

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

function formatTime(ms: number | null): string {
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
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [pendingToggles, setPendingToggles] = useState<Set<string>>(new Set());

  const [showAdd, setShowAdd] = useState(false);
  const [newGuid, setNewGuid] = useState('');
  const [newName, setNewName] = useState('');

  const [editingGuid, setEditingGuid] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  const [showBackfill, setShowBackfill] = useState(false);
  const [bfUseBm, setBfUseBm] = useState<boolean>(!!cached?.bmAvailable);
  const [bfBusy, setBfBusy] = useState(false);

  async function refresh(force = false): Promise<void> {
    setBusy(true);
    setError(null);
    try {
      const sinceVersion = !force && snapshot?.version ? snapshot.version : undefined;
      const s = await getAdminManagerSnapshot({ force, sinceVersion });
      if (s) {
        setSnapshot(s);
        saveCachedSnapshot(s);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    // Always revalidate on mount, but the cached snapshot is already rendered.
    refresh(false);
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

  async function onAdd(): Promise<void> {
    if (!newGuidValid) {
      setError('GUID must be 36 chars with hyphens, e.g. fa3dab9d-f22a-44e4-959d-a4afd597acbc');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await addAdminToCache(newGuid.trim(), newName.trim());
      setNewGuid('');
      setNewName('');
      setShowAdd(false);
      await refresh();
      setInfo('Admin added to roster. Click the dots to grant access on each server.');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to add');
    } finally {
      setBusy(false);
    }
  }

  async function onRename(guid: string): Promise<void> {
    const name = editingName.trim();
    if (!name) {
      setError('Name cannot be empty');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await renameAdmin(guid, name);
      setEditingGuid(null);
      setEditingName('');
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to rename');
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(admin: AdminEntry): Promise<void> {
    const presentCount = Object.values(admin.presence).filter(Boolean).length;
    const label = isUnknown(admin) ? admin.guid : `${admin.displayName} (${admin.guid})`;
    const ok = window.confirm(
      `Remove ${label} from all ${presentCount} server config${presentCount === 1 ? '' : 's'}?`,
    );
    if (!ok) return;
    setBusy(true);
    setError(null);
    try {
      const result = await deleteAdmin(admin.guid);
      const removed = result.results.filter((r) => r.removed).length;
      setInfo(`Removed from ${removed}/${result.results.length} servers.`);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to delete');
    } finally {
      setBusy(false);
    }
  }

  async function onToggle(guid: string, pteroId: string, present: boolean): Promise<void> {
    if (!snapshot) return;
    const key = toggleKey(guid, pteroId);
    setPendingToggles((p) => new Set(p).add(key));
    setSnapshot((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        admins: prev.admins.map((a) =>
          a.guid === guid ? { ...a, presence: { ...a.presence, [pteroId]: present } } : a,
        ),
      };
    });
    try {
      await toggleAdminOnServer(guid, pteroId, present);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to update server');
      setSnapshot((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          admins: prev.admins.map((a) =>
            a.guid === guid ? { ...a, presence: { ...a.presence, [pteroId]: !present } } : a,
          ),
        };
      });
    } finally {
      setPendingToggles((p) => {
        const n = new Set(p);
        n.delete(key);
        return n;
      });
    }
  }

  async function onRunBackfill(): Promise<void> {
    setBfBusy(true);
    setError(null);
    try {
      const r = await runAdminBackfill(bfUseBm);
      setInfo(`Backfill: resolved ${r.resolved}, unknown ${r.unknown} of ${r.total} GUIDs.`);
      setShowBackfill(false);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Backfill failed');
    } finally {
      setBfBusy(false);
    }
  }

  // Index server -> region for quick lookup in the dot cells
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
          <button className="btn" onClick={() => refresh(true)} disabled={busy}>{busy ? '...' : 'Refresh'}</button>
          <button className="btn" onClick={() => setShowBackfill(true)} disabled={busy}>Backfill names</button>
          <button className="btn" onClick={() => setShowAdd((v) => !v)}>{showAdd ? 'Cancel' : '+ Add admin'}</button>
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
                  <button className="btn" onClick={onAdd} disabled={busy || !newGuidValid}>Add</button>
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
                Adding here only registers the admin in the central roster. Use the dots in the matrix to grant access on each server.
              </div>
            </div>
          </div>
        ) : null}

        {showBackfill ? (
          <div className="card">
            <div className="stack" style={{ gap: 10 }}>
              <div style={{ fontWeight: 700, color: 'var(--text-bright)' }}>Backfill names</div>
              <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>
                Walks local PII and snapshot data to map known GUIDs to display names. Manually-entered names are not overwritten.
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, opacity: snapshot?.bmAvailable ? 1 : 0.5 }}>
                <input
                  type="checkbox"
                  checked={bfUseBm && !!snapshot?.bmAvailable}
                  disabled={!snapshot?.bmAvailable}
                  onChange={(e) => setBfUseBm(e.target.checked)}
                />
                Also try BattleMetrics for unknowns
                {snapshot?.bmAvailable
                  ? ' (queries reforgerUUID via /players/match)'
                  : ' — set BATTLEMETRICS_API_KEY in .env to enable'}
              </label>
              <div className="row" style={{ gap: 10 }}>
                <button className="btn" onClick={onRunBackfill} disabled={bfBusy}>{bfBusy ? 'Running...' : 'Run backfill'}</button>
                <button className="btn" onClick={() => setShowBackfill(false)} disabled={bfBusy}>Cancel</button>
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
            {filteredAdmins.length} of {snapshot?.admins.length || 0} admins · {orderedServers.length} server{orderedServers.length === 1 ? '' : 's'} · last sync {formatTime(snapshot?.lastSyncAt || null)}
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
                          <button className="gm-icon-btn" onClick={() => onRename(a.guid)} disabled={busy}>save</button>
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
                      const pending = pendingToggles.has(toggleKey(a.guid, s.pteroId));
                      const region = regionByPteroId[s.pteroId] || 'unknown';
                      return (
                        <td key={s.pteroId} className={`gm-col-server ${region.toLowerCase()}`}>
                          <button
                            type="button"
                            className={`gm-dot ${on ? 'on' : ''} ${pending ? 'pending' : ''}`}
                            disabled={!s.sshConfigured || pending}
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
                          disabled={busy || editing}
                        >
                          edit
                        </button>
                        <button className="gm-icon-btn danger" onClick={() => onDelete(a)} disabled={busy}>
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
