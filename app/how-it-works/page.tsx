/* eslint-disable @next/next/no-img-element -- static export with unoptimized images */
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CHROME_STORE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: { canonical: '/how-it-works/' },
  title: 'How It Works: Capture, Sheet, Approve, Follow Up',
  description:
    'See GroupMailBox step by step: sign in with Google, capture Facebook group member requests and answers, push them to Google Sheets, auto-approve safely, and follow up from Gmail until people reply.',
};

type Step = {
  step: string;
  title: string;
  description: string;
  details: string[];
  visual: React.ReactNode;
};

// Real side panel screenshots, taken with fictional sample data.
function PanelShot({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="rounded-[20px] border border-black/[0.08] bg-white p-2 shadow-[0_24px_60px_-20px_rgba(37,56,120,0.35)]">
        <div className="flex items-center gap-1.5 px-2 pb-2 pt-1" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="ml-2 text-[11px] font-medium text-text-muted">Chrome side panel</span>
        </div>
        <img src={src} alt={alt} width={width} height={height} loading="lazy" className="block h-auto w-full rounded-[14px]" />
      </div>
    </div>
  );
}

function Answer({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] font-medium text-text-muted">{q}</div>
      <div className="text-[13px] text-text-primary">{a}</div>
    </div>
  );
}

// Illustration of a join request being captured. Generic, not a copy of Facebook's interface.
function CaptureVisual() {
  return (
    <div className="mx-auto w-full max-w-[440px] space-y-3">
      <div className="rounded-2xl border border-black/[0.08] bg-white p-4 shadow-card">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#6f9bff] to-[#a78bfa] text-sm font-bold text-white" aria-hidden>
            JL
          </span>
          <div>
            <div className="text-sm font-semibold text-text-primary">Jordan Lee</div>
            <div className="text-[11px] text-text-muted">Requested to join · 2 min ago</div>
          </div>
          <span className="ml-auto rounded-full bg-accent-green/10 px-2 py-0.5 text-[11px] font-semibold text-accent-green">Captured</span>
        </div>
        <div className="mt-3 space-y-2 border-t border-black/[0.06] pt-3">
          <Answer q="What is your biggest challenge right now?" a="Getting my first 10 coaching clients" />
          <Answer q="Want our free starter guide? Share your email (optional)" a={<>Sure, it&apos;s <span className="rounded bg-accent-blue/10 px-1 font-semibold text-accent-blue">jordan@example.com</span>.</>} />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-dashed border-accent-blue/30 bg-accent-blue/[0.04] px-4 py-2.5 text-[12px] text-text-secondary">
        <svg className="h-4 w-4 shrink-0 text-accent-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Email found inside the sentence and saved with every answer.
      </div>
    </div>
  );
}

