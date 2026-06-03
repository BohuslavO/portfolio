import { SectionLabel } from "./Education";

export default function About() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm space-y-4 text-sm leading-relaxed text-zinc-300">
        <p>
          I&apos;m Bohuslav Onyshchuk — 18, from Ukraine, finishing two high school degrees at the
          same time — one in Ukraine, and the other in Massachusetts. I moved to the US alone at 17.
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
    </section>
  );
}
