import React from 'react';
import { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onToggle}
      style={{
        /* ── Pill track ── */
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: '56px',
        height: '30px',
        borderRadius: '999px',
        padding: '4px',
        cursor: 'pointer',
        flexShrink: 0,
        outline: 'none',
        border: isDark ? '1.5px solid #3F3F46' : '1.5px solid #CBD5E1',
        background: isDark
          ? 'linear-gradient(135deg, #18181B 0%, #1C1C1F 100%)'
          : 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
        boxShadow: isDark
          ? 'inset 0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)'
          : 'inset 0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.6)',
        transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
      }}
    >
      {/* ── Sliding thumb ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '4px',
          left: isDark ? 'calc(100% - 26px)' : '4px',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          /* Colour: golden sun in light mode, violet moon in dark */
          background: isDark
            ? 'linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)'
            : 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
          color: '#fff',
          boxShadow: isDark
            ? '0 0 10px 2px rgba(167,139,250,0.40), 0 2px 4px rgba(0,0,0,0.4)'
            : '0 0 10px 2px rgba(251,191,36,0.50), 0 2px 4px rgba(0,0,0,0.15)',
          transition:
            'left 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>

      {/* ── Decorative stars (visible only in dark mode) ── */}
      {isDark && (
        <>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '8px',
              top: '7px',
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              background: '#A1A1AA',
              opacity: 0.7,
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '13px',
              top: '13px',
              width: '1.5px',
              height: '1.5px',
              borderRadius: '50%',
              background: '#A1A1AA',
              opacity: 0.45,
            }}
          />
        </>
      )}
    </button>
  );
};
