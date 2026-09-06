import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";

// Featured project IDs to highlight on the landing page
const featuredProjectIds = new Set([14, 15, 4, 1, 10, 13]);

const ProjectCard = ({ project, index, onClick }: {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
}) => {
  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} project details`}
      className="group flex flex-col cursor-pointer animate-slide-up focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden mb-5 rounded-md border border-white/5">
        <picture>
          <source
            srcSet={project.image.replace(/\.(png|jpg|jpeg)$/, ".webp")}
            type="image/webp"
          />
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width={800}
            height={500}
          />
        </picture>

        {/* Hover overlay with actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
          <div className="flex items-center gap-2 text-white text-sm font-medium translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <span>View case study</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View ${project.title} source code`}
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${project.title} live demo`}
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Featured badge */}
        {featuredProjectIds.has(project.id) && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-white">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <span className="font-mono uppercase tracking-wider">{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span className="font-mono">{project.date}</span>
        </div>

        <h3 className="text-xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech stack preview */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/5 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[11px] font-mono px-2 py-0.5 text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleToggleProjects = useCallback((expand: boolean) => {
    setShowAll(expand);
    if (!expand) {
      requestAnimationFrame(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }, []);

  const displayedProjects = useMemo(() => {
    return showAll
      ? projects
      : projects.filter((p) => featuredProjectIds.has(p.id));
  }, [showAll]);

  const handleProjectClick = useCallback(
    (id: number) => {
      navigate(`/project/${id}`);
    },
    [navigate]
  );

  return (
    <section id="projects" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
      <div className="section-container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-muted-foreground">02 / 06</span>
              <span className="h-px flex-1 max-w-[60px] bg-border" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-zinc-900 dark:text-zinc-100">
              Featured <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl font-medium">
              A selection of my recent work showcasing different technologies, design approaches, and problem-solving capabilities.
            </p>
          </div>

          {showAll && (
            <div className="text-sm text-muted-foreground font-mono">
              Showing <span className="text-foreground font-bold">{displayedProjects.length}</span> {displayedProjects.length === 1 ? "project" : "projects"}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 md:mt-20 flex flex-col items-center gap-6">
          {!showAll ? (
            <Card className="w-full max-w-3xl p-8 md:p-10 glass border-primary/10 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                These are a curated set. I've worked on many more projects across various industries and tech stacks. Let's talk if you want the full picture.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  onClick={() => handleToggleProjects(true)}
                  className="bg-foreground text-background hover:bg-foreground/90 border-0 hover-lift font-semibold"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    window.open("https://github.com/sohamchavan07", "_blank")
                  }
                  className="border-border hover:bg-muted/50 hover-lift"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </Card>
          ) : (
            <Button
              size="lg"
              onClick={() => handleToggleProjects(false)}
              variant="outline"
              className="border-border hover:bg-muted/50"
            >
              ← Show Featured Only
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
