// Reproduces the replay page's layout - a map box with absolutely positioned
// panels above a timeline dock - so the clearance arithmetic can be measured.
// The page derives the panels' bottom from the dock's real height; this harness
// does the same, so an overlap here is an overlap there.
//   npx vite  ->  http://localhost:5199/dev/layout-harness.html
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReplayTimeline, type TimelineEvent } from '../src/ui/components/replay/ReplayTimeline';
import '../src/ui/styles.css';
import '../src/ui/replay.css';

const H = 3_600_000;
const END = 6 * H;

function Harness() {
  const [currentTsMs, setCurrentTsMs] = useState(3 * H);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [live, setLive] = useState(false);

  const [dockHeight, setDockHeight] = useState(160);
  // the real page shows at most one panel on a narrow screen, and none by default
  const [panel, setPanel] = useState<'players' | 'events' | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);
  const dockRef = useCallback((el: HTMLDivElement | null) => {
    roRef.current?.disconnect();
    roRef.current = null;
    if (!el) return;
    const ro = new ResizeObserver(() => setDockHeight(el.offsetHeight));
    ro.observe(el);
    roRef.current = ro;
    setDockHeight(el.offsetHeight);
  }, []);
  const panelBottom = dockHeight + 24;

  const events = useMemo<TimelineEvent[]>(() => {
    const out: TimelineEvent[] = [];
    for (let i = 0; i < 300; i += 1) {
      out.push({
        tsMs: (i / 300) * END,
        type: i % 3 === 0 ? 'kill' : i % 3 === 1 ? 'join' : 'restart',
        title: `Event ${i}`, subtitle: 'synthetic',
        focusPos: null, focusPlayerId: null, playerIds: [],
      });
    }
    return out;
  }, []);

  return (
    // the page's root: a flex column, so the map box takes what is left
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', background: '#0b0e13', color: '#e8ecf3' }}>
      <div className="row replayToolbar" id="toolbar" style={{ gap: 12, padding: 12, alignItems: 'center', flexShrink: 0 }}>
        <select className="input" style={{ minWidth: 240 }}><option>Official ReforgedZ Chernarus</option></select>
        <button className="button">Fetch whole history</button>
        <button className="button">Search item history</button>
        <input className="input" style={{ width: 160 }} placeholder="Your in-game name" />
        <button className="button">Spawn to myself</button>
      </div>

      <div style={{ width: '100%', flex: 1, minHeight: 0, padding: 12, boxSizing: 'border-box' }}>
        <div className="card" style={{ width: '100%', height: '100%', padding: 0, overflow: 'hidden' }}>
          <div id="mapBox" className="replayMapBox"
            style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
              ['--rp-dock-h']: `${dockHeight}px`,
              background: 'repeating-linear-gradient(45deg, #11161f 0 20px, #0e131b 20px 40px)' }}>

            <div className="replayPanelTabs" id="panelTabs">
              <button type="button" className={panel === 'players' ? 'is-on' : ''}
                onClick={() => setPanel((v) => (v === 'players' ? null : 'players'))}>Players (28)</button>
              <button type="button" className={panel === 'events' ? 'is-on' : ''}
                onClick={() => setPanel((v) => (v === 'events' ? null : 'events'))}>Events</button>
            </div>

            <div id="panelPlayers" className={`replayPanel${panel === 'players' ? '' : ' is-hidden'}`}
              style={{ position: 'absolute', top: 12, left: 12, bottom: panelBottom, width: 300, display: 'flex', flexDirection: 'column' }}>
              <div className="card replayPanel-card">Players panel — roster, search, sort</div>
            </div>

            <div id="panelEvents" className={`replayPanel${panel === 'events' ? '' : ' is-hidden'}`}
              style={{ position: 'absolute', top: 12, right: 12, bottom: panelBottom, width: 280, display: 'flex', flexDirection: 'column' }}>
              <div className="card replayPanel-card">Events panel — feed, filters</div>
            </div>

            <div className="replayTimeline-dock" ref={dockRef}>
              <ReplayTimeline
                scrubber={{ min: 0, max: END, value: currentTsMs, disabled: false }}
                range={{ minTsMs: 0, maxTsMs: END }}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                playbackSpeed={speed}
                setPlaybackSpeed={setSpeed}
                live={live}
                setLive={setLive}
                setCurrentTsMs={setCurrentTsMs}
                allEvents={events}
                eventDots={events}
                wallClockAnchor={{ tsMs: END, receivedAt: Date.parse('2026-09-26T08:00:00Z') }}
                formatWallClock={(ts) => new Date(Date.parse('2026-09-26T08:00:00Z') + (ts - END)).toLocaleTimeString()}
                onJumpToEvent={(ev) => setCurrentTsMs(ev.tsMs)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Harness />);
