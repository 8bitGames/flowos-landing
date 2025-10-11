'use client';

import { ReactNode } from 'react';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-[#00268B] via-[#0047AB] to-[#0099CC] dark:from-[#5B8DEF] dark:via-[#7BA4FF] dark:to-[#00D4FF] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] ${className}`}>
      {children}
    </span>
  );
}
