import React from 'react';
import { Github, FileDown, ArrowUpRight, Code2 } from 'lucide-react';

import { personalData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden bg-[#FAFAFA] dark:bg-[#0B0B0D]"
    >
      {/* Background subtle geometry decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10 space-y-6 sm:space-y-8">

        {/* Profile Photo / Avatar - ~180-220px */}
        <div className="relative group">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-b from-[#2563EB] via-[#E4E4E7] to-[#18181B] dark:from-[#3B82F6] dark:via-[#27272A] dark:to-[#F4F4F5] shadow-xl transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-full h-full rounded-full bg-[#E8ECF0] dark:bg-[#1C1C1F] overflow-hidden border-2 border-white dark:border-[#0B0B0D]">

              {/* Profile Photo */}
              <img
                src={personalData.profileImage || "/bhavya.jpg"}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/bhavya.jpg') {
                    target.src = '/bhavya.jpg';
                  }
                }}
                alt={`${personalData.name} — Profile Photo`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />

            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute bottom-1 right-2 bg-emerald-500 text-white p-1.5 rounded-full border-4 border-[#FAFAFA] dark:border-[#0B0B0D] shadow-md flex items-center justify-center" title="Open for opportunities">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          </div>
        </div>

        {/* Name in Playfair Display */}
        <div className="space-y-3">
          <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl text-[#09090B] dark:text-[#F4F4F5] tracking-tight leading-tight">
            {personalData.name}
          </h1>

          {/* Role / Tagline Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border border-[#2563EB]/20 dark:border-[#3B82F6]/30">
            <Code2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
            <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#3B82F6]">
              {personalData.role}
            </span>
          </div>
        </div>

        {/* 1-2 line supporting sentence */}
        <p className="max-w-2xl text-base sm:text-lg text-[#3F3F46] dark:text-[#A1A1AA] font-sans font-normal leading-relaxed text-balance">
          {personalData.tagline}
        </p>

        {/* Action Buttons Side by Side (ONLY in Hero) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          {/* GitHub Button (Secondary / Outline) */}
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm border-2 border-[#18181B] dark:border-[#F4F4F5] text-[#18181B] dark:text-[#F4F4F5] hover:bg-[#18181B] hover:text-white dark:hover:bg-[#F4F4F5] dark:hover:text-[#09090B] transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>

          {/* Download Resume Button (Solid Primary) */}
          <button
            onClick={onOpenResumeModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] hover:bg-[#2563EB] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Quick Location & Education indicator */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-sans text-[#3F3F46] dark:text-[#A1A1AA]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]" />
            Location: Bhavnagar, Gujarat
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]" />
            B.E. ICT Scholar at GEC Bhavnagar
          </span>
        </div>

      </div>
    </section>
  );
};
