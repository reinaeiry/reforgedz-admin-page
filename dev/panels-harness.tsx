// Harness for the replay side panels with synthetic data, so the feed, the NOW
// divider, follow mode, filtering, windowing and keyboard nav can be exercised
// without a staff login or a live server.
//   npx vite  ->  http://localhost:5199/dev/panels-harness.html
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReplayEventsPanel, type AcFlagRow } from '../src/ui/components/replay/ReplayEventsPanel';
import { ReplayPlayersPanel } from '../src/ui/components/replay/ReplayPlayersPanel';
import type { TimelineEvent } from '../src/ui/components/replay/ReplayTimeline';
import type { ReplayPlayer } from '../src/util/api';
import '../src/ui/styles.css';
import '../src/ui/replay.css';

const H = 3_600_000;
const START = 0;
const END = 6 * H;
const ANCHOR = Date.parse('2026-09-26T02:00:00Z');

const TYPES: TimelineEvent['type'][] = ['kill', 'death', 'aiKill', 'join', 'disconnect', 'restart', 'gmPing'];
const NAMES = ['Osmodium', 'M@tt', 'SirArtical', 'Bonzi', 'Luigi', 'Nattii', 'Modest', 'Chad', 'Eiry', 'Ghost'];

function makeEvents(n: number): TimelineEvent[] {
  let seed = 99;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const out: TimelineEvent[] = [];
  for (let i = 0; i < n; i += 1) {
    const type = TYPES[Math.floor(rnd() * TYPES.length)];
    const a = NAMES[Math.floor(rnd() * NAMES.length)];
    const b = NAMES[Math.floor(rnd() * NAMES.length)];
    const tsMs = Math.floor(rnd() * END);
    out.push({
      tsMs,
      type,
      title: type === 'kill' ? `${a} killed ${b}`
        : type === 'death' ? `${a} died`
        : type === 'aiKill' ? `${a} killed a zombie`
        : type === 'join' ? `${a} joined`
        : type === 'disconnect' ? `${a} left`
        : type === 'restart' ? 'Server restarted'
        : `GM ping by ${a}`,
      subtitle: `${Math.round(rnd() * 8000)}, ${Math.round(rnd() * 8000)}`,
      focusPos: { x: rnd() * 8000, y: 0, z: rnd() * 8000 },
      focusPlayerId: Math.floor(rnd() * NAMES.length),
      playerIds: [Math.floor(rnd() * NAMES.length)],
    });
  }
  return out.sort((x, y) => x.tsMs - y.tsMs);
}

