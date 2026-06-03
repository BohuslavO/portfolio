import { SectionLabel } from "./Education";

const items = [
  { title: "Unity (C#)", detail: "3+ years — game development, starting age 11" },
  { title: "Python", detail: "Self-taught — automation, data analysis, AI model development" },
  { title: "AI Projects", detail: "Kohonen neural network, time series forecasting — published" },
  { title: "Crypto Trading Bot", detail: "Telegram bot — project lead (2024)" },
  { title: "JavaScript / HTML / CSS", detail: "Web development" },
  { title: "Java & C#", detail: "Academic and personal projects" },
];

export default function TechExperience() {
  return (
    <>
      <section>
        <SectionLabel>Technical Experience</SectionLabel>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400" />
              <div>
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-xs text-zinc-500">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact anchor — targeted by navbar */}
      <section id="contact" className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <SectionLabel>Contact</SectionLabel>
        <div className="space-y-4">
          <a href="mailto:bohuslav.onyshchuk@gmail.com" className="group flex items-center gap-4">
            <span className="w-20 text-xs text-zinc-600">Email</span>
            <span className="text-sm text-zinc-300 transition-colors group-hover:text-white">bohuslav.onyshchuk@gmail.com</span>
          </a>
          <a href="https://github.com/BohuslavO" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
            <span className="w-20 text-xs text-zinc-600">GitHub</span>
            <span className="text-sm text-zinc-300 transition-colors group-hover:text-white">github.com/BohuslavO</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="w-20 text-xs text-zinc-600">Phone</span>
            <span className="text-sm text-zinc-600">+1 (857) 576-9569</span>
          </div>
        </div>
      </section>
    </>
  );
}
