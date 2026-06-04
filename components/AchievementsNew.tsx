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
      <div className="grid grid-cols-3 gap-3">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-purple-500/20 bg-purple-500/8 p-4 backdrop-blur-sm transition-colors hover:border-purple-500/40 hover:bg-purple-500/12"
          >
            <p className="text-sm font-medium text-white">{item.label}</p>
            <p className="text-[10px] text-zinc-500 mt-1">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
