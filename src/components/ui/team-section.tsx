"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "안희창",
    role: "대표이사 (CEO)",
    bio: "문제의 본질을 정의하고 가설을 검증하며 데이터 기반의 최적화를 이뤄냅니다. AI 워크플로우 설계를 통해 기업이 핵심 가치에 집중하며 30% 더 스마트하게 일할 수 있는 환경을 만듭니다.",
    credentials: ["제일기획", "WE-AR COO"],
    image: "/team/ahn.jpg",
  },
  {
    name: "서재필",
    role: "최고기술책임자 (CTO)",
    bio: "다양한 산업 분야의 기술 리더십을 바탕으로 FlowOS의 핵심 아키텍처를 총괄합니다. 안정적이면서도 유연한 확장이 가능한 AI 워크플로우 시스템을 구축하여 기술적 완성도를 높입니다.",
    credentials: ["VACorporation CTO", "Marvrus 부 CTO"],
  },
  {
    name: "유경진",
    role: "AI 솔루션 총괄 (Head of AI)",
    bio: "글로벌 수준의 엔지니어링 역량을 바탕으로 AI 솔루션을 현실화합니다. 검증된 최신 AI 기술을 비즈니스 현장에 최적화하여 고객의 운영 효율을 극대화하고 즉각적인 ROI를 창출합니다.",
    credentials: ["포르쉐 엔지니어링", "AI 강사"],
  },
  {
    name: "크리스 필러",
    role: "최고전략책임자 (CSO)",
    bio: "복잡한 운영상의 난제를 분석하여 최적의 솔루션 로드맵을 설계합니다. 이론에 머물지 않고 현장에 즉시 적용 가능한 실용적인 접근으로 실질적인 비즈니스 성과를 견인합니다.",
    credentials: ["베인앤컴퍼니", "와튼 MBA"],
  },
  {
    name: "폴 메웨스",
    role: "최고제품책임자 (CPO)",
    bio: "사용자가 진정으로 필요로 하는 기술을 제품으로 구현합니다. 고도화된 AI 기술을 직관적인 도구로 재해석하여, 도입 즉시 가치를 체감할 수 있는 최적의 사용자 경험을 제공합니다.",
    credentials: ["세일즈포스", "와튼 MBA"],
  },
];

export function TeamSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] mb-4">
            팀 소개
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            AI 기술과 비즈니스 현장의 교차점에서 혁신을 이끄는 전문가 그룹
          </p>
        </motion.div>

        {/* CEO Card - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF]/20 dark:to-[#00D4FF]/20 p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* CEO Photo */}
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <Image
                    src={teamMembers[0].image!}
                    alt={teamMembers[0].name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-900 rounded-full px-4 py-1 shadow-lg">
                  <span className="text-sm font-bold text-[#00268B] dark:text-[#5B8DEF]">대표</span>
                </div>
              </div>

              {/* CEO Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="text-lg text-white/80 mb-4">{teamMembers[0].role}</p>
                <p className="text-white/90 leading-relaxed mb-6 max-w-xl">
                  {teamMembers[0].bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {teamMembers[0].credentials.map((credential, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.slice(1).map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl p-6",
          "bg-white dark:bg-slate-800/50",
          "border border-gray-200 dark:border-slate-700",
          "hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        )}
      >
        {/* Gradient accent on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00268B]/5 to-[#0099CC]/5 dark:from-[#5B8DEF]/10 dark:to-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Avatar placeholder with initials */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl font-bold text-white">
              {member.name.charAt(0)}
            </span>
          </div>

          {/* Name & Role */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-[#00268B] dark:text-[#5B8DEF] mb-3">
            {member.role}
          </p>

          {/* Bio */}
          <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
            {member.bio}
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-1">
            {member.credentials.slice(0, 2).map((credential, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-gray-100 dark:bg-slate-700 rounded text-xs text-gray-600 dark:text-slate-300"
              >
                {credential}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
