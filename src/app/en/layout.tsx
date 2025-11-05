import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FlowOS - AI-Powered Data Operating System | Business Automation Solution',
  description: 'FlowOS is the leading AI-powered business automation and data operating system in Korea. Discover, analyze, and connect your enterprise data to boost productivity by 30% and reduce costs by 30% with our End-to-End solution.',
  keywords: [
    'FlowOS',
    'AI business automation',
    'data operating system',
    'workflow automation',
    'business efficiency',
    'AI-powered system',
    'data structuring',
    'process optimization',
    'enterprise productivity',
    'AI consulting',
    'data analysis',
    'business system development',
    'End-to-End solution',
    'AI workflow',
    'business automation',
    'enterprise AI',
    'workflow design',
    'data-driven',
  ],
  authors: [{ name: 'FlowOS', url: 'https://flowos.work' }],
  creator: 'FlowOS',
  publisher: 'FlowOS',
  metadataBase: new URL('https://flowos.work'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo/symbol.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo/symbol.svg',
    shortcut: '/logo/symbol.svg',
  },
  openGraph: {
    title: 'FlowOS - AI-Powered Business Automation & Data Operating System',
    description: 'Transform your business with AI-powered workflows. FlowOS helps you discover, analyze, and connect enterprise data to achieve 30% productivity increase and 30% cost reduction.',
    type: 'website',
    locale: 'en_US',
    url: 'https://flowos.work/en',
    siteName: 'FlowOS',
    images: [
      {
        url: 'https://flowos.work/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlowOS - AI-Powered Data Operating System',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowOS - AI-Powered Business Automation & Data Operating System',
    description: 'Transform your business with AI and data-driven workflows. End-to-end solutions for enterprise automation.',
    images: ['https://flowos.work/og-image.png'],
  },
  alternates: {
    canonical: 'https://flowos.work/en',
    languages: {
      'ko-KR': 'https://flowos.work',
      'en-US': 'https://flowos.work/en',
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
