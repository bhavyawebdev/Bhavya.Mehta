import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Circle } from "@phosphor-icons/react";
import { MagneticWrap, Reveal } from "../lib/motion";
import { profile } from "../data/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_30%,#000,transparent)]"
      >
        <div
          className="h-full w-full opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Top status strip */}
      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="container-edge flex items-center justify-between text-[12px] text-ink-300"
      >
        <div className="flex items-center gap-2 font-mono uppercase tracking-[0.18em]">
          <Circle size={8} weight="fill" className="text-acid-400" />
          {profile.status}
          <span className="hidden text-ink-500 sm:inline">— {profile.location}</span>
        </div>
        <div className="hidden font-mono uppercase tracking-[0.18em] text-ink-400 sm:flex items-center gap-2">
          <span>v 1.0</span>
          <span className="text-ink-600">·</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </motion.div>

      <div className="container-edge mt-10 grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-y-0">
        {/* Left: Big type */}
        <div className="col-span-12 lg:col-span-8">
          <Reveal>
            <p className="label-eyebrow mb-6">
              <span className="text-acid-400">● </span>
              Portfolio / 2026
            </p>
          </Reveal>
          <motion.h1
            style={reduce ? undefined : { y, opacity }}
            className="display-1 text-[clamp(2.6rem,9vw,7rem)] text-balance"
          >
            <span className="block text-ink-50">I build&nbsp;</span>
            <span className="block">
              <span className="italic-display text-ink-50">considered</span>
              <span className="text-ink-50">,</span>
            </span>
            <span className="block">
              <span className="text-ink-50">fast </span>
              <span className="italic-display text-acid-400">web&nbsp;products</span>
              <span className="text-ink-50">.</span>
            </span>
          </motion.h1>

          <Reveal delay={0.15} className="mt-8 max-w-[58ch]">
            <p className="text-[1.0625rem] leading-relaxed text-ink-200 sm:text-[1.125rem]">
              {profile.intro} I work across <span className="text-ink-50">React</span>,{" "}
              <span className="text-ink-50">TypeScript</span>, <span className="text-ink-50">Node</span> and{" "}
              <span className="text-ink-50">MongoDB</span>, and I care a lot about what happens after the first
              deploy — the bug reports, the perf cliff, the a11y audit.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticWrap>
              <a href="#projects" className="btn-primary">
                See selected work
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </MagneticWrap>
            <MagneticWrap>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </MagneticWrap>
          </Reveal>
        </div>

        {/* Right: Index card */}
        <div className="col-span-12 lg:col-span-4 lg:pl-6">
          <Reveal delay={0.25} className="h-full">
            <div className="card-surface flex h-full flex-col p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <p className="label-eyebrow">Index</p>
                <span className="font-mono text-[10px] text-ink-400">{profile.initials}</span>
              </div>

              <ul className="mt-6 divide-y divide-ink-700/70 text-sm">
                <Stat label="Based in" value={profile.location} />
                <Stat label="Stack" value="MERN · TS · Tailwind" />
                <Stat label="Shipping for" value={`${profile.experienceYears}+ yrs`} />
                <Stat label="Projects shipped" value={`${profile.projectsShipped}`} />
                <Stat label="Response time" value="< 24h" />
              </ul>

              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300 hover:text-acid-400"
                >
                  <span className="inline-block size-1.5 rounded-full bg-acid-400 transition-transform duration-300 group-hover:scale-150" />
                  Currently taking on new work
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="container-edge mt-16 overflow-hidden border-y border-ink-700/60 py-4 sm:mt-24">
        <div className="flex animate-[marquee_38s_linear_infinite] gap-12 whitespace-nowrap font-display text-[1.75rem] tracking-tight text-ink-300 sm:text-[2rem]">
          {Array.from({ length: 2 }).flatMap((_, i) => (
            [
              "React", "★", "Node.js", "★", "TypeScript", "★", "MongoDB", "★",
              "Express", "★", "Tailwind CSS", "★", "REST APIs", "★", "JWT", "★",
              "Next.js", "★", "Postgres", "★", "Docker", "★",
            ].map((t, j) => (
              <span key={`${i}-${j}`} className="inline-flex items-center gap-12">
                <span className={t === "★" ? "text-ink-600" : ""}>{t}</span>
              </span>
            ))
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-4 py-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">{label}</span>
      <span className="text-ink-50">{value}</span>
    </li>
  );
}
