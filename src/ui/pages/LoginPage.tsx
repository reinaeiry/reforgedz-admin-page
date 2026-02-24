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
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, boxSizing: 'border-box' }}>
      <div className="stack" style={{ width: 'min(440px, 100%)', gap: 14 }}>
        <div style={{ textAlign: 'center' }}>
          <div className="label">Welcome</div>
          <h1 className="h1" style={{ fontSize: 22, marginTop: 6 }}>
            ReforgedZ Admin Menu
          </h1>
          <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
            Sign in to continue.
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <form className="stack" onSubmit={onSubmit}>
            <div className="stack" style={{ gap: 8 }}>
              <div className="label">Username</div>
              <input
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="stack" style={{ gap: 8 }}>
              <div className="label">Password</div>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            {error ? <div className="error" style={{ fontSize: 13 }}>{error}</div> : null}

            <button className="button buttonPrimary" type="submit" disabled={busy}>
              {busy ? 'Signing in…' : 'Sign in'}
            </button>

            <div className="muted" style={{ fontSize: 12 }}>
              If you aren't meant to be here, say hi to eiry, I know where you live!.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
