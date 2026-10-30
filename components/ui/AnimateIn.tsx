'use client';

import { motion, useReducedMotion } from 'framer-motion';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  /** New: explicit animation type override. Falls back to direction-based if not set. */
  animation?: AnimationType;
}

// Motion only, never opacity 0: content stays visible before hydration, without JS,
// and to crawlers. A small slide is enough to feel alive.
const directionOffset = {
  up: { x: 0, y: 16 },
  down: { x: 0, y: -16 },
  left: { x: 16, y: 0 },
  right: { x: -16, y: 0 },
};

const animationVariants: Record<AnimationType, { initial: Record<string, number>; animate: Record<string, number> }> = {
  'fade-up': { initial: { y: 16 }, animate: { y: 0 } },
  'fade-down': { initial: { y: -16 }, animate: { y: 0 } },
  'fade-left': { initial: { x: 16 }, animate: { x: 0 } },
  'fade-right': { initial: { x: -16 }, animate: { x: 0 } },
  'scale': { initial: { scale: 0.98 }, animate: { scale: 1 } },
  'none': { initial: { opacity: 1 }, animate: { opacity: 1 } },
};

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  animation,
}: AnimateInProps) {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Use explicit animation type if provided, otherwise fall back to direction-based
  if (animation) {
    const variant = animationVariants[animation];
    return (
      <motion.div
        initial={variant.initial}
        whileInView={variant.animate}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{ x: offset.x, y: offset.y }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
