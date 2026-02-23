import React from 'react';

export function HomePage() {
  return (
    <div className="container">
      <div className="stack">
        <h1 className="h1">Home</h1>

        <div className="card">
          <div className="stack">
            <div>
              <div className="label">Status</div>
              <div className="muted">Select a tool from the left sidebar.</div>
            </div>

            <div className="muted" style={{ fontSize: 12 }}>
              Replay Tool shows live snapshots and lets you scrub back in time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
