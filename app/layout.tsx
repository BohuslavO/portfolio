import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Bohuslav Onyshchuk",
  description:
    "Builder, researcher, and founder from Ukraine. AI research, competitive programming, and entrepreneurship.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="text-white antialiased">{children}</body>
    </html>
  );
}
