import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, MapPin, Calendar, Globe } from 'lucide-react';
import { resumeData } from '../resumeData';

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-24 md:px-8 max-w-5xl mx-auto font-sans text-slate-200">
      
      {/* Glow dot */}
      <div className="absolute left-1/3 top-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center select-none">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[9px] font-bold tracking-[0.25em] text-teal-400 dark:text-teal-300 uppercase"
        >
          04 &middot; ACADEMICS
        </motion.p>
        
        <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl text-slate-800 dark:text-white">
          EDUCATION PROFILE
        </h2>
        
        <p className="mt-2 text-xs text-slate-500 max-w-sm font-sans dark:text-white/40">
          A rigorous, detailed timeline of academic background verified by resume credentials.
        </p>
      </div>

      {/* Technical Academic Tree List */}
      <div className="mt-16 relative border-l-2 border-slate-300/10 dark:border-white/10 pl-6 sm:pl-8 space-y-12 max-w-3xl mx-auto">
        {resumeData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative"
          >
            {/* Timeline node node connector */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center bg-[#fafafa] dark:bg-[#050505] border border-slate-400 dark:border-white/20 rounded-none rotate-45">
              <div className="h-1 w-1 bg-teal-450 dark:bg-white" />
            </div>

            <div className="rounded-sm border border-slate-350/[0.15] bg-black/5 dark:border-white/10 dark:bg-white/[0.01] p-5 sm:p-6 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="font-mono text-[9px] font-bold text-teal-500 tracking-widest uppercase">
                  Academic Node {idx + 1}
                </span>

                <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                  <Calendar className="h-3 w-3" />
                  <span>{edu.dates}</span>
                </div>
              </div>

              <h4 className="mt-2 font-display text-base font-bold text-slate-800 dark:text-slate-100">
                {edu.institution}
              </h4>

              <p className="mt-1 font-sans text-xs font-semibold text-slate-650 dark:text-slate-300">
                {edu.degree}
              </p>

              {edu.location && (
                <div className="mt-4 flex items-center gap-1.5 font-sans text-[11px] text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
