// Shared shapes for the replay map layers. These used to live in
// ReplayMap3D.tsx — a 3D renderer that was never mounted anywhere, so the whole
// three.js component (and dependency) survived purely as a home for these type
// declarations. The types are the part everything actually uses: ReplayMap2D
// renders from them and ReplayToolPage builds them.

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
  worldFile?: string;
};

export type TownLabel = {
  name: string;
  pos: { x: number; y: number; z: number };
};

export type VehicleMarker = {
  entityId: string;
  name?: string;
  pos: { x: number; y: number; z: number };
  destroyed?: boolean;
  occupied?: boolean;
};
