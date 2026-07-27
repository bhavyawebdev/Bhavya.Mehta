import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Reveal } from "../lib/motion";
import { experience } from "../data/content";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 70%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="relative py-28 sm:py-36">
      <div className="container-edge">
        <div className="mb-14 grid grid-cols-12 gap-x-6 sm:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <p className="label-eyebrow mb-4">Experience</p>
            <Reveal>
              <h2 className="display-2 text-[clamp(2rem,4.4vw,3.25rem)] text-balance">
                Two years of <span className="italic-display text-acid-400">shipping</span> in public.
              </h2>
            </Reveal>
          </div>
        </div>

        <ol className="relative">
          {/* Spine background */}
          <span
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-ink-700 sm:left-[27px]"
          />
          {/* Spine progress */}
          <motion.span
            aria-hidden
            style={reduce ? undefined : { height: lineHeight }}
            className="absolute left-[19px] top-2 w-px bg-acid-400 sm:left-[27px]"
          />

          {experience.map((e, idx) => (
            <Reveal key={`${e.role}-${e.company}`} delay={idx * 0.08}>
              <li className="relative grid grid-cols-12 gap-x-6 py-10 sm:py-14">
                {/* Node */}
                <span
                  aria-hidden
                  className="col-span-1 mt-2 ml-[12px] inline-flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-ink-700 bg-ink-950 sm:ml-1 sm:size-5"
                >
                  <span className="size-1.5 rounded-full bg-acid-400" />
                </span>

                <div className="col-span-11 pl-4 sm:pl-8">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-50 sm:text-3xl">
                      {e.role}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid-400">
                      {e.company}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[13px] text-ink-400">
                    <span className="font-mono">{e.period}</span>
                    <span className="text-ink-700">·</span>
                    <span>{e.location}</span>
                  </div>

                  <ul className="mt-6 grid grid-cols-1 gap-3 text-[15px] leading-relaxed text-ink-200 lg:grid-cols-3">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="relative rounded-[10px] border border-ink-700/70 bg-ink-900/50 p-4"
                      >
                        <span
                          aria-hidden
                          className="absolute left-4 top-4 inline-block size-1.5 rounded-full bg-acid-400"
                        />
                        <p className="pl-4">{b}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
