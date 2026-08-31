"use client";

import { useState } from "react";
import { SectionLabel } from "./Education";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about">
      <div className="rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm overflow-hidden transition-all hover:border-cyan-500/50">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 cursor-pointer select-none"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
            About Me
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 p-6 space-y-4 text-sm leading-relaxed text-zinc-300">
            <p>
              Hello, I&apos;m 16, from Ukraine. I moved to the US alone at 15 as an international
              student &amp; Ukrainian refugee. Here I attend 10th grade at Star Academy of Boston
              and finishing my Ukrainian school diploma online at the same time.
            </p>
            <p>
              I started with making games in Unity, moved into self-taught programming, won multiple
              national olympiads, and eventually got deep into AI research — defending two papers at
              Ukraine&apos;s Junior Academy of Sciences. I also founded a competitive programming league
              running across Ukraine and the US, and built a business from scratch. Outside of tech, I
              spent years playing Go at the national team level, fence now, and make videos. Eventually
              I want to work at the intersection of technology and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
