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
};

export type TranscriptPerms = { read: boolean; stats: boolean; restricted: boolean };

export type Perms = {
  admin: AdminPerms;
  transcripts: TranscriptPerms;
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
  // Defensively normalize perms in case the auth service returns extra keys.
  const u = data.user;
  return {
    user: {
      ...u,
      perms: {
        admin: {
          replay: !!u.perms?.admin?.replay,
          gmManagement: !!u.perms?.admin?.gmManagement,
        },
        transcripts: {
          read: !!u.perms?.transcripts?.read,
          stats: !!u.perms?.transcripts?.stats,
          restricted: !!u.perms?.transcripts?.restricted,
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

export function isManager(): boolean {
  return !!cached?.user.isManager;
}
