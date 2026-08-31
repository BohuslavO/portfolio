const projects = [
  {
    title: "Global Programming League",
    description:
      "A free, student-led competitive programming league running weekly contests between students in Ukraine and the US. Three skill tracks, bilingual editorials, live leaderboard.",
    tags: ["Founded", "US & Ukraine", "Weekly contests"],
    status: "Active",
    link: null as string | null,
  },
  {
    title: "Algoverse AI Research",
    description:
      "AI research mentorship program working toward a NeurIPS submission. Building original research under mentor guidance, June–August 2026.",
    tags: ["AI Research", "NeurIPS Target", "Mentored"],
    status: "In Progress",
    link: null as string | null,
  },
  {
    title: "Clothing Business",
    description:
      "Self-funded reselling operation built from scratch — buying, flipping, and managing inventory. Learning entrepreneurship through real stakes.",
    tags: ["Entrepreneurship", "Self-funded"],
    status: "Active",
    link: null as string | null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
          Projects
        </p>
        <h2 className="mb-12 text-4xl font-bold">What I&apos;ve built</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50"
            >
              <div className="mb-4">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    project.status === "Active"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-purple-500/15 text-purple-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
