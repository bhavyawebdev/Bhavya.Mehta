import React from 'react';
import { ResolvedTheme, Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  resolvedTheme: ResolvedTheme;
  onSelect: (theme: Theme) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ resolvedTheme, onSelect }) => {
  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    onSelect(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={handleToggle}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: '52px',
        height: '28px',
        borderRadius: '999px',
        border: isDark ? '1px solid #3F3F46' : '1px solid #D4D4D8',
        background: isDark
          ? 'linear-gradient(135deg, #1C1C1F 0%, #27272A 100%)'
          : 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
        cursor: 'pointer',
        padding: '3px',
        transition: 'background 0.35s ease, border-color 0.35s ease',
        boxShadow: isDark
          ? '0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 2px rgba(0,0,0,0.4)'
          : '0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 2px rgba(0,0,0,0.06)',
        outline: 'none',
        flexShrink: 0,
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      {/* Track glow stars (dark mode only) */}
      {isDark && (
        <>
          <span style={{
            position: 'absolute',
            left: '6px',
            top: '5px',
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: '#A1A1AA',
            opacity: 0.7,
            transition: 'opacity 0.3s ease',
          }} />
          <span style={{
            position: 'absolute',
            left: '10px',
            top: '10px',
            width: '1.5px',
            height: '1.5px',
            borderRadius: '50%',
            background: '#A1A1AA',
            opacity: 0.5,
          }} />
        </>
      )}

      {/* Thumb */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '3px',
          left: isDark ? 'calc(100% - 25px)' : '3px',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: isDark
            ? 'linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)'
            : 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
          boxShadow: isDark
            ? '0 0 8px 2px rgba(167,139,250,0.35), 0 1px 4px rgba(0,0,0,0.4)'
            : '0 0 8px 2px rgba(251,191,36,0.45), 0 1px 4px rgba(0,0,0,0.15)',
          transition: 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.35s ease, box-shadow 0.35s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          lineHeight: 1,
        }}
      >
        {/* Icon inside thumb */}
        {isDark ? (
          /* Moon icon */
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden="true"
            style={{ transition: 'opacity 0.25s ease', opacity: 1 }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
          </svg>
        ) : (
          /* Sun icon */
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
            aria-hidden="true"
            style={{ transition: 'opacity 0.25s ease', opacity: 1 }}
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" strokeLinecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
    </button>
  );
};
