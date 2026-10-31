import type { Metadata } from 'next';
import AnimateIn from '@/components/ui/AnimateIn';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { CHROME_STORE_URL } from '@/lib/constants';
import { ApproveVisual, CaptureVisual, PanelShot, SheetVisual, ThreadVisual } from '@/components/visuals/ProductVisuals';
import PageHero from '@/components/ui/PageHero';
import { LayerStack } from '@/components/visuals/Scene3D';

export const metadata: Metadata = {
  alternates: { canonical: '/features/' },
  title: { absolute: "Features: Capture, Sheets, Auto-Approve, Follow-ups" },
  description: "Capture Facebook group requests and answers, sync to Google Sheets, auto-approve safely and send Gmail follow-ups that stop on reply.",
};

// Each feature pairs accurate copy with a real side panel screenshot (fictional sample data) or a drawn illustration.
const FEATURES: { title: string; description: string; bullets: string[]; visual: React.ReactNode; href?: string }[] = [
  {
    title: 'Every join request and answer, captured',
    description:
      'Open your group\u2019s member requests page on desktop and GroupMailBox reads each request while the page is open: name, profile link, all three screening answers, and the email address if the person shared one, even inside a sentence.',
    bullets: [
      'Starts automatically when the member requests page opens',
      'All three screening questions, mapped question to answer',
      'Finds emails inside answers like \u201csure, it\u2019s jordan@example.com\u201d',
      'Works on every group you admin',
    ],
    visual: <CaptureVisual />,
  },
  {
    title: 'Google Sheets, one row per member',
    description:
      'Captured requests wait in the side panel until you push them. One click adds every lead to your sheet with a column per answer and a timestamp. GroupMailBox can only access the one sheet you choose.',
    bullets: [
      'Pick your own sheet or let us create one',
      'Pending count and last push always visible',
      'Access to that one file only, never the rest of your Drive',
      'Download as Excel or CSV from Sheets any time',
    ],
    visual: (
      <div className="relative pb-8 md:pb-0">
        <PanelShot src="/how-it-works/push-to-sheets.png" alt="Side panel showing 12 pending leads and the Push to Sheets button" width={800} height={1240} />
        <div className="relative z-10 mx-auto -mt-16 w-[92%] max-w-[420px] md:absolute md:-bottom-16 md:-left-10 md:mt-0 md:w-[380px]">
          <SheetVisual />
        </div>
      </div>
    ),
  },
  {
    title: 'Gmail follow-ups that stop when they reply',
    description:
      'Send a welcome email to members who shared their address, then up to four follow-ups in the same thread, from your own Gmail. The sequence stops by itself when someone replies, unsubscribes or bounces.',
    bullets: [
      'Sent from your Gmail or Google Workspace account',
      'Follow-ups land in the same thread, like a personal note',
      'Stops on reply, unsubscribe or bounce',
      'Unsubscribe link in every email; skips addresses with typo\u2019d domains',
    ],
    visual: (
      <div className="grid items-start gap-6 sm:grid-cols-2">
        <PanelShot src="/features/campaigns.png" alt="Campaigns tab with Gmail connected, welcome and follow-up templates, and running campaigns" width={800} height={1520} />
        <div className="sm:pt-16">
          <ThreadVisual />
        </div>
      </div>
    ),
  },
  {
    title: 'Auto-approve at a safe pace',
    description:
      'On Pro and Advanced, GroupMailBox approves captured requests for you while the page is open: answers saved first, then approvals a few seconds apart. If Facebook stops accepting approvals, it pauses instead of retrying.',
    bullets: [
      'A few seconds between approvals, adjustable in settings',
      'Stops at 50 approvals per hour, across all your tabs',
      'Pauses for 6 hours if Facebook pushes back',
      'Never approves before the answers are saved',
    ],
    visual: <ApproveVisual />,
    href: '/features/auto-approve-facebook-group-members/',
  },
  {
    title: 'Results for every step of a sequence',
    description:
      'See how each campaign is doing from the side panel: sent, failed and bounced counts, how many people each follow-up reached, who replied, and who is still in the sequence.',
    bullets: [
      'Sent, failed, bounced and total at a glance',
      'Per-step counts for day 0, 3 and 7',
      'Replies, unsubscribes and finished sequences',
      'A send log you can filter by status',
    ],
    visual: <PanelShot src="/how-it-works/follow-ups.png" alt="Campaign detail with follow-up steps on day 0, 3 and 7 and replies counted" width={800} height={1170} />,
  },
];

export default function FeaturesPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Features"
        title={<>Everything between a join request <span className="text-shimmer">and a reply</span></>}
        subtitle="Capture every request and answer, keep them in your own Google Sheet, approve members safely and follow up from Gmail. Screens below are the real extension with sample data."
        actions={
          <>
            <Button href={CHROME_STORE_URL} size="lg" external>Add to Chrome, it&apos;s free</Button>
            <Button href="/pricing/" variant="secondary" size="lg">See pricing</Button>
          </>
        }
        visual={
          <div className="hidden md:block">
            <LayerStack
              height={560}
              layers={[
                { node: <div className="w-[300px]"><PanelShot src="/how-it-works/push-to-sheets.png" alt="Side panel with 12 pending leads" width={800} height={1240} /></div>, z: 0, style: { left: '37%', top: 0 } },
                { node: <div className="w-[400px]"><SheetVisual /></div>, z: 110, style: { left: '3%', top: 300 } },
                { node: <div className="w-[360px]"><ThreadVisual /></div>, z: 170, style: { right: '2%', top: 70 } },
                { node: <div className="w-[300px]"><ApproveVisual /></div>, z: 60, style: { left: '6%', top: 30 } },
              ]}
            />
          </div>
        }
      />

      {/* Feature sections */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {FEATURES.map((feature, i) => (
            <AnimateIn key={feature.title} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <h2 className="font-sora font-bold text-2xl md:text-3xl mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-text-secondary text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.href && (
                    <Link href={feature.href} className="mt-5 inline-block text-sm font-semibold text-accent-blue hover:underline">
                      How auto-approve stays safe →
                    </Link>
                  )}
                </div>

                <div className="flex-1 w-full">{feature.visual}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-6">
              Ready to Try These <span className="text-gradient-teal">Features?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Free for one group. Upgrade when you want auto-approve and Gmail follow-ups.
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
