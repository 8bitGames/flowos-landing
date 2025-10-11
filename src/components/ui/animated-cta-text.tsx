'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AnimatedCTAText() {
  const [phase, setPhase] = useState<'increase' | 'decrease'>('increase');
  const [number, setNumber] = useState(10);
  const [isHolding, setIsHolding] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  // 숫자 증가 애니메이션 (10→30) with easing
  useEffect(() => {
    if (isHolding) return;

    if (startTime === null) {
      setStartTime(Date.now());
    }

    if (number < 30) {
      const timer = requestAnimationFrame(() => {
        const elapsed = Date.now() - (startTime || Date.now());
        const duration = 2000; // 2초
        const progress = Math.min(elapsed / duration, 1);

        // easeOutCubic: 끝으로 갈수록 서서히 느려지는 효과
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const current = 10 + 20 * easeProgress; // 10 + (30-10) * easeProgress

        const newNumber = Math.floor(current);
        if (newNumber !== number && newNumber <= 30) {
          setNumber(newNumber);
        }
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [number, isHolding, startTime]);

  // 30 도달 시 3초간 홀드 후 페이즈 전환
  useEffect(() => {
    if (number === 30 && !isHolding) {
      setIsHolding(true);
      const holdTimer = setTimeout(() => {
        setIsHolding(false);
        setNumber(10);
        setStartTime(null); // 타이머 리셋
        setPhase((prev) => (prev === 'increase' ? 'decrease' : 'increase'));
      }, 3000);

      return () => clearTimeout(holdTimer);
    }
  }, [number, isHolding]);

  // 숫자 크기 계산: 10일 때 1.0, 30일 때 1.3
  const scale = 1 + (number - 10) * 0.015;

  return (
    <span className="inline-block text-center sm:whitespace-nowrap">
      <AnimatePresence mode="wait">
        <motion.span
          key={phase}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <span className="sm:inline">기업의 {phase === 'increase' ? '성과를' : '비용을'}</span>
          <br className="sm:hidden" />
          <motion.span
            className="inline-block w-14 text-center"
            animate={{ scale }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            {number}%
          </motion.span> {phase === 'increase' ? '늘려보세요' : '낮춰보세요'}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
