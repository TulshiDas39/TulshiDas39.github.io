"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown, Download, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa6";
import { coreTech, profile, socials, stats } from "@/data/resume";
import Counter from "./Counter";

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: FaGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: socials.stackoverflow, label: "Stack Overflow", Icon: FaStackOverflow },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div className="shell w-full">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16"
        >
          {/* ---------------- Left: the pitch ---------------- */}
          <div className="max-w-2xl">
            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-850/60 py-1.5 pl-2 pr-4 backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] tracking-wide text-fg-muted">
                Open to senior &amp; principal .NET roles
              </span>
            </motion.div>

            <motion.h1
              variants={rise}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            >
              <span className="block text-fg">{profile.name}</span>
              <span className="text-gradient mt-1 block">
                builds systems that hold up.
              </span>
            </motion.h1>

            <motion.p
              variants={rise}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg"
            >
              <span className="font-medium text-fg">{profile.role}</span> with
              6+ years shipping enterprise platforms on ASP.NET Core, MSSQL and
              the cloud — asset management, property portals, compliance and
              supply-chain systems used at scale.
            </motion.p>

            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-fg-faint"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-accent" aria-hidden />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <Mail className="size-3.5 text-accent" aria-hidden />
                {profile.email}
              </a>
            </motion.div>

            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03]"
              >
                <span className="relative z-10">Get in touch</span>
                <ArrowDown
                  className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </a>

              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-display text-sm font-medium text-fg transition-colors duration-300 hover:border-accent/50 hover:text-accent"
              >
                <Download className="size-4" aria-hidden />
                Download résumé
              </a>

              <div className="ml-1 flex items-center gap-2">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-line text-fg-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ---------------- Right: portrait / monogram ---------------- */}
          <motion.div
            variants={rise}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            // pr keeps the rotating ring and the right-hand chip inside the
            // page shell at 1024–1280, where the shell has no side margin.
            className="relative mx-auto hidden lg:block lg:pr-8 xl:pr-2"
          >
            <div className="relative size-[20rem] xl:size-[23rem]">
              {/*
                Rotating conic ring. The rotating element is a square, so its
                bounding box grows as it turns; the clipping parent keeps that
                out of the page's scrollable overflow.
              */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 overflow-hidden rounded-full"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, var(--color-accent) 80deg, var(--color-violet) 170deg, transparent 250deg)",
                    maskImage:
                      "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                    WebkitMaskImage:
                      "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                  }}
                />
              </div>

              <div className="panel absolute inset-0 grid place-items-center overflow-hidden rounded-full">
                {profile.photo ? (
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    priority
                    sizes="23rem"
                    className="object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-gradient font-display text-[6.5rem] font-bold leading-none tracking-tighter">
                      {profile.initials}
                    </div>
                    <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-fg-faint">
                      {profile.tagline.split(" & ")[0]}
                    </div>
                  </div>
                )}
              </div>

              {/* Floating credential chips */}
              <div className="panel absolute -left-8 top-10 rounded-xl px-3.5 py-2 font-mono text-[11px] text-fg-muted shadow-xl">
                <span className="text-accent">AWS</span> Certified
              </div>
              <div className="panel absolute -right-6 bottom-14 rounded-xl px-3.5 py-2 font-mono text-[11px] text-fg-muted shadow-xl">
                <span className="text-accent">6+</span> yrs .NET
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------------- Stats ---------------- */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="panel mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:mt-20 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-ink-950/30 px-5 py-6 text-center md:px-6 md:py-7"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold tracking-tight text-accent md:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* ---------------- Tech marquee ---------------- */}
      <div className="mask-edges absolute inset-x-0 bottom-0 hidden overflow-hidden border-t border-line py-4 md:block">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...coreTech, ...coreTech].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-xs uppercase tracking-[0.18em] text-fg-faint/70"
              aria-hidden={i >= coreTech.length}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
