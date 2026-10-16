export default function Connect() {
  return (
    <section id="connect" className="py-16 px-6 border-t border-[var(--border)]">
      <div className="max-w-2xl">
        <h2 className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-6">
          Say Hi
        </h2>
        <p className="text-[var(--text-secondary)] text-lg mb-8">
          I reply to everything. Hit me up about comedy, code, or whatever weird thing you&apos;re building.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="mailto:hello@vyass.dev"
            className="text-white hover:underline"
          >
            Email
          </a>
          <a
            href="https://instagram.com/vyaslikekiosk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@vyaslikekiosk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://linkedin.com/in/vyas-sathya-a3433968"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
