'use client';

import { ReactNode } from 'react';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] ${className}`}>
      {children}
    </span>
  );
}
