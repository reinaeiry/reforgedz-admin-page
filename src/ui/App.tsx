import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ReplayToolPage } from './pages/ReplayToolPage';
import { AdminManagerPage } from './pages/AdminManagerPage';
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
        <Route path="/replay" element={<ReplayToolPage />} />
        <Route path="/admins" element={<AdminManagerPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/replay" replace />} />
    </Routes>
  );
}
