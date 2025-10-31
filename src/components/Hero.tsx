import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, Twitter } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];

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

  const socialLinks = [
    { icon: Github, href: "https://github.com/sohamchavan07", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/soham-pramod-chavan", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/soham_chavan07", label: "X (Twitter)" },
    { icon: Mail, href: "mailto:sohamchavan.sc07@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <p className="text-muted-foreground text-lg mb-2">Hello, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">Soham Chavan</span>
              </h1>
              <div className="text-3xl md:text-4xl font-semibold text-muted-foreground min-h-[3rem] flex items-center">
                I'm a <span className="ml-2 gradient-text">{displayText}</span>
                <span className="animate-pulse ml-1">|</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              FULLSTACK Developer passionate about creating innovative web applications. 
              I specialize in Ruby on Rails, Python, React and modern web technologies to build scalable digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary/40 hover-lift"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover-lift glow-primary group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-strong hover-lift">
                <img
                  src={profilePhoto}
                  alt="Soham Chavan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center glass animate-float">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;