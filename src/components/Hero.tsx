import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Calendar } from "lucide-react";
import {
  SiReact,
  SiRubyonrails,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import SocialLinks from "@/components/SocialLinks";
import { HERO_STATS } from "@/data/heroStats";

// ─── Typing animation ─────────────────────────────────────────────────────────

const titles = [
  "Full Stack Developer",
  "Freelancer",
  "Problem Solver",
  "Tech Enthusiast",
];

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

// ─── Tech Stack icons ─────────────────────────────────────────────────────────

const techStack = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiRubyonrails, label: "Rails", color: "#CC0000" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
] as const;

// ─── Constants ────────────────────────────────────────────────────────────────

const RESUME_PATH = "/assets/docs/Soham_Chavan_FullStack_Developer.pdf";

// ─── Component ────────────────────────────────────────────────────────────────

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

  return (
    <section
      id="home"
      className="relative overflow-hidden flex items-center pt-24 pb-16 md:pb-24 min-h-[calc(100vh-4rem)]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" />
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
              <p className="text-muted-foreground text-base sm:text-lg mb-2">
                Hello, my name is
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="gradient-text">Soham Chavan</span>
              </h1>
              <TypingTitle />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              FullStack Developer I Create websites and innovative web
              applications. I specialize in Ruby on Rails, Python and modern web
              technologies to build scalable digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-[#4f46e5] hover:bg-[#4338ca] border-0 hover-lift text-white text-sm sm:text-base transition-colors duration-200"
              >
                Start a Project
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
                <a
                  href={RESUME_PATH}
                  download
                  aria-label="Download Resume"
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span className="truncate">Download Resume</span>
                </a>
              </Button>
            </div>

            {/* ── Stats Row ──────────────────────────────────────── */}
            <div className="flex flex-wrap gap-6 mb-8 py-5 border-y border-white/10">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links — reuses shared component */}
            <SocialLinks />

            {/* ── Tech Stack Icons ───────────────────────────────── */}
            <div className="mt-6">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-muted-foreground hover:border-white/20 hover:text-foreground transition-colors"
                    title={label}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-strong hover-lift">
                <img
                  src="/assets/icons/profile-photo-new.jpg"
                  alt="Soham Chavan"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={592}
                  height={592}
                />
              </div>
              <div className="absolute -bottom-3 right-2 sm:right-6 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 backdrop-blur-md shadow-xl flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono tracking-wider text-zinc-300 uppercase font-medium">
                  Available for Hire
                </span>
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
