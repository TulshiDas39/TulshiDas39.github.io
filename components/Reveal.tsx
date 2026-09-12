"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Render as a different element when the wrapper must stay semantic. */
  as?: "div" | "li" | "article" | "section";
};

/**
 * Fades content up the first time it scrolls into view. Respects
 * prefers-reduced-motion via the `reducedMotion` setting on MotionConfig
 * in the root layout.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
