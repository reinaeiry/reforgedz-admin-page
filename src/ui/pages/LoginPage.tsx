import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../util/api';
import { setSession } from '../../util/session';

export function LoginPage() {
  const nav = useNavigate();
  const location = useLocation();

  const from = useMemo(() => {
    const state = location.state as { from?: string } | null;
    if (state && typeof state.from === 'string' && state.from.length > 0) {
      return state.from;
    }

    return '/';
  }, [location.state]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError(null);

    if (username.trim().length === 0 || password.length === 0) {
      setError('Enter username and password');
      return;
    }

    setBusy(true);
    try {
      const result = await login(username.trim(), password);
      setSession({ token: result.token });
      nav(from, { replace: true });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container">
      <div className="stack" style={{ maxWidth: 420 }}>
        <h1 className="h1">ReforgedZ Admin</h1>
        <div className="card">
          <form className="stack" onSubmit={onSubmit}>
            <div className="stack">
              <div className="label">Username</div>
              <input
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="stack">
              <div className="label">Password</div>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            {error ? <div className="error">{error}</div> : null}

            <button className="button" type="submit" disabled={busy}>
              {busy ? 'Signing in…' : 'Sign in'}
            </button>

            <div className="muted" style={{ fontSize: 12 }}>
              API base uses <code>VITE_API_BASE_URL</code> if set; otherwise it uses the current site origin.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
