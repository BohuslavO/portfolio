"use client";

import { useState } from "react";
import { SectionLabel } from "./Education";

const certs = [
  {
    id: "python-beginners",
    title: "Python Generation: Beginners",
    subtitle: "Stepik · Python Generation",
    year: "2022",
    description: "Completed with distinction. Final score 100%.",
    tags: ["Python", "100%", "With Distinction"],
    previewImage: "/previews/python-cert-1.png",
  },
  {
    id: "python-advanced",
    title: "Python Generation: Advanced",
    subtitle: "Stepik · Python Generation",
    year: "2022",
    description: "Completed with distinction. Final score 92%.",
    tags: ["Python", "92%", "With Distinction"],
    previewImage: "/previews/python-cert-2.png",
  },
];

export default function Certifications() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="certifications">
      <SectionLabel>Certifications</SectionLabel>
      <div className="grid grid-cols-2 gap-3">
        {certs.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setActiveImage(cert.previewImage)}
            className="relative cursor-pointer rounded-xl border border-cyan-500/30 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-cyan-500/60"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-white">{cert.title}</h3>
                  <span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                    Completed
                  </span>
                </div>
                <p className="mb-2 text-xs text-zinc-500">
                  {cert.subtitle} · {cert.year}
                </p>
                <p className="mb-3 text-sm leading-relaxed text-zinc-400">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all hover:bg-cyan-500/25 hover:border-cyan-500/70">
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Click to show
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-zinc-400 transition-colors hover:bg-white/20 hover:text-white"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage}
              alt="Certificate"
              className="w-full"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.style.display =
                  "none";
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
