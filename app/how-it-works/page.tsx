import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CHROME_STORE_URL } from '@/lib/constants';
import { ApproveVisual, CaptureVisual, PanelShot, SheetVisual } from '@/components/visuals/ProductVisuals';

export const metadata: Metadata = {
  alternates: { canonical: '/how-it-works/' },
  title: { absolute: "How GroupMailBox Works: 5 Steps | GroupMailBox" },
  description: "Sign in with Google, capture Facebook group requests and answers, push to Sheets, approve safely and follow up from Gmail until they reply.",
};

type Step = {
  step: string;
  title: string;
  description: string;
  details: string[];
  visual: React.ReactNode;
};

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
