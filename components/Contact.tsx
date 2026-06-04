import { SectionLabel } from "./Education";

export default function Contact() {
  return (
    <section id="contact" className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <SectionLabel>Contact</SectionLabel>
      <div className="space-y-4">
        <a href="mailto:bohuslav.onyshchuk@gmail.com" className="group flex items-center gap-4">
          <span className="w-20 text-xs text-zinc-600">Email</span>
          <span className="text-sm text-zinc-300 transition-colors group-hover:text-white">
            bohuslav.onyshchuk@gmail.com
          </span>
        </a>
        <a
          href="https://github.com/BohuslavO"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4"
        >
          <span className="w-20 text-xs text-zinc-600">GitHub</span>
          <span className="text-sm text-zinc-300 transition-colors group-hover:text-white">
            github.com/BohuslavO
          </span>
        </a>
        <div className="flex items-center gap-4">
          <span className="w-20 text-xs text-zinc-600">Phone</span>
          <span className="text-sm text-zinc-600">+1 (857) 576-9569</span>
        </div>
      </div>
    </section>
  );
}
