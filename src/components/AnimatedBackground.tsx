import React, { useEffect, useRef, useState } from 'react';

interface AnimatedBackgroundProps {
  isDarkMode: boolean;
}

export default function AnimatedBackground({ isDarkMode }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's prefers-reduced-motion setting
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const isMobile = () => window.innerWidth < 768;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = isMobile() ? 35 : 85; // Capped particles on mobile
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4, // ultra slow drift
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.3 + 0.1,
        });
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Mesh Shading Gradients base
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.4,
        canvas.height * 0.3,
        10,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height)
      );

      if (isDarkMode) {
        gradient.addColorStop(0, '#050505');
        gradient.addColorStop(0.5, '#070709');
        gradient.addColorStop(1, '#050505');
      } else {
        gradient.addColorStop(0, '#fafafa');
        gradient.addColorStop(0.5, '#f5f5f5');
        gradient.addColorStop(1, '#ebebeb');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Mesh Background Glow Spots (Soft shifting circles)
      const time = Date.now() * 0.0003;
      const glowX1 = canvas.width * 0.3 + Math.sin(time) * 120;
      const glowY1 = canvas.height * 0.4 + Math.cos(time) * 120;
      const glowRad1 = isMobile() ? 200 : 400;

      const glowGrad1 = ctx.createRadialGradient(glowX1, glowY1, 0, glowX1, glowY1, glowRad1);
      if (isDarkMode) {
        glowGrad1.addColorStop(0, 'rgba(79, 70, 229, 0.05)'); // subtle indigo
        glowGrad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        glowGrad1.addColorStop(0, 'rgba(99, 102, 241, 0.06)');
        glowGrad1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = glowGrad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glowX2 = canvas.width * 0.7 + Math.cos(time * 0.8) * 120;
      const glowY2 = canvas.height * 0.6 + Math.sin(time * 0.8) * 120;
      const glowRad2 = isMobile() ? 180 : 350;

      const glowGrad2 = ctx.createRadialGradient(glowX2, glowY2, 0, glowX2, glowY2, glowRad2);
      if (isDarkMode) {
        glowGrad2.addColorStop(0, 'rgba(20, 184, 166, 0.04)'); // subtle teal
        glowGrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        glowGrad2.addColorStop(0, 'rgba(20, 184, 166, 0.05)');
        glowGrad2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = glowGrad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 3. Render Particles + Connecting lines
      const lineDist = isMobile() ? 75 : 120;
      const colorParticle = isDarkMode ? 'rgba(226, 232, 240,' : 'rgba(71, 85, 105,';
      const colorLine = isDarkMode ? 'rgba(99, 102, 241,' : 'rgba(99, 102, 241,';

      particles.forEach((p, idx) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Boundaries bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Safeguard inside canvas
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${colorParticle}${p.alpha})`;
        ctx.fill();

        // Connect particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < lineDist) {
            const lineAlpha = (1 - dist / lineDist) * 0.07;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${colorLine}${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode, reducedMotion]);

  if (reducedMotion) {
    // Static fallback theme
    return (
      <div
        className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ${
          isDarkMode
            ? 'bg-[#050505]'
            : 'bg-[#fafafa]'
        }`}
      />
    );
  }

  return (
    <canvas
      id="ambient-fable-canvas"
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
