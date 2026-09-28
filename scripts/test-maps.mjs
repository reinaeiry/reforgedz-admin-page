// Which background map the replay page picks for a server (src/util/maps.ts resolveMapId).
// Cases use the world files and captured terrain widths the live feeds reported on 2026-09-28.
//   node scripts/test-maps.mjs        (Node >= 23.6 strips the TypeScript types itself)
import assert from 'node:assert/strict';
import { resolveMapId } from '../src/util/maps.ts';

const cases = [
  // [worldFile, captured terrain width (m), expected map id, why]
  ['Worlds/Faircroft.ent', 12616.7, null, 'Faircroft is 12.6 km wide - within 500 m of Everon, but it is not Everon'],
  ['Worlds/Chernarus/ChernarusReforgedZ.ent', 30920, 'chernarus', 'named Chernarus'],
  ['$ArmaReforger:worlds/Eden/Eden.ent', 12802, 'everon', "Everon's vanilla world is named Eden"],
  ['worlds/MP/ReforgedZ_Everon.ent', null, 'everon', 'named Everon'],
  ['$ArmaReforger:worlds/MP/Coop_CombatOps_Cain.ent', 4000, null, 'Arland (Cain): no imagery'],
  ['', 12700, 'everon', 'no world file reported: the size fallback still applies'],
  [null, 15300, 'chernarus', 'no world file reported: the size fallback still applies'],
  ['', 5000, null, 'unknown size, no world file'],
];

let failed = 0;
for (const [worldFile, worldSize, want, why] of cases) {
  const got = resolveMapId(worldFile, worldSize);
  try {
    assert.equal(got, want);
    console.log(`  ok   ${JSON.stringify(worldFile)} @ ${worldSize} -> ${got}`);
  } catch {
    failed++;
    console.log(`  FAIL ${JSON.stringify(worldFile)} @ ${worldSize} -> ${got}, wanted ${want} (${why})`);
  }
}
console.log(failed ? `${failed} of ${cases.length} failed` : `all ${cases.length} passed`);
process.exit(failed ? 1 : 0);
