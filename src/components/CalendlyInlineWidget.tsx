import { useEffect, useRef } from 'react';

type CalendlyInlineWidgetProps = {
  url: string;
  className?: string;
  minWidth?: number;
  height?: number;
};

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

function CalendlyInlineWidget({
  url,
  className,
  minWidth = 320,
  height = 700,
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;

    const initWidget = () => {
      if (disposed || !containerRef.current || !window.Calendly) {
        return;
      }

      containerRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
        resize: true,
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );

    if (window.Calendly) {
      initWidget();
      return () => {
        disposed = true;
      };
    }

    const handleLoad = () => initWidget();

    if (existingScript) {
      existingScript.addEventListener('load', handleLoad);

      return () => {
        disposed = true;
        existingScript.removeEventListener('load', handleLoad);
      };
    }

    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.addEventListener('load', handleLoad);
    document.body.appendChild(script);

    return () => {
      disposed = true;
      script.removeEventListener('load', handleLoad);
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
    />
  );
}

export default CalendlyInlineWidget;
