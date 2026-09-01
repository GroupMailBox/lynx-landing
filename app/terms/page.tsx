import type { Metadata } from 'next';
import { SUPPORT_EMAIL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'GroupMailBox terms of service. Read the terms and conditions governing your use of our Chrome extension and website.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sora font-extrabold text-4xl mb-4">Terms of Service</h1>
          <p className="text-text-muted mb-12">Last updated: May 9, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">

            <section>
              <p>
                These Terms of Service (the &quot;Terms&quot;) form a binding contract between <strong>Leadseeder, LLC</strong>, a limited liability company organized under the laws of the State of Delaware, with a principal place of business at 1111b South Governors Avenue, Dover, DE 19904, USA (&quot;{SITE_NAME},&quot; &quot;we,&quot; or &quot;us&quot;), and you (the &quot;Customer&quot; or &quot;you&quot;). By creating an account, installing the {SITE_NAME} Chrome extension, or otherwise using the Services, you agree to these Terms. If you are entering into these Terms on behalf of an entity, you represent that you have authority to bind that entity, and &quot;you&quot; refers to that entity.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">1. The Services</h2>
              <p>
                {SITE_NAME} provides a software-as-a-service platform consisting of (a) a Chrome browser extension that captures answers to Facebook Group screening questions visible to a logged-in Group Admin, (b) a web-based dashboard and backend that append those answers to a Google Sheet you select via the Google Picker (or one created for you), and (c) tools to compose and send email campaigns to your captured leads using your own Gmail account (collectively, the &quot;Services&quot;).
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">2. Eligibility</h2>
              <p>
                You must be at least 18 years old and able to form a legally binding contract. You must not be prohibited from using the Services under the laws of any applicable jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">3. Account</h2>
              <p>
                You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. You must promptly notify us of any unauthorized access. You agree to provide accurate registration information and to keep it current.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">4. Subscription, Fees, and Billing</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The Services are offered on a subscription basis. Fees, billing cycles, and feature tiers are disclosed at the point of purchase.</li>
                <li>All subscriptions auto-renew at the end of each billing cycle until canceled. You may cancel at any time through your account dashboard; cancellation takes effect at the end of the then-current billing cycle, and your subscription remains active until that point.</li>
                <li>Fees are exclusive of taxes; you are responsible for applicable taxes.</li>
                <li>We offer a 14-day money-back guarantee for first-time paid plans. If you are not satisfied within 14 days of your first payment, contact{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>{' '}for a full refund. Renewals are non-refundable.</li>
                <li>We may change fees on at least thirty (30) days&apos; prior notice; changes apply to the next renewal cycle.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">5. License Grant</h2>
              <p>
                Subject to these Terms and your payment of any applicable fees, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes during the subscription term.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">6. Acceptable Use</h2>
              <p>You agree to use {SITE_NAME} only for lawful purposes. You must not, and you represent and warrant that you will not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the Extension on Facebook Groups you do not administer, or to capture data of users who have not voluntarily submitted answers to your own screening questions.</li>
                <li>Use the Services to violate Facebook&apos;s or Meta&apos;s Terms of Service or Community Standards as those apply to you as a logged-in user, or to circumvent Meta&apos;s anti-abuse measures.</li>
                <li>Capture special-category data (health, race, religion, sexuality, political opinion, biometrics, or similar) via screening questions without obtaining explicit consent under GDPR Art. 9(2)(a) or another applicable lawful basis.</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the Extension or backend.</li>
                <li>Share your account credentials with third parties.</li>
                <li>Use automated tools to interact with the Services beyond their intended functionality.</li>
                <li>Resell, sublicense, white-label, or redistribute the Services without our written permission.</li>
                <li>Use the Services in connection with groups that promote hate speech, violence against persons, sexual exploitation of minors, fraud, illegal goods, or any other activity that violates applicable law.</li>
              </ul>
              <p className="mt-3"><strong className="text-text-primary">When using campaign (email-sending) features, you additionally agree to:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Comply with all anti-spam laws applicable to you and your recipients, including the CAN-SPAM Act, the Telephone Consumer Protection Act (TCPA), GDPR, the EU ePrivacy Directive, the UK PECR, CCPA/CPRA, and CASL.</li>
                <li>Send only to recipients whose email address you obtained lawfully and who have a reasonable expectation of receiving email from you.</li>
                <li>Include a valid postal address for the sender in every campaign.</li>
                <li>Honor every unsubscribe request promptly. Re-importing previously-unsubscribed addresses is prohibited.</li>
                <li>Not use {SITE_NAME} to send unsolicited bulk email, deceptive headers or subject lines, or any content that violates Google&apos;s Gmail Sending Guidelines or program policies.</li>
              </ul>
              <p className="mt-3">
                Violating these terms may result in immediate suspension of your account and revocation of Google OAuth access.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">7. Customer Data; Data Processing</h2>
              <p>
                You retain all rights in data you upload or that the Extension captures on your behalf (&quot;Customer Data&quot;). You grant {SITE_NAME} a worldwide, non-exclusive, royalty-free license to host, copy, transmit, and display Customer Data solely as necessary to provide the Services. Where Customer Data includes personal data subject to GDPR or analogous law, the parties&apos; respective obligations are governed by our Privacy Policy and Data Processing terms.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">8. Sending Limits and Gmail Quotas</h2>
              <p>
                {SITE_NAME} enforces a daily limit of 450 outbound email messages per Gmail account per 24 hours, and a per-second rate limit, to stay within Google&apos;s published Gmail API quotas. Limits may be adjusted without notice as required to comply with Gmail&apos;s policies.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">9. Third-Party Services</h2>
              <p>
                The Services interoperate with third-party services such as Facebook (Meta) and Google (Sheets, Gmail). We do not control those services and are not responsible for their availability, content, or terms. If a third-party service changes its API, interface, or terms in a way that impairs the Services, we will use commercially reasonable efforts to adapt but make no guarantee of continued integration.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">10. Intellectual Property</h2>
              <p>
                The Services, including all software, designs, logos, and documentation, are owned by {SITE_NAME} or its licensors and are protected by international copyright, trademark, and other intellectual-property laws. Except for the limited license in Section 5, no rights are granted to you. You may not (a) reverse-engineer, decompile, or disassemble the Services; (b) resell, sublicense, or white-label the Services; (c) build a competing product using the Services; or (d) use the Services in a manner that exceeds reasonable use limits.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">11. Trademarks; Facebook / Meta Disclaimer</h2>
              <p>
                &quot;{SITE_NAME}&quot; is our trademark. &quot;Facebook,&quot; &quot;Meta,&quot; &quot;Instagram,&quot; and related marks are trademarks of Meta Platforms, Inc. <strong>{SITE_NAME} is not affiliated with, endorsed by, sponsored by, or in any way officially connected to Meta Platforms, Inc. or any of its subsidiaries.</strong>
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">12. Termination</h2>
              <p>
                We may suspend or terminate your account immediately for material breach of these Terms (including non-payment after notice), suspected fraud, abuse of the Services, or activity that we reasonably believe may expose us, our users, or the recipients of campaign emails to liability. Upon termination, your right to access the Services ends and we will delete Customer Data in accordance with our Privacy Policy. Sections 7, 10, 13, 14, 15, 16, 17, and 18 survive termination.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">13. Disclaimers</h2>
              <p>
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED OPERATION. WE DO NOT WARRANT THAT THE SERVICES WILL CONTINUE TO OPERATE IF FACEBOOK OR META CHANGES ITS PLATFORM, USER INTERFACE, OR TERMS, OR IF GOOGLE CHANGES ITS SHEETS OR GMAIL APIS.
              </p>
              <p className="mt-2">
                We do not guarantee that the Services will capture all member-request data or that Google Sheets / Gmail integration will work without interruption. Facebook and Google may change their interfaces or policies at any time, which could affect the Services&apos; functionality.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">14. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR LOSS OF GOODWILL, REGARDLESS OF THE THEORY OF LIABILITY. OUR AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE FEES YOU PAID TO US IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR (B) ONE HUNDRED U.S. DOLLARS (US$100). Some jurisdictions do not allow the exclusion of certain warranties or limitation of certain damages; in those jurisdictions, our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">15. Indemnification</h2>
              <p>
                You will defend, indemnify, and hold harmless {SITE_NAME} and its officers, members, employees, and agents from and against any third-party claims, damages, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to (a) your use of the Services in violation of these Terms or applicable law; (b) Customer Data, including any claim that it infringes the rights of a third party or was collected without lawful basis; or (c) your breach of any representation, warranty, or covenant in these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">16. Governing Law; Dispute Resolution; Arbitration</h2>
              <p>
                <strong>(a) Governing law.</strong> These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
              </p>
              <p className="mt-3">
                <strong>(b) Mandatory individual arbitration.</strong> Any dispute arising out of or relating to these Terms or the Services that cannot be resolved by good-faith negotiation within thirty (30) days will be resolved by binding individual arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules and Consumer Arbitration Rules (where applicable). The seat of arbitration will be Wilmington, Delaware, conducted in English. Judgment on the award may be entered in any court of competent jurisdiction.
              </p>
              <p className="mt-3">
                <strong>(c) Class-action waiver.</strong> YOU AND {SITE_NAME.toUpperCase()} EACH WAIVE ANY RIGHT TO BRING OR PARTICIPATE IN A CLASS ACTION, CLASS ARBITRATION, OR REPRESENTATIVE ACTION. THE ARBITRATOR MAY AWARD RELIEF ONLY ON AN INDIVIDUAL BASIS.
              </p>
              <p className="mt-3">
                <strong>(d) 30-day opt-out.</strong> You may opt out of arbitration by sending written notice to{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a> with the subject line &quot;Arbitration Opt-Out&quot; within thirty (30) days of first accepting these Terms.
              </p>
              <p className="mt-3">
                <strong>(e) Equitable relief.</strong> Notwithstanding the foregoing, either party may seek injunctive or equitable relief in a court of competent jurisdiction for actual or threatened infringement of intellectual-property rights.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">17. Changes to Terms</h2>
              <p>
                We may modify these Terms by posting an updated version on this page with a new &quot;Last updated&quot; date. Material changes will be notified by email or in-product notice at least thirty (30) days in advance. Continued use of the Services after the effective date constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">18. General</h2>
              <p>
                These Terms, together with the Privacy Policy and any documents incorporated by reference, are the entire agreement between you and {SITE_NAME} on the subject matter and supersede prior agreements. If any provision is unenforceable, the remainder remains in effect. We may assign these Terms in connection with a merger, acquisition, or sale of assets; you may not assign without our written consent. No waiver is implied by our failure to enforce any provision. Notices to {SITE_NAME} must be sent to 1111b South Governors Avenue, Dover, DE 19904, USA, with a copy to{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">19. Contact</h2>
              <p>
                Questions about these Terms can be sent to{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
