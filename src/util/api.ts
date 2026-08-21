export function requireApiBaseUrl(): string {
  const base = import.meta.env.VITE_API_BASE_URL as string | undefined;
  if (base && base.length > 0) return base.replace(/\/$/, '');
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

export type ServerInfo = { id: string; name: string };

export async function listServers(): Promise<ServerInfo[]> {
  const res = await fetch(`${requireApiBaseUrl()}/api/servers`, { credentials: 'include' });
  return jsonOk<ServerInfo[]>(res, 'Failed to list servers');
}

// ─── Anti-cheat incidents (server/lib/anticheat.js) ────────────────────────

export type IncidentSeverity = 'low' | 'medium' | 'high';

export type Incident = {
  category: string;
  severity: IncidentSeverity;
  label: string;
  confidence: number;
  serverId: string;
  identityId: string;
  tsMs: number;
  summary: string;
  evidence: Record<string, unknown>;
};

export async function getServerIncidents(opts: {
  serverId: string;
  identityId?: string;
  category?: string;
  minConfidence?: number;
  limit?: number;
}): Promise<{ serverId: string; incidents: Incident[]; total: number; stale: boolean; computedAt: number }> {
  const params = new URLSearchParams({ serverId: opts.serverId });
  if (opts.identityId) params.set('identityId', opts.identityId);
  if (opts.category) params.set('category', opts.category);
  if (opts.minConfidence) params.set('minConfidence', String(opts.minConfidence));
  if (opts.limit) params.set('limit', String(opts.limit));
  const res = await fetch(`${requireApiBaseUrl()}/api/players/incidents?${params.toString()}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load incidents');
}

export type PlayerRisk = {
  identityId: string;
  riskScore: number;
  incidentCount: number;
  categories: Record<string, number>;
  highestSeverity: IncidentSeverity;
  firstIncidentTsMs: number;
  lastIncidentTsMs: number;
};

export async function getServerRiskSummary(opts: {
  serverId: string;
  limit?: number;
}): Promise<{ serverId: string; players: PlayerRisk[]; total: number; stale: boolean; computedAt: number }> {
  const params = new URLSearchParams({ serverId: opts.serverId });
  if (opts.limit) params.set('limit', String(opts.limit));
  const res = await fetch(`${requireApiBaseUrl()}/api/players/risk-summary?${params.toString()}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load risk summary');
}

export type PlayerSearchResult = {
  identityId: string;
  displayName: string;
  alsoKnownAs: string[];
  lastSeen: number | null;
  servers: ServerInfo[];
};

export async function searchPlayers(query: string, limit = 25): Promise<{ results: PlayerSearchResult[] }> {
  const params = new URLSearchParams({ q: query, limit: String(limit) });
  const res = await fetch(`${requireApiBaseUrl()}/api/players/search?${params.toString()}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to search players');
}

export type PlayerServerStats = {
  serverId: string;
  serverName: string;
  kills: number;
  deaths: number;
  hits: number;
  shots: number;
  sessions: number;
  playtimeMs: number;
  firstSeen: number | null;
  lastSeen: number | null;
};

export type PlayerProfile = {
  identityId: string;
  displayName: string;
  alsoKnownAs: string[];
  firstSeen: number | null;
  lastSeen: number | null;
  servers: ServerInfo[];
  totals: { kills: number; deaths: number; hits: number; shots: number; sessions: number; playtimeMs: number };
  perServer: PlayerServerStats[];
};

export async function getPlayerProfile(identityId: string): Promise<PlayerProfile | null> {
  const res = await fetch(`${requireApiBaseUrl()}/api/players/${encodeURIComponent(identityId)}/profile`, { credentials: 'include' });
  if (res.status === 404) return null;
  return jsonOk(res, 'Failed to load player profile');
}

export type PlayerActivityItem = {
  tsMs: number;
  type: string;
  serverId: string;
  serverName: string;
  detail: Record<string, unknown>;
};

export async function getPlayerActivity(identityId: string, opts: {
  serverId?: string;
  types?: string[];
  beforeTsMs?: number;
  limit?: number;
} = {}): Promise<{ items: PlayerActivityItem[]; nextBeforeTsMs: number | null }> {
  const params = new URLSearchParams();
  if (opts.serverId) params.set('serverId', opts.serverId);
  if (opts.types?.length) params.set('types', opts.types.join(','));
  if (opts.beforeTsMs) params.set('beforeTsMs', String(opts.beforeTsMs));
  if (opts.limit) params.set('limit', String(opts.limit));
  const qs = params.toString();
  const res = await fetch(
    `${requireApiBaseUrl()}/api/players/${encodeURIComponent(identityId)}/activity${qs ? `?${qs}` : ''}`,
    { credentials: 'include' }
  );
  return jsonOk(res, 'Failed to load player activity');
}

// ─── Replay ─────────────────────────────────────────────────────────────────

export type ReplayStatus = {
  serverId: string;
  lastIngestTsMs: number | null;
  name: string;
  minTsMs: number | null;
  maxTsMs: number | null;
  firstReceivedAt: number | null;
  lastReceivedAt: number | null;
  storedEvents: number | null;
  totalEvents: number | null;
  retentionMs: number;
  mapId: string | null;
};

export async function getReplayStatusAll(): Promise<ReplayStatus[]> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/statusAll`, { credentials: 'include' });
  return jsonOk<ReplayStatus[]>(res, 'Failed to get replay status');
}

export type ReplayRange = {
  serverId: string;
  minTsMs: number | null;
  maxTsMs: number | null;
};

export async function getReplayRange(serverId: string): Promise<ReplayRange> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/range?serverId=${encodeURIComponent(serverId)}`, { credentials: 'include' });
  return jsonOk<ReplayRange>(res, 'Failed to get replay range');
}

export type ReplayPlayer = { playerId: number; name: string; identityId?: string };

export async function listReplayPlayers(serverId: string): Promise<ReplayPlayer[]> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/players?serverId=${encodeURIComponent(serverId)}`, { credentials: 'include' });
  return jsonOk<ReplayPlayer[]>(res, 'Failed to list replay players');
}