function SheetVisual() {
  const rows = [
    ['Jordan Lee', 'jordan@example.com', 'First 10 coaching clients'],
    ['Priya Shah', 'priya@example.com', 'Launching a course'],
    ['Sam Ortiz', '', 'Just browsing'],
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-black/[0.08] bg-white text-[12px] shadow-card">
      <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#f3f8f4] px-3 py-2 font-semibold text-[#1e7a45]">
        <span className="grid h-4 w-4 place-items-center rounded-sm bg-[#1e7a45] text-[9px] text-white" aria-hidden>▦</span>
        Group leads (Google Sheet)
      </div>
      <table className="w-full whitespace-nowrap">
        <thead className="text-left text-text-muted">
          <tr>
            <th className="px-3 py-1.5 font-medium">Name</th>
            <th className="px-3 py-1.5 font-medium">Email</th>
            <th className="hidden px-3 py-1.5 font-medium sm:table-cell">Answer</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-black/[0.05] text-text-primary">
              <td className="px-3 py-1.5">{r[0]}</td>
              <td className="px-3 py-1.5 text-text-secondary">{r[1] || '—'}</td>
              <td className="hidden px-3 py-1.5 text-text-secondary sm:table-cell">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ApproveVisual() {
  return (
    <div className="mx-auto w-full max-w-[440px] rounded-2xl border border-black/[0.08] bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-text-primary">Auto-approve</div>
        <span className="inline-flex h-6 w-11 items-center rounded-full bg-accent-blue p-0.5" aria-hidden>
          <span className="ml-auto h-5 w-5 rounded-full bg-white shadow" />
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ['18', 'approved'],
          ['3–8s', 'between each'],
          ['50/hr', 'safety limit'],
        ].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-navy-light px-2 py-3">
            <div className="font-sora text-lg font-bold text-text-primary">{n}</div>
            <div className="text-[11px] text-text-muted">{l}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-accent-amber/10 px-3 py-2.5 text-[12px] text-text-secondary">
        <span className="font-semibold text-accent-amber">Backs off automatically.</span> If Facebook stops accepting approvals,
        auto-approve pauses for 6 hours instead of retrying.
      </div>
    </div>
  );
}

const STEPS: Step[] = [
  {
    step: '01',
    title: 'Install and sign in with Google',
    description:
      'Add GroupMailBox to Chrome and open the side panel. Sign in with the Google account you want to use, then pick the Google Sheet your leads should land in, or let us create one.',
    details: [
      'Free to install from the Chrome Web Store',
      'Access to the one sheet you choose, never the rest of your Drive',
      'Works with Gmail and Google Workspace accounts',
    ],
    visual: <PanelShot src="/how-it-works/sign-in.png" alt="GroupMailBox side panel with the Continue with Google button" width={800} height={680} />,
  },
  {
    step: '02',
    title: 'Open your member requests, answers are captured',
    description:
      'Go to your group’s member requests page on desktop as you normally would. GroupMailBox reads each request while the page is open: name, profile link, every screening answer, and an email address if the person shared one, even inside a sentence.',
    details: [
      'Nothing to click: capture starts when the page opens',
      'Finds emails inside answers like “sure, it’s jordan@example.com”',
      'Works on every group you admin',
    ],
    visual: <CaptureVisual />,
  },
  {
    step: '03',
    title: 'Push to Google Sheets in one click',
    description:
      'Captured requests wait in the side panel until you push them. One click adds every lead to your sheet as a clean row, with a column for each answer and the time it was captured.',
    details: ['One row per member, one column per question', 'Last push and pending count always visible', 'Download as Excel or CSV from Sheets any time'],
    visual: (
      <div className="relative">
        <PanelShot src="/how-it-works/push-to-sheets.png" alt="GroupMailBox side panel showing 12 pending leads and the Push to Sheets button" width={800} height={1240} />
        <div className="relative z-10 -mt-16 mx-auto w-[92%] max-w-[420px] md:absolute md:-bottom-24 md:-left-16 md:mt-0 md:w-[400px]">
          <SheetVisual />
        </div>
      </div>
    ),
  },
  {
    step: '04',
    title: 'Approve members at a safe pace',
    description:
      'Turn on auto-approve (Pro and Advanced) and GroupMailBox approves captured requests for you while the page is open, saving answers first, then approving one at a time at a human pace.',
    details: ['A few seconds between approvals', 'Stops at 50 approvals per hour, across all tabs', 'Pauses for 6 hours if Facebook pushes back'],
    visual: <ApproveVisual />,
  },
  {
    step: '05',
    title: 'Follow up from Gmail until they reply',
    description:
      'Send a welcome email to members who shared their address, then up to four follow-ups in the same thread. Each one stops the moment someone replies or unsubscribes, and you can see every step’s results.',
    details: ['Sent from your own Gmail, so it lands like a personal note', 'Stops on reply, unsubscribe or bounce', 'Unsubscribe link in every email'],
    visual: <PanelShot src="/how-it-works/follow-ups.png" alt="Campaign detail showing follow-up steps on day 0, 3 and 7 with replies counted" width={800} height={1170} />,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="relative overflow-hidden pt-24 pb-16">
      <div className="aurora" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateIn>
            <Badge className="mb-4">How It Works</Badge>
            <h1 className="mb-6 font-sora text-4xl font-extrabold md:text-5xl">
              From join request to <span className="text-gradient-teal">reply</span>, in five steps
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              GroupMailBox lives in Chrome&apos;s side panel. Here is exactly what you see at each step.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl space-y-24 md:space-y-32">
          {STEPS.map((step, i) => (
            <AnimateIn key={step.step}>
              <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/10 font-sora text-lg font-bold text-accent-blue">
                    {step.step}
                  </span>
                  <h2 className="mb-3 font-sora text-2xl font-bold md:text-3xl">{step.title}</h2>
                  <p className="mb-5 leading-relaxed text-text-secondary">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-text-muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>{step.visual}</div>
              </div>
            </AnimateIn>
          ))}
          <p className="text-center text-xs text-text-muted">Screens show sample data. Names and emails are fictional.</p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="mb-6 font-sora text-3xl font-bold md:text-4xl">
              Ready to get <span className="text-gradient-teal">started?</span>
            </h2>
            <p className="mb-8 text-lg text-text-secondary">
              Install takes under a minute. Questions first? Read the{' '}
              <Link href="/support/" className="text-accent-blue">
                FAQ
              </Link>
              .
            </p>
            <Button href={CHROME_STORE_URL} size="lg" external>
              Install Free for Chrome
            </Button>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
