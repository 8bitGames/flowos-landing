export function OrganizationStructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FlowOS',
    alternateName: ['FlowOS AI', '플로우오에스'],
    url: 'https://flowos.work',
    logo: 'https://flowos.work/logo/symbol.svg',
    image: 'https://flowos.work/og-image.png',
    description:
      'FlowOS는 AI 기반 업무 자동화 및 데이터 운영 체제를 제공하는 기업입니다. 데이터 구조화부터 워크플로우 설계, 시스템 운영까지 End-to-End로 지원합니다.',
    foundingDate: '2024',
    slogan: 'Where Data Meets AI',
    knowsAbout: [
      'AI 업무 자동화',
      '데이터 운영 체제',
      '워크플로우 자동화',
      'AI 에이전트',
      '기업 데이터 분석',
    ],
    sameAs: [
      'https://www.linkedin.com/company/flowos',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Korean', 'English'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Korea',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export function WebsiteStructuredData() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FlowOS',
    alternateName: 'FlowOS - AI Data Operating System',
    url: 'https://flowos.work',
    description:
      'AI 기반 업무 자동화 및 데이터 운영 체제. 생산성 30% 향상, 비용 30% 절감을 실현하는 End-to-End 솔루션.',
    inLanguage: ['ko-KR', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://flowos.work/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

export function SoftwareApplicationStructuredData() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FlowOS',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Workflow Automation',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
      description: '무료 상담 및 데모 제공',
    },
    featureList: [
      '데이터 구조화 및 분석',
      '워크플로우 자동화',
      'AI 기반 프로세스 최적화',
      'End-to-End 업무 자동화',
      '실시간 데이터 모니터링',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
    />
  );
}

export function FAQStructuredData() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'FlowOS는 무엇인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FlowOS는 AI 기반 데이터 운영 체제로, 기업의 데이터를 발견, 분석, 연결하여 업무 자동화를 실현하는 End-to-End 솔루션입니다. 생산성 30% 향상과 비용 30% 절감을 달성할 수 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: 'FlowOS는 어떤 기업에 적합한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FlowOS는 데이터 기반 의사결정과 업무 자동화가 필요한 모든 기업에 적합합니다. 특히 반복적인 업무 처리, 데이터 분석, 워크플로우 최적화가 필요한 기업에서 큰 효과를 볼 수 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: 'FlowOS 도입 시 어떤 효과를 기대할 수 있나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FlowOS를 도입하면 생산성 30% 향상, 운영 비용 30% 절감, 의사결정 속도 향상, 데이터 기반 인사이트 확보 등의 효과를 기대할 수 있습니다.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export function StructuredData() {
  return (
    <>
      <OrganizationStructuredData />
      <WebsiteStructuredData />
      <SoftwareApplicationStructuredData />
      <FAQStructuredData />
    </>
  );
}
