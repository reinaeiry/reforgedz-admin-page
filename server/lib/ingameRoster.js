// Who is actually on each server, derived from the game's own console log.
//
// BattleMetrics cannot answer this. It reports a player COUNT from the game query
// protocol, but enumerating players needs RCON - dead for us since Reforger 1.8. So the
// dashboard showed "No players online." on servers with 45 people on them, which is worse
// than showing nothing: an admin reasonably concludes the server is empty.
//
// Everything here keys on rplIdentity and carries the player's GUID. Names are display
// only and are never used to identify anyone - four separate accounts are called "six",
// so a name-based link eventually sends an admin to the wrong person, and there is no way
// to notice when it does.
//
// The engine writes the whole lifecycle against one rplIdentity:
//
//   RPL      : ServerImpl event: authenticating (identity=0x15, address=..., slots=22/100)
//   BACKEND  : Authenticated player: rplIdentity=0x15 identityId=<guid> name=Inflaris
//   RPL      : ServerImpl event: connected (identity=0x15)
//   DEFAULT  : BattlEye Server: Adding player identity=0x15, name='Inflaris'
//   ...
//   DEFAULT  : BattlEye Server: Disconnect player identity=0x15
//   RPL      : ServerImpl event: disconnected (identity=0x15, slots=21/100)
//
// rplIdentity is reused as players cycle - 0x15 belonged to two different people within a
// minute in a real log - so authenticate overwrites and disconnect clears that key only.
//
// `slots=N/M` is the engine's own count, used as a free check that the replay is right.

const RE_AUTHED = /Authenticated player: rplIdentity=(0x[0-9A-Fa-f]+) identityId=([0-9a-fA-F-]{36}) name=(.*?)\s*$/;
const RE_BE_DISCONNECT = /BattlEye Server: Disconnect player identity=(0x[0-9A-Fa-f]+)/;
const RE_RPL_DISCONNECT = /ServerImpl event: disconnected \(identity=(0x[0-9A-Fa-f]+)/;
const RE_SLOTS = /slots=(\d+)\/(\d+)/;

/**
 * Replay one console.log into the roster it implies.
 *
 * @returns {{players: Array<{identity:string,guid:string,name:string}>,
 *            slots: {used:number,max:number}|null, consistent: boolean}}
 *   `consistent` compares the replay against the engine's own last slots figure. False
 *   means the log was rotated or truncated mid-session, so the roster is a best effort -
 *   surfaced rather than hidden, because silently under-reporting who is online is the
 *   exact failure this exists to fix.
 */
export function parseRoster(text) {
  const roster = new Map();
  let slots = null;
  for (const line of String(text || '').split('\n')) {
    const authed = RE_AUTHED.exec(line);
    if (authed) {
      const [, identity, guid, name] = authed;
      roster.set(identity, { identity, guid: guid.toLowerCase(), name: name.trim() });
    } else {
      const gone = RE_BE_DISCONNECT.exec(line) || RE_RPL_DISCONNECT.exec(line);
      if (gone) roster.delete(gone[1]);
    }
    const s = RE_SLOTS.exec(line);
    if (s) slots = { used: Number(s[1]), max: Number(s[2]) };
  }
  const players = [...roster.values()].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  return {
    players,
    slots,
    consistent: slots ? players.length === slots.used : true,
  };
}
