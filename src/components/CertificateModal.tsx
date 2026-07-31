import React from 'react';
import { X, Award, CheckCircle2, Calendar, MapPin, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { ExperienceItem } from '../types';

interface CertificateModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-0 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#18181B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
                Verified Certificate
              </span>
              <h3 className="font-serif font-bold text-xl text-white">
                {experience.company}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-[#27272A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Simulated Certificate View Frame */}
          <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#18181B] border-2 border-dashed border-[#2563EB]/40 dark:border-[#3B82F6]/40 text-center space-y-4 shadow-inner relative">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Internship Certification</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#3F3F46] dark:text-[#A1A1AA] uppercase tracking-wider block font-sans">
                This certifies that
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#09090B] dark:text-[#F4F4F5]">
                Bhavya Mehta
              </h2>
            </div>

            <p className="text-sm text-[#3F3F46] dark:text-[#A1A1AA] max-w-lg mx-auto leading-relaxed">
              has successfully completed the internship as <strong className="text-[#09090B] dark:text-[#F4F4F5]">{experience.role}</strong> at <strong className="text-[#09090B] dark:text-[#F4F4F5]">{experience.company}</strong>, demonstrating exceptional proficiency in software engineering and web application development.
            </p>

            <div className="pt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex flex-wrap justify-center gap-6 text-xs text-[#3F3F46] dark:text-[#A1A1AA]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                Period: {experience.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Validated Skills */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#09090B] dark:text-[#F4F4F5]">
              Validated Competencies:
            </span>
            <div className="flex flex-wrap gap-2">
              {experience.skillsUsed.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-3 py-1 rounded-lg bg-[#E8ECF0] dark:bg-[#27272A] text-[#18181B] dark:text-[#F4F4F5]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] hover:bg-[#2563EB] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-colors"
            >
              Close Viewer
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
