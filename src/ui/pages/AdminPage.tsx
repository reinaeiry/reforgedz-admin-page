import React, { useEffect, useMemo, useState } from 'react';
import { createUser, deleteUser, listUsers, updateUserTools, type AdminUser, type ToolAccess } from '../../util/api';

const TOOL_GROUPS = [
  { label: 'Core', tools: [
    { key: 'replay' as const, label: 'Replay' },
    { key: 'admin' as const, label: 'Users' },
    { key: 'dev' as const, label: 'Dev' },
  ]},
  { label: 'Admin', tools: [
    { key: 'players' as const, label: 'Players' },
    { key: 'bans' as const, label: 'Bans' },
    { key: 'mutes' as const, label: 'Mutes' },
    { key: 'events' as const, label: 'Events' },
    { key: 'health' as const, label: 'Health' },
    { key: 'playerLookup' as const, label: 'Lookup' },
  ]},
];

const DEFAULT_TOOLS: ToolAccess = {
  replay: true, admin: false, dev: false,
  players: false, bans: false, mutes: false, events: false, health: false, playerLookup: false,
};

function toolCount(tools: Partial<ToolAccess>): number {
  return Object.values(tools).filter(Boolean).length;
}

export function AdminPage() {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newTools, setNewTools] = useState<ToolAccess>({ ...DEFAULT_TOOLS });
  const [expanded, setExpanded] = useState<string | null>(null);

  async function refresh() {
    setBusy(true); setError(null);
    try { setUsers(await listUsers()); }
    catch (e) { setError(e instanceof Error ? e.message : 'Failed to load users'); }
    finally { setBusy(false); }
  }

  useEffect(() => { refresh(); }, []);

  const canCreate = useMemo(() => username.trim().length >= 3 && password.length >= 6, [password.length, username]);

  function toggleNewTool(key: keyof ToolAccess) {
    setNewTools((p) => ({ ...p, [key]: !p[key] }));
  }

  async function toggleUserTool(u: AdminUser, key: keyof ToolAccess) {
    setBusy(true); setError(null);
    try {
      const c: ToolAccess = {
        replay: !!u.tools?.replay, admin: !!u.tools?.admin, dev: !!u.tools?.dev,
        players: !!u.tools?.players, bans: !!u.tools?.bans, mutes: !!u.tools?.mutes,
        events: !!u.tools?.events, health: !!u.tools?.health, playerLookup: !!u.tools?.playerLookup,
      };
      await updateUserTools(u.username, { ...c, [key]: !c[key] });
      await refresh();
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed to update'); }
    finally { setBusy(false); }
  }

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">User Management</h1>

        {error ? <div className="error">{error}</div> : null}

        <div className="card">
          <div className="stack" style={{ gap: 12 }}>
            <div style={{ fontWeight: 700, color: 'var(--text-bright)' }}>Create User</div>
            <div className="row" style={{ gap: 10 }}>
              <div style={{ flex: 1 }}><div className="label">Username</div><input className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="min 3 chars" /></div>
              <div style={{ flex: 1 }}><div className="label">Password</div><input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="min 6 chars" /></div>
            </div>

            {TOOL_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="label" style={{ marginBottom: 6 }}>{group.label}</div>
                <div className="row" style={{ gap: 6 }}>
                  {group.tools.map((t) => (
                    <label key={t.key} style={{
                      display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                      padding: '5px 10px', borderRadius: 'var(--r)',
                      background: newTools[t.key] ? 'var(--cyan-dim)' : 'var(--bg-raised)',
                      border: `1px solid ${newTools[t.key] ? 'rgba(56,189,248,0.15)' : 'var(--border)'}`,
                      transition: 'all var(--speed)',
                    }}>
                      <input type="checkbox" checked={newTools[t.key]} onChange={() => toggleNewTool(t.key)} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: newTools[t.key] ? 'var(--cyan)' : 'var(--text-dim)' }}>{t.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ textAlign: 'right' }}>
              <button className="button buttonPrimary" disabled={!canCreate || busy}
                onClick={async () => {
                  setBusy(true); setError(null);
                  try {
                    await createUser({ username: username.trim(), password, tools: newTools });
                    setUsername(''); setPassword(''); setNewTools({ ...DEFAULT_TOOLS });
                    await refresh();
                  } catch (e) { setError(e instanceof Error ? e.message : 'Failed to create user'); }
                  finally { setBusy(false); }
                }}>Create User</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="stack" style={{ gap: 12 }}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 700, color: 'var(--text-bright)' }}>Users</span>
                {users.length > 0 && <span className="badge badgeMuted">{users.length}</span>}
              </div>
              <button className="button" disabled={busy} onClick={refresh}>Refresh</button>
            </div>

            <div className="listContainer">
              <div className="scroll" style={{ maxHeight: 520, overflow: 'auto' }}>
                {users.length === 0 ? (
                  <div className="listEmpty">No users found.</div>
                ) : users.map((u) => {
                  const isExp = expanded === u.username;
                  const cnt = toolCount(u.tools ?? {});
                  return (
                    <div key={u.username}>
                      <div className={`listRow listRowClickable${isExp ? ' listRowHighlight' : ''}`}
                        onClick={() => setExpanded(isExp ? null : u.username)}>
                        <div className="row" style={{ justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{
                              width: 32, height: 32, borderRadius: 'var(--r)',
                              background: 'var(--cyan-dim)', border: '1px solid rgba(56,189,248,0.12)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 13, fontWeight: 900, color: 'var(--cyan)', flexShrink: 0,
                            }}>{u.username[0].toUpperCase()}</div>
                            <div>
                              <div style={{ fontWeight: 700, color: 'var(--text-bright)', fontSize: 13 }}>{u.username}</div>
                              <div className="muted" style={{ fontSize: 10 }}>{cnt} tool{cnt !== 1 ? 's' : ''}</div>
                            </div>
                          </div>
                          <button className="button buttonDanger" style={{ fontSize: 10, padding: '4px 10px' }} disabled={busy}
                            onClick={async (e) => {
                              e.stopPropagation();
                              if (!confirm(`Delete '${u.username}'?`)) return;
                              setBusy(true); setError(null);
                              try { await deleteUser(u.username); await refresh(); }
                              catch (err) { setError(err instanceof Error ? err.message : 'Failed'); }
                              finally { setBusy(false); }
                            }}>Delete</button>
                        </div>
                      </div>
                      {isExp ? (
                        <div style={{ padding: '4px 16px 14px', animation: 'fadeIn 150ms' }}>
                          <div className="stack" style={{ gap: 10 }}>
                            {TOOL_GROUPS.map((group) => (
                              <div key={group.label}>
                                <div className="label" style={{ marginBottom: 4 }}>{group.label}</div>
                                <div className="row" style={{ gap: 4 }}>
                                  {group.tools.map((t) => {
                                    const on = !!(u.tools as Record<string, unknown> | undefined)?.[t.key];
                                    return (
                                      <button key={t.key} className="button" style={{
                                        fontSize: 10, padding: '4px 10px',
                                        borderColor: on ? 'rgba(74,222,128,0.2)' : 'var(--border)',
                                        background: on ? 'var(--green-dim)' : 'var(--surface)',
                                        color: on ? 'var(--green)' : 'var(--text-dim)',
                                      }} disabled={busy} onClick={() => toggleUserTool(u, t.key)}>
                                        {t.label}: {on ? 'On' : 'Off'}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
