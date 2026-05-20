import React from 'react';

type Props = {
  name?: string | null;
  avatarUrl?: string | null;
  size?: number;
  guid?: string | null;
};

function initials(name: string): string {
  const parts = name.replace(/[_.-]+/g, ' ').split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

// Cheap deterministic colour from a string — used for the initials chip
// background so two different players don't look identical.
function colourFor(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const hue = h % 360;
  return `hsl(${hue}, 55%, 32%)`;
}

export function DiscordAvatar({ name, avatarUrl, size = 28, guid }: Props) {
  const display = (name || guid || '?').toString();
  const seed = guid || display;
  if (avatarUrl) {
    return (
      <img
        className="bmAvatar"
        src={avatarUrl}
        alt={display}
        style={{ width: size, height: size, borderRadius: '50%' }}
        loading="lazy"
      />
    );
  }
  return (
    <span
      className="bmAvatar bmAvatar-initials"
      style={{
        width: size,
        height: size,
        background: colourFor(seed),
        fontSize: Math.round(size * 0.4),
        lineHeight: `${size}px`,
      }}
      aria-hidden="true"
    >
      {initials(display)}
    </span>
  );
}
