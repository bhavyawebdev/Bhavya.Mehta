import React from 'react';
import {
  Code2,
  Palette,
  FileCode,
  Atom,
  FileSpreadsheet,
  Layers,
  Server,
  Cpu,
  Terminal,
  Database,
  DatabaseBackup,
  HardDrive,
  Table,
  Flame,
  Cloud,
  Layout,
  Sparkles,
  BookOpen,
  MessageSquare,
  Wrench
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon string names to actual Lucide component
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Palette,
  FileCode,
  Atom,
  FileSpreadsheet,
  Layers,
  Server,
  Cpu,
  Terminal,
  Database,
  DatabaseBackup,
  HardDrive,
  Table,
  Flame,
  Cloud,
  Layout,
  Sparkles,
  BookOpen,
  MessageSquare
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] dark:bg-[#0B0B0D]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#3B82F6]">
            Technical Proficiency
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#09090B] dark:text-[#F4F4F5]">
            Skills & Competencies
          </h2>
          <div className="w-16 h-1 bg-[#2563EB] dark:bg-[#3B82F6] rounded-full mx-auto" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#3F3F46] dark:text-[#A1A1AA] font-sans">
            Categorized technical stack engineered across frontend, backend, database architectures, and developer platforms.
          </p>
        </div>

        {/* Skill Categories Grid (2x2 on desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#E8ECF0]/60 dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs hover:shadow-md transition-all duration-300 space-y-6"
            >
              <div className="space-y-2 border-b border-[#E4E4E7] dark:border-[#27272A] pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#09090B] dark:text-[#F4F4F5]">
                    {category.title}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#3B82F6]/20 text-[#2563EB] dark:text-[#3B82F6]">
                    {category.skills.length} Technologies
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-[#A1A1AA]">
                  {category.description}
                </p>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.iconName] || Wrench;
                  return (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center gap-3 group hover:-translate-y-1 hover:border-[#2563EB] dark:hover:border-[#3B82F6] hover:shadow-sm transition-all duration-200"
                    >
                      <div className="p-2 rounded-lg bg-[#E8ECF0] dark:bg-[#27272A] text-[#2563EB] dark:text-[#3B82F6] group-hover:bg-[#2563EB] group-hover:text-white dark:group-hover:bg-[#3B82F6] dark:group-hover:text-[#09090B] transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-sans font-semibold text-[#09090B] dark:text-[#F4F4F5] truncate">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
