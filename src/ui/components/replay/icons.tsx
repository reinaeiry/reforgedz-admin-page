import React from 'react';

/**
 * Inline SVG icons for the replay UI.
 *
 * These replace Unicode glyphs (⏮ ⏭ ❚❚ ◎ ⟳ …). Those are emoji codepoints on
 * several platforms: iOS renders ⏮/⏭ as its own blue emoji, so the transport
 * came out in Apple's colours instead of ours, at whatever size the font felt
 * like. SVG inherits `currentColor` and the button's font-size, so the icons
 * match the theme everywhere and scale with the control.
 *
 * House style: 16px box, 1.75 stroke, round caps and joins, no fill except
 * where a solid shape reads better at small sizes (play, record).
 */

type IconProps = {
  size?: number;
  className?: string;
};

function svgProps(size: number, className?: string) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 16 16',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
    className,
    style: { display: 'block', flex: '0 0 auto' },
  };
}

export function IconPlay({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M4.5 2.9v10.2l8-5.1-8-5.1Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPause({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="4" y="3" width="2.75" height="10" rx="0.9" fill="currentColor" stroke="none" />
      <rect x="9.25" y="3" width="2.75" height="10" rx="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSkipBack({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M12.5 3.4v9.2L5.4 8l7.1-4.6Z" fill="currentColor" stroke="none" />
      <path d="M3.4 3.2v9.6" />
    </svg>
  );
}

export function IconSkipForward({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M3.5 3.4v9.2L10.6 8 3.5 3.4Z" fill="currentColor" stroke="none" />
      <path d="M12.6 3.2v9.6" />
    </svg>
  );
}

/** Solid dot — the LIVE indicator. */
export function IconRecord({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="8" cy="8" r="3.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconChevronUp({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M3.6 10.2 8 5.8l4.4 4.4" />
    </svg>
  );
}

export function IconChevronDown({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M3.6 5.8 8 10.2l4.4-4.4" />
    </svg>
  );
}

/** Crosshair — GM ping, and "follow this player". */
export function IconTarget({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="8" cy="8" r="4.2" />
      <path d="M8 1.6v2M8 12.4v2M1.6 8h2M12.4 8h2" />
    </svg>
  );
}

/** Filled crosshair — actively following. */
export function IconTargetLocked({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="8" cy="8" r="4.2" />
      <circle cx="8" cy="8" r="1.7" fill="currentColor" stroke="none" />
      <path d="M8 1.6v2M8 12.4v2M1.6 8h2M12.4 8h2" />
    </svg>
  );
}

/** Arrow leaving a box — export to Discord. */
export function IconExport({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M9 3H3.8v9.2H13V7" />
      <path d="M13.2 2.8 7.6 8.4M9.6 2.8h3.6v3.6" />
    </svg>
  );
}

export function IconSearch({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="7.2" cy="7.2" r="4.1" />
      <path d="m10.4 10.4 3 3" />
    </svg>
  );
}

export function IconSettings({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="8" cy="8" r="2.1" />
      <path d="M12.6 9.6a1.2 1.2 0 0 0 .24 1.32l.05.04a1.4 1.4 0 1 1-2 2l-.04-.05a1.2 1.2 0 0 0-1.32-.24 1.2 1.2 0 0 0-.73 1.1v.12a1.4 1.4 0 1 1-2.8 0v-.06a1.2 1.2 0 0 0-.78-1.1 1.2 1.2 0 0 0-1.32.24l-.04.05a1.4 1.4 0 1 1-2-2l.05-.04a1.2 1.2 0 0 0 .24-1.32 1.2 1.2 0 0 0-1.1-.73H1.8a1.4 1.4 0 1 1 0-2.8h.06a1.2 1.2 0 0 0 1.1-.78 1.2 1.2 0 0 0-.24-1.32l-.05-.04a1.4 1.4 0 1 1 2-2l.04.05a1.2 1.2 0 0 0 1.32.24h.06a1.2 1.2 0 0 0 .72-1.1V1.8a1.4 1.4 0 1 1 2.8 0v.06a1.2 1.2 0 0 0 .73 1.1 1.2 1.2 0 0 0 1.32-.24l.04-.05a1.4 1.4 0 1 1 2 2l-.05.04a1.2 1.2 0 0 0-.24 1.32v.06a1.2 1.2 0 0 0 1.1.72h.12a1.4 1.4 0 1 1 0 2.8h-.06a1.2 1.2 0 0 0-1.1.73Z" />
    </svg>
  );
}

/** Two blades crossed — a kill. Reads at 12px where a skull does not. */
export function IconKill({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M3.2 3.2 12.8 12.8M12.8 3.2 3.2 12.8" />
    </svg>
  );
}

export function IconArrowIn({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M2.4 8h7.8M7.4 5.2 10.2 8l-2.8 2.8M13.6 2.8v10.4" />
    </svg>
  );
}

export function IconArrowOut({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M13.6 8H5.8M8.8 5.2 6 8l2.8 2.8M2.4 2.8v10.4" />
    </svg>
  );
}

export function IconRestart({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M13.2 8a5.2 5.2 0 1 1-1.6-3.75" />
      <path d="M13.4 2.2v3.1h-3.1" />
    </svg>
  );
}

export function IconWarning({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M8 2.4 14.4 13H1.6L8 2.4Z" />
      <path d="M8 6.6v3M8 11.4h.01" />
    </svg>
  );
}

export function IconClose({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export function IconCopy({ size = 16, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="5.6" y="5.6" width="7.6" height="7.6" rx="1.4" />
      <path d="M10.4 5.6V4.2a1.4 1.4 0 0 0-1.4-1.4H4.2a1.4 1.4 0 0 0-1.4 1.4v4.8a1.4 1.4 0 0 0 1.4 1.4h1.4" />
    </svg>
  );
}
