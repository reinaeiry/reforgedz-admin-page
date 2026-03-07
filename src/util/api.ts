import { getSession } from './session';

function requireApiBaseUrl(): string {
  const base = import.meta.env.VITE_API_BASE_URL as string | undefined;
  if (base && base.length > 0) {
    return base.replace(/\/$/, '');
  }

  // If the client is hosted at https://admin.reforgedz.net, this automatically targets that.
  return window.location.origin;
}

export type ServerInfo = {
  id: string;
  name: string;
};

export async function login(username: string, password: string): Promise<{ token: string }> {
  const base = requireApiBaseUrl();

  const res = await fetch(`${base}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Login failed (${res.status})`);
  }

  return (await res.json()) as { token: string };
}

export async function listServers(): Promise<ServerInfo[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const res = await fetch(`${base}/api/servers`, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to list servers (${res.status})`);
  }

  return (await res.json()) as ServerInfo[];
}

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

export async function getReplayStatus(serverId: string): Promise<ReplayStatus> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const res = await fetch(`${base}/api/replay/status?serverId=${encodeURIComponent(serverId)}`, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to get replay status (${res.status})`);
  }

  return (await res.json()) as ReplayStatus;
}

export async function getReplayStatusAll(): Promise<ReplayStatus[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const res = await fetch(`${base}/api/replay/statusAll`, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to get replay status for all servers (${res.status})`);
  }

  return (await res.json()) as ReplayStatus[];
}
export type ReplayRange = {
  serverId: string;
  minTsMs: number | null;
  maxTsMs: number | null;
};

export async function getReplayRange(serverId: string): Promise<ReplayRange> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const res = await fetch(`${base}/api/replay/range?serverId=${encodeURIComponent(serverId)}`, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to get replay range (${res.status})`);
  }

  return (await res.json()) as ReplayRange;
}

export type ReplayPlayer = {
  playerId: number;
  name: string;
};

export async function listReplayPlayers(serverId: string): Promise<ReplayPlayer[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const res = await fetch(`${base}/api/replay/players?serverId=${encodeURIComponent(serverId)}`, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to list replay players (${res.status})`);
  }

  return (await res.json()) as ReplayPlayer[];
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
}): Promise<IngestRecord[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const qs = new URLSearchParams();
  qs.set('serverId', params.serverId);
  if (typeof params.sinceTsMs === 'number') qs.set('sinceTsMs', String(params.sinceTsMs));
  if (typeof params.untilTsMs === 'number') qs.set('untilTsMs', String(params.untilTsMs));
  if (typeof params.limit === 'number') qs.set('limit', String(params.limit));
  if (params.tail) qs.set('tail', '1');

  const res = await fetch(`${base}/api/replay/events?${qs.toString()}`, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to get replay events (${res.status})`);
  }

  return (await res.json()) as IngestRecord[];
}

