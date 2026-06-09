# Project Guidelines

## Code Organization

- Keep route-level files small. Put reusable UI in `src/app/components/`.
- Put editable content in `src/app/data/` instead of hard-coding long copy in
  route files.
- Put shared URLs, church profile details, and route constants in
  `src/app/config/site.ts`.
- Treat `src/imports/` as generated Figma output. Edit it only when the visual
  design itself needs a precise adjustment.

## UI Direction

- Preserve the Figma visual language: GEIS red, warm neutral backgrounds,
  editorial typography, and generous section spacing.
- Prefer responsive flex/grid layouts for new pages and components.
- Use the existing font stack and Tailwind utility style unless there is a clear
  design reason to introduce something new.

## Content

- Use Indonesian copy for visitor-facing church content by default.
- Keep contact links sourced from `src/app/config/site.ts`.
