import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useScrolled } from "../lib/motion";
import { profile } from "../data/content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certs" },
];

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-300 ${
        scrolled
          ? "border-b border-ink-700/60 bg-ink-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/55"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="inline-block size-6 rounded-[6px] bg-acid-400 transition-transform duration-300 group-hover:rotate-[14deg]" />
          <span className="text-ink-50">{profile.name.toLowerCase()}<span className="text-acid-400">.</span></span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 sm:inline">/dev</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-pill px-3.5 py-1.5 text-sm text-ink-200 transition-colors hover:bg-ink-800/60 hover:text-ink-50"
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2 px-4 py-1.5 text-[13px]">
            Contact
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex size-10 items-center justify-center rounded-pill border border-ink-700 text-ink-100"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative size-4">
            <span className={`absolute left-0 top-1 block h-[1.5px] w-4 bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1 block h-[1.5px] w-4 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[11px] block h-[1.5px] w-4 bg-current transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-ink-700/60 bg-ink-950"
          >
            <div className="container-edge flex flex-col gap-2 py-5">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-pill px-3.5 py-2 text-sm text-ink-200 hover:bg-ink-800/60 hover:text-ink-50"
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 self-start">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
