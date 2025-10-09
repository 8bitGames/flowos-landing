'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AnimatedCTAText() {
  const [phase, setPhase] = useState<'increase' | 'decrease'>('increase');
  const [number, setNumber] = useState(10);
  const [isHolding, setIsHolding] = useState(false);

  // 숫자 증가 애니메이션 (10→30)
  useEffect(() => {
    if (!isHolding && number < 30) {
      const timer = setTimeout(() => {
        setNumber((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [number, isHolding]);

  // 30 도달 시 3초간 홀드 후 페이즈 전환
  useEffect(() => {
    if (number === 30 && !isHolding) {
      setIsHolding(true);
      const holdTimer = setTimeout(() => {
        setIsHolding(false);
        setNumber(10);
        setPhase((prev) => (prev === 'increase' ? 'decrease' : 'increase'));
      }, 3000);

      // 이 timer는 cleanup하지 않음 - 반드시 완료되어야 함
      return () => {}; // no-op cleanup
    }
  }, [number]);

  // 숫자 크기 계산: 10일 때 1.0, 30일 때 1.3
  const scale = 1 + (number - 10) * 0.015;

  return (
    <span className="inline-block w-full text-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={phase}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          기업의 {phase === 'increase' ? '성과를' : '비용을'}{' '}
          <motion.span
            className="inline-block w-14 text-center"
            animate={{ scale }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            {number}%
          </motion.span>{' '}
          {phase === 'increase' ? '늘려보세요' : '낮춰보세요'}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
