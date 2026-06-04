"use client";

import { useState } from "react";
import { SectionLabel } from "./Education";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-white/8 mb-5 cursor-pointer select-none"
      >
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
          About Me
        </span>
        <span
          className={`text-zinc-500 transition-transform duration-300 text-xs ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm space-y-4 text-sm leading-relaxed text-zinc-300">
          <p>
            I&apos;m 16, from Ukraine, finishing two high school degrees at the
            same time — one in Ukraine, and the other in Massachusetts. I moved to the US alone at 15.
          </p>
          <p>
            I started with making games in Unity, moved into self-taught programming, won multiple
            national olympiads, and eventually got deep into AI research — defending two papers at
            Ukraine&apos;s Junior Academy of Sciences. I also founded a competitive programming league
            running across Ukraine and the US, and built a business from scratch. Outside of tech, I
            spent years playing Go at the national team level, fence now, and make videos. Eventually
            I want to work at the intersection of technology and entrepreneurship. That&apos;s what
            I&apos;m building toward.
          </p>
        </div>
      </div>
    </section>
  );
}
