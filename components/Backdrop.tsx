/**
 * Fixed, non-interactive page backdrop: a faint blueprint grid, two slow
 * drifting colour blooms and a vignette. Purely decorative.
 */
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Blueprint grid, fading out toward the bottom of the viewport. */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 78%)",
        }}
      />

      {/* Accent bloom, top-left. */}
      <div className="animate-float-slow absolute -left-[18%] -top-[22%] h-[46rem] w-[46rem] rounded-full bg-accent/18 blur-[130px]" />

      {/* Violet bloom, right, offset in phase so the two never pulse together. */}
      <div
        className="animate-float-slow absolute -right-[14%] top-[24%] h-[38rem] w-[38rem] rounded-full bg-violet/14 blur-[140px]"
        style={{ animationDelay: "-7s" }}
      />

      {/* Cool floor light. */}
      <div className="absolute bottom-[-20%] left-1/2 h-[32rem] w-[70rem] -translate-x-1/2 rounded-[50%] bg-accent-deep/10 blur-[150px]" />

      {/* Vignette to keep text contrast high at the edges. */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_0%,transparent_35%,var(--color-ink-950)_100%)]" />
    </div>
  );
}
