import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Md. Tauhidul Islam Tuhin | Digital Marketing Specialist & Operations Manager',
  description:
    'Official portfolio of Md. Tauhidul Islam Tuhin — Operations Manager & Performance Marketing Specialist with 6+ years experience in Google Ads, Meta Ads, Server-Side Tracking, GTM, and GA4 attribution.',
  keywords: [
    'Md. Tauhidul Islam Tuhin',
    'Performance Marketing',
    'Google Ads Specialist',
    'Meta Ads Expert',
    'Server-Side Tracking',
    'Google Tag Manager',
    'Meta CAPI',
    'Operations Manager',
    'Digital Marketing Dhaka'
  ],
  authors: [{ name: 'Md. Tauhidul Islam Tuhin' }],
  openGraph: {
    title: 'Md. Tauhidul Islam Tuhin | Performance Marketing & Tracking Specialist',
    description:
      'Scale your business through high-ROI Google Ads, Meta Ads, and enterprise Server-Side Tracking Architecture.',
    type: 'website',
    locale: 'en_US'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-blue-600/30 selection:text-white font-sans bg-[#030712] text-white">
        {children}
      </body>
    </html>
  );
}
