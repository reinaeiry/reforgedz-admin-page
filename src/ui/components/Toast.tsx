import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

export type ToastKind = 'info' | 'success' | 'warn' | 'error';
export type ToastEntry = { id: number; kind: ToastKind; text: string; ttlMs: number };

type Ctx = {
  push: (text: string, opts?: { kind?: ToastKind; ttlMs?: number }) => void;
};

const ToastContext = createContext<Ctx>({ push: () => {} });

export function useToast(): Ctx {
  return useContext(ToastContext);
}

// At most this many at once: a busy ticket SSE burst used to stack toasts
// without limit, and on a phone the stack is as wide as the screen.
const MAX_VISIBLE = 3;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastEntry[]>([]);
  // `let seq = 0` in the component body reset on every render while push's
  // useCallback([]) closed over the FIRST render's copy, so ids repeated: React
  // keys collided and the cleanup could remove a different toast than the one
  // that expired.
  const seqRef = useRef(0);

  const dismiss = useCallback((id: number) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const push = useCallback((text: string, opts?: { kind?: ToastKind; ttlMs?: number }) => {
    const id = (seqRef.current += 1);
    const entry: ToastEntry = { id, kind: opts?.kind || 'info', text, ttlMs: opts?.ttlMs ?? 6000 };
    setItems((prev) => [...prev, entry].slice(-MAX_VISIBLE));
    setTimeout(() => dismiss(id), entry.ttlMs);
  }, [dismiss]);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="toastStack" aria-live="polite">
        {items.map((t) => (
          // A toast is tappable to dismiss - on touch there was no way to clear
          // one, and the stack sits over the ticket composer's Send button.
          <button
            key={t.id}
            type="button"
            className={`toast toast-${t.kind}`}
            onClick={() => dismiss(t.id)}
            title="Dismiss"
          >
            {t.text}
          </button>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
