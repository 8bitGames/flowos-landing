export interface Translations {
  nav: {
    feature: string;
    services: string;
    usecase: string;
    blog: string;
    contact: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    subtitleEn: string;
    description: string;
    rollingWords: string[];
    cta: string;
  };
  previewCards: {
    aiPowered: {
      title: string;
      description: string;
      features: string[];
    };
    productivity: {
      title: string;
      description: string;
      percentage: number;
    };
    cost: {
      title: string;
      description: string;
      percentage: number;
    };
    system: {
      title: string;
      description: string;
      benefits: string[];
    };
  };
  valueProposition: {
    quote: string;
    quoteHighlight: string;
    description: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      subtitle: string;
      description: string;
    }>;
    footer: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  targetCompanies: {
    title: string;
    subtitle1: string;
    subtitle2: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    title: string;
    description1: string;
    description2: string;
    formLabels: {
      name: string;
      email: string;
      company: string;
      phone: string;
      message: string;
      submit: string;
      submitting: string;
    };
    formPlaceholders: {
      name: string;
      email: string;
      company: string;
      phone: string;
      message: string;
    };
    messages: {
      success: string;
      error: string;
    };
    introDownload: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
  floatingButton: {
    text: string;
  };
}

export type Locale = 'ko' | 'en';
