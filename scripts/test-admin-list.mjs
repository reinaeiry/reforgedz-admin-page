// The GM tab's admin list checks: priority queue counted per server from the shop's
// holder list, the ceiling on game master adds, and the staff name on a priority queue move.
//   node scripts/test-admin-list.mjs
import { readFileSync } from 'fs';
import {
  DEFAULT_ADMIN_CEILING, adminCeilingFrom, serverTagKey, pqHoldersFromShop, holdersToJson,
  holdersFromJson, holdersOnServer, serverCapacity, gmAddOverLimit, adminListFullMessage,
  pqMoveBody, MAX_MOVE_REASON, reservedOnServer,
} from '../server/lib/adminList.js';

let fails = 0;
const check = (l, c, e = '') => {
  console.log((c ? '  PASS  ' : '  FAIL  ') + l + (e ? `  ${e}` : ''));
  if (!c) fails++;
};

// Made-up IDs only.
const id = (n) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
const range = (from, count) => Array.from({ length: count }, (_, i) => id(from + i));

// --- the ceiling --------------------------------------------------------------
check('ceiling defaults to 50', adminCeilingFrom({}) === 50 && DEFAULT_ADMIN_CEILING === 50);
check('ceiling reads ADMIN_CEILING', adminCeilingFrom({ ADMIN_CEILING: '40' }) === 40);
check('a bad ADMIN_CEILING keeps the default instead of switching the check off',
  adminCeilingFrom({ ADMIN_CEILING: 'fifty' }) === 50 && adminCeilingFrom({ ADMIN_CEILING: '0' }) === 50
  && adminCeilingFrom({ ADMIN_CEILING: '-3' }) === 50);

// --- matching shop servers to panel servers -------------------------------------
check('shop label and panel tag match for EU1', serverTagKey('EU1 (Chernarus)') === serverTagKey('EU1'));
check('NA Dev matches with any spacing or dash', serverTagKey('NA Dev') === serverTagKey('NA-DEV') && serverTagKey('NA Dev') === 'NADEV');
check('EU3 (now EU Dev) is not EU Dev', serverTagKey('EU3 (now EU Dev)') !== serverTagKey('EU Dev'));

// --- the shop's holder list ------------------------------------------------------
const shopServers = [
  { id: 'eu1', label: 'EU1 (Chernarus)' }, { id: 'eu2', label: 'EU2 (Faircroft)' },
  { id: 'na1', label: 'NA1 (Chernarus)' }, { id: 'dev1', label: 'NA Dev' },
];
const presence = (on) => Object.fromEntries(shopServers.map((s) => [s.id, on.includes(s.id)]));
const eu1Buyers = range(100, 34);
const gms = range(1, 16);
// gms[0] is a game master on EU1 who bought priority queue on EU2.
const body = {
  servers: shopServers,
  entries: [
    ...eu1Buyers.map((g) => ({ guid: g, presence: presence(['eu1']) })),
    { guid: gms[0].toUpperCase(), presence: presence(['eu2']) },
    { guid: id(500), presence: presence(['eu1', 'eu2']) },
    { guid: '', presence: presence(['eu1']) },
  ],
};
const holders = pqHoldersFromShop(body);
check('every holder is listed once, lower case, blanks skipped', holders.guids.size === 36 && holders.guids.has(gms[0]));
check('per-server sets hold only that server', holders.byTag.get('EU1').size === 35 && holders.byTag.get('EU2').size === 2
  && !holders.byTag.get('EU1').has(gms[0]));
check('a server nobody holds has an empty set', holders.byTag.get('NA1').size === 0 && holders.byTag.get('NADEV').size === 0);
check('a body that is not a holder list is refused', (() => { try { pqHoldersFromShop({ error: 'x' }); return false; } catch { return true; } })());
check('holdersOnServer finds a panel server by its tag', holdersOnServer(holders, 'EU1').size === 35);
check('a server the shop does not sync holds nobody', holdersOnServer(holders, 'EU Dev').size === 0);
check('a shop with no reserved field counts no checkouts at PayPal', reservedOnServer(holders, 'EU1') === 0);

// --- capacity ------------------------------------------------------------------------
// A full file: 16 game masters and 34 of the 35 EU1 holders (id(500) is not written yet).
const eu1File = [...gms, ...eu1Buyers];
let c = serverCapacity({ tag: 'EU1', admins: eu1File, holders, limit: 50 });
check('a game master holding priority queue on another server counts as a game master',
  c.gms === 16 && c.pq === 34, JSON.stringify(c));
check('the old all-server count would have called them priority queue',
  serverCapacity({ tag: 'EU1', admins: eu1File, holders: { guids: holders.guids, byTag: null }, limit: 50 }).pq === 35);
check('a holder the shop has not written yet is waiting, and takes a free place', c.total === 50 && c.pqWaiting === 1 && c.remaining === 0,
  JSON.stringify(c));
