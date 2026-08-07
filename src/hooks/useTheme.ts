import { useCallback, useEffect, useRef, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio_theme';
const TRANSITION_MS = 350;

let transitionTimer: ReturnType<typeof setTimeout> | undefined;

const getSystemTheme = (): ResolvedTheme =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const resolveTheme = (theme: Theme): ResolvedTheme =>
  theme === 'system' ? getSystemTheme() : theme;

const applyTheme = (theme: Theme, options: { animate?: boolean } = {}) => {
  const root = document.documentElement;
  const resolved = resolveTheme(theme);

  root.classList.toggle('dark', resolved === 'dark');
  root.dataset.theme = theme;
  root.style.colorScheme = resolved;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', resolved === 'dark' ? '#0B0B0D' : '#FAFAFA');
  }

  // Cross-fade colors only when the user actively switches themes — never on
  // first paint, and never when the user prefers reduced motion.
  const { animate = true } = options;
  if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (transitionTimer) clearTimeout(transitionTimer);
    root.classList.add('theme-transition');
    transitionTimer = setTimeout(() => root.classList.remove('theme-transition'), TRANSITION_MS);
  }
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system';
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    typeof window === 'undefined' ? 'light' : resolveTheme(theme),
  );

  const isFirstApply = useRef(true);

  useEffect(() => {
    // Skip the transition animation on the very first apply to avoid a flash
    // on initial paint (the inline <head> script already set the theme).
    applyTheme(theme, { animate: !isFirstApply.current });
    isFirstApply.current = false;
    setResolvedTheme(resolveTheme(theme));
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Keep the resolved theme in sync with the OS while in "system" mode.
  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      applyTheme('system', { animate: false });
      setResolvedTheme(getSystemTheme());
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [theme]);

  const setMode = useCallback((next: Theme) => setTheme(next), []);

  return { theme, resolvedTheme, setMode };
}
