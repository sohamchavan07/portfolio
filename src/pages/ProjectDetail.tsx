import { useEffect, useMemo } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, hasUrl, projectPath, projects } from "@/data/projects";

const ProjectDetail = () => {
  // The route in App.tsx is still `/project/:id`. The param now carries the slug.
  const { id: slug } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const project = getProjectBySlug(slug);

  // Old links used the numeric id (/project/15): send them to the slug URL.
  const legacyProject =
    !project && slug && /^\d+$/.test(slug)
      ? projects.find((p) => p.id === Number(slug))
      : undefined;

  // Up to three other projects, ranked by how many technologies they share with this one.
  const related = useMemo(() => {
    if (!project) return [];
    const stack = new Set(project.technologies);
    return projects
      .filter((p) => p.id !== project.id)
      .map((p) => ({ p, score: p.technologies.filter((t) => stack.has(t)).length }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ p }) => p);
  }, [project]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project) return;
    const previousTitle = document.title;
    document.title = `${project.title} | Soham Chavan`;
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (legacyProject) {
    return <Navigate to={projectPath(legacyProject)} replace />;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="section-container max-w-xl">
            <h1 className="text-3xl font-bold text-foreground mb-3">Project not found</h1>
            <p className="text-muted-foreground mb-8">
              This link doesn't match any project. It may have been renamed or removed.
            </p>
            <Button asChild>
              <Link to="/projects">Browse all projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const hasLive = hasUrl(project.liveUrl);
  const hasGithub = hasUrl(project.githubUrl);
  const paragraphs = project.longDescription?.split("\n\n") ?? [];

  // location.key is "default" only on the first entry of this session (direct visit / shared link).
  const goBack = () => {
    if (location.key !== "default") navigate(-1);
    else navigate("/projects");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="section-container">
          <Button
            variant="ghost"
            onClick={goBack}
            className="mb-8 -ml-3 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {/* Title + the two actions people came for */}
          <header className="max-w-3xl mb-10">
            <p className="text-sm font-mono text-muted-foreground mb-3">{project.date}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {(hasLive || hasGithub) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {hasLive && (
                  <Button asChild size="lg">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live demo
                    </a>
                  </Button>
                )}
                {hasGithub && (
                  <Button asChild size="lg" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source code
                    </a>
                  </Button>
                )}
              </div>
            )}
          </header>

          {/* Hero image */}
          <div className="aspect-video rounded-2xl overflow-hidden border border-border/80 bg-muted/30 mb-14">
            <picture>
              <source
                srcSet={project.image.replace(/\.(png|jpg|jpeg)$/, ".webp")}
                type="image/webp"
              />
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main column */}
            <div className="lg:col-span-8 space-y-12">
              {project.problemStatement && (
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">The goal</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-prose">
                    {project.problemStatement}
                  </p>
                </section>
              )}

              {paragraphs.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">About this project</h2>
                  <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-prose">
                    {paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              )}

              {project.features.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">What it does</h2>
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-foreground/90">
                        <Check className="w-4 h-4 mt-1 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Screenshots</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.gallery.map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="w-full rounded-xl border border-border/70"
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Quiet reference column */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 rounded-2xl border border-border/80 bg-card/60 p-6 space-y-6">
                <div>
                  <h2 className="text-sm font-medium text-muted-foreground mb-3">Stack</h2>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded border border-border/70 bg-secondary/50 text-foreground/90"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <dl className="space-y-4 text-sm border-t border-border/60 pt-6">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Year</dt>
                    <dd className="text-foreground">{project.date}</dd>
                  </div>
                  {project.client && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Built as</dt>
                      <dd className="text-foreground text-right">{project.client}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </aside>
          </div>

          {/* More projects */}
          {related.length > 0 && (
            <section className="mt-20 pt-12 border-t border-border/80">
              <div className="flex items-end justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold text-foreground">More projects</h2>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  All projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;