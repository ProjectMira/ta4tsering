# Tashi Tsering — Portfolio

A modern, minimalistic personal portfolio built with **Next.js 16**, **Tailwind CSS 4**, **Framer Motion**, and **TypeScript**. Features dark/light mode, scroll-triggered animations, a typing hero effect, and a fully static export for deployment anywhere.

## Quick Start

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production (static export to out/)
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development.

## Project Structure

```
src/
  app/
    layout.tsx          Root layout (fonts, metadata, ThemeProvider)
    page.tsx            Single-page composition of all sections
    globals.css         Tailwind directives + theme variables
  components/
    Navbar.tsx          Sticky nav with smooth-scroll + dark/light toggle
    HeroSection.tsx     Gradient name, typing animation, CTAs, profile photo
    AboutSection.tsx    Bio text + tech stack pill grid
    TimelineSection.tsx Vertical career timeline with scroll animations
    ProjectsSection.tsx Card grid driven by data file
    InterestsSection.tsx Masonry grid + blog placeholders
    FooterSection.tsx   Social links, contact, copyright
    ThemeProvider.tsx    next-themes wrapper
    ThemeToggle.tsx     Sun/moon toggle button
  data/
    projects.ts         Project content (edit here to update projects)
    journey.ts          Career milestones (edit here to update timeline)
    interests.ts        Interests & explorations content
public/
  images/
    profile.png         Profile photo
  .nojekyll            GitHub Pages compatibility
```

## Updating Content

All content is in `src/data/`. Edit these files to change what appears on the site without touching any component code:

- **`projects.ts`** — Add, remove, or reorder project cards
- **`journey.ts`** — Update career timeline milestones
- **`interests.ts`** — Modify the interests/explorations grid

## Deployment

The project is configured for static export (`output: 'export'` in `next.config.ts`). After `npm run build`, the `out/` directory can be deployed to:

- **GitHub Pages** — Push the `out/` folder (`.nojekyll` included)
- **Vercel** — Connect the repo for zero-config deployment
- **Netlify** — Set build command to `npm run build` and publish directory to `out`
- **Any static host** — Upload the `out/` folder

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [next-themes](https://github.com/pacocoursey/next-themes) — Dark/light mode
- [react-type-animation](https://github.com/maxeth/react-type-animation) — Typing effect
- [react-icons](https://react-icons.github.io/react-icons/) — Icon library
