// The dashboard showed "No players online." on servers with 45 people on them, because
// BattleMetrics cannot enumerate players without RCON. The game log can - and it carries
// the GUID, which is the only safe way to identify anyone: four separate accounts are
// called "six", so a name-based link eventually opens the wrong player's page.
//   node scripts/test-ingame-roster.mjs
import { parseRoster } from '../server/lib/ingameRoster.js';

let fails = 0;
const check = (l, c, e = '') => {
  console.log((c ? '  PASS  ' : '  FAIL  ') + l + (e ? `  ${e}` : ''));
  if (!c) fails++;
};

const G1 = 'c8a75cdd-808a-4bef-b7be-4f79a586c27d';
const G2 = '368d72f7-23bd-4eef-be5a-481195bf3d20';

const authed = (id, guid, name) =>
  `08:07:30.791 BACKEND      : Authenticated player: rplIdentity=${id} identityId=${guid} name=${name}`;
const beGone = (id) =>
  `08:07:56.963  DEFAULT      : BattlEye Server: Disconnect player identity=${id}`;
const rplGone = (id, used, max) =>
  `08:06:35.767 RPL          : ServerImpl event: disconnected (identity=${id}, slots=${used}/${max}), group=1, reason=9`;
const slots = (used, max) =>
  `08:07:30.664 RPL          : ServerImpl event: authenticating (identity=0x1, address=1.2.3.4:1, slots=${used}/${max})`;

// --- the basic replay ------------------------------------------------------
let r = parseRoster([authed('0x15', G1, 'Inflaris'), slots(1, 100)].join('\n'));
check('an authenticated player joins the roster', r.players.length === 1);
check('the GUID is captured', r.players[0].guid === G1, r.players[0].guid);
check('the name is captured for display', r.players[0].name === 'Inflaris');
check('rplIdentity is kept', r.players[0].identity === '0x15');
check('replay agrees with the engine', r.consistent === true);

r = parseRoster([authed('0x15', G1, 'A'), authed('0x16', G2, 'B'), beGone('0x15'), slots(1, 100)].join('\n'));
check('a BattlEye disconnect removes only that identity',
      r.players.length === 1 && r.players[0].guid === G2);

r = parseRoster([authed('0x15', G1, 'A'), authed('0x16', G2, 'B'), rplGone('0x16', 1, 100)].join('\n'));
check('an RPL disconnect also removes', r.players.length === 1 && r.players[0].guid === G1);

// rplIdentity is reused - 0x15 held two different people within a minute in a real log.
r = parseRoster([authed('0x15', G1, 'Inflaris'), beGone('0x15'),
                 authed('0x15', G2, 'Puff26-CZE'), slots(1, 100)].join('\n'));
check('a reused rplIdentity holds the newer player',
      r.players.length === 1 && r.players[0].guid === G2, r.players[0].guid);

// Re-auth without a disconnect in between must replace, not duplicate.
r = parseRoster([authed('0x15', G1, 'A'), authed('0x15', G1, 'A'), slots(1, 100)].join('\n'));
check('a duplicated authenticate does not double-count', r.players.length === 1);

r = parseRoster([beGone('0x99'), rplGone('0x98', 0, 100)].join('\n'));
check('a disconnect with no matching join is harmless', r.players.length === 0);

// --- two people, one name: the whole reason this keys on GUID --------------
r = parseRoster([authed('0x1', G1, 'six'), authed('0x2', G2, 'six'), slots(2, 100)].join('\n'));
check('two players sharing a name are two entries', r.players.length === 2);
check('and they keep distinct GUIDs',
      r.players[0].guid !== r.players[1].guid, `${r.players[0].guid} vs ${r.players[1].guid}`);

// --- name shapes that break naive parsing ----------------------------------
r = parseRoster([authed('0x1', G1, "O'Brien (the real one)"), slots(1, 100)].join('\n'));
check('a name with brackets and quotes survives',
      r.players[0].name === "O'Brien (the real one)", r.players[0].name);

r = parseRoster([authed('0x1', G1, 'AdamMałysz'), slots(1, 100)].join('\n'));
check('unicode names survive', r.players[0].name === 'AdamMałysz', r.players[0].name);

r = parseRoster([authed('0x1', G1, 'Name With Spaces'), slots(1, 100)].join('\n'));
check('names with spaces are not truncated', r.players[0].name === 'Name With Spaces');

r = parseRoster([authed('0x1', G1.toUpperCase(), 'Upper'), slots(1, 100)].join('\n'));
check('GUIDs are normalised to lowercase', r.players[0].guid === G1, r.players[0].guid);

// --- honesty about a truncated log ----------------------------------------
r = parseRoster([authed('0x1', G1, 'Only'), slots(7, 100)].join('\n'));
check('THE HONESTY CHECK: replay disagreeing with the engine is flagged',
      r.consistent === false, `players=${r.players.length} slots=${r.slots.used}`);

r = parseRoster('');
check('empty log is empty, not an error', r.players.length === 0 && r.slots === null);
check('empty log counts as consistent', r.consistent === true);
check('undefined input does not throw', parseRoster(undefined).players.length === 0);

// A BattlEye join line carries a name but no GUID - it must NOT create an entry, or the
// roster would contain someone we cannot identify.
r = parseRoster(["08:00:00.000  DEFAULT      : BattlEye Server: 'Player #23 Ghost (1.2.3.4:5) connected'"].join('\n'));
check('a BattlEye join alone does not create an unidentified entry', r.players.length === 0);

console.log();
console.log(fails ? `FAILED: ${fails} check(s)` : 'All ingame-roster tests passed');
process.exit(fails ? 1 : 0);
