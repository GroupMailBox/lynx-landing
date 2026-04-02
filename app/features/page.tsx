import type { Metadata } from 'next';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CHROME_STORE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Features — Lead Capture, Google Sheets, Auto-Approve & More',
  description:
    'Explore GroupMailBox features: one-click lead capture, Google Sheets integration, auto-approve members, screening answer capture, real-time detection, and side panel dashboard.',
};

const FEATURES = [
  {
    title: 'One-Click Lead Capture',
    description:
      'GroupMailBox scrapes all pending member request data from your Facebook Group with a single click. No manual copy-pasting, no spreadsheet gymnastics.',
    bullets: [
      'Captures member names and profile URLs',
      'Extracts up to 3 screening question answers',
      'Works on any Facebook Group you admin',
      'Processes all visible member requests at once',
    ],
  },
  {
    title: 'Google Sheets Integration',
    description:
      'Push captured leads directly to Google Sheets with one click. Your data is automatically organized into columns — names, profile links, screening answers, timestamps.',
    bullets: [
      'One-click push to Google Sheets',
      'Auto-creates columns for each data field',
      'Supports multiple sheets per group',
      'Secure OAuth2 authentication with Google',
    ],
  },
  {
    title: 'Auto-Approve Members',
    description:
      'Available on Pro and Agency plans. Automatically approve member requests after capturing their data. Includes configurable safety delays to mimic human behavior.',
    bullets: [
      'Configurable delay between approvals',
      'Mimics human click patterns',
      'Can be enabled/disabled per group',
      'Captures data before approving',
    ],
  },
  {
    title: 'Screening Answer Capture',
    description:
      'Facebook Groups can ask up to 3 screening questions. GroupMailBox captures every question-answer pair automatically and includes them in your exports.',
    bullets: [
      'Supports all 3 Facebook screening questions',
      'Preserves question-answer mapping',
      'Exports cleanly to separate columns',
      'Works with any question format',
    ],
  },
  {
    title: 'Real-Time Detection',
    description:
      'GroupMailBox watches your member requests page and detects new requests the instant they appear. No need to refresh — new requests are captured automatically.',
    bullets: [
      'Instant background detection',
      'No page refresh required',
      'Instant capture of new requests',
      'Works while you browse other tabs',
    ],
  },
  {
    title: 'Side Panel Dashboard',
    description:
      'Manage everything from a convenient Chrome side panel. View lead counts, configure settings, connect Google Sheets — all without leaving Facebook.',
    bullets: [
      'View captured lead counts in real-time',
      'Configure Google Sheets connection',
      'Toggle auto-approve settings',
      'Access settings without leaving Facebook',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <Badge className="mb-4">Features</Badge>
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-6">
              Powerful Features for{' '}
              <span className="text-gradient-teal">Facebook Group Admins</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              GroupMailBox is purpose-built to help you capture, organize, and manage leads from your Facebook Group member requests.
            </p>
          </AnimateIn>
        </div>
      </section>

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
                </div>

                {/* Visual placeholder */}
                <div className="flex-1 w-full">
                  <div className="bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                        <span className="font-sora font-bold text-xl text-accent-blue">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <p className="text-text-muted text-sm">Feature Preview</p>
                    </div>
                  </div>
                </div>
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
              Install GroupMailBox for free and experience all these features firsthand.
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
