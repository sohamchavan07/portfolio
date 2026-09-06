import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Soham Chavan",
  title: "Soham Chavan - Full Stack Developer",
  description:
    "Professional full stack developer based in Maharashtra, India, specializing in Ruby on Rails, React, and modern web technologies.",
  url: "https://www.sohamchavan.site",
  email: "soham07.dev@gmail.com",
  phone: "+91 7058933361",
  location: "Maharashtra, India",
  resumeUrl: "/assets/docs/Soham_Chavan_FullStack_Developer.pdf",
  calendlyUrl: "https://calendly.com/soham777chavan777/new-meeting",
  buyMeACoffeeUrl: "https://buymeacoffee.com/soham_chavan",
  formspreeEndpoint: "https://formspree.io/f/xvgbyldd",
  social: {
    github: "https://github.com/sohamchavan07",
    linkedin: "https://linkedin.com/in/sohamchavan07",
    twitter: "https://twitter.com/soham_chavan07",
    email: "mailto:soham07.dev@gmail.com",
  },
} as const;

export const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const contactLinks = [
  { href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`, label: "Call", value: siteConfig.phone },
  { href: `mailto:${siteConfig.email}`, label: "Email", value: siteConfig.email },
];
