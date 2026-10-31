import type { Metadata } from 'next';
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element -- static export with unoptimized images */
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid';
import IntegrationLogo from '@/components/integrations/IntegrationLogo';
import { INTEGRATIONS } from '@/lib/integrations';
import PageHero from '@/components/ui/PageHero';
import { Carousel3D } from '@/components/visuals/Scene3D';

const LIVE = INTEGRATIONS.filter((i) => i.status === 'live');

export const metadata: Metadata = {
  alternates: { canonical: '/integrations/' },
  title: 'Integrations: Google Sheets, Gmail and More',
  description:
    'GroupMailBox connects your Facebook group to Google Sheets and Gmail today. See every integration, and request the email-marketing and CRM tools you want next.',
};

export default function IntegrationsPage() {
  return (
    <>
    <PageHero
      eyebrow="Integrations"
      title={<>Your group, connected to <span className="text-shimmer">the tools you use</span></>}
      subtitle="Capture members into Google Sheets and follow up from Gmail today. Tell us which tool you want next: requests decide what we build."
      visual={
        <>
          <div className="hidden md:block">
            <Carousel3D
              radius={320}
              height={300}
              center={<img src="/logo.png" alt="GroupMailBox" width={112} height={112} className="h-28 w-28 rounded-3xl shadow-[0_30px_80px_-20px_rgba(37,56,120,0.55)]" />}
              items={LIVE.map((i) => (
                <div key={i.name} className="flex w-44 items-center gap-3 rounded-2xl border border-black/[0.08] bg-white px-4 py-3 shadow-card">
                  <IntegrationLogo i={i} size="h-10 w-10" />
                  <span className="font-sora text-sm font-bold">{i.name}</span>
                </div>
              ))}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:hidden">
            {LIVE.map((i) => (
              <span key={i.name} className="rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-sm font-semibold shadow-card">{i.name}</span>
            ))}
          </div>
        </>
      }
    />
    <section className="px-4 pb-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-sora text-3xl font-bold">All integrations</h2>
        <div className="mt-10">
          <IntegrationsGrid />
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center text-text-secondary">
          Already use an email marketing tool? Export your sheet as CSV and import it anywhere, or read{' '}
          <Link href="/blog/export-facebook-group-members/" className="text-accent-blue underline">how to export group members</Link>.
        </p>
      </div>
    </section>
    </>
  );
}
