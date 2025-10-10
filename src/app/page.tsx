'use client';

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
import {
  MessageCircle,
  Sparkles,
  Zap,
  Lightbulb,
  Database,
  Workflow,
  Code
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Light mode logo */}
            <Image
              src="/logo/logo-05-optimized.svg"
              alt="FlowOS Logo"
              width={200}
              height={50}
              className="h-10 w-auto dark:hidden"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
            {/* Dark mode logo */}
            <Image
              src="/logo/logo-06-optimized.svg"
              alt="FlowOS Logo"
              width={200}
              height={50}
              className="h-10 w-auto hidden dark:block"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <GlowMenuItem href="#features">Feature</GlowMenuItem>
            <GlowMenuItem href="#benefits">Services</GlowMenuItem>
            <GlowMenuItem href="#stats">Suggestions</GlowMenuItem>
            <GlowMenuItem href="#contact">Contact</GlowMenuItem>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <CTAButton size="sm" href="#contact">상담하기</CTAButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-96 px-6 overflow-hidden min-h-screen bg-white dark:bg-slate-950">
        {/* Shader Animation Background */}
        <ShaderBackground className="opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="font-bold space-y-0">
              <div className="text-[3.375rem] md:text-[5.4rem] leading-tight">
                <AnimatedGradientText>
                  WORK IN FLOW
                </AnimatedGradientText>
              </div>
              <div className="text-[2.15rem] md:text-[3.4rem] -mt-2">
                <AnimatedGradientText>
                  WHERE DATA MEETS AI.
                </AnimatedGradientText>
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 max-w-3xl mx-auto font-semibold">
              AI-데이터 기반의 비즈니스 운영 체제 FlowOS
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              우리는 AI와 함께 기업이 가진 데이터를{' '}
              <span className="inline-block w-20 text-center">
                <RollingText words={['발견', '분석', '연결']} interval={2000} className="text-blue-600 dark:text-cyan-400 text-[1.27rem] md:text-[1.38rem] font-extrabold" />
              </span>{' '}
              하고,<br />
              효율적으로 일할 수 있는 근본적인 성장 구조를 설계합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <CTAButton size="lg" href="#contact" className="min-w-[320px]">
                <AnimatedCTAText />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Grid Preview */}
      <section className="pb-20 px-6 -mt-80">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {/* Blue Card - AI-Powered Workflow */}
              <div className="col-span-2 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-4">
                    <Sparkles className="w-6 h-6" />
                    <span className="text-base font-semibold">AI-Powered Workflow</span>
                  </div>
                  <p className="text-white text-base leading-relaxed">
                    손 쉽게 업무 효율을 높이고 성과를 극대화 하세요
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm leading-tight">데이터 접근성 - 활용성 확대</span>
                      <Zap className="w-4 h-4 flex-shrink-0 ml-2" />
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-white text-sm leading-tight block">AI 기반 주요 업무 자동화</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-white text-sm leading-tight block">업무 간 상호 연결 - 연속성 강화</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm leading-tight">조직 데이터 안정성 확보</span>
                      <div className="w-4 h-4 border-2 border-white rounded-full flex-shrink-0 ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Purple Card - 조직 생산성 / 효율성 */}
              <div className="h-80 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-white font-semibold text-xl">조직 생산성 / 효율성</h3>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <CountingNumber start={10} end={30} duration={2000} suffix="%" />
                  </div>
                </div>
              </div>

              {/* Orange Card - 조직 운영 비용 / 리소스 */}
              <div className="h-64 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-white font-semibold text-lg">조직 운영 비용 / 리소스</h3>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <CountingNumber start={10} end={30} duration={2000} suffix="%" />
                  </div>
                </div>
              </div>

              {/* Green Card - Real-time Collaboration */}
              <div className="col-span-2 h-64 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <p className="text-white text-sm leading-relaxed mb-3">
                    FlowOS와 더 빠르고, 효율적이고, 유연하게 일하세요. AI 가 데이터를 효율을, 효율을 성과로 바꿉니다.
                  </p>
                  <div className="text-center mb-4">
                    <h3 className="text-white text-2xl font-bold">Real-time Collaboration</h3>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm leading-tight text-center">
                      의사결정<br />타당성 강화
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm leading-tight text-center">
                      프로젝트<br />리소스 절감
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm leading-tight text-center">
                      개인 업무<br />처리량 증가
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm leading-tight text-center">
                      제품 - 서비스<br />품질 향상
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <blockquote className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-8 text-center">
            더 많은 기업들이 <span className="font-bold text-blue-600 dark:text-cyan-400">&apos;가치&apos;</span>에만 집중하기를 바랍니다.
          </blockquote>
          <p className="text-2xl text-gray-700 dark:text-slate-300 text-center leading-relaxed">
            FlowOS가 전략 컨설팅과 분석에서 끝나지 않는 시스템 운영 파트너로서,<br />
            AI와 사람이 함께 하는 새로운 업무의 흐름을 만들어드리겠습니다.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
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
                  <Lightbulb className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white">업무 프로세스 컨설팅</h3>
                </div>
                <p className="text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">Operational process consulting</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">업무상의 문제를 정의하고 개선 포인트를 제안합니다.<br />기획, 디자인, 운영에 따른 로드맵을 구성합니다.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Database className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white">데이터 수집 및 구조화</h3>
                </div>
                <p className="text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">Data collection and structuring</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">분석의 기반이 되는 업무 데이터를 내부 자산화하고,<br />체계적인 관리 및 업데이트를 위한 CONTEXT HUB를 구축합니다.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/5 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Workflow className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white">워크플로우 디자인 설계</h3>
                </div>
                <p className="text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">Workflow design and architecture</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">반복 업무 자동화부터 전반의 프로세스를 최적화합니다.<br />부분적으로 AI 어시스턴트를 도입하여 효율화합니다.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/5 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="w-12 h-12 text-green-600 dark:text-green-400" />
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white">업무 시스템 개발 운영</h3>
                </div>
                <p className="text-xl font-bold text-gray-600 dark:text-slate-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">System development and management</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">기능별 데모 제공 및 주기적으로 피드백을 반영합니다.<br />기업 맞춤형 솔루션을 구축하고 관리합니다.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-500/5 dark:to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              FlowOS 가 기업의 성장을 돕는 과정입니다.
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">
              성과 및 효율 개선을 위한 End-To-End 를 함께합니다.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative text-center p-8 pt-12 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-stagger-1">
              {/* Progress indicator with shine effect */}
              <div className="absolute top-0 left-0 right-0 h-5 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-progress-shine-delay-1"></div>
              </div>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 animate-number-pulse-delay-1">
                1
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Diagnose (진단)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                기업 현황 진단 및<br />개선 목표 정의
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center p-8 pt-12 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-stagger-2">
              {/* Progress indicator with shine effect */}
              <div className="absolute top-0 left-0 right-0 h-5 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-400 dark:to-cyan-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-progress-shine-delay-2"></div>
              </div>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 animate-number-pulse-delay-2">
                2
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Design (설계)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                데이터 수집 및<br />활용 구조 설계
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center p-8 pt-12 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-stagger-3">
              {/* Progress indicator with shine effect */}
              <div className="absolute top-0 left-0 right-0 h-5 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-progress-shine-delay-3"></div>
              </div>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 animate-number-pulse-delay-3">
                3
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Propose (제안)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                개선 방안 수립 및 제안
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center p-8 pt-12 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-stagger-4">
              {/* Progress indicator with shine effect */}
              <div className="absolute top-0 left-0 right-0 h-5 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-progress-shine-delay-4"></div>
              </div>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 animate-number-pulse-delay-4">
                4
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Demo (데모)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                자동화-AI 도구 개발 및<br />데모 제공
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative text-center p-8 pt-12 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-stagger-5">
              {/* Progress indicator with shine effect */}
              <div className="absolute top-0 left-0 right-0 h-5 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-400 dark:to-cyan-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-progress-shine-delay-5"></div>
              </div>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 animate-number-pulse-delay-5">
                5
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Develop (개발)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                기업용 통합 시스템<br />개발 및 운영
              </p>
            </div>

            {/* Step 6 */}
            <div className="relative text-center p-8 pt-12 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-stagger-6">
              {/* Progress indicator with shine effect */}
              <div className="absolute top-0 left-0 right-0 h-5 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-progress-shine-delay-6"></div>
              </div>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 animate-number-pulse-delay-6">
                6
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Update (업데이트)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                이용 피드백 반영 및<br />기능 업데이트
              </p>
            </div>
          </div>

          <p className="text-center text-xl text-gray-700 dark:text-slate-300">
            FlowOS는 조직이 스스로 데이터로 일할 수 있는 구조를 구축하도록 돕습니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              이런 기업들에게 제안드립니다.
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-1">
              어떤 산업, 어떤 기업이든 데이터는 쌓이고 있습니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              데이터를 어떤 방식으로 활용하는지가 관건입니다
            </p>
          </div>

          {/* Centered Carousel */}
          <TargetCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Implementation Examples
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400">
              실제 구축 사례
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-slate-900 rounded-2xl border border-blue-200 dark:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
                98%
              </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">G 글로벌 스타트업</h3>
              <p className="text-gray-700 dark:text-slate-300">
                전력 소비-기후 데이터 활용AI 기반<br/>태양광 발전 효율화 시스템 설계 및 개발 
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-slate-900 rounded-2xl border border-purple-200 dark:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
                3x
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">C 기업</h3>
              <p className="text-gray-700 dark:text-slate-300">
                고객 영업-서비스 제공 데이터 활용<br/>AI 기반 영업-운영 반자동화 시스템 구축
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-slate-900 rounded-2xl border border-cyan-200 dark:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
                2x
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">K 광고대행사</h3>
              <p className="text-gray-700 dark:text-slate-300">
                소비자 컨텐츠 반응 데이터 활용<br/>광고물 적정성-노출도 스코어링 시스템 구축
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                당신의 비즈니스 목표를<br/>알려주세요.
              </h2>
              <p className="text-xl text-gray-700 dark:text-slate-300 mb-4">
                성과 개선도 좋고, 비용 감축도 좋습니다.<br />
                FlowOS 가 당신의 파트너가 되어드리겠습니다.
              </p>
              <p className="text-lg text-gray-600 dark:text-slate-400">
                솔루션을 함께 고민할 담당자가 6시간 안에 연락드리겠습니다.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">이름 *</label>
                    <input
                      type="text"
                      placeholder="홍길동"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">회사명 *</label>
                    <input
                      type="text"
                      placeholder="회사명을 입력해주세요"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">이메일 *</label>
                  <input
                    type="email"
                    placeholder="example@company.com"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">전화번호</label>
                    <input
                      type="tel"
                      placeholder="010-1234-5678"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">웹사이트</label>
                    <input
                      type="url"
                      placeholder="https://www.example.com"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">현재 과제 또는 고민 *</label>
                  <textarea
                    rows={5}
                    placeholder="데이터 관리나 업무 프로세스에서 겪고 있는 어려움이나 개선하고 싶은 부분을 자유롭게 작성해주세요."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    maxLength={500}
                  />
                </div>

                <StarBorder as="button" type="submit" color="#06b6d4" className="w-full">
                  <div className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white text-lg font-medium transition-all duration-300 transform hover:scale-105">
                    플로우 시작하기 / Start your flow
                  </div>
                </StarBorder>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-slate-400 mb-2">
            © FlowOS. Work in Flow. | anton@aeonstudioverse.com
          </p>
          <p className="text-gray-600 dark:text-slate-400">
            우리는 기업이 스스로 데이터로 일할 수 있는 운영 체계를 구축합니다.
          </p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <StarBorder as="button" color="#06b6d4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white p-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            <span className="font-medium pr-2">FlowOS 상담</span>
          </div>
        </StarBorder>
      </div>
    </div>
  );
}
