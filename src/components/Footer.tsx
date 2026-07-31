import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';
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
              <MessageCircle className="w-5 h-5" />
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
