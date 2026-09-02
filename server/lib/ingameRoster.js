// Who is actually on each server, derived from the game's own console log.
//
// BattleMetrics cannot answer this. It reports a player COUNT from the game query
// protocol, but enumerating players needs RCON - dead for us since Reforger 1.8. So the
// dashboard showed "No players online." on servers with 45 people on them, which is worse
// than showing nothing: an admin reasonably concludes the server is empty.
//
// The log does carry it. BattlEye prints a line per join and leave:
//
//   DEFAULT : BattlEye Server: 'Player #34 Goodfight (1.2.3.4:56789) connected'
//   DEFAULT : BattlEye Server: 'Player #34 Goodfight disconnected'
//
// Replaying those gives the current roster, and the engine's own `slots=15/100` on
// ServerImpl events is a free check that the replay is right.
//
// The address is part of the connect line, so a roster is PII. Callers must strip it for
// anyone without `viewIps` - see redactRoster().

const RE_BE = /BattlEye Server: '?Player #(\d+) (.+?) (connected|disconnected)/;
const RE_SLOTS = /slots=(\d+)\/(\d+)/;
// "Name (1.2.3.4:56789)" - the address is only present on the connect line.
const RE_ADDR = /^(.*?)\s*\((\d{1,3}(?:\.\d{1,3}){3}):(\d+)\)\s*$/;

function splitNameAddr(raw) {
  const m = RE_ADDR.exec(raw || '');
  if (!m) return { name: (raw || '').trim(), ip: null, port: null };
  return { name: m[1].trim(), ip: m[2], port: m[3] };
}

/**
 * Replay one console.log into the roster it implies.
 *
 * Slot numbers are reused as players cycle through, so a disconnect must only clear the
 * slot it names - keying on the slot and overwriting on connect handles that naturally.
 *
 * @returns {{players: Array, slots: {used:number,max:number}|null, consistent: boolean}}
 *   `consistent` compares the replay against the engine's own last slots figure. False
 *   means the log was truncated or rotated mid-session and the roster is a best effort.
 */
export function parseRoster(text) {
  const roster = new Map();
  let slots = null;
  for (const line of String(text || '').split('\n')) {
    const m = RE_BE.exec(line);
    if (m) {
      const [, slot, rawName, event] = m;
      if (event === 'connected') {
        roster.set(slot, { slot: Number(slot), ...splitNameAddr(rawName) });
      } else {
        roster.delete(slot);
      }
    }
    const s = RE_SLOTS.exec(line);
    if (s) slots = { used: Number(s[1]), max: Number(s[2]) };
  }
  const players = [...roster.values()].sort((a, b) => a.slot - b.slot);
  return {
    players,
    slots,
    consistent: slots ? players.length === slots.used : true,
  };
}

/** Drop addresses for viewers without the IP permission. */
export function redactRoster(players, canSeeIps) {
  if (canSeeIps) return players;
  return (players || []).map((p) => ({ slot: p.slot, name: p.name, ip: null, port: null }));
}
