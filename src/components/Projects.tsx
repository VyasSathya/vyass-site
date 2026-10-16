'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Projects() {
  return (
    <section id="work" className="py-16 px-6">
      <div className="max-w-2xl">
        {/* Comedy */}
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-6">
            On Stage
          </h2>
          <div className="rounded-lg overflow-hidden mb-4">
            <LiteYouTubeEmbed
              id="o2yYGrDhbDE"
              title="Stand-up clip"
              poster="maxresdefault"
              webp
            />
          </div>
          <p className="text-[var(--text-secondary)]">
            West Side Comedy, Grisly Pear, Hilarities, and clubs I can&apos;t remember because comedy has destroyed my memory.
          </p>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-6">
            Things I&apos;ve Built
          </h2>

          <div className="space-y-6">
            <a
              href="https://fyt.team"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-lg font-medium group-hover:text-white transition-colors">
                  Fyt
                </h3>
                <span className="text-sm text-[var(--text-muted)]">2025</span>
              </div>
              <p className="text-[var(--text-secondary)]">
                Fantasy sports meets fitness. Compete with friends using real workout data.
              </p>
            </a>

            <div className="block">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-lg font-medium">EverythingStudio</h3>
                <span className="text-sm text-[var(--text-muted)]">2024</span>
              </div>
              <p className="text-[var(--text-secondary)]">
                AI creative workspace. Generate images, audio, and other weird stuff.
              </p>
            </div>

            <a
              href="https://opensea.io/collection/the-flower-girls"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-lg font-medium group-hover:text-white transition-colors">
                  Flower Girls NFT
                </h3>
                <span className="text-sm text-[var(--text-muted)]">2022</span>
              </div>
              <p className="text-[var(--text-secondary)]">
                Lead dev for 10K collection. Gwyneth Paltrow, Eva Longoria, and Gary Vee are holders. Dolphin Entertainment signed for TV and merch.
              </p>
            </a>

            <div className="block">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-lg font-medium">Vibe Template</h3>
                <span className="text-sm text-[var(--text-muted)]">2024</span>
              </div>
              <p className="text-[var(--text-secondary)]">
                Production-ready Expo template. Auth, theming, 20+ components. Ship apps without losing your mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
