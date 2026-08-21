import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../data/constants";
import { FiGithub, FiArrowDown } from "react-icons/fi";

const INITIAL_PROJECTS_COUNT = 3;

// 3D Tilt Card Component
function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: (index % INITIAL_PROJECTS_COUNT) * 0.1 }}
      className="perspective-1000 w-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
        className="w-full glass rounded-3xl overflow-hidden cursor-pointer group hover:border-surface-border transition-colors duration-500"
      >
        {/* Project Banner Area - Colorful Gradient */}
        <div className={`w-full h-48 md:h-64 lg:h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center transform translate-z-10`}>
          {/* Subtle noise/texture over gradient */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
          
          <motion.h3 
            className="text-white text-3xl md:text-5xl font-display font-black text-center px-6 opacity-80 mix-blend-overlay group-hover:opacity-100 transition-opacity duration-300 transform"
            style={{ transform: "translateZ(40px)" }}
          >
            {project.name}
          </motion.h3>
        </div>

        {/* Project Details Area */}
        <div className="p-8 md:p-10 bg-surface-light transform translate-z-0">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <span className="font-mono text-sm text-text-muted">{project.year}</span>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-12 h-12 rounded-full border border-surface-border flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-surface hover:border-text-primary transition-all duration-300"
                aria-label="GitHub Repository"
              >
                <FiGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-surface-border">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-text-muted uppercase tracking-wider"
              >
                {tech}
                <span className="mx-2 opacity-50 last:hidden">•</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-4">Selected Work</h2>
          <div className="w-full h-px gradient-line" />
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          <AnimatePresence mode="popLayout">
            {projects.slice(0, visibleCount).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={handleLoadMore}
              data-cursor="pointer"
              className="group flex flex-col items-center gap-3 text-text-muted hover:text-text-primary transition-colors duration-300"
            >
              <span className="font-mono text-sm uppercase tracking-widest">Load More</span>
              <div className="w-12 h-12 rounded-full border border-surface-border flex items-center justify-center group-hover:border-text-primary transition-colors duration-300">
                <FiArrowDown className="text-lg group-hover:translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}