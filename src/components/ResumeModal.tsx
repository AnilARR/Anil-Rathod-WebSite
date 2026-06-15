import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Mail, Linkedin, Globe, MapPin, Award, BookOpen, GraduationCap } from 'lucide-react';
import { resumeData } from '../resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    // Elegant system print trigger
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 flex h-[90vh] w-full max-w-4xl flex-col rounded-none border border-slate-350/[0.15] dark:border-white/10 bg-[#020817]/95 text-slate-100 shadow-2xl overflow-hidden print:h-auto print:border-none print:bg-white print:p-0 print:text-black"
          >
            {/* Header / Actions - Hidden on print */}
            <div className="flex items-center justify-between border-b border-slate-350/[0.15] dark:border-white/10 bg-black/40 p-4 backdrop-blur-md print:hidden">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-display text-[10px] uppercase font-bold tracking-widest text-[#F5F5F5]">PRINT-READY RESUME ENGINE</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-[#1C1C1E] dark:bg-white text-white dark:text-[#020817] font-display text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-all cursor-pointer hover:opacity-90 duration-300"
                >
                  <Download className="h-3.5 w-3.5" />
                  Print / Save PDF
                </button>
                <button
                  onClick={onClose}
                  className="border border-slate-350/[0.15] dark:border-white/10 p-2 text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Printable Content Scrolling Workspace */}
            <div className="flex-1 overflow-y-auto p-8 font-sans md:p-12 print:overflow-visible print:p-0">
              <div id="printable-area" className="mx-auto max-w-3xl bg-transparent text-slate-200 print:bg-white print:text-slate-900">
                
                {/* Name & Contact Row */}
                <div className="border-b border-slate-800 pb-6 print:border-slate-300">
                  <h1 className="font-cinzel text-3.5xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 print:text-black print:bg-none print:text-3xl uppercase">
                    {resumeData.basics.name}
                  </h1>
                  <p className="mt-1 font-sans text-sm font-semibold text-amber-400 print:text-slate-700">
                    {resumeData.basics.title}
                  </p>
                  
                  {/* Detailed Meta Items */}
                  <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 font-mono text-[11px] text-slate-400 print:text-slate-600 print:font-sans">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-500" />
                      <span>{resumeData.basics.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5 text-slate-500" />
                      <a href={`mailto:${resumeData.basics.email}`} className="hover:underline">{resumeData.basics.email}</a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-3.5 w-3.5 text-slate-500" />
                      <a href={resumeData.basics.links.portfolio} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Linkedin className="h-3.5 w-3.5 text-slate-500" />
                      <a href={resumeData.basics.links.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                    </div>
                  </div>
                </div>

                {/* Main Summary */}
                <div className="mt-6">
                  <h2 className="font-display text-xs font-bold uppercase tracking-wider text-amber-400 print:text-indigo-900">Summary</h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 print:text-slate-700">
                    {resumeData.basics.summary}
                  </p>
                </div>

                {/* Selected Top Skills */}
                <div className="mt-6">
                  <h2 className="font-display text-xs font-bold uppercase tracking-wider text-amber-400 print:text-indigo-900">Technical Skills Matrix</h2>
                  <div className="mt-3 grid grid-cols-1 gap-4 rounded-none border border-slate-350/[0.15] dark:border-white/10 bg-black/20 p-4 sm:grid-cols-2 print:border-slate-200 print:bg-slate-50">
                    {resumeData.skills.map((grp) => (
                      <div key={grp.category}>
                        <h4 className="font-display text-[10px] font-bold uppercase tracking-wide text-slate-400 print:text-slate-800">
                          {grp.category}
                        </h4>
                        <p className="mt-1 font-sans text-xs text-slate-300 print:text-slate-600">
                          {grp.skills.join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional History */}
                <div className="mt-8">
                  <h2 className="font-display text-xs font-bold uppercase tracking-wider text-amber-400 print:text-indigo-900">Experience Profile</h2>
                  <div className="mt-4 space-y-6">
                    {resumeData.experience.map((exp) => (
                      <div key={exp.id} className="relative">
                        <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                          <div>
                            <span className="font-display text-xs font-bold text-slate-100 print:text-black">
                              {exp.company}
                            </span>
                            {exp.client && (
                              <span className="ml-1.5 font-sans text-xs italic text-slate-400 print:text-slate-600">
                                (Client: {exp.client})
                              </span>
                            )}
                            {exp.project && (
                              <span className="ml-1.5 font-sans text-xs italic text-amber-400 print:text-indigo-600">
                                [Project: {exp.project}]
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-[10px] text-slate-400 print:font-sans print:text-slate-600">
                            {exp.dates}
                          </span>
                        </div>
                        <p className="font-mono text-[10px] font-medium text-slate-400 print:font-sans print:text-indigo-700">
                          {exp.role} &middot; {exp.duration} &middot; {exp.location}
                        </p>
                        
                        <ul className="mt-2 list-outside list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-slate-700">
                          {exp.bullets.map((bullet, bidx) => (
                            <li key={bidx} className="leading-relaxed">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Page Break for printing neatly if it overflows */}
                <div className="print:page-break-before" />

                {/* Education Section */}
                <div className="mt-8">
                  <h2 className="font-display text-xs font-bold uppercase tracking-wider text-amber-400 print:text-indigo-900">Education Background</h2>
                  <div className="mt-3 space-y-3">
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="flex justify-between items-baseline text-xs">
                        <div className="max-w-[70%]">
                          <p className="font-semibold text-slate-200 print:text-black">{edu.institution}</p>
                          <p className="text-slate-400 print:text-slate-600">{edu.degree}</p>
                        </div>
                        <span className="font-mono text-[10px] text-slate-400 print:font-sans print:text-slate-600">{edu.dates}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications and Honors */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h2 className="font-display text-xs font-bold uppercase tracking-wider text-amber-400 print:text-indigo-900">Certifications</h2>
                    <ul className="mt-3 list-inside list-disc space-y-1 text-xs text-slate-300 print:text-slate-700">
                      {resumeData.certifications.map((cert, idx) => (
                        <li key={idx}>
                          {cert.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-display text-xs font-bold uppercase tracking-wider text-amber-400 print:text-indigo-900">Honors & Awards</h2>
                    <div className="mt-3">
                      {resumeData.awards.map((awr, idx) => (
                        <div key={idx}>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 print:text-black">
                            <Award className="h-3.5 w-3.5 text-amber-400" />
                            <span>{awr.name}</span>
                          </div>
                          <p className="mt-1 text-xs text-slate-400 print:text-slate-600">
                            {awr.context}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Opportunities Matrix (extra[]) */}
                <div className="mt-8 border-t border-slate-800 pt-6 print:border-slate-300">
                  <h2 className="font-display text-xs font-bold uppercase tracking-wider text-amber-400 print:text-indigo-900">Open to Engagements</h2>
                  <p className="mt-1.5 text-xs text-slate-300 print:text-slate-700">
                    {resumeData.extra.find(e => e.key === "Core Focus")?.value as string}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(resumeData.extra.find(e => e.key === "Target Opportunities")?.value as string[]).map((role, idx) => (
                      <span
                        key={idx}
                        className="rounded-none border border-slate-350/[0.15] dark:border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[9px] font-semibold text-slate-400 print:border-slate-300 print:bg-slate-100 print:text-slate-700"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
