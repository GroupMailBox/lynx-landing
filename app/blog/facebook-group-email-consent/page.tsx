import type { Metadata } from 'next';
import Link from 'next/link';
import Article from '@/components/blog/Article';

const TITLE = 'Can You Email Facebook Group Members? A Consent-First Guide';
const DESCRIPTION =
  'Joining a group is not permission to email someone. How to ask for consent in your membership questions, what to include in every email, and the basics of US, UK/EU and Canadian rules. Not legal advice.';

export const metadata: Metadata = {
  alternates: { canonical: '/blog/facebook-group-email-consent/' },
  title: `${TITLE} (2026)`,
  description: DESCRIPTION,
  openGraph: { type: 'article', title: TITLE, description: DESCRIPTION, url: '/blog/facebook-group-email-consent/' },
};

export default function ConsentArticle() {
  return (
    <Article
      slug="facebook-group-email-consent"
      title={TITLE}
      description={DESCRIPTION}
      category="Guide"
      published="2026-10-26"
      readMinutes={6}
    >
      <div className="callout">
        <strong>This is general information, not legal advice.</strong> Email rules depend on where you and your recipients
        are. If in doubt, ask a lawyer who knows your market.
      </div>

      <p>
        A Facebook group is a great place to meet people who care about your topic. Emailing them is a different step, and it
        works best, legally and practically, when people asked to hear from you. Here is how to do it properly.
      </p>

      <h2>Joining your group is not consent</h2>
      <p>
        When someone joins, they agree to your group rules and to Facebook&apos;s terms, not to receive your emails. Adding
        everyone who joined to a mailing list, or collecting addresses you were never given, is the fastest way to spam
        complaints, a damaged sender reputation, and trouble with privacy rules.
      </p>

      <h2>How to ask for consent in your membership questions</h2>
      <p>Make your email question an offer that people can freely accept or skip:</p>
      <ul>
        <li><strong>Say what they will get</strong>: a guide, a weekly roundup, new listings.</li>
        <li><strong>Make it optional</strong> and say so.</li>
        <li><strong>Say they can unsubscribe</strong> at any time.</li>
      </ul>
      <p>
        Example: “Want our free starter guide? Leave your email and we will send it. You can unsubscribe any time
        (optional).” More wording in our <Link href="/blog/facebook-group-membership-questions/">membership question examples</Link>.
      </p>

      <h2>What every email should include</h2>
      <ul>
        <li>Your real name or business name in the From line, and an honest subject line.</li>
        <li>A reminder of where they know you from (“You joined {'{{group name}}'} and asked for…”).</li>
        <li>A clear, working unsubscribe link, honoured promptly and permanently.</li>
        <li>Your business postal address, where the law requires it (for example, in the US).</li>
      </ul>

      <h2>The rules in brief</h2>
      <table>
        <thead>
          <tr>
            <th>Where</th>
            <th>Key points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>United States (CAN-SPAM)</td>
            <td>
              No misleading headers or subject lines, a postal address, a clear way to opt out, and opt-outs honoured within 10
              business days. <a href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" rel="noopener">FTC guide</a>
            </td>
          </tr>
          <tr>
            <td>UK and EU (PECR, ePrivacy, GDPR)</td>
            <td>
              Marketing emails to individuals generally need consent, with narrow exceptions for existing customers.
              Consent must be freely given and specific. <a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/" rel="noopener">ICO guidance</a>
            </td>
          </tr>
          <tr>
            <td>Canada (CASL)</td>
            <td>
              Commercial emails need express or implied consent, identification of the sender and an unsubscribe mechanism.{' '}
              <a href="https://crtc.gc.ca/eng/com500/faq500.htm" rel="noopener">CRTC FAQ</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Why consent also helps you</h2>
      <p>
        Gmail and other providers watch how recipients react. Email that people asked for gets opened and answered; email they
        did not ask for gets reported as spam, which can push your future messages, including one-to-one mail, into spam.
        Google&apos;s <a href="https://support.google.com/a/answer/81126" rel="noopener">sender guidelines</a> also expect
        an easy unsubscribe and low spam rates.
      </p>

      <h2>How GroupMailBox fits</h2>
      <ul>
        <li>It only captures what members chose to share in your membership questions.</li>
        <li>Every email it sends includes a one-click unsubscribe link, and unsubscribed people are never emailed again.</li>
        <li>Follow-ups stop as soon as someone replies or unsubscribes.</li>
      </ul>
      <p>
        Ready to set it up? Read <Link href="/blog/email-facebook-group-members/">how to email your Facebook group members</Link>.
      </p>
    </Article>
  );
}
