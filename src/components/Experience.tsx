import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Award, Shield, Sparkles, Database, Layers, LayoutGrid, Rows } from 'lucide-react';
import { resumeData, Experience as ExpType } from '../resumeData';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('exp-1'); // Default open first item
  const [layoutMode, setLayoutMode] = useState<'split' | 'single'>('split');

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

        {/* Column & Design Layout Switch Controls */}
        <div className="mt-8 flex items-center justify-center gap-1.5 p-1 rounded-sm border border-slate-350/[0.15] bg-black/5 dark:border-white/10 dark:bg-white/[0.02] max-w-xs mx-auto">
          <button
            onClick={() => setLayoutMode('split')}
            className={`flex items-center gap-2 px-3 py-1.5 font-mono text-[9.5px] font-bold uppercase tracking-wider transition-all duration-300 rounded-xs cursor-pointer ${
              layoutMode === 'split'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-md'
                : 'text-slate-500 hover:text-slate-800 dark:text-white/40 dark:hover:text-white/80'
            }`}
            title="Split Mode (2 Columns - Timeline & Highlights)"
          >
            <LayoutGrid className="h-3 w-3" />
            Split (2C)
          </button>
          
          <button
            onClick={() => setLayoutMode('single')}
            className={`flex items-center gap-2 px-3 py-1.5 font-mono text-[9.5px] font-bold uppercase tracking-wider transition-all duration-300 rounded-xs cursor-pointer ${
              layoutMode === 'single'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-md'
                : 'text-slate-500 hover:text-slate-800 dark:text-white/40 dark:hover:text-white/80'
            }`}
            title="Focus Mode (1 Column - Full width timeline)"
          >
            <Rows className="h-3 w-3" />
            Focus (1C)
          </button>
        </div>
      </div>

      {/* Conditionally Render Top-horizontal Highlights Bar only if layoutMode is 'single' to balance information weight */}
      <AnimatePresence mode="wait">
        {layoutMode === 'single' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-12 overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-sm border border-slate-350/[0.15] bg-black/5 dark:border-white/10 dark:bg-white/[0.01] backdrop-blur-md">
              {impactHighlights.map((hl, idx) => {
                const Icon = hl.icon;
                return (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-teal-500/10 text-teal-400 dark:bg-teal-500/25">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="font-display text-[10px] font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        {hl.title}
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-400 leading-snug dark:text-slate-400">
                        {hl.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Grid content with dynamic column configuration */}
      <div className="mt-16">
        <div className={`grid grid-cols-1 gap-10 ${layoutMode === 'split' ? 'lg:grid-cols-12' : 'lg:grid-cols-1'}`}>
          
          {/* Timeline Accordion List */}
          <div className={`${layoutMode === 'split' ? 'lg:col-span-8' : 'lg:col-span-1'} flex flex-col gap-4`}>
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

        {/* Dynamic Sidebar Panel: Only visible in Split view */}
        <AnimatePresence mode="wait">
          {layoutMode === 'split' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-4 select-none"
            >
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
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  </section>
  );
}
