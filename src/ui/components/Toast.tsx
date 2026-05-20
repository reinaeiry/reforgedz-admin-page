import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type ToastKind = 'info' | 'success' | 'warn' | 'error';
export type ToastEntry = { id: number; kind: ToastKind; text: string; ttlMs: number };

type Ctx = {
  push: (text: string, opts?: { kind?: ToastKind; ttlMs?: number }) => void;
};

const ToastContext = createContext<Ctx>({ push: () => {} });

export function useToast(): Ctx {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastEntry[]>([]);
  let seq = 0;
  const push = useCallback((text: string, opts?: { kind?: ToastKind; ttlMs?: number }) => {
    const id = ++seq;
    const entry: ToastEntry = { id, kind: opts?.kind || 'info', text, ttlMs: opts?.ttlMs ?? 6000 };
    setItems((prev) => [...prev, entry]);
    setTimeout(() => setItems((prev) => prev.filter((x) => x.id !== id)), entry.ttlMs);
  }, []);
  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="toastStack" aria-live="polite">
        {items.map((t) => (
          <div key={t.id} className={`toast toast-${t.kind}`}>{t.text}</div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