export async function sendReplayGmPing(params: {
  serverId: string;
  tsMs: number;
  pos: { x: number; y: number; z: number };
  title?: string;
  reporterPlayerId?: number | null;
}): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const res = await fetch(`${base}/api/replay/gmPing`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to send GM ping (${res.status})`);
  }

  return (await res.json()) as { ok: true };
}

export type MapTerrain = {
  mapId: string;
  worldFile?: string;
  bbMin: unknown;
  bbMax: unknown;
  gridW: number;
  gridH: number;
  heights: number[];
  createdAt?: number;
  updatedAt?: number;
};

export async function getReplayMapTerrain(serverId: string): Promise<MapTerrain> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/replay/mapTerrain?serverId=${encodeURIComponent(serverId)}`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to get map terrain (${res.status})`);
  }

  return (await res.json()) as MapTerrain;
}

export type MapTowns = {
  mapId: string;
  worldFile?: string;
  towns?: Array<{ name: string; pos: unknown; baseType?: number }>;
  createdAt?: number;
  updatedAt?: number;
};

export type MapDescriptors = {
  mapId: string;
  worldFile?: string;
  // Newer exporters may send `descriptors`; older ones use `towns`.
  descriptors?: Array<{ name?: string; pos: unknown; baseType?: number; type?: string }>;
  towns?: Array<{ name?: string; pos: unknown; baseType?: number; type?: string }>;
  createdAt?: number;
  updatedAt?: number;
};

export async function getReplayMapDescriptors(serverId: string): Promise<MapDescriptors> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/replay/mapDescriptors?serverId=${encodeURIComponent(serverId)}`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to get map descriptors (${res.status})`);
  }

  return (await res.json()) as MapDescriptors;
}

export async function getReplayMapTowns(serverId: string): Promise<MapTowns> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/replay/mapTowns?serverId=${encodeURIComponent(serverId)}`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to get map towns (${res.status})`);
  }

  return (await res.json()) as MapTowns;
}

export type ToolAccess = {
  replay: boolean;
  admin: boolean;
  dev: boolean;
  players: boolean;
  bans: boolean;
  mutes: boolean;
  events: boolean;
  health: boolean;
  playerLookup: boolean;
};

export type AdminUser = {
  username: string;
  tools: Partial<ToolAccess>;
};

export async function listUsers(): Promise<AdminUser[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/users`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to list users (${res.status})`);
  return (await res.json()) as AdminUser[];
}

export async function createUser(payload: { username: string; password: string; tools: ToolAccess }): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/users`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to create user (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function updateUserTools(username: string, tools: ToolAccess): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/users/${encodeURIComponent(username)}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tools }),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to update user (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function deleteUser(username: string): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/users/${encodeURIComponent(username)}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to delete user (${res.status})`);
  return (await res.json()) as { ok: true };
}

export type DevServerInfo = {
  id: string;
  name?: string;
  keyHint?: string;
};

export async function listDevServers(): Promise<DevServerInfo[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/dev/servers`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to list dev servers (${res.status})`);
  return (await res.json()) as DevServerInfo[];
}

export async function addDevServer(payload: { serverId: string; serverKey: string; name?: string }): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/dev/servers`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to add dev server (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function clearServerHistory(serverId: string): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/dev/servers/clear?serverId=${encodeURIComponent(serverId)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to clear history (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function regenerateTerrainData(serverId: string): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(serverId)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to regenerate terrain (${res.status})`);
  return (await res.json()) as { ok: true };
}

export type DevDiscordWebhookStatus = {
  isSet: boolean;
  masked: string;
};

export async function getDevDiscordWebhook(): Promise<DevDiscordWebhookStatus> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/dev/discordWebhook`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to load webhook (${res.status})`);
  return (await res.json()) as DevDiscordWebhookStatus;
}

export async function setDevDiscordWebhook(webhookUrl: string): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/dev/discordWebhook`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ webhookUrl }),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to save webhook (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function exportReplayEventToDiscord(params: {
  serverId: string;
  tsMs: number;
  title: string;
  pos: { x: number; y: number; z: number };
  focusPlayerId?: number | null;
  playerIds?: number[] | null;
}): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/replay/exportDiscord`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to export to Discord (${res.status})`);
  return (await res.json()) as { ok: true };
}

// ─── Admin Bridge API ──────────────────────────────────────────────

export type ServerHealth = {
  serverId: string;
  fps: number;
  playerCount: number;
  tsMs: number;
};

export async function getServerHealth(serverId: string): Promise<ServerHealth> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/health?serverId=${encodeURIComponent(serverId)}`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to get server health (${res.status})`);
  return (await res.json()) as ServerHealth;
}

export type BanEntry = {
  playerUID: string;
  playerName: string;
  reason: string;
  timestamp: number;
  duration: number;
  bannedBy: string;
};

export async function getBans(serverId: string): Promise<BanEntry[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/bans?serverId=${encodeURIComponent(serverId)}`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to get bans (${res.status})`);
  return (await res.json()) as BanEntry[];
}

