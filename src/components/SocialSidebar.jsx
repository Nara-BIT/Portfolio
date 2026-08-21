import { motion } from "framer-motion";
import { socials } from "../data/constants";

export default function SocialSidebar() {
  return (
    <>
      {/* Left — Social icons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-0 left-6 xl:left-10 z-30 hidden lg:flex flex-col items-center gap-6"
      >
        {socials.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            data-cursor="pointer"
            className="text-text-muted hover:text-text-primary hover:-translate-y-1 transition-all duration-300 text-[22px]"
          >
            <Icon />
          </a>
        ))}
        <div className="w-px h-24 bg-surface-border mt-2" />
      </motion.div>

      {/* Right — Email */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="fixed bottom-0 right-6 xl:right-10 z-30 hidden lg:flex flex-col items-center gap-6"
      >
        <a
          href="mailto:narasinghjadhav03@gmail.com"
          data-cursor="pointer"
          className="font-mono text-xs tracking-widest text-text-muted hover:text-text-primary hover:-translate-y-1 transition-all duration-300"
          style={{ writingMode: "vertical-rl" }}
        >
          narasinghjadhav03@gmail.com
        </a>
        <div className="w-px h-24 bg-surface-border mt-2" />
      </motion.div>
    </>
  );
}