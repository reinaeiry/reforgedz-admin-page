import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearSession, hasToolAccess } from '../../util/session';

function NavItem(props: { to: string; label: string }) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => `navItem${isActive ? ' navItemActive' : ''}`}
    >
      {props.label}
    </NavLink>
  );
}

function SidebarSection(props: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 4 }}>
      <div className="sidebarSection">{props.label}</div>
      <div className="stack" style={{ gap: 4 }}>
        {props.children}
      </div>
    </div>
  );
}

export function AppShell() {
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
      <aside className="sidebar">
        <div className="stack" style={{ gap: 4 }}>
          <div style={{ padding: '4px 0 12px' }}>
            <div className="label">ReforgedZ</div>
            <div className="h2">Admin Panel</div>
          </div>

          <NavItem to="/" label="Home" />

          {hasToolAccess('replay') ? (
            <SidebarSection label="Replay">
              <NavItem to="/replay" label="Replay Tool" />
            </SidebarSection>
          ) : null}

          {showAdmin ? (
            <SidebarSection label="Admin">
              {showPlayers ? <NavItem to="/players" label="Players" /> : null}
              {showModeration ? <NavItem to="/moderation" label="Moderation" /> : null}
              {showServer ? <NavItem to="/server" label="Server" /> : null}
            </SidebarSection>
          ) : null}

          {(hasToolAccess('admin') || hasToolAccess('dev')) ? (
            <SidebarSection label="Management">
              {hasToolAccess('admin') ? <NavItem to="/admin" label="Admin Management" /> : null}
              {hasToolAccess('dev') ? <NavItem to="/dev" label="Dev" /> : null}
            </SidebarSection>
          ) : null}
        </div>

        <div style={{ flex: 1 }} />

        <button className="button buttonPrimary" onClick={onLogout}>
          Log out
        </button>
      </aside>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
