import type React from 'react';

const CTA_HIGHLIGHT_VAR = '--shiny-cta-highlight' as const;
const CTA_HIGHLIGHT_SUBTLE_VAR = '--shiny-cta-highlight-subtle' as const;

export const orangeShinyButtonStyle = {
  [CTA_HIGHLIGHT_VAR]: '#ff5a1f',
  [CTA_HIGHLIGHT_SUBTLE_VAR]: '#ff8a61',
  padding: '0.95rem 2rem',
  fontSize: '1rem',
} satisfies React.CSSProperties &
  Record<typeof CTA_HIGHLIGHT_VAR | typeof CTA_HIGHLIGHT_SUBTLE_VAR, string>;
