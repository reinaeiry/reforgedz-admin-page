// Standalone harness for the replay timeline: renders it with synthetic data so
// the interaction can be exercised (and screenshotted at phone widths) without a
// staff login or live ingest.
//   npx vite  ->  http://localhost:5173/dev/timeline-harness.html
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReplayTimeline, type TimelineEvent } from '../src/ui/components/replay/ReplayTimeline';
import '../src/ui/styles.css';
import '../src/ui/replay.css';

const H = 3_600_000;
const START = 0;
const END = 12 * H + 47 * 60_000;              // ~12h47m, like a real EU1 buffer
const ANCHOR_RECEIVED_AT = Date.parse('2026-09-25T14:38:15Z');

const TYPES: TimelineEvent['type'][] = ['kill', 'death', 'aiKill', 'join', 'disconnect', 'restart', 'gmPing'];

function makeEvents(n: number): TimelineEvent[] {
  // Deterministic pseudo-random so screenshots are comparable between runs.
  let seed = 1337;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const out: TimelineEvent[] = [];
  for (let i = 0; i < n; i += 1) {
    // clump events so clustering and density are actually exercised
    const clump = Math.floor(rnd() * 14) * (END / 14);
    const tsMs = Math.min(END, Math.max(START, clump + rnd() * 40 * 60_000));
    const type = TYPES[Math.floor(rnd() * TYPES.length)];
    out.push({
      tsMs, type,
      title: `${type} #${i}`,
      subtitle: 'Synthetic event for the harness',
      focusPos: null, focusPlayerId: null, playerIds: [],
    });
  }
  return out.sort((a, b) => a.tsMs - b.tsMs);
}

function Harness() {
  const [currentTsMs, setCurrentTsMs] = useState(6 * H);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [live, setLive] = useState(false);
  const [seeks, setSeeks] = useState(0);
  const [jumps, setJumps] = useState(0);

  const allEvents = useMemo(() => makeEvents(900), []);
  const eventDots = useMemo(() => allEvents.filter((_, i) => i % 2 === 0), [allEvents]);

  const formatWallClock = (tsMs: number) =>
    new Date(ANCHOR_RECEIVED_AT + (tsMs - END)).toLocaleString(undefined, {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
    });

  return (
    <div style={{ minHeight: '100vh', background: '#0b0e13', color: '#e8ecf3', padding: 0 }}>
      <div style={{ padding: 16, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
        <h1 style={{ fontSize: 18, margin: '0 0 6px' }}>Replay timeline harness</h1>
        <div style={{ fontSize: 12, opacity: 0.7 }}>
          playhead {Math.round(currentTsMs)}ms · seeks committed to parent: {seeks} · marker jumps: {jumps} ·
          {' '}drag, wheel-zoom, pinch, arrows, , . + − 0
        </div>
      </div>

      {/* Mimics the replay page: the dock is absolutely positioned over the map */}
      <div style={{ position: 'relative', height: 'calc(100vh - 90px)', background:
        'repeating-linear-gradient(45deg, #11161f 0 20px, #0e131b 20px 40px)' }}>
        <div className="replayTimeline-dock">
          <ReplayTimeline
            scrubber={{ min: START, max: END, value: currentTsMs, disabled: false }}
            range={{ minTsMs: START, maxTsMs: END }}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            playbackSpeed={playbackSpeed}
            setPlaybackSpeed={setPlaybackSpeed}
            live={live}
            setLive={setLive}
            setCurrentTsMs={(v) => { setCurrentTsMs(v); setSeeks((n) => n + 1); }}
            allEvents={allEvents}
            eventDots={eventDots}
            wallClockAnchor={{ tsMs: END, receivedAt: ANCHOR_RECEIVED_AT }}
            formatWallClock={formatWallClock}
            onJumpToEvent={(ev) => { setCurrentTsMs(ev.tsMs); setJumps((n) => n + 1); }}
          />
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Harness />);
