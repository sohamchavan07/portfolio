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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="section-container">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mb-8 hover:bg-primary/10 group transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
            Back to Projects
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Project Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/20 text-xs py-0.5 uppercase tracking-wider">
                    {project.category}
                  </Badge>
                  {project.technologies.map(tech => (
                    <Badge key={tech} className="bg-primary/10 text-primary border-0 text-xs py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {project.title}
                </h1>
              </div>

              {/* Project Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/10 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Layout className="w-6 h-6 text-primary" />
                  Project Overview
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <ChevronRight className="w-6 h-6 text-primary" />
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-4 rounded-xl glass border-primary/5 hover:border-primary/20 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl glass border-primary/10 sticky top-28 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Date</p>
                        <p className="font-medium">{project.date}</p>
                      </div>
                    </div>

                    {project.client && (
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Client</p>
                          <p className="font-medium">{project.client}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Code2 className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Technologies</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.technologies.length > 0 
                            ? project.technologies.map(t => <span key={t} className="text-sm font-medium">{t}{project.technologies.indexOf(t) !== project.technologies.length - 1 ? ',' : ''} </span>)
                            : <span className="text-sm font-medium">Web Development</span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {project.liveUrl && (
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" /> Visit Live Site
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-primary/20 hover:bg-primary/5 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-5 w-5" /> View Source Code
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
