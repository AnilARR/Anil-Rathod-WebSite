import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, Cpu, BookOpen, Sun, Moon, Sparkles, FileText } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
  onOpenResume: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme, activeSection, onOpenResume }: NavbarProps) {
  const navItems = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'achievements', label: 'Impact', icon: Award },
    { id: 'skills', label: 'Capabilities', icon: Cpu },
    { id: 'education', label: 'Education', icon: BookOpen },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Floating Header for Branding (Visible on Desktop) */}
      <header className="fixed top-0 left-0 right-0 z-40 hidden items-center justify-between px-8 py-6 md:flex pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 pointer-events-auto"
        >
          <div className="w-10 h-10 border border-slate-350/[0.15] dark:border-white/20 flex items-center justify-center rotate-45 bg-black/40 dark:bg-white/5 transition-transform hover:rotate-135 duration-700">
            <span className="-rotate-45 font-display font-black text-xs tracking-tighter text-slate-800 dark:text-white">AR</span>
          </div>
          <span className="font-cinzel text-xs font-black tracking-[0.18em] text-slate-800 dark:text-amber-100 uppercase">
            Anil Rathod <span className="font-mono text-[8.5px] tracking-normal text-amber-400 uppercase ml-1.5 font-bold">v1.1</span>
          </span>
        </motion.div>

        {/* Action Items */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            id="theme-toggler"
            className="flex h-10 w-10 items-center justify-center border border-slate-300/[0.15] bg-black/20 text-slate-600 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.02] dark:text-white/60 dark:hover:text-white hover:scale-105 transition-all cursor-pointer pointer-events-auto"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          {/* Download Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="group flex items-center gap-2 bg-[#1C1C1E] text-white dark:bg-white dark:text-[#020817] border border-transparent hover:opacity-90 font-display text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-all cursor-pointer duration-300 pointer-events-auto"
          >
            <FileText className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
            Resume Hub
          </button>
        </motion.div>
      </header>

      {/* Futuristic Navigation Bar (Snaps to bottom on mobile, floating bottom-hub on desktop) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center p-4 md:bottom-8">
        <motion.nav
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
          className="relative flex items-center gap-2 border border-slate-350/[0.15] bg-white/95 text-slate-800 dark:border-white/10 dark:bg-black/95 px-3 py-2.5 shadow-2xl backdrop-blur-xl sm:px-4 md:gap-4"
        >
          {/* Mobile Theme Switcher (Left aligned inside navigation bar) */}
          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all md:hidden hover:text-amber-400 cursor-pointer"
          >
            {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <div className="h-6 w-[1px] bg-slate-800 md:hidden" />

          {/* Nav Items */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex h-11 flex-col items-center justify-center rounded-xl px-3 transition-colors cursor-pointer sm:px-4"
              >
                {/* Active Indicator bubble behind */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-slate-100 dark:bg-white/5 border-b border-amber-500 dark:border-white"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}

                <Icon
                  className={`h-4.5 w-4.5 transition-transform group-hover:-translate-y-0.5 ${
                    isActive
                      ? 'text-amber-400 dark:text-amber-400 light:text-amber-600'
                      : 'text-slate-400 group-hover:text-slate-200 light:text-slate-500 light:group-hover:text-slate-800'
                  }`}
                />
                <span
                  className={`mt-1 font-sans text-[9px] font-medium tracking-tight whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-amber-400 dark:text-amber-400 light:text-amber-600'
                      : 'text-slate-400 group-hover:text-slate-200 light:text-slate-500 light:group-hover:text-slate-800'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          <div className="h-6 w-[1px] bg-slate-800 md:hidden" />

          {/* Mobile Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-all md:hidden hover:bg-amber-500/25 cursor-pointer"
          >
            <FileText className="h-4.5 w-4.5" />
          </button>
        </motion.nav>
      </div>
    </>
  );
}
