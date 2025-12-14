'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import ThemeToggle from '@/components/ui/theme-toggle';
import { FlipWords } from '@/components/ui/flip-words';
import { Spotlight } from '@/components/ui/spotlight';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { CountingNumber } from '@/components/ui/counting-number';
import { ContactForm } from '@/components/ui/contact-form';
import { FAQItem } from '@/components/ui/faq-item';
import { TeamSection } from '@/components/ui/team-section';
import {
  Sparkles,
  Zap,
  Lightbulb,
  Database,
  Workflow,
  Code,
  ArrowRight,
  Menu,
  X,
  TrendingUp,
  DollarSign,
  ChevronRight,
} from 'lucide-react';
import { Locale, Translations } from '@/locales/types';

interface HomePageProps {
  locale: Locale;
  translations: Translations;
}

export function HomePage({ locale, translations: t }: HomePageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo/logo-05-optimized.svg"
              alt="FlowOS Logo"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto dark:hidden"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
            <Image
              src="/logo/logo-06-optimized.svg"
              alt="FlowOS Logo"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto hidden dark:block"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors">{t.nav.feature}</a>
            <a href="#process" className="text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors">{t.nav.services}</a>
            <a href="#faq" className="text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors">{t.nav.usecase}</a>
            <a href="#contact" className="text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-slate-300" />
              )}
            </button>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <HoverBorderGradient
                as="a"
                href="#contact"
                containerClassName="rounded-full"
                className="text-sm px-6 py-2"
              >
                {t.nav.contact}
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden bg-white dark:bg-slate-950" style={{ top: '73px' }}>
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col min-h-full px-6 py-8">
              <nav className="flex flex-col gap-1 mb-8">
                {[
                  { href: '#features', label: t.nav.feature },
                  { href: '#process', label: t.nav.services },
                  { href: '#faq', label: t.nav.usecase },
                  { href: '#contact', label: t.nav.contact },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-4 border-b border-gray-200 dark:border-slate-800"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-center justify-between py-3">
                  <span className="text-lg font-medium text-gray-700 dark:text-slate-300">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
              <div className="mt-auto pt-6">
                <CTAButton size="lg" href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.contact}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Spotlight */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 antialiased pt-20">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#00268B"
        />
        <Spotlight
          className="top-10 left-full -translate-x-1/2"
          fill="#0099CC"
        />

        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#00268B] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-first dark:opacity-50" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#0099CC] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-second dark:opacity-50" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#5B8DEF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-third dark:opacity-50" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#00D4FF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-fourth dark:opacity-50" />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] pb-4">
              {t.hero.title1}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-slate-300 font-medium">
              {t.hero.subtitle.split('{words}')[0]}
              <FlipWords words={t.hero.rollingWords} duration={2500} className="text-[#00268B] dark:text-[#5B8DEF]" />
              {t.hero.subtitle.split('{words}')[1]}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg text-gray-600 dark:text-slate-400"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <HoverBorderGradient
              as="a"
              href="#contact"
              containerClassName="rounded-full"
              className="flex items-center gap-2 text-base px-8 py-3"
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4" />
            </HoverBorderGradient>
          </motion.div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <section className="py-24 px-6 bg-gray-50/50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] mb-4">
              AI 기반 워크플로우
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">
              손 쉽게 업무 효율을 높이고 성과를 극대화 하세요
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Database, text: '데이터 접근성-활용성 확대' },
              { icon: Sparkles, text: 'AI 기반 주요 업무 자동화' },
              { icon: Workflow, text: '업무 간 상호 연결-연속성 강화' },
              { icon: Zap, text: '조직 데이터 안정성 확보' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-900 dark:text-white font-semibold text-lg leading-snug">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Productivity Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] p-8"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white">생산성 / 효율성</h3>
                </div>
                <p className="text-white/90 mb-6">
                  조직 생산성과 업무 효율을 높일 수 있습니다.
                </p>
                <div className="flex items-baseline gap-1">
                  <CountingNumber start={0} end={30} duration={2000} suffix="%" />
                </div>
              </div>
            </motion.div>

            {/* Cost Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#003875] to-[#00268B] dark:from-[#2B5A8E] dark:to-[#5B8DEF] p-8"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white">비용 / 리소스</h3>
                </div>
                <p className="text-white/90 mb-6">
                  조직 운영 비용과 투입 리소스를 절감해보세요.
                </p>
                <div className="flex items-baseline gap-1">
                  <CountingNumber start={0} end={30} duration={2000} prefix="-" suffix="%" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white"
          >
            {t.valueProposition.quote.split('{highlight}')[0]}
            <span className="font-bold text-[#00268B] dark:text-[#5B8DEF]">&apos;{t.valueProposition.quoteHighlight}&apos;</span>
            {t.valueProposition.quote.split('{highlight}')[1]}
          </motion.blockquote>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-gray-50/50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.features.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.features.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  {index === 0 && <Lightbulb className="w-10 h-10 text-[#00268B] dark:text-[#5B8DEF]" />}
                  {index === 1 && <Database className="w-10 h-10 text-[#0066A1] dark:text-[#00D4FF]" />}
                  {index === 2 && <Workflow className="w-10 h-10 text-[#0099CC] dark:text-[#00D4FF]" />}
                  {index === 3 && <Code className="w-10 h-10 text-[#003875] dark:text-[#5B8DEF]" />}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.process.title}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {t.process.steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-slate-300 max-w-[120px] whitespace-pre-line leading-snug">
                    {step.title}
                  </p>
                </motion.div>
                {index < t.process.steps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 dark:text-slate-600 mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF]/20 dark:to-[#00D4FF]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg text-white/90 dark:text-slate-300 mb-8">
            {t.cta.subtitle}
          </p>
          <HoverBorderGradient
            as="a"
            href="#contact"
            containerClassName="rounded-full mx-auto"
            className="text-base px-8 py-3 bg-white dark:bg-slate-900 text-[#00268B] dark:text-white"
          >
            {t.cta.button}
          </HoverBorderGradient>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50/50 dark:bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.faq.title}
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
            {t.faq.items.slice(0, 6).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": t.faq.items.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 whitespace-pre-line">
                {t.contact.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-slate-300 mb-4">
                {t.contact.description1}
              </p>
              <p className="text-gray-600 dark:text-slate-400 mb-8">
                {t.contact.description2}
              </p>
              <a
                href="https://featpaper.com/l/cqcHs4v1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {t.contact.introDownload}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <ContactForm locale={locale} translations={t} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-3">
            {/* Company Info */}
            <div className="text-sm text-gray-600 dark:text-slate-400 space-y-1">
              <p className="font-medium text-gray-700 dark:text-slate-300">
                (주)플로우오에스 | 대표 안희창
              </p>
              <p>
                주소: 서울시 서초구 강남대로 53길8 6-162호
              </p>
            </div>

            {/* Copyright */}
            <div className="pt-4 border-t border-gray-200 dark:border-slate-700 w-full max-w-md">
              <p className="text-gray-500 dark:text-slate-500 text-sm">
                {t.footer.copyright}
              </p>
              <p className="text-gray-400 dark:text-slate-600 text-xs mt-1">
                {t.footer.tagline}
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
