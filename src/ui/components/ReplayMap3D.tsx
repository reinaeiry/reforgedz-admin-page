import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type PlayerMarker = {
  playerId: number;
  label: string;
  pos: { x: number; y: number; z: number };
  aimDir?: { x: number; y: number; z: number } | null;
  isDead?: boolean;
  inVehicle?: boolean;
  highlight?: 'killer' | 'victim' | null;
};

export type NameTagOptions = {
  enabled: boolean;
  scale: number; // 0.5 - 2.0 typical
  background: boolean;
};

export type Trail = {
  points: Array<{ x: number; y: number; z: number }>;
};

export type TerrainGrid = {
  bbMin: { x: number; y: number; z: number };
  bbMax: { x: number; y: number; z: number };
  gridW: number;
  gridH: number;
  heights: number[];
};

export type TownLabel = {
  name: string;
  pos: { x: number; y: number; z: number };
};

export type ReplayMap3DProps = {
  players: PlayerMarker[];
  focusTarget: { x: number; y: number; z: number } | null;
  focusNonce: number;
  followPlayerId?: number | null;
  nameTags?: NameTagOptions;
  showAimLines?: boolean;
  trail?: Trail | null;
  deathMarkers?: Array<{ x: number; y: number; z: number }>;
  pingMarkers?: Array<{ x: number; y: number; z: number }>;
  terrain?: TerrainGrid | null;
  towns?: TownLabel[];
};

type ControlsState = {
  rmbDown: boolean;
  pointerLocked: boolean;
  yaw: number;
  pitch: number;
  speed: number;
  keys: Record<string, boolean>;
};

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp(v: number, min: number, max: number): number {
  if (v < min) return min;
  if (v > max) return max;
  return v;
}

