import React, { useState } from 'react';
import { ExternalLink, Github, Check } from 'lucide-react';

import { Project } from '../types';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] dark:bg-[#18181B] border-y border-[#E4E4E7] dark:border-[#27272A] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#3B82F6]">
            Featured Work
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#09090B] dark:text-[#F4F4F5]">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#2563EB] dark:bg-[#3B82F6] rounded-full mx-auto" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#3F3F46] dark:text-[#A1A1AA]">
            Production applications and modern full-stack web solutions built for high usability, security, and scalability.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="inline-flex p-1.5 rounded-xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#18181B] text-white dark:bg-[#F4F4F5] dark:text-[#09090B] shadow-xs'
                    : 'text-[#3F3F46] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#F4F4F5]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 3 cols desktop, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';

            return (
              <div
                key={project.id}
                className="flex flex-col rounded-2xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Visual Header Banner */}
                <div className={`h-44 bg-gradient-to-br ${project.imagePlaceholderGradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                      {project.category}
                    </span>
                    {hasLiveUrl && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live App
                      </span>
                    )}
                  </div>

                  <div className="z-10 space-y-1">
                    <h3 className="font-serif font-bold text-2xl tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm text-[#3F3F46] dark:text-[#A1A1AA] line-clamp-3 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Highlights bullet list */}
                    {project.highlights && (
                      <ul className="space-y-1.5 pt-1">
                        {project.highlights.map((h, idx) => (
                          <li key={idx} className="text-xs text-[#3F3F46] dark:text-[#A1A1AA] flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-md bg-[#E8ECF0] dark:bg-[#27272A] text-[#18181B] dark:text-[#F4F4F5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-between gap-3">
                    {/* Live Site Button */}
                    {hasLiveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#2563EB] dark:bg-[#3B82F6] text-white hover:bg-[#1D4ED8] dark:hover:bg-[#60A5FA] transition-colors shadow-xs"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] hover:bg-[#2563EB] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-colors shadow-xs"
                      >
                        <span>View Details</span>
                      </button>
                    )}

                    {/* View Code Link */}
                    <a
                      href={project.githubUrl || 'https://github.com/bhavyawebdev'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] text-[#3F3F46] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#F4F4F5] hover:bg-[#E8ECF0] dark:hover:bg-[#27272A] transition-colors"
                      title="View Code Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#E4E4E7] dark:border-[#27272A] pb-4">
              <h3 className="font-serif font-bold text-2xl text-[#09090B] dark:text-[#F4F4F5]">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#E8ECF0] dark:bg-[#27272A] text-[#3F3F46] dark:text-[#A1A1AA]"
              >
                Close
              </button>
            </div>

            <p className="text-sm text-[#3F3F46] dark:text-[#A1A1AA] leading-relaxed">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#3B82F6]">
                Key Engineering Features:
              </span>
              <ul className="space-y-1.5">
                {selectedProject.highlights?.map((h, idx) => (
                  <li key={idx} className="text-xs text-[#3F3F46] dark:text-[#A1A1AA] flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#09090B] font-semibold text-xs"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
