'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RollingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RollingText({ words, interval = 2000, className = '' }: RollingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wordList = useMemo(() => words, [words]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % wordList.length);
    }, interval);
    return () => clearTimeout(timeoutId);
  }, [currentIndex, wordList.length, interval]);

  return (
    <span className={`relative inline-flex justify-center overflow-hidden h-[1.2em] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="absolute font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {wordList[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain space */}
      <span className="invisible font-bold">{wordList[0]}</span>
    </span>
  );
}
