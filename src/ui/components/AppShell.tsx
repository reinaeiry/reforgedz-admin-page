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

export function AppShell() {
  const nav = useNavigate();

  function onLogout() {
    clearSession();
    nav('/login', { replace: true });
  }

  return (
    <div className="appShell">
      <aside className="sidebar">
        <div className="stack" style={{ gap: 10 }}>
          <div>
            <div className="label">ReforgedZ</div>
            <div className="h2">Admin Panel</div>
          </div>

          <div style={{ height: 8 }} />

          <div className="label">Tools</div>
          <div className="stack" style={{ gap: 8 }}>
            <NavItem to="/" label="Home" />
            {hasToolAccess('replay') ? <NavItem to="/replay" label="Replay Tool" /> : null}
            {hasToolAccess('admin') ? (
              <>
                <NavItem to="/players" label="Live Players" />
                <NavItem to="/bans" label="Bans" />
                <NavItem to="/mutes" label="Mutes" />
                <NavItem to="/events" label="Event Log" />
                <NavItem to="/health" label="Server Health" />
                <NavItem to="/player" label="Player Lookup" />
              </>
            ) : null}
            {hasToolAccess('admin') ? <NavItem to="/admin" label="Admin Management" /> : null}
            {hasToolAccess('dev') ? <NavItem to="/dev" label="Dev" /> : null}
          </div>
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
