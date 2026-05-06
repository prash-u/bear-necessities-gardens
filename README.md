# Bear Necessities Gardens

A cinematic, presentation-ready landing page for **Bear Necessities Gardens**, built to help a business owner review branding directions, gallery imagery, and site tone in one polished front-end experience.

This project is not a generic landscaping template anymore. It is a tailored single-page site with:

- a service-first homepage
- a collapsible **Client Review Mode** for logo concept comparison
- a palette tuning lab
- local gallery imagery and photo watermarks
- cinematic scroll reveals and subtle parallax motion
- editable business copy and data in one central file

## Tech Stack

- `React 18`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `shadcn/ui`
- `React Router`
- `Lucide React`
- `Embla Carousel`
- `Vitest`
- `ESLint`

## What This Site Includes

- Hero section with active logo concept and service-led messaging
- About section with the `B.E.A.R.` standard
- Services section
- Project types / showcase positioning section
- Process section
- Gallery carousel
- Before/after style section
- Proof / testimonials section
- FAQ section
- Contact section
- Footer
- Collapsible logo comparison and palette review UI

## Running the Project

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Vite will usually run on:

```bash
http://localhost:5173
```

If you want to force a specific host/port:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite dev server.

```bash
npm run build
```

Builds the production bundle into `dist/`.

```bash
npm run preview
```

Serves the built production output locally.

```bash
npm run lint
```

Runs ESLint.

```bash
npx tsc --noEmit
```

Runs a TypeScript check.

```bash
npm run test
```

Runs the Vitest suite.

## Project Structure

```text
src/
  assets/                  Static images and logo assets
  components/              Page sections and reusable UI
  data/siteContent.ts      Main editable business content + logo metadata
  hooks/                   Scroll reveal, parallax, mobile helpers
  pages/                   Route-level pages
  lib/                     Utilities
```

Most of the business-specific editing happens in:

- [src/data/siteContent.ts](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/data/siteContent.ts)
- [src/index.css](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/index.css)

## Main Files to Edit

### Business Copy and Data

Edit:

- [src/data/siteContent.ts](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/data/siteContent.ts)

This file controls:

- business name
- email
- Instagram URL
- navigation labels
- services
- project types
- process steps
- gallery items
- testimonials / proof content
- FAQ content
- featured case study
- logo concept metadata

### Visual Styling

Edit:

- [src/index.css](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/index.css)
- [tailwind.config.ts](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/tailwind.config.ts)

This is where to tune:

- colours
- fonts
- gradients
- reveal timing
- cinematic panel styling
- global spacing feel

### Page Sections

Core homepage sections live in:

- [src/components/HeroSection.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/HeroSection.tsx)
- [src/components/AboutSection.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/AboutSection.tsx)
- [src/components/ServicesSection.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/ServicesSection.tsx)
- [src/components/GallerySection.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/GallerySection.tsx)
- [src/components/ProofSection.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/ProofSection.tsx)
- [src/components/ContactSection.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/ContactSection.tsx)
- [src/components/StyleSwitcher.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/StyleSwitcher.tsx)

## Logo System

The site supports multiple logo directions for presentation purposes.

The current comparison experience is kept inside **Client Review Mode**, which is intentionally collapsible so the live website still feels like a real business site first.

Logo-related logic lives in:

- [src/data/siteContent.ts](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/data/siteContent.ts)
- [src/components/TransparentLogo.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/TransparentLogo.tsx)
- [src/components/ActiveLogoProvider.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/ActiveLogoProvider.tsx)

Cleaned transparent logo assets live in:

- [src/assets/brand-options/cleaned](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/assets/brand-options/cleaned)

## Gallery and Photos

The gallery uses local project images, not Instagram post URLs.

Current image assets are stored in:

- [src/assets](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/assets)

If you want to replace the current sample images with real garden photos:

1. Add the new image files into `src/assets/`
2. Update the imports in [src/data/siteContent.ts](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/data/siteContent.ts)
3. Replace the relevant entries in:
   - `servicePreviewImages`
   - `galleryItems`
   - `featuredCaseStudy`

All main photography uses the active logo as a bottom-corner watermark through:

- [src/components/WatermarkedImage.tsx](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/components/WatermarkedImage.tsx)

## Motion and Cinematic Scrolling

The page uses a shared reveal and motion system rather than random per-section animation.

Main motion files:

- [src/hooks/useScrollReveal.ts](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/hooks/useScrollReveal.ts)
- [src/hooks/useParallax.ts](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/hooks/useParallax.ts)
- [src/index.css](/Users/prashantumrekar/Documents/GitHub/bear-necessities-gardens/src/index.css)

If you want the site to feel:

- calmer: reduce reveal distance, blur, and transition duration
- more dramatic: increase section spacing, spotlight size, and hero parallax slightly

Keep motion restrained. The best version of this site should feel premium and cinematic, not busy.

## Brand / Presentation Notes

This build is designed to serve two purposes at once:

1. A credible, client-facing landscaping website
2. A presentation tool for comparing logo directions and overall brand feel

That is why the homepage is service-led, while the comparison tools are present but tucked away.

## Notes on Package Managers

This repo currently contains:

- `package-lock.json`
- `bun.lock`
- `bun.lockb`

The project is currently being run with **npm**.

Recommended commands:

```bash
npm install
npm run dev
```

If you want to simplify the repo later, you can remove the Bun lockfiles and standardise fully on npm.

## Current Caveats

- Some earlier logo source files began as JPEGs with white backgrounds, so transparent cleanup quality depends on the source asset quality.
- The site is presentation-ready, but it will improve significantly once all gallery imagery is replaced with final real project photography.
- In this environment, `npm run build` has sometimes shown inconsistent hanging behavior even when TypeScript is clean. If that happens, use `npm run dev` for the immediate preview and verify the live page visually.

## Recommended Next Improvements

- Replace all remaining sample garden images with final client photos
- Decide on a single default logo direction for the live public version
- Tighten final service-area/location copy
- Add real testimonials or curated client feedback
- Add final favicon / social preview image using the chosen logo
- Remove or hide presentation-only comparison tooling before final public launch, if desired

## Credits / Origin

This project started from a Lovable-generated base and has since been extensively reshaped into a custom Bear Necessities Gardens presentation site with:

- custom structure
- rewritten copy
- logo concept handling
- cleaned brand assets
- local gallery setup
- cinematic motion and scroll treatment

## License / Usage

This repository is intended for the Bear Necessities Gardens website and presentation workflow. Review ownership, branding, and asset rights before reusing logos or photography elsewhere.
