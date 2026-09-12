/**
 * Runs automatically after `next build` (npm lifecycle: build -> postbuild).
 *
 * `output: "export"` writes the static site to out/. GitHub Pages serves this
 * repo from main -> /docs, so move the export there and drop in the .nojekyll
 * marker.
 */
import { existsSync, renameSync, rmSync, writeFileSync } from "node:fs";

/** Where `next build` puts the static export. */
const EXPORT_DIR = "out";
/** What GitHub Pages serves from the main branch. */
const PAGES_DIR = "docs";

if (!existsSync(EXPORT_DIR)) {
  console.error(
    `postbuild: expected "${EXPORT_DIR}/" to exist after the build.\n` +
      `Is output: "export" still set in next.config.ts?`,
  );
  process.exit(1);
}

rmSync(PAGES_DIR, { recursive: true, force: true });
renameSync(EXPORT_DIR, PAGES_DIR);

/*
 * Branch-served Pages content is run through Jekyll, which skips any directory
 * whose name starts with an underscore. Without this file the whole _next/
 * folder — every script and stylesheet — is dropped and the site renders
 * unstyled and inert.
 */
writeFileSync(`${PAGES_DIR}/.nojekyll`, "");

console.log(`postbuild: ${EXPORT_DIR}/ -> ${PAGES_DIR}/ (+ .nojekyll)`);