export type IngestRecord = {
  receivedAt: number;
  remoteAddr?: string;
  payload: unknown;
};

export async function getReplayEvents(params: {
  serverId: string;
  sinceTsMs?: number;
  untilTsMs?: number;
  limit?: number;
  tail?: boolean;
  types?: string;
  sampleIntervalMs?: number;
  slim?: boolean;
}): Promise<IngestRecord[]> {
  const qs = new URLSearchParams();
  qs.set('serverId', params.serverId);
  if (typeof params.sinceTsMs === 'number') qs.set('sinceTsMs', String(params.sinceTsMs));
  if (typeof params.untilTsMs === 'number') qs.set('untilTsMs', String(params.untilTsMs));
  if (typeof params.limit === 'number') qs.set('limit', String(params.limit));
  if (params.tail) qs.set('tail', '1');
  if (params.types) qs.set('types', params.types);
  if (typeof params.sampleIntervalMs === 'number' && params.sampleIntervalMs > 0) qs.set('sampleIntervalMs', String(params.sampleIntervalMs));
  if (params.slim) qs.set('slim', '1');
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/events?${qs.toString()}`, { credentials: 'include' });
  return jsonOk<IngestRecord[]>(res, 'Failed to get replay events');
}

export interface VehicleIndexEntry {
  entityId: string;
  name: string;
  prefab: string;
  pos: { x: number; y: number; z: number } | number[];
  destroyed: boolean;
  occupied: boolean;
  lastOccupiedBy?: string;
}

export interface VehicleIndex {
  vehicles: VehicleIndexEntry[];
  tsMs: number;
  updatedAt: number;
}

export async function getReplayVehicles(serverId: string): Promise<VehicleIndex> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/vehicles?serverId=${encodeURIComponent(serverId)}`, { credentials: 'include' });
  return jsonOk<VehicleIndex>(res, 'Failed to get replay vehicles');
}

export async function requestVehicleDetail(serverId: string, entityId: string): Promise<{ ok: boolean; requestId: string }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/vehicleDetail`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ serverId, entityId }),
  });
  return jsonOk<{ ok: boolean; requestId: string }>(res, 'Failed to request vehicle detail');
}

export interface VehicleDetail {
  entityId: string;
  requestId: string;
  inventory: Array<{ name: string; prefab: string }>;
  updatedAt: number;
}

export async function pollVehicleDetail(serverId: string, requestId: string): Promise<VehicleDetail | null> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/vehicleDetail?serverId=${encodeURIComponent(serverId)}&requestId=${encodeURIComponent(requestId)}`, {
    credentials: 'include',
  });
  if (res.status === 404) return null;
  const data = await jsonOk<VehicleDetail & { pending?: boolean }>(res, 'Failed to poll vehicle detail');
  // Server returns { pending: true } (HTTP 200) until the game server responds.
  if (!data || (data as { pending?: boolean }).pending || !Array.isArray(data.inventory)) return null;
  return data;
}

