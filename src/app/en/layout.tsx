import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FlowOS - AI-Powered Business Operating System',
  description: 'Transform your business with AI and data-driven workflows. FlowOS provides end-to-end solutions for business automation, data structuring, and workflow optimization.',
  keywords: ['AI', 'Business Automation', 'Data-Driven', 'Workflow', 'Operating System', 'Enterprise Solutions'],
  authors: [{ name: 'FlowOS' }],
  openGraph: {
    title: 'FlowOS - AI-Powered Business Operating System',
    description: 'Transform your business with AI and data-driven workflows',
    type: 'website',
    locale: 'en_US',
    url: 'https://flowos.work/en',
    siteName: 'FlowOS',
  },
  alternates: {
    canonical: 'https://flowos.work/en',
    languages: {
      'ko': 'https://flowos.work',
      'en': 'https://flowos.work/en',
    },
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
