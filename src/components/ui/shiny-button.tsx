"use client";

import type React from "react";
import { ArrowRight } from "lucide-react";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
}

const shinyButtonStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,500&display=swap");

  @property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @property --gradient-angle-offset {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @property --gradient-percent {
    syntax: "<percentage>";
    initial-value: 5%;
    inherits: false;
  }

  @property --gradient-shine {
    syntax: "<color>";
    initial-value: white;
    inherits: false;
  }

  .shiny-cta {
    --shiny-cta-bg: #000000;
    --shiny-cta-bg-subtle: #1a1818;
    --shiny-cta-fg: #ffffff;
    --shiny-cta-highlight: blue;
    --shiny-cta-highlight-subtle: #8484ff;
    --animation: gradient-angle linear infinite;
    --duration: 3s;
    --shadow-size: 2px;
    --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);

    isolation: isolate;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    outline-offset: 4px;
    padding: 1.25rem 2.5rem;
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    line-height: 1.2;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 360px;
    color: var(--shiny-cta-fg);
    text-decoration: none;
    white-space: nowrap;
    background: linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg)) padding-box,
      conic-gradient(
        from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
        transparent,
        var(--shiny-cta-highlight) var(--gradient-percent),
        var(--gradient-shine) calc(var(--gradient-percent) * 2),
        var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
        transparent calc(var(--gradient-percent) * 4)
      ) border-box;
    box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle);
    transition: var(--transition);
    transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine;
  }

  .shiny-cta::before,
  .shiny-cta::after,
  .shiny-cta span::before {
    content: "";
    pointer-events: none;
    position: absolute;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    translate: -50% -50%;
    z-index: -1;
  }

  .shiny-cta:active {
    translate: 0 1px;
  }

  .shiny-cta::before {
    --size: calc(100% - var(--shadow-size) * 3);
    --position: 2px;
    --space: calc(var(--position) * 2);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(
      circle at var(--position) var(--position),
      white calc(var(--position) / 4),
      transparent 0
    ) padding-box;
    background-size: var(--space) var(--space);
    background-repeat: space;
    mask-image: conic-gradient(
      from calc(var(--gradient-angle) + 45deg),
      black,
      transparent 10% 90%,
      black
    );
    border-radius: inherit;
    opacity: 0.4;
    z-index: -1;
  }

  .shiny-cta::after {
    --animation: shimmer linear infinite;
    width: 100%;
    aspect-ratio: 1;
    background: linear-gradient(
      -50deg,
      transparent,
      var(--shiny-cta-highlight),
      transparent
    );
    mask-image: radial-gradient(circle at bottom, transparent 40%, black);
    opacity: 0.6;
  }

  .shiny-cta span {
    z-index: 1;
  }

  .shiny-cta span::before {
    --size: calc(100% + 1rem);
    width: var(--size);
    height: var(--size);
    box-shadow: inset 0 -1ex 2rem 4px var(--shiny-cta-highlight);
    opacity: 0;
    transition: opacity var(--transition);
    animation: calc(var(--duration) * 1.5) breathe linear infinite;
  }

  .shiny-cta,
  .shiny-cta::before,
  .shiny-cta::after {
    animation: var(--animation) var(--duration),
      var(--animation) calc(var(--duration) / 0.4) reverse paused;
    animation-composition: add;
  }

  .shiny-cta:is(:hover, :focus-visible) {
    --gradient-percent: 20%;
    --gradient-angle-offset: 95deg;
    --gradient-shine: var(--shiny-cta-highlight-subtle);
  }

  .shiny-cta:is(:hover, :focus-visible),
  .shiny-cta:is(:hover, :focus-visible)::before,
  .shiny-cta:is(:hover, :focus-visible)::after {
    animation-play-state: running;
  }

  .shiny-cta:is(:hover, :focus-visible) span::before {
    opacity: 1;
  }

  @keyframes gradient-angle {
    to {
      --gradient-angle: 360deg;
    }
  }

  @keyframes shimmer {
    to {
      rotate: 360deg;
    }
  }

  @keyframes breathe {
    from, to {
      scale: 1;
    }
    50% {
      scale: 1.2;
    }
  }
`;

export function ShinyButton({
  children,
  onClick,
  className = "",
  style,
  href,
  type = "button",
  showArrow = false,
}: ShinyButtonProps) {
  const sharedProps = {
    className: `shiny-cta ${className}`.trim(),
    onClick,
    style,
  };

  return (
    <>
      <style>{shinyButtonStyles}</style>

      {href ? (
        <a {...sharedProps} href={href}>
          <span>{children}</span>
          {showArrow ? <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" /> : null}
        </a>
      ) : (
        <button {...sharedProps} type={type}>
          <span>{children}</span>
          {showArrow ? <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" /> : null}
        </button>
      )}
    </>
  );
}
