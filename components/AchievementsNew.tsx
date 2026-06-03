import { SectionLabel } from "./Education";

const achievements = [
  {
    label: "National Champion in Go (2022)",
    detail: "Former Ukrainian National Go Team member",
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
    detail: "2026",
  },
  {
    label: "Member of the Ukrainian National Go Team",
    detail: "baduk (2022)",
  },
];

export default function AchievementsNew() {
  return (
    <section id="achievements">
      <SectionLabel>Leadership & Achievements</SectionLabel>
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <ul className="space-y-4">
          {achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400" />
              <div>
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-zinc-500">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
