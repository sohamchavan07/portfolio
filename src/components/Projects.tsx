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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "web",
      description: "A comprehensive MERN stack e-commerce admin dashboard with real-time analytics, inventory management, and order tracking capabilities.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      features: ["Real-time Analytics", "Inventory Management", "Order Tracking", "User Management"],
      githubUrl: "https://github.com/sohamchavan07/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard-soham.vercel.app",
      demoUrl: "https://ecommerce-dashboard-soham.vercel.app/demo",
      date: "2024",
      client: "Six Digits"
    },
    {
      id: 2,
      title: "Food Delivery App UI",
      category: "",
      description: "Modern food delivery mobile app with intuitive user experience, seamless ordering flow, and interactive prototypes.",
      image: project2,
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      githubUrl: "https://github.com/sohamchavan07/food-app-ui",
      liveUrl: "https://www.figma.com/proto/fooddelivery",
      demoUrl: "https://www.figma.com/proto/fooddeliveryapp",
      date: "2024",
      client: "FoodieGo"
    },
    {
      id: 3,
      title: "Real Estate Platform",
      category: "web",
      description: "Full-stack real estate platform built with MERN stack featuring property listings, virtual tours, and advanced search filters.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      features: ["Property Listings", "Virtual Tours", "Advanced Search", "Real-time Chat"],
      githubUrl: "https://github.com/sohamchavan07/realestate-platform",
      liveUrl: "https://realestate-soham.herokuapp.com",
      demoUrl: "https://realestate-soham.herokuapp.com/demo",
      date: "2023",
      client: "PropTech Solutions"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      category: "web",
      description: "React-based social media management dashboard with analytics, post scheduling, and multi-platform integration.",
      image: project2,
      technologies: ["React", "Redux", "Node.js", "JWT", "Chart.js"],
      features: ["Multi-platform Support", "Post Scheduling", "Analytics", "Team Collaboration"],
      githubUrl: "https://github.com/sohamchavan07/social-dashboard",
      liveUrl: "https://social-dashboard-soham.netlify.app",
      demoUrl: "https://social-dashboard-soham.netlify.app/demo",
      date: "2023",
      client: "MarketingPro"
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
                  <Button size="sm" className="bg-background/20 backdrop-blur-sm border-0 hover:bg-primary">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="bg-background/20 backdrop-blur-sm border-0 hover:bg-primary">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-primary/20">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
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
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:border-primary/40"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:border-primary/40"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
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
              <Button 
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary/40 hover-lift"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Request Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;