c = serverCapacity({ tag: 'EU2', admins: [gms[0], id(500)].map((g) => g.toUpperCase()), holders, limit: 50 });
check('IDs match whatever their case in the file', c.pq === 2 && c.gms === 0 && c.pqWaiting === 0 && c.remaining === 48, JSON.stringify(c));
c = serverCapacity({ tag: 'EU Dev', admins: gms.slice(0, 5), holders, limit: 50 });
check('EU Dev: every entry is a game master', c.pq === 0 && c.gms === 5 && c.pqWaiting === 0);
c = serverCapacity({ tag: 'EU1', admins: eu1File, holders: null, limit: 50 });
check('with no shop answer and no cache, everything counts as game masters', c.pq === 0 && c.gms === 50 && c.pqWaiting === null);

// --- the cache ------------------------------------------------------------------------
const round = holdersFromJson(JSON.parse(JSON.stringify(holdersToJson(holders))));
check('cache round trip keeps both lists', round.guids.size === 36 && round.byTag.get('EU1').size === 35 && round.byTag.get('EU2').has(gms[0]));

// --- checkouts waiting at PayPal ---------------------------------------------------------
const withReserved = pqHoldersFromShop({
  servers: [{ id: 'eu1', label: 'EU1 (Chernarus)', reserved: 2 }, { id: 'eu2', label: 'EU2', reserved: 'x' }, { id: 'na1', label: 'NA1', reserved: -1 }],
  entries: [],
});
check('reserved is read per server tag', reservedOnServer(withReserved, 'EU1') === 2);
check('a bad reserved value counts as none', reservedOnServer(withReserved, 'EU2') === 0 && reservedOnServer(withReserved, 'NA1') === 0);
check('the cache keeps no checkouts at PayPal: they are stale within minutes',
  reservedOnServer(holdersFromJson(JSON.parse(JSON.stringify(holdersToJson(withReserved)))), 'EU1') === 0);
c = serverCapacity({ tag: 'EU1', admins: range(2000, 45), holders: withReserved, limit: 50 });
check('capacity takes the checkouts at PayPal off what is free', c.pqReserved === 2 && c.remaining === 3, JSON.stringify(c));
const old = holdersFromJson({ guids: [gms[0].toUpperCase()], updatedAt: 1 });
check('a cache from before per-server counting falls back to the all-server list', old.byTag === null && old.guids.has(gms[0]));
check('a broken cache reads as empty', holdersFromJson(null).guids.size === 0 && holdersFromJson({ byTag: 'x' }).byTag === null);

// --- game master adds -------------------------------------------------------------------
const onEu1 = holdersOnServer(holders, 'EU1');
check('an add to a list of 49 with nothing waiting fits (50)',
  gmAddOverLimit({ admins: range(1000, 49), guid: id(9), onServer: new Set(), limit: 50 }) === null);
let over = gmAddOverLimit({ admins: range(1000, 50), guid: id(9), onServer: new Set(), limit: 50 });
check('an add to a full list of 50 is refused', over && over.total === 50 && over.waiting === 0 && over.limit === 50, JSON.stringify(over));
over = gmAddOverLimit({ admins: eu1File.slice(0, 49), guid: id(900), onServer: onEu1, limit: 50 });
check('49 in the file plus a holder the shop has not written is full', over && over.total === 49 && over.waiting === 2,
  JSON.stringify(over));
check('adding the holder the shop is about to write takes no extra entry',
  gmAddOverLimit({ admins: eu1File.slice(0, 49), guid: id(500), onServer: new Set([id(500)]), limit: 50 }) === null);
check('someone already in the list changes nothing',
  gmAddOverLimit({ admins: range(1000, 55), guid: id(1000).toUpperCase(), onServer: new Set(), limit: 50 }) === null);
check('with the shop unreachable only the file counts',
  gmAddOverLimit({ admins: range(1000, 49), guid: id(9), onServer: null, limit: 50 }) === null);
check('a list already over the limit refuses any new add',
  gmAddOverLimit({ admins: range(1000, 51), guid: id(9), onServer: null, limit: 50 }) !== null);
check('the limit follows ADMIN_CEILING',
  gmAddOverLimit({ admins: range(1000, 40), guid: id(9), onServer: null, limit: 40 }) !== null);
check('48 in the file, one buyer at PayPal and the add fit exactly',
  gmAddOverLimit({ admins: range(1000, 48), guid: id(9), onServer: new Set(), reserved: 1, limit: 50 }) === null);
over = gmAddOverLimit({ admins: range(1000, 49), guid: id(9), onServer: new Set(), reserved: 1, limit: 50 });
check('49 in the file and a buyer at PayPal leave no room for a game master', over && over.reserved === 1 && over.total === 49, JSON.stringify(over));
check('a bad reserved value counts as none',
  gmAddOverLimit({ admins: range(1000, 49), guid: id(9), onServer: new Set(), reserved: 'lots', limit: 50 }) === null);

