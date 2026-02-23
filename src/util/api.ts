import { getSession } from './session';

function requireApiBaseUrl(): string {
  const base = import.meta.env.VITE_API_BASE_URL as string | undefined;
  if (base && base.length > 0) {
    return base.replace(/\/$/, '');
  }

  // If the client is hosted at https://admin.reforgedz.xyz, this automatically targets that.
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
