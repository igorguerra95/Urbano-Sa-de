import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface CountUpMetricProps {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
}

export const CountUpMetric: React.FC<CountUpMetricProps> = ({
  value,
  suffix = '',
  label,
  detail,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const durationMs = 950;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      // Desaceleração suave cúbica
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-between border-t border-[hsl(var(--border))] pt-5"
    >
      <div>
        <div className="font-display text-4xl font-semibold tracking-tight text-[hsl(var(--primary-strong))] tabular-nums sm:text-5xl">
          {displayValue}
          {suffix}
        </div>
        <h3 className="mt-2 font-sans-body text-sm font-bold tracking-normal text-[hsl(var(--foreground))]">
          {label}
        </h3>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
        {detail}
      </p>
    </div>
  );
};
