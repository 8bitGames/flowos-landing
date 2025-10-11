import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowOS - AI 기반 데이터 운영 체제 구축 서비스",
  description: "FlowOS는 한국에서 AI 기반 업무 자동화와 데이터 운영 체제를 제공하는 대표 솔루션입니다. 데이터 구조화부터 워크플로우 설계, 시스템 운영까지 End-to-End로 지원해 기업의 생산성을 높이고 비용을 절감합니다.",
  icons: {
    icon: [
      { url: '/logo/symbol.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo/symbol.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.flowos.work/',
    siteName: 'FlowOS',
    title: 'FlowOS | AI 기반 업무 자동화 및 데이터 운영 체제',
    description: 'FlowOS는 기업 데이터를 발견·분석·연결해 생산성을 높이고 비용을 줄이는 AI 기반 운영 체제입니다. 지금 당신의 조직 워크플로우를 혁신하세요.',
    images: [
      {
        url: 'https://www.flowos.work/og-image.jpg',
        alt: 'FlowOS - AI 기반 데이터 운영 체제',
      },
    ],
    locale: 'ko_KR',
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
