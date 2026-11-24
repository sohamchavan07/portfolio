import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/Projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// ─── Page ─────────────────────────────────────────────────────────────────────

const ProjectsPage = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProjectClick = useCallback(
    (id: number) => {
      navigate(`/project/${id}`);
    },
    [navigate]
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="section-container">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-secondary text-muted-foreground hover:text-foreground group transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 text-foreground">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Every project I've shipped — explore architecture, demos, and code.
            </p>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground font-mono mb-8">
            Showing{" "}
            <span className="text-foreground font-bold">
              {projects.length}
            </span>{" "}
            {projects.length === 1 ? "project" : "projects"}
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={false}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
