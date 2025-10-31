## Soham Chavan — Portfolio

Modern personal portfolio built with React, Vite, Tailwind CSS, and shadcn/ui components. It showcases my work, services, and contact details with a focus on delightful micro-interactions and responsive design.

### Highlights
- Animated hero with typewriter titles, CTA, and social links
- About, services, skills, and stats cards with glassmorphism styling
- Project gallery with filters, feature chips, and quick GitHub/live CTAs
- Case studies and mini-games showcased with imagery and badges
- Contact section powered by Formspree + toast feedback and social links
- Dark/light theme toggle, smooth scrolling, and reusable UI primitives

### Tech Stack
- React 18 + TypeScript on Vite
- Tailwind CSS, clsx, class-variance-authority for styling
- shadcn/ui (Radix UI) component primitives
- Lucide icons, Framer Motion animations, Embla carousel
- Form handling via React Hook Form + Zod, messaging via Formspree

### Getting Started
```bash
# install dependencies
npm install

# start dev server on http://localhost:5173
npm run dev

# run production build
npm run build

# preview the production build locally
npm run preview
```

### Project Structure
```
src/
  components/       # Hero, About, Projects, Services, Contact, etc.
  components/ui/    # shadcn-generated UI primitives
  hooks/            # theme + toast helpers
  pages/            # routed views (Index, Portfolio, NotFound)
  assets/           # images used throughout the site
```

### Customization
- Update profile copy, titles, and social URLs in `src/components/Hero.tsx`.
- Modify project cards (images, links, features) in `src/components/Projects.tsx`.
- Contact form currently posts to Formspree (`src/components/Contact.tsx`). Replace the endpoint with your own Formspree ID or preferred email service.
- Global colors, typography, and gradients live in `src/App.css`, `src/index.css`, and Tailwind config (`tailwind.config.ts`).

### Deployment Notes
The project builds to the `dist` directory. Any static host (Vercel, Netlify, GitHub Pages, etc.) can serve the output. Ensure environment-specific assets (favicons, OG images) are updated in `public/` before deployment.

---
Questions or suggestions? Open an issue or reach out via the contact section on the site.
