import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ReplayToolPage } from './pages/ReplayToolPage';
import { AdminManagerPage } from './pages/AdminManagerPage';
import { BattleMetricsPage as ModerationPage } from './pages/BattleMetricsPage';
import { PlayerProfilePage } from './pages/PlayerProfilePage';
import { AppShell } from './components/AppShell';
import { ToastProvider } from './components/Toast';
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
    <ToastProvider>
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
          <Route path="/moderation" element={<ModerationPage />} />
          {/* Back-compat for any bookmark or in-app link still using /battlemetrics */}
          <Route path="/battlemetrics" element={<Navigate to="/moderation" replace />} />
          <Route path="/player/:guid" element={<PlayerProfilePage />} />
          <Route path="/player/by-bm/:bmId" element={<PlayerProfilePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/replay" replace />} />
      </Routes>
    </ToastProvider>
  );
}
