import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Connect', href: '#connect' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAFA]/90 dark:bg-[#0B0B0D]/90 backdrop-blur-md border-b border-[#E4E4E7] dark:border-[#27272A] shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group text-[#09090B] dark:text-[#F4F4F5]"
        >
          <div className="w-9 h-9 rounded-lg bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] flex items-center justify-center font-serif font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
            BM
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-tight leading-none group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors">
              Bhavya Mehta
            </span>
            <span className="text-[11px] font-sans font-medium text-[#3F3F46] dark:text-[#A1A1AA] uppercase tracking-wider mt-0.5">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-2 text-sm font-sans font-medium rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-[#2563EB] dark:text-[#3B82F6] bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 font-semibold'
                    : 'text-[#3F3F46] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#F4F4F5] hover:bg-[#E8ECF0]/60 dark:hover:bg-[#1C1C1F]'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="h-4 w-[1px] bg-[#E4E4E7] dark:bg-[#27272A] mx-2" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-lg text-[#3F3F46] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#F4F4F5] hover:bg-[#E8ECF0] dark:hover:bg-[#1C1C1F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-[#3F3F46] dark:text-[#A1A1AA] hover:bg-[#E8ECF0] dark:hover:bg-[#1C1C1F]"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-[#09090B] dark:text-[#F4F4F5] hover:bg-[#E8ECF0] dark:hover:bg-[#1C1C1F] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#0B0B0D] px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-[#09090B] dark:text-[#F4F4F5] hover:bg-[#E8ECF0] dark:hover:bg-[#1C1C1F] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
