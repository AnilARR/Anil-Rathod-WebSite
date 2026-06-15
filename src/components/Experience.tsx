import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Award, Shield, Sparkles, Database, Layers } from 'lucide-react';
import { resumeData, Experience as ExpType } from '../resumeData';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('exp-1'); // Default open first item

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Pre-compiled impactful metrics/bullets across his career for the side-panel
  const impactHighlights = [
    {
      icon: Shield,
      title: "AES / RSA Cryptography",
      desc: "Implemented highest security layers for banking & insurance modules."
    },
    {
      icon: Database,
      title: "SSIS ETL Pipelines",
      desc: "Optimized complex stored procedures across Oracle, PostgreSQL, Synapse and Sybase."
    },
    {
      icon: Layers,
      title: "Kafka Streaming",
      desc: "Configured resilient event-driven architectures matching high performance levels."
    },
    {
      icon: Sparkles,
      title: "OAuth 2.0 & Single Sign-On",
      desc: "Engineered secure federation and SSO access models for ICRA Rating clients."
    }
  ];

  return (
    <section id="experience" className="relative px-4 py-24 md:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center select-none">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[9px] font-bold tracking-[0.25em] text-teal-500 dark:text-teal-300 uppercase"
        >
          01 &middot; CAREER JOURNEY
        </motion.p>
        
        <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl text-slate-800 dark:text-white">
          PROFESSIONAL SPECTRUM
        </h2>
        
        <p className="mt-2 text-xs text-slate-500 max-w-sm font-sans dark:text-white/40">
          A granular chronicle of Anil&apos;s architectural mandates, fintech systems, and core distributed achievements.
        </p>
      </div>

      {/* Main Grid: Left Side Timeline Accordion, Right Side Impact Highlights Panel */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
        
        {/* Timeline Accordion List - span 7 */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {resumeData.experience.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                layout
                className={`group rounded-sm border transition-all overflow-hidden duration-300 ${
                  isExpanded
                    ? 'border-slate-350/[0.25] dark:border-white/15 bg-black/5 dark:bg-white/[0.02] shadow-2xl'
                    : 'border-slate-200/50 dark:border-white/5 bg-black/[0.01] dark:bg-transparent hover:border-slate-350/[0.25] dark:hover:border-white/10'
                }`}
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="flex items-start justify-between p-5 sm:p-6 cursor-pointer select-none"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3">
                      <h4 className="font-display text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-400 transition-colors">
                        {exp.company}
                      </h4>
                      {exp.client && (
                        <span className="font-mono text-[10px] font-bold text-teal-400 dark:text-teal-300 light:text-teal-700 border border-teal-500/20 rounded-full px-2 py-0.5 bg-teal-500/5">
                          Client: {exp.client}
                        </span>
                      )}
                      {exp.project && (
                        <span className="font-mono text-[10px] font-bold text-purple-400 dark:text-purple-300 light:text-purple-700 border border-purple-500/20 rounded-full px-2 py-0.5 bg-purple-500/5">
                          Project: {exp.project}
                        </span>
                      )}
                    </div>
                    
                    <p className="mt-1.5 font-sans text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {exp.role}
                    </p>

                    {/* Meta Dates/Location Row */}
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.dates}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="ml-4 h-8 w-8 flex items-center justify-center rounded-lg bg-slate-800/40 text-slate-400 group-hover:text-slate-200 transition-colors dark:bg-slate-800/40 dark:group-hover:bg-slate-800">
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </div>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-slate-355/[0.15] dark:border-white/10 p-5 sm:p-6 bg-black/[0.04] dark:bg-black/60">
                        {/* Bullets List */}
                        <ul className="list-outside list-disc pl-4 space-y-2 text-xs leading-relaxed text-slate-400 dark:text-slate-300">
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx}>
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        {/* Technology Badges Matrix for current work */}
                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {exp.metrics.map((badge, bidx) => (
                            <span
                              key={bidx}
                              className="rounded-sm border border-slate-350/[0.15] dark:border-white/10 bg-black/10 dark:bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] font-semibold text-slate-600 dark:text-white/60"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Impact Highlights Panel - span 4 */}
        <div className="lg:col-span-4 select-none">
          <div className="sticky top-28 rounded-sm border border-slate-350/[0.15] bg-black/5 dark:border-white/10 dark:bg-white/[0.01] p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-350/[0.15] dark:border-white/10">
              <Sparkles className="h-4.5 w-4.5 text-teal-400 animate-pulse" />
              <h3 className="font-display text-xs font-bold tracking-widest text-slate-800 dark:text-white uppercase">
                Core Highlights
              </h3>
            </div>
            
            <p className="mt-4 text-[11px] text-slate-400 leading-relaxed dark:text-white/55">
              Programmatic extraction of Anil Rathod&apos;s most high-value technical achievements from his history:
            </p>

            <div className="mt-6 space-y-5">
              {impactHighlights.map((hl, idx) => {
                const Icon = hl.icon;
                return (
                  <div key={idx} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 dark:bg-teal-500/25">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold text-slate-800 dark:text-slate-200">
                        {hl.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400 dark:text-slate-400">
                        {hl.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
