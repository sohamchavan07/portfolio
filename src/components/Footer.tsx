import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/sohamchavan07", label: "GitHub", color: "#6e7681", hoverBg: "rgba(110,118,129,0.15)" },
    { icon: Linkedin, href: "https://linkedin.com/in/sohamchavan07", label: "LinkedIn", color: "#0A66C2", hoverBg: "rgba(10,102,194,0.15)" },
    { icon: Twitter, href: "https://twitter.com/soham_chavan07", label: "Twitter", color: "#38bdf8", hoverBg: "rgba(56,189,248,0.15)" },
    { icon: Mail, href: "mailto:soham07.dev@gmail.com", label: "Email", color: "#f87171", hoverBg: "rgba(248,113,113,0.15)" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-muted/10 border-t border-primary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-3">
                Soham Chavan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                FULLSTACK Developer passionate about creating innovative web applications
                that make a difference. Let's build something amazing together.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="touch-target w-11 h-11 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    background: "rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = social.hoverBg)}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                >
                  <social.icon className="w-4 h-4" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="touch-target text-left text-muted-foreground hover:text-primary transition-colors duration-300 text-sm px-1"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Maharashtra, India</p>
              <p>soham07.dev@gmail.com</p>
              <p>+91 7058933361</p>
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-[#3b82f6] hover:bg-[#2563eb] border-0 hover-lift text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Start a Project
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="w-full flex justify-center items-center text-sm text-muted-foreground">
              <p className="text-center">
                &copy; {currentYear} Soham Chavan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;