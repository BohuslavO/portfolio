"use client";

const languages = [
  { name: "Ukrainian", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Russian", level: "Fluent" },
  { name: "Chinese", level: "HSK4" },
  { name: "Spanish", level: "Pre-Intermediate" },
];

const interests = [
  "Artificial Intelligence",
  "Strategic Systems",
  "Algorithmic Problem Solving",
  "Entrepreneurship",
  "Financial Technologies & Quantitative Systems",
];

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:w-60 lg:flex-shrink-0 self-start pb-12">
      {/* Photo */}
      <div className="mb-5 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-0.5 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photo.jpg"
          alt="Bohuslav Onyshchuk"
          className="h-full w-full rounded-full object-cover"
          onError={(e) => {
            const el = e.currentTarget;
            el.style.display = "none";
            el.parentElement!.classList.add("flex", "items-center", "justify-center");
            el.parentElement!.innerHTML = '<span class="text-xl font-bold text-white">BO</span>';
          }}
        />
      </div>

      <h1 className="mb-0.5 text-lg font-bold text-white leading-tight">
        Bohuslav Onyshchuk
      </h1>
      <p className="mb-0.5 text-sm text-zinc-400">Computer Science & Artificial Intelligence</p>
      <p className="mb-8 text-xs text-zinc-600">Boston Area / Ukraine</p>

      {/* Contact */}
      <div className="mb-7">
        <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
          Contact
        </h3>
        <div className="space-y-2 text-sm">
          <a
            href="mailto:bohuslav.onyshchuk@gmail.com"
            className="block truncate text-zinc-400 transition-colors hover:text-white"
          >
            bohuslav.onyshchuk@gmail.com
          </a>
          <a
            href="https://github.com/BohuslavO"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-zinc-400 transition-colors hover:text-white"
          >
            github.com/BohuslavO
          </a>
          <p className="text-zinc-600">+1 (857) 576-9569</p>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-7">
        <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
          Languages
        </h3>
        <div className="space-y-2">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center justify-between">
              <span className="text-sm text-zinc-300">{lang.name}</span>
              <span className="text-xs text-zinc-600">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div>
        <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
          Interests
        </h3>
        <ul className="space-y-1.5">
          {interests.map((interest) => (
            <li key={interest} className="flex items-start gap-2 text-xs text-zinc-400">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-purple-500" />
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
