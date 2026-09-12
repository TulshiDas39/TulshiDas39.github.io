"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function Nav() {
  // Empty means "in the hero" — no nav item is highlighted.
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll-spy: the section nearest the top of the viewport wins.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      // The band sits just under the header so a section counts as "active"
      // once its heading reaches the top third of the screen.
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Back in the hero: drop the highlight instead of leaving the last
      // section lit, which the observer alone would do.
      if (window.scrollY < window.innerHeight * 0.4) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
      style={{ height: "var(--header-h)" }}
    >
      <div className="shell flex h-full items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="relative grid size-9 shrink-0 place-items-center rounded-xl border border-line-strong bg-ink-850 font-display text-sm font-bold tracking-tight text-accent transition-colors duration-300 group-hover:border-accent/50">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-fg sm:block">
            {profile.shortName}
            <span className="ml-1.5 font-mono text-[11px] font-normal text-fg-faint">
              .NET
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:block" aria-label="Section navigation">
          <ul className="panel flex items-center gap-1 rounded-full p-1">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-300",
                      isActive
                        ? "text-ink-950"
                        : "text-fg-muted hover:text-fg",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeFile}
            download
            className="group hidden items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-[13px] font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-ink-950 sm:inline-flex"
          >
            Résumé
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-line bg-ink-850/60 text-fg transition-colors hover:border-line-strong lg:hidden"
          >
            {open ? (
              <X className="size-4.5" aria-hidden />
            ) : (
              <Menu className="size-4.5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Section navigation"
            className="absolute inset-x-0 top-full border-y border-line bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="shell flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between border-b border-line/60 py-3.5 font-display text-base transition-colors last:border-b-0",
                      active === link.id
                        ? "text-accent"
                        : "text-fg-muted hover:text-fg",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 opacity-50" aria-hidden />
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={profile.resumeFile}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-display text-sm font-semibold text-ink-950"
                >
                  Download résumé
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
