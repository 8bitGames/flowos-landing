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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            <GlowMenuItem href="#features">Feature</GlowMenuItem>
            <GlowMenuItem href="#benefits">Services</GlowMenuItem>
            <GlowMenuItem href="#stats">UseCase</GlowMenuItem>
            <GlowMenuItem href="https://flowos.inblog.io/" target="_blank" rel="noopener noreferrer">Blog</GlowMenuItem>
            <GlowMenuItem href="#contact">Contact</GlowMenuItem>
          </div>

          {/* Right Side - Mobile Hamburger + Theme + CTA */}
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

            <ThemeToggle />
            <CTAButton size="sm" href="#contact" className="hidden sm:flex">상담하기</CTAButton>
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
                  Feature
                </a>
                <a
                  href="#benefits"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  Services
                </a>
                <a
                  href="#stats"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  UseCase
                </a>
                <a
                  href="https://flowos.inblog.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#00268B] dark:hover:text-[#5B8DEF] transition-colors py-3 border-b border-gray-100 dark:border-slate-800"
                >
                  Contact
                </a>

                {/* Mobile CTA Button */}
                <CTAButton size="lg" href="#contact" className="mt-4 w-full" onClick={() => setMobileMenuOpen(false)}>
                  상담하기
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
                  WORK IN FLOW
                </AnimatedGradientText>
              </div>
              <div className="text-[1.8rem] sm:text-[2.15rem] md:text-[3.4rem] -mt-2 leading-[1.1] tracking-tight">
                <AnimatedGradientText>
                  WHERE DATA MEETS AI.
                </AnimatedGradientText>
              </div>
            </h1>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 max-w-3xl mx-auto font-semibold">
                AI-데이터 기반의 비즈니스 운영 체제 FlowOS.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto font-bold">
                FlowOS is an AI-powered operating system for business workflows.
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto !mt-6 px-2">
              우리는 AI와 함께 기업이 가진 데이터를{' '}
              <span className="inline-block w-16 sm:w-20 text-center">
                <RollingText words={['발견', '분석', '연결']} interval={2000} className="text-[#00268B] dark:text-[#7BA4FF] text-[1.1rem] sm:text-[1.27rem] md:text-[1.38rem] font-extrabold" />
              </span>{' '}
              하고,<br className="hidden sm:block" />{' '}
              효율적으로 일할 수 있는 근본적인 성장 구조를 설계합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4 sm:px-0">
              <CTAButton size="lg" href="#contact" className="w-full max-w-[340px] sm:min-w-[320px]">
                <AnimatedCTAText />
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
                    <span className="text-2xl font-bold">AI-Powered Workflow</span>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    손 쉽게 업무 효율을 높이고 성과를 극대화 하세요
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-xs sm:text-sm leading-tight font-bold">데이터 접근성-활용성 확대</span>
                      <Zap className="w-4 h-4 flex-shrink-0 ml-1 sm:ml-2" />
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-xs sm:text-sm leading-tight font-bold">AI 기반 주요 업무 자동화</span>
                      <Sparkles className="w-4 h-4 flex-shrink-0 ml-1 sm:ml-2" />
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-xs sm:text-sm leading-tight font-bold">업무 간 상호 연결-연속성 강화</span>
                      <Link className="w-4 h-4 flex-shrink-0 ml-1 sm:ml-2" />
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-xs sm:text-sm leading-tight font-bold">조직 데이터 안정성 확보</span>
                      <Shield className="w-4 h-4 flex-shrink-0 ml-1 sm:ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Purple Card - 조직 생산성 / 효율성 */}
              <div className="h-80 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <Users className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Productivity / Efficiency.</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    조직 생산성과 업무 효율을 높일 수 있습니다.
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <CountingNumber start={10} end={30} duration={2000} suffix="%" />
                  </div>
                </div>
              </div>

              {/* Orange Card - 조직 운영 비용 / 리소스 */}
              <div className="order-4 md:order-3 h-64 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <DollarSign className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Cost / Resource.</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    조직 운영 비용과 투입 리소스를 절감해보세요.
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <CountingNumber start={30} end={10} duration={2000} suffix="%" />
                  </div>
                </div>
              </div>

              {/* Green Card - Real-time Collaboration */}
              <div className="order-3 md:order-4 md:col-span-2 h-64 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-3">
                    <MonitorCog className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">With Data & AI Based System.</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-4">
                    FlowOS와 더 빠르고, 효율적이고, 유연하게 일하세요.<br />
                    AI가 데이터를 효율로, 효율을 성과로 바꿉니다.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <p className="text-white text-xs sm:text-sm leading-tight text-center font-bold">
                        의사결정<br />타당성 강화
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <p className="text-white text-xs sm:text-sm leading-tight text-center font-bold">
                        프로젝트<br />리소스 절감
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <p className="text-white text-xs sm:text-sm leading-tight text-center font-bold">
                        개인 업무<br />처리량 증가
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <p className="text-white text-xs sm:text-sm leading-tight text-center font-bold">
                        제품-서비스<br />품질 향상
                      </p>
                    </div>
                  </div>
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
            더 많은 기업들이 <span className="font-bold text-[#00268B] dark:text-[#5B8DEF]">&apos;가치&apos;</span>에만 집중하기를 바랍니다.
          </blockquote>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-slate-300 text-center leading-relaxed px-4">
            FlowOS가 전략 컨설팅과 분석에서 끝나지 않는 시스템 운영 파트너로서,<br className="hidden sm:block" />
            AI와 사람이 함께 하는 새로운 업무의 흐름을 만들어드리겠습니다.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              FlowOS 는 이런 서비스를 제공합니다.
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">What FlowOS provides.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-[#00268B] dark:text-[#5B8DEF]" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">업무 프로세스 컨설팅</h3>
                </div>
                <p className="text-lg sm:text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">Operational process consulting</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">업무상의 문제를 정의하고 개선 포인트를 제안합니다.<br />기획, 디자인, 운영에 따른 로드맵을 구성합니다.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Database className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">데이터 수집 및 구조화</h3>
                </div>
                <p className="text-lg sm:text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">Data collection and structuring</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">분석의 기반이 되는 업무 데이터를 내부 자산화하고,<br />체계적인 관리 및 업데이트를 위한 CONTEXT HUB를 구축합니다.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/5 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Workflow className="w-10 h-10 sm:w-12 sm:h-12 text-[#0099CC] dark:text-[#00D4FF]" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">워크플로우 디자인 설계</h3>
                </div>
                <p className="text-lg sm:text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">Workflow design and architecture</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">반복 업무 자동화부터 전반의 프로세스를 최적화합니다.<br />부분적으로 AI 어시스턴트를 도입하여 효율화합니다.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/5 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">업무 시스템 개발 운영</h3>
                </div>
                <p className="text-lg sm:text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">System development and management</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">기능별 데모 제공 및 주기적으로 피드백을 반영합니다.<br />기업 맞춤형 솔루션을 구축하고 관리합니다.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-500/5 dark:to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              FlowOS 가 기업의 성장을 돕는 과정입니다.
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">
              성과 및 효율 개선을 위한 End-To-End 를 함께합니다.
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative overflow-x-auto pb-8 mb-12">
            {/* Fade-out gradient hint on the right */}
            <div className="absolute top-0 right-0 bottom-8 w-16 sm:w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
            <div className="flex items-center gap-4 min-w-max px-4">
              {/* Step 1 - Diagnose */}
              <div className="flex flex-col items-center">
                <p className="text-sm text-[#00268B] dark:text-[#5B8DEF] font-bold mb-2">STEP</p>
                <p className="text-2xl font-bold text-[#00268B] dark:text-[#5B8DEF] mb-4">01</p>
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <Lightbulb className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white text-center whitespace-pre-line">
                  기업 현황 진단 및<br />개선 목표 정의
                </p>
              </div>

              {/* Arrow 1 */}
              <ChevronRight className="w-8 h-8 text-gray-400 dark:text-slate-600 flex-shrink-0" />

              {/* Step 2 - Design */}
              <div className="flex flex-col items-center">
                <p className="text-sm text-[#00268B] dark:text-[#5B8DEF] font-bold mb-2">STEP</p>
                <p className="text-2xl font-bold text-[#00268B] dark:text-[#5B8DEF] mb-4">02</p>
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <Database className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white text-center whitespace-pre-line">
                  데이터 수집 및<br />활용 구조 설계
                </p>
              </div>

              {/* Arrow 2 */}
              <ChevronRight className="w-8 h-8 text-gray-400 dark:text-slate-600 flex-shrink-0" />

              {/* Step 3 - Propose */}
              <div className="flex flex-col items-center">
                <p className="text-sm text-[#00268B] dark:text-[#5B8DEF] font-bold mb-2">STEP</p>
                <p className="text-2xl font-bold text-[#00268B] dark:text-[#5B8DEF] mb-4">03</p>
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <Pencil className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white text-center whitespace-pre-line">
                  개선 방안 수립 및<br />제안
                </p>
              </div>

              {/* Arrow 3 */}
              <ChevronRight className="w-8 h-8 text-gray-400 dark:text-slate-600 flex-shrink-0" />

              {/* Step 4 - Demo */}
              <div className="flex flex-col items-center">
                <p className="text-sm text-[#00268B] dark:text-[#5B8DEF] font-bold mb-2">STEP</p>
                <p className="text-2xl font-bold text-[#00268B] dark:text-[#5B8DEF] mb-4">04</p>
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <MonitorPlay className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white text-center whitespace-pre-line">
                  자동화-AI 도구 개발 및<br />데모 제공
                </p>
              </div>

              {/* Arrow 4 */}
              <ChevronRight className="w-8 h-8 text-gray-400 dark:text-slate-600 flex-shrink-0" />

              {/* Step 5 - Develop */}
              <div className="flex flex-col items-center">
                <p className="text-sm text-[#00268B] dark:text-[#5B8DEF] font-bold mb-2">STEP</p>
                <p className="text-2xl font-bold text-[#00268B] dark:text-[#5B8DEF] mb-4">05</p>
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <Code className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white text-center whitespace-pre-line">
                  기업용 통합 시스템<br />개발 및 운영
                </p>
              </div>

              {/* Arrow 5 */}
              <ChevronRight className="w-8 h-8 text-gray-400 dark:text-slate-600 flex-shrink-0" />

              {/* Step 6 - Update */}
              <div className="flex flex-col items-center">
                <p className="text-sm text-[#00268B] dark:text-[#5B8DEF] font-bold mb-2">STEP</p>
                <p className="text-2xl font-bold text-[#00268B] dark:text-[#5B8DEF] mb-4">06</p>
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <Wrench className="w-12 h-12 text-[#00268B] dark:text-[#5B8DEF]" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white text-center whitespace-pre-line">
                  이용 피드백 반영 및<br />기능 업데이트
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xl text-gray-700 dark:text-slate-300">
            FlowOS는 조직이 스스로 데이터로 일할 수 있는 구조를 구축하도록 돕습니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            아직도 너무 어려워보이시나요?
          </h2>
          <p className="text-xl text-gray-700 dark:text-slate-300 mb-4 font-semibold">
            망설임은 성장만 늦출 뿐입니다.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-8">
            데이터 기반의 의사결정, 협력 그리고 자동화까지,<br />
            기업이 AI와 함께 일하는 방식을 혁신할 시간입니다.
          </p>
          <CTAButton size="lg" href="#contact">지금 바로 당신의 비즈니스 고민을 공유해주세요.</CTAButton>
        </div>
      </section>

      {/* Target Companies Section */}
      <section className="py-20 px-6 overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              이런 고민을 가진 기업들에게 제안드립니다.
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-1">
              어떤 산업, 어떤 기업이든 데이터는 쌓이고 있습니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              데이터를 어떤 방식으로 활용하는지가 관건입니다.
            </p>
          </div>

          {/* Centered Carousel */}
          <TargetCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              도입 사례
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-2">
              지금 이순간에도 기업들은 FlowOS 와 함께합니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              이제는 당신이 비즈니스를 성장시킬 차례입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-[#00268B]/5 to-[#0099CC]/10 dark:from-[#5B8DEF]/20 dark:to-slate-900 rounded-2xl border border-[#00268B]/20 dark:border-[#5B8DEF]/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-6xl font-bold bg-gradient-to-r from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] bg-clip-text text-transparent mb-4">
                98%
              </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">G 글로벌 스타트업</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-slate-300">
                전력 소비-기후 데이터 활용AI 기반<br/>태양광 발전 효율화 시스템 설계 및 개발
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-slate-900 rounded-2xl border border-purple-200 dark:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
                3x
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">C 기업</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-slate-300">
                고객 영업-서비스 제공 데이터 활용<br/>AI 기반 영업-운영 반자동화 시스템 구축
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#0099CC]/5 to-[#00268B]/10 dark:from-[#00D4FF]/20 dark:to-slate-900 rounded-2xl border border-[#0099CC]/20 dark:border-[#00D4FF]/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-6xl font-bold bg-gradient-to-r from-[#0099CC] to-[#00268B] dark:from-[#00D4FF] dark:to-[#5B8DEF] bg-clip-text text-transparent mb-4">
                2x
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">K 광고대행사</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-slate-300">
                소비자 컨텐츠 반응 데이터 활용<br/>광고물 적정성-노출도 스코어링 시스템 구축
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                당신의 비즈니스 목표를<br/>알려주세요.
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 mb-4">
                성과 개선도 좋고, 비용 감축도 좋습니다.<br />
                FlowOS 가 당신의 파트너가 되어드리겠습니다.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400">
                솔루션을 함께 고민할 담당자가 6시간 안에 연락드리겠습니다.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 dark:text-slate-400 mb-2">
            © FlowOS. Work in Flow. | anton@flowos.work
          </p>
          <p className="text-gray-600 dark:text-slate-400">
            우리는 기업이 스스로 데이터로 일할 수 있는 운영 체계를 구축합니다.
          </p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a href="#contact" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 group">
        <StarBorder as="button" color="#0099CC">
          <div className="bg-gradient-to-r from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] text-white p-3 sm:p-4 rounded-xl shadow-[0_10px_40px_rgba(0,38,139,0.3)] dark:shadow-[0_0_40px_rgba(91,141,239,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="font-medium pr-1 sm:pr-2 hidden sm:inline">FlowOS 상담</span>
          </div>
        </StarBorder>
      </a>
    </div>
  );
}
