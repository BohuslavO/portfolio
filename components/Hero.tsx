export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-32">
        <p className="mb-5 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
          Portfolio
        </p>
        <h1 className="mb-6 bg-gradient-to-br from-white via-purple-100 to-cyan-300 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-8xl">
          Bohuslav
          <br />
          Onyshchuk
        </h1>
        <p className="mb-10 max-w-md text-xl text-zinc-400">
          {/* TODO: add your tagline here */}
          Builder. Researcher. Founder.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
