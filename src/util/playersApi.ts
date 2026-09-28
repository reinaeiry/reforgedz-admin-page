// Typed fetch wrappers for our own player system (/api/players/*), which replaced BattleMetrics:
// sessions, notes, flags, population, and the archive of what BattleMetrics held before 2026-09-28.
// Same conventions as bmApi.ts (credentials: 'include', throws on !ok with the server's detail).

function base(): string {
  const fromEnv = (import.meta.env.VITE_API_BASE_URL as string | undefined) || '';
  if (fromEnv) return fromEnv.replace(/\/+$/, '');
  return window.location.origin;
}

async function jsonOk<T>(res: Response, what: string): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    let pretty = text;
    try {
      const j = JSON.parse(text);
      if (typeof j === 'object' && j) pretty = j.detail || j.error || text;
    } catch { /* keep raw text */ }
    throw new Error(pretty || `${what} (${res.status})`);
  }
  return (await res.json()) as T;
}

const enc = encodeURIComponent;
const get = <T,>(path: string, what: string) =>
  fetch(`${base()}${path}`, { credentials: 'include' }).then((r) => jsonOk<T>(r, what));
const send = <T,>(method: string, path: string, body: unknown, what: string) =>
  fetch(`${base()}${path}`, {
    method,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  }).then((r) => jsonOk<T>(r, what));

// ─── Types ──────────────────────────────────────────────────────────────────

export type PlayerSession = {
  serverId: string;          // our server id (e.g. reforgedz-eu1), or the BM server's name for archived rows
  name: string | null;
  joinedMs: number | null;
  leftMs: number | null;
  endReason?: string;
  source: 'ours' | 'battlemetrics';
};

export type PlayerNote = {
  id: number;
  note: string;
  author: string;
  createdMs: number;
  editedMs?: number | null;
  editedBy?: string | null;
};

export type ArchivedNote = { id: string; note: string; author: string | null; createdMs: number | null; shared: boolean };

export type PlayerFlag = { id: number; flag: string; addedBy: string | null; addedMs: number };

export type ArchivedBan = {
  id: string;
  reason: string | null;
  note: string | null;
  bannedMs: number | null;
  expiresMs: number | null;
  admin: string | null;
  server: string | null;
  orgWide: boolean;
};

export type PlayerOverview = {
  identityId: string;
  profile: {
    identityId: string;
    displayName: string;
    alsoKnownAs?: string[];
    firstSeen?: number | null;
    lastSeen?: number | null;
    perServer?: Array<{ serverId: string; serverName: string; kills: number; deaths: number; sessions: number;
      playtimeMs: number; firstSeen: number | null; lastSeen: number | null }>;
    [k: string]: unknown;
  } | null;
  ban: unknown;
  notes: PlayerNote[];
  flags: PlayerFlag[];
  archive: {
    names: Array<{ name: string; lastSeenMs: number | null }>;
    servers: Array<{ server: string | null; firstSeenMs: number | null; lastSeenMs: number | null; timePlayedS: number | null }>;
    bans: ArchivedBan[];
    notes: ArchivedNote[];
    flags: Array<{ flag: string; addedMs: number | null; removedMs: number | null }>;
  } | null;
};

export type AccountBan = {
  uid: string;
  name?: string | null;
  reason?: string | null;
  timestamp?: number | null;
  banned_by?: string | null;
  origin_server?: string | null;
};

// ─── Calls ──────────────────────────────────────────────────────────────────

export const getOverview = (guid: string) => get<PlayerOverview>(`/api/players/${enc(guid)}/overview`, 'Failed to load player');

export const guidForBmId = (bmId: string) =>
  get<{ identityId: string }>(`/api/players/by-bm/${enc(bmId)}`, 'No player with that BattleMetrics id in the archive');

export const getSessions = (guid: string, limit = 200) =>
  get<{ sessions: PlayerSession[] }>(`/api/players/${enc(guid)}/sessions?limit=${limit}`, 'Failed to load sessions');

export const getNotes = (guid: string) =>
  get<{ notes: PlayerNote[]; archived: ArchivedNote[] }>(`/api/players/${enc(guid)}/notes`, 'Failed to load notes');
export const addNote = (guid: string, note: string) =>
  send<{ id: number }>('POST', `/api/players/${enc(guid)}/notes`, { note }, 'Failed to add note');
export const editNote = (id: number, note: string) =>
  send<{ ok: true }>('PATCH', `/api/players/notes/${id}`, { note }, 'Failed to update note');
export const removeNote = (id: number) =>
  send<{ ok: true }>('DELETE', `/api/players/notes/${id}`, undefined, 'Failed to delete note');

export const addFlag = (guid: string, flag: string) =>
  send<{ flags: PlayerFlag[] }>('POST', `/api/players/${enc(guid)}/flags`, { flag }, 'Failed to add flag');
export const removeFlag = (guid: string, flag: string) =>
  send<{ flags: PlayerFlag[] }>('DELETE', `/api/players/${enc(guid)}/flags/${enc(flag)}`, undefined, 'Failed to remove flag');

export const listAccountBans = () =>
  get<{ bans: AccountBan[]; error?: string; archive?: { available: boolean; bans?: number } }>(
    '/api/bm/account-bans', 'Failed to load bans');

export const getPopulation = (server: string, sinceMs: number, untilMs?: number) =>
  get<{ server: string; points: Array<{ tsMs: number; players: number; peak?: number; source: string }> }>(
    `/api/players/population?server=${enc(server)}&since=${sinceMs}${untilMs ? `&until=${untilMs}` : ''}`,
    'Failed to load population');
