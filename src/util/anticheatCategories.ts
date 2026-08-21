// Mirrors INCIDENT_CATEGORIES' labels in server/lib/anticheat.js. Kept as a
// separate small constant rather than fetched from the API, since these are
// fixed category definitions, not per-request data.
export const INCIDENT_CATEGORY_LABELS: Record<string, string> = {
  wallbang: 'Line-of-sight blocked hit',
  godMode: 'Damage/health mismatch',
  aimSnap: 'Abnormal aim snap onto target',
  speedhack: 'Implausible movement speed',
  noclip: 'Position below terrain surface',
  infiniteAmmo: 'Ammo did not decrease across observed shots',
  instantReload: 'Magazine refilled faster than possible',
  restrictedItem: 'Restricted/admin-only item in inventory',
  interactRange: 'Interaction beyond plausible range',
  fallImmunity: 'No fall damage from a lethal-looking drop',
  combatLog: 'Disconnected shortly after combat',
};
