import { Building2 } from "lucide-react";
import { experience } from "@/data/resume";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      lead="From internship trainee to principal engineer, in three companies."
    >
      <ol className="relative">
        {/* Timeline spine — hidden on small screens where cards stack full-width. */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent md:block"
        />

        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={job.company}
            delay={i * 0.08}
            className="relative pb-10 last:pb-0 md:pl-12"
          >
            {/* Node */}
            <span
              aria-hidden
              className="absolute left-0 top-1.5 hidden size-[15px] rounded-full border-2 border-accent bg-ink-950 md:block"
            >
              <span className="absolute inset-[3px] rounded-full bg-accent" />
            </span>

            <article className="panel card-hover rounded-2xl p-6 md:p-7">
              <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-fg md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-2 text-sm text-accent">
                    <Building2 className="size-3.5" aria-hidden />
                    {job.company}
                    <span className="text-fg-faint">· {job.location}</span>
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-line bg-ink-850/60 px-3 py-1.5 font-mono text-[11px] tracking-wide text-fg-muted">
                  {job.period}
                </span>
              </header>

              <ul className="mt-6 space-y-3">
                {job.highlights.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-[14px] leading-relaxed text-fg-muted"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.6em] size-1.5 rounded-full bg-accent/70"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {job.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-accent/8 px-2.5 py-1 font-mono text-[11px] text-accent/90 ring-1 ring-inset ring-accent/20"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
