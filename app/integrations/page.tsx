import type { Metadata } from 'next';
import Link from 'next/link';
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid';

export const metadata: Metadata = {
  alternates: { canonical: '/integrations/' },
  title: 'Integrations: Google Sheets, Gmail and More',
  description:
    'GroupMailBox connects your Facebook group to Google Sheets and Gmail today. See every integration, and request the email-marketing and CRM tools you want next.',
};

export default function IntegrationsPage() {
  return (
    <section className="px-4 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">Integrations</p>
          <h1 className="font-sora text-4xl font-bold tracking-tight md:text-5xl">Your group, connected to the tools you use</h1>
          <p className="mt-4 text-lg text-text-secondary">
            Capture members into Google Sheets and follow up from Gmail today. Tell us which tool you want next: requests decide
            what we build.
          </p>
        </div>
        <div className="mt-12">
          <IntegrationsGrid />
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center text-text-secondary">
          Already use an email marketing tool? Export your sheet as CSV and import it anywhere, or read{' '}
          <Link href="/blog/export-facebook-group-members/" className="text-accent-blue underline">how to export group members</Link>.
        </p>
      </div>
    </section>
  );
}
