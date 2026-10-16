export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Vyas Sathya
        </h1>
        <p className="text-xl sm:text-2xl text-[var(--text-secondary)] mb-4 leading-relaxed">
          I write code and I write jokes.
          <br />
          <span className="text-[var(--text-muted)]">Sometimes at the same time.</span>
        </p>
        <p className="text-[var(--text-muted)] mb-8 max-w-lg">
          8 years doing stand-up. Built apps with millions of users.
          Currently shipping <a href="https://fyt.team" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Fyt</a> and telling jokes around the Bay Area.
        </p>
      </div>
    </section>
  );
}
