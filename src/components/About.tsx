import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Heart, Car, Code2, Sparkles } from "lucide-react";

const About = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "1+", label: "Years Experience", icon: Calendar },
    { number: "10+", label: "Projects Completed", icon: Code2 },
    { number: "7+", label: "Happy Clients", icon: Heart },
    { number: "20+", label: "Technologies", icon: "/assets/connection.png" },
    //{ number: "End-to-End", label: "Delivery Focus", icon: Code2 },
  ];

  return (
    <section id="about" className={`section-padding left-intro big-card ${isDark ? 'dark-card' : 'light-card'}`}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 sm:gap-6">
          <Card className="xl:col-span-7 p-6 sm:p-8 glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift">
            <h3 className="text-2xl font-semibold mb-6">Hi! I&apos;m Soham Chavan</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a <span className="text-primary font-semibold">Full-stack developer</span> based in <span className="text-primary font-semibold">Maharashtra, India</span>, focused on building reliable, performant,
                and user-centered web applications. I enjoy translating ideas into thoughtful interfaces and scalable
                systems that deliver real value.
              </p>
              <p>
                My core stack includes <span className="text-accent font-semibold">Ruby on Rails</span>,{" "}
                <span className="text-accent font-semibold">JavaScript</span>, and{" "}
                <span className="text-accent font-semibold">TypeScript</span>. I care deeply about clean architecture,
                accessibility, performance, and maintainable code-shipping features end-to-end from product thinking
                to deployment.
              </p>
              <p>
                Recently, I&apos;ve delivered projects across dashboards and e-commerce, collaborating closely with
                designers to iterate quickly and ship with confidence.
              </p>
            </div>
          </Card>

          <Card className="xl:col-span-5 p-6 sm:p-8 glass border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group overflow-hidden relative flex flex-col justify-center">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
            
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              Quick Facts
            </h4>
            
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/60 transition-colors border border-border/40 group/item">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Base Location</div>
                  <div className="font-semibold text-foreground">Maharashtra, India</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/60 transition-colors border border-border/40 group/item">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Interests</div>
                  <div className="font-semibold text-foreground">Car Enthusiast</div>
                </div>
              </div>

              <div className="mt-2 p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-primary/10 relative overflow-hidden group/mission flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/mission:opacity-100 transition-opacity duration-500" />
                <p className="text-sm leading-relaxed text-muted-foreground relative z-10">
                  <span className="text-foreground font-semibold block mb-1">Mission</span>
                  Building modern products with strong focus on developer experience, maintainability, and clean UI.
                </p>
              </div>
            </div>
          </Card>

          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="md:col-span-1 xl:col-span-3 p-6 text-center glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift glow-primary group"
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
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;