import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { Reveal } from "../lib/motion";
import { projects } from "../data/content";

export default function Projects() {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start end", "end start"] });
  const stickerY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const [hovered, setHovered] = useState<number | null>(null);

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" ref={wrap} className="relative py-28 sm:py-36">
      <div className="container-edge">
        <div className="mb-14 grid grid-cols-12 gap-x-6 sm:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <p className="label-eyebrow mb-4">Selected work</p>
            <Reveal>
              <h2 className="display-2 text-[clamp(2rem,4.4vw,3.25rem)] text-balance">
                Things I've shipped, <span className="italic-display text-acid-400">not</span> things I've mocked up.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 mt-6 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <Reveal delay={0.1}>
              <p className="text-ink-300">
                Each project has a real repo or a live URL. The cases below cover the
                performance work, the auth model, and the bits that broke in production.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Featured card */}
        <Reveal>
          <motion.article
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            className="group relative grid grid-cols-12 gap-x-6 overflow-hidden rounded-[var(--radius-card)] border border-ink-700/70 bg-ink-900/60 transition-colors duration-300 hover:border-acid-400/40"
          >
            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-ink-700/60 lg:aspect-auto lg:h-full lg:border-b-0 lg:border-r">
                <motion.div
                  style={reduce ? undefined : { y: stickerY }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, rgba(196,240,0,0.18), transparent 55%), linear-gradient(135deg, #1a1814, #0a0a09)",
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
                  <div className="absolute inset-x-10 top-10 rounded-[10px] border border-ink-700/80 bg-ink-950/70 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-300">
                        ledgerly / dashboard
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-[#ff5f57]" />
                        <span className="size-2 rounded-full bg-[#febc2e]" />
                        <span className="size-2 rounded-full bg-[#28c840]" />
                      </div>
                    </div>
                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-400">
                          Net worth
                        </p>
                        <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink-50">
                          ₹12,48,902
                        </p>
                      </div>
                      <span className="chip text-acid-400">+ 6.2%</span>
                    </div>
                    <div className="mt-5 flex h-20 items-end gap-1.5">
                      {[34, 42, 28, 56, 48, 62, 70, 58, 76, 82, 74, 88].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${h}%` }}
                          className="flex-1 rounded-sm bg-acid-400/70"
                        />
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {["Income", "Spend", "Savings"].map((l, i) => (
                        <div key={l} className="rounded-[8px] border border-ink-700/70 bg-ink-900 p-3">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                            {l}
                          </p>
                          <p className="mt-1 font-display text-base font-semibold text-ink-50">
                            {["84.2k", "31.5k", "52.7k"][i]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="col-span-12 p-7 sm:p-10 lg:col-span-5 lg:p-12">
              <div className="flex items-center gap-2">
                <span className="chip">Featured</span>
                <span className="chip">2024</span>
              </div>

              <h3 className="mt-6 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-ink-50">
                {featured.title}
              </h3>
              <p className="mt-2 text-ink-300">{featured.tagline}</p>

              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink-200">
                {featured.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-acid-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-7 flex flex-wrap gap-2">
                {featured.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {featured.href && (
                  <a href={featured.href} target="_blank" rel="noreferrer" className="btn-primary">
                    Live
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                )}
                {featured.repo && (
                  <a href={featured.repo} target="_blank" rel="noreferrer" className="btn-ghost">
                    <GithubLogo size={16} weight="bold" />
                    Source
                  </a>
                )}
              </div>
            </div>

            <motion.span
              initial={false}
              animate={{ opacity: hovered === 0 ? 0.9 : 0 }}
              className="pointer-events-none absolute right-6 top-6 hidden items-center gap-2 rounded-pill border border-acid-400/30 bg-ink-950/70 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-acid-400 backdrop-blur lg:flex"
            >
              View case →
            </motion.span>
          </motion.article>
        </Reveal>

        {/* Stacked case row */}
        <ul className="mt-8 space-y-4">
          {rest.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.05}>
              <li>
                <CaseRow project={p} index={idx} />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CaseRow({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const seed = project.title.toLowerCase();
  return (
    <article className="group grid grid-cols-12 items-center gap-x-6 rounded-[var(--radius-card)] border border-ink-700/70 bg-ink-900/40 p-6 transition-colors duration-300 hover:border-acid-400/40 hover:bg-ink-900/70 sm:p-8">
      <div className="col-span-12 sm:col-span-3">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-ink-700/60 bg-ink-950 sm:aspect-[5/4]">
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,#1a1814,#0a0a09)]"
            aria-hidden
          />
          <img
            src={`https://picsum.photos/seed/${seed}/640/520`}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-70 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300">
              /{String(index + 1).padStart(2, "0")}
            </span>
            <span className="chip text-[10px]">{project.stack[0]}</span>
          </div>
        </div>
      </div>

      <div className="col-span-12 mt-5 sm:col-span-6 sm:mt-0">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-50 sm:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="mt-1 text-[15px] text-ink-300">{project.tagline}</p>
        <ul className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 mt-5 flex items-center gap-2 sm:col-span-3 sm:mt-0 sm:justify-end">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost px-4 py-2 text-[12px]"
          >
            <GithubLogo size={14} weight="bold" />
            Repo
          </a>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-4 py-2 text-[12px]"
          >
            Live
            <ArrowUpRight size={14} weight="bold" />
          </a>
        )}
      </div>
    </article>
  );
}
