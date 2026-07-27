import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "../lib/motion";
import { skills } from "../data/content";

const groups = Array.from(new Set(skills.map((s) => s.group)));

export default function Skills() {
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container-edge">
        <div className="mb-12 grid grid-cols-12 gap-x-6 sm:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <p className="label-eyebrow mb-4">Skills</p>
            <Reveal>
              <h2 className="display-2 text-[clamp(2rem,4.4vw,3.25rem)] text-balance">
                A stack that <span className="italic-display text-acid-400">leans</span> on the MERN spine.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <p className="text-ink-300">
                Bars are honest gauges — these are the things I've shipped in production, not the things I've
                watched one tutorial of.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container-edge space-y-12 sm:space-y-16">
        {groups.map((g) => {
          const items = skills.filter((s) => s.group === g);
          return (
            <div key={g} className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 sm:col-span-3">
                <div className="sticky top-24">
                  <p className="label-eyebrow">{g}</p>
                  <p className="mt-2 font-display text-lg font-medium text-ink-100">{items.length} tools</p>
                </div>
              </div>
              <ul className="col-span-12 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-ink-700/70 bg-ink-700/70 sm:col-span-9 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => (
                  <li key={s.name} className="relative bg-ink-900 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-base font-medium text-ink-50">{s.name}</p>
                      <span className="font-mono text-[11px] text-ink-400">{s.level}</span>
                    </div>
                    <div className="mt-4 h-[3px] w-full overflow-hidden rounded-pill bg-ink-700">
                      <motion.div
                        initial={reduce ? { width: `${s.level}%` } : { width: "0%" }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1.1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-pill bg-acid-400"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