function Harness() {
  const [currentTsMs, setCurrentTsMs] = useState(3 * H);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [offset, setOffset] = useState(10);
  const [playerFilterId, setPlayerFilterId] = useState<number | null>(null);
  const [jumps, setJumps] = useState(0);
  const [pings, setPings] = useState(0);

  const [playerSearch, setPlayerSearch] = useState('');
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
  const [attachedPlayerId, setAttachedPlayerId] = useState<number | null>(null);
  const [gotoCoords, setGotoCoords] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // ?n=50000 to stress the windowing and the 5,000-row cap
  const eventCount = useMemo(() => {
    const raw = Number(new URLSearchParams(window.location.search).get('n'));
    return Number.isFinite(raw) && raw >= 0 ? Math.min(200000, Math.floor(raw)) : 4000;
  }, []);
  const events = useMemo(() => makeEvents(eventCount), [eventCount]);
  const eventKeyOf = (ev: { tsMs: number; type: string; title: string; subtitle?: string }) =>
    `${ev.tsMs}|${ev.type}|${ev.title}|${ev.subtitle || ''}`;

  const playerCount = useMemo(() => {
    const raw = Number(new URLSearchParams(window.location.search).get('p'));
    return Number.isFinite(raw) && raw >= 0 ? Math.min(NAMES.length, Math.floor(raw)) : NAMES.length;
  }, []);
  const players: ReplayPlayer[] = useMemo(() => NAMES.slice(0, playerCount).map((name, i) => ({
    playerId: i,
    name,
    identityId: `id-${i}`,
    riskScore: (i * 13) % 100,
    confidence: (i * 7) % 100,
    highestSeverity: i % 4 === 0 ? 'high' : i % 3 === 0 ? 'medium' : i % 5 === 0 ? 'low' : null,
    flaggedCount: i % 4 === 0 ? i : 0,
  })), [playerCount]);
  const filteredPlayers = useMemo(() => {
    const q = playerSearch.trim().toLowerCase();
    if (!q) return players;
    return players.filter((p) => p.name.toLowerCase().includes(q) || String(p.playerId).includes(q));
  }, [players, playerSearch]);
  const placedIds = useMemo(() => new Set(players.filter((p) => p.playerId % 3 !== 0).map((p) => p.playerId)), [players]);

  const acFlags: AcFlagRow[] = useMemo(() => [
    { id: 'a1', name: 'Speed', note: '48 m/s on foot', severity: 'CRITICAL', tsMs: 2 * H, x: 100, y: 0, z: 200 },
    { id: 'a2', name: 'Wallbang', note: 'through 3 walls', severity: 'WARN', tsMs: 4 * H, x: 300, y: 0, z: 400 },
  ], []);

  const formatWallClock = (tsMs: number) =>
    new Date(ANCHOR + tsMs).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: '#0b0e13', color: '#e8ecf3' }}>
      <div style={{ padding: 8, fontSize: 12, fontFamily: 'ui-monospace, monospace', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <span id="stats">playhead {Math.round(currentTsMs / 1000)}s · jumps {jumps} · pings {pings} · selectedPlayer {String(selectedPlayerId)}</span>
        <label>
          scrub{' '}
          <input id="scrub" type="range" min={START} max={END} value={currentTsMs}
            onChange={(e) => setCurrentTsMs(Number(e.target.value))} style={{ width: 240 }} />
        </label>
      </div>

      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexWrap: 'wrap', gap: 12, padding: 12, overflow: 'auto', background:
        'repeating-linear-gradient(45deg, #11161f 0 20px, #0e131b 20px 40px)' }}>
        <div id="playersPanel" className="card" style={{ flex: '1 1 320px', minWidth: 0, maxHeight: '100%', padding: 10, background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.14)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <ReplayPlayersPanel
            players={filteredPlayers}
            totalPlayers={players.length}
            placedIds={placedIds}
            selectedPlayerId={selectedPlayerId}
            attachedPlayerId={attachedPlayerId}
            onSelect={(id) => setSelectedPlayerId(id)}
            onToggleFollow={(id) => setAttachedPlayerId((v) => (v === id ? null : id))}
            onOpenProfile={() => { /* navigation is the page's job */ }}
            identityIdOf={(id) => players.find((p) => p.playerId === id)?.identityId}
            search={playerSearch}
            setSearch={setPlayerSearch}
            gotoCoords={gotoCoords}
            setGotoCoords={setGotoCoords}
            onGoto={() => { /* the page focuses the map */ }}
            severityClassOf={() => 'badge'}
            settingsOpen={settingsOpen}
            setSettingsOpen={setSettingsOpen}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            settings={<div style={{ fontSize: 11 }}>(the page's display checkboxes render here)</div>}
            detail={selectedPlayerId !== null ? <div style={{ fontSize: 11 }}>(the page's selected-player detail renders here)</div> : null}
          />
        </div>

        <div id="eventsPanel" className="card" style={{ flex: '1 1 340px', minWidth: 0, maxHeight: '100%', padding: 10, background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.14)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <ReplayEventsPanel
            events={events}
            players={players.map((p) => ({ playerId: p.playerId, name: p.name }))}
            currentTsMs={currentTsMs}
            recordingStartMs={START}
            formatWallClock={formatWallClock}
            selectedKey={selectedKey}
            eventKeyOf={eventKeyOf}
            onSelect={(key, ev) => { setSelectedKey(key); setCurrentTsMs(ev.tsMs); setJumps((n) => n + 1); }}
            offsetSeconds={offset}
            setOffsetSeconds={setOffset}
            playerFilterId={playerFilterId}
            setPlayerFilterId={setPlayerFilterId}
            acFlags={acFlags}
            showAnticheat
            onInvestigateAc={() => { /* the page focuses the flag */ }}
            canAct
            onPing={() => setPings((n) => n + 1)}
            onExport={() => { /* the page posts to Discord */ }}
            isPlaying={false}
            live={false}
          />
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Harness />);
