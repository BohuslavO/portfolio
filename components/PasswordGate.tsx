"use client";

import { useState, useEffect, useRef } from "react";

const PASSWORD = "Bohuslav2026";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (auth) return <>{children}</>;

  const submit = () => {
    if (value === PASSWORD) {
      setAuth(true);
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050510] px-6">
      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="mb-5 text-center text-sm text-zinc-400">Enter password to continue</p>

          <div className={`transition-transform ${shake ? "animate-[shake_0.4s_ease]" : ""}`}>
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false); }}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="Password"
              className={`w-full rounded-lg border px-4 py-3 text-sm text-white outline-none transition-all bg-white/5 backdrop-blur-sm placeholder-zinc-600 focus:ring-2 focus:ring-purple-500/40 ${
                error
                  ? "border-red-500/50 focus:border-red-500/70"
                  : "border-white/10 focus:border-purple-500/50"
              }`}
            />
            {error && (
              <p className="mt-2 text-center text-xs text-red-400">Incorrect password</p>
            )}
          </div>

          <button
            onClick={submit}
            className="mt-5 w-full rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-75"
          >
            Enter
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-5px); }
          80%       { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
}
