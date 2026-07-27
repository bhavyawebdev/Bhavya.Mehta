import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1450);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid size-16 place-items-center rounded-[10px] bg-acid-400 text-ink-950"
            >
              <span className="font-display text-xl font-bold tracking-tighter">b.</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300"
              >
                <span className="inline-block size-1.5 rounded-full bg-acid-400" />
                Loading portfolio
                <span className="text-ink-500">/</span>
                <span>2026</span>
              </motion.div>
            </div>

            <div className="h-px w-44 overflow-hidden bg-ink-700">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                className="h-full bg-acid-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
