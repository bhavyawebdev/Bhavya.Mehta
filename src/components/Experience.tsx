import React from 'react';
import { MapPin, Award, CheckCircle2 } from 'lucide-react';

import { ExperienceItem } from '../types';
import { experienceData } from '../data/portfolioData';

interface ExperienceProps {
  onOpenCertificate: (exp: ExperienceItem) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenCertificate }) => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] dark:bg-[#0B0B0D]">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#3B82F6]">
            Career Path
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#09090B] dark:text-[#F4F4F5]">
            Internship Experience
          </h2>
          <div className="w-16 h-1 bg-[#2563EB] dark:bg-[#3B82F6] rounded-full mx-auto" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#3F3F46] dark:text-[#A1A1AA]">
            Practical software development experience gained across technology firms and software solution providers.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#E4E4E7] dark:border-[#27272A] ml-4 sm:ml-8 lg:ml-12 space-y-12 pl-6 sm:pl-10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] border-4 border-[#FAFAFA] dark:border-[#0B0B0D] shadow-md flex items-center justify-center transition-transform group-hover:scale-125">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#E8ECF0]/50 dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs hover:shadow-md transition-all duration-300 space-y-5">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E4E4E7] dark:border-[#27272A] pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#3B82F6]/20 text-[#2563EB] dark:text-[#3B82F6] inline-block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#09090B] dark:text-[#F4F4F5]">
                      {exp.role}
                    </h3>
                    <p className="text-base font-medium text-[#2563EB] dark:text-[#3B82F6]">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-[#3F3F46] dark:text-[#A1A1AA] font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-[#3F3F46] dark:text-[#A1A1AA] flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Used Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-semibold text-[#09090B] dark:text-[#F4F4F5]">
                    Tech Stack:
                  </span>
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-[#18181B] dark:text-[#F4F4F5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certificate Action Button */}
                <div className="pt-3 border-t border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-between">
                  <button
                    onClick={() => onOpenCertificate(exp)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] hover:bg-[#2563EB] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-all duration-200 shadow-xs"
                  >
                    <Award className="w-4 h-4 text-amber-400 dark:text-amber-500" />
                    <span>View Certificate</span>
                  </button>

                  <span className="text-[11px] text-[#3F3F46] dark:text-[#A1A1AA]">
                    {exp.issuedDate}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
