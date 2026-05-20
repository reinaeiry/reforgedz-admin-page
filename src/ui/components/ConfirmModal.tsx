import React from 'react';

type Props = {
  title: string;
  body: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  busy?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmModal({ title, body, confirmLabel = 'Confirm', cancelLabel = 'Cancel', danger, busy, onConfirm, onCancel }: Props) {
  return (
    <div className="modalBackdrop" onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}>
      <div className="modalCard">
        <header className="modalHeader"><h3>{title}</h3></header>
        <div className="modalBody">{body}</div>
        <footer className="modalFooter">
          <button className="btn" onClick={onCancel} disabled={busy}>{cancelLabel}</button>
          <button
            className={danger ? 'btn btn-danger' : 'btn btn-primary'}
            onClick={onConfirm}
            disabled={busy}
          >
            {busy ? 'Working…' : confirmLabel}
          </button>
        </footer>
      </div>
    </div>
  );
}
