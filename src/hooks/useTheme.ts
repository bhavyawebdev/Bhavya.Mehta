import { useCallback, useEffect, useRef, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio_theme';
const TRANSITION_MS = 350;

let transitionTimer: ReturnType<typeof setTimeout> | undefined;

/** Apply the given theme to <html> and optionally run a smooth cross-fade. */
const applyTheme = (theme: Theme, animate = true) => {
  const root = document.documentElement;

  root.classList.toggle('dark', theme === 'dark');
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  // Update browser chrome color (Android / PWA)
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#0B0B0D' : '#FAFAFA');
  }

  // Cross-fade only when the user actively switches, never on first paint.
  if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (transitionTimer) clearTimeout(transitionTimer);
    root.classList.add('theme-transition');
    transitionTimer = setTimeout(
      () => root.classList.remove('theme-transition'),
      TRANSITION_MS,
    );
  }
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem(STORAGE_KEY);
    // Only honour a previously-saved value; otherwise start in light mode.
    return saved === 'dark' ? 'dark' : 'light';
  });

  const isFirstApply = useRef(true);

  useEffect(() => {
    // On first mount: apply without animation to avoid a flash of wrong theme.
    applyTheme(theme, !isFirstApply.current);
    isFirstApply.current = false;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    [],
  );

  const setMode = useCallback((next: Theme) => setTheme(next), []);

  return { theme, toggleTheme, setMode };
}
