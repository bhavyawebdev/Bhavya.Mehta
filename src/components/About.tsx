import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Reveal } from "../lib/motion";
import { profile } from "../data/content";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="about" ref={ref} className="relative py-28 sm:py-36">
      <div className="container-edge grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-10 sm:mb-14 lg:col-span-4">
          <p className="label-eyebrow mb-4">About</p>
          <Reveal>
            <h2 className="display-2 text-[clamp(2rem,4.4vw,3.25rem)] text-balance">
              Half engineer, <span className="italic-display text-acid-400">half</span> interface person.
            </h2>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="text-[1.0625rem] leading-relaxed text-ink-200 sm:text-[1.125rem]">
              {profile.about}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-200 sm:text-[1.125rem]">
              I treat every project like an audit waiting to happen. Each comes with Lighthouse targets, a
              checklist for keyboard nav, and a long, quiet argument with myself about whether the chosen API is
              the right one. Most of the time it isn't — that's the fun part.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-ink-700/70 bg-ink-700/70 sm:grid-cols-4">
              {[
                { k: "Years", v: `${profile.experienceYears}+` },
                { k: "Projects", v: `${profile.projectsShipped}` },
                { k: "Commits / wk", v: "40" },
                { k: "Coffee / day", v: "3" },
              ].map((m) => (
                <div key={m.k} className="bg-ink-900 p-5">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-400">{m.k}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink-50">{m.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Parallax portrait */}
      <div className="container-edge mt-16 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-ink-700/70 bg-ink-900 sm:aspect-[16/10]">
            <motion.div
              style={reduce ? undefined : { y: imgY }}
              className="absolute inset-0"
            >
              {/* Placeholder portrait — swap src to your image at /public/about.jpg */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a1814,#0a0a09)]" />
              <img
                src="https://picsum.photos/seed/bhavya-about/1280/800"
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                alt=""
                className="absolute inset-0 size-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-200">At the desk</p>
                <p className="mt-1 text-sm text-ink-100">Building MERN products from India</p>
              </div>
              <span className="chip">/about.jpg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
