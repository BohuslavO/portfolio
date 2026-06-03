const links = ["About", "Projects", "Research", "Achievements", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050510]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-bold tracking-tight text-transparent"
        >
          Bohuslav Onyshchuk
        </a>
        <ul className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
