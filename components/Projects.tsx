import { ArrowUpRight, Star } from "lucide-react";
import { projects, type Project } from "@/data/resume";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import Section from "./Section";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-line bg-ink-850/50 px-2 py-1 font-mono text-[10.5px] tracking-wide text-fg-faint"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { name, role, org, link, linkLabel, description, status, featured } =
    project;

  // The whole card is a link when the project has a public URL.
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "panel card-hover group relative flex h-full flex-col rounded-2xl p-6 md:p-7",
        featured && "overflow-hidden",
        className,
      )}
    >
      {featured && (
        <span
          aria-hidden
          className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/12 blur-3xl"
        />
      )}

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={cn(
                "font-display font-semibold tracking-tight text-fg",
                featured ? "text-2xl md:text-3xl" : "text-lg",
              )}
            >
              {name}
            </h3>
            {featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                <Star className="size-2.5 fill-current" aria-hidden />
                Personal
              </span>
            )}
            {status && (
              <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-faint">
                {status}
              </span>
            )}
          </div>
          <p className="mt-1.5 font-mono text-[11.5px] text-fg-faint">
            {role} · {org}
          </p>
        </div>

        {link && (
          <span
            aria-hidden
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-fg-muted transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-ink-950"
          >
            <ArrowUpRight className="size-4" />
          </span>
        )}
      </div>

      <p
        className={cn(
          "relative mt-4 leading-relaxed text-fg-muted",
          featured ? "max-w-2xl text-[15px]" : "text-[13.5px]",
        )}
      >
        {description}
      </p>

      <div className="relative mt-auto">
        <Tags tags={project.tags} />

        {linkLabel && (
          <p className="mt-4 font-mono text-[11.5px] text-accent/80 transition-colors group-hover:text-accent">
            {linkLabel}
          </p>
        )}
      </div>
    </Wrapper>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      lead="Ten products across asset management, property, compliance, healthcare and supply chain."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.05}
            className="md:col-span-2 lg:col-span-3"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}

        {rest.map((project, i) => (
          <Reveal key={project.name} delay={Math.min(i, 5) * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
