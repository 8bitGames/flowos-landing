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
  description: "FlowOS는 AI 기반의 데이터 운영 체제를 조직 안에 구축해주는 서비스입니다. 데이터를 검증하고 연결하여, 기업이 더 효율적으로 일할 수 있는 구조를 만듭니다.",
  icons: {
    icon: [
      { url: '/logo/symbol.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo/symbol.svg',
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
