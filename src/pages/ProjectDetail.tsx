import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Calendar,
  ArrowLeft,
  ChevronRight,
  User,
  Layout,
  Code2
} from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Button onClick={() => navigate("/")} className="bg-gradient-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Button>
      </div>
    );
  }

  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 md:pt-32 pb-20">
        <div className="section-container">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mb-8 hover:bg-secondary text-muted-foreground hover:text-foreground group transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
            Back to Projects
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Left Column: Project Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-border text-xs py-1 px-3 uppercase tracking-wider font-mono">
                    {project.category}
                  </Badge>
                  {project.technologies.map(tech => (
                    <Badge key={tech} className="bg-secondary/70 text-foreground border border-border/60 text-xs py-1 px-2.5 font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h1>
              </div>

              {/* Project Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-muted/30">
                <picture>
                  <source
                    srcSet={project.image.replace(/\.(png|jpg|jpeg)$/, '.webp')}
                    type="image/webp"
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-foreground">
                  <Layout className="w-5 h-5 text-primary" />
                  Project Overview
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-foreground">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {project.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-4 rounded-xl bg-card/70 border border-border/70 hover:border-primary/30 transition-colors shadow-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/90 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              <div className="p-6 sm:p-8 rounded-2xl bg-card/80 border border-border/80 sticky top-28 space-y-6 shadow-xl backdrop-blur-md">
                <div className="space-y-5">
                  <h3 className="text-lg font-bold text-foreground">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-mono">Date</p>
                        <p className="text-sm font-medium text-foreground">{project.date}</p>
                      </div>
                    </div>

                    {project.client && (
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-mono">Client</p>
                          <p className="text-sm font-medium text-foreground">{project.client}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-mono">Technologies</p>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {project.technologies.length > 0 
                            ? project.technologies.map(t => (
                              <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary border border-border/70 text-muted-foreground">
                                {t}
                              </span>
                            ))
                            : <span className="text-sm font-medium text-foreground">Web Development</span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  {hasLiveUrl && (
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md shadow-primary/20 transition-all text-sm"
                      onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Visit Live Site
                    </Button>
                  )}
                  {hasGithubUrl && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-border/80 hover:bg-secondary hover:text-foreground transition-all text-sm"
                      onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                    >
                      <Github className="mr-2 h-4 w-4" /> View Source Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
