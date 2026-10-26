import type { Metadata } from 'next';
import Link from 'next/link';
import CadenceCalculator from '@/components/tools/CadenceCalculator';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/follow-up-cadence-calculator/' },
  title: 'Follow-Up Email Cadence Calculator (Free Tool)',
  description:
    'Plan a welcome email and follow-ups with real dates. Pick how many follow-ups and how far apart, skip weekends, and get a schedule you can use in Gmail.',
};

export default function CadenceCalculatorPage() {
  return (
    <section className="px-4 pb-24 pt-32">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Follow-Up Email Cadence Calculator',
          url: `${SITE_URL}/tools/follow-up-cadence-calculator/`,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">Free tool</p>
        <h1 className="font-sora text-4xl font-bold tracking-tight md:text-5xl">Follow-up email cadence calculator</h1>
        <p className="mt-4 text-lg text-text-secondary">
          Plan your welcome email and follow-ups with real dates. Nothing is sent or stored: it all runs in your browser.
        </p>
        <div className="mt-10">
          <CadenceCalculator />
        </div>
        <div className="article mt-14">
          <h2>How to pick a cadence</h2>
          <ul>
            <li><strong>Two or three follow-ups</strong> is plenty for new members. More than that starts to feel like pressure.</li>
            <li><strong>Space them out</strong>: a few days before the first nudge, then longer gaps.</li>
            <li><strong>Reply in the same thread</strong> (“Re: …”), so it reads as a conversation, not a campaign.</li>
            <li><strong>Stop on reply</strong>: once someone answers, talk to them personally.</li>
          </ul>
          <p>
            Need words for the emails? Copy our <Link href="/blog/facebook-group-welcome-message-templates/">welcome message templates</Link> or
            read <Link href="/blog/email-facebook-group-members/">how to email your Facebook group members</Link>. GroupMailBox can send this
            sequence for you from Gmail and stop it automatically when someone replies.
          </p>
        </div>
      </div>
    </section>
  );
}
