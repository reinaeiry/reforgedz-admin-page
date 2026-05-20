import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { clearSession, hasToolAccess, loginUrl } from '../../util/session';

type NavItem = { to: string; label: string; visible: () => boolean; group: 'moderation' | 'management' };

const NAV_ITEMS: NavItem[] = [
  { to: '/replay', label: 'Replay', visible: () => hasToolAccess('replay'), group: 'moderation' },
  { to: '/moderation', label: 'Moderation', visible: () => hasToolAccess('moderation'), group: 'moderation' },
  { to: '/admins', label: 'GM Management', visible: () => hasToolAccess('gmManagement'), group: 'management' },
  { to: '/tickets', label: 'Tickets', visible: () => hasToolAccess('tickets'), group: 'management' }
];

const GROUP_ORDER: NavItem['group'][] = ['moderation', 'management'];
const GROUP_LABELS: Record<NavItem['group'], string> = {
  moderation: 'Moderation',
  management: 'Management'
};

function pageName(pathname: string): string {
  const item = NAV_ITEMS.find((n) => pathname === n.to || pathname.startsWith(n.to + '/'));
  return item?.label ?? 'ReforgedZ';
}

function RailNav() {
  return (
    <>
      {GROUP_ORDER.map((group) => {
        const items = NAV_ITEMS.filter((n) => n.group === group && n.visible());
        if (!items.length) return null;
        return (
          <React.Fragment key={group}>
            <div className="railSectionLabel">{GROUP_LABELS[group]}</div>
            {items.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `railItem${isActive ? ' railItemActive' : ''}`}
                data-tooltip={n.label}
              >
                {n.label}
              </NavLink>
            ))}
          </React.Fragment>
        );
      })}
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
