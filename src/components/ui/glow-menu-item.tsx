'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface GlowMenuItemProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export function GlowMenuItem({ href, children, target, rel }: GlowMenuItemProps) {
  const { theme } = useTheme();

  // Animation variants for the front text
  const itemVariants = {
    initial: { rotateX: 0, opacity: 1 },
    hover: { rotateX: -90, opacity: 0 }
  };

  // Animation variants for the back text
  const backVariants = {
    initial: { rotateX: 90, opacity: 0 },
    hover: { rotateX: 0, opacity: 1 }
  };

  // Animation variants for the glow effect
  const glowVariants = {
    initial: { scale: 0.8, opacity: 0 },
    hover: { scale: 1.2, opacity: theme === 'dark' ? 0.6 : 0.4 }
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className="relative inline-block cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      initial="initial"
      whileHover="hover"
    >
      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
        {/* Glow effect background */}
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 -z-10 rounded-lg blur-xl"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.6) 50%, rgba(168, 85, 247, 0.4) 100%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(6, 182, 212, 0.4) 50%, rgba(168, 85, 247, 0.3) 100%)'
          }}
        />

        {/* Front text */}
        <motion.div
          variants={itemVariants}
          className="text-sm font-medium text-gray-600 dark:text-slate-300 px-3 py-2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </motion.div>

        {/* Back text */}
        <motion.div
          variants={backVariants}
          className="absolute inset-0 flex items-center justify-center text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent px-3 py-2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </motion.div>
      </div>
    </motion.a>
  );
}
