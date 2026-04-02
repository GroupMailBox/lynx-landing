'use client';

import { cn } from '@/lib/utils';

type CardVariant = 'glass' | 'transparent' | 'accent-top' | 'highlight';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
  /** Visual variant to break card monotony */
  variant?: CardVariant;
  /** Enable 3D tilt micro-interaction on hover */
  tilt?: boolean;
}

const variantClasses: Record<CardVariant, string> = {
  glass:
    'bg-navy-light/60 backdrop-blur-xl border border-white/[0.06]',
  transparent:
    'bg-transparent border border-white/[0.04]',
  'accent-top':
    'bg-navy-light/40 backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-accent-blue/40',
  highlight:
    'bg-gradient-to-br from-navy-light/80 to-navy-lighter/40 backdrop-blur-xl border border-accent-blue/10',
};

export default function Card({
  children,
  className,
  glow,
  hover = true,
  variant = 'glass',
  tilt = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-[12px] p-6 transition-all duration-300',
        variantClasses[variant],
        hover && 'hover:border-accent-blue/20 hover:shadow-[0_0_30px_rgba(79,140,255,0.1)]',
        glow && 'border-accent-blue/20 shadow-[0_0_40px_rgba(79,140,255,0.15)]',
        tilt && 'card-tilt',
        className
      )}
    >
      {children}
    </div>
  );
}