export async function addBan(params: {
  serverId: string;
  playerUID: string;
  playerName: string;
  reason: string;
  duration: number;
  bannedBy: string;
}): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/bans`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to add ban (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function removeBan(serverId: string, playerUID: string): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/bans/${encodeURIComponent(playerUID)}?serverId=${encodeURIComponent(serverId)}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to remove ban (${res.status})`);
  return (await res.json()) as { ok: true };
}

export type MuteEntry = {
  playerUID: string;
  playerName: string;
  reason: string;
  timestamp: number;
  duration: number;
  mutedBy: string;
};

export async function getMutes(serverId: string): Promise<MuteEntry[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/mutes?serverId=${encodeURIComponent(serverId)}`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to get mutes (${res.status})`);
  return (await res.json()) as MuteEntry[];
}

export async function addMute(params: {
  serverId: string;
  playerUID: string;
  playerName: string;
  reason: string;
  duration: number;
  mutedBy: string;
}): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/mutes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to add mute (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function removeMute(serverId: string, playerUID: string): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/mutes/${encodeURIComponent(playerUID)}?serverId=${encodeURIComponent(serverId)}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to remove mute (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function kickPlayer(params: {
  serverId: string;
  playerUID: string;
  reason: string;
}): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/kick`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to kick player (${res.status})`);
  return (await res.json()) as { ok: true };
}

export async function sendGlobalMessage(params: {
  serverId: string;
  title?: string;
  message: string;
}): Promise<{ ok: true }> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/globalMessage`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to send global message (${res.status})`);
  return (await res.json()) as { ok: true };
}

export type LivePlayer = {
  playerId: number;
  name: string;
  identityId: string;
  pos: { x: number; y: number; z: number } | null;
  inVehicle: boolean;
  vehicle: { name: string; prefab: string } | null;
  weapon: { name: string; prefab: string } | null;
};

export async function getLivePlayers(serverId: string): Promise<LivePlayer[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(`${base}/api/admin/players?serverId=${encodeURIComponent(serverId)}`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to get live players (${res.status})`);
  return (await res.json()) as LivePlayer[];
}

export type EventLogEntry = {
  type: string;
  tsMs: number;
  receivedAt: number;
  event: Record<string, unknown>;
};

export async function getEventLog(params: {
  serverId: string;
  types?: string;
  sinceTsMs?: number;
  untilTsMs?: number;
  limit?: number;
}): Promise<EventLogEntry[]> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const qs = new URLSearchParams();
  qs.set('serverId', params.serverId);
  if (params.types) qs.set('types', params.types);
  if (typeof params.sinceTsMs === 'number') qs.set('sinceTsMs', String(params.sinceTsMs));
  if (typeof params.untilTsMs === 'number') qs.set('untilTsMs', String(params.untilTsMs));
  if (typeof params.limit === 'number') qs.set('limit', String(params.limit));

  const res = await fetch(`${base}/api/admin/events?${qs.toString()}`, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  if (!res.ok) throw new Error((await res.text()) || `Failed to get event log (${res.status})`);
  return (await res.json()) as EventLogEntry[];
}

export type PlayerProfile = {
  playerUID: string;
  playerName: string;
  lastSeen: number | null;
  totalKills: number;
  totalDeaths: number;
  bans: BanEntry[];
  mutes: MuteEntry[];
};

export async function getPlayerProfile(serverId: string, playerUID: string): Promise<PlayerProfile> {
  const base = requireApiBaseUrl();
  const session = getSession();
  if (!session) throw new Error('Not authenticated');

  const res = await fetch(
    `${base}/api/admin/player/${encodeURIComponent(playerUID)}?serverId=${encodeURIComponent(serverId)}`,
    { headers: { Authorization: `Bearer ${session.token}` } }
  );
  if (!res.ok) throw new Error((await res.text()) || `Failed to get player profile (${res.status})`);
  return (await res.json()) as PlayerProfile;
}
