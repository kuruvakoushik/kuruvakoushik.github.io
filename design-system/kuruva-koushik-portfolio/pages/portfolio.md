# Portfolio Page Override

This page-specific direction combines the `Brutalism` portfolio match from UI/UX Pro Max with the Taste Skill `white-link-blue` developer-tool palette and `Funnel` type pairing. The small orange contact action is retained from the Pro Max portfolio palette. This override records the design that is implemented in the page; use the master file for the remaining product-wide UX guidance.

## Layout

- White, full-width editorial sections with aligned 1200px content edges.
- Split hero: editorial type on the left, authentic portrait slot on the right.
- Black project band with a prominent SpendSense illustration and two quieter project rows.
- Avoid repeating card grids; use ruled lists, a timeline, and one outlined profile group.
- Keep the main project action visible in the hero and navigation; put the message action at the end.

## Type and color

- Headings: Funnel Display. Body: Funnel Sans. Small labels: DM Mono.
- Background `#FFFFFF`; secondary surface `#F4F4F4`; ink `#111111`; muted text `#6B6B6B`.
- Primary blue `#1A4BE0`; contact action orange `#EA580C`; white text on blue, black text on orange.
- Sharp corners, visible rules, minimal shadow, no purple, no gradient grounds.

## Motion

- One restrained hero entrance and a single, once-only count-up in the academic facts.
- No scroll reveals, parallax, tilt, or auto-rotating role text.
- Render the final values immediately when reduced motion is requested.

## Content, assets, and accessibility

- Keep `assets/images/profile.jpg` as the real portrait slot; show its typographic placeholder until a supplied photo loads.
- Treat project art as illustration. Never present it as a project screenshot or invent project statistics.
- Keep TaskFlow and Calculator repository links absent until verified URLs are supplied.
- Preserve visible keyboard focus, explicit form labels, 44px minimum interactive targets, and a mobile menu with `aria-expanded` state.
- Stack the hero and feature project at tablet widths; collapse all profile links into one column on phones; prevent horizontal overflow.
