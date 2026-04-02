import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'amber' | 'yellow' | 'red' | 'blue' | 'green';
  className?: string;
}

const variantClasses = {
  default: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  amber: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  yellow: 'bg-warning/10 text-warning border-warning/20',
  red: 'bg-danger/10 text-danger border-danger/20',
  blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  green: 'bg-accent-green/10 text-accent-green border-accent-green/20',
};

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
