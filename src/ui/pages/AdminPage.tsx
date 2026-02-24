import React, { useEffect, useMemo, useState } from 'react';
import { createUser, deleteUser, listUsers, updateUserTools, type AdminUser } from '../../util/api';

export function AdminPage() {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [users, setUsers] = useState<AdminUser[]>([]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toolsReplay, setToolsReplay] = useState(true);
  const [toolsAdmin, setToolsAdmin] = useState(false);
  const [toolsDev, setToolsDev] = useState(false);

  async function refresh() {
    setBusy(true);
    setError(null);
    try {
      const u = await listUsers();
      setUsers(u);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load users');
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  const canCreate = useMemo(() => {
    const u = username.trim();
    return u.length >= 3 && password.length >= 6;
  }, [password.length, username]);

  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Admin</h1>

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
              <div style={{ flex: 1, minWidth: 240 }}>
                <div className="label">Username</div>
                <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
              </div>

              <div style={{ flex: 1, minWidth: 240 }}>
                <div className="label">Password</div>
                <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
              </div>
            </div>

            <div className="row" style={{ gap: 16 }}>
              <label className="row" style={{ gap: 8 }}>
                <input type="checkbox" checked={toolsReplay} onChange={(e) => setToolsReplay(e.target.checked)} />
                <span className="muted" style={{ fontSize: 12 }}>Replay Tool</span>
              </label>

              <label className="row" style={{ gap: 8 }}>
                <input type="checkbox" checked={toolsAdmin} onChange={(e) => setToolsAdmin(e.target.checked)} />
                <span className="muted" style={{ fontSize: 12 }}>Admin</span>
              </label>

              <label className="row" style={{ gap: 8 }}>
                <input type="checkbox" checked={toolsDev} onChange={(e) => setToolsDev(e.target.checked)} />
                <span className="muted" style={{ fontSize: 12 }}>Dev</span>
              </label>
            </div>

            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button
                className="button buttonPrimary"
                disabled={!canCreate || busy}
                onClick={async () => {
                  setBusy(true);
                  setError(null);
                  try {
                    await createUser({
                      username: username.trim(),
                      password,
                      tools: { replay: toolsReplay, admin: toolsAdmin, dev: toolsDev },
                    });
                    setUsername('');
                    setPassword('');
                    setToolsReplay(true);
                    setToolsAdmin(false);
                    setToolsDev(false);
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
                <div className="muted" style={{ fontSize: 12 }}>Manage tool access and reset passwords.</div>
              </div>

              <button className="button buttonPrimary" disabled={busy} onClick={refresh}>
                Refresh
              </button>
            </div>

            <div className="scroll" style={{ maxHeight: 420, overflow: 'auto', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10 }}>
              {users.length === 0 ? (
                <div className="muted" style={{ padding: 10, fontSize: 12 }}>No users found.</div>
              ) : (
                users.map((u) => (
                  <div key={u.username} style={{ padding: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 800 }}>{u.username}</div>
                        <div className="muted" style={{ fontSize: 12 }}>
                          tools: {u.tools?.replay ? 'replay ' : ''}{u.tools?.admin ? 'admin ' : ''}{u.tools?.dev ? 'dev ' : ''}
                        </div>
                      </div>

                      <div className="row" style={{ gap: 8 }}>
                        <button
                          className="button"
                          onClick={async () => {
                            setBusy(true);
                            setError(null);
                            try {
                              await updateUserTools(u.username, { replay: !u.tools?.replay, admin: !!u.tools?.admin, dev: !!u.tools?.dev });
                              await refresh();
                            } catch (e) {
                              setError(e instanceof Error ? e.message : 'Failed to update user');
                            } finally {
                              setBusy(false);
                            }
                          }}
                          disabled={busy}
                          title="Toggle replay tool access"
                        >
                          Replay: {u.tools?.replay ? 'On' : 'Off'}
                        </button>

                        <button
                          className="button"
                          onClick={async () => {
                            setBusy(true);
                            setError(null);
                            try {
                              await updateUserTools(u.username, { replay: !!u.tools?.replay, admin: !u.tools?.admin, dev: !!u.tools?.dev });
                              await refresh();
                            } catch (e) {
                              setError(e instanceof Error ? e.message : 'Failed to update user');
                            } finally {
                              setBusy(false);
                            }
                          }}
                          disabled={busy}
                          title="Toggle admin access"
                        >
                          Admin: {u.tools?.admin ? 'On' : 'Off'}
                        </button>

                        <button
                          className="button"
                          onClick={async () => {
                            setBusy(true);
                            setError(null);
                            try {
                              await updateUserTools(u.username, { replay: !!u.tools?.replay, admin: !!u.tools?.admin, dev: !u.tools?.dev });
                              await refresh();
                            } catch (e) {
                              setError(e instanceof Error ? e.message : 'Failed to update user');
                            } finally {
                              setBusy(false);
                            }
                          }}
                          disabled={busy}
                          title="Toggle dev access"
                        >
                          Dev: {u.tools?.dev ? 'On' : 'Off'}
                        </button>

                        <button
                          className="button"
                          style={{ borderColor: 'rgba(255, 180, 180, 0.35)' }}
                          disabled={busy}
                          onClick={async () => {
                            if (!confirm(`Delete user '${u.username}'?`)) return;
                            setBusy(true);
                            setError(null);
                            try {
                              await deleteUser(u.username);
                              await refresh();
                            } catch (e) {
                              setError(e instanceof Error ? e.message : 'Failed to delete user');
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
