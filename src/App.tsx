/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import ResumeModal from './components/ResumeModal';
import { Mail, Linkedin, Globe, Sparkles } from 'lucide-react';
import { resumeData } from './resumeData';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Set default body background based on dark mode at start
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#020817' : '#fafafa';
  }, [isDarkMode]);

  // Section Observer (Scroll Spy)
  useEffect(() => {
    if (loading) return;

    const sections = ['experience', 'achievements', 'skills', 'education'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25, rootMargin: '-10% 0px -40% 0px' }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [loading]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? 'dark text-[#F5F5F5]' : 'text-[#1C1C1E]'}>
      {/* 1. Cinematic Pre-Loader Splash Screen */}
      <SplashScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200"
          >
            {/* 2. Premium Subtle Canvas Background */}
            <AnimatedBackground isDarkMode={isDarkMode} />

            {/* 3. Floating Navigation Spy */}
            <Navbar
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
              activeSection={activeSection}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* Decorative Grid Mesh Overlay */}
            <div className="pointer-events-none fixed inset-0 z-10 bg-[linear-gradient(to_right,rgba(120,119,198,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,198,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-20" />

            {/* Main Application Sections Container */}
            <main className="relative z-20 pb-32">
              
              {/* Hero Landing */}
              <div id="home">
                <Hero isDarkMode={isDarkMode} onOpenResume={() => setIsResumeOpen(true)} />
              </div>

              {/* Experience timeline accordion */}
              <Experience />

              {/* Achievements grouped cards */}
              <Achievements />

              {/* Grouped Capabilities matrices */}
              <Skills />

              {/* Academic timeline */}
              <Education />

              {/* Subtle Footer */}
              <footer className="mt-20 border-t border-slate-850/60 py-12 text-center dark:border-slate-800/60 light:border-slate-200 font-sans select-none">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-4">
                    <a
                      href={resumeData.basics.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-amber-400 transition"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${resumeData.basics.email}`}
                      className="text-slate-400 hover:text-yellow-400 transition"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={resumeData.basics.links.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-amber-300 transition"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <p className="font-mono text-[9px] text-slate-500 tracking-wider">
                    COMPILATION VERIFIED BY RESUME SCHEMA &middot; ALL RIGHTS RESERVED &copy; 2026
                  </p>
                </div>
              </footer>

            </main>

            {/* 4. Full Resume View & Export Hub Modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
