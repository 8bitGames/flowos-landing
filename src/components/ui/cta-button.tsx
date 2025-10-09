'use client';

import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function CTAButton({
  children,
  onClick,
  href,
  size = 'md',
  variant = 'primary',
  className = ''
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white hover:shadow-2xl hover:shadow-blue-500/50',
    secondary: 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400'
  };

  const baseClasses = `group rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        <span>{children}</span>
        <ArrowRight className="w-5 h-5 btn-icon-slide" />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      <span>{children}</span>
      <ArrowRight className="w-5 h-5 btn-icon-slide" />
    </button>
  );
}
