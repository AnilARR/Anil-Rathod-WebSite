import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldAlert, Zap, Trophy, Flame } from 'lucide-react';
import { resumeData } from '../resumeData';

export default function Achievements() {
  // Let's pair each of the structured resume achievements with custom visual badges and spotlights
  const customMilestones = [
    {
      id: 'ml-1',
      title: "Para Star Award recipient",
      context: "Honored with the prestigious Para Star Award at Paramatrix Technologies for exceptional performance, dedicated commitment, and robust technical contributions.",
      category: "Honors & Wins",
      icon: Trophy,
      color: "from-amber-400 to-yellow-600",
      accent: "rgba(245, 158, 11, 0.15)",
      badge: "Winner"
    },
    {
      id: 'ml-2',
      title: "5+ Years Fintech expertise",
      context: "Extensive background delivering scalable distributed systems under high security mandates for banking and insurance clients (BLME, ICICI, Kotak).",
      category: "Enterprise Metrics",
      icon: Flame,
      color: "from-teal-400 to-indigo-500",
      accent: "rgba(20, 184, 166, 0.15)",
      badge: "5+ Years"
    },
    {
      id: 'ml-3',
      title: "Legacy to Core migrations",
      context: "Seamlessly migrated complex legacy databases and core monolithic routines from .NET Framework 4.8 to .NET Core 8 on the high-throughput BANCA engine.",
      category: "Architecture Achievements",
      icon: Zap,
      color: "from-indigo-400 to-purple-600",
      accent: "rgba(99, 102, 241, 0.15)",
      badge: "Completed"
    },
    {
      id: 'ml-4',
      title: "ETL / Data optimization pipeline",
      context: "Architected high-throughput SSIS pipelines, Sybase stored procedures, and Apache Kafka engines to securely process and route millions of financial ledger streams.",
      category: "Infrastructure Wins",
      icon: ShieldAlert,
      color: "from-emerald-400 to-teal-500",
      accent: "rgba(16, 185, 129, 0.15)",
      badge: "Optimized"
    }
  ];

  return (
    <section id="achievements" className="relative px-4 py-24 md:px-8 max-w-7xl mx-auto font-sans overflow-hidden">
      
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      {/* Title */}
      <div className="flex flex-col items-center text-center select-none">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[9px] font-bold tracking-[0.25em] text-amber-500 dark:text-amber-300 uppercase"
        >
          02 &middot; IMPACT INDEX
        </motion.p>
        
        <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl text-slate-800 dark:text-white">
          TROPHIES & ARCHITECTURE
        </h2>
        
        <p className="mt-2 text-xs text-slate-500 max-w-sm font-sans dark:text-white/40">
          A structured digest of premium credentials and milestones earned on the frontlines of financial technology.
        </p>
      </div>

      {/* Main Container - Touch-friendly snap carousel on mobile, nice 2x2 grid on desktop */}
      <div className="mt-16 flex w-full gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
        {customMilestones.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative min-w-[85vw] shrink-0 snap-center rounded-sm border border-slate-350/[0.15] bg-black/5 dark:border-white/10 dark:bg-white/[0.01] p-6 md:p-8 backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.01] md:min-w-0"
              style={{
                background: `radial-gradient(circle at 10% 20%, ${item.accent} 0%, rgba(5,5,5,0.02) 80%)`
              }}
            >
              {/* Card Spotlight Back-glow */}
              <div className="absolute inset-0 -z-10 bg-radial from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] font-bold text-amber-400 tracking-widest uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-400 transition-all">
                    {item.title}
                  </h3>
                </div>

                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-indigo-500/10 text-white shrink-0`}>
                  <Icon className="h-5.5 w-5.5" />
                </div>
              </div>

              {/* Description context */}
              <p className="mt-6 text-xs leading-relaxed text-slate-400 dark:text-slate-350">
                {item.context}
              </p>

              {/* Decorative item footer */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-350/[0.15] dark:border-white/10 pt-4">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-[0.2em]">Verified Data</span>
                <span className="rounded-sm bg-black/40 dark:bg-white/5 px-2.5 py-0.5 font-mono text-[9px] font-bold text-slate-500 dark:text-white/60 border border-slate-350/[0.1] dark:border-white/5 uppercase">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
