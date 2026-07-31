import React from 'react';
import { X, FileDown, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

import { personalData, experienceData, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Generate text/markdown formatted resume file download
    const content = `BHAVYA MEHTA
Full Stack Developer
Email: ${personalData.email} | Phone: +91 ${personalData.phone}
Location: ${personalData.location}
GitHub: ${personalData.github}
LinkedIn: ${personalData.linkedin}

----------------------------------------------------
SUMMARY
${personalData.tagline}

----------------------------------------------------
EDUCATION
1. Bachelor of Engineering (B.E.) - Information & Communication Technology (ICT)
   Government Engineering College (GEC), Bhavnagar | Currently Pursuing

2. Diploma Engineering - Information Technology (IT)
   Gyanmanjari Institute of Technology | Graduated

----------------------------------------------------
INTERNSHIP EXPERIENCE
${experienceData.map(e => `
* ${e.role} | ${e.company} (${e.period})
  Location: ${e.location}
  - ${e.description.join('\n  - ')}
  Key Tech: ${e.skillsUsed.join(', ')}
`).join('')}

----------------------------------------------------
TECHNICAL SKILLS
${skillCategories.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Bhavya_Mehta_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] rounded-2xl max-w-3xl w-full my-8 overflow-hidden shadow-2xl space-y-0 animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Toolbar */}
        <div className="p-4 sm:p-6 bg-[#18181B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/30 text-blue-400">
              <FileDown className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
              Bhavya Mehta — Official Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download TXT/PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#27272A] transition-colors hidden sm:block"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#27272A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-white text-[#09090B] font-sans text-sm max-h-[75vh] overflow-y-auto">
          
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 space-y-2">
            <h1 className="font-serif font-bold text-3xl text-gray-900">
              {personalData.name}
            </h1>
            <p className="text-base font-semibold text-blue-600">
              {personalData.role}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-600 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-gray-500" />
                {personalData.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-gray-500" />
                +91 {personalData.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                {personalData.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
              {personalData.tagline} Completed Diploma Engineering in IT from Gyanmanjari Institute of Technology with extensive internship experience; currently pursuing B.E. in ICT at GEC Bhavnagar.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Education</span>
            </h2>

            {personalData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between font-semibold text-gray-900 text-sm">
                  <span>{edu.institution}</span>
                  <span className="text-xs text-gray-500">{edu.period}</span>
                </div>
                <p className="text-xs text-gray-700">
                  {edu.degree} in {edu.field} — <span className="text-blue-600 font-medium">{edu.status}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Internship Experience */}
          <div className="space-y-4">
            <h2 className="font-serif font-bold text-lg text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Internship Experience</span>
            </h2>

            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-gray-900 text-sm">
                  <span>{exp.role} — <span className="text-blue-600">{exp.company}</span></span>
                  <span className="text-xs text-gray-500">{exp.location}</span>
                </div>

                <ul className="space-y-1 text-xs text-gray-700">
                  {exp.description.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-semibold text-gray-900 block">{cat.title}:</span>
                  <p className="text-gray-700">{cat.skills.map((s) => s.name).join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
