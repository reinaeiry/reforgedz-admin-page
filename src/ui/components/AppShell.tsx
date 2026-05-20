import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { clearSession, hasToolAccess, loginUrl } from '../../util/session';

type NavItem = { to: string; label: string; visible: () => boolean };

const NAV_ITEMS: NavItem[] = [
  { to: '/replay', label: 'Replay', visible: () => hasToolAccess('replay') },
  { to: '/admins', label: 'GM Management', visible: () => hasToolAccess('gmManagement') },
  { to: '/moderation', label: 'Moderation', visible: () => hasToolAccess('moderation') },
];

function pageName(pathname: string): string {
  const item = NAV_ITEMS.find((n) => pathname === n.to || pathname.startsWith(n.to + '/'));
  return item?.label ?? 'ReforgedZ';
}

function RailNav() {
  const accessible = NAV_ITEMS.filter((n) => n.visible());
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
