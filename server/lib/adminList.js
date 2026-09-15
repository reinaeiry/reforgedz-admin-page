// Each Reforger server has one game.admins list, and game masters and priority queue
// share it. The shop keeps its priority queue stock inside a ceiling (ADMIN_CEILING,
// default 50) and the GM tab keeps game masters inside the same one. Pure functions,
// so they can be tested without a server:
//   node scripts/test-admin-list.mjs

export const DEFAULT_ADMIN_CEILING = 50;

// ADMIN_CEILING as a positive whole number, else the default. Mirrors the shop's own
// reading of the same variable, so a typo cannot switch the check off.
export function adminCeilingFrom(env) {
  const n = parseInt(env && env.ADMIN_CEILING, 10);
  return Number.isInteger(n) && n > 0 ? n : DEFAULT_ADMIN_CEILING;
}

// A shop server and a Pterodactyl server are matched on their short tag. The shop's
// label "EU1 (Chernarus)" and the panel's "[EU1] ..." tag are both EU1, and "NA Dev"
// and "[NA Dev]" are both NADEV. Case, spaces and punctuation are ignored.
export function serverTagKey(labelOrTag) {
  return String(labelOrTag ?? '').split('(')[0].toUpperCase().replace(/[^A-Z0-9]/g, '');
}

// The shop's holder list (GET /api/shop/admin/priority-queue, { servers, entries }) as
// { guids, byTag }: every holder's in-game ID in lower case, and for each server tag the
// IDs holding priority queue on THAT server. The shop builds the list from paid orders
// by its one rule, so this is exactly what its sync writes into each server's list.
// reservedByTag is, per server tag, the priority queue checkouts waiting at PayPal
// (servers[].reserved): each can become an entry within minutes. A shop older than that
// field leaves it out, and it counts as 0.
export function pqHoldersFromShop(body) {
  if (!body || !Array.isArray(body.entries)) throw new Error('pq_body_malformed');
  const servers = (Array.isArray(body.servers) ? body.servers : [])
    .filter((s) => s && typeof s.id === 'string' && s.id)
    .map((s) => ({ id: s.id, key: serverTagKey(s.label || s.id), reserved: Number.isInteger(s.reserved) && s.reserved > 0 ? s.reserved : 0 }));
  const guids = new Set();
  const byTag = new Map(servers.map((s) => [s.key, new Set()]));
  const reservedByTag = new Map(servers.map((s) => [s.key, s.reserved]));
  for (const e of body.entries) {
    const g = typeof e?.guid === 'string' ? e.guid.trim().toLowerCase() : '';
    if (!g) continue;
    guids.add(g);
    for (const s of servers) {
      if (e.presence && e.presence[s.id] === true) byTag.get(s.key).add(g);
    }
  }
  return { guids, byTag, reservedByTag };
}

// Checkouts waiting at PayPal for one Pterodactyl server, by its tag. 0 when unknown
// (the cache does not keep them: they are stale within minutes).
export function reservedOnServer(holders, tag) {
  if (!holders || !holders.reservedByTag) return 0;
  return holders.reservedByTag.get(serverTagKey(tag)) || 0;
}

// For the last-known-good cache file.
export function holdersToJson({ guids, byTag }) {
  return {
    guids: [...guids],
    byTag: byTag ? Object.fromEntries([...byTag].map(([k, v]) => [k, [...v]])) : null,
  };
}

// A cache written before per-server counting has only guids, so byTag comes back null
// and the counts fall back to the all-server list until the shop answers again.
export function holdersFromJson(obj) {
  const ids = (v) => (Array.isArray(v) ? v.filter((g) => typeof g === 'string' && g).map((g) => g.toLowerCase()) : []);
  const guids = new Set(ids(obj?.guids));
  const byTag = obj?.byTag && typeof obj.byTag === 'object'
    ? new Map(Object.entries(obj.byTag).map(([k, v]) => [k, new Set(ids(v))]))
    : null;
  return { guids, byTag };
}

// The IDs holding priority queue on one Pterodactyl server, by its tag. A server the shop
// does not sync (EU Dev) holds none. null when only the all-server list is known.
export function holdersOnServer(holders, tag) {
  if (!holders || !holders.byTag) return null;
  return holders.byTag.get(serverTagKey(tag)) || new Set();
}

