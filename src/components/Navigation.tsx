import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Download } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import SocialLinks from "@/components/SocialLinks";
import peaceSymbol from "@/assets/brand/symbol.png";

// ─── Nav Config ───────────────────────────────────────────────────────────────
// Section label order matches spec: Home, Skills, Services, Projects, Clients, About, Contact
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Clients" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

const contactLinks = [
  { href: "tel:+917058933361", label: "Call", value: "+91 7058933361" },
  {
    href: "mailto:soham07.dev@gmail.com",
    label: "Email",
    value: "soham07.dev@gmail.com",
  },
];

const RESUME_PATH = "/assets/docs/Soham_Chavan_FullStack_Developer.pdf";

// ─── Component ────────────────────────────────────────────────────────────────

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href } });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/", { state: { scrollTo: href } });
        }
      }
      setIsMobileMenuOpen(false);
    },
    [location.pathname, navigate]
  );

  const handleStartProject = useCallback(() => {
    handleNavClick("#contact");
  }, [handleNavClick]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/80 shadow-sm py-3"
          : "bg-background/50 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={() => navigate("/")}
          >
            <img
              src={peaceSymbol}
              alt="Brand symbol"
              className={`h-9 w-12 object-contain transition-transform duration-300 group-hover:scale-105 ${
                theme === "light" ? "invert" : ""
              }`}
              loading="lazy"
            />
            <span className="font-bold text-lg tracking-tight text-foreground hidden sm:inline-block">
              Soham<span className="gradient-text ml-0.5">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="touch-target px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group rounded-md hover:bg-secondary/50"
              >
                {item.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="touch-target w-9 h-9 inline-flex items-center justify-center rounded-lg border border-border/70 hover:bg-secondary/70 transition-colors ml-1 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Persistent "Start a Project" CTA */}
            <Button
              onClick={handleStartProject}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover-lift text-sm font-medium px-4 shadow-sm shadow-primary/20 ml-2"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="touch-target w-10 h-10 inline-flex items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <button
              className="touch-target relative w-10 h-10 flex flex-col justify-center items-center space-y-1.5 group rounded-full border border-border/70"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              <div
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-nav"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-[38rem] opacity-100 pt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 bg-card/95 rounded-xl border border-border/80 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col space-y-1 px-2">
              {/* Nav links */}
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-foreground/90 hover:text-primary hover:bg-secondary/70 transition-all duration-200 px-4 py-2.5 rounded-lg font-medium text-sm flex items-center justify-between"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                </button>
              ))}

              {/* Mobile footer: contact info + CTAs */}
              <div className="pt-4 border-t border-border/60 mt-3 px-2 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {contactLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex flex-col rounded-lg border border-border/60 px-3 py-2 bg-secondary/30 hover:border-primary/40 hover:bg-secondary/60 transition-colors"
                    >
                      <span className="text-[11px] font-mono uppercase text-muted-foreground">
                        {link.label}
                      </span>
                      <span className="text-xs font-medium text-foreground truncate mt-0.5">
                        {link.value}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Social icons */}
                <div className="py-1">
                  <SocialLinks size="sm" />
                </div>

                {/* Start a Project CTA */}
                <Button
                  size="default"
                  onClick={handleStartProject}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover-lift font-medium shadow-sm shadow-primary/20"
                >
                  Start a Project
                </Button>

                {/* Resume download */}
                <a
                  href={RESUME_PATH}
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary/40 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
