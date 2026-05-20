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

export type LogScopeKey = 'NA1' | 'NA2' | 'EU1' | 'EU2' | 'NA' | 'EU' | 'ALL';
export type LogType = 'kill' | 'chat' | 'anticheat' | 'shop' | 'base' | 'death';

// Each scope only carries the types its channel produces. Death events
// piggyback on kill channels (same /kill log feed), so death follows
// the same per-server gate as kill.
export const LOG_SCOPES: Record<LogScopeKey, LogType[]> = {
  NA1: ['kill', 'chat'],
  NA2: ['kill', 'chat'],
  EU1: ['kill', 'chat'],
  EU2: ['kill', 'chat'],
  NA:  ['anticheat', 'shop'],
  EU:  ['anticheat', 'shop'],
  ALL: ['base']
};

export type LogPerms = Partial<Record<LogScopeKey, Partial<Record<LogType, boolean>>>>;

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
  logs: LogPerms;
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
  const logsRaw: any = mod.logs || {};
  // Detect old flat shape (logs.kill, logs.chat...) vs new nested per-scope.
  const flatTypes = ['kill','death','anticheat','shop','chat','base'];
  const looksFlat = flatTypes.some((t) => typeof logsRaw[t] === 'boolean');
  const anyFlat = flatTypes.some((t) => !!logsRaw[t]);
  const defaultLog = !!mod.viewActivity && !anyFlat &&
    !(LOG_SCOPES && Object.keys(LOG_SCOPES).some((s) => logsRaw[s] && Object.values(logsRaw[s]).some(Boolean)));
  const logs: LogPerms = {};
  for (const scope of Object.keys(LOG_SCOPES) as LogScopeKey[]) {
    logs[scope] = {};
    for (const t of LOG_SCOPES[scope]) {
      if (looksFlat) logs[scope]![t] = !!logsRaw[t];
      else logs[scope]![t] = !!(logsRaw[scope] && logsRaw[scope][t]);
      if (defaultLog) logs[scope]![t] = true;
    }
  }
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
          logs,
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

// Legacy alias kept so anything still importing LogLevel keeps compiling.
export type LogLevel = LogType;
export function hasLogPerm(scope: LogScopeKey, type: LogType): boolean {
  const s = cached;
  if (!s) return false;
  return !!(s.user.perms.moderation.logs[scope] && s.user.perms.moderation.logs[scope]![type]);
}
export function allowedLogScopes(): LogScopeKey[] {
  const s = cached;
  if (!s) return [];
  const out: LogScopeKey[] = [];
  for (const scope of Object.keys(LOG_SCOPES) as LogScopeKey[]) {
    const types = LOG_SCOPES[scope];
    if (types.some((t) => hasLogPerm(scope, t))) out.push(scope);
  }
  return out;
}
// All (scope, type) pairs the user can see.
export function allowedScopeTypes(): { scope: LogScopeKey; type: LogType }[] {
  const out: { scope: LogScopeKey; type: LogType }[] = [];
  for (const scope of Object.keys(LOG_SCOPES) as LogScopeKey[]) {
    for (const t of LOG_SCOPES[scope]) {
      if (hasLogPerm(scope, t)) out.push({ scope, type: t });
    }
  }
  return out;
}
// Distinct log types the user can see anywhere — used by the type-chip row.
export function allowedLogLevels(): LogType[] {
  const set = new Set<LogType>();
  for (const { type } of allowedScopeTypes()) set.add(type);
  // 'death' rides on the same channel as 'kill' (it's parsed from the
  // /kill log feed), so it inherits the kill perm.
  if (set.has('kill')) set.add('death');
  return Array.from(set);
}

export function hasAnyModPerm(): boolean {
  const s = cached;
  if (!s) return false;
  const m = s.user.perms.moderation;
  if (m.viewServers || m.viewPlayers || m.viewIps || m.viewActivity || m.viewBans || m.writeNotes || m.kick || m.ban || m.manage) return true;
  return allowedScopeTypes().length > 0;
}

// Back-compat shim — old code calls hasBmPerm.
export type BmPermName = ModPermName;
export function hasBmPerm(p: BmPermName): boolean { return hasModPerm(p); }
export function hasAnyBmPerm(): boolean { return hasAnyModPerm(); }

export function isManager(): boolean {
  return !!cached?.user.isManager;
}
