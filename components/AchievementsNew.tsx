import { SectionLabel } from "./Education";

const achievements = [
  {
    label: "National Champion in Go (2022)",
    detail: "Ukrainian National Team · Baduk / Weiqi",
  },
  {
    label: "1st Place — All-Ukrainian Competition, Junior Academy of Sciences",
    detail: "AI research track — national level",
  },
  {
    label: "4th Place — National Competition of Junior Academy of Sciences",
    detail: "Time series prediction using Kohonen neural network",
  },
  {
    label: "Competitive Programming Olympiads",
    detail: "Multiple national-level placements",
  },
  {
    label: "Basketball Team Captain",
    detail: "2nd Place — National Championship (2024)",
  },
  {
    label: "Varsity Fencing Team — Massachusetts State Championship",
    detail: "2025–2026",
  },
];

export default function AchievementsNew() {
  return (
    <section id="achievements">
      <SectionLabel>Leadership & Achievements</SectionLabel>
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        {achievements.map((item, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 px-5 py-4 transition-all duration-150 cursor-default hover:scale-[1.015] hover:bg-white/5 ${
              i > 0 ? "border-t border-white/5" : ""
            }`}
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400" />
            <div>
              <p className="text-sm font-medium text-white">{item.label}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
