import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const totalDuration = 1400; // 1.4 seconds (between 1.2s - 1.8s)
    const intervalTime = 30;
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShouldExit(true);
            setTimeout(onComplete, 400); // Wait for fade-out exit animation
          }, 200);
          return 100;
        }
        return Math.min(100, prev + step);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          id="splash-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020817] font-sans"
        >
          {/* Futuristic Background Decor */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Minimal Animated monogram from "AR" initials */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative flex h-20 w-20 items-center justify-center border border-white/20 rotate-45 bg-[#020817] overflow-hidden"
            >
              <div className="absolute inset-0 border border-dashed border-white/10" />
              <span className="-rotate-45 font-display text-2xl font-black tracking-tighter text-white">
                AR
              </span>
            </motion.div>

            {/* Title / Role Loader */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 font-cinzel text-sm font-black uppercase tracking-[0.3em] text-[#F5F5F5]"
            >
              ANIL RATHOD
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.5 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-1.5 font-mono text-[9px] tracking-widest text-amber-400 uppercase"
            >
              ENTERPRISE .NET HYBRID
            </motion.p>

            {/* Smooth Loading Bar */}
            <div className="relative mt-8 h-[1px] w-48 overflow-hidden bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress counter */}
            <motion.span
              key={Math.floor(progress)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-3 font-mono text-[9px] font-bold text-white/50"
            >
              {Math.floor(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
