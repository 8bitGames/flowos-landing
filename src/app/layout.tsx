import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowOS - AI 기반 데이터 운영 체제 구축 서비스 | AI 업무 자동화 솔루션",
  description: "FlowOS는 한국에서 AI 기반 업무 자동화와 데이터 운영 체제를 제공하는 대표 솔루션입니다. 데이터 구조화부터 워크플로우 설계, 시스템 운영까지 End-to-End로 지원해 기업의 생산성을 높이고 비용을 절감합니다.",
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
        alt: 'FlowOS - AI 기반 데이터 운영 체제',
        type: 'image/png',
      },
    ],
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowOS | AI 기반 업무 자동화 및 데이터 운영 체제',
    description: 'FlowOS는 기업 데이터를 발견·분석·연결해 생산성을 높이고 비용을 줄이는 AI 기반 운영 체제입니다.',
    images: ['https://flowos.work/og-image.png'],
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
};

import { ThemeProvider } from '@/components/theme-provider';
import { DynamicFavicon } from '@/components/dynamic-favicon';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
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
