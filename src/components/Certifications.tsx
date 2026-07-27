import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "../lib/motion";
import { certifications } from "../data/content";

export default function Certifications() {
  const reduce = useReducedMotion();
  return (
    <section id="certs" className="relative py-28 sm:py-36">
      <div className="container-edge">
        <div className="mb-12 grid grid-cols-12 gap-x-6 sm:mb-16">
          <div className="col-span-12 lg:col-span-8">
            <p className="label-eyebrow mb-4">Certifications</p>
            <Reveal>
              <h2 className="display-2 text-[clamp(2rem,4.4vw,3.25rem)] text-balance">
                Receipts, not <span className="italic-display text-acid-400">pitches</span>.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 mt-6 lg:col-span-4 lg:mt-2">
            <Reveal delay={0.1}>
              <p className="text-ink-300">
                A small, curated list. I keep it short on purpose — the work above
                does most of the talking.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-ink-700/70 bg-ink-700/70 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <motion.li
                whileHover={{ scale: reduce ? 1 : 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="group flex h-full flex-col gap-4 bg-ink-900 p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-[10px] bg-acid-400/10 text-acid-400">
                    <GraduationCap size={20} weight="bold" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                    {c.year}
                  </span>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-ink-50">
                    {c.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-300">{c.issuer}</p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-ink-700/70 pt-4">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-500">
                    Verified
                  </span>
                  <span className="inline-flex items-center gap-1 text-[12px] text-ink-300 transition-colors group-hover:text-acid-400">
                    Credential
                    <ArrowUpRight size={12} weight="bold" />
                  </span>
                </div>
              </motion.li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
