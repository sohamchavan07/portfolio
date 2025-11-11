import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Play,
  Filter,
  Calendar,
  User
} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import carImage from "@/assets/car.png";
import porscheImage from "@/assets/porsche.png";
import tictactoeImage from "@/assets/tictactoe.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
  ];

  const projects = [
    {
      id: 1,
      title: "3D Portfolio",
      category: "web",
      description: "Soham Chavan is a creative web developer with a passion for crafting immersive, interactive websites. Inspired by pioneers like Bruno Simon and skilled in tools like Three.js, Soham mixes technical expertise with playful design. Explore my portfolio to see how I build beyond the ordinary — or join me on the journey of learning how to make sites that move.",
      image: carImage,

      features: ["Creative Inspiration Shout-Out", "Portfolio Gateway", "Humor & Personality", "User Management"],
      githubUrl: "https://github.com/sohamchavan07/portfolio3d",
      liveUrl: "https://sohamchavan3d.vercel.app",
      demoUrl: "https://sohamchavan3d.vercel.app",
      date: "2024",
    },
    {
      id: 2,
      title: "Tawade Kitchen",
      category: "web",
      description: "A small snack shop website (Tawade Kitchen) showcasing products and contact information.",
      image: "/tawade_kitchen.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Product Catalog", "Responsive Layout", "Contact Form"],
      githubUrl: "https://github.com/sohamchavan07/tawade_kitchen.git",
      liveUrl: "https://tawade-kitchen.vercel.app",
      demoUrl: "https://tawade-kitchen.vercel.app",
      date: "2025",
      client: "Tawade Kitchen",
    },
    {
      id: 3,
      title: "Ferrari Case Study",
      category: "web",
      description: "Racing Ahead with DevOps — How Ferrari accelerated innovation using Azure DevOps and real-time analytics. A visual case study showcasing branding, performance, and pipeline-driven delivery.",
      image: "/ferrari.jpeg",
      technologies: ["Azure DevOps","Analytics"],
      features: ["Brand Case Study", "Pipeline Simulations", "Real-time Analytics", "Technical Overview"],
      liveUrl: "https://ferrari-casestudy.vercel.app",
      githubUrl: "https://github.com/sohamchavan07/Ferrari/",
      demoUrl: "https://ferrari-casestudy.vercel.app/",
      date: "2025",
      client: "Ferrari",
    },
    {
      id: 4,
      title: "Porsche Case Study",
      category: "web",
      description: "Porsche App Case Study — My Porsche App is a page that demonstrates the design & thinking behind a luxury automotive app for Porsche. It presents how one might optimize user experience, layout, customer interaction, and branding for a high-end app, illustrating both aesthetic and functional components. It’s built likely using TypeScript & hosted on Vercel.",
      image: porscheImage,
      technologies: [],
      features: ["Luxury/Brand-Focused Design", "Modern Web Tech Stack", "Structured Case Study", "Aesthetic & Functional Components"],
      githubUrl: "https://github.com/sohamchavan07/porsche",
      liveUrl: "https://porsche-casestudy.vercel.app/",
      demoUrl: "https://porsche-casestudy.vercel.app/",
      date: "2024",
      client: "Porsche",
    },
    {
      id: 5,
      title: "tic-tac-toe game",
      category: "web",
      description: "There are selectable difficulty levels (Easy / Medium / Hard) when playing against the computer. You can also set player names and there’s a display of the score (Player 1 vs Player 2 or vs Computer). Includes a restart button to reset the board/game. The site is hosted on Vercel, suggesting a simple, clean implementation intended for fun and demonstrating interactive UI logic.",
      image: tictactoeImage,
      technologies: [],
      features: ["Multiple Game Modes", "Difficulty Levels", "Customizable Player Names", "Score Tracking"],
      githubUrl: "https://github.com/sohamchavan07/tic-tac-toe",
      liveUrl: "https://tic-tac-toe-blond-tau-89.vercel.app/",
      demoUrl: "https://tic-tac-toe-blond-tau-89.vercel.app/",
      date: "2023",
      client: "Personal",

    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-muted/10">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies, design approaches, and problem-solving capabilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 p-2 glass rounded-full border-primary/10">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-primary text-background shadow-glow-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Filter className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden glass border-primary/10 hover:border-primary/20 transition-all duration-500 hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    className="bg-background/20 backdrop-blur-sm border-0 hover:bg-primary"
                    onClick={() => {
                      if (project.liveUrl) window.open(project.liveUrl, "_blank");
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      className="bg-background/20 backdrop-blur-sm border-0 hover:bg-primary"
                      onClick={() => window.open(project.githubUrl!, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-primary/20">
                    {(project.category && (project.category.charAt(0).toUpperCase() + project.category.slice(1))) || "Project"}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {project.client}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:bg-gradient-secondary border-0 flex-1"
                    onClick={() => {
                      if (project.liveUrl) window.open(project.liveUrl, "_blank");
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
Open                  </Button>
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 hover:border-primary/40"
                      onClick={() => window.open(project.githubUrl!, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 hover:border-primary/40"
                      onClick={() => window.open(project.demoUrl!, "_blank")}
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 glass border-primary/10">
            <h3 className="text-2xl font-semibold mb-4">
              Interested in More Projects?
            </h3>
            <p className="text-muted-foreground mb-6">
              These are just a few highlights from my portfolio. I've worked on many more projects across 
              various industries and technologies. Feel free to reach out to see more work samples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary"
                onClick={() => window.open("https://github.com/sohamchavan07", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </Button>
             
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;