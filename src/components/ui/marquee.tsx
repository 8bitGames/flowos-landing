'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div
        className={`flex gap-8 animate-marquee ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
