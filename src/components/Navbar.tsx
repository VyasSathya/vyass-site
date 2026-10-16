'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-[var(--bg-primary)]/80 backdrop-blur-sm">
      <div className="max-w-2xl flex items-center justify-between">
        <a href="#" className="font-bold">
          Vyas Sathya
        </a>
        <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#connect" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
