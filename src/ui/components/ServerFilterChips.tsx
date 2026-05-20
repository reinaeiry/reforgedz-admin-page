import React from 'react';
import { type BmDashServer } from '../../util/bmApi';
import { load, save, toggle, type ServerSelection } from '../../util/serverFilter';

type Props = {
  servers: BmDashServer[];
  value?: ServerSelection;
  onChange?: (sel: ServerSelection) => void;
};

export function ServerFilterChips({ servers, value, onChange }: Props) {
  const [sel, setSel] = React.useState<ServerSelection>(value ?? load());

  React.useEffect(() => {
    if (value !== undefined) setSel(value);
  }, [value]);

  function set(next: ServerSelection) {
    setSel(next);
    save(next);
    onChange?.(next);
  }

  function toggleOne(id: string) {
    set(toggle(sel, id));
  }

  const allChecked = sel.length === 0;
  return (
    <div className="bmServerChips">
      <button
        className={`bmServerChip ${allChecked ? 'on' : ''}`}
        onClick={() => set([])}
        title="Show all servers"
        type="button"
      >
        All
      </button>
      {servers.map((s) => {
        const on = sel.includes(s.bmServerId);
        const region = s.region || 'unknown';
        return (
          <button
            key={s.bmServerId}
            type="button"
            className={`bmServerChip bmServerChip-${region.toLowerCase()} ${on ? 'on' : ''}`}
            onClick={() => toggleOne(s.bmServerId)}
            title={`${s.name} · ${s.ip}:${s.port}`}
          >
            {s.tag || s.name}
          </button>
        );
      })}
    </div>
  );
}
