import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, Twitter, Calendar } from "lucide-react";
import profileWhatsApp592 from "@/assets/profile/profile-whatsapp-2026-04-25-592.jpg";
import profileWhatsApp300 from "@/assets/profile/profile-whatsapp-2026-04-25-300.jpg";
import profileWhatsApp150 from "@/assets/profile/profile-whatsapp-2026-04-25-150.jpg";
import profileWhatsApp592Webp from "@/assets/profile/profile-whatsapp-2026-04-25-592.webp";
import profileWhatsApp300Webp from "@/assets/profile/profile-whatsapp-2026-04-25-300.webp";
import profileWhatsApp150Webp from "@/assets/profile/profile-whatsapp-2026-04-25-150.webp";

const titles = ["Full Stack Developer", "Freelancer", "Problem Solver", "Tech Enthusiast"];

const TypingTitle = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timer = setTimeout(() => {
      if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex]);

  return (
    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground min-h-[3rem] flex items-center flex-wrap gap-x-2">
      I'm a <span className="ml-2 gradient-text">{displayText}</span>
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
};

const Hero = () => {
  const scrollToContact = useCallback(() => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToAbout = useCallback(() => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const socialLinks = useMemo(() => [
    { icon: Github,   href: "https://github.com/sohamchavan07",         label: "GitHub",     color: "#6e7681", hoverBg: "rgba(110,118,129,0.15)" },
    { icon: Linkedin, href: "https://linkedin.com/in/sohamchavan07",    label: "LinkedIn",   color: "#0A66C2", hoverBg: "rgba(10,102,194,0.15)"  },
    { icon: Twitter,  href: "https://twitter.com/soham_chavan07",       label: "X (Twitter)",color: "#38bdf8", hoverBg: "rgba(56,189,248,0.15)"  },
    { icon: Mail,     href: "mailto:sohamchavan.sc07@gmail.com",        label: "Email",      color: "#f87171", hoverBg: "rgba(248,113,113,0.15)" },
  ], []);

  return (
    <section id="home" className="relative overflow-hidden flex items-center pt-24 pb-16 md:pb-24 min-h-[calc(100vh-4rem)]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />

      {/* Soft circular background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 w-32 h-32 sm:top-16 sm:left-12 sm:w-48 lg:top-20 lg:left-20 lg:w-72 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-4 w-40 h-40 sm:bottom-16 sm:right-12 sm:w-64 lg:bottom-20 lg:right-20 lg:w-96 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-secondary/15 rounded-full blur-2xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium mb-6">
              <span className="inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-lg shadow-green-500/20" />
              Hire Me
            </div>
            <div className="mb-6">
              <p className="text-muted-foreground text-base sm:text-lg mb-2">Hello, my name is</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="gradient-text">Soham Chavan</span>
              </h1>
              <TypingTitle />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              FullStack Developer I Create websites and innovative web applications.
              I specialize in Ruby on Rails, Python and modern web technologies to build scalable digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-[#4f46e5] hover:bg-[#4338ca] border-0 hover-lift text-white text-sm sm:text-base transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="truncate">Get In Touch</span>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-slate-800 dark:bg-white text-white dark:text-black border border-slate-700 dark:border-0 hover:bg-slate-700 dark:hover:bg-gray-100 hover-lift transition-colors duration-200"
              >
                <a
                  href="https://calendly.com/soham777chavan777/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/10 hover-lift"
              >
                <a href="/assets/docs/Resume.pdf" download aria-label="Download Resume" className="flex items-center justify-center gap-2 w-full">
                  <Download className="w-5 h-5 mr-2" />
                  <span className="truncate">Download Resume</span>
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 flex-wrap">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="touch-target w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    background: "rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = link.hoverBg)}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                >
                  <link.icon
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-strong hover-lift">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${profileWhatsApp150Webp} 150w, ${profileWhatsApp300Webp} 300w, ${profileWhatsApp592Webp} 592w`}
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 70vw"
                  />
                  <source
                    type="image/jpeg"
                    srcSet={`${profileWhatsApp150} 150w, ${profileWhatsApp300} 300w, ${profileWhatsApp592} 592w`}
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 70vw"
                  />
                  <img
                    src={profileWhatsApp592}
                    alt="Soham Chavan"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={592}
                    height={592}
                  />
                </picture>
              </div>
              <div className="absolute -bottom-4 -right-1 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center animate-float" style={{ background: "linear-gradient(135deg, #6366f1, #3b82f6)" }}>
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            aria-label="Scroll to about"
            className="p-2 rounded-full hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;