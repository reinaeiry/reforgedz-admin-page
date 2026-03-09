import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../util/api';
import { setSession } from '../../util/session';

export function LoginPage() {
  const nav = useNavigate();
  const location = useLocation();

  const from = useMemo(() => {
    const state = location.state as { from?: string } | null;
    if (state && typeof state.from === 'string' && state.from.length > 0) return state.from;
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
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
      background: 'radial-gradient(ellipse 500px 350px at 50% 35%, rgba(56,189,248,0.06), transparent), var(--bg)',
    }}>
      <div className="stack" style={{ width: 'min(400px, 100%)', gap: 24, animation: 'fadeUp 350ms var(--ease)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: 'linear-gradient(135deg, var(--cyan), #0ea5e9)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: 18, color: '#000',
            boxShadow: '0 0 30px rgba(56,189,248,0.2)',
            marginBottom: 16,
          }}>RZ</div>
          <h1 className="h1" style={{ fontSize: 24 }}>Admin Panel</h1>
          <div className="muted" style={{ fontSize: 13, marginTop: 6 }}>
            Sign in to your account
          </div>
        </div>

        <div className="card cardGlow" style={{ padding: 24 }}>
          <form className="stack" style={{ gap: 16 }} onSubmit={onSubmit}>
            <div>
              <div className="label">Username</div>
              <input className="input" value={username} onChange={(e) => setUsername(e.target.value)}
                autoComplete="username" placeholder="Enter username" />
            </div>
            <div>
              <div className="label">Password</div>
              <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password" placeholder="Enter password" />
            </div>
            {error ? <div className="error">{error}</div> : null}
            <button className="button buttonPrimary" type="submit" disabled={busy} style={{ padding: '10px 16px' }}>
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
