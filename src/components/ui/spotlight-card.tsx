import type React from 'react';

interface GlowCardProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue: '91 156 255',
  purple: '221 162 255',
  green: '113 255 190',
  red: '255 113 134',
  orange: '255 141 92',
} as const;

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96',
} as const;

const spotlightStyles = `
  [data-spotlight-card] {
    --glow-x: 50%;
    --glow-y: 50%;
    --glow-size: 220px;
    --glow-fill-opacity: 0;
    --glow-border-opacity: 0;
    --glow-blur-opacity: 0;
    position: relative;
    isolation: isolate;
  }

  [data-spotlight-card]::before,
  [data-spotlight-card]::after,
  [data-spotlight-card] > [data-spotlight-inner] {
    pointer-events: none;
    position: absolute;
    transition:
      opacity 220ms ease,
      transform 220ms ease;
  }

  [data-spotlight-card]::before,
  [data-spotlight-card]::after {
    content: "";
    border-radius: inherit;
  }

  [data-spotlight-card]::before {
    inset: 1px;
    z-index: 0;
    opacity: var(--glow-fill-opacity);
    background:
      radial-gradient(
        circle var(--glow-size) at var(--glow-x) var(--glow-y),
        rgb(var(--glow-rgb) / 0.18),
        transparent 58%
      );
  }

  [data-spotlight-card]::after {
    inset: -1px;
    z-index: 1;
    opacity: var(--glow-border-opacity);
    padding: 1px;
    background:
      radial-gradient(
        circle calc(var(--glow-size) * 0.9) at var(--glow-x) var(--glow-y),
        rgb(255 255 255 / 0.95),
        rgb(var(--glow-rgb) / 0.85) 16%,
        transparent 62%
      );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  [data-spotlight-card] > [data-spotlight-inner] {
    inset: -18px;
    z-index: 0;
    border-radius: inherit;
    opacity: var(--glow-blur-opacity);
    background:
      radial-gradient(
        circle calc(var(--glow-size) * 0.55) at var(--glow-x) var(--glow-y),
        rgb(var(--glow-rgb) / 0.34),
        transparent 68%
      );
    filter: blur(20px);
  }

  [data-spotlight-card]:hover {
    --glow-fill-opacity: 1;
    --glow-border-opacity: 1;
    --glow-blur-opacity: 1;
  }

  [data-spotlight-card]:hover::before,
  [data-spotlight-card]:hover::after,
  [data-spotlight-card]:hover > [data-spotlight-inner] {
    transform: scale(1.01);
  }
`;

function GlowCard({
  children,
  className = '',
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty('--glow-x', `${x.toFixed(2)}px`);
    event.currentTarget.style.setProperty('--glow-y', `${y.toFixed(2)}px`);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--glow-x', '50%');
    event.currentTarget.style.setProperty('--glow-y', '50%');
  };

  const sizeClasses = customSize ? '' : sizeMap[size];

  const inlineStyles = {
    '--glow-rgb': glowColorMap[glowColor],
    '--glow-size': customSize ? '240px' : size === 'lg' ? '260px' : size === 'sm' ? '180px' : '220px',
    width: width === undefined ? undefined : typeof width === 'number' ? `${width}px` : width,
    height: height === undefined ? undefined : typeof height === 'number' ? `${height}px` : height,
  } satisfies React.CSSProperties & Record<'--glow-rgb' | '--glow-size', string>;

  return (
    <>
      <style>{spotlightStyles}</style>
      <div
        data-spotlight-card
        className={`${sizeClasses} ${className}`.trim()}
        style={inlineStyles}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div data-spotlight-inner />
        {children}
      </div>
    </>
  );
}

export { GlowCard };
