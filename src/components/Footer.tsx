import { profile, socials } from "../data/content";

export default function Footer() {
  const tokens = [
    "Bhavya",
    "★",
    "MERN Developer",
    "★",
    "Open to work",
    "★",
    "India",
    "★",
    "React",
    "★",
    "TypeScript",
    "★",
  ];

  return (
    <footer className="relative border-t border-ink-700/70 pt-20 pb-10">
      {/* Giant marquee signature */}
      <div className="overflow-hidden border-y border-ink-700/60 py-10" aria-hidden>
        <div className="flex animate-[marquee_42s_linear_infinite] gap-12 whitespace-nowrap font-display text-[clamp(4rem,11vw,9rem)] font-semibold tracking-tighter leading-none text-ink-50">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            tokens.map((t, j) => (
              <span
                key={`${i}-${j}`}
                className={
                  t === "★"
                    ? "text-ink-700"
                    : t === profile.name
                      ? "text-ink-50"
                      : "text-ink-700"
                }
              >
                {t === "Bhavya" ? `${profile.name.toLowerCase()}.` : t}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="container-edge mt-16 grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-5">
          <a
            href="#top"
            className="group flex items-center gap-2 font-display text-xl font-semibold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-[8px] bg-acid-400 text-ink-950 transition-transform duration-300 group-hover:rotate-[14deg]">
              b.
            </span>
            <span className="text-ink-50">
              {profile.name.toLowerCase()}
              <span className="text-acid-400">.</span>
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                /portfolio
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-300">
            Built in React + Tailwind. Designed for the recruiter who scrolls for ten
            seconds and the engineering manager who pokes around for ten minutes.
          </p>
        </div>

        <div className="col-span-6 lg:col-span-3">
          <p className="label-eyebrow">On the page</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-300">
            <li><a className="hover:text-ink-50" href="#about">About</a></li>
            <li><a className="hover:text-ink-50" href="#projects">Projects</a></li>
            <li><a className="hover:text-ink-50" href="#experience">Experience</a></li>
            <li><a className="hover:text-ink-50" href="#certs">Certifications</a></li>
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-4">
          <p className="label-eyebrow">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-300">
            <li><a className="hover:text-ink-50" target="_blank" rel="noreferrer noopener" href={socials.github}>GitHub</a></li>
            <li><a className="hover:text-ink-50" target="_blank" rel="noreferrer noopener" href={socials.linkedin}>LinkedIn</a></li>
            <li><a className="hover:text-ink-50" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-edge mt-14 flex flex-col items-start justify-between gap-3 border-t border-ink-700/70 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} {profile.name} — all rights reserved</span>
        <span className="flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-acid-400" />
          Last updated {new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
        </span>
      </div>
    </footer>
  );
}
