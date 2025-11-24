import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import peaceSymbol from "@/assets/peace.svg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
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
    window.addEventListener("resize", handleResize);
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

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const contactLinks = [
    { href: "tel:+917058933361", label: "Call", value: "+91 7058933361" },
    { href: "mailto:sohamchavan.sc07@gmail.com", label: "Email", value: "sohamchavan.sc07@gmail.com" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass py-2" : "py-4"
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-2xl font-bold gradient-text">
            <img
              src={peaceSymbol}
              alt="Peace symbol"
              className={`h-9 w-9 drop-shadow ${
                theme === "light" ? "invert" : ""
              }`}
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="touch-target px-2 text-base text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="touch-target w-11 h-11 inline-flex items-center justify-center rounded-full border border-border hover:bg-muted/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary text-white"
              >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            className="md:hidden touch-target relative w-12 h-12 flex flex-col justify-center items-center space-y-1.5 group rounded-full border border-border"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`} />
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-nav"
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        >
          <div className="mt-4 py-6 glass rounded-lg border border-primary/20 backdrop-blur-lg">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between px-4 pb-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="touch-target w-11 h-11 inline-flex items-center justify-center rounded-full border border-border hover:bg-muted/50 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </button>
              </div>
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 px-6 py-3 mx-2 rounded-lg relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r" />
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-primary/10 mt-2 space-y-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground/80">
                    Contact
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Maharashtra, India
                  </p>
                  <div className="space-y-2">
                    {contactLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex flex-col rounded-lg border border-primary/10 px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors touch-target"
                      >
                        <span className="text-xs text-muted-foreground">{link.label}</span>
                        <span className="text-sm text-foreground">{link.value}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;