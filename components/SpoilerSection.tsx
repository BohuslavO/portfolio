"use client";

import { useState, useEffect, useRef } from "react";

type Phase = "idle" | "bursting" | "done";

export function SpoilerSection({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (phaseRef.current !== "idle") return;
    phaseRef.current = "bursting";
    setPhase("bursting");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PAD = 180;
    const W0 = wrap.offsetWidth;
    const H0 = wrap.offsetHeight;
    const W = W0 + PAD * 2;
    const H = H0 + PAD * 2;
    canvas.width = W;
    canvas.height = H;

    const cx = W / 2;
    const cy = H / 2;

    type P = {
      x: number; y: number;
      vx: number; vy: number;
      alpha: number;
    };

    const count = Math.max(220, Math.floor((W0 * H0) / 65));
    const ps: P[] = Array.from({ length: count }, () => ({
      x: PAD + Math.random() * W0,
      y: PAD + Math.random() * H0,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.1,
    }));

    let bursting = false;
    let raf = 0;

    const startBurst = () => {
      bursting = true;
      for (const p of ps) {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        const spd = 2.5 + Math.random() * 6;
        p.vx = (dx / d) * spd + (Math.random() - 0.5) * 3;
        p.vy = (dy / d) * spd + (Math.random() - 0.5) * 3;
      }
    };

    const tick = () => {
      if (phaseRef.current === "bursting" && !bursting) startBurst();
      ctx.clearRect(0, 0, W, H);

      let anyVisible = false;

      for (const p of ps) {
        if (bursting) {
          p.vx *= 1.035;
          p.vy *= 1.035;
          p.alpha -= 0.016; // slow, graceful fade
        } else {
          p.vx += (Math.random() - 0.5) * 0.02;
          p.vy += (Math.random() - 0.5) * 0.02;
          // wrap within card region
          if (p.x < PAD) p.x = PAD + W0;
          if (p.x > PAD + W0) p.x = PAD;
          if (p.y < PAD) p.y = PAD + H0;
          if (p.y > PAD + H0) p.y = PAD;
          p.alpha += (Math.random() - 0.5) * 0.04;
          p.alpha = Math.max(0.04, Math.min(0.7, p.alpha));
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.alpha > 0.01) {
          anyVisible = true;
          const a = Math.max(0, p.alpha);
          // soft glow: larger faint halo + small bright core
          ctx.fillStyle = `rgba(255,255,255,${a * 0.25})`;
          ctx.fillRect(p.x - 1, p.y - 1, 3, 3);
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.fillRect(p.x, p.y, 0.8, 0.8);
        }
      }

      if (bursting && !anyVisible) {
        phaseRef.current = "done";
        setPhase("done");
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      {/* Content — unblurs as particles burst */}
      <div
        className={`transition-all duration-500 ${
          phase === "idle" ? "blur-md select-none pointer-events-none" : ""
        }`}
      >
        {children}
      </div>

      {/* Overlay */}
      {phase !== "done" && (
        <div
          className="absolute inset-0 z-10 rounded-xl"
          onClick={handleClick}
          style={{
            cursor: phase === "idle" ? "pointer" : "default",
            pointerEvents: phase === "bursting" ? "none" : "auto",
          }}
        >
          {/* Dark tint — fades instantly on burst */}
          <div
            className="absolute inset-0 rounded-xl bg-zinc-950/40 transition-opacity duration-150"
            style={{ opacity: phase === "bursting" ? 0 : 1 }}
          />

          {/* Particle canvas — extends 180px beyond card so particles fly out */}
          <canvas
            ref={canvasRef}
            className="pointer-events-none absolute"
            style={{ left: -180, top: -180, zIndex: 1 }}
          />

          {/* Click hint */}
          {phase === "idle" && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 2 }}
            >
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
          )}
        </div>
      )}
    </div>
  );
}
