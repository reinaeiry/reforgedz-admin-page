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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'radial-gradient(ellipse 600px 400px at 50% 30%, rgba(249, 188, 89, 0.05), transparent), var(--rz-bg)',
    }}>
      <div className="stack" style={{ width: 'min(420px, 100%)', gap: 20, animation: 'fadeIn 400ms ease-out' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--rz-accent)',
            marginBottom: 8,
          }}>
            ReforgedZ
          </div>
          <h1 className="h1" style={{ fontSize: 26 }}>
            Admin Panel
          </h1>
          <div className="muted" style={{ fontSize: 13, marginTop: 8 }}>
            Sign in to your account to continue.
          </div>
        </div>

        <div className="card cardGlow" style={{ padding: 28 }}>
          <form className="stack" style={{ gap: 18 }} onSubmit={onSubmit}>
            <div>
              <div className="label">Username</div>
              <input
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <div className="label">Password</div>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="Enter your password"
              />
            </div>

            {error ? <div className="error">{error}</div> : null}

            <button className="button buttonPrimary" type="submit" disabled={busy} style={{ padding: '12px 16px', fontSize: 14 }}>
              {busy ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>

        <div className="muted" style={{ fontSize: 11, textAlign: 'center' }}>
          If you aren't meant to be here, say hi to eiry, I know where you live!
        </div>
      </div>
    </div>
  );
}
