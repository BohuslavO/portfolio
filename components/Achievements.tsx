const achievements = [
  {
    icon: "🏆",
    title: "National Go Champion",
    description: "2022 Ukrainian national champion — former Ukrainian National Go Team member",
  },
  {
    icon: "🌐",
    title: "5 Languages",
    description: "Ukrainian · English · Russian · Chinese (HSK4) · Spanish",
  },
  {
    icon: "🎓",
    title: "4.75 Weighted GPA",
    description: "Dual schooling across Ukraine and the US simultaneously",
  },
  {
    icon: "🧪",
    title: "2 Defended Research Papers",
    description: "Junior Academy of Sciences, national level",
  },
  {
    icon: "💻",
    title: "Programming Olympiads",
    description: "Multiple national-level wins in competitive programming",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
          Achievements
        </p>
        <h2 className="mb-12 text-4xl font-bold">Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]"
            >
              <div className="mb-3 text-2xl">{item.icon}</div>
              <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
