import { ArrowUp } from "lucide-react";
import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="font-mono text-[11.5px] text-fg-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-[11.5px] text-fg-muted transition-colors hover:text-accent"
        >
          Back to top
          <span className="grid size-7 place-items-center rounded-full border border-line transition-colors group-hover:border-accent/50">
            <ArrowUp
              className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </a>
      </div>
    </footer>
  );
}
