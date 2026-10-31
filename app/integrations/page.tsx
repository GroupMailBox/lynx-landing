import type { Metadata } from 'next';
import Link from 'next/link';
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid';
import { PanelShot, SheetVisual, ThreadVisual } from '@/components/visuals/ProductVisuals';

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
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/[0.08] bg-navy-light/60 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F9D58]">Live · Google Sheets</p>
            <h2 className="mt-2 font-sora text-2xl font-bold">Members land in your own sheet</h2>
            <p className="mt-2 text-text-secondary">
              Connect once, pick a sheet, and every request arrives as a row with a column per answer. We can open only that file.
            </p>
            <div className="mt-6 space-y-4">
              <PanelShot src="/features/sheets-connected.png" alt="Side panel showing Google Sheets connected with a link to the linked sheet" width={800} height={250} />
              <SheetVisual />
            </div>
          </div>
          <div className="rounded-3xl border border-black/[0.08] bg-navy-light/60 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EA4335]">Live · Gmail and Google Workspace</p>
            <h2 className="mt-2 font-sora text-2xl font-bold">Follow-ups from your own inbox</h2>
            <p className="mt-2 text-text-secondary">
              Welcome emails and follow-ups go from your Gmail in one thread, and stop the moment someone replies.
            </p>
            <div className="mt-6 space-y-4">
              <PanelShot src="/features/gmail-connected.png" alt="Campaigns tab showing Gmail connected, the daily send quota and follow-up templates" width={800} height={800} />
              <ThreadVisual />
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-text-muted">Screens show the real extension with sample data. Names and emails are fictional.</p>

        <h2 className="mt-20 text-center font-sora text-3xl font-bold">All integrations</h2>
        <div className="mt-10">
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
