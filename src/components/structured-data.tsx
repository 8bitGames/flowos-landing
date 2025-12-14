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
      'FlowOS는 AI와 데이터를 기반으로 기업의 업무를 자동화하고 운영 체제를 구축해주는 서비스입니다. 기업 내 데이터를 발견·분석·연결하여 생산성을 극대화하고 비용을 절감하는 End-to-End 통합 솔루션을 제공합니다.',
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
      '기업 데이터의 잠재력을 깨워 생산성을 극대화하는 AI 솔루션. 평균 생산성 30% 향상, 비용 30% 절감을 실현합니다.',
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
        name: 'FlowOS는 구체적으로 어떤 서비스인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FlowOS는 AI와 데이터를 기반으로 기업의 업무를 자동화하고 운영 체제를 구축해주는 서비스입니다. 기업 내 데이터를 발견·분석·연결하여 생산성을 극대화하고 비용을 절감하는 End-to-End 통합 솔루션을 제공합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '특정 산업군에만 특화된 서비스인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '아닙니다. 데이터가 쌓이는 곳이라면 산업이나 기업 규모에 관계없이 FlowOS를 활용할 수 있습니다. 특히 데이터 기반의 효율화와 반복 업무 자동화가 필요한 모든 기업에 적합합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '도입 시 정량적으로 어떤 효과를 기대할 수 있나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '평균적으로 조직 생산성 30% 향상 및 운영 비용 30% 절감 효과를 기대할 수 있습니다. 또한, 데이터 기반의 빠르고 정확한 의사결정 체계 확립과 반복 업무 자동화를 통한 업무 효율화를 실현합니다.',
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
