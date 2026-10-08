import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { projects } from "@/data/projects";

// Featured projects to show initially (replace CollegeMatch with Tawade Kitchen)
const featuredProjectIds = new Set([14, 15, 4, 2, 10, 13]);

// Custom ordering to use when showing "All Projects" (preferred sequence)
const allProjectsOrder = [
  15, // Blog App
  14, // Bookstore
  10, // 3D Portfolio
  2,  // Tawade Kitchen
  13, // Hemraj Products
  4,  // Shivkumar Realtors
  5,  // Hotel Nyala
  1,  // CollegeMatch
  6,  // Rails Payment Gateway
  8,  // PORSCHE CASE STUDY
  7,  // Ferrari Case Study
  11, // Sri Ram Mandir
  9,  // Tic-Tac-Toe
];

const orderMap = new Map(allProjectsOrder.map((id, idx) => [id, idx]));

const Projects = () => {
  const navigate = useNavigate();

  const filteredProjects = useMemo(() => {
    return projects.filter(p => featuredProjectIds.has(p.id));
  }, []);

  const handleProjectClick = useCallback((id: number) => {
    navigate(`/project/${id}`);
  }, [navigate]);

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group flex flex-col cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Image */}
             <div className="relative overflow-hidden mb-5 rounded-md bg-muted/20 aspect-[1.6/1]">
    <picture className="block w-full h-full">
    <source
      srcSet={project.image.replace(/\.(png|jpg|jpeg)$/, '.webp')}
      type="image/webp"
    />
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
      decoding="async"
    />
  </picture>

  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
              {/* Project Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
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
                className="bg-[#24292e] hover:bg-[#1a1e23] border-0 hover-lift text-white"
                onClick={() => window.open("https://drive.google.com/drive/u/4/folders/1sfeAwjfH6hpV-Jo0a_PsIj91CyNfJgwT", "_blank")}
              >
                View Best Projects
              </Button>
              <Button
                size="lg"
                className="bg-[#24292e] hover:bg-[#1a1e23] border-0 hover-lift text-white"
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