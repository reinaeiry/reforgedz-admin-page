// Sessionstorage-backed sticky multi-server filter. Used across BM dashboard
// tabs (Players, Bans, Activity, Chat) so the admin picks once and the
// selection persists for the session.

const KEY = 'rz.bm.serverFilter.v1';

export type ServerSelection = string[]; // array of bmServerId; empty = all

export function load(): ServerSelection {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (Array.isArray(arr) && arr.every((x) => typeof x === 'string')) return arr;
    return [];
  } catch {
    return [];
  }
}

export function save(sel: ServerSelection): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(sel));
  } catch {
    // ignore quota errors
  }
}

export function toggle(sel: ServerSelection, bmServerId: string): ServerSelection {
  const next = sel.includes(bmServerId) ? sel.filter((s) => s !== bmServerId) : [...sel, bmServerId];
  save(next);
  return next;
}

export function clear(): void {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
