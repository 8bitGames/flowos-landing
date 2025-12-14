import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'FlowOS - AI-Powered Data Operating System | Business Automation',
    template: '%s | FlowOS',
  },
  description: 'FlowOS is Korea\'s leading AI-powered business automation platform. Discover, analyze, and connect your enterprise data with our End-to-End solution to boost productivity by 30% and reduce costs by 30%.',
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
    'AI agents',
    'data automation',
  ],
  authors: [{ name: 'FlowOS', url: 'https://flowos.work' }],
  creator: 'FlowOS',
  publisher: 'FlowOS',
  metadataBase: new URL('https://flowos.work'),
  applicationName: 'FlowOS',
  category: 'technology',
  classification: 'Business Software',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo/symbol.svg', type: 'image/svg+xml' },
      { url: '/logo/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'FlowOS - AI-Powered Business Automation & Data Operating System',
    description: 'Transform your business with AI-powered workflows. FlowOS helps you discover, analyze, and connect enterprise data to achieve 30% productivity increase and 30% cost reduction.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ko_KR'],
    url: 'https://flowos.work/en',
    siteName: 'FlowOS',
    images: [
      {
        url: 'https://flowos.work/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlowOS - AI-Powered Data Operating System | Where Data Meets AI',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@flowos_work',
    creator: '@flowos_work',
    title: 'FlowOS - AI-Powered Business Automation & Data Operating System',
    description: 'Transform your business with AI and data-driven workflows. End-to-end solutions for enterprise automation.',
    images: {
      url: 'https://flowos.work/og-image.png',
      alt: 'FlowOS - Where Data Meets AI',
    },
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
  other: {
    'msapplication-TileColor': '#426BF8',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
