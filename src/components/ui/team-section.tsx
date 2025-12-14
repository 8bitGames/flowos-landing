"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Translations } from "@/locales/types";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image?: string;
}

interface TeamSectionProps {
  t: Translations;
}

export function TeamSection({ t }: TeamSectionProps) {
  // Add CEO image to the first member from translations
  const teamMembers: TeamMember[] = t.teamSection.members.map((member, index) => ({
    ...member,
    image: index === 0 ? "/team/ahn.jpg" : undefined,
  }));
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
            {t.teamSection.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.teamSection.subtitle}
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
                  <span className="text-sm font-bold text-[#00268B] dark:text-[#5B8DEF]">{t.teamSection.ceoBadge}</span>
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
