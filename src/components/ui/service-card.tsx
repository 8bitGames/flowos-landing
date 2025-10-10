'use client';

import { StarBorder } from './star-border';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  bgColor: 'dark-blue' | 'light-blue';
}

export function ServiceCard({ title, subtitle, description, bgColor }: ServiceCardProps) {
  const bgClasses = {
    'dark-blue': 'bg-gradient-to-br from-blue-800 to-blue-900 dark:from-blue-900 dark:to-blue-950',
    'light-blue': 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
  };

  return (
    <StarBorder as="div" color="#06b6d4" className="h-full">
      <div className={`h-full ${bgClasses[bgColor]} rounded-2xl p-8 flex flex-col justify-between min-h-[280px]`}>
        <div>
          <h3 className="text-4xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-lg mb-6 border-b border-white/20 pb-4">{subtitle}</p>
        </div>
        <p className="text-white/90 text-base leading-relaxed">{description}</p>
      </div>
    </StarBorder>
  );
}
