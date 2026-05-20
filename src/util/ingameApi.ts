// Typed fetchers for /api/ingame/{bans|mutes}. Mirrors util/bmApi.ts style.

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

export type IngameKind = 'bans' | 'mutes';

export type IngameRecord = {
  server: string;          // tag (e.g. "EU1")
  region: 'EU' | 'NA' | string;
  uid: string;
  name: string;
  reason: string;
  timestamp: number;       // unix seconds
  duration: number;        // seconds, 0 = permanent
  by: string;              // who issued
};

export type IngameListResponse = {
  records: IngameRecord[];
  servers: Array<{ tag: string; region: string }>;
  errors?: Array<{ server: string; error: string }>;
};

export type WriteResult = { server: string; ok: boolean; error?: string; removed?: boolean };
export type WriteResponse = { ok: true; record?: IngameRecord; results: WriteResult[] };

export async function listIngame(kind: IngameKind, opts?: { server?: string }): Promise<IngameListResponse> {
  const params = new URLSearchParams();
  if (opts?.server) params.set('server', opts.server);
  const res = await fetch(`${base()}/api/ingame/${kind}?${params}`, { credentials: 'include' });
  return jsonOk(res, `Failed to load ingame ${kind}`);
}

export type AddIngameBody = {
  uid: string;
  name: string;
  reason: string;
  duration: number;        // 0 = permanent
  servers?: string[];      // empty/omitted = all
};

export async function addIngame(kind: IngameKind, body: AddIngameBody): Promise<WriteResponse> {
  const res = await fetch(`${base()}/api/ingame/${kind}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return jsonOk(res, `Failed to add ingame ${kind}`);
}

export type PatchIngameBody = {
  servers?: string[];
  patch: { reason?: string; duration?: number; name?: string };
};

export async function patchIngame(kind: IngameKind, uid: string, body: PatchIngameBody): Promise<WriteResponse> {
  const res = await fetch(`${base()}/api/ingame/${kind}/${encodeURIComponent(uid)}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return jsonOk(res, `Failed to update ingame ${kind}`);
}

export async function removeIngame(kind: IngameKind, uid: string, servers?: string[]): Promise<WriteResponse> {
  const params = new URLSearchParams();
  if (servers && servers.length) params.set('servers', servers.join(','));
  const res = await fetch(`${base()}/api/ingame/${kind}/${encodeURIComponent(uid)}?${params}`, {
    method: 'DELETE',
    credentials: 'include'
  });
  return jsonOk(res, `Failed to remove ingame ${kind}`);
}
