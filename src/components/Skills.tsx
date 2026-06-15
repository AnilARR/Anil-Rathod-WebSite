import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Database, Cloud, Key, CheckCircle } from 'lucide-react';
import { resumeData } from '../resumeData';

export default function Skills() {
  // Map Categories to nice icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend Engineering':
        return Terminal;
      case 'Database & ETL Processing':
        return Database;
      case 'DevOps & Cloud Systems':
        return Cloud;
      default:
        return Key; // For security / frontend structures
    }
  };

  const getCategoryTheme = (idx: number) => {
    const schemas = [
      { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
      { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20" },
      { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
      { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    ];
    return schemas[idx % schemas.length];
  };

  return (
    <section id="skills" className="relative px-4 py-24 md:px-8 max-w-7xl mx-auto font-sans select-none">
      
      {/* Accent vector behind */}
      <div className="absolute right-10 bottom-0 -z-10 h-64 w-64 rounded-full bg-teal-500/5 blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center select-none">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[9px] font-bold tracking-[0.25em] text-teal-500 dark:text-teal-300 uppercase"
        >
          03 &middot; STACK SPECTRUM
        </motion.p>
        
        <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl text-slate-800 dark:text-white">
          TECHNICAL MATRIX
        </h2>
        
        <p className="mt-2 text-xs text-slate-505 text-slate-500 max-w-sm font-sans dark:text-white/40">
          A rigorous, verified inventory of database paradigms, core frameworks, and enterprise libraries.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {resumeData.skills.map((grp, gidx) => {
          const Icon = getCategoryIcon(grp.category);
          const theme = getCategoryTheme(gidx);
          return (
            <motion.div
              key={grp.category}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: gidx * 0.1, duration: 0.5 }}
              className="relative rounded-sm border border-slate-350/[0.15] bg-black/5 p-6 md:p-8 backdrop-blur-md transition-all dark:border-white/10 dark:bg-white/[0.01]"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.bg} ${theme.text}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm font-extrabold text-slate-800 dark:text-slate-200">
                  {grp.category}
                </h3>
              </div>

              {/* Skills bubbles list */}
              <div className="mt-6 flex flex-wrap gap-2">
                {grp.skills.map((sk, sidx) => (
                  <span
                    key={sidx}
                    className="flex items-center gap-1.5 rounded-sm border border-slate-350/[0.15] bg-black/10 dark:bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-slate-500 dark:border-white/10 dark:text-white/60"
                  >
                    <CheckCircle className="h-3 w-3 text-slate-400 shrink-0" />
                    {sk}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Embedded Certifications component underneath */}
      <div className="mt-20 border-t border-slate-350/[0.15] dark:border-white/10 pt-16">
        <h3 className="font-display text-sm font-bold text-center text-slate-800 dark:text-white uppercase tracking-[0.25em]">
          Industry Credentials
        </h3>
        <p className="mt-2 text-center text-[11px] text-slate-400 dark:text-white/40">
          Verified academic and professional certifications held by Anil:
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {resumeData.certifications.map((cert, cidx) => (
            <motion.div
              key={cidx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: cidx * 0.05, duration: 0.4 }}
              className="flex items-center gap-2 rounded-sm border border-slate-350/[0.15] bg-black/5 px-4 py-2 hover:bg-black/10 transition-colors dark:border-white/10 dark:bg-white/[0.02] text-[11px] font-semibold text-slate-500 dark:text-white/70 shadow-sm"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-teal-400 dark:bg-white animate-pulse" />
              <span>{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
