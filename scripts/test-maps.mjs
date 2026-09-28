// Which background map the replay page picks for a server (src/util/maps.ts resolveMapId), and the tile
// geometry for maps whose tiles we cut from our own image (server/lib/localMapTiles.js).
// Cases use the world files and captured terrain widths the live feeds reported on 2026-09-28.
//   node scripts/test-maps.mjs        (Node >= 23.6 strips the TypeScript types itself)
import assert from 'node:assert/strict';
import { resolveMapId, getMapDef } from '../src/util/maps.ts';
import { localTileSourceRect, LOCAL_TILE_MAPS } from '../server/lib/localMapTiles.js';

let failed = 0;
function check(label, fn) {
  try {
    fn();
    console.log(`  ok   ${label}`);
  } catch (e) {
    failed++;
    console.log(`  FAIL ${label}: ${e.message}`);
  }
}

const cases = [
  // [worldFile, captured terrain width (m), expected map id]
  ['Worlds/Faircroft.ent', 12616.7, 'faircroft'],             // EU2 / NA2 (was drawn on Everon before 2026-09-28)
  ['Worlds/Chernarus/ChernarusReforgedZ.ent', 30920, 'chernarus'],
  ['$ArmaReforger:worlds/Eden/Eden.ent', 12802, 'everon'],      // Everon's vanilla world is named Eden
  ['worlds/MP/ReforgedZ_Everon.ent', null, 'everon'],
  ['$ArmaReforger:worlds/MP/Coop_CombatOps_Cain.ent', 4000, null], // Arland (Cain): no imagery
  ['Worlds/SomeIsland.ent', 12700, null],                      // named but unknown: never guessed by size
  ['', 12700, 'everon'],                                       // no world file: size fallback (Faircroft is name-only)
  [null, 15300, 'chernarus'],
  ['', 5000, null],
];
for (const [worldFile, worldSize, want] of cases) {
  check(`${JSON.stringify(worldFile)} @ ${worldSize} -> ${want}`, () => assert.equal(resolveMapId(worldFile, worldSize), want));
}

check('every local-tile map has a MapDef', () => {
  for (const id of Object.keys(LOCAL_TILE_MAPS)) assert.ok(getMapDef(id), id);
});

// A 4096px image at maxNativeZoom 9: z 9 is the whole image, z 6 is 8x8 tiles of 512px,
// and tile y counts from the SOUTH while image rows run from the NORTH.
check('z9 tile is the whole image', () =>
  assert.deepEqual(localTileSourceRect(4096, 4096, 9, 9, 0, 0), { sx: 0, sy: 0, sw: 4096, sh: 4096 }));
check('z6 tile (0,0) is the south-west corner', () =>
  assert.deepEqual(localTileSourceRect(4096, 4096, 9, 6, 0, 0), { sx: 0, sy: 3584, sw: 512, sh: 512 }));
check('z6 tile (7,7) is the north-east corner', () =>
  assert.deepEqual(localTileSourceRect(4096, 4096, 9, 6, 7, 7), { sx: 3584, sy: 0, sw: 512, sh: 512 }));
check('z2 tiles are 32px of source (upscaled 8x)', () =>
  assert.deepEqual(localTileSourceRect(4096, 4096, 9, 2, 0, 127), { sx: 0, sy: 0, sw: 32, sh: 32 }));

console.log(failed ? `${failed} failed` : 'all passed');
process.exit(failed ? 1 : 0);
