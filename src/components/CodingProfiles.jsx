import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
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
function DiffBar({ label, value, total, color }) {
  const pct = Math.round((value / total) * 100);
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-400">{label}</span>
        <span className="font-mono text-gray-300">
          {value}{" "}
          <span className="text-gray-600 text-xs">/ {total}</span>
        </span>
      </div>
      <div className="h-2 rounded-full bg-dark-lighter overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
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
    <section id="coding" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="04" title="Coding Profiles" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* ─── LeetCode Card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl p-6 bg-dark-light border border-dark-lighter hover:border-accent/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <SiLeetcode className="text-3xl text-[#ffa116]" />
              <div>
                <h3 className="text-lg font-semibold text-gray-200">
                  LeetCode
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  @BrawlyNara007
                </p>
              </div>
            </div>

            <div className="flex items-center justify-around mb-6">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-accent">
                  <Counter target={total} />
                </p>
                <p className="text-xs text-gray-500 mt-1">Problems Solved</p>
              </div>
              <div className="w-px h-12 bg-dark-lighter" />
              <div className="text-center">
                <p className="text-4xl font-extrabold text-[#ffa116]">
                  {rating}
                </p>
                <p className="text-xs text-gray-500 mt-1">Peak Contest Rating</p>
              </div>
            </div>

            <div className="space-y-3">
              <DiffBar label="Easy" value={easy} total={total} color="#00b8a3" />
              <DiffBar label="Medium" value={medium} total={total} color="#ffc01e" />
              <DiffBar label="Hard" value={hard} total={total} color="#ef4743" />
            </div>

            <a
              href={profile}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="mt-6 block text-center text-sm font-mono text-accent border border-accent/30 rounded py-2 hover:bg-accent/10 transition-colors"
            >
              View LeetCode Profile →
            </a>
          </motion.div>

          {/* ─── Codeforces Card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-xl p-6 bg-dark-light border border-dark-lighter hover:border-accent/30 transition-colors duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-3xl text-[#1f8acb]" />
              <div>
                <h3 className="text-lg font-semibold text-gray-200">
                  Codeforces
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  @{codeforcesStats.handle}
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-400 flex-1">
              {[
                "Active on Codeforces — solving Div-2 & Div-3 problem sets",
                "Regular participant in Codeforces Rounds and educational contests",
                "Strong grasp of Data Structures: Trees, Graphs, Heaps, Segment Trees",
                "Algorithm proficiency: DP, Greedy, Binary Search, BFS / DFS",
                "Consistent daily problem-solving practice",
                "Strong analytical and logical reasoning skills",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={codeforcesStats.profile}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="block text-center text-sm font-mono text-accent border border-accent/30 rounded py-2 hover:bg-accent/10 transition-colors"
              >
                Codeforces Profile →
              </a>
              <a
                href={leetcodeStats.profile}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="block text-center text-sm font-mono text-[#1f8acb] border border-[#1f8acb]/30 rounded py-2 hover:bg-[#1f8acb]/10 transition-colors"
              >
                LeetCode Contests →
              </a>
            </div>
          </motion.div>
        </div>

        {/* ─── Achievements Banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 rounded-xl p-6 bg-dark-light border border-dark-lighter"
        >
          <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
            <span className="text-accent">🏆</span> Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "400+ Problems",
                desc: "Solved on LeetCode with peak contest rating of 1551",
              },
              {
                title: "PWxRIFT 2026 Hackathon",
                desc: "Built a self-healing CI/CD agent in 24-hour competitive sprint",
              },
              {
                title: "ByteQuest Finalist",
                desc: "Qualified for final round in ByteQuest Vibecoding Hackathon (Jan 2026)",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="p-4 rounded-lg bg-dark border border-dark-lighter hover:border-accent/20 transition-colors"
              >
                <p className="font-semibold text-accent text-sm mb-1">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}