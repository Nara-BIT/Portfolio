import { motion } from "framer-motion";
import { experience, hackathons } from "../data/constants";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-4">Experience</h2>
          <div className="w-full h-px gradient-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Work Experience */}
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-sm text-text-muted uppercase tracking-widest mb-8"
            >
              Work
            </motion.h3>
            
            <motion.div 
              custom={0}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-surface-border transition-colors duration-300"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-2">
                  <div>
                    <h4 className="text-2xl font-bold text-text-primary mb-1">{experience.role}</h4>
                    <p className="text-lg text-text-secondary">{experience.company}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-sm text-accent mb-1">{experience.period}</p>
                    <p className="text-sm text-text-muted">Lead of {experience.teamLead}</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                      <span className="text-accent mt-1.5 flex-shrink-0 text-xs">◆</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Hackathons */}
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-sm text-text-muted uppercase tracking-widest mb-8"
            >
              Hackathons
            </motion.h3>
            
            <div className="space-y-6">
              {hackathons.map((hackathon, i) => (
                <motion.div 
                  key={hackathon.name}
                  custom={i + 1}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-surface-border transition-colors duration-300"
                >
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                      <h4 className="text-xl font-bold text-text-primary">{hackathon.name}</h4>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-surface-lighter text-accent border border-surface-border">
                        {hackathon.result}
                      </span>
                    </div>
                    
                    <p className="text-sm text-text-primary font-medium mb-2">Project: {hackathon.project}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{hackathon.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
