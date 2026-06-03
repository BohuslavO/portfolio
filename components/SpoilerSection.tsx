"use client";

import { useState, useEffect, useRef } from "react";

interface SpoilerSectionProps {
  children: React.ReactNode;
}

export function SpoilerSection({ children }: SpoilerSectionProps) {
  const [revealed, setRevealed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    type Particle = { x: number; y: number; vx: number; vy: number; alpha: number };
    const count = Math.max(200, Math.floor((canvas.width * canvas.height) / 60));
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      alpha: Math.random(),
    }));

    let running = true;
    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += (Math.random() - 0.5) * 0.07;
        p.alpha = Math.max(0.05, Math.min(0.9, p.alpha));
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.fillStyle = `rgba(200, 160, 255, ${p.alpha})`;
        ctx.fillRect(p.x, p.y, 1.5, 1.5);
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      running = false;
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="relative">
      {/* Content — blurred until revealed */}
      <div
        className={`transition-all duration-700 ${
          revealed ? "" : "blur-md select-none pointer-events-none"
        }`}
      >
        {children}
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 z-10 overflow-hidden rounded-xl transition-opacity duration-600 ${
          revealed ? "opacity-0 pointer-events-none" : "cursor-pointer"
        }`}
        onClick={() => setRevealed(true)}
      >
        {/* Particle canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        {/* Subtle tint */}
        <div className="absolute inset-0 bg-zinc-950/40" />
        {/* Reveal hint */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md">
            <svg
              className="h-3.5 w-3.5 text-purple-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="text-xs font-medium tracking-wide text-white/80">
              Click to reveal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
