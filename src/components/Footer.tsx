import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <footer className="bg-[#18181B] dark:bg-[#09090B] text-[#FFFFFF] pt-16 pb-12 border-t border-[#27272A] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-[#27272A] pb-10">
          
          {/* Logo / Title */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#18181B] font-serif font-bold text-xl flex items-center justify-center shadow-md">
                BM
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                {personalData.name}
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA] max-w-md font-sans">
              Full Stack Web Developer specialized in React, TypeScript, Node.js, and modern cloud database architectures.
            </p>
          </div>

          {/* Social Navigation Buttons (Min 44x44px touch targets) */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-xl bg-[#27272A] hover:bg-[#3B82F6] text-white flex items-center justify-center transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-xl bg-[#27272A] hover:bg-[#3B82F6] text-white flex items-center justify-center transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`https://wa.me/91${personalData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="w-11 h-11 rounded-xl bg-[#27272A] hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              aria-label="Send Email"
              className="w-11 h-11 rounded-xl bg-[#27272A] hover:bg-[#3B82F6] text-white flex items-center justify-center transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Middle navigation & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-sans">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#A1A1AA] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#27272A] hover:bg-[#3F3F46] text-xs font-semibold text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-[#27272A] text-center text-xs text-[#A1A1AA]">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved. Crafted with React, TypeScript & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
};
