# tulshidas39.github.io

Personal portfolio of **Tulshi Chandra Das** — Principal Software Engineer (.NET).

Live at <https://tulshidas39.github.io/>.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, static export, Turbopack) |
| UI | React 19, Tailwind CSS 4 |
| Motion | Motion (`motion/react`) |
| Icons | lucide-react, react-icons |
| Hosting | GitHub Pages via GitHub Actions |

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Scripts

| Script | Does |
|---|---|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Static export → `docs/` (see below) |
| `npm run lint` | ESLint — see the note below |
| `npm run typecheck` | `tsc --noEmit` |

### A note on `npm run lint`

Dependencies are pinned to the newest published versions, which currently puts
`typescript@7` and `eslint@10` ahead of what the Next.js lint stack supports:

- `typescript-eslint` does not yet support the TypeScript 7 API ([tracking issue](https://github.com/typescript-eslint/typescript-eslint/issues/10940)).
- `eslint-plugin-react`, bundled inside `eslint-config-next`, fails to load under ESLint 10.

So `npm run lint` exits with an error for now. **`npm run build` and `npm run typecheck`
are unaffected**, so publishing is fine. The code was linted clean before the upgrade.

To get linting back, pin the two packages down a major:

```bash
npm install -D typescript@^5.9.3 eslint@^9.39.5
```

Once `typescript-eslint` ships TS 7 support, drop the pins again.

## Editing the content

**All site content lives in [`data/resume.ts`](data/resume.ts).** Nothing is hard-coded
in the components, so updating the résumé means editing that one file — profile,
social links, stats, experience, projects, skills, credentials and education.

Every external URL (socials, project sites, certificate and paper links) was taken
from the link annotations embedded in `Tulshi_Chandra_Das_Resume.Net.pdf`, so they
match the résumé exactly.

### Adding a profile photo

The hero falls back to a `TD` monogram. To use a photo instead, drop a square image at
`public/assets/profile.jpg` and set:

```ts
photo: "/assets/profile.jpg",
```

in the `profile` object.

### Résumé download

The **Download résumé** buttons serve `public/assets/Tulshi_Chandra_Das_Resume.pdf`
(a copy of `Tulshi_Chandra_Das_Resume.Net.pdf` in the repo root). To update it, drop a
new PDF over that file — or point `profile.resumeFile` somewhere else.

## Structure

```
app/
  layout.tsx        Fonts, metadata, schema.org Person JSON-LD
  page.tsx          Section composition
  globals.css       Tailwind v4 theme tokens + component classes
components/         One component per section, plus Nav / Backdrop / Reveal
data/resume.ts      All content
scripts/
  postbuild.mjs     Moves the export to docs/ and writes .nojekyll
docs/               The built site — committed, served by GitHub Pages
```

## Deployment

The site is served by GitHub Pages straight from the repo:
**Settings → Pages → Deploy from a branch → `main` / `/docs`.**

That means **`docs/` is build output that is deliberately committed.** To publish:

```bash
npm run build          # writes docs/
git add docs
git commit -m "build: publish site"
git push
```

GitHub serves the new commit within a minute or so.

### How the build lands in `docs/`

`next build` with `output: "export"` always writes to `out/`. The `postbuild` script
(run automatically by npm after `build`) replaces `docs/` with that export and adds a
`.nojekyll` file.

Two details worth knowing before changing this:

- **`distDir` stays at its default `.next`.** It is also where `next dev` writes, so
  pointing it at `docs/` would fill the committed folder with dev-server artifacts.
  `out/` remains gitignored as the throwaway intermediate.
- **`.nojekyll` is load-bearing.** Branch-served Pages content is run through Jekyll,
  which skips directories starting with an underscore — without it the entire `_next/`
  folder is dropped and the site renders unstyled and inert.

### CI

[`.github/workflows/build.yml`](.github/workflows/build.yml) type-checks and builds on
every push and PR, and warns if `docs/` was not rebuilt alongside the source. It does
**not** deploy — with a branch-based Pages source, an `actions/deploy-pages` job would
fail, because that action requires the Pages source to be set to "GitHub Actions".
