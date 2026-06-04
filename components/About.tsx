"use client";

import { useState } from "react";
import { SectionLabel } from "./Education";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about">
      <div
        className="flex items-center justify-between cursor-pointer select-none mb-5"
        onClick={() => setOpen((o) => !o)}
      >
        <SectionLabel>About</SectionLabel>
        <span
          className={`text-zinc-500 transition-transform duration-300 text-xs mb-5 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

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
