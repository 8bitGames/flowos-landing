'use client';

import Image from 'next/image';
import Marquee from '@/components/ui/marquee';
import { FeatureCard } from '@/components/ui/feature-card';
import { CTAButton } from '@/components/ui/cta-button';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import ThemeToggle from '@/components/ui/theme-toggle';
import { ShaderBackground } from '@/components/ui/shader-background';
import { RollingText } from '@/components/ui/rolling-text';
import { AnimatedCTAText } from '@/components/ui/animated-cta-text';
import {
  Database,
  RefreshCw,
  MessageCircle,
  Sparkles,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo/logo-05-optimized.svg"
              alt="FlowOS Logo"
              width={200}
              height={50}
              className="h-10 w-auto"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="nav-link text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">
              <span className="nav-text">
                <span>Feature</span>
                <span>Feature</span>
              </span>
            </a>
            <a href="#benefits" className="nav-link text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">
              <span className="nav-text">
                <span>Services</span>
                <span>Services</span>
              </span>
            </a>
            <a href="#stats" className="nav-link text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">
              <span className="nav-text">
                <span>Suggestions</span>
                <span>Suggestions</span>
              </span>
            </a>
            <a href="#contact" className="nav-link text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">
              <span className="nav-text">
                <span>Contact</span>
                <span>Contact</span>
              </span>
            </a>
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
            <h1 className="text-6xl md:text-8xl font-bold">
              <AnimatedGradientText>
                WORK IN FLOW<br />WHERE DATA MEET AI
              </AnimatedGradientText>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 max-w-3xl mx-auto font-semibold">
              AI-데이터 기반의 비지니스 운영 체제 FlowOS
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              우리는 AI와 함께 기업이 가진 데이터를{' '}
              <span className="inline-block w-16 text-center">
                <RollingText words={['발견', '분석', '연결']} interval={2000} className="text-blue-600 dark:text-cyan-400" />
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
              <div className="col-span-2 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-semibold">AI-Powered Workflow</span>
                  </div>
                  <p className="text-white/70 text-sm">Intelligent automation for your business</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm">데이터 분석</span>
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm">AI 검증</span>
                      <Shield className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-80 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-white/90 font-semibold">Performance</div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">700%</div>
                  <div className="text-white/70 text-sm">Efficiency Boost</div>
                </div>
              </div>
              <div className="h-64 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-6 flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-center text-white">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3" />
                  <div className="font-semibold">Growth Analytics</div>
                </div>
              </div>
              <div className="col-span-2 h-64 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 p-6 flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold mb-2">Real-time Collaboration</div>
                  <div className="text-white/80">팀과 함께 성장하는 AI 시스템</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="py-12 border-y border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/30">
        <div className="mb-6 text-center">
          <h6 className="text-sm text-gray-600 dark:text-slate-400 uppercase tracking-wider">FlowOS 서비스 단계</h6>
        </div>
        <Marquee speed={30}>
          <div className="flex items-center gap-12">
            <div className="text-gray-700 dark:text-slate-500 text-2xl font-bold">데이터 구조 설계</div>
            <div className="text-gray-700 dark:text-slate-500 text-2xl font-bold">•</div>
            <div className="text-gray-700 dark:text-slate-500 text-2xl font-bold">AI 기반 검증 체계 구축</div>
            <div className="text-gray-700 dark:text-slate-500 text-2xl font-bold">•</div>
            <div className="text-gray-700 dark:text-slate-500 text-2xl font-bold">운영 자동화 구현</div>
            <div className="text-gray-700 dark:text-slate-500 text-2xl font-bold">•</div>
          </div>
        </Marquee>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8 text-center italic">
            &ldquo;더 많은 기업들이 그들이 추구하는 가치에만 집중하기를 바랍니다.&rdquo;
          </blockquote>
          <p className="text-xl text-gray-700 dark:text-slate-300 text-center">
            우리는 데이터를 관리하지 않습니다.<br />
            데이터를 통해 일의 흐름을 설계합니다.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              FlowOS는 이렇게 구축합니다
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">How FlowOS Builds Your Data OS</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Database}
              title="데이터 구조 설계"
              subtitle="Data Architecture"
              description="흩어진 데이터를 업무 목적에 맞게 구조화하고 연결합니다."
              iconColor="text-blue-600 dark:text-blue-400"
            />

            <FeatureCard
              icon={Shield}
              title="AI 기반 검증 체계 구축"
              subtitle="Smart Validation"
              description="Smart Gate를 통해 데이터를 자동 검증하고, 신뢰 가능한 데이터 환경을 만듭니다."
              iconColor="text-purple-600 dark:text-purple-400"
            />

            <FeatureCard
              icon={RefreshCw}
              title="운영 자동화 구현"
              subtitle="Workflow Automation"
              description="유효한 데이터를 기반으로 업무·보고·협업을 자동화합니다."
              iconColor="text-cyan-600 dark:text-cyan-400"
            />
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              We don&apos;t sell tools, we build systems.
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">
              우리는 도구를 파는 것이 아니라, 시스템을 구축합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400">
                1
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Discover (진단)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                데이터 흐름과 업무 구조를 분석합니다.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 dark:text-purple-400">
                2
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Validate (검증)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                Smart Gate로 데이터의 정확도를 점검하고 기준을 세웁니다.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-pink-600 dark:text-pink-400">
                3
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Build (구축)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                AI 기반 데이터 운영 체제를 설계·구현합니다.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-orange-600 dark:text-orange-400">
                4
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Scale (확장)</h5>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                검증된 운영 구조를 조직 전반으로 확장하고 지속 개선합니다.
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
            Ready to start your flow?
          </h2>
          <p className="text-xl text-gray-700 dark:text-slate-300 mb-4 font-semibold">
            지금 당신의 플로우를 시작하세요.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-8">
            당신의 조직 안에 AI 기반 데이터 운영 체제를 구축해 보세요.<br />
            단순한 효율을 넘어, 실행력 있는 시스템으로 변화할 시간입니다.
          </p>
          <CTAButton size="lg" href="#contact">당신의 플로우를 시작하세요 / Start your flow</CTAButton>
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">리테일 기업 A사</h3>
              <p className="text-gray-700 dark:text-slate-300">
                Smart Gate 검증으로 재고 데이터 정확도 98% 향상.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-slate-900 rounded-2xl border border-purple-200 dark:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
                3x
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">미디어 기업 B사</h3>
              <p className="text-gray-700 dark:text-slate-300">
                자동화 프로세스 구축으로 보고 효율 3배 개선.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-slate-900 rounded-2xl border border-cyan-200 dark:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
                2x
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">스타트업 C사</h3>
              <p className="text-gray-700 dark:text-slate-300">
                데이터 워크플로우 구축으로 제품 개선 속도 2배 향상.
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
                Tell us about your goal
              </h2>
              <p className="text-xl text-gray-700 dark:text-slate-300 mb-4">
                당신의 목표를 알려주세요.
              </p>
              <p className="text-lg text-gray-600 dark:text-slate-400">
                팀의 데이터 환경과 업무 흐름을 알려주시면,<br />
                FlowOS가 구축 가능한 운영 체계를 함께 설계해드립니다.
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

                <div>
                  <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">현재 과제 또는 고민 *</label>
                  <textarea
                    rows={5}
                    placeholder="현재 데이터 관리나 업무 프로세스에서 겪고 있는 어려움이나 개선하고 싶은 부분을 자유롭게 작성해주세요."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    maxLength={500}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white text-lg font-medium hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  플로우 시작하기 / Start your flow
                </button>
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
          <p className="text-gray-600 dark:text-slate-400 mb-4">
            우리는 기업이 스스로 데이터로 일할 수 있는 운영 체계를 구축합니다.
          </p>
          <a
            href="https://readdy.ai/?origin=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            Powered by Readdy
          </a>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          <span className="font-medium pr-2">Talk with Us</span>
        </button>
      </div>
    </div>
  );
}
