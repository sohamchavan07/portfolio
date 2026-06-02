🚀 Soham Chavan — Portfolio

Modern personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components. Showcasing work, services, and contact details with delightful micro-interactions and responsive design.

• [React](https://react.dev/)
• [TypeScript](https://www.typescriptlang.org/)
• [Vite](https://vitejs.dev/)
• [Tailwind CSS](https://tailwindcss.com/)
• [shadcn/ui](https://ui.shadcn.com/)
• [Framer Motion](https://www.framer.com/motion/)
• [Live Demo](https://www.sohamchavan.site/)
• [Portfolio](https://www.sohamchavan.site/)

---

📌 Table of Contents
• [About](#-about)
• [Features](#-features)
• [Tech Stack](#-tech-stack)
• [Getting Started](#-getting-started)
• [Usage](#-usage)
• [Project Structure](#-project-structure)
• [Customization](#-customization)
• [Deployment](#-deployment)
• [Contributing](#-contributing)
• [Author](#-author)

---

📖 About

**Soham Chavan — Portfolio** is a modern personal portfolio website built with cutting-edge web technologies. It's designed to showcase professional work, services, and skills with focus on visual appeal, smooth animations, and excellent user experience. Perfect for developers, designers, and creative professionals.

---

✨ Features

• ✅ **Animated Hero Section** — Typewriter titles, CTA buttons, and social media links with smooth animations
• ✅ **About & Services** — Glassmorphism-styled cards showcasing skills and professional services
• ✅ **Project Gallery** — Filterable projects with feature chips and quick GitHub/live demo CTAs
• ✅ **Case Studies** — Detailed project showcases with imagery and achievement badges
• ✅ **Contact Form** — Powered by Formspree with toast notifications and real-time feedback
• ✅ **Dark/Light Theme** — Seamless theme toggle with persistent preferences
• ✅ **Fully Responsive** — Optimized for mobile, tablet, and desktop devices
• ✅ **Accessible Components** — Built with Radix UI for best-in-class accessibility
• 🔜 **Upcoming**: Blog section, testimonials carousel, advanced filtering

---

🛠️ Tech Stack

**Frontend Framework**
- React 18 with TypeScript for type-safe development
- Vite for lightning-fast builds and HMR

**Styling & Components**
- Tailwind CSS for utility-first styling
- shadcn/ui (Radix UI) for accessible component primitives
- clsx & class-variance-authority for advanced className management

**Animations & Interactions**
- Framer Motion for smooth animations
- Embla Carousel for project gallery carousel

**Forms & Validation**
- React Hook Form for efficient form state management
- Zod for schema validation

**Icons & Utilities**
- Lucide icons for consistent iconography

---

🚀 Getting Started

**Prerequisites**

```
node >= 18.x
npm >= 9.x (or yarn/pnpm)
```

**Installation**

```bash
# 1. Clone the repo
git clone https://github.com/sohamchavan07/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

💡 Usage

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Type check your TypeScript
npm run type-check
```

---

📁 Project Structure

```
src/
├── components/           # React components (Hero, About, Projects, Services, Contact, etc.)
├── components/ui/        # shadcn/ui generated primitives
├── hooks/                # Custom hooks (theme, toast helpers)
├── pages/                # Routed views (Index, Portfolio, NotFound)
├── assets/               # Images, icons, and static media
├── App.tsx               # Main app component
├── App.css               # Global styles and animations
├── index.css             # Tailwind CSS directives
└── main.tsx              # Entry point
```

---

⚙️ Customization

**Profile & Hero Section**
- Edit profile copy, titles, and social URLs in `src/components/Hero.tsx`
- Update avatar image in the assets folder

**Projects & Portfolio**
- Modify project cards (images, links, features) in `src/components/Projects.tsx`
- Add or remove projects by updating the projects data structure

**Contact Form**
- Current setup uses [Formspree](https://formspree.io/) for email handling
- Replace the Formspree endpoint with your own ID in `src/components/Contact.tsx`
- Alternatively, integrate with Sendgrid, Mailgun, or your backend API

**Theme & Colors**
- Global colors and gradients: `src/App.css`, `src/index.css`, and `tailwind.config.ts`
- Update Tailwind theme configuration in `tailwind.config.ts`
- Dark/light mode toggle logic in `src/hooks/useTheme.ts`

**Social Links & Contact**
- Update social media URLs throughout components
- Customize contact information in `src/components/Contact.tsx`

---

🌐 Deployment

The project builds to the `dist` directory. Deploy to any static host:

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

**Netlify**
- Connect your GitHub repo to Netlify
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**
- Set repository visibility to public
- Configure GitHub Pages in repository settings
- Point to `gh-pages` branch

**Other Platforms**
- Ensure environment-specific assets (favicons, OG images) are updated in `public/`
- Test production build locally with `npm run preview`

---

🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please ensure your PR includes:
- A clear description of changes
- Updated documentation if needed
- TypeScript types for new code
- Responsive design considerations

---

👤 Author

**Soham Chavan**

• [Portfolio](https://www.sohamchavan.site/)
• [LinkedIn](https://www.linkedin.com/in/sohamchavan07/)
• [Twitter/X](https://x.com/soham_chavan07)
• [GitHub](https://github.com/sohamchavan07)

---

📄 License

This project is licensed under the [MIT License](./LICENSE).

---

Made with ❤️ by Soham Chavan
