import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Education from "@/components/Education";
import WorkShowcase from "@/components/WorkShowcase";
import AchievementsNew from "@/components/AchievementsNew";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <Sidebar />
          <div className="flex-1 min-w-0 space-y-14">
            <About />
            <Education />
            <WorkShowcase />
            <AchievementsNew />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
