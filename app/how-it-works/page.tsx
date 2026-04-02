import type { Metadata } from 'next';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CHROME_STORE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How It Works — 4 Simple Steps to Capture Leads',
  description:
    'Learn how GroupMailBox works in 4 simple steps: install the extension, navigate to member requests, auto-capture data, and push to Google Sheets.',
};

const STEPS = [
  {
    step: '01',
    title: 'Install the Chrome Extension',
    description:
      'Add GroupMailBox to your Chrome browser from the Chrome Web Store. It takes just a few seconds. Then connect your Google account to enable Sheets integration.',
    details: [
      'One-click install from Chrome Web Store',
      'Secure Google OAuth2 authentication',
      'No complex setup or configuration needed',
    ],
  },
  {
    step: '02',
    title: 'Navigate to Member Requests',
    description:
      'Go to your Facebook Group and navigate to the member requests page as you normally would. GroupMailBox activates automatically when it detects the member requests page.',
    details: [
      'Works on any Facebook Group you admin',
      'Automatic page detection',
      'No need to click anything to activate',
    ],
  },
  {
    step: '03',
    title: 'Data is Captured Automatically',
    description:
      'GroupMailBox detects and captures member request data the moment it appears. Names, profile URLs, and screening question answers are all grabbed automatically.',
    details: [
      'Instant background detection',
      'Captures names, profiles, and answers',
      'No page refresh needed for new requests',
    ],
  },
  {
    step: '04',
    title: 'Push to Google Sheets',
    description:
      'Open the side panel and click "Push to Sheets" to send all captured leads to your Google Sheet. Data is organized into clean columns automatically.',
    details: [
      'One-click push to Google Sheets',
      'Automatically organized columns',
      'Timestamps included for every entry',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <Badge className="mb-4">How It Works</Badge>
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-6">
              Start Capturing Leads in{' '}
              <span className="text-gradient-teal">4 Simple Steps</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              GroupMailBox is designed to be simple. Install it, go to your Facebook Group, and start capturing leads immediately.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line connector */}
            <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 via-accent-blue/20 to-transparent" />

            <div className="space-y-16">
              {STEPS.map((step, i) => (
                <AnimateIn key={step.step} delay={i * 0.15} direction="left">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Step number */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center relative z-10">
                      <span className="font-sora font-bold text-2xl text-accent-blue">{step.step}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="font-sora font-bold text-2xl mb-3">{step.title}</h2>
                      <p className="text-text-secondary mb-4 leading-relaxed">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3">
                            <svg
                              className="w-4 h-4 text-accent-green flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-text-muted text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Visual placeholder */}
                      <div className="mt-6 bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] aspect-[16/7] flex items-center justify-center">
                        <p className="text-text-muted text-sm">Step {step.step} Preview</p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-6">
              Ready to Get <span className="text-gradient-teal">Started?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              It takes less than a minute to install and start capturing leads.
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
