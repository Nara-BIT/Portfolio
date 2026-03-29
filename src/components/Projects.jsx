import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/constants";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

/* Language color mapping */
const langColor = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  "C++": "#f34b7d",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export default function Projects() {
  // Separate featured (large cards) and others (small cards)
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="03" title="Projects" />

        {/* ─── Featured Projects (large cards) ─── */}
        <div className="space-y-8 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
              data-cursor="pointer"
              className="group cursor-pointer relative rounded-xl p-6 md:p-8 bg-dark-light border border-dark-lighter hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FaFolder className="text-accent text-2xl flex-shrink-0" />
                    <div>
                      <p className="font-mono text-accent text-xs mb-1">
                        Featured Project
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-accent transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 text-gray-400">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()} /* Prevents double click bug */
                        className="hover:text-accent transition-colors text-lg"
                        aria-label="GitHub"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-accent transition-colors text-lg"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-5 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-dark border border-dark-lighter text-accent/80 group-hover:border-accent/50 group-hover:text-accent transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Language indicator */}
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{
                      backgroundColor: langColor[project.language] || "#8892b0",
                    }}
                  />
                  <span>{project.language}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Other Projects (grid cards) ─── */}
        {others.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-gray-300 text-center mb-8"
            >
              Other Noteworthy Projects
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-5">
              {others.map((project, i) => (
                <motion.div
                  key={project.id}
                  custom={i + featured.length}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                  data-cursor="pointer"
                  className="group cursor-pointer flex flex-col justify-between rounded-xl p-6 bg-dark-light border border-dark-lighter hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <FaFolder className="text-accent text-2xl" />
                      <div className="flex items-center gap-3 text-gray-400">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-accent transition-colors"
                            aria-label="GitHub"
                          >
                            <FiGithub />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-accent transition-colors"
                            aria-label="Live Demo"
                          >
                            <FiExternalLink />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-200 group-hover:text-accent transition-colors duration-300 mb-2">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 pt-4 border-t border-dark-lighter mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-gray-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{
                          backgroundColor:
                            langColor[project.language] || "#8892b0",
                        }}
                      />
                      <span>{project.language}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* View more on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Nara-BIT?tab=repositories"
            target="_blank"
            rel="noreferrer"
            data-cursor="pointer"
            className="inline-block px-8 py-3 rounded border border-accent text-accent font-mono text-sm hover:bg-accent/10 transition-all duration-300"
          >
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}