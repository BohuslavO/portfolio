const education = [
  {
    school: "Star Academy Wellesley",
    location: "Wellesley, MA, USA",
    degree: "High School — 10th Grade",
    detail: "GPA: 4.75 weighted / 4.0 unweighted",
    year: "2025–2028",
  },
  {
    school: "Rivne Regional Scientific Lyceum",
    location: "Ukraine (online)",
    degree: "High School — 11th Grade",
    detail: "Specialization: Computer Science",
    year: "2022–2026",
  },
];

export default function Education() {
  return (
    <section>
      <SectionLabel>Education</SectionLabel>
      <div className="space-y-3">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">{edu.school}</h3>
                <p className="mt-0.5 text-sm text-zinc-400">
                  {edu.degree} · {edu.location}
                </p>
                <p className="mt-1 text-xs text-zinc-600">{edu.detail}</p>
              </div>
              <span className="flex-shrink-0 text-xs text-zinc-600">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
      {children}
    </p>
  );
}
