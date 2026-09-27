# ta4tsering.com

Personal site of Tashi Tsering. Next.js (App Router) + Tailwind CSS v4 + next-themes, exported as a static site.

Design direction ("Field Notes"): warm paper, Newsreader + IBM Plex Mono + Noto Serif Tibetan, a left metadata rail, lists instead of cards, one ink-red accent. No gradients, glows, card grids or scroll animations.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

## Editing content

All copy lives in `src/content/`. Components don't need to change for content edits.

- `site.ts`: name, role, email, links, photo, meta description
- `projects.ts`: selected work, grouped (platforms, OCR, side projects)
- `experience.ts`: roles and education
- `notes.ts`: documents published on the OpenPecha forum
- `caseStudies.ts`: long-form pages at `/work/[slug]`. Inline links use `[label](href)`.

Every fact on the site should be checkable. Link the source, and don't add numbers you can't back up.

## Structure

```
src/app/
  layout.tsx            fonts, metadata, JSON-LD, header/footer
  page.tsx              intro, work, experience, notes, about
  work/[slug]/page.tsx  case studies
  not-found.tsx, sitemap.ts, robots.ts, opengraph-image.png
src/components/
  Header, Footer, Section, Rows, InlineText
  ThemeToggle, CopyEmail   (the only client components)
src/content/            all copy and links
```

`src/app/opengraph-image.png` is a static 1200×630 render. If the name, role or tagline changes, regenerate it.
