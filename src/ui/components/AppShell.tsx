import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { clearSession, hasToolAccess, loginUrl, type ToolName } from '../../util/session';

const NAV_ITEMS: { to: string; label: string; tool?: ToolName }[] = [
  { to: '/replay', label: 'Replay', tool: 'replay' },
  { to: '/admins', label: 'GM Management', tool: 'gmManagement' },
];

function pageName(pathname: string): string {
  const item = NAV_ITEMS.find((n) => n.to === pathname);
  return item?.label ?? 'ReforgedZ';
}

function RailNav() {
  const accessible = NAV_ITEMS.filter((n) => !n.tool || hasToolAccess(n.tool));
  return (
    <>
      {accessible.map((n) => (
        <NavLink
          key={n.to}
          to={n.to}
          className={({ isActive }) => `railItem${isActive ? ' railItemActive' : ''}`}
          data-tooltip={n.label}
        >
          {n.label}
        </NavLink>
      ))}
    </>
  );
}

export function AppShell() {
  const location = useLocation();

  async function onLogout() {
    await clearSession();
    window.location.href = loginUrl(window.location.origin + '/');
  }

  return (
    <div className="appShell">
      <nav className="rail scroll">
        <div className="railLogo">RZ</div>
        <RailNav />
        <div className="railSpacer" />
      </nav>

      <header className="topBar">
        <div className="topBarLeft">
          <span className="topBarTitle">{pageName(location.pathname)}</span>
        </div>
        <div className="topBarRight">
          <button className="logoutBtn" onClick={onLogout}>Sign out</button>
        </div>
      </header>

      <main className="main scroll">
        <Outlet />
      </main>
    </div>
  );
}
