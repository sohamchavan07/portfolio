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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const highlightedTechnologies = new Set([]);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleToggleProjects = (expand) => {
    setShowAllProjects(expand);
    // Scroll to projects section when showing featured projects or all projects
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };



  const filters = [
    { id: "all", label: "All Projects" },
  ];

  const projects = [
    {
      id: 1,
      title: "3D PORTFOLIO",
      category: "web",
      description: "It's not just a portfolio, it's a playground of ideas. I'm excited to share my updated creative space, where I've put a lot of heart and late nights into showcasing projects that truly inspire me. I hope it inspires you, too.",
      image: "/assets/car.png",
      technologies: [],
      features: ["Creative Inspiration Shout-Out", "Portfolio Gateway", "Humor & Personality", "User Management"],
      githubUrl: "https://github.com/sohamchavan07/portfolio3d",
      liveUrl: "https://portfolio.sohamchavan.site",
      demoUrl: "https://portfolio.sohamchavan.site",
      date: "2025",
    },
    {
      id: 2,
      title: "TAWADE KITCHEN",
      category: "web",
      description: "A small snack shop website (Tawade Kitchen) showcasing products and contact information.",
      image: "/assets/tawade_kitchen.png",
      technologies: [],
      features: ["Product Catalog", "Responsive Layout", "Contact Form", "Branding"],
      githubUrl: "https://github.com/sohamchavan07/tawade_kitchen.git",
      liveUrl: "https://tawade-kitchen.vercel.app",
      demoUrl: "https://tawade-kitchen.vercel.app",
      date: "2025",
      client: "Tawade Kitchen",
    },



    /*{
      id: 3,
      title: "FREELANCING PROJECT",
      category: "web",
      description: "AS A DEDICATED WEB DEVELOPER, I BUILT THIS PERSONAL PORTFOLIO WEBSITE TO SHOWCASE MY TECHNICAL SKILLS,  DESIGN AESTHETIC, AND PROFESSIONAL VISION. THIS.                             PROJECT IS A REFLECTION OF WHO I AM AS A DEVELOPER         BOTH IN MY CODING ABILITY AND MY APPROACH TO                       USEREXPERIENCE..",
      image: "/assets/shreyash.png",
      technologies: [],
      features: ["Freelance", "Responsive Layout", "Contact Form"],
      githubUrl: "",
      liveUrl: "https://shreyash-lavhate.vercel.app",
      demoUrl: "https://shreyash-lavhate.vercel.app",
      date: "2025",
      client: "UI/UX Designer",
    },*/

    {
      "id": 4,
      "title": "SHIVKUMAR REALTORS",
      "category": "web",
      "description": "DEVELOPED A MODERN REAL ESTATE WEBSITE USING FRAMER FOR SHIVKUMAR REALTORS, A PUNE-BASED PROPERTY FIRM. THIS PROJECT FEATURES RESPONSIVE DESIGN, PROFESSIONAL LAYOUT, AND MARKETING-FOCUSED SECTIONS TO PROMOTE HIGH-VALUE PROPERTIES LIKE RESORT DEVELOPMENTS AND STUDIO APARTMENTS.",
      "image": "/assets/shivkumarrealtors.png",
      "technologies": [],
      "features": ["Client Project", "Real Estate Marketing", "Professional Landing Page"],
      "githubUrl": "",
      "liveUrl": "https://shivkumarrealtors.framer.website",
      "demoUrl": "https://shivkumarrealtors.framer.website",
      "date": "2025",
      "client": "ShivkumarRealtors"
    },


    {
      "id": 5,
      title: "HOTEL NYALA",
      category: "web",
      description: "Hotel Nyala is a conceptual hotel website created to showcase visual storytelling, clean structure, and modern web aesthetics. The site presents an imaginary luxury hotel brand, allowing you to demonstrate your creativity, design sense, and ability to build polished digital experiences.",
      image: "/assets/hotelnyala.png",
      technologies: [],
      features: ["Freelance", "Responsive Layout", "Contact Form", "Branding"],
      githubUrl: "https://github.com/sohamchavan07/hotel-nyala",
      liveUrl: "https://hotel-nyala.vercel.app",
      demoUrl: "https://hotel-nyala.vercel.app",
      date: "2025",
      client: "Personal",
    },

    {
      id: 6,
      title: "RAILS PAYMENT GATEWAY",
      category: "web",
      description: "A robust and secure payment gateway built using Ruby on Rails, designed to integrate seamless payment processing capabilities into web applications. This project demonstrates backend proficiency in Rails, API integrations, and secure transaction handling.",
      image: "/assets/payment.png",
      technologies: [],
      features: ["Secure Transactions", "API-based Payment Flow", "Modular Architecture"],
      githubUrl: "https://github.com/sohamchavan07/Payment-Gateway",
      liveUrl: "https://github.com/sohamchavan07/Payment-Gateway",
      demoUrl: "",
      date: "2025",
      client: "Payment Integration"
    },

    {
      id: 3,
      title: "BOOK STORE",
      category: "web",
      description: "THIS PROJECT IS MY ASSIGNMENT WHERE USER CAN SIGN IN AND SIGN UP. ADD THE BOOKS CREATE, READ, UPDATE, DELETE   IT. I USE RUBY AND RAILS IN THIS PROJECT. ASSOCIATE IN SUPERHERO DESIGN + CODE SCHOOL .",
      image: "/assets/book.png",
      technologies: [],
      features: ["Ruby", "Rails", "APIs", "Backend Development"],
      githubUrl: "https://github.com/sohamchavan07/book-store.git",
      liveUrl: "https://github.com/sohamchavan07/book-store.git",
      demoUrl: "",
      date: "2025",
      client: "Assignment Project",
    },

    {
      id: 7,
      title: "FERRARI CASE STUDY WITH DevOps",
      category: "web",
      description: "Racing Ahead with DevOps — How Ferrari accelerated innovation using Azure DevOps and real-time analytics. A visual case study showcasing branding, performance, and pipeline-driven delivery.",
      image: "/assets/ferrari.jpeg",
      technologies: [],
      features: ["Brand Case Study", "Pipeline Simulations", "Real-time Analytics", "Technical Overview"],
      liveUrl: "https://ferrari-casestudy.vercel.app",
      githubUrl: "https://github.com/sohamchavan07/Ferrari/",
      demoUrl: "https://ferrari-casestudy.vercel.app/",
      date: "2025",
      client: "Personal",
    },

    {
      id: 8,
      title: "PORSCHE CASE STYDY",
      category: "web",
      description: "Porsche App Case Study — My Porsche App is a page that demonstrates the design & thinking behind a luxury automotive app for Porsche. It presents how one might optimize user experience, layout, customer interaction, and branding for a high-end app, illustrating both aesthetic and functional components. It's built likely using TypeScript & hosted on Vercel.",
      image: "/assets/porsche.png",
      technologies: [],
      features: ["Luxury/Brand-Focused Design", "Modern Web Tech Stack", "Structured Case Study", "Aesthetic & Functional Components"],
      githubUrl: "https://github.com/sohamchavan07/porsche",
      liveUrl: "https://porsche-casestudy.vercel.app/",
      demoUrl: "https://porsche-casestudy.vercel.app/",
      date: "2025",
      client: "Personal",
    },
    {
      id: 9,
      title: "TIC-TAC-TOE GAME",
      category: "web",
      description: "There are selectable difficulty levels (Easy / Medium / Hard) when playing against the computer. You can also set player names and there's a display of the score (Player 1 vs Player 2 or vs Computer). Includes a restart button to reset the board/game. The site is hosted on Vercel, suggesting a simple, clean implementation intended for fun and demonstrating interactive UI logic.",
      image: "/assets/tictactoe.png",
      technologies: [],
      features: ["Multiple Game Modes", "Difficulty Levels", "Customizable Player Names", "Score Tracking"],
      githubUrl: "https://github.com/sohamchavan07/tic-tac-toe",
      liveUrl: "https://tic-tac-toe-blond-tau-89.vercel.app/",
      demoUrl: "https://tic-tac-toe-blond-tau-89.vercel.app/",
      date: "2025",
      client: "Personal",
    }
  ];

  // Featured projects to show initially
  const featuredProjectIds = new Set([1, 2, 4, 5, 6, 3]);

  const filteredProjects = activeFilter === "all"
    ? (showAllProjects ? projects : projects.filter(p => featuredProjectIds.has(p.id)))
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
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === filter.id
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group flex flex-col cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden mb-5 rounded-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[1.6/1] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    View Details
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-[15px] leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <p className="text-sm font-medium text-muted-foreground/60">
                  {project.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden glass border-primary/20 bg-background/95 backdrop-blur-xl max-h-[90vh] flex flex-col">
            {selectedProject && (
              <div className="h-full overflow-y-auto custom-scrollbar pb-10">
                {/* Header Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-8 md:p-12 space-y-6">
                  <DialogHeader>
                    <div className="space-y-1">
                      <DialogTitle className="text-4xl font-bold tracking-tight">
                        {selectedProject.title}
                      </DialogTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                        {selectedProject.category && (
                          <Badge variant="outline" className="border-primary/20 text-xs py-0.5">
                            {selectedProject.category.toUpperCase()}
                          </Badge>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {selectedProject.date}
                        </div>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    <DialogDescription className="text-lg leading-relaxed text-muted-foreground/90">
                      {selectedProject.description}
                    </DialogDescription>

                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary/80">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature) => (
                            <div key={feature} className="flex items-center text-sm text-muted-foreground/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2.5" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-8 flex flex-wrap gap-4 items-center border-t border-primary/10 pb-4">
                      {selectedProject.liveUrl && (
                        <Button
                          size="lg"
                          className="flex-1 sm:flex-none bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary text-white font-semibold flex items-center justify-center gap-2"
                          onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-5 h-5" />
                          Visit Site
                        </Button>
                      )}
                      
                      {selectedProject.githubUrl && (
                        <Button
                          size="lg"
                          className="flex-1 sm:flex-none bg-gradient-secondary hover:bg-gradient-primary border-0 hover-lift glow-primary text-black font-semibold flex items-center justify-center gap-2"
                          onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                        >
                          <Github className="w-5 h-5" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* More Projects CTA */}
        {!showAllProjects ? (
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
                  onClick={() => handleToggleProjects(true)}
                >
                  View All Projects
                </Button>
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
        ) : (
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary mx-auto"
              onClick={() => handleToggleProjects(false)}
            >
              Show Featured Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;