export function ReplayMap3D(props: ReplayMap3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const playersRef = useRef<PlayerMarker[]>([]);
  const focusTargetRef = useRef<{ x: number; y: number; z: number } | null>(null);
  const focusNonceRef = useRef<number>(0);
  const followPlayerIdRef = useRef<number | null>(null);

  const nameTagsRef = useRef<NameTagOptions>({ enabled: true, scale: 1, background: true });
  const showAimLinesRef = useRef<boolean>(true);
  const trailRef = useRef<Trail | null>(null);
  const deathMarkersRef = useRef<Array<{ x: number; y: number; z: number }>>([]);
  const pingMarkersRef = useRef<Array<{ x: number; y: number; z: number }>>([]);
  const terrainRef = useRef<TerrainGrid | null>(null);
  const townsRef = useRef<TownLabel[]>([]);

  const dirtyRef = useRef({
    markers: true,
    trail: true,
    death: true,
    ping: true,
    terrain: true,
    towns: true,
  });

  useEffect(() => {
    playersRef.current = props.players;
    dirtyRef.current.markers = true;
  }, [props.players]);

  useEffect(() => {
    focusTargetRef.current = props.focusTarget;
  }, [props.focusTarget]);

  useEffect(() => {
    focusNonceRef.current = props.focusNonce;
  }, [props.focusNonce]);

  useEffect(() => {
    followPlayerIdRef.current = (typeof props.followPlayerId === 'number') ? props.followPlayerId : null;
  }, [props.followPlayerId]);

  useEffect(() => {
    nameTagsRef.current = props.nameTags || { enabled: true, scale: 1, background: true };
    dirtyRef.current.markers = true;
  }, [props.nameTags]);

  useEffect(() => {
    showAimLinesRef.current = props.showAimLines !== false;
    dirtyRef.current.markers = true;
  }, [props.showAimLines]);

  useEffect(() => {
    trailRef.current = props.trail || null;
    dirtyRef.current.trail = true;
  }, [props.trail]);

  useEffect(() => {
    deathMarkersRef.current = Array.isArray(props.deathMarkers) ? props.deathMarkers : [];
    dirtyRef.current.death = true;
  }, [props.deathMarkers]);

  useEffect(() => {
    pingMarkersRef.current = Array.isArray(props.pingMarkers) ? props.pingMarkers : [];
    dirtyRef.current.ping = true;
  }, [props.pingMarkers]);

  useEffect(() => {
    terrainRef.current = props.terrain || null;
    dirtyRef.current.terrain = true;
  }, [props.terrain]);

  useEffect(() => {
    townsRef.current = Array.isArray(props.towns) ? props.towns : [];
    dirtyRef.current.towns = true;
  }, [props.towns]);

  useEffect(() => {
    const canvasRefValue = canvasRef.current;
    if (!canvasRefValue) return;
    const canvasEl: HTMLCanvasElement = canvasRefValue;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    // Shadows are expensive and not critical for this tool; keep controls responsive.
    renderer.shadowMap.enabled = false;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0f19);

    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 20000);
    camera.position.set(0, 25, 60);

    const ambient = new THREE.AmbientLight(0xffffff, 0.28);
    scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0x8fb6ff, 0x0b0f19, 0.35);
    scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff, 1.15);
    dir.position.set(150, 260, 130);
    dir.castShadow = false;
    scene.add(dir);

    const dir2 = new THREE.DirectionalLight(0xffffff, 0.35);
    dir2.position.set(-180, 160, -120);
    scene.add(dir2);

    const grid = new THREE.GridHelper(2000, 200, 0x32405e, 0x1d2638);
    scene.add(grid);

    const originAxes = new THREE.AxesHelper(10);
    scene.add(originAxes);

    const markerGroup = new THREE.Group();
    scene.add(markerGroup);

    const trailGroup = new THREE.Group();
    scene.add(trailGroup);

    const deathGroup = new THREE.Group();
    scene.add(deathGroup);

    const pingGroup = new THREE.Group();
    scene.add(pingGroup);

    const townGroup = new THREE.Group();
    scene.add(townGroup);

    const terrainGroup = new THREE.Group();
    scene.add(terrainGroup);

    const markerGeom = new THREE.SphereGeometry(0.4, 16, 12);
    const matNormal = new THREE.MeshStandardMaterial({ color: 0xf9bc59 });
    const matVehicle = new THREE.MeshStandardMaterial({ color: 0xffb24a });
    const matDead = new THREE.MeshStandardMaterial({ color: 0x8a93a6 });

    // Event highlight materials (brighter + a bit of emissive so they pop).
    const matHighlightKiller = new THREE.MeshStandardMaterial({ color: 0x2aa7ff, emissive: 0x0b2b44, emissiveIntensity: 0.9 });
    const matHighlightVictim = new THREE.MeshStandardMaterial({ color: 0xb455ff, emissive: 0x2a003f, emissiveIntensity: 0.9 });

    const lineMatNormal = new THREE.LineBasicMaterial({ color: 0xf9bc59, transparent: true, opacity: 0.8 });
    const lineMatVehicle = new THREE.LineBasicMaterial({ color: 0xffb24a, transparent: true, opacity: 0.8 });
    const lineMatDead = new THREE.LineBasicMaterial({ color: 0x8a93a6, transparent: true, opacity: 0.7 });

    const lineMatHighlightKiller = new THREE.LineBasicMaterial({ color: 0x2aa7ff, transparent: true, opacity: 0.95 });
    const lineMatHighlightVictim = new THREE.LineBasicMaterial({ color: 0xb455ff, transparent: true, opacity: 0.95 });

    const trailMat = new THREE.LineBasicMaterial({ color: 0xf9bc59, transparent: true, opacity: 0.35 });
    const deathMat = new THREE.LineBasicMaterial({ color: 0xff4a4a, transparent: true, opacity: 0.9 });
    const pingMat = new THREE.LineBasicMaterial({ color: 0xf9bc59, transparent: true, opacity: 0.95 });

    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
      metalness: 0,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });

    const terrainEdgeMat = new THREE.LineBasicMaterial({ color: 0xe6edf3, transparent: true, opacity: 0.55 });

    /** @type {Map<number, THREE.Mesh>} */
    const markerMeshes = new Map<number, THREE.Mesh>();

    /** @type {Map<number, THREE.Sprite>} */
    const labelSprites = new Map<number, THREE.Sprite>();

    /** @type {Map<string, THREE.Sprite>} */
    const townSprites = new Map<string, THREE.Sprite>();

    /** @type {Map<number, THREE.Line>} */
    const aimLines = new Map<number, THREE.Line>();

    /** @type {Map<string, THREE.LineSegments>} */
    const deathMarkers = new Map<string, THREE.LineSegments>();

    /** @type {Map<string, THREE.LineSegments>} */
    const pingMarkers = new Map<string, THREE.LineSegments>();

    let terrainMesh: THREE.Mesh | null = null;
    let terrainEdges: THREE.LineSegments | null = null;
    let waterMesh: THREE.Mesh | null = null;
    let lastTerrainKey = '';

    let lastTownsRef: TownLabel[] | null = null;

    function disposeSprite(sp: THREE.Sprite) {
      const mat = sp.material as THREE.SpriteMaterial;
      if (mat.map) mat.map.dispose();
      mat.dispose();
    }

    function updateTowns() {
      const towns = townsRef.current;
      if (towns === lastTownsRef) return;
      lastTownsRef = towns;

      // Clear existing
      for (const sp of townSprites.values()) {
        disposeSprite(sp);
        townGroup.remove(sp);
      }
      townSprites.clear();

      if (!towns || towns.length === 0) return;

      const townTagOpts: NameTagOptions = { enabled: true, scale: 2.8, background: false };

      const isFallbackTypeLabel = (name: string) => /^type:\s*\d+\s*$/i.test(name.trim());

      const cleanPlaceName = (name: string) => {
        let s = (name || '').trim();
        s = s.replace(/^#AR-MapLocation_/i, '');
        s = s.replace(/_/g, ' ').trim();
        return s;
      };

      for (const t of towns) {
        if (!t || typeof t.name !== 'string' || !t.name) continue;
        const label = cleanPlaceName(t.name);
        if (!label) continue;
        if (isFallbackTypeLabel(label)) continue;
        const p = t.pos;
        if (!p || !Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(p.z)) continue;

        const sp = makeLabelSprite(label, townTagOpts);
        setSpriteWorldScale(sp, townTagOpts);
        // Make sure labels don't disappear due to frustum/bounds quirks.
        sp.frustumCulled = false;
        // Ensure labels don't write depth (they're informational overlays).
        (sp.material as THREE.SpriteMaterial).depthWrite = false;
        sp.position.set(p.x, p.y + 5.0, p.z);
        townGroup.add(sp);

        const kx = Math.round(p.x);
        const kz = Math.round(p.z);
        const key = `${label}|${kx}|${kz}`;
        townSprites.set(key, sp);
      }
    }

    let trailLine: THREE.Line | null = null;

    function makeLabelSprite(text: string, opts: NameTagOptions): THREE.Sprite {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        // Fallback: empty sprite
        const tex = new THREE.CanvasTexture(document.createElement('canvas'));
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
        const sp = new THREE.Sprite(mat);
        return sp;
      }

      const fontPx = 16;
      ctx.font = `600 ${fontPx}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
      const paddingX = 10;
      const paddingY = 6;
      const metrics = ctx.measureText(text);
      const textW = Math.ceil(metrics.width);
      const w = Math.max(8, textW + paddingX * 2);
      const h = fontPx + paddingY * 2;

      // HiDPI
      const scale = 2;
      canvas.width = w * scale;
      canvas.height = h * scale;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      // background
      ctx.clearRect(0, 0, w, h);
      if (opts.background) {
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        const r = 6;
        ctx.beginPath();
        ctx.moveTo(r, 0);
        ctx.lineTo(w - r, 0);
        ctx.quadraticCurveTo(w, 0, w, r);
        ctx.lineTo(w, h - r);
        ctx.quadraticCurveTo(w, h, w - r, h);
        ctx.lineTo(r, h);
        ctx.quadraticCurveTo(0, h, 0, h - r);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(0, 0, r, 0);
        ctx.closePath();
        ctx.fill();
      }

      // text
      ctx.font = `600 ${fontPx}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, paddingX, Math.floor(h / 2));

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;

      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
      const sp = new THREE.Sprite(mat);
      sp.userData = { canvas, texture: tex, text };
      sp.center.set(0.5, 0);
      return sp;
    }

    function setSpriteWorldScale(sprite: THREE.Sprite, opts: NameTagOptions) {
      const mat = sprite.material as THREE.SpriteMaterial;
      const tex = mat.map as any;
      const img = tex && tex.image;
      if (!img || !img.width || !img.height) {
        sprite.scale.set(2.5 * opts.scale, 0.8 * opts.scale, 1);
        return;
      }

      const aspect = img.width / img.height;
      const worldH = 0.85 * opts.scale;
      const worldW = worldH * aspect;
      sprite.scale.set(worldW, worldH, 1);
    }

    function updateLabelSprite(sprite: THREE.Sprite, nextText: string, opts: NameTagOptions) {
      const ud: any = sprite.userData;
      if (ud && ud.text === nextText) {
        setSpriteWorldScale(sprite, opts);
        return;
      }

      const oldMat = sprite.material as THREE.SpriteMaterial;
      const oldTex = oldMat.map;
      if (oldTex) oldTex.dispose();
      oldMat.dispose();

      const next = makeLabelSprite(nextText, opts);
      sprite.material = next.material;
      sprite.userData = next.userData;
      setSpriteWorldScale(sprite, opts);
    }

    const controls: ControlsState = {
      rmbDown: false,
      pointerLocked: false,
      yaw: 0,
      pitch: 0,
      speed: 20,
      keys: Object.create(null) as Record<string, boolean>,
    };

    let lastAppliedFocusNonce = 0;

    function resize() {
      const w = canvasEl.clientWidth;
      const h = canvasEl.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvasEl);
    resize();

    function updateMarkers() {
      const seen = new Set<number>();

      const nameTags = nameTagsRef.current;
      const showAimLines = showAimLinesRef.current;

      const players = playersRef.current;
      for (const p of players) {
        seen.add(p.playerId);

        let mesh = markerMeshes.get(p.playerId);
        if (!mesh) {
          mesh = new THREE.Mesh(markerGeom, matNormal);
          mesh.castShadow = false;
          mesh.receiveShadow = false;
          mesh.userData = { playerId: p.playerId };
          markerMeshes.set(p.playerId, mesh);
          markerGroup.add(mesh);

          const sprite = makeLabelSprite(p.label || String(p.playerId), nameTags);
          sprite.position.set(0, 1.2, 0);
          setSpriteWorldScale(sprite, nameTags);
          labelSprites.set(p.playerId, sprite);
          mesh.add(sprite);

          const geom = new THREE.BufferGeometry();
          const arr = new Float32Array(6);
          geom.setAttribute('position', new THREE.BufferAttribute(arr, 3));
          const line = new THREE.Line(geom, lineMatNormal);
          aimLines.set(p.playerId, line);
          markerGroup.add(line);
        }

        // material based on state
        const isDead = !!p.isDead;
        const inVehicle = !!p.inVehicle;
        const hl = p.highlight || null;
        const mat = hl === 'killer'
          ? matHighlightKiller
          : (hl === 'victim'
            ? matHighlightVictim
            : (isDead ? matDead : (inVehicle ? matVehicle : matNormal)));
        if (mesh.material !== mat) {
          mesh.material = mat;
        }

        mesh.position.set(p.pos.x, p.pos.y, p.pos.z);

        // label
        const sprite = labelSprites.get(p.playerId);
        if (sprite) {
          sprite.visible = nameTags.enabled;
          if (nameTags.enabled) {
            updateLabelSprite(sprite, p.label || String(p.playerId), nameTags);
          }
        }

        // aim direction line
        const line = aimLines.get(p.playerId);
        if (line) {
          line.visible = showAimLines;
          if (!showAimLines) continue;

          const lm = hl === 'killer'
            ? lineMatHighlightKiller
            : (hl === 'victim'
              ? lineMatHighlightVictim
              : (isDead ? lineMatDead : (inVehicle ? lineMatVehicle : lineMatNormal)));
          if (line.material !== lm) {
            line.material = lm;
          }

          const dir = p.aimDir;
          const posAttr = (line.geometry as THREE.BufferGeometry).getAttribute('position') as THREE.BufferAttribute;
          if (!dir) {
            // collapse to a point
            posAttr.setXYZ(0, p.pos.x, p.pos.y, p.pos.z);
            posAttr.setXYZ(1, p.pos.x, p.pos.y, p.pos.z);
            posAttr.needsUpdate = true;
          } else {
            const dx = dir.x;
            const dy = dir.y;
            const dz = dir.z;
            const len = Math.max(0.0001, Math.sqrt(dx * dx + dy * dy + dz * dz));
            const nx = dx / len;
            const ny = dy / len;
            const nz = dz / len;

            const scale = 6;
            const x0 = p.pos.x;
            const y0 = p.pos.y + 0.6;
            const z0 = p.pos.z;
            const x1 = x0 + nx * scale;
            const y1 = y0 + ny * scale;
            const z1 = z0 + nz * scale;
            posAttr.setXYZ(0, x0, y0, z0);
            posAttr.setXYZ(1, x1, y1, z1);
            posAttr.needsUpdate = true;
          }
        }
      }

      for (const [id, mesh] of markerMeshes) {
        if (seen.has(id)) continue;
        markerGroup.remove(mesh);
        markerMeshes.delete(id);

        const sprite = labelSprites.get(id);
        if (sprite) {
          mesh.remove(sprite);
          const mat = sprite.material as THREE.SpriteMaterial;
          if (mat.map) mat.map.dispose();
          mat.dispose();
          labelSprites.delete(id);
        }

        const line = aimLines.get(id);
        if (line) {
          markerGroup.remove(line);
          (line.geometry as THREE.BufferGeometry).dispose();
          aimLines.delete(id);
        }
      }
    }

    function updateTrail() {
      const t = trailRef.current;
      if (!t || !Array.isArray(t.points) || t.points.length < 2) {
        if (trailLine) {
          trailGroup.remove(trailLine);
          (trailLine.geometry as THREE.BufferGeometry).dispose();
          trailLine = null;
        }
        return;
      }

      const pts = t.points;
      const arr = new Float32Array(pts.length * 3);
      for (let i = 0; i < pts.length; i++) {
        arr[i * 3 + 0] = pts[i].x;
        arr[i * 3 + 1] = pts[i].y + 0.15;
        arr[i * 3 + 2] = pts[i].z;
      }

      if (!trailLine) {
        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.BufferAttribute(arr, 3));
        trailLine = new THREE.Line(geom, trailMat);
        trailGroup.add(trailLine);
      } else {
        const geom = trailLine.geometry as THREE.BufferGeometry;
        geom.setAttribute('position', new THREE.BufferAttribute(arr, 3));
        (geom.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
        geom.computeBoundingSphere();
      }
    }

    function updateDeathMarkers() {
      const list = deathMarkersRef.current;
      const seen = new Set<string>();
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        const key = `${Math.round(p.x * 10)}|${Math.round(p.y * 10)}|${Math.round(p.z * 10)}|${i}`;
        seen.add(key);

        let seg = deathMarkers.get(key);
        if (!seg) {
          const size = 1.2;
          const geom = new THREE.BufferGeometry();
          // Two crossing segments in XZ plane.
          const arr = new Float32Array([
            -size, 0, -size, size, 0, size,
            -size, 0, size, size, 0, -size,
          ]);
          geom.setAttribute('position', new THREE.BufferAttribute(arr, 3));
          seg = new THREE.LineSegments(geom, deathMat);
          deathMarkers.set(key, seg);
          deathGroup.add(seg);
        }

        seg.position.set(p.x, p.y + 0.1, p.z);
      }

      for (const [key, seg] of deathMarkers) {
        if (seen.has(key)) continue;
        deathGroup.remove(seg);
        (seg.geometry as THREE.BufferGeometry).dispose();
        deathMarkers.delete(key);
      }
    }

    function updatePingMarkers() {
      const list = pingMarkersRef.current;
      const seen = new Set<string>();
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        const key = `${Math.round(p.x * 10)}|${Math.round(p.y * 10)}|${Math.round(p.z * 10)}|${i}`;
        seen.add(key);

        let seg = pingMarkers.get(key);
        if (!seg) {
          const size = 1.8;
          const geom = new THREE.BufferGeometry();
          const arr = new Float32Array([
            -size, 0, -size, size, 0, size,
            -size, 0, size, size, 0, -size,
          ]);
          geom.setAttribute('position', new THREE.BufferAttribute(arr, 3));
          seg = new THREE.LineSegments(geom, pingMat);
          pingMarkers.set(key, seg);
          pingGroup.add(seg);
        }

        seg.position.set(p.x, p.y + 0.15, p.z);
      }

      for (const [key, seg] of pingMarkers) {
        if (seen.has(key)) continue;
        pingGroup.remove(seg);
        (seg.geometry as THREE.BufferGeometry).dispose();
        pingMarkers.delete(key);
      }
    }

    function setCameraFromAngles() {
      const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), controls.yaw);
      const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), controls.pitch);
      camera.quaternion.copy(qYaw).multiply(qPitch);
    }

    function onContextMenu(e: MouseEvent) {
      e.preventDefault();
    }

    function onMouseDown(e: MouseEvent) {
      if (e.button !== 2) return;
      controls.rmbDown = true;

      if (document.pointerLockElement !== canvasEl) {
        canvasEl.requestPointerLock();
      }
    }

    function onMouseUp(e: MouseEvent) {
      if (e.button !== 2) return;
      controls.rmbDown = false;

      if (document.pointerLockElement === canvasEl) {
        document.exitPointerLock();
      }
    }

    function onPointerLockChange() {
      controls.pointerLocked = document.pointerLockElement === canvasEl;

      // Capture current camera orientation when entering pointer lock,
      // so we don't snap back to default angles.
      if (controls.pointerLocked) {
        const e = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
        controls.yaw = e.y;
        controls.pitch = e.x;
      }
    }

    function onMouseMove(e: MouseEvent) {
      if (!controls.pointerLocked) return;

      const dx = e.movementX || 0;
      const dy = e.movementY || 0;

      // Horizontal look: drag right = look right.
      controls.yaw -= dx * 0.002;
      controls.pitch -= dy * 0.002;
      controls.pitch = clamp(controls.pitch, -Math.PI / 2 + 0.01, Math.PI / 2 - 0.01);
    }

    function onWheel(e: WheelEvent) {
      const followId = followPlayerIdRef.current;
      if (typeof followId === 'number') {
        // Zoom while following: adjust follow offset distance.
        const factor = e.deltaY < 0 ? 0.90 : 1.10;
        const next = followOffset.clone().multiplyScalar(factor);
        const len = next.length();
        const clamped = clamp(len, 6, 800);
        if (len > 0.0001) next.multiplyScalar(clamped / len);
        followOffset.copy(next);
        return;
      }

      // Negative deltaY = scroll up
      const direction = e.deltaY < 0 ? 1 : -1;
      const next = controls.speed + direction * Math.max(1, controls.speed * 0.1);
      controls.speed = clamp(next, 1, 400);
    }

    function onKeyDown(e: KeyboardEvent) {
      controls.keys[e.code] = true;
    }

    function onKeyUp(e: KeyboardEvent) {
      controls.keys[e.code] = false;
    }

    function updateTerrain() {
      const t = terrainRef.current;
      if (!t) {
        grid.visible = true;
        if (terrainMesh) {
          (terrainMesh.geometry as THREE.BufferGeometry).dispose();
          terrainGroup.remove(terrainMesh);
          terrainMesh = null;
          lastTerrainKey = '';
        }
        if (terrainEdges) {
          (terrainEdges.geometry as THREE.BufferGeometry).dispose();
          terrainGroup.remove(terrainEdges);
          terrainEdges = null;
        }

        if (waterMesh) {
          (waterMesh.geometry as THREE.BufferGeometry).dispose();
          (waterMesh.material as THREE.Material).dispose();
          terrainGroup.remove(waterMesh);
          waterMesh = null;
        }
        return;
      }

      grid.visible = false;

      const key = `${t.gridW}x${t.gridH}|${t.bbMin.x},${t.bbMin.y},${t.bbMin.z}|${t.bbMax.x},${t.bbMax.y},${t.bbMax.z}|${t.heights.length}`;
      if (key === lastTerrainKey) return;
      lastTerrainKey = key;

      if (terrainMesh) {
        (terrainMesh.geometry as THREE.BufferGeometry).dispose();
        terrainGroup.remove(terrainMesh);
        terrainMesh = null;
      }

      if (terrainEdges) {
        (terrainEdges.geometry as THREE.BufferGeometry).dispose();
        terrainGroup.remove(terrainEdges);
        terrainEdges = null;
      }

      if (waterMesh) {
        (waterMesh.geometry as THREE.BufferGeometry).dispose();
        (waterMesh.material as THREE.Material).dispose();
        terrainGroup.remove(waterMesh);
        waterMesh = null;
      }

      const w = Math.max(2, Math.floor(t.gridW));
      const h = Math.max(2, Math.floor(t.gridH));
      const expected = w * h;
      if (!Array.isArray(t.heights) || t.heights.length < expected) return;

      const widthX = t.bbMax.x - t.bbMin.x;
      const depthZ = t.bbMax.z - t.bbMin.z;
      if (!Number.isFinite(widthX) || !Number.isFinite(depthZ) || widthX <= 0 || depthZ <= 0) return;

      const geom = new THREE.PlaneGeometry(widthX, depthZ, w - 1, h - 1);
      geom.rotateX(-Math.PI / 2);

      const pos = geom.attributes.position as THREE.BufferAttribute;

      // Colorize by height for better readability.
      let minH = Infinity;
      let maxH = -Infinity;
      for (let k = 0; k < expected; k++) {
        const hv = t.heights[k];
        if (typeof hv !== 'number' || !Number.isFinite(hv)) continue;
        if (hv < minH) minH = hv;
        if (hv > maxH) maxH = hv;
      }
      if (!Number.isFinite(minH) || !Number.isFinite(maxH) || maxH - minH < 0.001) {
        minH = 0;
        maxH = 1;
      }
      const spanH = maxH - minH;

      const colors = new Float32Array(expected * 3);
      const cLow = new THREE.Color(0x0f1624);
      const cMid = new THREE.Color(0x1d2638);
      const cHigh = new THREE.Color(0x32405e);
      const waterY = 0;
      const cWater = new THREE.Color(0x0b3a66);
      for (let j = 0; j < h; j++) {
        const srcRow = j;
        const dstRow = j;
        for (let i = 0; i < w; i++) {
          // Terrain grid is already aligned with world axes:
          // east = +X, north = +Z.
          const srcIdx = i + w * srcRow;
          const dstIdx = i + w * dstRow;
          const hv = t.heights[srcIdx];
          pos.setY(dstIdx, hv);

          let tt = (hv - minH) / spanH;
          if (!Number.isFinite(tt)) tt = 0;
          tt = Math.min(1, Math.max(0, tt));
          // Slight contrast curve.
          tt = Math.pow(tt, 0.65);

          const color = tt < 0.5
            ? cLow.clone().lerp(cMid, tt / 0.5)
            : cMid.clone().lerp(cHigh, (tt - 0.5) / 0.5);

          // Water tint below sea level for readability.
          if (Number.isFinite(hv) && hv < waterY) {
            color.lerp(cWater, 0.28);
          }

          colors[dstIdx * 3 + 0] = color.r;
          colors[dstIdx * 3 + 1] = color.g;
          colors[dstIdx * 3 + 2] = color.b;
        }
      }
      pos.needsUpdate = true;
      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geom.computeVertexNormals();

      terrainMesh = new THREE.Mesh(geom, terrainMat);
      terrainMesh.receiveShadow = false;
      terrainMesh.castShadow = false;
      const centerX = (t.bbMin.x + t.bbMax.x) / 2;
      const centerZ = (t.bbMin.z + t.bbMax.z) / 2;
      terrainMesh.position.set(centerX, 0, centerZ);
      terrainGroup.add(terrainMesh);

      // Water plane at sea level (y=0).
      if (minH < waterY && maxH > waterY) {
        const waterGeom = new THREE.PlaneGeometry(widthX, depthZ, 1, 1);
        waterGeom.rotateX(-Math.PI / 2);
        const waterMat = new THREE.MeshStandardMaterial({
          color: 0x1a6ea8,
          transparent: true,
          opacity: 0.26,
          roughness: 0.15,
          metalness: 0,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        waterMesh = new THREE.Mesh(waterGeom, waterMat);
        waterMesh.receiveShadow = false;
        waterMesh.castShadow = false;
        waterMesh.position.set(centerX, waterY, centerZ);
        terrainGroup.add(waterMesh);
      }

      // Wire/edges overlay to read slopes at a glance.
      const edgesGeom = new THREE.EdgesGeometry(geom, 35);
      terrainEdges = new THREE.LineSegments(edgesGeom, terrainEdgeMat);
      terrainEdges.position.copy(terrainMesh.position);
      terrainGroup.add(terrainEdges);
    }

    canvasEl.addEventListener('contextmenu', onContextMenu);
    canvasEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('pointerlockchange', onPointerLockChange);
    window.addEventListener('mousemove', onMouseMove);
    canvasEl.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    let last = performance.now();
    let raf = 0;

    let lastMarkersUpdateAt = 0;
    let lastTrailUpdateAt = 0;

    // Follow mode camera offset (relative to player position).
    let lastFollowId: number | null = null;
    const followOffset = new THREE.Vector3(0, 25, 60);

    function step(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const dirty = dirtyRef.current;

      // Only rebuild expensive scene objects when inputs change.
      if (dirty.towns) {
        updateTowns();
        dirty.towns = false;
      }

      // Marker updates can be frequent during playback; cap to ~20Hz.
      if (dirty.markers && now - lastMarkersUpdateAt >= 50) {
        updateMarkers();
        dirty.markers = false;
        lastMarkersUpdateAt = now;
      }

      if (dirty.trail && now - lastTrailUpdateAt >= 75) {
        updateTrail();
        dirty.trail = false;
        lastTrailUpdateAt = now;
      }

      if (dirty.death) {
        updateDeathMarkers();
        dirty.death = false;
      }

      if (dirty.ping) {
        updatePingMarkers();
        dirty.ping = false;
      }

      if (dirty.terrain) {
        updateTerrain();
        dirty.terrain = false;
      }

      // Continuous follow (camera attachment): keep camera offset relative to the player,
      // but still allow RMB movement (applied to the offset) so users can move closer/further.
      const followId = followPlayerIdRef.current;
      if (typeof followId === 'number') {
        const players = playersRef.current;
        const p = players.find((x) => x && x.playerId === followId);
        if (p) {
          const t = p.pos;

          if (followId !== lastFollowId) {
            // Preserve the user's current camera position as the starting follow offset.
            followOffset.set(camera.position.x - t.x, camera.position.y - t.y, camera.position.z - t.z);
            const dist = followOffset.length();
            if (!Number.isFinite(followOffset.x) || !Number.isFinite(followOffset.y) || !Number.isFinite(followOffset.z) || !Number.isFinite(dist) || dist < 1 || dist > 500) {
              followOffset.set(0, 25, 60);
            }
            lastFollowId = followId;
          }

          // Apply current offset first so movement vectors are stable.
          camera.position.set(t.x + followOffset.x, t.y + followOffset.y, t.z + followOffset.z);
          camera.lookAt(t.x, t.y + 1.5, t.z);

          const allowMove = controls.rmbDown || controls.pointerLocked;
          if (allowMove) {
            const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
            const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
            const up = new THREE.Vector3(0, 1, 0);

            if (controls.keys['KeyW']) followOffset.addScaledVector(forward, controls.speed * dt);
            if (controls.keys['KeyS']) followOffset.addScaledVector(forward, -controls.speed * dt);
            if (controls.keys['KeyA']) followOffset.addScaledVector(right, -controls.speed * dt);
            if (controls.keys['KeyD']) followOffset.addScaledVector(right, controls.speed * dt);
            if (controls.keys['KeyQ']) followOffset.addScaledVector(up, controls.speed * dt);
            if (controls.keys['KeyZ']) followOffset.addScaledVector(up, -controls.speed * dt);
          }

          // Re-apply after movement.
          camera.position.set(t.x + followOffset.x, t.y + followOffset.y, t.z + followOffset.z);
          camera.lookAt(t.x, t.y + 1.5, t.z);
        }
      } else {
        lastFollowId = null;
      }

      // One-shot focus (move camera to the selected player and look at them).
      // This is NOT a continuous lock/follow.
      const focusNonce = focusNonceRef.current;
      if (followId === null && focusNonce !== lastAppliedFocusNonce) {
        lastAppliedFocusNonce = focusNonce;
        const t = focusTargetRef.current;
        if (t) {
          camera.position.set(t.x, t.y + 25, t.z + 60);
          camera.lookAt(t.x, t.y + 1.5, t.z);
        }
      }

      // Only apply angle control while actively controlling the camera.
      // Otherwise keep the current camera orientation.
      if (controls.pointerLocked && followId === null) {
        setCameraFromAngles();
      }

      const allowMove = controls.rmbDown || controls.pointerLocked;
      if (allowMove && followId === null) {
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
        const up = new THREE.Vector3(0, 1, 0);

        // WASD horizontal
        if (controls.keys['KeyW']) camera.position.addScaledVector(forward, controls.speed * dt);
        if (controls.keys['KeyS']) camera.position.addScaledVector(forward, -controls.speed * dt);
        if (controls.keys['KeyA']) camera.position.addScaledVector(right, -controls.speed * dt);
        if (controls.keys['KeyD']) camera.position.addScaledVector(right, controls.speed * dt);

        // Q/Z vertical
        if (controls.keys['KeyQ']) camera.position.addScaledVector(up, controls.speed * dt);
        if (controls.keys['KeyZ']) camera.position.addScaledVector(up, -controls.speed * dt);
      }

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(step);
    }

    raf = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(raf);

      canvasEl.removeEventListener('contextmenu', onContextMenu);
      canvasEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('pointerlockchange', onPointerLockChange);
      window.removeEventListener('mousemove', onMouseMove);
      canvasEl.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);

      ro.disconnect();

      markerGeom.dispose();
      matNormal.dispose();
      matVehicle.dispose();
      matDead.dispose();
      matHighlightKiller.dispose();
      matHighlightVictim.dispose();
      lineMatNormal.dispose();
      lineMatVehicle.dispose();
      lineMatDead.dispose();
      lineMatHighlightKiller.dispose();
      lineMatHighlightVictim.dispose();
      trailMat.dispose();
      deathMat.dispose();
      pingMat.dispose();
      terrainMat.dispose();
      terrainEdgeMat.dispose();

      if (trailLine) {
        (trailLine.geometry as THREE.BufferGeometry).dispose();
        trailLine = null;
      }

      if (terrainMesh) {
        (terrainMesh.geometry as THREE.BufferGeometry).dispose();
        terrainMesh = null;
      }

      if (terrainEdges) {
        (terrainEdges.geometry as THREE.BufferGeometry).dispose();
        terrainEdges = null;
      }

      for (const seg of deathMarkers.values()) {
        (seg.geometry as THREE.BufferGeometry).dispose();
      }

      for (const seg of pingMarkers.values()) {
        (seg.geometry as THREE.BufferGeometry).dispose();
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: 400, position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block', borderRadius: 8 }}
      />
    </div>
  );
}
