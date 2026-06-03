import { SectionLabel } from "./Education";

const items = [
  { text: "3+ years in Unity (C#) — game development, starting age 11" },
  { text: "Self-taught Python — automation, data analysis, AI model development" },
  { text: "Developed and published AI-based projects (Kohonen neural network, time series forecasting)" },
  { text: "Founder of Global Programming League — algorithmic contest infrastructure across 2 countries" },
  { text: "Founder of profitable clothing business with research paper published (2024–2026)" },
  { text: "Automatic Crypto Trading Telegram bot — project lead (2024)" },
  { text: "JavaScript, HTML, CSS — web development" },
  { text: "Java and C# — academic and personal projects" },
];

export default function TechExperience() {
  return (
    <>
      <section>
        <SectionLabel>Technical Experience</SectionLabel>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500/70" />
                {item.text}
              </li>
            ))}
          </ul>
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
