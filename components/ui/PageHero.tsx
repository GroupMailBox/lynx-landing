import type { ReactNode } from 'react';

// The home page's hero look (aurora glow, faint grid, large gradient headline) for inner pages.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  visual,
  decor,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  decor?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 md:pt-40">
      {/* Background fades out at the hero's bottom edge, so it never ends in a hard line. */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" aria-hidden>
        <div className="aurora" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(14,18,34,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,18,34,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
          aria-hidden
        />
      </div>
      {decor}
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-5 inline-flex items-center rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue shadow-card">
          {eyebrow}
        </p>
        <h1 className="font-sora text-[40px] font-bold leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">{subtitle}</p>
        {actions && <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{actions}</div>}
      </div>
      {visual && <div className="relative mx-auto mt-14 max-w-6xl">{visual}</div>}
    </section>
  );
}
