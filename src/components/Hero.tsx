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

  const scrollToSkills = useCallback(() => {
    const element = document.querySelector("#skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden flex items-center pt-28 pb-16 md:pb-24 min-h-[calc(100vh-4rem)]"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 w-48 h-48 sm:top-16 sm:left-12 sm:w-72 lg:top-20 lg:left-20 lg:w-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-4 w-48 h-48 sm:bottom-16 sm:right-12 sm:w-80 lg:bottom-20 lg:right-20 lg:w-[28rem] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-56 sm:h-56 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono uppercase tracking-wider font-semibold mb-6">
              <span className="inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-md shadow-emerald-500/30 animate-pulse" />
              Available for Freelance & Full-time
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground text-sm sm:text-base font-mono uppercase tracking-widest mb-2">
                Hello, my name is
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight text-foreground">
                <span className="gradient-text">Soham Chavan</span>
              </h1>
              <TypingTitle />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Full-Stack Developer crafting high-performance web applications and intuitive digital experiences. I specialize in Ruby on Rails, React, TypeScript, and modern cloud technologies to build scalable digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg hover-lift shadow-md shadow-primary/20 transition-all text-sm sm:text-base"
              >
                Start a Project
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-secondary/80 hover:bg-secondary text-foreground border-border/80 font-medium rounded-lg hover-lift transition-all text-sm sm:text-base"
              >
                <a
                  href="https://calendly.com/soham777chavan777/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  Schedule a Call
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border/80 hover:bg-secondary/60 hover:text-foreground text-muted-foreground font-medium rounded-lg hover-lift transition-all text-sm sm:text-base"
              >
                <a
                  href={RESUME_PATH}
                  download
                  aria-label="Download Resume"
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span className="truncate">Download Resume</span>
                </a>
              </Button>
            </div>

            {/* ── Stats Row ──────────────────────────────────────── */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 py-5 border-y border-border/60">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold gradient-text">
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
            <div className="mt-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/70 bg-secondary/30 text-xs font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-secondary/60 transition-all shadow-sm"
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
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-border/80 shadow-2xl hover-lift">
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
              <div className="absolute -bottom-3 right-2 sm:right-6 px-3.5 py-1.5 rounded-full bg-card/90 border border-border/80 backdrop-blur-md shadow-xl flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono tracking-wider text-foreground uppercase font-medium">
                  Available for Hire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToSkills}
            aria-label="Scroll to skills"
            className="p-2 rounded-full hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
