export type Session = {
  token: string;
};

export type SessionClaims = {
  sub: string;
  exp?: number;
  tools?: {
    replay?: boolean;
    admin?: boolean;
    dev?: boolean;
    players?: boolean;
    bans?: boolean;
    mutes?: boolean;
    events?: boolean;
    health?: boolean;
    playerLookup?: boolean;
    pii?: boolean;
  };
};

const STORAGE_KEY = 'reforgedz.session';

export function getSession(): Session | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Session;
    if (!parsed || typeof parsed.token !== 'string' || parsed.token.length === 0) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function setSession(session: Session): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  localStorage.removeItem(STORAGE_KEY);
}

function base64UrlDecodeToString(s: string): string {
  const padded = s.replace(/-/g, '+').replace(/_/g, '/');
  const padLen = (4 - (padded.length % 4)) % 4;
  const withPad = padded + '='.repeat(padLen);
  return atob(withPad);
}

export function getSessionClaims(): SessionClaims | null {
  const session = getSession();
  if (!session) return null;

  const parts = String(session.token).split('.');
  if (parts.length !== 2) return null;

  try {
    const json = base64UrlDecodeToString(parts[0]);
    const parsed = JSON.parse(json) as SessionClaims;
    if (!parsed || typeof parsed.sub !== 'string') return null;
    return parsed;
  } catch {
    return null;
  }
}

export type ToolName = 'replay' | 'admin' | 'dev' | 'players' | 'bans' | 'mutes' | 'events' | 'health' | 'playerLookup' | 'pii';

export function hasToolAccess(tool: ToolName): boolean {
  const c = getSessionClaims();
  if (!c) return false;
  const tools = c.tools;
  if (!tools || typeof tools !== 'object') return tool === 'replay';
  return !!(tools as Record<string, unknown>)[tool];
}
