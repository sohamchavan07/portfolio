import { Link } from "react-router-dom";
import { projects, projectPath, hasUrl } from "@/data/projects";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

// ─── Config ───────────────────────────────────────────────────────────────────
// Change this Set to control which projects appear on the homepage.
export const FEATURED_IDS = new Set([17, 15, 14]);

const featuredProjects = projects.filter((p) => FEATURED_IDS.has(p.id));

// ─── ProjectCard (exported for reuse in ProjectsPage and ProjectDetail) ───────

export interface ProjectCardProps {
  project: Project;
  index: number;
  /**
   * @deprecated The card is now a real <Link>, so it navigates by itself.
   * Still accepted so existing callers keep compiling.
   */
  onClick?: () => void;
  /** Show the "Featured" badge. Meaningful on the full list, redundant on the homepage. */
  featured?: boolean;
}

export const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  const hasLive = hasUrl(project.liveUrl);
  const hasGithub = hasUrl(project.githubUrl);

  return (
    <article
      className="group relative flex flex-col animate-slide-up rounded-xl p-4 sm:p-5 bg-card/60 border border-border/80 hover:border-primary/40 hover:bg-card/90 transition-colors"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden mb-5 rounded-lg border border-border/60 bg-muted/30">
        <picture>
          <source
            srcSet={project.image.replace(/\.(png|jpg|jpeg)$/, ".webp")}
            type="image/webp"
          />
          <img
            src={project.image}
            alt=""
            className="w-full aspect-[16/10] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width={800}
            height={500}
          />
        </picture>

        {featured && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/80 text-xs font-medium text-foreground">
            <Sparkles className="w-3 h-3 text-primary" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <p className="text-xs font-mono text-muted-foreground mb-2">{project.date}</p>

        {/* Stretched link: the ::after covers the whole card, so the card is one real anchor */}
        <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
          <Link
            to={projectPath(project)}
            className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-primary focus-visible:after:ring-offset-2 focus-visible:after:ring-offset-background"
          >
            {project.title}
          </Link>
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {project.metric && (
          <p className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            {project.metric}
          </p>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded border border-border/70 bg-secondary/50 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs font-mono px-2 py-0.5 rounded border border-border/70 bg-secondary/50 text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer: always visible, so it also works on touch screens */}
        <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between">
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary transition-colors"
          >
            View case study
            <ArrowRight className="w-4 h-4" />
          </span>

          {/* z-10 lifts these above the stretched link */}
          <div className="relative z-10 flex items-center gap-1">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                title="Source code"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                title="Live demo"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

const Projects = () => (
  <section id="projects" className="section-padding bg-secondary/20">
    <div className="section-container">
      <div className="mb-12 md:mb-16 max-w-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">03 / 06</span>
          <span className="h-px w-8 bg-border" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Three projects to start with. Each one opens into a full write-up with the live site and source code linked.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg">
          <Link to="/projects">
            View all {projects.length} projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="https://github.com/sohamchavan07" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub profile
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Projects;