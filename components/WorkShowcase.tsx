"use client";

import { useState } from "react";
import { SectionLabel } from "./Education";

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
    previewImage: "/previews/research-poster.jpg", // drop a screenshot/thumbnail here
    previewFile: "/previews/research-paper.pdf",   // drop the actual PDF here
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
    subtitle: "Wellesley Public School × Ukrainian Science Lyceum",
    year: "2025–Present",
    description:
      "Founded and run a free competitive programming league between US and Ukrainian students. 100+ participants, 3 skill tracks, $0 participation fee.",
    detailDescription:
      "Founded GPL — a free, weekly competitive programming league connecting students at Wellesley and top Ukrainian science lyceums. Students compete across Novice, Intermediate, and Advanced tracks. Weekly 24-hour contests, bilingual solution editorials (English/Ukrainian), live leaderboard, monthly in-person review sessions. 100+ participants across 2 countries.",
    tags: ["Founded", "100+ participants", "US & Ukraine", "$0 fee"],
    status: "Active",
    previewImage: "/previews/gpl-one-pager.jpg", // drop a screenshot/thumbnail here
    previewFile: "/previews/gpl-one-pager.pdf",  // drop the PDF here
  },
  {
    id: "clothing",
    category: "project",
    title: "Clothing Business",
    subtitle: "Self-funded reselling operation",
    year: "2024–Present",
    description:
      "Built a profitable clothing reselling business from scratch. ~$500/month revenue. Managed sourcing, pricing, and sales independently.",
    tags: ["Entrepreneurship", "~$500/mo", "Self-funded"],
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const research = workItems.filter((w) => w.category === "research");
  const projects = workItems.filter((w) => w.category === "project");

  const Card = ({ item }: { item: WorkItem }) => (
    <div
      className="relative cursor-pointer rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
      onClick={() => setActiveModal(item)}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
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
        {item.previewImage && (
          <div className="flex-shrink-0 rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-600 transition-colors group-hover:text-purple-400">
            hover →
          </div>
        )}
      </div>

      {/* Hover preview — floats above the card */}
      {hoveredId === item.id && item.previewImage && (
        <div className="pointer-events-none absolute bottom-full left-0 z-50 mb-3 w-80 overflow-hidden rounded-xl border border-purple-500/30 bg-zinc-950 shadow-[0_0_40px_rgba(168,85,247,0.25)] ring-1 ring-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.previewImage}
            alt={`${item.title} preview`}
            className="w-full"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="border-t border-white/10 px-3 py-2">
            <p className="text-xs text-zinc-500">Click to open full view</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Research */}
      <section>
        <SectionLabel>Research & Academic Work</SectionLabel>
        <div className="space-y-3">
          {research.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-12">
        <SectionLabel>Projects</SectionLabel>
        <div className="space-y-3">
          {projects.map((item) => (
            <Card key={item.id} item={item} />
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
