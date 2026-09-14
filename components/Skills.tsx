import {
  AppWindow,
  Cloud,
  Code2,
  Database,
  Layers,
  Monitor,
  Network,
  Settings2,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups, type SkillIcon } from "@/data/resume";
import Reveal from "./Reveal";
import Section from "./Section";

const icons: Record<SkillIcon, LucideIcon> = {
  appWindow: AppWindow,
  code: Code2,
  layers: Layers,
  monitor: Monitor,
  network: Network,
  database: Database,
  cloud: Cloud,
  settings: Settings2,
  sparkles: Sparkles,
  wrench: Wrench,
  users: Users,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      title="Skills"
      lead="The toolkit — languages, frameworks, data stores and the practices around them."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];

          return (
            <Reveal key={group.title} delay={Math.min(i, 5) * 0.05}>
              <div className="panel card-hover flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="font-display text-[15px] font-semibold leading-tight tracking-tight text-fg">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-ink-850/50 px-2.5 py-1.5 text-[12.5px] text-fg-muted transition-colors hover:border-accent/30 hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
