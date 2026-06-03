const links = [
  { label: "Education", id: "education" },
  { label: "Research", id: "research" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050510]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-base font-bold tracking-tight text-transparent"
        >
          Bohuslav Onyshchuk — Portfolio
        </a>
        <ul className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
