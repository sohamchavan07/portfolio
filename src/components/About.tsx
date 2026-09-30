import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Heart,
  Code2,
  Code,
  Palette,
  Sparkles,
  Database,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { HERO_STATS } from "@/data/heroStats";

const About = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Stats from shared constant, plus the extra "Technologies" one unique to this section
  const stats = [
    { number: HERO_STATS[0].value, label: HERO_STATS[0].label, icon: Calendar },
    { number: HERO_STATS[1].value, label: HERO_STATS[1].label, icon: Code2 },
    { number: HERO_STATS[2].value, label: HERO_STATS[2].label, icon: Heart },
    { number: "20+", label: "Technologies", icon: Database },
  ];

  const process = [
    {
      icon: Lightbulb,
      title: "Discover",
      desc: "Research users, audit competitors, define goals and success metrics.",
    },
    {
      icon: Palette,
      title: "Design",
      desc: "Wireframes, high-fidelity UI, and reusable design systems.",
    },
    {
      icon: Code,
      title: "Develop",
      desc: "Pixel-perfect, accessible, performant React + Tailwind code.",
    },
    {
      icon: Rocket,
      title: "Deliver",
      desc: "Ship, measure, iterate. Real users sharpen the final product.",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              05 / 06
            </span>
            <span className="h-px w-8 bg-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 sm:gap-6">
          {/* ── Bio Card ──────────────────────────────────────────────────── */}
          <Card className="xl:col-span-7 p-6 sm:p-8 bg-card/75 border border-border/80 hover:border-primary/30 transition-all duration-300 hover-lift shadow-md rounded-2xl backdrop-blur-md">
            {/* Photo + name */}
            <div className="flex items-center gap-5 mb-6">
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border/80 shadow-md">
                  <img
                    src="/assets/icons/profile-photo-new.jpg"
                    alt="Soham Chavan"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                </div>
                {/* Online indicator */}
                <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background shadow-sm" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Hi! I'm Soham Chavan</h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Maharashtra, India
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                I'm a{" "}
                <span className="text-foreground font-semibold">
                  UI/UX-minded full-stack developer
                </span>{" "}
                based in{" "}
                <span className="text-foreground font-semibold">
                  Maharashtra, India
                </span>
                . I design and build thoughtful, accessible interfaces backed by scalable, maintainable systems.
              </p>
              <p>
                My toolkit spans{" "}
                <span className="text-primary font-semibold">React</span>,{" "}
                <span className="text-primary font-semibold">TypeScript</span>,{" "}
                <span className="text-primary font-semibold">Tailwind CSS</span>, and{" "}
                <span className="text-primary font-semibold">Ruby on Rails</span>. I obsess over typography, spacing, motion, and micro-interactions — the details that turn a working app into a product people truly enjoy using.
              </p>
              <p>
                Recently I've shipped high-traffic web applications, SaaS dashboards, and modern developer tools — always with a designer's eye on every commit.
              </p>

              {/* Current focus */}
              <div className="mt-4 p-4 rounded-xl border border-border/80 bg-secondary/40">
                <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-1">
                  Currently focused on
                </p>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  Building production-grade SaaS products with Ruby on Rails + React, integrating AI tooling into developer workflows, and taking on freelance projects that solve real problems.
                </p>
              </div>
            </div>
          </Card>

          {/* ── Design Process Card ───────────────────────────────────────── */}
          <Card className="xl:col-span-5 p-6 sm:p-8 bg-card/75 border border-border/80 hover:border-primary/30 transition-all duration-300 hover-lift flex flex-col shadow-md rounded-2xl backdrop-blur-md">
            <h4 className="text-xl font-bold mb-1 text-foreground">My Design Process</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              How I move from problem discovery to production code
            </p>
            <div className="grid grid-cols-1 gap-3 flex-1">
              {process.map((step, i) => (
                <div
                  key={step.title}
                  className="flex items-start gap-3.5 p-3 rounded-xl border border-border/60 bg-secondary/30 hover:border-primary/30 hover:bg-secondary/60 transition-colors"
                >
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/15 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="font-semibold text-sm text-foreground">{step.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ── Stat Cards ────────────────────────────────────────────────── */}
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="md:col-span-1 xl:col-span-3 p-6 text-center bg-card/75 border border-border/80 hover:border-primary/30 transition-all duration-300 hover-lift group shadow-sm rounded-2xl backdrop-blur-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}

          {/* ── Design Principles Card ────────────────────────────────────── */}
          <Card className="col-span-1 md:col-span-2 xl:col-span-6 p-6 sm:p-8 border border-border/80 hover:border-primary/30 transition-all duration-500 hover:shadow-xl flex flex-col justify-center bg-card/85 rounded-2xl shadow-md overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10 text-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              Design Principles
            </h4>

            <div className="font-mono text-xs sm:text-sm p-5 rounded-xl bg-secondary/60 border border-border/80 shadow-inner overflow-hidden relative z-10">
              <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="text-primary font-semibold mt-1">{"<principles>"}</div>
              <div className="pl-4 sm:pl-6 py-2 flex flex-col gap-2">
                {[
                  "Mobile-first, responsive layouts.",
                  "Accessible color & WCAG contrast.",
                  "Motion that guides, never distracts.",
                  "Performance as an essential feature.",
                ].map((principle) => (
                  <div key={principle} className="flex items-center gap-2">
                    <span className="text-accent">{"<li>"}</span>
                    <span className="text-foreground/90 font-sans text-xs sm:text-sm">{principle}</span>
                    <span className="text-accent">{"</li>"}</span>
                  </div>
                ))}
              </div>
              <div className="text-primary font-semibold">{"</principles>"}</div>
            </div>
          </Card>

          {/* ── Performance Card ──────────────────────────────────────────── */}
          <Card className="col-span-1 md:col-span-2 xl:col-span-6 p-6 sm:p-8 border border-border/80 hover:border-primary/30 transition-all duration-500 hover:shadow-xl flex flex-col items-center justify-center bg-card/85 rounded-2xl shadow-md overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-full text-left mb-8 relative z-10">
              <h4 className="text-xl font-bold text-foreground mb-1">
                Performance Optimization
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Audited via Google Lighthouse</p>
            </div>

            <div className="flex flex-wrap justify-between w-full gap-4 sm:gap-2 relative z-10">
              {[
                { label: "Performance", score: 100 },
                { label: "Accessibility", score: 97 },
                { label: "Best Practices", score: 100 },
                { label: "SEO", score: 100 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 flex-1 min-w-[70px]"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-border"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                        strokeDasharray={`${item.score}, 100`}
                        strokeWidth="3"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-emerald-500 font-bold text-lg sm:text-xl font-mono">
                      {item.score}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-foreground/90 font-medium text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
