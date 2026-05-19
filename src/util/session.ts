/**
 * Cookie-based SSO session, backed by auth.reforgedz.net.
 *
 * The `rz_session` cookie is set on `.reforgedz.net` and is HttpOnly, so JS
 * can't read it directly. Instead we call `GET /api/auth/me` on the auth
 * service once at boot and cache the result in memory.
 */

export type AdminPerms = {
  replay: boolean;
  admin: boolean;
  dev: boolean;
  players: boolean;
  bans: boolean;
  mutes: boolean;
  events: boolean;
  health: boolean;
  playerLookup: boolean;
  pii: boolean;
  gmManagement: boolean;
};

export type TranscriptPerms = { read: boolean; delete: boolean; appeals: boolean };
export type RestrictedPerms = { access: boolean };

export type Perms = {
  admin: AdminPerms;
  transcripts: TranscriptPerms;
  restricted: RestrictedPerms;
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
  const data = (await res.json()) as { user: SessionUser };
  if (!data || !data.user) return null;
  return { user: data.user };
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

export function hasTranscriptPerm(perm: keyof TranscriptPerms): boolean {
  const s = cached;
  if (!s) return false;
  return !!s.user.perms.transcripts[perm];
}

export function hasRestrictedAccess(): boolean {
  return !!cached?.user.perms.restricted.access;
}

export function isManager(): boolean {
  return !!cached?.user.isManager;
}
