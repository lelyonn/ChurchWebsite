# GEIS CCC Web

GEIS CCC Web is the official website project for **GEIS Christian Creative Church** in Solo, Indonesia. It is built with React, Vite, Tailwind CSS, and a set of Figma-exported desktop layouts that have been organized into a maintainable app structure.

The site presents church identity, weekly services, ministry programs, contact links, location details, and mobile-friendly pages for visitors and contributors.

## Why This Project Is Useful

- **Church website in one codebase**: home, about, schedule, and program detail pages live in a single React app.
- **Editable content model**: common content such as service schedules, program pages, navigation links, social links, and location details is centralized in `src/app/config/` and `src/app/data/`.
- **Responsive experience**: desktop pages use polished Figma-imported layouts, while mobile pages are implemented as dedicated responsive React pages.
- **Production-oriented build**: Vite provides fast local development and optimized static production output.
- **Design continuity**: global styles, typography, warm neutral backgrounds, GEIS red accents, and Figma frame helpers preserve the visual system.

## Tech Stack

- React 18
- React Router 7
- Vite 6
- Tailwind CSS 4
- Radix UI Accordion
- Lucide React icons

## Pages And Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with hero, about preview, services, programs, and visit information |
| `/about` | Church profile and core values |
| `/schedule` | Weekly service schedule and activity overview |
| `/alpha` | Alpha program detail page |
| `/SJ` | Spiritual Journey program detail page |
| `/homecell` | Homecell program detail page |

Program detail routes are generated from `src/app/data/programs.ts`.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

This repository includes `package-lock.json`, so npm is the recommended package manager for consistent installs.

### Installation

```bash
npm install
```

### Start Local Development

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually:

```text
http://localhost:5173/
```

### Build For Production

```bash
npm run build
```

The production build is generated in `dist/`. That folder is ignored by Git and can be regenerated at any time.

### Static Hosting Routes

This project uses React Router with clean routes such as `/about`, `/schedule`, and `/alpha`. Static hosts need a fallback to serve `index.html` for those routes.

The repository includes:

- `public/404.html` for GitHub Pages route fallback
- `public/_redirects` for Netlify fallback
- `vercel.json` for Vercel rewrites
- `base: "./"` in `vite.config.ts` so built assets work from a GitHub Pages repository subpath

### Preview The Production Build

```bash
npm run preview
```

## Common Editing Tasks

Most routine content edits should start in these files:

| Task | File |
| --- | --- |
| Church name, tagline, address, social links, WhatsApp, Google Maps | `src/app/config/site.ts` |
| Homepage anchor navigation | `src/app/config/site.ts` |
| Global route navigation | `src/app/config/site.ts` |
| Service schedule content | `src/app/data/schedules.ts` |
| Program detail pages | `src/app/data/programs.ts` |
| Core values content | `src/app/data/coreValues.ts` |
| Desktop homepage Figma layout | `src/imports/AltHomepageDesktop/index.tsx` |
| Desktop about Figma layout | `src/imports/AltRouteAboutFullProfilePage/index.tsx` |
| Mobile homepage | `src/app/pages/MobileHomePage.tsx` |
| Mobile about page | `src/app/pages/MobileAboutPage.tsx` |
| Global styling, fonts, and theme tokens | `src/styles/` |

For a more detailed editing map, see [docs/EDITING_GUIDE.md](docs/EDITING_GUIDE.md).

## Project Structure

```text
src/
  app/
    components/       Reusable layout, navigation, footer, and page components
    config/           Site-wide constants, links, profile data, and Figma sizes
    data/             Editable schedule, program, and core values content
    layouts/          Root layout, anchor scrolling, and shared app shell
    pages/            Route-level pages
    routes.tsx        React Router route definitions
  assets/
    decor/            Decorative images and textures
    images/           Logo and carousel photos
    videos/           Homepage hero video
  imports/            Figma-exported desktop page layouts
  styles/             Tailwind entry, fonts, theme, and global CSS
```

## Development Notes

- Treat `src/app/config/` and `src/app/data/` as the safest places for regular content updates.
- Treat `src/imports/` as generated Figma output. It can be edited, but many elements use absolute positioning, so small visual changes should be checked carefully.
- Keep visitor-facing church copy in Indonesian by default, following [guidelines/Guidelines.md](guidelines/Guidelines.md).
- Do not commit `node_modules/` or `dist/`; both are already ignored in `.gitignore`.

## Helpful Commands

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Verify the production build
npm run build

# Preview the built site
npm run preview
```

## Support And Documentation

- Editing guide: [docs/EDITING_GUIDE.md](docs/EDITING_GUIDE.md)
- Project guidelines: [guidelines/Guidelines.md](guidelines/Guidelines.md)
- Asset attributions: [ATTRIBUTIONS.md](ATTRIBUTIONS.md)

If something is unclear, start by checking the files above, then open an issue or contact the project maintainer in the repository where this code is hosted.

## Maintainers And Contributors

This project is maintained for GEIS Christian Creative Church.

Contributions should keep the website easy for church staff and future developers to edit:

1. Keep reusable UI in `src/app/components/`.
2. Put editable long-form content in `src/app/data/`.
3. Put shared URLs, contact links, and site constants in `src/app/config/site.ts`.
4. Run `npm run build` before submitting changes.
5. Keep generated or dependency folders out of commits.

There is no separate `CONTRIBUTING.md` yet. Until one is added, use this README and [guidelines/Guidelines.md](guidelines/Guidelines.md) as the contribution reference.
