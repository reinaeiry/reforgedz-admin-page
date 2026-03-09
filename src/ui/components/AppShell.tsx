import React from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { clearSession, hasToolAccess, type ToolName } from '../../util/session';
import { ServerProvider, useServer } from '../ServerContext';

const NAV_ITEMS: { to: string; label: string; icon: string; tool?: ToolName | ToolName[] }[] = [
  { to: '/', label: 'Dashboard', icon: '\u25A0' },
  { to: '/replay', label: 'Replay', icon: '\u25B6', tool: 'replay' },
  { to: '/players', label: 'Players', icon: '\u25CF', tool: ['players', 'playerLookup'] },
  { to: '/moderation', label: 'Moderation', icon: '\u26A0', tool: ['bans', 'mutes'] },
  { to: '/server', label: 'Server', icon: '\u2699', tool: ['events', 'health'] },
  { to: '/pii', label: 'PII', icon: '\uD83D\uDD12', tool: 'pii' },
  { to: '/admin', label: 'Users', icon: '\u2606', tool: 'admin' },
  { to: '/dev', label: 'Dev', icon: '\u270E', tool: 'dev' },
];

function canAccess(tool?: ToolName | ToolName[]): boolean {
  if (!tool) return true;
  if (Array.isArray(tool)) return tool.some((t) => hasToolAccess(t));
  return hasToolAccess(tool);
}

function pageName(pathname: string): string {
  const item = NAV_ITEMS.find((n) => n.to === pathname);
  return item?.label ?? 'ReforgedZ';
}

// Split nav items into sections for dividers
function RailNav() {
  const accessible = NAV_ITEMS.filter((n) => canAccess(n.tool));
  const home = accessible.filter((n) => n.to === '/');
  const tools = accessible.filter((n) => ['/replay'].includes(n.to));
  const admin = accessible.filter((n) => ['/players', '/moderation', '/server'].includes(n.to));
  const mgmt = accessible.filter((n) => ['/pii', '/admin', '/dev'].includes(n.to));

  const sections = [home, tools, admin, mgmt].filter((s) => s.length > 0);

  return (
    <>
      {sections.map((section, si) => (
        <React.Fragment key={si}>
          {si > 0 && <div className="railDivider" />}
          {section.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) => `railItem${isActive ? ' railItemActive' : ''}`}
              data-tooltip={n.label}
            >
              {n.icon}
            </NavLink>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

function ServerSelector() {
  const { servers, serverId, setServerId } = useServer();
  return (
    <div className="topBarServer">
      <select value={serverId} onChange={(e) => setServerId(e.target.value)}>
        <option value="">Select server...</option>
        {servers.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
    </div>
  );
}

function AppShellInner() {
  const nav = useNavigate();
  const location = useLocation();

  function onLogout() {
    clearSession();
    nav('/login', { replace: true });
  }

  return (
    <div className="appShell">
      {/* Icon rail */}
      <nav className="rail scroll">
        <div className="railLogo">RZ</div>
        <RailNav />
        <div className="railSpacer" />
      </nav>

      {/* Top bar */}
      <header className="topBar">
        <div className="topBarLeft">
          <span className="topBarTitle">{pageName(location.pathname)}</span>
          <ServerSelector />
        </div>
        <div className="topBarRight">
          <button className="logoutBtn" onClick={onLogout}>Sign out</button>
        </div>
      </header>

      {/* Page content */}
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
