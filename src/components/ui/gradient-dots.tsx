'use client';

import React from 'react';
import { motion } from 'framer-motion';

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  dotSize?: number;
  spacing?: number;
  duration?: number;
  colorCycleDuration?: number;
  backgroundColor?: string;
  gradientColors?: [string, string, string, string];
  animateHue?: boolean;
};

export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  colorCycleDuration = 6,
  backgroundColor = 'var(--background)',
  gradientColors = ['#ff8a4c', '#ff6a2e', '#ffb067', '#ff5a1f'],
  animateHue = true,
  className,
  ...props
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732;
  const [colorOne, colorTwo, colorThree, colorFour] = gradientColors;

  const animateConfig = animateHue
    ? {
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
        filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
      }
    : {
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
      };

  const transitionConfig = animateHue
    ? {
        backgroundPosition: {
          duration,
          ease: 'linear' as const,
          repeat: Number.POSITIVE_INFINITY,
        },
        filter: {
          duration: colorCycleDuration,
          ease: 'linear' as const,
          repeat: Number.POSITIVE_INFINITY,
        },
      }
    : {
        backgroundPosition: {
          duration,
          ease: 'linear' as const,
          repeat: Number.POSITIVE_INFINITY,
        },
      };

  return (
    <motion.div
      className={`absolute inset-0 ${className ?? ''}`.trim()}
      style={{
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, ${colorOne}, transparent 60%),
          radial-gradient(circle at 50% 50%, ${colorTwo}, transparent 60%),
          radial-gradient(circle at 50% 50%, ${colorThree}, transparent 60%),
          radial-gradient(ellipse at 50% 50%, ${colorFour}, transparent 60%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px,
          ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%
        `,
      }}
      animate={animateConfig}
      transition={transitionConfig}
      {...props}
    />
  );
}
