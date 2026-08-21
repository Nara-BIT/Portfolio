import { motion } from "framer-motion";
import { leetcodeStats, codeforcesStats } from "../data/constants";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

/* ─── Animated Counter ─── */
function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}+</span>;
}

/* ─── Difficulty Bar ─── */
function DiffBar({ label, value, total, colorClass }) {
  const pct = Math.round((value / total) * 100);
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-text-secondary font-medium">{label}</span>
        <span className="font-mono text-text-primary">
          {value} <span className="text-text-muted text-xs">/ {total}</span>
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-lighter overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorClass}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function CodingProfiles() {
  const { total, easy, medium, hard, rating, profile } = leetcodeStats;

  return (
    <section id="coding" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-4">Competitive Programming</h2>
          <div className="w-full h-px gradient-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ─── LeetCode Card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-surface-border transition-colors duration-500 flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center border border-surface-border">
                  <SiLeetcode className="text-3xl text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">LeetCode</h3>
                  <p className="text-sm text-text-muted font-mono mt-1">@BrawlyNara007</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-10 pb-10 border-b border-surface-border">
                <div>
                  <p className="text-5xl md:text-6xl font-display font-black text-text-primary mb-2">
                    <Counter target={total} />
                  </p>
                  <p className="text-sm font-mono text-text-muted uppercase tracking-widest">Problems Solved</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl md:text-5xl font-display font-black text-orange-400 mb-2">
                    {rating}
                  </p>
                  <p className="text-sm font-mono text-text-muted uppercase tracking-widest">Peak Rating</p>
                </div>
              </div>

              <div className="space-y-6">
                <DiffBar label="Easy" value={easy} total={total} colorClass="bg-teal-400" />
                <DiffBar label="Medium" value={medium} total={total} colorClass="bg-yellow-400" />
                <DiffBar label="Hard" value={hard} total={total} colorClass="bg-red-500" />
              </div>
            </div>

            <div className="mt-10 pt-6">
              <a
                href={profile}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-orange-600 transition-colors"
              >
                View Profile <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>

          {/* ─── Codeforces Card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-surface-border transition-colors duration-500 flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center border border-surface-border">
                  <FaCode className="text-3xl text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Codeforces</h3>
                  <p className="text-sm text-text-muted font-mono mt-1">@{codeforcesStats.handle}</p>
                </div>
              </div>

              <h4 className="text-xl font-bold text-text-primary mb-6">Algorithm Focus</h4>
              
              <ul className="space-y-5 text-text-secondary">
                {[
                  "Active on Codeforces — solving Div-2 & Div-3 problem sets",
                  "Regular participant in Codeforces Rounds and educational contests",
                  "Strong grasp of Data Structures: Trees, Graphs, Heaps, Segment Trees",
                  "Algorithm proficiency: DP, Greedy, Binary Search, BFS / DFS",
                  "Consistent daily problem-solving practice"
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0 text-xs">◆</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6">
              <a
                href={codeforcesStats.profile}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-blue-600 transition-colors"
              >
                View Profile <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}