import { useEffect } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Smooth scroll wrapper.
 *
 * Strategy: keep native browser scrolling and rely on CSS `scroll-behavior: smooth`
 * for native smoothness on hash anchors, keyboard arrows, and page-up/down.
 * We ONLY apply improvements on desktop with fine pointers (where browsers
 * tend to feel stepping/jittery on a high-res wheel mouse).
 *
 * On those devices we add a gentle wheel-velocity ease ON TOP of native scroll
 * (not replacing it) by reading wheel delta, accumulating a small inertia
 * value, and using rAF to scrollTo toward it. While the ease is active we
 * preventDefault to suppress the native step-and-catch effect; once inertia
 * decays, control returns to the browser. Result: Lenis-like glide without
 * hijacking keyboard nav, anchors, focus, or browser scroll position semantics.
 *
 * Touch devices / reduced motion / no fine pointer: pure native, CSS-smooth.
 */
type Opts = { enabled?: boolean };

export default function SmoothScroll({ children, enabled = true }: Opts & { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!enabled || reduce) return;
    if (typeof window === "undefined") return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const hasFineWheel = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (isCoarse || !hasFineWheel) return;

    document.documentElement.style.scrollBehavior = "auto";

    let speed = 0;
    let raf = 0;
    let lastDeltaAt = 0;
    let controlling = false;

    const decay = () => {
      if (Math.abs(speed) < 0.4) {
        speed = 0;
        controlling = false;
        return;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = Math.max(0, Math.min(max, window.scrollY + speed * 0.016));
      window.scrollTo(0, next);
      speed *= 0.88;
      raf = requestAnimationFrame(decay);
    };

    const onWheel = (e: WheelEvent) => {
      const now = performance.now();
      if (now - lastDeltaAt > 140) speed = 0;
      speed += e.deltaY * 0.55;
      // Cap velocity so a violent flick doesn't fling the page
      speed = Math.max(-2200, Math.min(2200, speed));
      lastDeltaAt = now;

      if (!controlling && Math.abs(speed) > 1) {
        controlling = true;
        e.preventDefault();
        raf = requestAnimationFrame(decay);
      } else if (controlling) {
        e.preventDefault();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      const handled = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];
      if (!handled.includes(e.key)) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const stepMap: Record<string, number> = {
        ArrowDown: 80,
        ArrowUp: -80,
        PageDown: window.innerHeight * 0.85,
        PageUp: -window.innerHeight * 0.85,
        End: max,
        Home: -max,
        " ": e.shiftKey ? -window.innerHeight * 0.85 : window.innerHeight * 0.85,
      };
      const delta = stepMap[e.key];
      if (delta === undefined) return;
      e.preventDefault();
      const target = Math.max(0, Math.min(max, window.scrollY + delta));
      window.scrollTo({ top: target, behavior: "smooth" as ScrollBehavior });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf);
      document.documentElement.style.scrollBehavior = "";
    };
  }, [enabled, reduce]);

  return <>{children}</>;
}
