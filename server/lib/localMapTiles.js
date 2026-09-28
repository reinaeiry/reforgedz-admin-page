// Map tiles for maps tacops has no imagery for (Faircroft Islands). They are cut on demand from our own
// full-map image (public/maps/<image>: 1:1 world metres, north up, covering 0..worldSize on both axes) into
// the same 256px pyramid the replay map and the GIF renderer stream - tilesPerSide = 2^(maxNativeZoom - z),
// tile y counting from the south - and cached beside the tacops tiles. Pure (the caller passes the canvas
// factory), so it can be tested without a server or the native canvas module:
//   node scripts/test-maps.mjs

export const LOCAL_TILE_MAPS = {
  // Faircroft Islands by Lakes Dan, used with his written permission (2026-09). The same 4096px image as
  // reforgedz.net/map, with his credit on the image itself.
  faircroft: 'faircroft.jpg',
};

export const TILE_PX = 256;

// Source rectangle, in image pixels, of tile (x, y) at native zoom z. Image rows run from the north,
// tile y from the south.
export function localTileSourceRect(imgW, imgH, maxNativeZoom, z, x, y) {
  const n = 2 ** (maxNativeZoom - z);
  const w = imgW / n;
  const h = imgH / n;
  return { sx: x * w, sy: (n - 1 - y) * h, sw: w, sh: h };
}

// Tile (x, y) at native zoom z of `img` (a loaded @napi-rs/canvas Image), as a webp buffer.
// `createCanvas` is @napi-rs/canvas's.
export async function renderLocalTile(createCanvas, img, maxNativeZoom, z, x, y) {
  const { sx, sy, sw, sh } = localTileSourceRect(img.width, img.height, maxNativeZoom, z, x, y);
  const canvas = createCanvas(TILE_PX, TILE_PX);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, TILE_PX, TILE_PX);
  return canvas.encode('webp', 90);
}
