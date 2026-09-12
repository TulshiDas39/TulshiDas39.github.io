"use client";

import { useEffect, useRef } from "react";
import { animate, useReducedMotion } from "motion/react";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
};

/**
 * Counts up to `value` on mount.
 *
 * The final value is what gets rendered into the static HTML, so the number is
 * right for crawlers and with JavaScript disabled; the animation only ever
 * runs forward from zero to that same number, and the node is left holding the
 * exact value if it is interrupted.
 */
export default function Counter({
  value,
  suffix = "",
  duration = 1.6,
  delay = 0.3,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduceMotion) return;

    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
      onComplete: () => {
        node.textContent = `${value}${suffix}`;
      },
    });

    return () => {
      controls.stop();
      node.textContent = `${value}${suffix}`;
    };
  }, [value, suffix, duration, delay, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
