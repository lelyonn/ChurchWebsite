# Project Editing Guidelines

## Code Organization & Architecture

- **Responsive Strategy**: We maintain separate, optimized components for Desktop (`src/imports/`) and Mobile (`src/app/pages/`). Ensure you update both versions when adding new sections (e.g., "You Belong Here" and "The Foundation").
- **Component Reusability**: Keep route-level files small. Reusable UI logic, like Accordions and Schedule views, should be placed in `src/app/components/`.
- **Data & Configuration**:
  - Store editable text, constants, URLs, and church profile details in `src/app/config/site.ts`.
  - Maintain photo assets and galleries in `src/app/data/communityPhotos.ts` to keep image paths centralized. Avoid hard-coding long copy or repetitive image paths in route files.
- **Generated Code**: Treat `src/imports/` as generated Figma output. Edit it only when the visual design itself needs a precise adjustment or when integrating dynamic content (like replacing SVG placeholders with actual `<img>` tags).

## Available Features & How to Edit Them

- **Dynamic Photo Galleries**: We implement horizontal photo galleries using responsive Flexbox (desktop edge-to-edge grid and mobile swipeable `overflow-x-auto` gallery). To update the photos, modify the array mappings using `COMMUNITY_PHOTOS`.
- **Animated Tickers (Marquee)**: Infinite scrolling text (e.g., `BlackBeliefTicker` "YOU BELONG HERE") uses standard CSS `@keyframes` and Tailwind animation classes. To change the scrolling text, edit the mapped string arrays inside the ticker components.
- **Core Values Accordion**: The interactive dropdown logic is managed in `src/app/components/CoreValuesAccordion.tsx`. Edit this file to adjust the interaction behavior.

## UI Direction

- **Brand Aesthetic**: Preserve the original visual language: GEIS red (`#d41c24`), warm neutral backgrounds (`#f8f6f0`, `#fffdf8`), editorial typography (Montserrat, Lato, Playfair Display), and generous section spacing.
- **Layouts**: Prefer responsive flex/grid layouts for new pages and components. For mobile sections, use standard padding classes like `px-6 py-16` for visual consistency.
- **Styling**: Use the existing font stack and Tailwind utility styles. Avoid introducing new custom CSS files unless there is a clear design reason. Component-specific animations (like marquees) can be embedded using inline `<style>` tags.

## Content

- **Language**: Use Indonesian copy for visitor-facing church content by default.
- **Contact Info**: Keep contact links and social media URLs sourced dynamically from `src/app/config/site.ts`.
