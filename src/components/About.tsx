import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Coffee, Code2, Heart, Star } from "lucide-react";

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience", icon: Calendar },
    { number: "50+", label: "Projects Completed", icon: Code2 },
    { number: "30+", label: "Happy Clients", icon: Heart },
    { number: "5", label: "Awards Won", icon: Star },
  ];

  const interests = [
    "Web Development",
    "Mobile Apps", 
    "Machine Learning",
    "Open Source",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Hi! I'm Soham Chavan</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with creating digital solutions that make a difference. My journey in 
                tech started during college, and I've been fascinated by the power of code to solve real-world problems ever since.
              </p>
              
              <p>
                I specialize in modern web technologies including <span className="text-accent font-semibold"> Ruby on Rails, React</span>, 
                <span className="text-accent font-semibold"> Node.js</span>, and 
                <span className="text-accent font-semibold"> TypeScript</span>. I love creating intuitive user interfaces 
                and robust backend systems that scale.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge through tech blogs and community meetups.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                INDIA
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-accent" />
                Coffee Enthusiast
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold">What I Love</h3>
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
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 text-center glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift glow-primary group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
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