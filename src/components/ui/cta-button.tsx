'use client';

import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { StarBorder } from './star-border';

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
    primary: 'bg-gradient-to-r from-[#00268B] to-[#0099CC] dark:from-[#5B8DEF] dark:to-[#00D4FF] text-white hover:from-[#003BB5] hover:to-[#00B8E6] dark:hover:from-[#7BA4FF] dark:hover:to-[#1AE4FF]',
    secondary: 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-slate-700'
  };

  const baseClasses = `group rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-[0_10px_40px_rgba(0,38,139,0.15)] hover:shadow-[0_20px_60px_rgba(0,38,139,0.25)] dark:shadow-[0_0_30px_rgba(91,141,239,0.3)] dark:hover:shadow-[0_0_50px_rgba(91,141,239,0.5)] ${sizeClasses[size]} ${variantClasses[variant]}`;

  const starColor = variant === 'primary' ? '#0099CC' : '#00268B';

  if (href) {
    return (
      <StarBorder as="a" href={href} color={starColor} className={className}>
        <div className={baseClasses}>
          <span>{children}</span>
          <ArrowRight className="w-5 h-5 btn-icon-slide" />
        </div>
      </StarBorder>
    );
  }

  return (
    <StarBorder as="button" onClick={onClick} color={starColor} className={className}>
      <div className={baseClasses}>
        <span>{children}</span>
        <ArrowRight className="w-5 h-5 btn-icon-slide" />
      </div>
    </StarBorder>
  );
}
