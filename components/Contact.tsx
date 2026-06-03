const links = [
  {
    label: "Email",
    href: "mailto:your@email.com",
    display: "your@email.com", // TODO: replace with real email
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourhandle",
    display: "linkedin.com/in/yourhandle", // TODO: replace with real handle
  },
  {
    label: "GitHub",
    href: "https://github.com/BohuslavO",
    display: "github.com/BohuslavO",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/10 py-24 overflow-hidden">
      {/* Subtle background orb */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-medium tracking-widest text-transparent uppercase">
          Contact
        </p>
        <h2 className="mb-4 text-4xl font-bold">Get in touch</h2>
        <p className="mb-12 max-w-md text-zinc-400">
          Open to research collaborations, mentorship, and interesting
          conversations.
        </p>
        <div className="space-y-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-6"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span className="w-20 text-sm text-zinc-600">{link.label}</span>
              <span className="text-zinc-300 transition-all group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent">
                {link.display}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-5xl border-t border-white/10 px-6 pt-8">
        <p className="text-sm text-zinc-700">
          © {new Date().getFullYear()} Bohuslav Onyshchuk
        </p>
      </div>
    </section>
  );
}
