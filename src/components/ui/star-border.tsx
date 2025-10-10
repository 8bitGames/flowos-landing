'use client';

import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

interface StarBorderProps<T extends ElementType> {
  as?: T;
  color?: string;
  speed?: string;
  className?: string;
  children: ReactNode;
}

export function StarBorder<T extends ElementType = 'button'>({
  as,
  className = '',
  color = '#06b6d4',
  speed = '6s',
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || 'button';

  return (
    <Component
      className={`relative inline-block p-[1px] overflow-hidden rounded-xl ${className}`}
      {...props}
    >
      {/* Bottom star animation */}
      <div
        className="absolute w-[300%] h-[50%] rounded-full z-0"
        style={{
          bottom: '-11px',
          right: '-250%',
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-bottom ${speed} linear infinite`,
          opacity: 0.8,
        }}
      />
      {/* Top star animation */}
      <div
        className="absolute w-[300%] h-[50%] rounded-full z-0"
        style={{
          top: '-10px',
          left: '-250%',
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-top ${speed} linear infinite`,
          opacity: 0.8,
        }}
      />
      {/* Content */}
      <div className="relative z-10 rounded-xl">
        {children}
      </div>
    </Component>
  );
}
