// In-game mutes changed on this site also go to the ban controller, whose listeners keep each change in the
// chosen servers' mute files until every one of them has loaded it. The game reads its mute file only when it
// starts, and until then writes the file back from memory whenever a mute is added, lifted or runs out in game.
//
// These only build the controller's operations. The routes send them after writing the files themselves, and
// a failure to send never fails the edit.

const DEFAULT_REASON = 'No reason given';

// POST: the record just written, on these servers (panel volume uuids: the listeners name servers their own way).
export function addOp({ record, volumes, username }) {
  return {
    op: 'mute',
    uid: String(record.uid || '').toLowerCase(),
    name: String(record.name || ''),
    reason: String(record.reason || '').trim() || DEFAULT_REASON,
    duration: Math.max(0, Number(record.duration) || 0),
    servers: volumes,
    // an edited mute keeps the start it already had: that is what its time counts from
    started_at: Number(record.timestamp) || undefined,
    requested_by: username
  };
}

// PATCH: one operation per distinct edited entry. A player can carry a different mute on each server (muted in
// game at different times), and each keeps its own start.
export function editOps({ uid, edited, username }) {
  const groups = new Map();
  for (const { volume, record } of edited) {
    const key = JSON.stringify([record.timestamp, record.duration, record.reason, record.name]);
    if (!groups.has(key)) groups.set(key, { record, volumes: [] });
    groups.get(key).volumes.push(volume);
  }
  return [...groups.values()].map(({ record, volumes }) => addOp({ record: { ...record, uid }, volumes, username }));
}

// DELETE: lifted on every server asked, so a copy a server still holds in memory is not written back.
export function removeOp({ uid, name, volumes, username }) {
  return {
    op: 'unmute',
    uid: String(uid || '').toLowerCase(),
    name: String(name || ''),
    reason: 'Removed on the admin website',
    duration: 0,
    servers: volumes,
    requested_by: username
  };
}
