import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
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
          <div className="text-2xl font-bold gradient-text">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-primary hover:bg-gradient-secondary border-0"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
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
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 py-6 glass rounded-lg border border-primary/20 backdrop-blur-lg">
            <div className="flex flex-col space-y-2">
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
              <div className="px-4 pt-4 border-t border-primary/10 mt-2">
                <Button
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