// The dashboard showed "No players online." on servers with 45 people on them, because
// BattleMetrics cannot enumerate players without RCON. The game log can.
//   node scripts/test-ingame-roster.mjs
import { parseRoster, redactRoster } from '../server/lib/ingameRoster.js';

let fails = 0;
const check = (l, c, e = '') => {
  console.log((c ? '  PASS  ' : '  FAIL  ') + l + (e ? `  ${e}` : ''));
  if (!c) fails++;
};

const conn = (n, name, addr) =>
  `07:00:01.000  DEFAULT      : BattlEye Server: 'Player #${n} ${name}${addr ? ` (${addr})` : ''} connected'`;
const disc = (n, name) =>
  `07:00:02.000  DEFAULT      : BattlEye Server: 'Player #${n} ${name} disconnected'`;
const slots = (u, m) =>
  `07:00:03.000 RPL          : ServerImpl event: connected (identity=0x1, slots=${u}/${m}), group=1`;

// --- the basic replay ------------------------------------------------------
let r = parseRoster([
  conn(1, 'Alice', '1.2.3.4:5000'),
  conn(2, 'Bob', '5.6.7.8:5001'),
  slots(2, 100),
].join('\n'));
check('two joins give two players', r.players.length === 2, String(r.players.length));
check('names parsed', r.players.map((p) => p.name).join(',') === 'Alice,Bob');
check('addresses parsed', r.players[0].ip === '1.2.3.4' && r.players[0].port === '5000');
check('slots read from the engine', r.slots && r.slots.used === 2 && r.slots.max === 100);
check('replay agrees with the engine', r.consistent === true);

r = parseRoster([conn(1, 'Alice', '1.2.3.4:5000'), conn(2, 'Bob'), disc(1, 'Alice'), slots(1, 100)].join('\n'));
check('a leave removes only that player', r.players.length === 1 && r.players[0].name === 'Bob');
check('still consistent after a leave', r.consistent === true);

// Slot numbers get reused as players cycle - a stale disconnect must not evict the new
// occupant, and a reconnect on the same slot must replace rather than duplicate.
r = parseRoster([conn(3, 'First'), disc(3, 'First'), conn(3, 'Second'), slots(1, 100)].join('\n'));
check('a reused slot holds the newer player', r.players.length === 1 && r.players[0].name === 'Second');

r = parseRoster([conn(4, 'Dup'), conn(4, 'Dup'), slots(1, 100)].join('\n'));
check('a duplicated connect does not double-count', r.players.length === 1);

r = parseRoster([disc(9, 'Ghost'), slots(0, 100)].join('\n'));
check('a leave with no matching join is harmless', r.players.length === 0);

// --- names that break naive parsing ---------------------------------------
r = parseRoster([conn(1, "O'Brien (the real one)", '9.9.9.9:1234'), slots(1, 100)].join('\n'));
check('a name containing brackets keeps its address',
      r.players[0].ip === '9.9.9.9', JSON.stringify(r.players[0]));
check('a name containing brackets keeps its name',
      r.players[0].name === "O'Brien (the real one)", r.players[0].name);

r = parseRoster([conn(2, 'AdamMałysz', '1.1.1.1:1'), slots(1, 100)].join('\n'));
check('unicode names survive', r.players[0].name === 'AdamMałysz', r.players[0].name);

r = parseRoster([conn(3, 'NoAddress'), slots(1, 100)].join('\n'));
check('a connect without an address still counts', r.players.length === 1 && r.players[0].ip === null);

// --- honesty about a truncated log ----------------------------------------
r = parseRoster([conn(1, 'Only'), slots(7, 100)].join('\n'));
check('THE HONESTY CHECK: replay disagreeing with the engine is flagged',
      r.consistent === false, `players=${r.players.length} slots=${r.slots.used}`);

r = parseRoster('');
check('empty log is empty, not an error', r.players.length === 0 && r.slots === null);
check('empty log counts as consistent', r.consistent === true);
check('undefined input does not throw', parseRoster(undefined).players.length === 0);

// --- PII gate --------------------------------------------------------------
const withIps = [{ slot: 1, name: 'Alice', ip: '1.2.3.4', port: '5000' }];
check('viewIps keeps the address', redactRoster(withIps, true)[0].ip === '1.2.3.4');
check('without viewIps the address is dropped', redactRoster(withIps, false)[0].ip === null);
check('without viewIps the name is kept', redactRoster(withIps, false)[0].name === 'Alice');
check('redaction survives an empty list', redactRoster([], false).length === 0);
check('redaction survives undefined', redactRoster(undefined, false).length === 0);

console.log();
console.log(fails ? `FAILED: ${fails} check(s)` : 'All ingame-roster tests passed');
process.exit(fails ? 1 : 0);
