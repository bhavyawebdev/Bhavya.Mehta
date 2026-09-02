import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Theme } from '../hooks/useTheme';
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem, StaggeredMenuHandle } from './StaggeredMenu';
import { personalData } from '../data/portfolioData';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<StaggeredMenuHandle | null>(null);

  const handleMobileToggle = () => {
    menuRef.current?.toggle();
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Connect', href: '#connect' },
  ];

  const menuItems: StaggeredMenuItem[] = navLinks.map((l) => ({
    label: l.name,
    ariaLabel: `Navigate to ${l.name}`,
    link: l.href
  }));

  const socialItems: StaggeredMenuSocialItem[] = [
    { label: 'GitHub', link: personalData.github },
    { label: 'LinkedIn', link: personalData.linkedin },
    { label: 'Email', link: `mailto:${personalData.email}` }
  ];

  // Pill slider refs (ReactBits PillNav effect — only active after scroll)
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0, width: 0, opacity: 0,
  });

  // ── Scroll detection: triggers at 20px like reactbits.dev ──
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Dark mode detection: watch html element classList for 'dark' ──
  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains('dark'));
    });
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // ── Sliding pill indicator position ──
  const updatePillPosition = (targetSectionKey: string) => {
    const container = navContainerRef.current;
    const targetElement = linkRefs.current[targetSectionKey];
    if (container && targetElement) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      setPillStyle({
        left: targetRect.left - containerRect.left,
        width: targetRect.width,
        opacity: 1,
      });
    }
  };

  useLayoutEffect(() => {
    const targetKey = hoveredSection || activeSection || 'home';
    updatePillPosition(targetKey);
    const handleResize = () => updatePillPosition(hoveredSection || activeSection || 'home');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection, hoveredSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[60] border-b md:z-50"
        style={{
          transition: 'background-color 500ms ease, backdrop-filter 500ms ease, border-color 500ms ease',
          backgroundColor: mobileMenuOpen
            ? isDark ? 'rgba(9, 9, 11, 0.95)' : 'rgba(255, 255, 255, 0.95)'
            : isScrolled
              ? isDark ? 'rgba(9, 9, 11, 0.85)' : 'rgba(255, 255, 255, 0.80)'
              : 'transparent',
          backdropFilter: (isScrolled || mobileMenuOpen) ? 'blur(20px) saturate(150%)' : 'none',
          WebkitBackdropFilter: (isScrolled || mobileMenuOpen) ? 'blur(20px) saturate(150%)' : 'none',
          borderColor: (isScrolled || mobileMenuOpen)
            ? isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.07)'
            : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* ── Brand ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group text-[#09090B] dark:text-[#F4F4F5] focus:outline-none shrink-0"
          >
            {/* Glow monogram */}
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-60 blur-xs transition-opacity duration-300" />
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] flex items-center justify-center font-serif font-bold text-sm sm:text-base shadow-sm transition-transform duration-300 group-hover:scale-105">
                BM
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm sm:text-base tracking-tight leading-none group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors duration-200">
                Bhavya Mehta
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium text-[#71717A] dark:text-[#A1A1AA] uppercase tracking-wider mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* ── Desktop nav links with ReactBits sliding pill ── */}
          <div className="hidden md:flex items-center gap-3">
            <nav
              ref={navContainerRef}
              onMouseLeave={() => setHoveredSection(null)}
              className={`
                relative flex items-center rounded-full transition-all duration-300
                ${isScrolled
                  ? 'p-1 bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08]'
                  : 'p-1 bg-transparent border border-transparent'
                }
              `}
            >
              {/* Sliding pill highlight */}
              <div
                className="absolute top-1 bottom-1 rounded-full bg-white dark:bg-[#1C1C1F] shadow-[0_2px_8px_rgba(0,0,0,0.10)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.5)] border border-black/[0.06] dark:border-white/[0.1] pointer-events-none"
                style={{
                  left: `${pillStyle.left}px`,
                  width: `${pillStyle.width}px`,
                  opacity: isScrolled ? pillStyle.opacity : 0,
                  transition: 'left 0.28s cubic-bezier(0.25,1,0.5,1), width 0.28s cubic-bezier(0.25,1,0.5,1), opacity 0.3s ease',
                }}
              >
                <div className="absolute inset-x-2 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/35 dark:via-[#3B82F6]/45 to-transparent" />
              </div>

              {navLinks.map((link) => {
                const sectionKey = link.href.substring(1);
                const isActive = activeSection === sectionKey;
                const isHovered = hoveredSection === sectionKey;

                return (
                  <a
                    key={link.name}
                    ref={(el) => { linkRefs.current[sectionKey] = el; }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    onMouseEnter={() => setHoveredSection(sectionKey)}
                    className={`
                      relative z-10 px-3.5 py-1.5 text-xs lg:text-sm font-sans font-medium rounded-full
                      flex items-center gap-1.5 select-none transition-colors duration-200
                      ${isActive
                        ? 'text-[#2563EB] dark:text-[#60A5FA] font-semibold'
                        : isHovered
                          ? 'text-[#09090B] dark:text-white'
                          : 'text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white'
                      }
                    `}
                  >
                    {link.name}
                    {isActive && isScrolled && (
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] animate-pulse" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Divider */}
            <div className={`h-4 w-[1px] bg-[#E4E4E7] dark:bg-[#27272A] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

            {/* Theme Toggle */}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          {/* ── Mobile controls (own hamburger + theme toggle, StaggeredMenu only renders the panel) ── */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={handleMobileToggle}
              data-menu-trigger
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="staggered-menu-panel"
              className="p-2 rounded-full text-[#09090B] dark:text-[#F4F4F5] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all duration-200 active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile animated panel (no built-in header, controlled by navbar button) ── */}
      <div className="md:hidden">
        <StaggeredMenu
          ref={menuRef}
          position="right"
          colors={isDark
            ? ['#0B0B0D', '#18181B', '#1C1C1F']
            : ['#FFFFFF', '#F1F5F9', '#E8ECF0']}
          logoUrl=""
          isFixed
          hideBuiltInHeader
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor={isDark ? '#F4F4F5' : '#09090B'}
          openMenuButtonColor="#2563EB"
          accentColor="#2563EB"
          changeMenuColorOnOpen={true}
          closeOnClickAway={true}
          onMenuOpen={() => setMobileMenuOpen(true)}
          onMenuClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </>
  );
};
