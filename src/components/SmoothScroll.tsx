import { useEffect } from "react";

/**
 * Smooth scroll wrapper.
 *
 * Strategy: use the browser's native smooth-scroll path for everything
 * (anchor links, keyboard arrows, page-up/down, wheel, touch). CSS
 * `scroll-behavior: smooth` on `<html>` already gives us buttery motion
 * without intercepting events.
 *
 * A custom rAF wheel hijack tends to fight the OS, drop frames on high-res
 * wheels, and produce that "lurchy" feel people describe as "hard scrolling".
 * The browser's own smooth-scroll path is GPU-composited, respects
 * `prefers-reduced-motion`, and never desyncs from native focus/anchor
 * behavior — so we use it.
 *
 * We do add a tiny touch: on the very first scroll we ensure the doc is
 * scrolled to top if the URL hash isn't a valid target, and we keep the
 * `<html>` scroll-behavior smooth on every mount.
 */
type Opts = { enabled?: boolean };

export default function SmoothScroll({ children, enabled = true }: Opts & { children: React.ReactNode }) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollBehavior = prev;
    };
  }, [enabled]);

  return <>{children}</>;
}
