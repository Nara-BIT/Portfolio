import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Scene3D from "./Scene3D";
import { FiArrowDown } from "react-icons/fi";

// New animation variants for a centered, floating-up effect
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const child = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full px-6 flex flex-col items-center text-center z-10">
        
        {/* ─── CENTERED TEXT CONTENT ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={child}
            className="font-mono text-accent text-sm md:text-base mb-4 tracking-widest uppercase"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={child}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-100 tracking-tight leading-tight mb-4"
          >
            Narasingh S Jadhav.
          </motion.h1>

          <motion.div
            variants={child}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 h-12 mb-6"
          >
            I am a{" "}
            <TypeAnimation
              sequence={[
                "Software Engineer.",
                2000,
                "Full Stack Developer.",
                2000,
                "Data Science Student.",
                2000,
                "Competitive Programmer.",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-accent"
            />
          </motion.div>

          <motion.p
            variants={child}
            className="max-w-2xl text-gray-400 leading-relaxed text-base md:text-lg mb-10"
          >
            I'm a passionate programmer who loves turning ideas into real-world applications. 
            Whether it's building smart AI tools, managing data flows, or cracking tough algorithmic 
            puzzles, I just enjoy writing code and learning something new every day.
          </motion.p>

          <motion.div variants={child} className="flex flex-wrap justify-center gap-5">
            <a
              href="#projects"
              data-cursor="pointer"
              className="group relative px-8 py-4 rounded border border-accent text-accent font-mono text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(100,255,218,0.3)]"
            >
              <span className="absolute inset-0 bg-accent/10 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
              <span className="relative">View My Work</span>
            </a>
            <a
              href="#contact"
              data-cursor="pointer"
              className="px-8 py-4 rounded bg-accent/10 text-accent font-mono text-sm border border-transparent hover:border-accent transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* ─── 3D GLOBE ACTING AS A CENTERPIECE BELOW TEXT ─── */}
        <motion.div
          className="w-full max-w-3xl h-[250px] sm:h-[300px] md:h-[400px] mt-4 md:mt-8 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          <Scene3D />
        </motion.div>
      </div>

      {/* ─── SCROLL INDICATOR ─── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-accent transition-colors"
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