import { useNavigate, useLocation } from "react-router-dom";
import SocialLinks from "@/components/SocialLinks";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Clients", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-border/40 py-8 bg-background/60 backdrop-blur-sm">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Quick Links */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          aria-label="Footer navigation"
        >
          {quickLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center">
          <SocialLinks size="sm" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Soham Chavan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;