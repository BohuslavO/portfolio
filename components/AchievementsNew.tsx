import { SectionLabel } from "./Education";

const achievements = [
  {
    label: "National Champion in Go",
    detail: "Ukrainian National Team Member · Baduk / Weiqi",
    year: "2022",
    tags: ["Go / Baduk", "National Level"],
    primary: true,
  },
  {
    label: "All-Ukrainian Competition, Junior Academy of Sciences — 4th Place Nationally",
    detail: "Scientific Research: 2024–2025",
    year: "2025",
    tags: ["AI Research", "4th Nationally"],
    primary: true,
  },
  {
    label: "All-Ukrainian Competition, Junior Academy of Sciences — 2nd Place Regionally",
    detail: "Scientific Research: 2023–2024",
    year: "2024",
    tags: ["AI Research", "2nd Regionally"],
    primary: true,
  },
  {
    label: "Competitive Programming Olympiads",
    detail: "Multiple regional & national-level placements (2022–2025)",
    year: "2022–2025",
    tags: ["Algorithms", "National Level"],
    primary: false,
  },
  {
    label: "Basketball Team Captain",
    detail: "2nd Place — National Championship (2024)",
    year: "2024",
    tags: ["Captain", "2nd Place"],
    primary: false,
  },
  {
    label: "Varsity Fencing Team — Massachusetts State Championship",
    detail: "2025–2026",
    year: "2025–2026",
    tags: ["Fencing", "State Level"],
    primary: false,
  },
];

export default function AchievementsNew() {
  return (
    <section id="achievements">
      <SectionLabel>Leadership & Achievements</SectionLabel>
      <div className="grid grid-cols-2 gap-3">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all cursor-default hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="font-semibold text-white text-sm leading-snug">{item.label}</p>
              <span className="shrink-0 text-xs text-zinc-600 mt-0.5">{item.year}</span>
            </div>
            <p className="text-xs text-zinc-500 mb-3">{item.detail}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-500">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
