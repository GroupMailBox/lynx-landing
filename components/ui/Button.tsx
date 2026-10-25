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
    'bg-accent-blue text-white shadow-[0_8px_24px_-8px_rgba(47,107,242,0.55)] hover:bg-teal-dim hover:-translate-y-px active:translate-y-0',
  secondary:
    'bg-white text-text-primary border border-black/[0.10] shadow-[0_1px_2px_rgba(14,18,34,0.05)] hover:border-black/20 hover:bg-navy-light',
  outline:
    'bg-transparent text-accent-blue border border-accent-blue/30 hover:bg-accent-blue/[0.06] hover:border-accent-blue/50',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-[15px] rounded-xl',
  lg: 'px-6 py-3.5 text-base rounded-xl',
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
