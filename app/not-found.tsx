import Link from 'next/link';
import Button from '@/components/ui/Button';
import Logo from '@/components/layout/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <Logo size={64} />

      <h1 className="font-sora font-extrabold text-6xl md:text-8xl mt-8 mb-4">
        <span className="text-gradient-teal">404</span>
      </h1>

      <h2 className="font-sora font-bold text-2xl md:text-3xl mb-4">
        Page Not Found
      </h2>

      <p className="text-text-secondary text-lg mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button href="/" size="md">
          Go Home
        </Button>
        <Button href="/features" variant="secondary" size="md">
          View Features
        </Button>
        <Button href="/support" variant="outline" size="md">
          Get Support
        </Button>
      </div>

      <div className="mt-12 flex gap-6 text-sm">
        <Link href="/pricing" className="text-text-muted hover:text-accent-blue transition-colors">
          Pricing
        </Link>
        <Link href="/blog" className="text-text-muted hover:text-accent-blue transition-colors">
          Blog
        </Link>
        <Link href="/about" className="text-text-muted hover:text-accent-blue transition-colors">
          About
        </Link>
      </div>
    </div>
  );
}
