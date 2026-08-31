"use client";

import { useState } from "react";
import { SectionLabel } from "./Education";

type WorkItem = {
  id: string;
  category: "research" | "project" | "certification";
  title: string;
  subtitle: string;
  year: string;
  description: string;
  tags: string[];
  status: "Active" | "In Progress" | "Defended" | "Completed";
  previewImage?: string;
  previewFile?: string;
  detailDescription?: string;
};

function isPDF(path: string) {
  return path.toLowerCase().endsWith(".pdf");
}

const workItems: WorkItem[] = [
  {
    id: "research-timeseries",
    category: "research",
    title: "Scientific Research: Forecasting the Behavior of Time Series Using Machine Learning Algorithms built from scratch",
    subtitle: "Ukrainian Junior Academy of Sciences",
    year: "October–May 2024",
    description:
      "Defended research paper on time series forecasting using ML algorithms built from scratch. 4th place at Ukraine's national Junior Academy of Sciences competition.",
    detailDescription:
      "Researched and developed original machine learning algorithms from scratch for forecasting time series behavior. Paper was written up, peer-reviewed, and defended at Ukraine's national Junior Academy of Sciences competition, placing 4th at the national level.",
    tags: ["Machine Learning", "Time Series", "National Level", "4th Place"],
    status: "Defended",
    previewImage: "/previews/research-poster-new.png",
    previewFile: "/previews/research-poster-en.pdf",
  },
  {
    id: "compjailbench",
    category: "research",
    title: "Scientific Research: CompJailBench — Benchmarking Distributed Jailbreaks in Multi-Agent LLM Systems",
    subtitle: "AI Research Mentorship Program",
    year: "Jun–Aug 2026",
    description:
      "Inspect-based benchmark evaluating distributed jailbreaks and the safety monitors meant to catch them across multi-agent LLM systems.",
    detailDescription:
      "Built COMPJAILBENCH, an Inspect-based benchmark for distributed jailbreaks in multi-agent LLM systems — where a harmful request is adversarially split into individually benign-looking subtasks, routed across agents, and recombined into an unsafe output. Benchmarked four MAS safety methods (local agent-level checks, activation probing, agentic oversight, and agent-to-agent interaction monitors) against four distinct attack surfaces to measure when local safety fails to imply global safety. Developed through a selective AI research mentorship program, working directly with a research mentor.",
    tags: ["AI Safety", "Multi-Agent Systems", "Mentored"],
    status: "In Progress",
    previewFile: "/previews/compjailbench.pdf",
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
    id: "research-cryptobot",
    category: "research",
    title: "Scientific Research: Automatic Crypto-Trading Telegram Bot",
    subtitle: "Ukrainian Junior Academy of Sciences",
    year: "October–May 2023",
    description:
      "Defended research paper on an automated crypto-trading bot with Telegram interface. 1st place at Ukraine's All-Ukrainian Junior Academy of Sciences competition.",
    detailDescription:
      "Researched and built an automated cryptocurrency trading system with a Telegram bot interface — covering strategy logic, real-time market data, and deployment. Research paper written up and defended at Ukraine's national Junior Academy of Sciences, placing 1st at the All-Ukrainian Competition.",
    tags: ["Python", "Crypto", "Automation", "1st Place"],
    status: "Defended",
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
  {
    id: "python-beginners",
    category: "certification",
    title: "Python Generation: Beginners",
    subtitle: "Stepik · Python Generation",
    year: "2022",
    description: "Completed with distinction. Final score 100%.",
    tags: ["Python", "100%", "With Distinction"],
    status: "Completed",
    previewImage: "/previews/python-cert-1.png",
  },
  {
    id: "python-advanced",
    category: "certification",
    title: "Python Generation: Advanced",
    subtitle: "Stepik · Python Generation",
    year: "2022",
    description: "Completed with distinction. Final score 92%.",
    tags: ["Python", "92%", "With Distinction"],
    status: "Completed",
    previewImage: "/previews/python-cert-2.png",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Active: "bg-emerald-500/15 text-emerald-400",
    "In Progress": "bg-cyan-500/15 text-cyan-400",
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

export default function WorkShowcase({ section = "all" }: { section?: "research" | "projects" | "all" }) {
  const [activeModal, setActiveModal] = useState<WorkItem | null>(null);

  const research = workItems.filter((w) => w.category === "research");
  const projects = workItems.filter((w) => w.category === "project");
  const certs = workItems.filter((w) => w.category === "certification");

  const Card = ({ item }: { item: WorkItem }) => (
    <div
      className={`relative cursor-pointer rounded-xl border bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-cyan-500/60 ${
        (item.previewImage || item.previewFile)
          ? "border-cyan-500/30"
          : "border-white/10"
      }`}
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
          <div className="flex-shrink-0 flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all hover:bg-cyan-500/25 hover:border-cyan-500/70">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Click to show
          </div>
        )}
      </div>

    </div>
  );

  return (
    <>
      {/* Research */}
      {(section === "all" || section === "research") && (
        <section id="research">
          <SectionLabel>Research & Academic Work</SectionLabel>
          <div className="space-y-3">
            {research.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {(section === "all" || section === "projects") && (
        <section id="projects">
          <SectionLabel>Projects</SectionLabel>
          <div className="space-y-3">
            {projects.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

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
