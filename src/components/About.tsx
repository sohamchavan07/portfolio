import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Car, Code2, Heart, Star } from "lucide-react";

const About = () => {
  const stats = [
    { number: "1+", label: "Years Experience", icon: Calendar },
    { number: "5+", label: "Projects Completed", icon: Code2 },
    // Use an image path for the Technologies icon. Place your image at public/assets/connection.png
    { number: "20+", label: "Technologies", icon: "/assets/connection.png" },

    //{ number: "30+", label: "Happy Clients", icon: Heart },//
    //{ number: "5", label: "Awards Won", icon: Star },//
  ];

  const interests = [

  ];

  const hasInterests = interests.length > 0;

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          
        </div>

        <div className={`grid gap-12 lg:gap-16 items-start mb-16 ${hasInterests ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 place-items-center'}`}>
          {/* About Content */}
          <div className={`animate-slide-up ${hasInterests ? '' : 'max-w-2xl text-center'}`}>
            <h3 className={`text-2xl font-semibold mb-6 ${hasInterests ? '' : 'text-center'}`}>Hi! I'm Soham Chavan</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className={`${hasInterests ? '' : 'text-center'}`}>
                I'm a <span className="text-primary font-semibold">Full‑stack developer</span> focused on building reliable, performant, and
                user‑centered web applications. I enjoy translating ideas into thoughtful interfaces and scalable systems
                that deliver real value.
              </p>
              <p className={`${hasInterests ? '' : 'text-center'}`}>
                My core stack includes <span className="text-accent font-semibold">Ruby On Rails</span>, <span className="text-accent font-semibold">JavaScript</span>, and
                <span className="text-accent font-semibold"> TypeScript</span>. I care deeply about clean architecture, accessibility,
                performance, and maintainable code—shipping features end‑to‑end from product thinking to deployment.
              </p>
              <p className={`${hasInterests ? '' : 'text-center'}`}>
                Recently, I've delivered projects across dashboards, e‑commerce, collaborating closely
                with designers to iterate quickly and ship with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                India
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-accent" />
                Car Enthusiast
              </div>
            </div>
          </div>

          {/* Interests */}
          {hasInterests && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge
                    key={interest}
                    variant="outline"
                    className="px-4 py-2 text-sm border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="p-6 text-center glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift glow-primary group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Render either a React icon component or an image path */}
                {typeof stat.icon === "string" ? (
                  // Render the image as a colored mask so it matches the theme color (uses currentColor)
                  <div
                    aria-hidden
                    className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300"
                    style={{
                      WebkitMaskImage: `url(${stat.icon})`,
                      maskImage: `url(${stat.icon})`,
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      // Use currentColor so the mask is filled with the CSS text color (set by text-primary)
                      backgroundColor: 'currentColor',
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
        </div>
    </section>
  );
};

export default About;