import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'FlowOS - AI 기반 데이터 운영 체제 | 업무 자동화 솔루션',
    template: '%s | FlowOS',
  },
  description: 'FlowOS는 한국 최고의 AI 기반 업무 자동화 및 데이터 운영 체제입니다. 데이터 구조화, 워크플로우 설계, 시스템 운영을 End-to-End로 지원해 생산성 30% 향상, 비용 30% 절감을 실현합니다.',
  keywords: [
    'FlowOS',
    'AI 업무 자동화',
    '데이터 운영 체제',
    '워크플로우 자동화',
    '업무 효율화',
    'AI 기반 시스템',
    '데이터 구조화',
    '프로세스 최적화',
    '기업 생산성',
    'AI 컨설팅',
    '데이터 분석',
    '업무 시스템 개발',
    'End-to-End 솔루션',
    'AI 워크플로우',
    '비즈니스 자동화',
    'AI 에이전트',
    '데이터 자동화',
    '기업 AI 도입',
  ],
  authors: [{ name: 'FlowOS', url: 'https://flowos.work' }],
  creator: 'FlowOS',
  publisher: 'FlowOS',
  metadataBase: new URL('https://flowos.work'),
  applicationName: 'FlowOS',
  category: 'technology',
  classification: 'Business Software',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    type: 'website',
    url: 'https://flowos.work/',
    siteName: 'FlowOS',
    title: 'FlowOS | AI 기반 업무 자동화 및 데이터 운영 체제',
    description: 'FlowOS는 기업 데이터를 발견·분석·연결해 생산성 30% 향상, 비용 30% 절감을 실현하는 AI 기반 운영 체제입니다. 지금 당신의 조직 워크플로우를 혁신하세요.',
    images: [
      {
        url: 'https://flowos.work/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlowOS - AI 기반 데이터 운영 체제 | Where Data Meets AI',
        type: 'image/png',
      },
    ],
    locale: 'ko_KR',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@flowos_work',
    creator: '@flowos_work',
    title: 'FlowOS | AI 기반 업무 자동화 및 데이터 운영 체제',
    description: 'FlowOS는 기업 데이터를 발견·분석·연결해 생산성을 높이고 비용을 줄이는 AI 기반 운영 체제입니다.',
    images: {
      url: 'https://flowos.work/og-image.png',
      alt: 'FlowOS - Where Data Meets AI',
    },
  },
  alternates: {
    canonical: 'https://flowos.work',
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

import { ThemeProvider } from '@/components/theme-provider';
import { DynamicFavicon } from '@/components/dynamic-favicon';
import { StructuredData } from '@/components/structured-data';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${notoSansKR.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <DynamicFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
