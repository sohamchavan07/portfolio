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
  CheckCircle,
  Database,
  Lightbulb,
  Rocket,
} from "lucide-react";

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

  const stats = [
    { number: "1+", label: "Years Experience", icon: Calendar },
    { number: "10+", label: "Projects Completed", icon: Code2 },
    { number: "7+", label: "Happy Clients", icon: Heart },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 sm:gap-6">
          <Card className="xl:col-span-7 p-6 sm:p-8 glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift">
            <h3 className="text-2xl font-semibold mb-6">Hi! I'm Soham Chavan</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a{" "}
                <span className="text-primary font-semibold">
                  UI/UX-minded full-stack developer
                </span>{" "}
                based in{" "}
                <span className="text-primary font-semibold">
                  Maharashtra, India
                </span>
                . I design and build thoughtful, accessible interfaces backed by
                scalable, maintainable systems.
              </p>
              <p>
                My toolkit spans{" "}
                <span className="text-accent font-semibold">React</span>,{" "}
                <span className="text-accent font-semibold">TypeScript</span>,{" "}
                <span className="text-accent font-semibold">Tailwind CSS</span>,
                and{" "}
                <span className="text-accent font-semibold">Ruby on Rails</span>.
                I obsess over typography, spacing, motion, and micro-interactions
                — the details that turn a working app into a product people enjoy
                using.
              </p>
              <p>
                Recently I've shipped dashboards, e-commerce stores, and
                multilingual community portals — always with a designer's eye on
                every commit.
              </p>
            </div>
          </Card>

          <Card className="xl:col-span-5 p-6 sm:p-8 glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift flex flex-col">
            <h4 className="text-xl font-bold mb-2">My Design Process</h4>
            <p className="text-sm text-muted-foreground mb-6">
              How I move from problem to product
            </p>
            <div className="grid grid-cols-1 gap-3 flex-1">
              {process.map((step, i) => (
                <div
                  key={step.title}
                  className="flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-colors"
                >
                  <div className="w-9 h-9 shrink-0 rounded-full bg-primary/15 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="font-semibold text-sm">{step.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="md:col-span-1 xl:col-span-3 p-6 text-center glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {typeof stat.icon === "string" ? (
                <div
                  aria-hidden
                  className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300"
                  style={{
                    WebkitMaskImage: `url(${stat.icon})`,
                    maskImage: `url(${stat.icon})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    backgroundColor: "currentColor",
                  }}
                />
              ) : (
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              )}
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}

          {/* Clean Code Card */}
          <Card className="col-span-1 md:col-span-2 xl:col-span-6 p-6 sm:p-8 border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-center bg-[#0a0a0a] text-white overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
              <Sparkles className="w-5 h-5 text-primary" />
              Design Principles
            </h4>

            <div className="font-mono text-sm sm:text-base p-5 rounded-2xl bg-black/60 border border-white/10 shadow-inner overflow-hidden relative z-10">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-red-400 mt-2">&lt;principles&gt;</div>
              <div className="pl-4 sm:pl-8 py-2 flex flex-col gap-2">
                <div>
                  <span className="text-red-400">{"<li>"}</span>
                  <span className="text-gray-200">Mobile-first responsive layouts.</span>
                  <span className="text-red-400">{"</li>"}</span>
                </div>
                <div>
                  <span className="text-red-400">{"<li>"}</span>
                  <span className="text-gray-200">Accessible color & contrast.</span>
                  <span className="text-red-400">{"</li>"}</span>
                </div>
                <div>
                  <span className="text-red-400">{"<li>"}</span>
                  <span className="text-gray-200">Motion that guides, not distracts.</span>
                  <span className="text-red-400">{"</li>"}</span>
                </div>
                <div>
                  <span className="text-red-400">{"<li>"}</span>
                  <span className="text-gray-200">Performance as a feature.</span>
                  <span className="text-red-400">{"</li>"}</span>
                </div>
              </div>
              <div className="text-red-400">&lt;/principles&gt;</div>
            </div>
          </Card>

          {/* Performance Card */}
          <Card className="col-span-1 md:col-span-2 xl:col-span-6 p-6 sm:p-8 border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 flex flex-col items-center justify-center bg-[#0a0a0a] text-white overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#0ecc67]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-full text-left mb-8 relative z-10">
              <h4 className="text-xl font-bold text-white mb-1">
                Performance Optimization
              </h4>
              <p className="text-sm text-gray-400">via Google Lighthouse</p>
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
                  className="flex flex-col items-center gap-4 flex-1 min-w-[70px]"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-white/10"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#0ecc67] drop-shadow-[0_0_8px_rgba(14,204,103,0.5)]"
                        strokeDasharray={`${item.score}, 100`}
                        strokeWidth="3"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-[#0ecc67] font-bold text-lg sm:text-xl">
                      {item.score}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 font-medium text-center">
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