export async function sendReplayGmPing(params: {
  serverId: string;
  tsMs: number;
  pos: { x: number; y: number; z: number };
  title?: string;
  reporterPlayerId?: number | null;
}): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/gmPing`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  return jsonOk<{ ok: true }>(res, 'Failed to send GM ping');
}

export type MapTerrain = {
  mapId: string;
  resolution: number;
  worldSize: number;
  data: number[][];
  origin: { x: number; y: number; z: number };
};

export async function getReplayMapTerrain(serverId: string): Promise<MapTerrain> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/mapTerrain?serverId=${encodeURIComponent(serverId)}`, { credentials: 'include' });
  return jsonOk<MapTerrain>(res, 'Failed to get map terrain');
}

export type MapDescriptors = {
  mapId: string;
  towns: Array<{ name: string; pos: { x: number; y: number; z: number }; type?: string; size?: number }>;
};

export async function getReplayMapDescriptors(serverId: string): Promise<MapDescriptors> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/mapDescriptors?serverId=${encodeURIComponent(serverId)}`, { credentials: 'include' });
  return jsonOk<MapDescriptors>(res, 'Failed to get map descriptors');
}

export async function exportReplayEventToDiscord(params: {
  serverId: string;
  tsMs: number;
  title: string;
  pos: { x: number; y: number; z: number };
  focusPlayerId?: number | null;
  playerIds?: number[] | null;
}): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/exportDiscord`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  return jsonOk<{ ok: true }>(res, 'Failed to export to Discord');
}

// ─── GM Management (Admin Manager) ──────────────────────────────────────────

export type ReforgerServer = {
  pteroId: string;
  volumeUuid: string;
  name: string;
  tag: string;
  node: string;
  region: 'EU' | 'NA' | 'unknown';
  ip: string | null;
  configPath: string;
  sshConfigured: boolean;
};

export type AdminEntry = {
  guid: string;
  displayName: string;
  source: 'pii' | 'snapshot' | 'battlemetrics' | 'manual' | 'unknown';
  presence: Record<string, boolean>;
};

// Slot usage per server. GMs and priority-queue holders share one game.admins
// allowance, so this is measured off the real config array.
export type ServerCapacity = {
  tag: string;
  total: number;
  gms: number;
  pq: number;
  limit: number;
  remaining: number;
};

export type AdminManagerSnapshot = {
  servers: ReforgerServer[];
  admins: AdminEntry[];
  errors: { pteroId: string; tag: string; error: string }[];
  // null for a server whose config could not be read.
  capacity?: Record<string, ServerCapacity | null>;
  lastBackfillAt: number | null;
  lastSyncAt: number | null;
  dryRun: boolean;
  bmAvailable?: boolean;
  builtAt?: number;
  version?: number;
  fromCache?: boolean;
};

export async function getAdminManagerSnapshot(opts?: { force?: boolean; sinceVersion?: number }): Promise<AdminManagerSnapshot | null> {
  const qs = new URLSearchParams();
  if (opts?.force) qs.set('force', '1');
  if (opts?.sinceVersion) qs.set('since', String(opts.sinceVersion));
  const url = `${requireApiBaseUrl()}/api/adminmgr/admins${qs.toString() ? '?' + qs.toString() : ''}`;
  const res = await fetch(url, { credentials: 'include' });
  if (res.status === 304) return null;
  return jsonOk<AdminManagerSnapshot>(res, 'Failed to load admins');
}

export async function addAdminToCache(guid: string, displayName?: string): Promise<void> {
  const res = await fetch(`${requireApiBaseUrl()}/api/adminmgr/admin`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guid, displayName: displayName || '' }),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to add admin (${res.status})`);
}

export async function renameAdmin(guid: string, displayName: string): Promise<void> {
  const res = await fetch(`${requireApiBaseUrl()}/api/adminmgr/admin/${encodeURIComponent(guid)}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ displayName }),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to rename admin (${res.status})`);
}

export type AdminDeleteResult = {
  ok: true;
  results: { pteroId: string; tag: string; removed: boolean; error: string | null }[];
  dryRun: boolean;
};

export async function deleteAdmin(guid: string): Promise<AdminDeleteResult> {
  const res = await fetch(`${requireApiBaseUrl()}/api/adminmgr/admin/${encodeURIComponent(guid)}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return jsonOk<AdminDeleteResult>(res, 'Failed to delete admin');
}

