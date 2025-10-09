'use client';

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
  iconColor?: string;
  children?: ReactNode;
}

export function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  description,
  className = '',
  iconColor = 'text-blue-600 dark:text-blue-400',
  children
}: FeatureCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      <div className="relative z-10">
        <div className={`mb-4 ${iconColor}`}>
          <Icon className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">{subtitle}</p>
        )}
        <p className="text-gray-700 dark:text-slate-300">{description}</p>
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
