import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Scene3D from "./Scene3D";
import { FiArrowDown } from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
    id="hero"
    // Added pb-32 for mobile to create space for the scroll indicator
    className="relative min-h-[100dvh] flex items-center px-6 pt-20 pb-32 md:pb-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
        {/* Text */}
        <motion.div
          className="flex-1 z-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={child}
            className="font-mono text-accent text-sm md:text-base mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={child}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-100 leading-tight"
          >
            Narasingh S Jadhav.
          </motion.h1>

          <motion.div
            variants={child}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 mt-2 h-12"
          >
            <TypeAnimation
              sequence={[
                "Aspiring Software Engineer.",
                2000,
                "MERN Stack Developer.",
                2000,
                "Data Engineering Enthusiast.",
                2000,
                "Competitive Programmer.",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={child}
            className="mt-6 max-w-lg text-gray-400 leading-relaxed text-base md:text-lg"
          >
            I'm a Computer Science undergraduate specializing in Data Science at{" "}
            <span className="text-accent">
              Bangalore Institute of Technology
            </span>
            . I train AI & ML models ,practice DevOps ,design data pipelines, build scalable web applications and love
            solving algorithmic challenges.
          </motion.p>

          <motion.div variants={child} className="flex flex-wrap gap-4 mt-6 md:mt-8">
            <a
              href="#projects"
              data-cursor="pointer"
              className="group relative px-7 py-3 rounded border border-accent text-accent font-mono text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(100,255,218,0.3)]"
            >
              <span className="absolute inset-0 bg-accent/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <span className="relative">View My Work</span>
            </a>
            <a
              href="#contact"
              data-cursor="pointer"
              className="px-7 py-3 rounded bg-accent/10 text-accent font-mono text-sm border border-transparent hover:border-accent transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* 3D element (desktop) */}
        <motion.div
          className="flex-1 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Scene3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        // Changed 'flex' to 'hidden md:flex'
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-accent transition-colors"
        data-cursor="pointer"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown className="text-lg" />
        </motion.div>
      </motion.a>
    </section>
  );
}