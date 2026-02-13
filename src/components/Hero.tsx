import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, Twitter, Calendar } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Full Stack Developer", "Freelancer", "Problem Solver", "Tech Enthusiast"];

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

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/sohamchavan07", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sohamchavan07", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/soham_chavan07", label: "X (Twitter)" },
    { icon: Mail, href: "mailto:sohamchavan.sc07@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative overflow-hidden flex items-center pt-24 pb-16 md:pb-24 min-h-[calc(100vh-4rem)]">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 w-32 h-32 sm:top-16 sm:left-12 sm:w-48 lg:top-20 lg:left-20 lg:w-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-4 w-40 h-40 sm:bottom-16 sm:right-12 sm:w-64 lg:bottom-20 lg:right-20 lg:w-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <p className="text-muted-foreground text-base sm:text-lg mb-2">Hello, my name is</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="gradient-text">Soham Chavan</span>
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground min-h-[3rem] flex items-center flex-wrap gap-x-2">
                I'm a <span className="ml-2 gradient-text">{displayText}</span>
                <span className="animate-pulse ml-1">|</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              FullStack Developer I Create websites and innovative web applications. 
              I specialize in Ruby on Rails, Python and modern web technologies to build scalable digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary text-white text-sm sm:text-base"
              >
                <Mail className="w-5 h-5" />
                <span className="truncate">Get In Touch</span>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gradient-secondary text-black border-0 hover:bg-gradient-primary hover-lift glow-primary"
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
                <a href="/assets/Resume.pdf" download aria-label="Download Resume" className="flex items-center justify-center gap-2 w-full">
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
                  className="touch-target w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover-lift glow-primary group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-strong hover-lift">
                <img
                  src={profilePhoto}
                  alt="Soham Chavan"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={512}
                  height={512}
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 70vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-1 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-full flex items-center justify-center glass animate-float">
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
            className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;