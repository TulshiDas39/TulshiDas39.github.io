"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Client boundary for Motion's global config. `reducedMotion="user"` makes every
 * animation in the tree honour the OS "reduce motion" setting automatically.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
