import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/constants";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // 3D Tilt for image
  const x = useMotionValue(0);
  const yImage = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(yImage);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    yImage.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    yImage.set(0);
  };

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
        
        <div className="flex flex-col mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-4">About Me</h2>
          <div className="w-full h-px gradient-line" />
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">
          
          {/* Text Content */}
          <motion.div style={{ y }} className="space-y-8">
            <div className="prose prose-lg text-text-secondary leading-relaxed">
              <p>
                I'm a Computer Science undergraduate specializing in Data Science at <span className="text-text-primary font-medium">Bangalore Institute of Technology</span>. My journey into programming started with a curiosity for how things work under the hood, and it has evolved into a deep passion for building scalable systems.
              </p>
              <p>
                I am an <span className="text-text-primary font-medium">Aspiring Software Engineer</span> trying to make a significant impact in the landscape of Competitive Programming. I love the thrill of breaking down complex algorithmic challenges and writing efficient, clean code.
              </p>
              <p>
                Whether I'm designing robust backend architectures, orchestrating real-time data pipelines, or fine-tuning AI models, my goal is always the same: to build software that is fast, reliable, and actually useful.
              </p>
            </div>

            {/* Skills Pills */}
            <div>
              <h3 className="font-mono text-sm text-text-muted uppercase tracking-widest mb-6">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-surface-light border border-surface-border text-text-primary hover:bg-text-primary hover:text-surface hover:border-text-primary transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image with 3D Tilt */}
          <motion.div 
            className="relative w-full aspect-[4/5] perspective-1000 group mx-auto max-w-sm lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full relative rounded-2xl overflow-hidden glass border-surface-border cursor-crosshair"
            >
              {/* Fallback pattern if no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface-light to-surface flex flex-col items-center justify-center text-surface-border">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="font-mono text-xs mt-4 tracking-widest">N.J.</span>
              </div>
              
              <img
                src="/potrait_hero.png"
                alt="Narasingh"
                className="absolute inset-0 w-full h-full object-cover object-top transform translate-z-10"
                style={{ transform: "translateZ(30px)" }}
              />

              {/* Highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-accent/10 pointer-events-none" />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}