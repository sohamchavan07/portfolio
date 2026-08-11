import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleToggleProjects = (expand: boolean) => {
    setShowAll(expand);
    if (!expand) {
      requestAnimationFrame(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  };

  const displayedProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, 6);
  }, [showAll]);

  const handleProjectClick = useCallback((id: number) => {
    navigate(`/project/${id}`);
  }, [navigate]);

  return (
    <section id="projects" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-zinc-900 dark:text-zinc-100 flex items-center justify-center gap-4">
            Featured Works
            <span className="text-zinc-500 font-mono text-2xl font-normal tracking-normal border border-zinc-500/30 px-3 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800">
              &#123;02&#125;
            </span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            A selection of my recent work showcasing different technologies, design approaches, and problem-solving capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                className="group flex flex-col bg-white dark:bg-zinc-950 border-2 border-zinc-900 dark:border-zinc-800 rounded-sm overflow-hidden hover:border-blue-400 dark:hover:border-blue-300 transition-colors shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
              >
                {/* Project Image */}
                <div
                  className="relative overflow-hidden cursor-pointer aspect-[1.6/1] bg-zinc-100 dark:bg-zinc-900"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow p-5 sm:p-6">
                  <h3
                    className="text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed flex-grow font-medium">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6 pointer-events-none">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 rounded-sm">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center py-2 px-3 text-[11px] sm:text-xs font-black uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-sm hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Code ↗
                      </a>
                    ) : (
                      <div className="flex items-center justify-center py-2 px-3 text-[11px] sm:text-xs font-black uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 border-2 border-zinc-300 dark:border-zinc-700 rounded-sm cursor-not-allowed">
                        Private
                      </div>
                    )}

                    { (project.liveUrl || project.demoUrl) ? (
                      <a
                        href={project.liveUrl || project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center py-2 px-3 text-[11px] sm:text-xs font-black uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-sm hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo ↗
                      </a>
                    ) : (
                      <div className="flex items-center justify-center py-2 px-3 text-[11px] sm:text-xs font-black uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 border-2 border-zinc-300 dark:border-zinc-700 rounded-sm cursor-not-allowed">
                        -
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16 pt-8 border-t-2 border-zinc-200 dark:border-zinc-800">
          {!showAll ? (
            <button
              className="flex items-center justify-center py-4 px-8 text-sm font-black uppercase tracking-widest bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.2)] rounded-sm transition-all"
              onClick={() => handleToggleProjects(true)}
            >
              View All Projects (14) →
            </button>
          ) : (
            <button
              className="flex items-center justify-center py-4 px-8 text-sm font-black uppercase tracking-widest bg-zinc-900 dark:bg-white text-white dark:text-black border-2 border-zinc-900 dark:border-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(59,130,246,1)] rounded-sm transition-all"
              onClick={() => handleToggleProjects(false)}
            >
              Show Featured Projects ←
            </button>
          )}

          <a
            href="https://github.com/sohamchavan07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center py-4 px-8 text-sm font-black uppercase tracking-widest bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.2)] rounded-sm transition-all"
          >
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;