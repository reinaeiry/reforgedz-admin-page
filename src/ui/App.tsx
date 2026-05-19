import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ReplayToolPage } from './pages/ReplayToolPage';
import { HomePage } from './pages/HomePage';
import { AdminManagerPage } from './pages/AdminManagerPage';
import { DevPage } from './pages/DevPage';
import { PlayersPage } from './pages/PlayersPage';
import { ModerationPage } from './pages/ModerationPage';
import { ServerPage } from './pages/ServerPage';
import { AppShell } from './components/AppShell';
import { getSession, loadSession, loginUrl } from '../util/session';

function RequireAuth(props: { children: React.ReactNode }) {
  const [ready, setReady] = useState(getSession() !== null);

  useEffect(() => {
    if (ready) return;
    loadSession().then((s) => {
      if (!s) {
        window.location.href = loginUrl(window.location.href);
        return;
      }
      setReady(true);
    });
  }, [ready]);

  if (!ready) {
    return <div style={{ padding: 24, color: '#888' }}>Loading session…</div>;
  }
  return <>{props.children}</>;
}

export function App() {
  return (
    <Routes>
      <Route
        element={
          <RequireAuth>
            <AppShell />
          </RequireAuth>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/replay" element={<ReplayToolPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/moderation" element={<ModerationPage />} />
        <Route path="/server" element={<ServerPage />} />
        <Route path="/admins" element={<AdminManagerPage />} />
        <Route path="/dev" element={<DevPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
