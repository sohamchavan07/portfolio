import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

// ─── Config ───────────────────────────────────────────────────────────────────
// Change this Set to control which projects appear on the homepage.
export const FEATURED_IDS = new Set([15, 14, 10]);

// ─── ProjectCard (exported for reuse in ProjectsPage) ─────────────────────────

export interface ProjectCardProps {
  project: Project;
  index: number;
  /** Called when the card body is clicked (navigates to detail page) */
  onClick: () => void;
  /** Show the "Featured" badge when true */
  featured?: boolean;
}

export const ProjectCard = ({
  project,
  index,
  onClick,
  featured = false,
}: ProjectCardProps) => {
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

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
      className="group flex flex-col cursor-pointer animate-slide-up focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl p-4 sm:p-5 bg-card/60 border border-border/80 hover:border-primary/40 hover:bg-card/90 transition-all duration-300 shadow-sm hover:shadow-xl"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden mb-5 rounded-lg border border-border/60 bg-muted/30">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5">
          <div className="flex items-center gap-2 text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>View case study</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
          <div className="flex items-center gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View ${project.title} source code on GitHub`}
                title="View Source Code"
                className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all shadow-md"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${project.title} live demo`}
                title="Open Live Site"
                className="w-9 h-9 rounded-full bg-primary/90 backdrop-blur-md border border-primary flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/80 text-[11px] font-semibold uppercase tracking-wider text-foreground shadow-sm">
            <Sparkles className="w-3 h-3 text-primary" />
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <span className="font-mono uppercase tracking-wider text-primary font-medium">
            {project.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="font-mono">{project.date}</span>
        </div>

        <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors mb-2">
          {project.title}
        </h3>

        {/* Problem statement (if provided) */}
        {project.problemStatement && (
          <p className="text-xs text-muted-foreground/90 italic mb-2 leading-relaxed line-clamp-1">
            "{project.problemStatement}"
          </p>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>

        {/* Real metric */}
        {project.metric && (
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-mono font-medium mb-3 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md w-fit">
            <TrendingUp className="w-3.5 h-3.5" />
            {project.metric}
          </div>
        )}

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded border border-border/70 bg-secondary/50 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-border/70 bg-secondary/50 text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

const Projects = () => {
  const navigate = useNavigate();

  const featuredProjects = useMemo(
    () => projects.filter((p) => FEATURED_IDS.has(p.id)),
    []
  );

  const handleProjectClick = useCallback(
    (id: number) => {
      navigate(`/project/${id}`);
    },
    [navigate]
  );

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="section-container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                03 / 06
              </span>
              <span className="h-px w-8 bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              A selection of my recent work showcasing full-stack development, modern interfaces, and complex problem solving.
            </p>
          </div>
        </div>

        {/* Projects Grid — 3 featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 flex flex-col items-center">
          <Card className="w-full max-w-3xl p-8 md:p-10 bg-card/80 border border-border/80 text-center shadow-xl backdrop-blur-md rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-foreground">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              These are a curated set of featured projects. I've engineered many more applications across various tech stacks and industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover-lift font-medium shadow-md shadow-primary/20"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open("https://github.com/sohamchavan07", "_blank", "noopener,noreferrer")
                }
                className="border-border/80 hover:bg-secondary hover:text-foreground hover-lift"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