export type AdminToggleResult = {
  ok: true;
  changed: boolean;
  present: boolean;
  count: number;
  dryRun: boolean;
};

export async function toggleAdminOnServer(guid: string, pteroId: string, present: boolean): Promise<AdminToggleResult> {
  const res = await fetch(`${requireApiBaseUrl()}/api/adminmgr/toggle`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guid, pteroId, present }),
  });
  return jsonOk<AdminToggleResult>(res, 'Failed to toggle admin');
}

// ─── Priority Queue (shop-backed) ───────────────────────────────────────────

export type PriorityQueueServer = { id: string; label: string };

export type PriorityQueueSource = 'purchase' | 'manual' | 'both' | null;

export type PriorityQueueEntry = {
  guid: string;
  displayName: string;
  presence: Record<string, boolean>;
  sources: Record<string, PriorityQueueSource>;
  // Per-server expiry (unix seconds; null = permanent / not present). Optional so
  // older cached snapshots still parse.
  expiry?: Record<string, number | null>;
  // Soonest dated expiry across servers held (null = all permanent / lifetime).
  expiresAt?: number | null;
  // When they last bought priority queue (unix seconds; null = manual grant only).
  purchasedAt?: number | null;
  // When their most recent manual grant was made (unix seconds).
  grantedAt?: number | null;
  // False when no server is selected — they hold nothing right now, and expiresAt
  // then describes the underlying entitlement rather than live access.
  assigned?: boolean;
  // Whether any grant or order backs this holder at all.
  hasEntitlement?: boolean;
};

export type PriorityQueueSnapshot = {
  servers: PriorityQueueServer[];
  entries: PriorityQueueEntry[];
};

export async function getPriorityQueue(): Promise<PriorityQueueSnapshot> {
  const res = await fetch(`${requireApiBaseUrl()}/api/priority-queue`, { credentials: 'include' });
  return jsonOk<PriorityQueueSnapshot>(res, 'Failed to load priority queue');
}

export async function addManualPriorityQueue(
  guid: string,
  opts?: { displayName?: string; serverId?: string },
): Promise<{ ok: true; entry: PriorityQueueEntry }> {
  const body: Record<string, unknown> = { guid };
  if (opts?.displayName) body.displayName = opts.displayName;
  if (opts?.serverId) body.serverId = opts.serverId;
  const res = await fetch(`${requireApiBaseUrl()}/api/priority-queue`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return jsonOk<{ ok: true; entry: PriorityQueueEntry }>(res, 'Failed to add to priority queue');
}

export async function togglePriorityQueueServer(
  guid: string,
  serverId: string,
  present: boolean,
  displayName?: string,
): Promise<{ ok: true; entry: PriorityQueueEntry }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/priority-queue/toggle`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guid, serverId, present, displayName }),
  });
  return jsonOk<{ ok: true; entry: PriorityQueueEntry }>(res, 'Failed to toggle priority queue');
}

// Move a holder from one server to another in a single atomic call. The shop
// grants `to` (seeded with the holder's real entitlement expiry) and denies
// `from` in one transaction, so a mid-move failure can never strip them of the
// old server without the new one. `from` may be null for a holder with no live
// presence. Subscription renewals keep the moved grant alive on the shop side.
export async function switchPriorityQueueServer(
  guid: string,
  to: string,
  from?: string | null,
  displayName?: string,
): Promise<{ ok: true; from: string | null; to: string; entry: PriorityQueueEntry }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/priority-queue/switch`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guid, to, from: from || undefined, displayName }),
  });
  return jsonOk<{ ok: true; from: string | null; to: string; entry: PriorityQueueEntry }>(
    res,
    'Failed to switch server',
  );
}

export async function extendPriorityQueue(
  guid: string,
  days: number,
): Promise<{ ok: true; days: number; purchaseChanges: number; manualChanges: number; entry: PriorityQueueEntry | null }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/priority-queue/extend`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guid, days }),
  });
  return jsonOk<{ ok: true; days: number; purchaseChanges: number; manualChanges: number; entry: PriorityQueueEntry | null }>(
    res,
    'Failed to extend priority queue',
  );
}

// Set a holder's priority-queue expiry to an absolute date (unix seconds) — from the calendar picker.
export async function setPriorityQueueExpiry(
  guid: string,
  until: number,
): Promise<{ ok: true; until: number; purchaseChanges: number; manualChanges: number; entry: PriorityQueueEntry | null }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/priority-queue/extend`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guid, until }),
  });
  return jsonOk<{ ok: true; until: number; purchaseChanges: number; manualChanges: number; entry: PriorityQueueEntry | null }>(
    res,
    'Failed to set priority queue expiry',
  );
}

