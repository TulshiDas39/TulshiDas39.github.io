import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
};

/** Shared section shell: numbered eyebrow, headline, optional lead, content. */
export default function Section({
  id,
  index,
  title,
  lead,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="shell">
        <Reveal className="mb-10 md:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent">
              {index}
            </span>
            <span className="h-px w-10 bg-accent/40" aria-hidden />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              {title}
            </span>
          </div>

          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.15] tracking-tight text-fg md:text-[2.75rem]">
            {lead ?? title}
          </h2>
        </Reveal>

        {children}
      </div>
    </section>
  );
}
