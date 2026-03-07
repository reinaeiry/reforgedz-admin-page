import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ReplayToolPage } from './pages/ReplayToolPage';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { DevPage } from './pages/DevPage';
import { PlayersPage } from './pages/PlayersPage';
import { BansPage } from './pages/BansPage';
import { MutesPage } from './pages/MutesPage';
import { EventLogPage } from './pages/EventLogPage';
import { ServerHealthPage } from './pages/ServerHealthPage';
import { PlayerProfilePage } from './pages/PlayerProfilePage';
import { AppShell } from './components/AppShell';
import { getSession } from '../util/session';

function RequireAuth(props: { children: React.ReactNode }) {
  const location = useLocation();
  const session = getSession();

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <>{props.children}</>;
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

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
        <Route path="/bans" element={<BansPage />} />
        <Route path="/mutes" element={<MutesPage />} />
        <Route path="/events" element={<EventLogPage />} />
        <Route path="/health" element={<ServerHealthPage />} />
        <Route path="/player" element={<PlayerProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dev" element={<DevPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