export async function deletePriorityQueue(guid: string): Promise<{ ok: true; removed: number }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/priority-queue/${encodeURIComponent(guid)}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return jsonOk<{ ok: true; removed: number }>(res, 'Failed to delete priority queue entry');
}

// ─── Developer settings (Discord webhook + server ingest keys) ───────────────

export type DevServerInfo = { id: string; name?: string; keyHint?: string };

export async function listDevServers(): Promise<DevServerInfo[]> {
  const res = await fetch(`${requireApiBaseUrl()}/api/dev/servers`, { credentials: 'include' });
  return jsonOk<DevServerInfo[]>(res, 'Failed to list servers');
}

export async function addDevServer(payload: { serverId: string; serverKey: string; name?: string }): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/dev/servers`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return jsonOk<{ ok: true }>(res, 'Failed to add server');
}

export async function clearServerHistory(serverId: string): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/dev/servers/clear?serverId=${encodeURIComponent(serverId)}`, {
    method: 'POST',
    credentials: 'include',
  });
  return jsonOk<{ ok: true }>(res, 'Failed to clear history');
}

export async function regenerateTerrainData(serverId: string): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(serverId)}`, {
    method: 'POST',
    credentials: 'include',
  });
  return jsonOk<{ ok: true }>(res, 'Failed to regenerate terrain');
}

export type DevDiscordWebhookStatus = { isSet: boolean; masked: string };

export async function getDevDiscordWebhook(): Promise<DevDiscordWebhookStatus> {
  const res = await fetch(`${requireApiBaseUrl()}/api/dev/discordWebhook`, { credentials: 'include' });
  return jsonOk<DevDiscordWebhookStatus>(res, 'Failed to load webhook');
}

export async function setDevDiscordWebhook(webhookUrl: string): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/dev/discordWebhook`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ webhookUrl }),
  });
  return jsonOk<{ ok: true }>(res, 'Failed to save webhook');
}

export async function deleteDevServer(serverId: string): Promise<{ ok: true; envKeyRemains?: boolean }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/dev/servers/delete?serverId=${encodeURIComponent(serverId)}`, {
    method: 'POST',
    credentials: 'include',
  });
  return jsonOk<{ ok: true; envKeyRemains?: boolean }>(res, 'Failed to delete server');
}

// ─── Item spawning (live replay only) ────────────────────────────────────────

export type ItemCatalogEntry = { prefab: string; name: string };

export async function getItemCatalog(): Promise<ItemCatalogEntry[]> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/itemCatalog`, { credentials: 'include' });
  const data = await jsonOk<{ items: ItemCatalogEntry[] }>(res, 'Failed to load item catalog');
  return Array.isArray(data.items) ? data.items : [];
}

export type SpawnCatalogEntry = { prefab: string; name: string; kind: string };

export async function getSpawnCatalog(): Promise<SpawnCatalogEntry[]> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/spawnCatalog`, { credentials: 'include' });
  const data = await jsonOk<{ items: SpawnCatalogEntry[] }>(res, 'Failed to load spawn catalog');
  return Array.isArray(data.items) ? data.items : [];
}

export async function spawnReplayItem(params: {
  serverId: string;
  target: 'player' | 'vehicle';
  key: string;
  prefab: string;
  count?: number;
}): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/spawnItem`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  return jsonOk<{ ok: true }>(res, 'Failed to spawn item');
}

export async function teleportReplayPlayer(params: {
  serverId: string;
  playerId: number;
  pos: { x: number; z: number; y?: number };
}): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/teleport`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  return jsonOk<{ ok: true }>(res, 'Failed to teleport player');
}

export type ReplayGmCommandType = 'playerAction' | 'vehicleAction' | 'spawnEntity' | 'stripInventory' | 'setTime' | 'removeItem' | 'message';

export async function sendReplayCommand(
  serverId: string,
  type: ReplayGmCommandType,
  data: Record<string, unknown>,
): Promise<{ ok: true }> {
  const res = await fetch(`${requireApiBaseUrl()}/api/replay/command`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ serverId, type, data }),
  });
  return jsonOk<{ ok: true }>(res, 'Failed to send command');
}
