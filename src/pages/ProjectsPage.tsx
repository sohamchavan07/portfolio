import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/Projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { useEffect } from "react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Collect all unique technology tags from every project */
const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.technologies.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
};

const ALL_TAGS = getAllTags();

// ─── Page ─────────────────────────────────────────────────────────────────────

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedTags(new Set());
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTags.size === 0) return projects;
    return projects.filter((p) =>
      p.technologies.some((t) => selectedTags.has(t))
    );
  }, [selectedTags]);

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
              Every project I've shipped — filter by technology to explore architecture, demos, and code.
            </p>
          </div>

          {/* Tag Filter */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Filter by technology
              </span>
              {selectedTags.size > 0 && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <X className="w-3 h-3" />
                  Clear ({selectedTags.size})
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => {
                const active = selectedTags.has(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-mono border transition-all duration-200 ${
                      active
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "border-border/80 bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-secondary/70"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground font-mono mb-8">
            Showing{" "}
            <span className="text-foreground font-bold">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
            {selectedTags.size > 0 && (
              <span>
                {" "}
                matching{" "}
                {Array.from(selectedTags)
                  .map((t) => `"${t}"`)
                  .join(", ")}
              </span>
            )}
          </p>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  featured={false}
                  onClick={() => handleProjectClick(project.id)}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-muted-foreground text-lg mb-4">
                No projects match the selected filters.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
