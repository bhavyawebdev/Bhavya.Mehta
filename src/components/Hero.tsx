import React from 'react';
import { Github, FileDown, ArrowUpRight, Code2 } from 'lucide-react';

import { personalData } from '../data/portfolioData';
import ProfileCard from './ProfileCard';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden bg-[#FAFAFA] dark:bg-[#0B0B0D]"
    >
      {/* Background subtle geometry decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT — Text */}
        <div className="flex flex-col items-start text-left space-y-6 sm:space-y-7 order-2 lg:order-1">

          {/* Role / Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border border-[#2563EB]/20 dark:border-[#3B82F6]/30">
            <Code2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
            <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#3B82F6]">
              {personalData.role}
            </span>
          </div>

          {/* Eyebrow greeting */}
          <p className="font-sans text-sm sm:text-base text-[#2563EB] dark:text-[#3B82F6] font-semibold tracking-wide">
            Hi there — I'm
          </p>

          {/* Name */}
          <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-[#09090B] dark:text-[#F4F4F5] tracking-tight leading-[0.95]">
            {personalData.name}
          </h1>

          {/* Tagline */}
          <p className="max-w-xl text-base sm:text-lg text-[#3F3F46] dark:text-[#A1A1AA] font-sans font-normal leading-relaxed text-balance">
            {personalData.tagline}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
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

            <button
              onClick={onOpenResumeModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] hover:bg-[#2563EB] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Quick meta */}
          <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-sans text-[#3F3F46] dark:text-[#A1A1AA]">
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

        {/* RIGHT — ProfileCard */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <ProfileCard
            name={personalData.name}
            title={personalData.role}
            handle="bhavyawebdev"
            status="Online"
            contactText="Contact Me"
            avatarUrl={personalData.profileImage || '/bhavya.jpg'}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#2563EB8c 0%,#71C4FF44 100%)"
            behindGlowColor="rgba(37, 99, 235, 0.55)"
          />
        </div>

      </div>
    </section>
  );
};