// One server's slot usage, off its real game.admins array.
//   pq         entries holding priority queue on THIS server; a game master who bought
//              priority queue on another server is a game master here
//   gms        every other entry
//   pqWaiting  holders for this server not in the file yet: the shop writes them at its
//              next sync. null when the per-server list is unknown
//   pqReserved priority queue checkouts waiting at PayPal for this server
//   remaining  free entries, with the waiting holders and checkouts taken off
export function serverCapacity({ tag, admins, holders, limit }) {
  const list = Array.isArray(admins) ? admins : [];
  const onServer = holdersOnServer(holders, tag);
  const pqSet = onServer || (holders ? holders.guids : new Set());
  const inFile = new Set(list.map((g) => String(g).toLowerCase()));
  let pq = 0;
  for (const g of list) if (pqSet.has(String(g).toLowerCase())) pq++;
  const pqWaiting = onServer ? [...onServer].filter((g) => !inFile.has(g)).length : null;
  const pqReserved = reservedOnServer(holders, tag);
  return {
    tag,
    total: list.length,
    pq,
    gms: list.length - pq,
    pqWaiting,
    pqReserved,
    limit,
    remaining: Math.max(0, limit - list.length - (pqWaiting || 0) - pqReserved),
  };
}

// Whether adding guid to a server's list as a game master would take it past the limit.
// Counts the file as it is at the moment of writing, the shop's holders for that server
// not written yet, and the priority queue checkouts waiting at PayPal for it (reserved):
// the shop sold those places against the game master count it last saw. Someone the shop
// is about to write anyway takes no extra entry. onServer is null when the shop's list is
// unavailable, and then only the file counts. Returns null when the add fits, else
// { total, waiting, reserved, limit }.
export function gmAddOverLimit({ admins, guid, onServer, reserved = 0, limit }) {
  const list = Array.isArray(admins) ? admins : [];
  const g = String(guid || '').toLowerCase();
  const inFile = new Set(list.map((x) => String(x).toLowerCase()));
  if (inFile.has(g)) return null;
  const waiting = onServer ? [...onServer].filter((x) => !inFile.has(x)).length : 0;
  const held = Number.isInteger(reserved) && reserved > 0 ? reserved : 0;
  const extra = onServer && onServer.has(g) ? 0 : 1;
  if (list.length + waiting + held + extra <= limit) return null;
  return { total: list.length, waiting, reserved: held, limit };
}

export function adminListFullMessage(label, { total, waiting, reserved = 0, limit }) {
  const pendingParts = [];
  if (waiting) pendingParts.push(`${waiting} more priority queue ${waiting === 1 ? 'holder is' : 'holders are'} added at the shop's next sync`);
  if (reserved) pendingParts.push(`${reserved} priority queue ${reserved === 1 ? 'buyer is' : 'buyers are'} paying at PayPal right now`);
  const pending = pendingParts.length ? `, and ${pendingParts.join(', and ')}` : '';
  return `${label}'s admin list is full: ${total} of ${limit} entries are used${pending}. `
    + `Game masters and priority queue share this list, so another game master would take it past ${limit}. `
    + `Remove a game master from ${label} first.`;
}

export const MAX_MOVE_REASON = 400;

// The body sent to the shop's priority queue move ({ guid, from, to } plus optional
// orderId and reason). The shop's audit record names its caller, and every call from
// this page reaches the shop under one shared key, so the staff member's name goes in
// front of the reason. Fields the shop does not use are not passed on.
export function pqMoveBody(raw, staffName) {
  const b = raw && typeof raw === 'object' ? raw : {};
  // Control characters and runs of whitespace become single spaces: the reason is shown
  // on one line in the shop's audit record and card.
  const oneLine = (v) => Array.from(String(v ?? ''), (ch) => {
    const code = ch.charCodeAt(0);
    return code < 32 || code === 127 ? ' ' : ch;
  }).join('').replace(/\s+/g, ' ').trim();
  const staff = oneLine(staffName).slice(0, 64) || 'unknown staff';
  const why = typeof b.reason === 'string' ? oneLine(b.reason).slice(0, MAX_MOVE_REASON) : '';
  const out = { guid: b.guid, to: b.to, reason: `Admin page, ${staff}${why ? `: ${why}` : ''}` };
  if (typeof b.from === 'string' && b.from) out.from = b.from;
  if (b.orderId !== undefined && b.orderId !== null && b.orderId !== '') out.orderId = b.orderId;
  return out;
}
