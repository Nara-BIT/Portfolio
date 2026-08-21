import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Scene3D from "./Scene3D";
import { FiArrowDown } from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const child = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center px-6 lg:px-12 pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Main Content — Left */}
        <motion.div
          className="relative z-10 w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={child}
            className="font-mono text-text-muted text-sm md:text-base mb-4 tracking-widest uppercase"
          >
            Software Engineer & Developer
          </motion.p>

          <motion.h1
            variants={child}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black text-text-primary leading-[1.1] tracking-tighter"
          >
            Narasingh
            <br />
            Jadhav<span className="text-accent">.</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={child}
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary h-12"
          >
            <TypeAnimation
              sequence={[
                "Aspiring Software Engineer.", 2000,
                "Data Pipeline Builder.", 2000,
                "Competitive Programmer.", 2000,
                "AI & ML Explorer.", 2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            variants={child}
            className="flex flex-wrap items-center gap-6 mt-10"
          >
            <a
              href="#projects"
              data-cursor="pointer"
              className="px-8 py-4 rounded-full bg-text-primary text-surface font-semibold hover:bg-accent-dim hover:text-white transition-colors duration-300"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              data-cursor="pointer"
              className="px-8 py-4 rounded-full bg-surface-lighter text-text-primary font-semibold hover:bg-surface-border transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Scene — Right */}
        <motion.div
          className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          <Scene3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors group"
        data-cursor="pointer"
      >
        <div className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center group-hover:border-text-primary transition-colors">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <FiArrowDown className="text-sm" />
          </motion.div>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
      </motion.a>
    </section>
  );
}