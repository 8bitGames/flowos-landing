'use client';

import { useEffect, useState, useRef } from 'react';

interface CountingNumberProps {
  start: number;
  end: number;
  duration?: number; // 애니메이션 지속 시간 (ms)
  suffix?: string;
  repeatInterval?: number; // 반복 간격 (ms)
}

export function CountingNumber({
  start,
  end,
  duration = 2000,
  suffix = '',
  repeatInterval = 10000
}: CountingNumberProps) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const animate = () => {
      const range = end - start;
      const increment = range / (duration / 16); // 60fps 기준
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return timer;
    };

    // 첫 번째 애니메이션 실행
    const firstTimer = animate();

    // 반복 애니메이션 설정
    const repeatTimer = setInterval(() => {
      setCount(start); // 시작 값으로 리셋
      setTimeout(() => {
        animate();
      }, 100);
    }, repeatInterval);

    animationRef.current = repeatTimer;

    return () => {
      clearInterval(firstTimer);
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [hasStarted, start, end, duration, repeatInterval]);

  // 숫자가 커질수록 크기도 증가 (10 -> 30: 1.0배 -> 1.3배)
  const progress = (count - start) / (end - start);
  const scale = 1 + progress * 0.3;

  return (
    <div ref={elementRef} className="font-bold text-white leading-none">
      <span
        className="text-6xl inline-block transition-transform duration-100"
        style={{ transform: `scale(${scale})` }}
      >
        {count}{suffix}
      </span>
    </div>
  );
}
