import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa6";
import { profile, socials } from "@/data/resume";
import Reveal from "./Reveal";

const channels = [
  {
    Icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    Icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: FaGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: socials.stackoverflow, label: "Stack Overflow", Icon: FaStackOverflow },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <div className="panel relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-14 md:py-20">
            {/* Ambient glow behind the call to action. */}
            <span
              aria-hidden
              className="absolute -top-24 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[110px]"
            />

            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                06 — Contact
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-semibold leading-[1.15] tracking-tight text-fg md:text-5xl">
                Have a system that needs to{" "}
                <span className="text-gradient-accent">scale</span>?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-muted">
                I&rsquo;m open to senior and principal .NET roles, and to
                consulting on architecture, cloud migration and platform
                modernisation. The fastest way to reach me is email.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03]"
              >
                {profile.email}
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>

              {/* Channels */}
              <dl className="mx-auto mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-3">
                {channels.map(({ Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="bg-ink-950/40 px-5 py-6 text-center"
                  >
                    <dt className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
                      <Icon className="size-3.5 text-accent" aria-hidden />
                      {label}
                    </dt>
                    <dd className="mt-2.5 break-words text-sm text-fg">
                      {href ? (
                        <a
                          href={href}
                          className="transition-colors hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex items-center justify-center gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid size-12 place-items-center rounded-full border border-line text-fg-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    <Icon className="size-4.5" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
