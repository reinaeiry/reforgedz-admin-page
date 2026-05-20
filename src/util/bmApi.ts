// Typed fetch wrappers for /api/bm/*. Mirrors the existing util/api.ts style
// (credentials: 'include', single jsonOk helper, throws on !ok).

function base(): string {
  const fromEnv = (import.meta.env.VITE_API_BASE_URL as string | undefined) || '';
  if (fromEnv) return fromEnv.replace(/\/+$/, '');
  return window.location.origin;
}

async function jsonOk<T>(res: Response, what: string): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `${what} (${res.status})`);
  }
  return (await res.json()) as T;
}

// ─── Servers ────────────────────────────────────────────────────────────────

export type BmDashServer = {
  pteroId: string;
  bmServerId: string;
  name: string;
  ip?: string;
  port?: number;
  tag?: string | null;
  region?: string | null;
  status?: string;
  players?: number;
  maxPlayers?: number;
  rank?: number | null;
  updatedAt?: string | null;
  error?: boolean;
};

export async function listBmServers(opts?: { refresh?: boolean }): Promise<{ servers: BmDashServer[]; unmatched: string[] }> {
  const qs = opts?.refresh ? '?refresh=1' : '';
  const res = await fetch(`${base()}/api/bm/servers${qs}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load servers');
}

export async function getServerPlayers(bmServerId: string): Promise<{ players: any[] }> {
  const res = await fetch(`${base()}/api/bm/servers/${encodeURIComponent(bmServerId)}/players`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load online players');
}

// ─── Players / search ───────────────────────────────────────────────────────

export type BmSearchResult = {
  source: 'battlemetrics' | 'local';
  bmPlayerId?: string;
  name: string;
  guid: string | null;
  firstSeen?: string | null;
  lastSeen?: string | null;
  identifiers?: Array<{ type: string; identifier: string }>;
};

export async function searchPlayers(q: string, serverIds?: string[]): Promise<{ players: BmSearchResult[] }> {
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (serverIds && serverIds.length) params.set('servers', serverIds.join(','));
  const res = await fetch(`${base()}/api/bm/search?${params}`, { credentials: 'include' });
  return jsonOk(res, 'Search failed');
}

export async function getPlayerByGuid(guid: string): Promise<{ player: any }> {
  const res = await fetch(`${base()}/api/bm/players/by-guid/${encodeURIComponent(guid)}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to resolve GUID');
}

export async function getPlayer(playerId: string): Promise<any> {
  const res = await fetch(`${base()}/api/bm/players/${encodeURIComponent(playerId)}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load player');
}

export async function getPlayerBans(playerId: string): Promise<{ bans: any[] }> {
  const res = await fetch(`${base()}/api/bm/players/${encodeURIComponent(playerId)}/bans`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load player bans');
}

export async function listPlayerNotes(playerId: string): Promise<{ notes: any[] }> {
  const res = await fetch(`${base()}/api/bm/players/${encodeURIComponent(playerId)}/notes`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load notes');
}

export async function createPlayerNote(playerId: string, body: { note: string; shared?: boolean }): Promise<{ note: any }> {
  const res = await fetch(`${base()}/api/bm/players/${encodeURIComponent(playerId)}/notes`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return jsonOk(res, 'Failed to add note');
}

export async function updateNote(noteId: string, body: { note?: string; shared?: boolean }): Promise<{ note: any }> {
  const res = await fetch(`${base()}/api/bm/notes/${encodeURIComponent(noteId)}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return jsonOk(res, 'Failed to update note');
}

export async function deleteNote(noteId: string): Promise<{ ok: true }> {
  const res = await fetch(`${base()}/api/bm/notes/${encodeURIComponent(noteId)}`, { method: 'DELETE', credentials: 'include' });
  return jsonOk(res, 'Failed to delete note');
}

// ─── Bans ──────────────────────────────────────────────────────────────────

export async function listBans(opts?: { serverIds?: string[]; includeExpired?: boolean }): Promise<{ bans: any[] }> {
  const params = new URLSearchParams();
  if (opts?.serverIds && opts.serverIds.length) params.set('servers', opts.serverIds.join(','));
  if (opts?.includeExpired) params.set('includeExpired', '1');
  const res = await fetch(`${base()}/api/bm/bans?${params}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load bans');
}

export type CreateBanBody = {
  playerId?: string;
  identifiers?: string[];
  reason?: string;
  note?: string;
  expires?: string | null;
  orgWide?: boolean;
  serverIds?: string[];
  dualWrite?: boolean;
};

export async function createBan(body: CreateBanBody): Promise<{ ban: any; dualWritten: boolean }> {
  const res = await fetch(`${base()}/api/bm/bans`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return jsonOk(res, 'Failed to create ban');
}

export async function updateBan(id: string, body: Partial<CreateBanBody>): Promise<{ ban: any }> {
  const res = await fetch(`${base()}/api/bm/bans/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return jsonOk(res, 'Failed to update ban');
}

export async function deleteBan(id: string): Promise<{ ok: true }> {
  const res = await fetch(`${base()}/api/bm/bans/${encodeURIComponent(id)}`, { method: 'DELETE', credentials: 'include' });
  return jsonOk(res, 'Failed to delete ban');
}

// ─── Kick ──────────────────────────────────────────────────────────────────

export async function kick(body: { serverId: string; playerId?: string; identifier?: string; reason?: string }): Promise<{ ok: true }> {
  const res = await fetch(`${base()}/api/bm/kick`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return jsonOk(res, 'Kick failed');
}

// ─── Activity / chat ───────────────────────────────────────────────────────

export async function listActivity(opts?: { serverIds?: string[]; limit?: number }): Promise<{ events: any[] }> {
  const params = new URLSearchParams();
  if (opts?.serverIds && opts.serverIds.length) params.set('servers', opts.serverIds.join(','));
  if (opts?.limit) params.set('limit', String(opts.limit));
  const res = await fetch(`${base()}/api/bm/activity?${params}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load activity');
}

// ─── Linkages (Discord + transcripts) ──────────────────────────────────────

export type Linkage = {
  discordId: string;
  discordUsername: string;
  discordAvatarUrl?: string | null;
  guid: string | null;
  lastSeenAt: number;
};
export type TranscriptRef = {
  id: string;
  ticketId: number | null;
  channelName: string | null;
  category: string | null;
  createdBy: string | null;
  createdByName: string | null;
  closedAt: number | null;
  autoClosed: boolean;
  restricted: boolean;
  guid: string | null;
};

export async function linkageByGuid(guid: string): Promise<{ linkage: Linkage | null; transcripts: TranscriptRef[] }> {
  const res = await fetch(`${base()}/api/bm/linkages/by-guid/${encodeURIComponent(guid)}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load linkage');
}

export async function linkageByDiscordId(id: string): Promise<{ linkage: Linkage | null; transcripts: TranscriptRef[] }> {
  const res = await fetch(`${base()}/api/bm/linkages/by-discord-id/${encodeURIComponent(id)}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load linkage');
}

// ─── IpBan controller (in-game log IPs + alt accounts) ────────────────────

export type IpBanRecord = {
  id: number;
  username: string;
  be_guid: string;
  ip: string;
  server_name: string;
  listener_id: string;
  first_seen: number;
  last_seen: number;
};

export type IpBanInfo = {
  ip: string;
  username: string;
  be_guid: string;
  banned_by: string;
  reason: string;
  created_at?: number;
};

export type IpAltsResponse = {
  records: IpBanRecord[];
  ips: string[];
  alts: IpBanRecord[];
  ip_bans: IpBanInfo[];
  error?: string;
};

export async function getIpAlts(guid: string): Promise<IpAltsResponse> {
  const res = await fetch(`${base()}/api/bm/players/by-guid/${encodeURIComponent(guid)}/ip-alts`, { credentials: 'include' });
  if (res.status === 403) return { records: [], ips: [], alts: [], ip_bans: [], error: 'forbidden' };
  if (res.status === 503) return { records: [], ips: [], alts: [], ip_bans: [], error: 'ipban_controller_not_configured' };
  return jsonOk(res, 'Failed to load IP alts');
}

export async function listIpBans(): Promise<{ bans: IpBanInfo[] }> {
  const res = await fetch(`${base()}/api/bm/ipbans`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load IP bans');
}

export async function addIpBan(body: { ip: string; username?: string; be_guid?: string | null; reason?: string }): Promise<any> {
  const res = await fetch(`${base()}/api/bm/ipbans`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return jsonOk(res, 'Failed to add IP ban');
}

export async function removeIpBan(ip: string): Promise<{ ok: true }> {
  const res = await fetch(`${base()}/api/bm/ipbans/${encodeURIComponent(ip)}`, {
    method: 'DELETE',
    credentials: 'include'
  });
  return jsonOk(res, 'Failed to remove IP ban');
}

// ─── Game logs ─────────────────────────────────────────────────────────────

export type GameLogRow = {
  id: number;
  channel_id: string;
  message_id: string;
  ts_ms: number;
  log_type: 'anticheat' | 'shop' | 'kill' | 'death' | 'chat' | 'base';
  server: string | null;
  severity: string | null;
  category: string | null;
  player_name: string | null;
  player_guid: string | null;
  target_name: string | null;
  target_guid: string | null;
  details: Record<string, any> | null;
  raw: string;
};

export type ListLogsOpts = {
  guid?: string;
  name?: string;
  names?: string[];
  types?: string[];
  servers?: string[];
  q?: string;
  sinceMs?: number;
  untilMs?: number;
  limit?: number;
  offset?: number;
};

export type PlayerStats = {
  kills: number;
  deaths: number;
  kdr: number;
  avgAliveSec: number | null;
  samples: number;
  firstSeenMs: number | null;
  lastSeenMs: number | null;
};

export async function getPlayerStats(guid: string): Promise<PlayerStats> {
  const res = await fetch(`${base()}/api/bm/logs/stats/${encodeURIComponent(guid)}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load stats');
}

export async function listGameLogs(opts: ListLogsOpts = {}): Promise<{ logs: GameLogRow[] }> {
  const params = new URLSearchParams();
  if (opts.guid) params.set('guid', opts.guid);
  if (opts.name) params.set('name', opts.name);
  if (opts.names && opts.names.length) params.set('names', opts.names.join(','));
  if (opts.types && opts.types.length) params.set('types', opts.types.join(','));
  if (opts.servers && opts.servers.length) params.set('servers', opts.servers.join(','));
  if (opts.q) params.set('q', opts.q);
  if (opts.sinceMs) params.set('sinceMs', String(opts.sinceMs));
  if (opts.untilMs) params.set('untilMs', String(opts.untilMs));
  if (opts.limit) params.set('limit', String(opts.limit));
  if (opts.offset) params.set('offset', String(opts.offset));
  const res = await fetch(`${base()}/api/bm/logs?${params}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load logs');
}

// ─── SSE URL helper ────────────────────────────────────────────────────────

export function eventStreamUrl(): string {
  return `${base()}/api/bm/events`;
}
