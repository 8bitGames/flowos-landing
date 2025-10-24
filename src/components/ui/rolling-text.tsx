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

  // Find the longest word to maintain consistent width
  const longestWord = useMemo(() => {
    return wordList.reduce((longest, current) =>
      current.length > longest.length ? current : longest
    , wordList[0]);
  }, [wordList]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % wordList.length);
    }, interval);
    return () => clearTimeout(timeoutId);
  }, [currentIndex, wordList.length, interval]);

  return (
    <span className={`relative inline-flex justify-center overflow-visible h-[1.2em] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="absolute font-bold whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {wordList[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain space for the longest word */}
      <span className="invisible font-bold whitespace-nowrap">{longestWord}</span>
    </span>
  );
}
