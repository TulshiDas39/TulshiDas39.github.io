import { AppWindow, Cloud, GraduationCap, Users } from "lucide-react";
import { education, profile } from "@/data/resume";
import Reveal from "./Reveal";
import Section from "./Section";

const pillars = [
  {
    Icon: AppWindow,
    title: "Desktop that gets out of the way",
    body: "One Electron codebase to Windows, macOS and Linux — packaged with electron-builder and kept current through differential auto-updates.",
  },
  {
    Icon: Cloud,
    title: "Cloud-native delivery",
    body: "AWS and Azure workloads, containerised with Docker and shipped through Azure DevOps and Jenkins pipelines.",
  },
  {
    Icon: Users,
    title: "Lifting the team",
    body: "Mentoring developers, running code review and setting the patterns the rest of the codebase follows.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      title="About"
      lead="Six years turning enterprise requirements into software people actually rely on."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal>
          <p className="text-base leading-[1.85] text-fg-muted md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map(({ Icon, title, body }) => (
              <div key={title} className="panel card-hover rounded-2xl p-5">
                <Icon className="size-5 text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-[15px] font-semibold leading-snug text-fg">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-fg-faint">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="space-y-4">
          {/* Education */}
          <div className="panel rounded-2xl p-6">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="size-4 text-accent" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
                Education
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-fg">
              {education.degree}
            </h3>
            <a
              href={education.link}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-1.5 inline-block text-sm text-accent transition-opacity hover:opacity-75"
            >
              {education.school}
            </a>
            <p className="mt-1 font-mono text-xs text-fg-faint">
              {education.location} · {education.period}
            </p>
          </div>

          {/* Languages */}
          <div className="panel rounded-2xl p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
              Languages
            </span>
            <dl className="mt-4 space-y-3">
              {profile.languages.map((lang) => (
                <div
                  key={lang.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0"
                >
                  <dt className="font-display text-sm font-medium text-fg">
                    {lang.label}
                  </dt>
                  <dd className="font-mono text-xs text-fg-muted">
                    {lang.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
