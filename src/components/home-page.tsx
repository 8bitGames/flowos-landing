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

          {/* Right Side - Mobile Hamburger + Language + Theme + CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Menu Button */}
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

            <LanguageSwitcher />
            <ThemeToggle />
            <CTAButton size="sm" href="#contact" className="hidden sm:flex">{t.contact.formLabels.submit}</CTAButton>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div className="fixed top-[73px] left-0 right-0 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 md:hidden z-40 animate-slide-down">
              <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col gap-4">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  {t.nav.feature}
                </a>
                <a
                  href="#benefits"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#stats"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  {t.nav.usecase}
                </a>
                <a
                  href="https://flowos.inblog.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  {t.nav.blog}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  {t.nav.contact}
                </a>

                {/* Mobile CTA Button */}
                <CTAButton size="lg" href="#contact" className="mt-4 w-full" onClick={() => setMobileMenuOpen(false)}>
                  {t.contact.formLabels.submit}
                </CTAButton>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-32 sm:pb-48 md:pb-64 lg:pb-80 xl:pb-96 px-6 overflow-hidden min-h-screen bg-white dark:bg-slate-950">
        {/* Shader Animation Background */}
        <ShaderBackground className="opacity-50" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="font-bold space-y-0">
              <div className="text-[2.8rem] sm:text-[3.375rem] md:text-[5.4rem] leading-[1.1] tracking-tight">
                <AnimatedGradientText>
                  {t.hero.title1}
                </AnimatedGradientText>
              </div>
              <div className="text-[1.8rem] sm:text-[2.15rem] md:text-[3.4rem] -mt-2 leading-[1.1] tracking-tight">
                <AnimatedGradientText>
                  {t.hero.title2}
                </AnimatedGradientText>
              </div>
            </h1>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 max-w-3xl mx-auto font-semibold">
                {t.hero.subtitle}
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto font-bold">
                {t.hero.subtitleEn}
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto !mt-6 px-2">
              {t.hero.description.split('{words}')[0]}
              <span className="inline-block text-center">
                <RollingText words={t.hero.rollingWords} interval={2000} className="text-[#00268B] dark:text-[#7BA4FF] text-[1.1rem] sm:text-[1.27rem] md:text-[1.38rem] font-extrabold" />
              </span>
              {t.hero.description.split('{words}')[1]}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4 sm:px-0">
              <CTAButton size="lg" href="#contact" className="w-full max-w-[450px] sm:min-w-[420px]">
                <AnimatedCTAText text={t.hero.cta} />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Grid Preview */}
      <section className="pb-20 px-6 -mt-24 sm:-mt-40 md:-mt-56 lg:-mt-72 xl:-mt-80">
        <div className="max-w-5xl mx-auto">
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {/* Blue Card - AI-Powered Workflow */}
              <div className="md:col-span-2 h-80 rounded-2xl bg-gradient-to-br from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:shadow-[0_0_30px_rgba(91,141,239,0.4)]">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <Sparkles className="w-8 h-8" />
                    <span className="text-2xl font-bold">{t.previewCards.aiPowered.title}</span>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    {t.previewCards.aiPowered.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {t.previewCards.aiPowered.features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-xs sm:text-sm leading-tight font-bold">{feature}</span>
                        {index === 0 && <Zap className="w-4 h-4 flex-shrink-0 ml-1 sm:ml-2" />}
                        {index === 1 && <Sparkles className="w-4 h-4 flex-shrink-0 ml-1 sm:ml-2" />}
                        {index === 2 && <Link className="w-4 h-4 flex-shrink-0 ml-1 sm:ml-2" />}
                        {index === 3 && <Shield className="w-4 h-4 flex-shrink-0 ml-1 sm:ml-2" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purple Card - Productivity */}
              <div className="h-80 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <Users className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">{t.previewCards.productivity.title}</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    {t.previewCards.productivity.description}
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <CountingNumber start={10} end={t.previewCards.productivity.percentage} duration={2000} suffix="%" />
                  </div>
                </div>
              </div>

              {/* Orange Card - Cost */}
              <div className="order-4 md:order-3 h-64 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <DollarSign className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">{t.previewCards.cost.title}</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    {t.previewCards.cost.description}
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <CountingNumber start={10} end={t.previewCards.cost.percentage} duration={2000} prefix="-" suffix="%" />
                  </div>
                </div>
              </div>

              {/* Green Card - System */}
              <div className="order-3 md:order-4 md:col-span-2 h-64 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <MonitorCog className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">{t.previewCards.system.title}</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-4">
                    {t.previewCards.system.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {t.previewCards.system.benefits.map((benefit, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                      <div className="flex flex-col items-center gap-1 sm:gap-2">
                        {index === 0 && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                        {index === 1 && <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                        {index === 2 && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                        {index === 3 && <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                        <p className="text-white text-xs sm:text-sm leading-tight text-center font-bold">
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
                    {index === 0 && <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                    {index === 1 && <Database className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400" />}
                    {index === 2 && <Workflow className="w-10 h-10 sm:w-12 sm:h-12 text-[#0099CC] dark:text-[#00D4FF]" />}
                    {index === 3 && <Code className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400" />}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">{item.subtitle}</p>
                  <p className="text-sm text-gray-700 dark:text-slate-300">{item.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${
                  index === 0 ? 'to-blue-500/5 dark:to-blue-500/10' :
                  index === 1 ? 'to-purple-500/5 dark:to-purple-500/10' :
                  index === 2 ? 'to-cyan-500/5 dark:to-cyan-500/10' :
                  'to-green-500/5 dark:to-green-500/10'
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
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.process.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">
              {t.process.subtitle}
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative pb-8 mb-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4 px-4 justify-center">
              {t.process.steps.map((step, index) => (
                <>
                  {/* Step */}
                  <div key={`step-${index}`} className="flex flex-col items-center">
                    <p className="text-sm text-[#00268B] dark:text-[#5B8DEF] font-bold mb-2">STEP</p>
                    <p className="text-2xl font-bold text-[#00268B] dark:text-[#5B8DEF] mb-4">{step.number}</p>
                    <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                      {index === 0 && <Lightbulb className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 1 && <Database className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 2 && <Pencil className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 3 && <MonitorPlay className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 4 && <Code className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                      {index === 5 && <Wrench className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />}
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white text-center whitespace-pre-line">
                      {step.title}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {index < t.process.steps.length - 1 && (
                    <ChevronRight key={`arrow-${index}`} className="w-8 h-8 text-gray-400 dark:text-slate-600 flex-shrink-0 rotate-90 md:rotate-0" />
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
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
