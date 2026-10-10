# Soham Chavan — Portfolio

Personal developer portfolio built with React, TypeScript, Vite, Tailwind CSS and shadcn/ui. Statically built, deployed on Vercel.

[![Live](https://img.shields.io/badge/live-sohamcode.online-0a0a0a?style=flat-square)](https://sohamcode.online/)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

**Live:** https://sohamcode.online

---

## Overview

A single-page portfolio covering projects, case studies, services and contact. It ships as a static bundle (`dist/`) with no backend of its own; the contact form posts to Formspree.

**Goals**

- Fast first load: static build, code-split by Vite, no runtime server
- Accessible by default: Radix primitives via shadcn/ui
- Easy to maintain: content lives in typed data structures, not scattered JSX

## Features

| Area | Details |
| --- | --- |
| Hero | Typewriter titles, CTAs, social links (Framer Motion) |
| About / Services | Glass-style cards for skills and offerings |
| Projects | Filterable gallery, feature chips, GitHub / live-demo links, Embla carousel |
| Case studies | Longer write-ups with imagery and achievement badges |
| Contact | React Hook Form + Zod validation, Formspree delivery, toast feedback |
| Theming | Dark / light toggle with persisted preference |
| Responsive | Mobile, tablet and desktop layouts |

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS, `clsx`, `class-variance-authority` |
| UI primitives | shadcn/ui (Radix UI) |
| Animation | Framer Motion, Embla Carousel |
| Forms | React Hook Form + Zod |
| Icons | Lucide |
| Hosting | Vercel |

## Getting started

**Requirements:** Node >= 18, npm >= 9 (yarn / pnpm also work)

```bash
git clone https://github.com/sohamchavan07/portfolio.git
cd portfolio
npm install
npm run dev
```

App runs at http://localhost:5173.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run type-check` | Run the TypeScript compiler without emitting |

Before opening a PR:

```bash
npm run type-check && npm run build
```

## Project structure

```
src/
├── components/        # Feature sections: Hero, About, Services, Projects, Contact
│   └── ui/            # shadcn/ui primitives (generated, edit sparingly)
├── hooks/             # Custom hooks (theme, toast)
├── pages/             # Routed views: Index, Portfolio, NotFound
├── assets/            # Images, icons, static media
├── App.tsx            # Root component and routing
├── App.css            # Global styles and keyframes
├── index.css          # Tailwind directives and CSS variables
└── main.tsx           # Entry point
```

## Architecture notes

- **Content in code.** Projects, services and links are plain data structures inside their components, so adding a project means adding one object, not new markup.
- **Theme.** Theme state lives in `src/hooks/useTheme.ts` and persists the user's choice. Colors are driven by Tailwind config and CSS variables, so a palette change is a single-file edit.
- **Forms.** Zod defines the schema, React Hook Form handles state, Formspree handles delivery. Swapping providers only touches the submit handler.
- **UI primitives.** `components/ui/` holds shadcn/ui output. Keep app-specific styling in feature components, not in the primitives.

## Customization

| What | Where |
| --- | --- |
| Name, titles, social links | `src/components/Hero.tsx` |
| Projects (images, links, features) | `src/components/Projects.tsx` |
| Contact details and form endpoint | `src/components/Contact.tsx` |
| Colors, gradients, theme tokens | `src/index.css`, `src/App.css`, `tailwind.config.ts` |
| Theme toggle logic | `src/hooks/useTheme.ts` |
| Favicons, OG images | `public/` |

**Contact form:** replace the Formspree form ID in `src/components/Contact.tsx` with your own. Any HTTP endpoint (SendGrid, Mailgun, your own API) works if you update the submit handler.

## Deployment

The build output is static (`dist/`), so any static host works.

**Vercel (current)**

```bash
npm install -g vercel
vercel          # preview
vercel --prod   # production
```

Or import the GitHub repo in the Vercel dashboard. Vercel auto-detects Vite (build `npm run build`, output `dist`).

**Netlify:** build command `npm run build`, publish directory `dist`.

**GitHub Pages:** set Vite's `base` to `/<repo-name>/` in `vite.config.ts` and publish `dist/`.

Always verify with `npm run build && npm run preview` before shipping.

## Roadmap

- [ ] Blog section
- [ ] Testimonials carousel
- [ ] Advanced project filtering

## Contributing

Issues and PRs are welcome.

```bash
git checkout -b feat/your-feature
# make changes
npm run type-check && npm run build
git commit -m "feat: add your feature"
git push origin feat/your-feature
```

Use [Conventional Commits](https://www.conventionalcommits.org/), keep new code fully typed, and check layouts at mobile and desktop widths.

## Author

**Soham Chavan** — [Portfolio](https://sohamcode.online/) · [GitHub](https://github.com/sohamchavan07) · [LinkedIn](https://www.linkedin.com/in/sohamchavan07/) · [X](https://x.com/soham_chavan07)

## License

[MIT](./LICENSE)
