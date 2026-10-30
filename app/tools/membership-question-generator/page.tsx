import type { Metadata } from 'next';
import Link from 'next/link';
import QuestionGenerator from '@/components/tools/QuestionGenerator';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/membership-question-generator/' },
  title: 'Facebook Group Membership Question Generator (Free)',
  description:
    'Generate three Facebook group membership questions in seconds: one to filter, one to learn their goal, and an optional email question with clear consent. Free, no sign-up.',
};

export default function QuestionGeneratorPage() {
  return (
    <section className="px-4 pb-24 pt-32">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Facebook Group Membership Question Generator',
          url: `${SITE_URL}/tools/membership-question-generator/`,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">Free tool</p>
        <h1 className="font-sora text-4xl font-bold tracking-tight md:text-5xl">Membership question generator</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          Facebook lets you ask up to three questions when people request to join. Get a balanced set in seconds: one to filter,
          one to learn their goal, and an optional email question with clear consent.
        </p>
        <div className="mt-10">
          <QuestionGenerator />
        </div>
        <div className="article mx-auto mt-14 max-w-3xl">
          <h2>Why this structure works</h2>
          <ul>
            <li><strong>The filter question</strong> keeps spam and poor fits out.</li>
            <li><strong>The goal question</strong> tells you how to welcome each person.</li>
            <li><strong>The email question</strong> starts a list you own, but only with people who said yes.</li>
          </ul>
          <p>
            Want more options? Browse <Link href="/blog/facebook-group-membership-questions/">60 membership question examples by niche</Link>,
            and read the <Link href="/blog/facebook-group-email-consent/">consent-first guide to emailing members</Link>. GroupMailBox saves every
            answer to Google Sheets automatically and can follow up with the people who shared their email.
          </p>
        </div>
      </div>
    </section>
  );
}
