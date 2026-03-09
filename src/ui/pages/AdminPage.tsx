import React, { useEffect, useMemo, useState } from 'react';
import { createUser, deleteUser, listUsers, updateUserTools, type AdminUser, type ToolAccess } from '../../util/api';

const TOOL_GROUPS = [
  {
    label: 'Core',
    tools: [
      { key: 'replay' as const, label: 'Replay Tool' },
      { key: 'admin' as const, label: 'User Management' },
      { key: 'dev' as const, label: 'Dev' },
    ],
  },
  {
    label: 'Admin Tools',
    tools: [
      { key: 'players' as const, label: 'Live Players' },
      { key: 'bans' as const, label: 'Bans' },
      { key: 'mutes' as const, label: 'Mutes' },
      { key: 'events' as const, label: 'Event Log' },
      { key: 'health' as const, label: 'Server Health' },
      { key: 'playerLookup' as const, label: 'Player Lookup' },
    ],
  },
];

const DEFAULT_TOOLS: ToolAccess = {
  replay: true, admin: false, dev: false,
  players: false, bans: false, mutes: false, events: false, health: false, playerLookup: false,
};

function toolSummary(tools: Partial<ToolAccess>): string {
  const active = Object.entries(tools).filter(([, v]) => v).map(([k]) => k);
  return active.length > 0 ? active.join(', ') : 'none';
}

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
    setBusy(true);
    setError(null);
    try {
      setUsers(await listUsers());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load users');
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  const canCreate = useMemo(() => {
    const u = username.trim();
    return u.length >= 3 && password.length >= 6;
  }, [password.length, username]);

  function toggleNewTool(key: keyof ToolAccess) {
    setNewTools((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  async function toggleUserTool(u: AdminUser, key: keyof ToolAccess) {
    setBusy(true);
    setError(null);
    try {
      const current: ToolAccess = {
        replay: !!u.tools?.replay, admin: !!u.tools?.admin, dev: !!u.tools?.dev,
        players: !!u.tools?.players, bans: !!u.tools?.bans, mutes: !!u.tools?.mutes,
        events: !!u.tools?.events, health: !!u.tools?.health, playerLookup: !!u.tools?.playerLookup,
      };
      await updateUserTools(u.username, { ...current, [key]: !current[key] });
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to update user');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">User Management</h1>

        {error ? <div className="error">{error}</div> : null}

        {/* Create user */}
        <div className="card">
          <div className="stack">
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--rz-text-bright)', marginBottom: 4 }}>Create User</div>
              <div className="muted" style={{ fontSize: 12 }}>
                Create a new account and configure tool permissions.
              </div>
            </div>

            <div className="row" style={{ gap: 12 }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div className="label">Username</div>
                <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username (min 3 chars)" />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div className="label">Password</div>
                <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password (min 6 chars)" />
              </div>
            </div>

            {TOOL_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="label" style={{ marginBottom: 8 }}>{group.label}</div>
                <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
                  {group.tools.map((t) => (
                    <label key={t.key} style={{
                      display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                      padding: '6px 12px', borderRadius: 'var(--rz-radius)',
                      background: newTools[t.key] ? 'var(--rz-success-soft)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${newTools[t.key] ? 'rgba(52,211,153,0.2)' : 'var(--rz-border)'}`,
                      transition: 'all var(--rz-transition)',
                    }}>
                      <input type="checkbox" checked={newTools[t.key]} onChange={() => toggleNewTool(t.key)} />
                      <span style={{ fontSize: 12, fontWeight: 600, color: newTools[t.key] ? 'var(--rz-success)' : 'var(--rz-muted)' }}>{t.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button
                className="button buttonPrimary"
                disabled={!canCreate || busy}
                onClick={async () => {
                  setBusy(true);
                  setError(null);
                  try {
                    await createUser({ username: username.trim(), password, tools: newTools });
                    setUsername('');
                    setPassword('');
                    setNewTools({ ...DEFAULT_TOOLS });
                    await refresh();
                  } catch (e) {
                    setError(e instanceof Error ? e.message : 'Failed to create user');
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                Create User
              </button>
            </div>
          </div>
        </div>

        {/* Users list */}
        <div className="card">
          <div className="stack">
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--rz-text-bright)', marginBottom: 4 }}>
                  Users
                  {users.length > 0 ? <span className="badge badgeMuted" style={{ marginLeft: 8 }}>{users.length}</span> : null}
                </div>
                <div className="muted" style={{ fontSize: 12 }}>Click a user to manage their permissions.</div>
              </div>
              <button className="button" disabled={busy} onClick={refresh}>Refresh</button>
            </div>

            <div className="listContainer">
              <div className="scroll" style={{ maxHeight: 560, overflow: 'auto' }}>
                {users.length === 0 ? (
                  <div className="listEmpty">No users found.</div>
                ) : (
                  users.map((u) => {
                    const isExpanded = expanded === u.username;
                    const count = toolCount(u.tools ?? {});
                    return (
                      <div key={u.username}>
                        <div
                          className={`listRow listRowClickable${isExpanded ? ' listRowHighlight' : ''}`}
                          onClick={() => setExpanded(isExpanded ? null : u.username)}
                        >
                          <div className="row" style={{ justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <div style={{
                                width: 36, height: 36, borderRadius: 'var(--rz-radius)',
                                background: 'var(--rz-accent-soft)', border: '1px solid var(--rz-border-accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 14, fontWeight: 800, color: 'var(--rz-accent)', flexShrink: 0,
                              }}>
                                {u.username[0].toUpperCase()}
                              </div>
                              <div>
                                <div style={{ fontWeight: 700, color: 'var(--rz-text-bright)' }}>{u.username}</div>
                                <div className="muted" style={{ fontSize: 11 }}>
                                  {count} tool{count !== 1 ? 's' : ''} enabled
                                </div>
                              </div>
                            </div>
                            <div className="row" style={{ gap: 8 }}>
                              <span className="muted" style={{ fontSize: 11 }}>{isExpanded ? 'collapse' : 'expand'}</span>
                              <button
                                className="button buttonDanger"
                                style={{ fontSize: 11, padding: '5px 12px' }}
                                disabled={busy}
                                onClick={async (e) => {
                                  e.stopPropagation();
                                  if (!confirm(`Delete user '${u.username}'?`)) return;
                                  setBusy(true);
                                  setError(null);
                                  try {
                                    await deleteUser(u.username);
                                    await refresh();
                                  } catch (err) {
                                    setError(err instanceof Error ? err.message : 'Failed to delete user');
                                  } finally {
                                    setBusy(false);
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>

                        {isExpanded ? (
                          <div style={{ padding: '4px 16px 16px', animation: 'fadeIn 200ms ease-out' }}>
                            <div className="stack" style={{ gap: 12 }}>
                              {TOOL_GROUPS.map((group) => (
                                <div key={group.label}>
                                  <div className="label" style={{ marginBottom: 6 }}>{group.label}</div>
                                  <div className="row" style={{ gap: 6, flexWrap: 'wrap' }}>
                                    {group.tools.map((t) => {
                                      const on = !!(u.tools as Record<string, unknown> | undefined)?.[t.key];
                                      return (
                                        <button
                                          key={t.key}
                                          className="button"
                                          style={{
                                            fontSize: 11,
                                            padding: '5px 12px',
                                            borderColor: on ? 'rgba(52,211,153,0.3)' : 'var(--rz-border)',
                                            background: on ? 'var(--rz-success-soft)' : 'var(--rz-surface)',
                                            color: on ? 'var(--rz-success)' : 'var(--rz-muted)',
                                          }}
                                          disabled={busy}
                                          onClick={() => toggleUserTool(u, t.key)}
                                        >
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
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
