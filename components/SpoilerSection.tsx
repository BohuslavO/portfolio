"use client";

import { useState, useEffect, useRef } from "react";

type Phase = "idle" | "fading" | "done";

export function SpoilerSection({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("fading");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;

    const W = canvas.width;
    const H = canvas.height;

    type P = { x: number; y: number; vx: number; vy: number; alpha: number };
    const count = Math.max(180, Math.floor((W * H) / 70));
    const ps: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      alpha: Math.random() * 0.55 + 0.1,
    }));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of ps) {
        p.vx += (Math.random() - 0.5) * 0.018;
        p.vy += (Math.random() - 0.5) * 0.018;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        p.alpha += (Math.random() - 0.5) * 0.035;
        p.alpha = Math.max(0.04, Math.min(0.6, p.alpha));

        const a = p.alpha;
        ctx.fillStyle = `rgba(255,255,255,${a * 0.2})`;
        ctx.fillRect(p.x - 1, p.y - 1, 3, 3);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect(p.x, p.y, 0.8, 0.8);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      {/* Content */}
      <div
        className={`transition-all duration-600 ${
          phase === "idle" ? "blur-md select-none pointer-events-none" : ""
        }`}
      >
        {children}
      </div>

      {/* Overlay */}
      {phase !== "done" && (
        <div
          className={`absolute inset-0 z-10 rounded-xl overflow-hidden ${phase === "idle" ? "glow-card" : ""}`}
          onClick={handleClick}
          style={{
            cursor: phase === "idle" ? "pointer" : "default",
            pointerEvents: phase === "fading" ? "none" : "auto",
          }}
        >
          {/* Tint */}
          <div
            className="absolute inset-0 rounded-xl bg-zinc-950/40 transition-opacity duration-500"
            style={{ opacity: phase === "fading" ? 0 : 1 }}
          />

          {/* Particle canvas — fades out via CSS, no movement */}
          <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 transition-opacity duration-700"
            style={{ opacity: phase === "fading" ? 0 : 1 }}
            onTransitionEnd={() => phase === "fading" && setPhase("done")}
          />

          {/* Hint */}
          {phase === "idle" && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md">
                <svg className="h-3.5 w-3.5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-xs font-medium tracking-wide text-white/80">Click to reveal</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
