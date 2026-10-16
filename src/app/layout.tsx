import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vyass.dev'),
  title: 'Vyas Sathya - Developer, Comedian, Maker',
  description:
    'I make things that move and make people laugh. Developer, stand-up comic, and creative technologist.',
  keywords: [
    'developer',
    'comedian',
    'creative technologist',
    'react native',
    'NFT developer',
    'indie hacker',
  ],
  authors: [{ name: 'Vyas Sathya' }],
  openGraph: {
    title: 'Vyas Sathya - Developer, Comedian, Maker',
    description:
      'I make things that move and make people laugh. Developer, stand-up comic, and creative technologist.',
    url: 'https://vyass.dev',
    siteName: 'Vyas Sathya',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vyas Sathya',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyas Sathya',
    description:
      'I make things that move and make people laugh. Developer, stand-up comic, and creative technologist.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