const msg = adminListFullMessage('EU1', { total: 49, waiting: 1, limit: 50 });
check('refusal names the server, the counts and what to do', msg.includes('EU1') && msg.includes('49 of 50') && msg.includes('1 more priority queue holder is')
  && msg.includes('Remove a game master from EU1'), msg);
check('refusal has no dashes a reader trips on', !/[–—]/.test(msg + adminListFullMessage('NA Dev', { total: 50, waiting: 0, limit: 50 })));
check('refusal without waiting holders says nothing about a sync', !adminListFullMessage('EU2', { total: 50, waiting: 0, limit: 50 }).includes('sync'));
const reservedMsg = adminListFullMessage('EU1', { total: 48, waiting: 1, reserved: 1, limit: 50 });
check('refusal names buyers at PayPal', reservedMsg.includes('1 priority queue buyer is paying at PayPal right now') && reservedMsg.includes('1 more priority queue holder is'), reservedMsg);
check('refusal with buyers at PayPal has no dashes', !/[–—]/.test(reservedMsg));

// --- the move body ------------------------------------------------------------------------
let m = pqMoveBody({ guid: id(1), from: 'eu2', to: 'eu1', orderId: 745, reason: '  ticket 1234\n asked for EU1 ', displayName: 'x', extra: 1 }, 'StaffMember');
check('staff name goes in front of the reason', m.reason === 'Admin page, StaffMember: ticket 1234 asked for EU1', m.reason);
check('guid, from, to and orderId pass through; other fields do not',
  m.guid === id(1) && m.from === 'eu2' && m.to === 'eu1' && m.orderId === 745 && !('displayName' in m) && !('extra' in m));
m = pqMoveBody({ guid: id(1), to: 'eu1', from: '', orderId: '' }, '');
check('no reason still records who moved it', m.reason === 'Admin page, unknown staff' && !('from' in m) && !('orderId' in m), JSON.stringify(m));
m = pqMoveBody({ guid: id(1), to: 'eu1', reason: 'x'.repeat(MAX_MOVE_REASON + 50) }, 'A'.repeat(100));
check('reason and name are bounded under the shop limit of 500', m.reason.length <= 500, String(m.reason.length));
check('a missing body is handled', pqMoveBody(undefined, 'StaffMember').reason === 'Admin page, StaffMember');

// --- server/index.js wiring ------------------------------------------------------------------
const src = readFileSync(new URL('../server/index.js', import.meta.url), 'utf8');
for (const retired of ['/api/shop/admin/priority-queue/toggle', '/api/shop/admin/priority-queue/extend']) {
  check(`no call to the retired shop route ${retired}`, !src.includes(retired));
}
check('no proxy deletes shop grants', !/shopFetchProxy\(`\/api\/shop\/admin\/priority-queue\/\$\{/.test(src));
check('no proxy posts a grant', !/shopFetchProxy\('\/api\/shop\/admin\/priority-queue',\s*\{\s*method:\s*'POST'/.test(src));
check('the GM toggle checks the ceiling', /app\.post\('\/api\/adminmgr\/toggle'[\s\S]*?gmAddOverLimit\(/.test(src));
check('the move proxy builds its body with the staff name', /app\.post\('\/api\/priority-queue\/switch'[\s\S]*?pqMoveBody\(/.test(src));
check('capacity uses the per-server count', /serverCapacity\(\{/.test(src));
check('the GM toggle counts checkouts at PayPal', /gmAddOverLimit\(\{[^}]*reserved:/.test(src));
check('a GM add or removal asks the shop to sync', /app\.post\('\/api\/adminmgr\/toggle'[\s\S]*?requestShopSync\(/.test(src));
check('a GM delete asks the shop to sync', /app\.delete\('\/api\/adminmgr\/admin\/:guid'[\s\S]*?requestShopSync\(/.test(src));
check('the shop sync request goes to the shop route that runs it', src.includes("'/api/shop/admin/admins-sync/run'"));
check('a move with no order never reaches the shop',
  /app\.post\('\/api\/priority-queue\/switch'[\s\S]*?orderId === undefined[\s\S]*?needs_order[\s\S]*?shopFetchProxy\(/.test(src));
const page = readFileSync(new URL('../src/ui/pages/AdminManagerPage.tsx', import.meta.url), 'utf8');
check('the move card has no move by server for an old shop', !page.includes('move by server') && page.includes('The shop needs updating before orders can be moved.'));
check('the page reads no account or PayPal subscription id from the holder list', !/\.accountId\b|o\.subscriptionId\b/.test(page));

console.log(fails ? `\n${fails} FAILED` : '\nall passed');
process.exit(fails ? 1 : 0);
