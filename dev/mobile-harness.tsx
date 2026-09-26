// Harness for the app-wide touch/small-screen rules in styles.css. Reproduces the
// conditions the audit found: a wide table inside `.main` (which clips horizontal
// overflow), form controls carrying inline font sizes, and the toast stack.
//   npx vite  ->  http://localhost:5199/dev/mobile-harness.html
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastProvider, useToast } from '../src/ui/components/Toast';
import '../src/ui/styles.css';
import '../src/ui/bm-styles.css';

function Demo() {
  const toast = useToast();
  return (
    <div className="appShell">
      <main className="main scroll">
        <div className="container">
          <div className="card">
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Wide table (7 cols, actions last)</div>
            <table className="bmTable" id="demoTable">
              <thead>
                <tr>
                  <th>Player</th><th>GUID</th><th>IP</th><th>Reason</th>
                  <th>Server</th><th>Expires</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2].map((i) => (
                  <tr key={i}>
                    <td>SomePlayerName{i}</td>
                    <td><code className="bmGuid">7f46fe2d-b705-43dd-8ebe-20bf23f6f95e</code></td>
                    <td>203.0.113.{10 + i}</td>
                    <td>Cheating - aimbot detected by anticheat</td>
                    <td>EU1</td>
                    <td>2026-10-0{i + 1}</td>
                    <td><button className="btn btn-sm" id={i === 0 ? 'firstAction' : undefined}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card" style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Controls</div>
            <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
              <input className="input" id="plainInput" placeholder="Search players…" />
              {/* the replay page styles several inputs inline at 11px */}
              <input className="input" id="inlineInput" style={{ fontSize: 11 }} placeholder="inline 11px" />
              <select className="input" id="sel"><option>1×</option></select>
              <button className="button" id="btn">Button</button>
              <button className="btn btn-sm" id="btnSm">Small</button>
              <span className="gm-dot" id="gmDot" />
              <button className="button" onClick={() => toast.push('Saved. Tap me to dismiss.', { kind: 'success' })}>
                Push toast
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <ToastProvider><Demo /></ToastProvider>,
);
