"use client";

import { useState } from "react";
import { SectionLabel } from "./Education";
import { SpoilerSection } from "./SpoilerSection";

type WorkItem = {
  id: string;
  category: "research" | "project";
  title: string;
  subtitle: string;
  year: string;
  description: string;
  tags: string[];
  status: "Active" | "In Progress" | "Defended" | "Completed";
  previewImage?: string; // image file (.jpg/.png) for hover thumbnail
  previewFile?: string;  // PDF or doc file for full modal embed (.pdf)
  detailDescription?: string;
};

function isPDF(path: string) {
  return path.toLowerCase().endsWith(".pdf");
}

const workItems: WorkItem[] = [
  {
    id: "jas-papers",
    category: "research",
    title: "AI Research Papers (×2)",
    subtitle: "Ukrainian Junior Academy of Sciences",
    year: "2024–2025",
    description:
      "Two defended research papers in AI, presented at Ukraine's national Junior Academy of Sciences competitions.",
    detailDescription:
      "Authored and defended two research papers in artificial intelligence at Ukraine's national Junior Academy of Sciences. Papers went through peer review and national competition. Topics covered AI-based modeling and prediction systems. Both papers were defended at the national level — one of which placed 1st in the All-Ukrainian Competition of the Junior Academy of Sciences.",
    tags: ["Artificial Intelligence", "National Level", "1st Place"],
    status: "Defended",
    previewImage: "/previews/research-poster-new.png",
    previewFile: "/previews/research-poster-en.pdf",
  },
  {
    id: "algoverse",
    category: "research",
    title: "Algoverse AI Research",
    subtitle: "Algoverse AI Research Program",
    year: "Jun–Aug 2026",
    description:
      "Selective AI research mentorship program. Building original research under expert guidance, targeting NeurIPS submission.",
    detailDescription:
      "Enrolled in Algoverse's selective AI research mentorship program, working directly with a research mentor to develop an original AI paper. Target conference: NeurIPS — one of the top AI venues globally. Program runs June 7–August 30, 2026. Chosen from a competitive applicant pool. Financial aid negotiated.",
    tags: ["AI Research", "NeurIPS Target", "Mentored", "Selective"],
    status: "In Progress",
  },
  {
    id: "gpl",
    category: "project",
    title: "Global Programming League",
    subtitle: "Ukrainian Scientific Lyceum × USA Public Schools",
    year: "2025–Present",
    description:
      "Founded and run a free competitive programming league between US and Ukrainian students. 100+ participants across 2 countries.",
    detailDescription:
      "Founded GPL — a free, weekly competitive programming league connecting students across USA and top Ukrainian science lyceums. Weekly 24-hour contests, bilingual solution editorials (English/Ukrainian), live leaderboard, monthly in-person review sessions. 100+ participants across 2 countries.",
    tags: ["Founded", "100+ participants", "US & Ukraine"],
    status: "Active",
    previewImage: "/previews/GPL_OnePager_Wellesley.png",
  },
  {
    id: "crypto-bot",
    category: "project",
    title: "Crypto Trading Bot",
    subtitle: "Automated trading via Telegram",
    year: "2024",
    description:
      "Built an automated cryptocurrency trading bot with a Telegram interface. Led the project end-to-end — architecture, trading logic, and deployment.",
    detailDescription:
      "Designed and built an automated crypto trading bot controllable via Telegram. Handled strategy logic, real-time market data processing, and bot deployment. Led the project from idea to working product.",
    tags: ["Python", "Crypto", "Automation", "Project Lead"],
    status: "Completed",
    previewFile: "/previews/crypto-bot-presentation.pdf",
  },
  {
    id: "clothing",
    category: "project",
    title: "Founder — Clothing Business & Team",
    subtitle: "Self-funded operation",
    year: "2024–Present",
    description:
      "Founded and scaled a profitable clothing business with a team. Monthly revenue equivalent to the average monthly salary in Ukraine. Managed sourcing, pricing, team, and sales independently.",
    tags: ["Entrepreneurship", "Team", "Self-funded"],
    status: "Active",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Active: "bg-emerald-500/15 text-emerald-400",
    "In Progress": "bg-purple-500/15 text-purple-400",
    Completed: "bg-blue-500/15 text-blue-400",
    Defended: "bg-emerald-500/15 text-emerald-400",
  };
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
        colors[status] ?? "bg-zinc-500/15 text-zinc-400"
      }`}
    >
      {status}
    </span>
  );
}

export default function WorkShowcase() {
  const [activeModal, setActiveModal] = useState<WorkItem | null>(null);

  const research = workItems.filter((w) => w.category === "research");
  const projects = workItems.filter((w) => w.category === "project");

  const Card = ({ item }: { item: WorkItem }) => (
    <div
      className="relative cursor-pointer rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
      onClick={() => setActiveModal(item)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-white">{item.title}</h3>
            <StatusBadge status={item.status} />
          </div>
          <p className="mb-2 text-xs text-zinc-500">
            {item.subtitle} · {item.year}
          </p>
          <p className="mb-3 text-sm leading-relaxed text-zinc-400">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {(item.previewImage || item.previewFile) && (
          <div className="flex-shrink-0 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-zinc-500 transition-colors hover:text-purple-400">
            Press to preview
          </div>
        )}
      </div>

    </div>
  );

  return (
    <>
      {/* Research */}
      <section id="research">
        <SectionLabel>Research & Academic Work</SectionLabel>
        <div className="space-y-3">
          {research.map((item) => (
            <SpoilerSection key={item.id}>
              <Card item={item} />
            </SpoilerSection>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12">
        <SectionLabel>Projects</SectionLabel>
        <div className="space-y-3">
          {projects.map((item) => (
            <SpoilerSection key={item.id}>
              <Card item={item} />
            </SpoilerSection>
          ))}
        </div>
      </section>

      {/* Modal overlay */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-zinc-400 transition-colors hover:bg-white/20 hover:text-white"
              onClick={() => setActiveModal(null)}
            >
              ✕
            </button>

            {/* Preview — PDF iframe or image */}
            {activeModal.previewFile && isPDF(activeModal.previewFile) ? (
              <div className="overflow-hidden rounded-t-2xl border-b border-white/10">
                <iframe
                  src={activeModal.previewFile}
                  className="h-[60vh] w-full"
                  title={activeModal.title}
                />
              </div>
            ) : activeModal.previewImage ? (
              <div className="overflow-hidden rounded-t-2xl border-b border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeModal.previewImage}
                  alt={activeModal.title}
                  className="w-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.style.display = "none";
                  }}
                />
              </div>
            ) : null}

            {/* Content */}
            <div className="p-8">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-white">
                  {activeModal.title}
                </h2>
                <StatusBadge status={activeModal.status} />
              </div>
              <p className="mb-5 text-sm text-zinc-500">
                {activeModal.subtitle} · {activeModal.year}
              </p>
              <p className="mb-6 leading-relaxed text-zinc-300">
                {activeModal.detailDescription ?? activeModal.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeModal.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/10 px-3 py-1 text-sm text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
