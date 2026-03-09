import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearSession, hasToolAccess } from '../../util/session';
import { ServerProvider, useServer } from '../ServerContext';

function NavItem(props: { to: string; label: string; icon: string }) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => `navItem${isActive ? ' navItemActive' : ''}`}
    >
      <span className="navIcon">{props.icon}</span>
      {props.label}
    </NavLink>
  );
}

function SidebarSection(props: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="sidebarSection">{props.label}</div>
      <div className="stack" style={{ gap: 2 }}>
        {props.children}
      </div>
    </div>
  );
}

function ServerSelector() {
  const { servers, serverId, setServerId } = useServer();
  return (
    <div className="serverSelector">
      <div className="label">Server</div>
      <select className="input" value={serverId} onChange={(e) => setServerId(e.target.value)}>
        <option value="">Select server...</option>
        {servers.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
    </div>
  );
}

function AppShellInner() {
  const nav = useNavigate();

  function onLogout() {
    clearSession();
    nav('/login', { replace: true });
  }

  const showPlayers = hasToolAccess('players') || hasToolAccess('playerLookup');
  const showModeration = hasToolAccess('bans') || hasToolAccess('mutes');
  const showServer = hasToolAccess('events') || hasToolAccess('health');
  const showAdmin = showPlayers || showModeration || showServer;

  return (
    <div className="appShell">
      <aside className="sidebar scroll">
        <div className="sidebarBrand">
          <div className="sidebarBrandName">ReforgedZ</div>
          <div className="sidebarBrandTitle">Admin Panel</div>
        </div>

        <ServerSelector />

        <div className="stack" style={{ gap: 2 }}>
          <NavItem to="/" label="Dashboard" icon="&#9632;" />

          {hasToolAccess('replay') ? (
            <SidebarSection label="Tools">
              <NavItem to="/replay" label="Replay Tool" icon="&#9654;" />
            </SidebarSection>
          ) : null}

          {showAdmin ? (
            <SidebarSection label="Admin">
              {showPlayers ? <NavItem to="/players" label="Players" icon="&#9679;" /> : null}
              {showModeration ? <NavItem to="/moderation" label="Moderation" icon="&#9888;" /> : null}
              {showServer ? <NavItem to="/server" label="Server" icon="&#9881;" /> : null}
            </SidebarSection>
          ) : null}

          {(hasToolAccess('admin') || hasToolAccess('dev') || hasToolAccess('pii')) ? (
            <SidebarSection label="Management">
              {hasToolAccess('pii') ? <NavItem to="/pii" label="PII Data" icon="&#128274;" /> : null}
              {hasToolAccess('admin') ? <NavItem to="/admin" label="Users" icon="&#9734;" /> : null}
              {hasToolAccess('dev') ? <NavItem to="/dev" label="Developer" icon="&#9998;" /> : null}
            </SidebarSection>
          ) : null}
        </div>

        <button className="logoutBtn" onClick={onLogout}>
          Sign out
        </button>
      </aside>

      <main className="main scroll">
        <Outlet />
      </main>
    </div>
  );
}

export function AppShell() {
  return (
    <ServerProvider>
      <AppShellInner />
    </ServerProvider>
  );
}
