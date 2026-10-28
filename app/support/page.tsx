import type { Metadata } from 'next';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Accordion from '@/components/ui/Accordion';
import { FAQPageSchema } from '@/components/seo/JsonLd';
import { FAQ_DATA, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: { canonical: '/support/' },
  title: 'Support — FAQ & Contact',
  description:
    'Get help with GroupMailBox. Browse frequently asked questions or contact our support team for assistance with the Chrome extension.',
};

const EXTENDED_FAQ = [
  ...FAQ_DATA.map(f => ({ question: f.question, answer: f.answer })),
  {
    question: 'How do I connect Google Sheets?',
    answer:
      'Open the GroupMailBox side panel, click "Connect Google Account," and follow the OAuth2 authentication flow. Once connected, pick the sheet you want leads in via the Google file picker — or let GroupMailBox create one for you. We can only access the sheet you choose, never the rest of your Drive.',
  },
  {
    question: 'Why aren\'t member requests being detected?',
    answer:
      'Open your group\'s member requests page in Chrome on a computer: GroupMailBox reads requests from that page while it is open. Refresh the page once after installing or updating the extension, and check the extension is enabled in Chrome. Requests you or a co-admin approve on the Facebook app before the page is open in Chrome are not captured, so review requests on desktop when you want them saved.',
  },
  {
    question: 'Does GroupMailBox work if Facebook is not in English?',
    answer:
      'Approving requests relies on Facebook\'s English button labels, so set Facebook to English (Settings → Language and region) while you review requests. The extension shows a warning when it detects another language.',
  },
  {
    question: 'Why did auto-approve pause?',
    answer:
      'Two safety limits protect your Facebook account. Auto-approve stops at 50 approvals per rolling hour across all your tabs, then continues the next hour. If Facebook stops accepting approvals (three clicks in a row with no effect, which usually means it is rate-limiting you), auto-approve pauses for 6 hours instead of retrying. Approvals are spaced a few seconds apart by default, and you can make them slower in settings.',
  },
  {
    question: 'Does my computer need to stay on for auto-approve?',
    answer:
      'Yes. Auto-approve runs in your browser on the member requests page, not on our servers, so Chrome must be open on that page. Gmail follow-ups are different: once a member is in a campaign, emails are sent from our servers on schedule even when your computer is off.',
  },
  {
    question: 'Why was a member\'s email not captured?',
    answer:
      'GroupMailBox finds an email address anywhere in a member\'s answers, even inside a sentence like "sure, it is ada@example.com". It cannot capture an email the member did not type, or one with a typo such as a missing "@" or domain. Ask clearly, for example: "Want our free guide? Enter your email address (optional)."',
  },
  {
    question: 'Can I use GroupMailBox on multiple groups?',
    answer:
      'The free plan supports 1 group. Pro supports 5 groups, and Advanced supports unlimited groups. Each group can have its own Google Sheet.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      `Email ${SUPPORT_EMAIL} from the address on your account and we will cancel it, with no questions asked. Your data is kept and you move to the free plan at the end of your billing period.`,
  },
  {
    question: 'How do I delete my account and data?',
    answer:
      `Email ${SUPPORT_EMAIL} from the address associated with your account. We will revoke your Google OAuth tokens server-side and remove your account, leads, templates, campaigns, send logs, and unsubscribe records within 30 days of a verified request. Locally cached data in the extension is removed automatically when you uninstall it.`,
  },
  {
    question: 'How do I revoke GroupMailBox\'s access to my Google account?',
    answer:
      'You can revoke access at any time at https://myaccount.google.com/permissions — find GroupMailBox in the list and click Remove Access. You can also use the Disconnect Google action inside the extension. Revocation halts all campaign sending immediately.',
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
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-teal-dim text-white font-bold px-8 py-3 rounded-sm hover:shadow-[0_4px_20px_rgba(79,140,255,0.3)] hover:-translate-y-0.5 active:scale-[0.97] transition-all"
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
