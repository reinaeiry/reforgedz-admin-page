// In-game mute changes handed to the ban controller (server/lib/muteKeeper.js).
//   node scripts/test-mute-keeper.mjs
import { addOp, editOps, removeOp } from '../server/lib/muteKeeper.js';

let fails = 0;
const check = (l, c, e = '') => { console.log((c ? '  PASS  ' : '  FAIL  ') + l + (e ? `  ${e}` : '')); if (!c) fails++; };

const UID = '7E6380B2-0FF5-49AC-A6FB-03C472973C11';
const rec = { uid: UID, name: 'Nattii', reason: 'spam', timestamp: 1790000000, duration: 3600, by: 'nattii' };

let op = addOp({ record: rec, volumes: ['97c0c03d-a', '4bb76203-b'], username: 'nattii' });
check('add: a mute on the servers written, by volume', op.op === 'mute' && op.servers.join() === '97c0c03d-a,4bb76203-b');
check('add: lower-case uid, its start and length', op.uid === UID.toLowerCase() && op.started_at === 1790000000 && op.duration === 3600);
check('add: who asked', op.requested_by === 'nattii');
op = addOp({ record: { ...rec, reason: '  ', timestamp: 0, duration: -5 }, volumes: ['v'], username: 'x' });
check('add: an empty reason gets the default one', op.reason === 'No reason given');
check('add: no start is left out, so the controller uses now', !('started_at' in JSON.parse(JSON.stringify(op))));
check('add: a negative length is permanent (0)', op.duration === 0);

const ops = editOps({
  uid: UID,
  username: 'mod',
  edited: [
    { volume: 'eu1', record: { ...rec, duration: 7200 } },
    { volume: 'eu2', record: { ...rec, duration: 7200 } },
    { volume: 'na1', record: { ...rec, timestamp: 1789990000, duration: 7200 } }
  ]
});
check('edit: one operation per distinct entry', ops.length === 2, JSON.stringify(ops.map((o) => o.servers)));
check('edit: the same entry on two servers is one operation', ops[0].servers.join() === 'eu1,eu2');
check('edit: each keeps its own start', ops[0].started_at === 1790000000 && ops[1].started_at === 1789990000);
check('edit: the new length and the editor', ops.every((o) => o.duration === 7200 && o.requested_by === 'mod'));
check('edit: nothing edited, nothing sent', editOps({ uid: UID, edited: [], username: 'mod' }).length === 0);

op = removeOp({ uid: UID, name: 'Nattii', volumes: ['eu1', 'na1'], username: 'mod' });
check('remove: an unmute on every server asked, with a reason', op.op === 'unmute' && op.servers.join() === 'eu1,na1'
  && op.reason && op.duration === 0 && op.uid === UID.toLowerCase());

console.log(fails ? `\n${fails} FAILED` : '\nALL CHECKS PASSED');
process.exit(fails ? 1 : 0);
