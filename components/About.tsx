export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
          About
        </p>
        <h2 className="mb-12 text-4xl font-bold">Who I am</h2>
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-zinc-300">
          <p>
            I&apos;m Bohuslav Onyshchuk — 18, from Ukraine, finishing two high
            school degrees at the same time — one in my hometown online, and the
            other in the Boston Area. I moved to the US alone at 17.
          </p>
          <p>
            I started with making games in Unity, moved into self-taught
            programming, won multiple national olympiads, and eventually got deep
            into AI research — defending two papers at Ukraine&apos;s Junior
            Academy of Sciences. I also founded a competitive programming league
            running across Ukraine and the US, and built a business from scratch.
            Outside of tech, I spent years playing Go at the national team level,
            fence now, and make videos. Eventually I want to work at the
            intersection of technology and entrepreneurship. That&apos;s what
            I&apos;m building toward.
          </p>
        </div>
      </div>
    </section>
  );
}
