import type { Metadata } from 'next';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Accordion from '@/components/ui/Accordion';
import { FAQPageSchema } from '@/components/seo/JsonLd';
import { FAQ_DATA, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Support — FAQ & Contact',
  description:
    'Get help with GroupMailBox. Browse frequently asked questions or contact our support team for assistance with the Chrome extension.',
};

const EXTENDED_FAQ = [
  ...FAQ_DATA.map(f => ({ question: f.question, answer: f.answer })),
  {
    question: 'How do I connect Google Sheets?',
    answer:
      'Open the GroupMailBox side panel, click "Connect Google Account," and follow the OAuth2 authentication flow. Once connected, you can select or create a Google Sheet for your leads.',
  },
  {
    question: 'Why aren\'t member requests being detected?',
    answer:
      'Make sure you are on the Facebook Group member requests page. GroupMailBox automatically activates when it detects that page. Try refreshing the page. If the issue persists, check that the extension is enabled in Chrome settings.',
  },
  {
    question: 'Can I use GroupMailBox on multiple groups?',
    answer:
      'The free plan supports 1 group. Pro supports 5 groups, and Agency supports unlimited groups. Each group can have its own Google Sheet.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      'You can cancel your subscription at any time from your account settings. Your data will be preserved, and you\'ll be downgraded to the free plan at the end of your billing period.',
  },
];

export default function SupportPage() {
  return (
    <div className="pt-24 pb-16">
      <FAQPageSchema items={EXTENDED_FAQ} />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <Badge className="mb-4">Support</Badge>
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-6">
              How Can We <span className="text-gradient-teal">Help?</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Browse our FAQ below or contact us directly. We are here to help you get the most out of GroupMailBox.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-sora font-bold text-2xl mb-8">Frequently Asked Questions</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <Accordion items={EXTENDED_FAQ} />
          </AnimateIn>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-navy-light/30">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-sora font-bold text-2xl mb-4">Still Need Help?</h2>
            <p className="text-text-secondary mb-6">
              Can not find what you are looking for? Send us an email and we will get back to you within 24 hours.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-blue to-[#3A75E0] text-white font-bold px-8 py-3 rounded-sm hover:shadow-[0_4px_20px_rgba(79,140,255,0.3)] hover:-translate-y-0.5 active:scale-[0.97] transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email {SUPPORT_EMAIL}
            </a>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
