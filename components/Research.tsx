const papers = [
  {
    title: "AI Research Papers (×2)",
    institution: "Ukrainian Junior Academy of Sciences",
    year: "2024–2025",
    description:
      "Two defended research papers in AI presented at Ukraine's national Junior Academy of Sciences competitions.",
    status: "Defended",
  },
  {
    title: "Algoverse Research Project",
    institution: "Algoverse AI Research Program",
    year: "2026",
    description:
      "Original AI research developed through the Algoverse mentorship program, targeting submission to NeurIPS.",
    status: "In Progress",
  },
];

export default function Research() {
  return (
    <section id="research" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
          Research
        </p>
        <h2 className="mb-12 text-4xl font-bold">Papers & work</h2>
        <div className="space-y-4">
          {papers.map((paper) => (
            <div
              key={paper.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {paper.title}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    paper.status === "Defended"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-purple-500/15 text-purple-400"
                  }`}
                >
                  {paper.status}
                </span>
              </div>
              <p className="mb-3 text-sm text-zinc-500">
                {paper.institution} · {paper.year}
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                {paper.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
