import { motion } from "framer-motion";
import { socials } from "../data/constants";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-surface-border bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        
        {/* Social icons — visible on mobile only (sidebar handles desktop) */}
        <div className="flex items-center gap-6 md:hidden">
          {socials.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="text-text-muted hover:text-text-primary transition-colors text-xl"
            >
              <Icon />
            </a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-text-muted leading-relaxed"
        >
          Designed & Built by{" "}
          <a
            href="https://github.com/Nara-BIT"
            target="_blank"
            rel="noreferrer"
            className="text-text-primary hover:underline font-medium"
          >
            Narasingh S Jadhav
          </a>
          <br />
          <span className="font-mono text-xs mt-2 block opacity-60">
            &copy; {new Date().getFullYear()} — All rights reserved.
          </span>
        </motion.p>
      </div>
    </footer>
  );
}