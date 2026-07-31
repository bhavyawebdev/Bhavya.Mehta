import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Briefcase } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] dark:bg-[#18181B] border-y border-[#E4E4E7] dark:border-[#27272A] transition-colors"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#3B82F6]">
            Background & Milestones
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#09090B] dark:text-[#F4F4F5]">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#2563EB] dark:bg-[#3B82F6] rounded-full mx-auto sm:mx-0" />
        </div>

        {/* Main Content Layout: Narrative + Education Timeline Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Recruiter-Focused Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs space-y-5">
              <h3 className="font-serif font-semibold text-2xl text-[#09090B] dark:text-[#F4F4F5]">
                Bridging Academic Rigor with Practical Software Engineering
              </h3>

              {personalData.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base text-[#3F3F46] dark:text-[#A1A1AA] leading-relaxed font-sans font-normal">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 border-t border-[#E4E4E7] dark:border-[#27272A] flex flex-wrap gap-4 text-sm font-semibold text-[#09090B] dark:text-[#F4F4F5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>RESTful API & Database Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>Agile & Production-Focused Engineering</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] text-center space-y-1">
                <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#2563EB] dark:text-[#3B82F6]">3+</span>
                <span className="text-xs font-medium text-[#3F3F46] dark:text-[#A1A1AA]">Industry Internships</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] text-center space-y-1">
                <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#2563EB] dark:text-[#3B82F6]">10+</span>
                <span className="text-xs font-medium text-[#3F3F46] dark:text-[#A1A1AA]">Deployed Projects</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] text-center space-y-1">
                <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#2563EB] dark:text-[#3B82F6]">100%</span>
                <span className="text-xs font-medium text-[#3F3F46] dark:text-[#A1A1AA]">Commitment to Code Quality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Internship Timeline Visual (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs space-y-6">
              <div className="flex items-center gap-3 border-b border-[#E4E4E7] dark:border-[#27272A] pb-4">
                <div className="p-2.5 rounded-lg bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#3B82F6]/20 dark:text-[#3B82F6]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#09090B] dark:text-[#F4F4F5]">
                    Academic Journey
                  </h4>
                  <p className="text-xs text-[#3F3F46] dark:text-[#A1A1AA]">
                    Formal Education & Specialization
                  </p>
                </div>
              </div>

              {/* Education Cards */}
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#E4E4E7] dark:before:bg-[#27272A]">
                
                {personalData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-9 space-y-2 group">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#FAFAFA] dark:bg-[#1C1C1F] border-2 border-[#2563EB] dark:border-[#3B82F6] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]" />
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 text-[#2563EB] dark:text-[#3B82F6]">
                        {edu.status}
                      </span>
                      <span className="text-xs font-medium text-[#3F3F46] dark:text-[#A1A1AA]">
                        {edu.period}
                      </span>
                    </div>

                    <h5 className="font-serif font-bold text-base text-[#09090B] dark:text-[#F4F4F5] group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors">
                      {edu.institution}
                    </h5>

                    <p className="text-xs font-medium text-[#3F3F46] dark:text-[#A1A1AA]">
                      {edu.degree} — <span className="text-[#09090B] dark:text-[#F4F4F5] font-semibold">{edu.field}</span>
                    </p>

                    <ul className="space-y-1 pt-1">
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-xs text-[#3F3F46] dark:text-[#A1A1AA] flex items-start gap-1.5">
                          <span className="text-[#2563EB] dark:text-[#3B82F6] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
