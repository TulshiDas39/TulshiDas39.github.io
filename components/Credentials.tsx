import { Award, BadgeCheck, ExternalLink, FileText } from "lucide-react";
import { credentials, type Credential } from "@/data/resume";
import Reveal from "./Reveal";
import Section from "./Section";

const kindIcon = {
  Certification: BadgeCheck,
  Publication: FileText,
  Achievement: Award,
} as const;

function CredentialCard({ item }: { item: Credential }) {
  const Icon = kindIcon[item.kind];

  return (
    <div className="panel card-hover flex h-full flex-col rounded-2xl p-6 md:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
          <Icon className="size-4.5" aria-hidden />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
          {item.kind}
        </span>
      </div>

      <h3 className="mt-5 font-display text-[17px] font-semibold leading-snug tracking-tight text-fg">
        {item.title}
      </h3>

      <p className="mt-2 text-sm text-fg-muted">{item.issuer}</p>

      <div className="mt-auto flex items-center justify-between gap-4 pt-5">
        <span className="font-mono text-[11px] text-fg-faint">{item.meta}</span>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent transition-opacity hover:opacity-75"
          >
            {item.linkLabel}
            <ExternalLink className="size-3" aria-hidden />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Credentials() {
  return (
    <Section
      id="credentials"
      index="05"
      title="Credentials"
      lead="Certified, published and recognised."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {credentials.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07} className="h-full">
            <CredentialCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
