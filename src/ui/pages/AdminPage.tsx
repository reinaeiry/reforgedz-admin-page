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

export function AdminPage() {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [users, setUsers] = useState<AdminUser[]>([]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newTools, setNewTools] = useState<ToolAccess>({ ...DEFAULT_TOOLS });

  // Which user row is expanded for editing
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
        <h1 className="h1">Admin Management</h1>

        {error ? <div className="error">{error}</div> : null}

        <div className="card">
          <div className="stack">
            <div>
              <div className="label">Create user</div>
              <div className="muted" style={{ fontSize: 12 }}>
                Create a new account and choose which tools it can access.
              </div>
            </div>

            <div className="row">
              <div style={{ flex: 1, minWidth: 200 }}>
                <div className="label">Username</div>
                <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div className="label">Password</div>
                <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
              </div>
            </div>

            {TOOL_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="label" style={{ marginBottom: 6 }}>{group.label}</div>
                <div className="row" style={{ gap: 12, flexWrap: 'wrap' }}>
                  {group.tools.map((t) => (
                    <label key={t.key} className="row" style={{ gap: 6, cursor: 'pointer' }}>
                      <input type="checkbox" checked={newTools[t.key]} onChange={() => toggleNewTool(t.key)} />
                      <span style={{ fontSize: 12 }}>{t.label}</span>
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
                Create user
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="stack">
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div>
                <div className="label">Users</div>
                <div className="muted" style={{ fontSize: 12 }}>Click a user to manage permissions.</div>
              </div>
              <button className="button" disabled={busy} onClick={refresh}>Refresh</button>
            </div>

            <div className="scroll" style={{ maxHeight: 520, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
              {users.length === 0 ? (
                <div className="muted" style={{ padding: 10, fontSize: 12 }}>No users found.</div>
              ) : (
                users.map((u) => {
                  const isExpanded = expanded === u.username;
                  return (
                    <div key={u.username} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div
                        style={{ padding: '10px 12px', cursor: 'pointer' }}
                        onClick={() => setExpanded(isExpanded ? null : u.username)}
                      >
                        <div className="row" style={{ justifyContent: 'space-between' }}>
                          <div>
                            <div style={{ fontWeight: 800 }}>{u.username}</div>
                            <div className="muted" style={{ fontSize: 11 }}>{toolSummary(u.tools ?? {})}</div>
                          </div>
                          <div className="row" style={{ gap: 8 }}>
                            <span className="muted" style={{ fontSize: 12 }}>{isExpanded ? 'collapse' : 'expand'}</span>
                            <button
                              className="button"
                              style={{ fontSize: 11, padding: '4px 10px', borderColor: 'rgba(255,180,180,0.35)' }}
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
                        <div style={{ padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {TOOL_GROUPS.map((group) => (
                            <div key={group.label}>
                              <div className="label" style={{ marginBottom: 4 }}>{group.label}</div>
                              <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
                                {group.tools.map((t) => {
                                  const on = !!(u.tools as Record<string, unknown> | undefined)?.[t.key];
                                  return (
                                    <button
                                      key={t.key}
                                      className="button"
                                      style={{
                                        fontSize: 11,
                                        padding: '4px 10px',
                                        borderColor: on ? 'rgba(183,247,200,0.4)' : 'rgba(255,255,255,0.12)',
                                        background: on ? 'rgba(183,247,200,0.08)' : undefined,
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
  );
}
