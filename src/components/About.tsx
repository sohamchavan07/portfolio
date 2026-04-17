import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Car, Code2 } from "lucide-react";

const About = () => {
  const stats = [
    { number: "1+", label: "Years Experience", icon: Calendar },
    { number: "7+", label: "Projects Completed", icon: Code2 },
    { number: "20+", label: "Technologies", icon: "/assets/connection.png" },
    { number: "End-to-End", label: "Delivery Focus", icon: Code2 },
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
            <h3 className="text-2xl font-semibold mb-6">Hi! I&apos;m Soham Chavan</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a <span className="text-primary font-semibold">Full-stack developer</span> focused on building reliable, performant,
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

          <Card className="xl:col-span-5 p-6 glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift">
            <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                India
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-accent" />
                Car Enthusiast
              </div>
              <div className="text-sm pt-2">
                Building modern products with strong focus on developer experience, maintainability, and clean UI.
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