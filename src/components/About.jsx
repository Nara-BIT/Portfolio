import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { skills, flipImages } from "../data/constants";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  /* ─── Flip gallery state ─── */
  const [flipIndex, setFlipIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [instant, setInstant] = useState(false);

  const currentImage = flipImages[flipIndex];
  const nextImage = flipImages[(flipIndex + 1) % flipImages.length];

  const handleFlip = () => setIsFlipped(true);

  /* After the flip animation finishes: silently advance to the next
     image and reset rotation without animating (invisible swap). */
  const handleFlipEnd = (e) => {
    if (e.propertyName !== "transform" || !isFlipped) return;
    setInstant(true);
    setFlipIndex((i) => (i + 1) % flipImages.length);
    setIsFlipped(false);
  };

  useEffect(() => {
    if (!instant) return;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setInstant(false))
    );
    return () => cancelAnimationFrame(raf);
  }, [instant]);

  /* ─── 3D hover tilt + glare ─── */
  const [hovered, setHovered] = useState(false);
  const sx = useMotionValue(0);
  const sy = useMotionValue(0);
  const rotateX = useSpring(useTransform(sy, [-0.5, 0.5], [12, -12]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(sx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 250,
    damping: 25,
  });
  const glareX = useTransform(sx, (v) => (v + 0.5) * 100);
  const glareY = useTransform(sy, (v) => (v + 0.5) * 100);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35), transparent 55%)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    sx.set((e.clientX - rect.left) / rect.width - 0.5);
    sy.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    sx.set(0);
    sy.set(0);
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

          {/* Flip Gallery — hover to levitate & tilt, click to flip */}
          {flipImages.length > 0 && (
          <motion.div
            className="relative w-full aspect-[4/5] mx-auto max-w-sm lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="perspective-1000 h-full">
              <motion.div
                className="h-full"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                animate={{
                  y: hovered ? -14 : 0,
                  scale: hovered ? 1.03 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`w-full h-full relative rounded-2xl overflow-hidden glass border-surface-border transition-shadow duration-300 ${
                    hovered ? "shadow-2xl" : "shadow-md"
                  }`}
                  data-cursor="pointer"
                  onClick={handleFlip}
                  role="button"
                  aria-label="Flip to next photo"
                >
                  <div className="perspective-1000 absolute inset-0">
                    <div
                      className={`flip-card ${isFlipped ? "is-flipped" : ""} ${
                        instant ? "no-anim" : ""
                      }`}
                      onTransitionEnd={handleFlipEnd}
                    >
                      <img
                        className="flip-face"
                        src={currentImage.src}
                        alt={currentImage.alt}
                        draggable="false"
                      />
                      <img
                        className="flip-face flip-face-back"
                        src={nextImage.src}
                        alt={nextImage.alt}
                        draggable="false"
                      />
                    </div>
                  </div>

                  {/* Cursor-tracked glare */}
                  <motion.div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                      hovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ background: glare }}
                  />

                  <span className="absolute bottom-4 inset-x-0 text-center font-mono text-[10px] uppercase tracking-widest text-white/80 pointer-events-none select-none">
                    Click to flip
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          )}

        </div>
      </motion.div>
    </section>
  );
}