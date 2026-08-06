import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { ResolvedTheme, Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  onCycle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, resolvedTheme, onCycle }) => {
  const label =
    theme === 'system'
      ? `System theme (currently ${resolvedTheme}). Click to switch theme.`
      : `${theme === 'dark' ? 'Dark' : 'Light'} theme. Click to switch theme.`;

  return (
    <button
      type="button"
      onClick={onCycle}
      aria-label={label}
      title={label}
      className="relative inline-flex h-9 w-[68px] items-center rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FFFFFF] dark:bg-[#1C1C1F] hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA] dark:focus-visible:ring-offset-[#0B0B0D] cursor-pointer"
    >
      <span className="sr-only">{label}</span>

      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-[#A1A1AA] dark:text-[#52525B]">
        <Sun className="w-3.5 h-3.5" aria-hidden="true" />
        <Moon className="w-3.5 h-3.5" aria-hidden="true" />
      </span>

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-[3px] flex h-7 w-7 items-center justify-center rounded-full bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          theme === 'light'
            ? 'translate-x-[3px]'
            : theme === 'dark'
              ? 'translate-x-[34px]'
              : 'translate-x-[18.5px]'
        }`}
      >
        {theme === 'system' ? (
          <Monitor className="w-3.5 h-3.5" />
        ) : resolvedTheme === 'dark' ? (
          <Moon className="w-3.5 h-3.5" />
        ) : (
          <Sun className="w-3.5 h-3.5" />
        )}
      </span>
    </button>
  );
};
