'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CTAButton } from '@/components/ui/cta-button';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import ThemeToggle from '@/components/ui/theme-toggle';
import { ShaderBackground } from '@/components/ui/shader-background';
import { RollingText } from '@/components/ui/rolling-text';
import { AnimatedCTAText } from '@/components/ui/animated-cta-text';
import { StarBorder } from '@/components/ui/star-border';
import { TargetCarousel } from '@/components/ui/target-carousel';
import { CountingNumber } from '@/components/ui/counting-number';
import { GlowMenuItem } from '@/components/ui/glow-menu-item';
import { ContactForm } from '@/components/ui/contact-form';
import { FAQItem } from '@/components/ui/faq-item';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import {
  MessageCircle,
  Sparkles,
  Zap,
  Lightbulb,
  Database,
  Workflow,
  Code,
  Link,
  Shield,
  CheckCircle,
  TrendingDown,
  TrendingUp,
  Award,
  Users,
  DollarSign,
  MonitorCog,
  ChevronRight,
  Pencil,
  MonitorPlay,
  Wrench,
  Menu,
  X
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Light mode logo */}
            <Image
              src="/logo/logo-05-optimized.svg"
              alt="FlowOS Logo"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto dark:hidden"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
            {/* Dark mode logo */}
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
          <div className="hidden md:flex items-center gap-8 text-sm">
            <GlowMenuItem href="#features">{t.nav.feature}</GlowMenuItem>
            <GlowMenuItem href="#benefits">{t.nav.services}</GlowMenuItem>
            <GlowMenuItem href="#stats">{t.nav.usecase}</GlowMenuItem>
            <GlowMenuItem href="https://flowos.inblog.io/" target="_blank" rel="noopener noreferrer">{t.nav.blog}</GlowMenuItem>
            <GlowMenuItem href="#contact">{t.nav.contact}</GlowMenuItem>
          </div>

          {/* Right Side - Desktop: Language + Theme + CTA, Mobile: Only Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Menu Button - Always visible on mobile */}
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

            {/* Desktop only - Language Switcher, Theme Toggle, CTA */}
            <div className="hidden md:flex items-center gap-3 sm:gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <CTAButton size="sm" href="#contact">{t.contact.formLabels.submit}</CTAButton>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Full Screen - Completely separate from nav */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9999] md:hidden bg-white dark:bg-slate-950"
          style={{ top: '73px' }}
        >
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col min-h-full px-6 py-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 mb-8">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-4 border-b border-gray-200 dark:border-slate-800"
                >
                  {t.nav.feature}
                </a>
                <a
                  href="#benefits"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-4 border-b border-gray-200 dark:border-slate-800"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#stats"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-4 border-b border-gray-200 dark:border-slate-800"
                >
                  {t.nav.usecase}
                </a>
                <a
                  href="https://flowos.inblog.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-4 border-b border-gray-200 dark:border-slate-800"
                >
                  {t.nav.blog}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-4 border-b border-gray-200 dark:border-slate-800"
                >
                  {t.nav.contact}
                </a>
              </nav>

              {/* Settings Section */}
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-center justify-between py-3">
                  <span className="text-lg font-medium text-gray-700 dark:text-slate-300">언어 / Language</span>
                  <LanguageSwitcher />
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-lg font-medium text-gray-700 dark:text-slate-300">테마 / Theme</span>
                  <ThemeToggle />
                </div>
              </div>

              {/* CTA Button at Bottom */}
              <div className="mt-auto pt-6">
                <CTAButton size="lg" href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  {t.contact.formLabels.submit}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative px-6 overflow-hidden min-h-[calc(100vh-73px)] bg-white dark:bg-slate-950 flex items-center">
        {/* Shader Animation Background */}
        <ShaderBackground className="opacity-50" />
        <div className="relative z-10 max-w-5xl mx-auto w-full py-20">
          <div className="text-center space-y-6">
            <h1 className="text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-bold leading-[1.1] tracking-tight">
              <AnimatedGradientText>
                {t.hero.title1}
              </AnimatedGradientText>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-slate-300 max-w-4xl mx-auto font-medium px-4">
              {t.hero.subtitle.split('{words}')[0]}
              <span className="inline-block">
                <RollingText words={t.hero.rollingWords} interval={2000} className="text-[#00268B] dark:text-[#7BA4FF] font-extrabold" />
              </span>
              {t.hero.subtitle.split('{words}')[1]}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
              {t.hero.description}
            </p>
            <div className="flex items-center justify-center pt-4">
              <CTAButton size="lg" href="#contact" className="w-auto px-12">
                <AnimatedCTAText text={t.hero.cta} />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Grid Preview */}
      <section className="py-20 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Blue Card - AI-Powered Workflow */}
              <div className="md:col-span-2 min-h-80 md:h-80 rounded-2xl bg-gradient-to-br from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] p-6 md:p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:shadow-[0_0_30px_rgba(91,141,239,0.4)]">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
                    <span className="text-xl sm:text-2xl font-bold">{t.previewCards.aiPowered.title}</span>
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    {t.previewCards.aiPowered.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {t.previewCards.aiPowered.features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between text-white gap-1">
                        <span className="text-sm sm:text-base leading-tight font-extrabold break-keep">{feature}</span>
                        {index === 0 && <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
                        {index === 1 && <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
                        {index === 2 && <Link className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
                        {index === 3 && <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Light Blue Card - Productivity */}
              <div className="min-h-80 md:h-80 rounded-2xl bg-gradient-to-br from-[#0099CC] to-[#00D4FF] dark:from-[#0099CC] dark:to-[#00D4FF] p-6 md:p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:shadow-[0_0_30px_rgba(0,153,204,0.4)]">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8" />
                    <h3 className="text-xl sm:text-2xl font-bold">{t.previewCards.productivity.title}</h3>
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    {t.previewCards.productivity.description}
                  </p>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="text-center">
                    <CountingNumber start={10} end={t.previewCards.productivity.percentage} duration={2000} suffix="%" />
                  </div>
                </div>
              </div>

              {/* Navy Blue Card - Cost */}
              <div className="order-4 md:order-3 min-h-64 md:h-64 rounded-2xl bg-gradient-to-br from-[#003875] to-[#00268B] dark:from-[#2B5A8E] dark:to-[#5B8DEF] p-6 md:p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:shadow-[0_0_30px_rgba(43,90,142,0.4)] overflow-hidden">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <DollarSign className="w-7 h-7 sm:w-8 sm:h-8" />
                    <h3 className="text-xl sm:text-2xl font-bold">{t.previewCards.cost.title}</h3>
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    {t.previewCards.cost.description}
                  </p>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="text-center">
                    <CountingNumber start={10} end={t.previewCards.cost.percentage} duration={2000} prefix="-" suffix="%" />
                  </div>
                </div>
              </div>

              {/* Medium Blue Card - System */}
              <div className="order-3 md:order-4 md:col-span-2 min-h-64 md:h-64 rounded-2xl bg-gradient-to-br from-[#0066A1] to-[#0099CC] dark:from-[#3B7FB5] dark:to-[#00D4FF] p-6 md:p-8 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:shadow-[0_0_30px_rgba(59,127,181,0.4)] overflow-hidden">
                <div className="mb-2 flex-shrink-0">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <MonitorCog className="w-6 h-6 sm:w-7 sm:h-7" />
                    <h3 className="text-lg sm:text-xl font-bold">{t.previewCards.system.title}</h3>
                  </div>
                  <p className="text-white text-xs sm:text-sm leading-snug">
                    {t.previewCards.system.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-auto flex-shrink-0">
                  {t.previewCards.system.benefits.map((benefit, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                      <div className="flex flex-col items-center gap-1">
                        {index === 0 && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />}
                        {index === 1 && <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />}
                        {index === 2 && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />}
                        {index === 3 && <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />}
                        <p className="text-white text-[10px] sm:text-xs leading-tight text-center font-extrabold break-keep">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-8 text-center px-4">
            {t.valueProposition.quote.split('{highlight}')[0]}
            <span className="font-bold text-[#00268B] dark:text-[#5B8DEF]">&apos;{t.valueProposition.quoteHighlight}&apos;</span>
            {t.valueProposition.quote.split('{highlight}')[1]}
          </blockquote>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-slate-300 text-center leading-relaxed px-4">
            {t.valueProposition.description}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.features.items.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    {index === 0 && <Lightbulb className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                    {index === 1 && <Database className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#0066A1] dark:text-[#00D4FF]" />}
                    {index === 2 && <Workflow className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#0099CC] dark:text-[#00D4FF]" />}
                    {index === 3 && <Code className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#003875] dark:text-[#5B8DEF]" />}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">{item.subtitle}</p>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">{item.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${
                  index === 0 ? 'to-[#00268B]/5 dark:to-[#5B8DEF]/10' :
                  index === 1 ? 'to-[#0066A1]/5 dark:to-[#00D4FF]/10' :
                  index === 2 ? 'to-[#0099CC]/5 dark:to-[#00D4FF]/10' :
                  'to-[#003875]/5 dark:to-[#5B8DEF]/10'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </div>

          <p className="text-center text-xl text-gray-700 dark:text-slate-300 mt-12">
            {t.features.footer}
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="benefits" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 break-keep">
              {t.process.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 break-keep px-2">
              {t.process.subtitle}
            </p>
          </div>

          {/* Steps Container */}
          <div className="relative pb-4 md:pb-8 mb-6 md:mb-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 px-2 md:px-4 justify-center">
              {t.process.steps.map((step, index) => (
                <>
                  {/* Step */}
                  <div key={`step-${index}`} className="flex flex-col items-center w-full md:w-auto">
                    <p className="text-sm sm:text-base md:text-lg text-[#00268B] dark:text-[#5B8DEF] font-extrabold mb-3">
                      STEP {step.number}
                    </p>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-3">
                      {index === 0 && <Lightbulb className="w-9 h-9 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 1 && <Database className="w-9 h-9 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 2 && <Pencil className="w-9 h-9 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 3 && <MonitorPlay className="w-9 h-9 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 4 && <Code className="w-9 h-9 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 5 && <Wrench className="w-9 h-9 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white text-center whitespace-pre-line break-keep px-2 max-w-[220px] leading-snug">
                      {step.title}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {index < t.process.steps.length - 1 && (
                    <ChevronRight key={`arrow-${index}`} className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 dark:text-slate-600 flex-shrink-0 rotate-90 md:rotate-0 my-2 md:my-0" />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-slate-300 mb-4 font-semibold">
            {t.cta.subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-8">
            {t.cta.description}
          </p>
          <CTAButton size="lg" href="#contact">{t.cta.button}</CTAButton>
        </div>
      </section>

      {/* Target Companies Section */}
      <section className="py-20 px-6 overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.targetCompanies.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-1">
              {t.targetCompanies.subtitle1}
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              {t.targetCompanies.subtitle2}
            </p>
          </div>

          {/* Centered Carousel */}
          <TargetCarousel cards={t.targetCompanies.cards} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="stats" className="py-20 px-6 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.faq.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg overflow-hidden">
            {t.faq.items.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* JSON-LD Structured Data */}
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

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 whitespace-pre-line">
                {t.contact.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 mb-4">
                {t.contact.description1}
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 mb-6">
                {t.contact.description2}
              </p>
              <div className="flex justify-center">
                <a
                  href="https://featpaper.com/l/cqcHs4v1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 text-lg bg-gradient-to-r from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {t.contact.introDownload}
                </a>
              </div>
            </div>

            <ContactForm locale={locale} translations={t} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 dark:text-slate-400 mb-2">
            {t.footer.copyright}
          </p>
          <p className="text-gray-600 dark:text-slate-400">
            {t.footer.tagline}
          </p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a href="#contact" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 group">
        <StarBorder as="button" color="#0099CC">
          <div className="bg-gradient-to-r from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] text-white p-3 sm:p-4 rounded-xl shadow-[0_10px_40px_rgba(0,38,139,0.3)] dark:shadow-[0_0_40px_rgba(91,141,239,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="font-medium pr-1 sm:pr-2 hidden sm:inline">{t.floatingButton.text}</span>
          </div>
        </StarBorder>
      </a>
    </div>
  );
}
