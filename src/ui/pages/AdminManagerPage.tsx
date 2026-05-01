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

function toggleKey(guid: string, pteroId: string): string {
  return `${guid}:${pteroId}`;
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

function sourceTag(s: AdminEntry['source']): string {
  if (s === 'pii') return 'pii';
  if (s === 'snapshot') return 'snap';
  if (s === 'battlemetrics') return 'bm';
  if (s === 'manual') return 'manual';
  return '';
}

export function AdminManagerPage() {
  const [snapshot, setSnapshot] = useState<AdminManagerSnapshot | null>(null);
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
  const [bfUseBm, setBfUseBm] = useState(false);
  const [bfBusy, setBfBusy] = useState(false);

  async function refresh(): Promise<void> {
    setBusy(true);
    setError(null);
    try {
      const s = await getAdminManagerSnapshot();
      setSnapshot(s);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

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
      setInfo('Admin added to roster. Tick the server checkboxes to grant access.');
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
    const label = admin.displayName === '?' ? admin.guid : `${admin.displayName} (${admin.guid})`;
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

  const servers: ReforgerServer[] = snapshot?.servers || [];

  return (
    <div className="container">
      <div className="stack">
        <div className="row" style={{ alignItems: 'center', gap: 12 }}>
          <h1 className="h1" style={{ flex: 1, margin: 0 }}>GM Management</h1>
          {snapshot?.dryRun ? (
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: '#f1c40f', border: '1px solid #f1c40f', padding: '4px 10px', borderRadius: 4 }}>
              DRY RUN
            </span>
          ) : null}
          <button className="btn" onClick={refresh} disabled={busy}>{busy ? '...' : 'Refresh'}</button>
          <button className="btn" onClick={() => setShowBackfill(true)} disabled={busy}>Backfill names</button>
          <button className="btn" onClick={() => setShowAdd((v) => !v)}>{showAdd ? 'Cancel' : '+ Add admin'}</button>
        </div>

        <div className="card" style={{ background: 'rgba(241,196,15,0.06)', borderColor: 'rgba(241,196,15,0.2)' }}>
          <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>
            Reforger loads its admin list at startup. Toggling a server here writes to the live config but does not
            kick existing players or grant access to currently-connected ones &mdash; restart each affected server to
            apply changes in-game.
          </div>
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
                Adding here only registers the admin in the central roster. Use the checkboxes to grant access on each server.
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
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                <input type="checkbox" checked={bfUseBm} onChange={(e) => setBfUseBm(e.target.checked)} />
                Also try BattleMetrics for unknowns (slower, may not match Reforger GUIDs)
              </label>
              <div className="row" style={{ gap: 10 }}>
                <button className="btn" onClick={onRunBackfill} disabled={bfBusy}>{bfBusy ? 'Running...' : 'Run backfill'}</button>
                <button className="btn" onClick={() => setShowBackfill(false)} disabled={bfBusy}>Cancel</button>
              </div>
            </div>
          </div>
        ) : null}

        {snapshot?.errors && snapshot.errors.length > 0 ? (
          <div className="card" style={{ borderColor: 'rgba(231,76,60,0.3)' }}>
            <div style={{ fontWeight: 700, color: '#e74c3c', marginBottom: 6 }}>Read errors</div>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 11, color: 'var(--text-dim)' }}>
              {snapshot.errors.map((e) => (
                <li key={e.pteroId}>{e.tag || e.pteroId}: {e.error}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="row" style={{ gap: 10, alignItems: 'center' }}>
          <input className="input" placeholder="Search by name or GUID" value={search} onChange={(e) => setSearch(e.target.value)} style={{ flex: 1 }} />
          <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
            {filteredAdmins.length} of {snapshot?.admins.length || 0} admins &middot; {servers.length} server{servers.length === 1 ? '' : 's'} &middot; last sync {formatTime(snapshot?.lastSyncAt || null)}
          </div>
        </div>

        <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ background: 'var(--bg-raised)' }}>
                <th style={{ textAlign: 'left', padding: '8px 10px', position: 'sticky', left: 0, background: 'var(--bg-raised)' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '8px 10px' }}>GUID</th>
                {servers.map((s) => (
                  <th key={s.pteroId} style={{ textAlign: 'center', padding: '8px 6px', minWidth: 60 }}>
                    <div style={{ fontWeight: 700 }}>{s.tag || s.name.slice(0, 8)}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-dim)', fontWeight: 400 }}>{s.region}</div>
                  </th>
                ))}
                <th style={{ padding: '8px 10px' }}></th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.length === 0 ? (
                <tr>
                  <td colSpan={2 + servers.length + 1} style={{ padding: 24, textAlign: 'center', color: 'var(--text-dim)' }}>
                    {snapshot ? 'No admins found.' : 'Loading...'}
                  </td>
                </tr>
              ) : null}
              {filteredAdmins.map((a) => {
                const isEditing = editingGuid === a.guid;
                return (
                  <tr key={a.guid} style={{ borderTop: '1px solid var(--border)' }}>
                    <td style={{ padding: '8px 10px', position: 'sticky', left: 0, background: 'var(--bg)' }}>
                      {isEditing ? (
                        <div className="row" style={{ gap: 4 }}>
                          <input className="input" value={editingName} onChange={(e) => setEditingName(e.target.value)} autoFocus style={{ padding: '4px 6px', fontSize: 12 }} />
                          <button className="btn" onClick={() => onRename(a.guid)} disabled={busy}>Save</button>
                          <button className="btn" onClick={() => { setEditingGuid(null); setEditingName(''); }}>Cancel</button>
                        </div>
                      ) : (
                        <div className="row" style={{ gap: 6, alignItems: 'center' }}>
                          <span style={{ fontWeight: 600, color: a.displayName === '?' ? 'var(--text-dim)' : 'var(--text-bright)' }}>
                            {a.displayName}
                          </span>
                          {sourceTag(a.source) ? (
                            <span style={{ fontSize: 9, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: 1 }}>{sourceTag(a.source)}</span>
                          ) : null}
                          <button className="btn" style={{ padding: '2px 6px', fontSize: 10 }} onClick={() => { setEditingGuid(a.guid); setEditingName(a.displayName === '?' ? '' : a.displayName); }}>edit</button>
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '8px 10px', fontFamily: 'monospace', color: 'var(--text-dim)', fontSize: 11 }}>{a.guid}</td>
                    {servers.map((s) => {
                      const checked = !!a.presence[s.pteroId];
                      const pending = pendingToggles.has(toggleKey(a.guid, s.pteroId));
                      return (
                        <td key={s.pteroId} style={{ textAlign: 'center', padding: '8px 6px', opacity: pending ? 0.4 : 1 }}>
                          <input
                            type="checkbox"
                            checked={checked}
                            disabled={pending || !s.sshConfigured}
                            onChange={(e) => onToggle(a.guid, s.pteroId, e.target.checked)}
                          />
                        </td>
                      );
                    })}
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <button className="btn" style={{ padding: '4px 10px', fontSize: 11, color: '#e74c3c' }} onClick={() => onDelete(a)} disabled={busy}>delete</button>
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
