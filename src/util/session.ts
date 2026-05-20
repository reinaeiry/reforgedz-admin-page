/**
 * Cookie-based SSO session, backed by auth.reforgedz.net.
 *
 * The `rz_session` cookie is set on `.reforgedz.net` and is HttpOnly. We
 * call `GET /api/auth/me` on the auth service once at boot and cache the
 * result in memory.
 */

export type AdminPerms = {
  replay: boolean;
  gmManagement: boolean;
  moderation: boolean;
};

export type TranscriptPerms = { read: boolean; stats: boolean; restricted: boolean };

export type LogLevelPerms = {
  kill: boolean;
  death: boolean;
  anticheat: boolean;
  shop: boolean;
  chat: boolean;
  base: boolean;
};

export type ModerationPerms = {
  viewServers: boolean;
  viewPlayers: boolean;
  viewIps: boolean;
  viewActivity: boolean;
  viewBans: boolean;
  writeNotes: boolean;
  kick: boolean;
  ban: boolean;
  manage: boolean;
  logs: LogLevelPerms;
};

// Back-compat alias — old name kept so the rest of the codebase moves over
// at its own pace.
export type BattleMetricsPerms = ModerationPerms;

export type Perms = {
  admin: AdminPerms;
  transcripts: TranscriptPerms;
  moderation: ModerationPerms;
  manager: boolean;
};

export type SessionUser = {
  id: number;
  username: string;
  email: string | null;
  isManager: boolean;
  perms: Perms;
};

export type Session = { user: SessionUser };

let cached: Session | null = null;
let loading: Promise<Session | null> | null = null;

export function authServiceOrigin(): string {
  const fromEnv = (import.meta.env.VITE_AUTH_ORIGIN as string | undefined) || '';
  if (fromEnv) return fromEnv.replace(/\/+$/, '');
  return 'https://auth.reforgedz.net';
}

export function loginUrl(returnTo?: string): string {
  const origin = authServiceOrigin();
  const ret = returnTo ?? (typeof window !== 'undefined' ? window.location.href : '');
  const u = new URL('/login', origin);
  if (ret) u.searchParams.set('return', ret);
  return u.toString();
}

async function fetchMe(): Promise<Session | null> {
  const res = await fetch(`${authServiceOrigin()}/api/auth/me`, { credentials: 'include' });
  if (!res.ok) return null;
  const data = (await res.json()) as { user: any };
  if (!data || !data.user) return null;
  const u = data.user;
  // Read moderation, fall back to legacy battlemetrics key during rollout.
  const mod: any = u.perms?.moderation || u.perms?.battlemetrics || {};
  const logs: any = mod.logs || {};
  // If user has viewActivity but no granular log perms, treat all log
  // levels as on (mirrors the server-side forward-migration).
  const anyLogPerm = ['kill','death','anticheat','shop','chat','base'].some((k) => !!logs[k]);
  const defaultLog = !!mod.viewActivity && !anyLogPerm;
  // admin.moderation auto-grants if any moderation perm is set — covers
  // existing users until the next manage.html save.
  const adminMod = !!u.perms?.admin?.moderation
    || ['viewServers','viewPlayers','viewIps','viewActivity','viewBans','writeNotes','kick','ban','manage']
      .some((k) => !!mod[k]);
  return {
    user: {
      ...u,
      perms: {
        admin: {
          replay: !!u.perms?.admin?.replay,
          gmManagement: !!u.perms?.admin?.gmManagement,
          moderation: adminMod,
        },
        transcripts: {
          read: !!u.perms?.transcripts?.read,
          stats: !!u.perms?.transcripts?.stats,
          restricted: !!u.perms?.transcripts?.restricted,
        },
        moderation: {
          viewServers: !!mod.viewServers,
          viewPlayers: !!mod.viewPlayers,
          viewIps: !!mod.viewIps,
          viewActivity: !!mod.viewActivity,
          viewBans: !!mod.viewBans,
          writeNotes: !!mod.writeNotes,
          kick: !!mod.kick,
          ban: !!mod.ban,
          manage: !!mod.manage,
          logs: {
            kill: !!logs.kill || defaultLog,
            death: !!logs.death || defaultLog,
            anticheat: !!logs.anticheat || defaultLog,
            shop: !!logs.shop || defaultLog,
            chat: !!logs.chat || defaultLog,
            base: !!logs.base || defaultLog,
          },
        },
        manager: !!u.perms?.manager,
      },
    },
  };
}

export function getSession(): Session | null {
  return cached;
}

export async function loadSession(): Promise<Session | null> {
  if (cached) return cached;
  if (!loading) loading = fetchMe().then((s) => { cached = s; return s; }).finally(() => { loading = null; });
  return loading;
}

export async function refreshSession(): Promise<Session | null> {
  cached = null;
  return loadSession();
}

export async function clearSession(): Promise<void> {
  try {
    await fetch(`${authServiceOrigin()}/api/auth/logout`, { method: 'POST', credentials: 'include' });
  } catch { /* ignore */ }
  cached = null;
}

export type ToolName = keyof AdminPerms;

export function hasToolAccess(tool: ToolName): boolean {
  const s = cached;
  if (!s) return false;
  return !!s.user.perms.admin[tool];
}

export type ModPermName = Exclude<keyof ModerationPerms, 'logs'>;
export function hasModPerm(p: ModPermName): boolean {
  const s = cached;
  if (!s) return false;
  return !!s.user.perms.moderation[p];
}

export type LogLevel = keyof LogLevelPerms;
export function hasLogPerm(level: LogLevel): boolean {
  const s = cached;
  if (!s) return false;
  return !!s.user.perms.moderation.logs[level];
}
export function allowedLogLevels(): LogLevel[] {
  const s = cached;
  if (!s) return [];
  const out: LogLevel[] = [];
  for (const k of ['kill','death','anticheat','shop','chat','base'] as LogLevel[]) {
    if (s.user.perms.moderation.logs[k]) out.push(k);
  }
  return out;
}

export function hasAnyModPerm(): boolean {
  const s = cached;
  if (!s) return false;
  const m = s.user.perms.moderation;
  if (m.viewServers || m.viewPlayers || m.viewIps || m.viewActivity || m.viewBans || m.writeNotes || m.kick || m.ban || m.manage) return true;
  return Object.values(m.logs).some(Boolean);
}

// Back-compat shim — old code calls hasBmPerm.
export type BmPermName = ModPermName;
export function hasBmPerm(p: BmPermName): boolean { return hasModPerm(p); }
export function hasAnyBmPerm(): boolean { return hasAnyModPerm(); }

export function isManager(): boolean {
  return !!cached?.user.isManager;
}
