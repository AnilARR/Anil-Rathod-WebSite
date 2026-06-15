import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Terminal, Database, Cloud, Key, CheckCircle, LayoutGrid, Columns, TableProperties, ShieldCheck, HelpCircle } from 'lucide-react';
import { resumeData } from '../resumeData';

export default function Skills() {
  const [layoutMode, setLayoutMode] = useState<'grid-2' | 'grid-4' | 'table'>('grid-2');

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
      { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
      { text: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
      { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20" },
      { text: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    ];
    return schemas[idx % schemas.length];
  };

  // Static metadata to enrich the tabular view layout option
  const tableMetadata: Record<string, { mandate: string; tracking: string }> = {
    "Backend Engineering": {
      mandate: "High-integrity, secure core APIs, RESTful services, and localized enterprise microservice backends.",
      tracking: "ICICI Lombard, BLME (UK) Core Architecture"
    },
    "Database & ETL Processing": {
      mandate: "SSIS ETL orchestration, Sybase procedures, schema migration, and transaction logging structures.",
      tracking: "Kotak Mahindra Bank Integration Lead"
    },
    "DevOps & Cloud Systems": {
      mandate: "Multi-branched GitLab CI templates, AWS rating instances configuration, and automatic IIS replication clusters.",
      tracking: "ICRA Ratings CRISP Cloud Deployment"
    },
    "Frontend & Architecture": {
      mandate: "Modular TypeScript apps with Angular state machines, paired with event-driven Kafka stream consumers.",
      tracking: "High-Frequency Banca Systems Sync"
    }
  };

  return (
    <section id="skills" className="relative px-4 py-24 md:px-8 max-w-7xl mx-auto font-sans select-none">
      
      {/* Accent vector behind */}
      <div className="absolute right-10 bottom-0 -z-10 h-64 w-64 rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center select-none">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[9px] font-bold tracking-[0.25em] text-amber-500 dark:text-amber-300 uppercase"
        >
          03 &middot; STACK SPECTRUM
        </motion.p>
        
        <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl text-slate-800 dark:text-white">
          TECHNICAL MATRIX
        </h2>
        
        <p className="mt-2 text-xs text-slate-500 max-w-sm font-sans dark:text-white/40">
          A rigorous, verified inventory of database paradigms, core frameworks, and enterprise libraries.
        </p>

        {/* Dynamic Column and Design Selector Controllers */}
        <div className="mt-8 flex items-center justify-center gap-1.5 p-1 rounded-sm border border-slate-350/[0.15] bg-black/5 dark:border-white/10 dark:bg-white/[0.02] max-w-sm mx-auto">
          <button
            onClick={() => setLayoutMode('grid-2')}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[9.5px] font-bold uppercase tracking-wider transition-all duration-300 rounded-xs cursor-pointer ${
              layoutMode === 'grid-2'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-md'
                : 'text-slate-500 hover:text-slate-800 dark:text-white/40 dark:hover:text-white/80'
            }`}
            title="2-Column Balanced Grid"
          >
            <LayoutGrid className="h-3 w-3" />
            Grid (2C)
          </button>
          
          <button
            onClick={() => setLayoutMode('grid-4')}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[9.5px] font-bold uppercase tracking-wider transition-all duration-300 rounded-xs cursor-pointer ${
              layoutMode === 'grid-4'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-md'
                : 'text-slate-500 hover:text-slate-800 dark:text-white/40 dark:hover:text-white/80'
            }`}
            title="4-Column Extended Grid"
          >
            <Columns className="h-3 w-3" />
            Expanded (4C)
          </button>

          <button
            onClick={() => setLayoutMode('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[9.5px] font-bold uppercase tracking-wider transition-all duration-300 rounded-xs cursor-pointer ${
              layoutMode === 'table'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-md'
                : 'text-slate-500 hover:text-slate-800 dark:text-white/40 dark:hover:text-white/80'
            }`}
            title="Tabular Enterprise Ledger"
          >
            <TableProperties className="h-3 w-3" />
            fintech Table
          </button>
        </div>
      </div>

      {/* Dynamic Content Layout Containers with motion wrapper */}
      <div className="mt-16">
        <AnimatePresence mode="wait">
          {layoutMode === 'grid-2' && (
            <motion.div
              key="grid-2-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {resumeData.skills.map((grp, gidx) => {
                const Icon = getCategoryIcon(grp.category);
                const theme = getCategoryTheme(gidx);
                return (
                  <div
                    key={grp.category}
                    className="relative rounded-sm border border-slate-350/[0.15] bg-black/5 p-6 md:p-8 backdrop-blur-md transition-all dark:border-white/10 dark:bg-white/[0.01]"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.bg} ${theme.text}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                        {grp.category}
                      </h3>
                    </div>

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
                  </div>
                );
              })}
            </motion.div>
          )}

          {layoutMode === 'grid-4' && (
            <motion.div
              key="grid-4-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {resumeData.skills.map((grp, gidx) => {
                const Icon = getCategoryIcon(grp.category);
                const theme = getCategoryTheme(gidx);
                return (
                  <div
                    key={grp.category}
                    className="relative rounded-sm border border-slate-350/[0.15] bg-black/5 p-5 backdrop-blur-md transition-all dark:border-white/10 dark:bg-white/[0.01] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${theme.bg} ${theme.text}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-[11px] font-black tracking-wider text-slate-800 dark:text-slate-200 uppercase leading-snug">
                          {grp.category.split(' & ')[0]}
                        </h3>
                      </div>

                      <div className="mt-4 flex flex-col gap-1.5">
                        {grp.skills.map((sk, sidx) => (
                          <span
                            key={sidx}
                            className="flex items-center gap-1.5 rounded-none border-b border-dashed border-slate-300/10 dark:border-white/5 py-1 font-sans text-[10px] text-slate-500 dark:text-white/60"
                          >
                            <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-white mr-1 shrink-0" />
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {layoutMode === 'table' && (
            <motion.div
              key="table-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full overflow-hidden rounded-sm border border-slate-350/[0.15] bg-black/5 dark:border-white/10 dark:bg-white/[0.01] backdrop-blur-md"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left border-collapse font-sans text-xs">
                  <thead>
                    <tr className="border-b border-slate-350/[0.15] dark:border-white/10 bg-black/25 dark:bg-white/[0.02] text-slate-400 dark:text-white/40 font-mono text-[9px] uppercase tracking-widest">
                      <th className="p-4 pl-6">Core Domain Category</th>
                      <th className="p-4">Enterprise Architect Mandate</th>
                      <th className="p-4">Active Deployments</th>
                      <th className="p-4 pr-6 text-right">Verification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-350/[0.1] dark:divide-white/5">
                    {resumeData.skills.map((grp, gidx) => {
                      const meta = tableMetadata[grp.category] || { mandate: "Custom module assembly and deployment flow.", tracking: "Internal Fintech Node" };
                      const Icon = getCategoryIcon(grp.category);
                      const theme = getCategoryTheme(gidx);
                      return (
                        <tr key={grp.category} className="hover:bg-black/10 dark:hover:bg-white/[0.01] transition-colors">
                          {/* Col 1 */}
                          <td className="p-4 pl-6 align-top">
                            <div className="flex items-center gap-3">
                              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${theme.bg} ${theme.text}`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <h4 className="font-display font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                                  {grp.category}
                                </h4>
                                <span className="font-mono text-[9px] text-slate-500">
                                  {grp.skills.length} Stack keys
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Col 2 */}
                          <td className="p-4 align-top max-w-sm">
                            <p className="text-slate-500 dark:text-slate-300 font-medium">
                              {meta.mandate}
                            </p>
                            <div className="mt-2.5 flex flex-wrap gap-1">
                              {grp.skills.slice(0, 6).map((sk, sidx) => (
                                <span
                                  key={sidx}
                                  className="rounded-xs border border-slate-350/[0.12] dark:border-white/5 bg-black/5 dark:bg-white/[0.02] px-1.5 py-0.5 font-mono text-[8.5px] text-slate-500 dark:text-white/50"
                                >
                                  {sk}
                                </span>
                              ))}
                              {grp.skills.length > 6 && (
                                <span className="text-[8.5px] text-amber-400 font-mono ml-1 align-middle pt-0.5">
                                  +{grp.skills.length - 6} more
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Col 3 */}
                          <td className="p-4 align-top">
                            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px]">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                              <span>{meta.tracking}</span>
                            </div>
                          </td>

                          {/* Col 4 */}
                          <td className="p-4 pr-6 align-top text-right">
                            <span className="inline-flex items-center gap-1.5 rounded-sm bg-amber-500/10 px-2.5 py-1 font-mono text-[9px] font-bold text-amber-500 dark:text-amber-300 uppercase">
                              <ShieldCheck className="h-3 w-3 shrink-0" />
                              Verified
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400 dark:bg-white animate-pulse" />
              <span>{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
