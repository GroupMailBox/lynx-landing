'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-blue to-[#3A75E0] text-white font-bold shadow-[0_0_0_0_rgba(79,140,255,0)] hover:shadow-[0_0_24px_4px_rgba(79,140,255,0.25)] active:scale-[0.97] transition-all duration-200',
  secondary:
    'bg-navy-lighter text-text-primary border border-white/[0.06] hover:bg-white/[0.08] hover:border-accent-blue/20',
  outline:
    'bg-transparent text-accent-blue border border-accent-blue/30 hover:bg-accent-blue/10 hover:border-accent-blue/50',
};

/* Consistent radius system: 4px for buttons */
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-[4px]',
  md: 'px-6 py-3 text-base rounded-[4px]',
  lg: 'px-8 py-4 text-lg rounded-[4px]',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-45 cursor-not-allowed pointer-events-none',
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
