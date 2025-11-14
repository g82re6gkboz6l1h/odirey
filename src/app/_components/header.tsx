import Link from "next/link";

const navLinks = [
  { href: "#signals", label: "Signals" },
  { href: "#systems", label: "Systems" },
  { href: "#deep-dive", label: "Field Notes" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight-950/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-nebula-500/80 to-pulse-500/70 text-base font-display uppercase">
            od
          </span>
          <div className="leading-tight">
            <p className="font-display text-base">odirey</p>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
              systems atelier
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/60 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden text-[0.65rem] uppercase tracking-[0.35em] text-white/40 md:inline-flex">
          Studio mode
        </div>
      </div>
    </header>
  );
};

export default Header;
