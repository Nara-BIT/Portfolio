import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Scene3D from "./Scene3D";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const quickLinks = [
  { icon: <FiGithub />, url: "https://github.com/Nara-BIT", label: "GitHub" },
  { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/narasingh-s-jadhav-0031a7245/", label: "LinkedIn" },
  { icon: <SiLeetcode />, url: "https://leetcode.com/u/BrawlyNara007/", label: "LeetCode" },
];

const highlights = [
  "400+ LC Problems",
  "MERN Stack",
  "Data Pipelines",
  "AI / ML",
  "DevOps",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* 3D Globe — sits behind everything as ambient background */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] opacity-30 lg:opacity-40 pointer-events-none hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <Scene3D />
      </motion.div>

      {/* Main Content — Centered */}
      <motion.div
        className="relative z-10 max-w-3xl w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Terminal-Style Intro Card */}
        <motion.div
          variants={child}
          className="mb-8 rounded-xl bg-dark-light/80 backdrop-blur-md border border-dark-lighter p-5 font-mono text-sm overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dark-lighter">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-gray-600 text-xs">narasingh@portfolio:~</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-1 text-gray-400">
            <p>
              <span className="text-accent">const</span>{" "}
              <span className="text-purple-400">developer</span>{" "}
              <span className="text-accent">=</span> {"{"}
            </p>
            <p className="pl-6">
              <span className="text-gray-500">name:</span>{" "}
              <span className="text-yellow-300">'Narasingh S Jadhav'</span>,
            </p>
            <p className="pl-6">
              <span className="text-gray-500">role:</span>{" "}
              <span className="text-yellow-300">'Software Engineer'</span>,
            </p>
            <p className="pl-6">
              <span className="text-gray-500">loves:</span>{" "}
              <span className="text-yellow-300">['Building', 'Learning', 'Problem Solving']</span>,
            </p>
            <p className="pl-6">
              <span className="text-gray-500">coffee:</span>{" "}
              <span className="text-accent">true</span>
            </p>
            <p>{"}"}</p>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={child}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight"
        >
          Narasingh S Jadhav
          <span className="text-accent">.</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          variants={child}
          className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold h-10"
        >
          <span className="text-gray-500">I am a </span>
          <TypeAnimation
            sequence={[
              "Software Engineer.", 2000,
              "Data Pipeline Builder.", 2000,
              "AI & ML Explorer.", 2000,
              "Problem Solver.", 2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-accent"
          />
        </motion.div>

        {/* Short Human Description */}
        <motion.p
          variants={child}
          className="mt-6 max-w-lg text-gray-400 leading-relaxed text-base md:text-lg"
        >
          I love building things that live on the internet. Right now, I'm deep
          into backend development, data pipelines, and AI — figuring out how to
          make systems that are fast, reliable, and actually useful. I break
          problems down, write clean code, and never stop learning.
        </motion.p>

        {/* Highlight Badges */}
        <motion.div variants={child} className="flex flex-wrap gap-2 mt-6">
          {highlights.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20 hover:border-accent/50 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons + Social Links Row */}
        <motion.div
          variants={child}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
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

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-dark-lighter mx-2" />

          {/* Quick Social Icons */}
          {quickLinks.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              data-cursor="pointer"
              className="text-gray-500 hover:text-accent text-xl transition-all duration-200 hover:-translate-y-1"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-accent transition-colors"
        data-cursor="pointer"
      >
        <span className="text-xs font-mono">scroll down</span>
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