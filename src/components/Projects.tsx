import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Filter } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const navigate = useNavigate();

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

  // Featured projects to show initially
  const featuredProjectIds = new Set([1, 2, 4, 5, 6, 10]);

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
              onClick={() => navigate(`/project/${project.id}`)}
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