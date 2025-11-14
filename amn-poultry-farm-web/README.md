Place high-resolution images in this folder. Recommended filenames used in code:
- hero-poultry.jpg (1920x1080 or larger, WebP preferred)
- feature-pasture.jpg (800x600)
- feature-trace.jpg (800x600)
- feature-delivery.jpg (800x600)
- about-farm.jpg (1200x800)
- logo.svg (vector logo)


Source suggestions: Unsplash / Pexels. Add credits in README.md


---
README.md
---
# Amn Poultry Farm Web — LG-accurate React + Tailwind Scaffold


## Live Demo
(Deploy this repo to Vercel and paste the URL here)


## Project Overview
Amn Poultry Farm Web is a brand and frontend scaffold built to match an LG (desktop) design with pixel-accurate spacing, component arrangement, and visual hierarchy. The scaffold uses React + Tailwind and follows the project brief: custom branding, original content, 3+ feature sections, responsive behavior, accessibility, and performance considerations.


## Brand Identity
- **Name:** Amn Poultry Farm Web
- **Tagline:** Fresh. Ethical. Local.
- **Value proposition:** Traceable, pasture-raised poultry delivered to local communities with transparent sourcing.
- **Target audience:** Food-savvy consumers, families, local restaurants, health-conscious buyers.
- **Voice & tone:** Clear, honest, and grounded; informative with a friendly farm-to-table personality.


### Color System
- **Primary:** #0B6E4F — evokes trust, nature, and freshness.
- **Secondary:** #F4A261 — supportive warm accent, friendly and artisanal.
- **Accent:** #FFB703 — CTA highlight, high contrast for actions.
- **Neutral dark:** #0F1724 — body text and headings.
- **Neutral light:** #F8FAFC — backgrounds.


(See tailwind.config.cjs for implementation and usage rationale.)


### Typography
- **Headings:** Inter — modern, neutral sans-serif great for UI and readable headings.
- **Body:** System UI stack with Inter fallback for performance and consistent rendering.
- **Weights:** 400, 600, 700 used across: regular, semibold, bold.


## Design Decisions
- **Layout adherence:** Measured spacing to design using a 12-column container and Tailwind spacing utilities. Exact paddings/margins are implemented using `section-gap`, precise `h-` values and container constraints to match visual proportions.
- **Tools used:** Figma for measuring original designs (recommended), Chrome devtools for pixel checks.


## Component Architecture
- `layout/` — Header, Navigation, Footer.
- `sections/` — Hero, Features, About,Newsletter,ProductShowcasa, Stats, Testimonials .
// END OF CANVAS