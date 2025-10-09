'use client';

import { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  );
}

export function BentoCard({ children, className = '', colSpan = '', rowSpan = '' }: BentoCardProps) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700
        bg-white dark:bg-gradient-to-b dark:from-slate-800/50 dark:to-slate-900/50 p-6 md:p-8
        shadow-lg dark:shadow-none
        card-lift hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
        ${colSpan} ${rowSpan} ${className}
      `}
    >
      {/* macOS-style window dots */}
      <div className="mac-dots">
        <div className="mac-dot mac-dot-red"></div>
        <div className="mac-dot mac-dot-yellow"></div>
        <div className="mac-dot mac-dot-green"></div>
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
