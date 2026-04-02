import type { Metadata } from 'next';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CHROME_STORE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About GroupMailBox — Our Mission',
  description:
    'Learn about GroupMailBox, the Chrome extension built to help Facebook Group admins capture and manage leads effortlessly.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <Badge className="mb-4">About</Badge>
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-6">
              Built for <span className="text-gradient-teal">Facebook Group Admins</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <AnimateIn>
            <div className="bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] p-8">
              <h2 className="font-sora font-bold text-2xl mb-4">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Facebook Groups are one of the most powerful tools for building communities and generating leads. But managing member requests — especially capturing their data and screening answers — has always been a tedious, manual process.
              </p>
              <p className="text-text-secondary leading-relaxed">
                GroupMailBox was built to solve this problem. We created a Chrome extension that automatically captures member request data, including screening question answers, and pushes it directly to Google Sheets. No more copy-pasting. No more lost leads.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] p-8">
              <h2 className="font-sora font-bold text-2xl mb-4">What GroupMailBox Does</h2>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue font-bold">1.</span>
                  <span>Detects Facebook Group member requests the instant they appear on the page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue font-bold">2.</span>
                  <span>Captures member names, profile URLs, and all 3 screening question-answer pairs automatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue font-bold">3.</span>
                  <span>Pushes captured data to Google Sheets with one click, organized into clean columns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue font-bold">4.</span>
                  <span>Optionally auto-approves member requests with configurable safety delays.</span>
                </li>
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] p-8">
              <h2 className="font-sora font-bold text-2xl mb-4">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-sora font-semibold text-accent-blue mb-2">Privacy First</h3>
                  <p className="text-text-secondary text-sm">We only access data you can already see as a group admin. We never sell your data.</p>
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-accent-blue mb-2">Simplicity</h3>
                  <p className="text-text-secondary text-sm">Install and start capturing leads in under a minute. No complex setup required.</p>
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-accent-blue mb-2">Transparency</h3>
                  <p className="text-text-secondary text-sm">Clear pricing, honest comparisons, and open communication with our users.</p>
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-accent-blue mb-2">Reliability</h3>
                  <p className="text-text-secondary text-sm">Built with modern web technologies for fast, reliable performance you can count on.</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-sora font-bold text-3xl mb-6">
              Try <span className="text-gradient-teal">GroupMailBox</span> Today
            </h2>
            <Button href={CHROME_STORE_URL} size="lg" external>
              Install Free for Chrome
            </Button>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
