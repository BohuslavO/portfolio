import { SectionLabel } from "./Education";

const items = [
  { title: "Unity (C#)", detail: "3+ yrs · game dev" },
  { title: "Python", detail: "automation · AI · data" },
  { title: "Neural Network Projects", detail: "Kohonen · time series" },
  { title: "Crypto Trading Bot", detail: "Telegram · project lead" },
  { title: "JavaScript / HTML / CSS", detail: "web development" },
  { title: "Java & C#", detail: "academic projects" },
];

export default function TechExperience() {
  return (
    <>
      <section>
        <SectionLabel>Technical Experience</SectionLabel>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-lg border border-purple-500/25 bg-purple-500/8 px-3.5 py-2.5 transition-colors hover:border-purple-500/50 hover:bg-purple-500/15">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">{item.detail}</p>
                </div>
                {i < items.length - 1 && (
                  <span className="text-zinc-700 text-xs select-none">→</span>
                )}
              </div>
            ))}
          </div>
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
