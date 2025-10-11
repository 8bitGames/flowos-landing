'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AnimatedCTAText() {
  const [phase, setPhase] = useState<'increase' | 'decrease'>('increase');
  const [number, setNumber] = useState(10);
  const [isHolding, setIsHolding] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  // 숫자 증가 애니메이션 (10→30) with easing
  useEffect(() => {
    if (isHolding) return;

    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const duration = 2000; // 2초

      if (elapsed < duration) {
        const progress = elapsed / duration;
        // linear: 일정한 속도로 증가
        const current = 10 + 20 * progress; // 10 + (30-10) * progress
        const newNumber = Math.floor(current);
        setNumber(newNumber);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setNumber(30);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHolding]);

  // 30 도달 시 3초간 홀드 후 페이즈 전환
  useEffect(() => {
    if (number === 30 && !isHolding) {
      setIsHolding(true);
      const holdTimer = setTimeout(() => {
        setIsHolding(false);
        setNumber(10);
        startTimeRef.current = Date.now(); // 타이머 리셋
        setPhase((prev) => (prev === 'increase' ? 'decrease' : 'increase'));
      }, 3000);

      return () => clearTimeout(holdTimer);
    }
  }, [number]); // isHolding 제거: setIsHolding(true) 호출로 인한 cleanup 방지

  return (
    <span className="sm:whitespace-nowrap text-center block">
      <AnimatePresence mode="wait">
        <motion.span
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="block"
        >
          <span className="sm:inline">지금 기업의 {phase === 'increase' ? '성과를' : '비용을'}</span>
          <br className="sm:hidden" />
          <span className="inline-block w-14 text-center">
            {number}%
          </span> {phase === 'increase' ? '성장시키는 방법' : '낮추는 방법'}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
