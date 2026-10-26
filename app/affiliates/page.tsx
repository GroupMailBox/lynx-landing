import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: { canonical: '/affiliates/' },
  title: 'Affiliate Program: Earn 40% Recurring',
  description:
    'Recommend GroupMailBox to Facebook group admins and earn 40% of every payment for 12 months. Built for coaches, course creators, agencies and community educators.',
};

const STEPS = [
  { n: '1', t: 'Apply', b: 'Tell us about your audience: your group, channel, newsletter or clients.' },
  { n: '2', t: 'Share your link', b: 'Recommend GroupMailBox in your content, trainings or client setups.' },
  { n: '3', t: 'Earn every month', b: '40% of each payment from customers you refer, for their first 12 months.' },
];

const FIT = [
  'Coaches and educators who teach Facebook group growth or monetization',
  'Agencies and freelancers who set up and manage groups for clients',
  'Course creators and community builders with an audience of group admins',
  'Bloggers and YouTubers who review marketing tools',
];

export default function AffiliatesPage() {
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Affiliate application')}&body=${encodeURIComponent('Name:\nWebsite / group / channel:\nAudience size and who they are:\nHow you plan to recommend GroupMailBox:\n')}`;
  return (
    <section className="px-4 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">Affiliate program</p>
          <h1 className="font-sora text-4xl font-bold tracking-tight md:text-6xl">
            Earn <span className="text-shimmer">40% recurring</span> for recommending GroupMailBox
          </h1>
          <p className="mt-5 text-lg text-text-secondary">
            Your audience runs Facebook groups. GroupMailBox helps them capture every new member, keep the list in Google Sheets and
            follow up from Gmail. You earn 40% of every payment for 12 months.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={mailto} size="lg" external>Apply to become an affiliate</Button>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-card">
              <span className="font-sora text-4xl font-bold text-accent-blue/20">{s.n}</span>
              <p className="mt-2 font-sora text-lg font-bold">{s.t}</p>
              <p className="mt-2 text-text-secondary">{s.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-sora text-2xl font-bold">Who it is for</h2>
            <ul className="mt-5 space-y-3 text-text-secondary">
              {FIT.map((f) => (
                <li key={f} className="flex gap-3"><span className="text-accent-green" aria-hidden>✓</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-navy-light p-7">
            <h2 className="font-sora text-2xl font-bold">Why it is easy to recommend</h2>
            <ul className="mt-5 space-y-3 text-text-secondary">
              <li>A free plan, so your audience can try it with no card.</li>
              <li>It follows up from the admin&apos;s own Gmail and stops on reply, where other group tools hand leads to a separate email platform.</li>
              <li>A clear before and after: no more copy-pasting member answers.</li>
            </ul>
            <p className="mt-6 text-sm text-text-muted">
              Commission: 40% of payments from referred customers for their first 12 months. Full terms are shared when your
              application is approved.
            </p>
          </div>
        </div>

        <p className="mt-16 text-center text-text-secondary">
          Questions? Email <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue underline">{SUPPORT_EMAIL}</a>, or see{' '}
          <Link href="/pricing/" className="text-accent-blue underline">pricing</Link>.
        </p>
      </div>
    </section>
  );
}
