import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, ArrowUpRight, CheckCircle, Database } from 'lucide-react';
import { resumeData } from '../resumeData';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export default function Hero({ isDarkMode, onOpenResume }: HeroProps) {
  const handleScrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Top 3 Impact Highlights based ONLY on real resume data
  const topImpacts = [
    {
      id: 'hi-1',
      icon: Briefcase,
      badge: "5+ Years",
      title: "Fintech Core systems",
      desc: "Architected high-performance systems for ICICI Lombard, Kotak Mahindra, and BLME."
    },
    {
      id: 'hi-2',
      icon: Award,
      badge: "Para Star",
      title: "Award Winner",
      desc: "Honored at Paramatrix Technologies for exceptional enterprise-ready engineering."
    },
    {
      id: 'hi-3',
      icon: Database,
      badge: ".NET Core 8",
      title: "Legacy Migrations",
      desc: "Successfully porting heavy .NET Framework 4.8 monoliths to event-driven .NET Core architectures."
    }
  ];

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-4 pt-24 pb-20 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Visual Background Accent / Subtle Mesh Grid Glow */}
      <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Side: Cinematic Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300/10 bg-black/40 dark:border-white/10 dark:bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <div className="h-2 w-2 rounded-full bg-slate-400 dark:bg-white animate-pulse" />
            <span className="font-mono text-[10px] font-semibold text-slate-500 dark:text-white/60 uppercase tracking-[0.25em]">
              Available for Elite Roles
            </span>
          </motion.div>

          {/* Cinematic Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 font-display text-5xl font-black tracking-tighter sm:text-7xl leading-[0.85] uppercase text-left text-slate-900 dark:text-white"
          >
            ANIL <br />
            <span className="text-transparent" style={{ WebkitTextStroke: isDarkMode ? '1.5px rgba(255,255,255,0.85)' : '1.5px rgba(15,23,42,0.85)', webkitTextStroke: isDarkMode ? '1.5px rgba(255,255,255,0.85)' : '1.5px rgba(15,23,42,0.85)' }}>
              RATHOD
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-4 font-display text-base font-bold text-slate-500 dark:text-white/60 uppercase tracking-widest"
          >
            {resumeData.basics.title}
          </motion.h2>

          {/* Short dynamic description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8 }}
            className="mt-6 text-xs sm:text-sm leading-relaxed text-slate-505 text-slate-500 dark:text-white/50 max-w-lg font-sans"
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Specializing in secure, high-throughput financial frameworks. Experienced developer of custom APIs, SSIS pipelines, and distributed Kafka mechanics for domestic and international banking leaders.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={handleScrollToExperience}
              className="group flex items-center justify-center gap-2 bg-[#1C1C1E] text-white dark:bg-white dark:text-[#020817] font-display text-xs font-semibold uppercase tracking-widest rounded-sm px-8 py-4 shadow-xl hover:opacity-95 hover:scale-[1.02] transition-all cursor-pointer duration-300"
            >
              View Experience
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 font-display text-xs font-semibold uppercase tracking-widest rounded-sm px-8 py-4 hover:scale-[1.02] transition-all cursor-pointer duration-300"
            >
              Resume Hub
            </button>
          </motion.div>
        </div>

        {/* Right Side: Futuristic visual mockup framing/representing 5+ years history */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full max-w-sm rounded border border-slate-300/10 bg-black/40 dark:border-white/10 dark:bg-white/[0.02] p-6 backdrop-blur-md shadow-2xl"
          >
            {/* Dots UI Window Control */}
            <div className="flex gap-1.5 pb-4 border-b border-slate-300/[0.15] dark:border-white/10">
              <div className="h-2 w-2 rounded-full bg-red-500/60" />
              <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
              <div className="h-2 w-2 rounded-full bg-green-500/60" />
              <span className="font-mono text-[9px] text-slate-500 ml-auto uppercase tracking-wide">dotnet_terminal.sh</span>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex justify-between items-center bg-black/20 dark:bg-white/[0.01] p-3 rounded-sm border border-slate-300/[0.15] dark:border-white/5">
                <span className="font-mono text-xs text-slate-500">SYSTEM STACK</span>
                <span className="font-mono text-xs font-semibold text-teal-400">RESTful / ETL</span>
              </div>
              <div className="flex justify-between items-center bg-black/20 dark:bg-white/[0.01] p-3 rounded-sm border border-slate-300/[0.15] dark:border-white/5">
                <span className="font-mono text-xs text-slate-500">DATABASE GURU</span>
                <span className="font-mono text-xs font-semibold text-indigo-400">Oracle / SQL Server</span>
              </div>
              <div className="flex justify-between items-center bg-black/20 dark:bg-white/[0.01] p-3 rounded-sm border border-slate-300/[0.15] dark:border-white/5">
                <span className="font-mono text-xs text-slate-500">CLOUD REACH</span>
                <span className="font-mono text-xs font-semibold text-violet-400">Azure / AWS</span>
              </div>
              
              <div className="font-mono text-[10px] text-slate-500 leading-relaxed border-t border-slate-300/[0.15] dark:border-white/10 pt-4">
                <span className="text-indigo-400">&gt;</span> Initialize mapping... <br />
                <span className="text-teal-400">&gt;</span> 5+ Years experience parsed.<br />
                <span className="text-emerald-400">&gt;</span> Standard authentication enabled [JWT/AES/RSA].
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top 3 Impact Strip (Above fold, positioned horizontally below the fold) */}
      <div id="top-impact-strip" className="mt-20 w-full">
        <div className="relative">
          {/* Section Divider subtle */}
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300/[0.15] dark:via-white/10 to-transparent" />
          
          <div className="pt-8 text-center">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-indigo-400 dark:text-indigo-300">
              Above the Fold &middot; Professional Metrics
            </p>
            <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 uppercase">
              Top 3 Business Value Highlights
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topImpacts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative flex flex-col rounded-sm border border-slate-350/[0.15] bg-black/5 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.01]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-indigo-500/10 text-indigo-400 dark:bg-white/5 dark:text-white">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-mono text-[9px] font-bold tracking-wider rounded-sm bg-teal-500/10 dark:bg-teal-500/20 text-teal-500 dark:text-teal-300 px-3 py-1 uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-400 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-white/50">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
