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
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using {SITE_NAME} (the &quot;Service&quot;), including our Chrome extension and website, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">2. Description of Service</h2>
              <p>
                {SITE_NAME} is a Chrome browser extension and accompanying service that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>captures Facebook Group member-request data visible to you as a group administrator,</li>
                <li>appends that data to a Google Sheet you authorize, and</li>
                <li>lets you compose and send email campaigns to your leads using your own Gmail account.</li>
              </ul>
              <p className="mt-3">
                The Service includes the Chrome extension, website, and related backend APIs.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">3. Acceptable Use</h2>
              <p>You agree to use {SITE_NAME} only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the Service to violate Facebook&apos;s Terms of Service or Community Standards.</li>
                <li>Use captured data for spamming, harassment, or any illegal purpose.</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the extension.</li>
                <li>Share your account credentials with third parties.</li>
                <li>Use automated tools to interact with the Service beyond its intended functionality.</li>
                <li>Resell or redistribute the Service without written permission.</li>
              </ul>
              <p className="mt-3"><strong className="text-text-primary">When using campaign (email-sending) features, you additionally agree to:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Comply with all anti-spam laws applicable to you and your recipients, including the CAN-SPAM Act, GDPR, CCPA/CPRA, and CASL.</li>
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
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">4. Sending Limits and Gmail Quotas</h2>
              <p>
                {SITE_NAME} enforces a daily limit of 450 outbound email messages per Gmail account per 24 hours, and a per-second rate limit, to stay within Google&apos;s published Gmail API quotas. Limits may be adjusted without notice as required to comply with Gmail&apos;s policies.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">5. Account and Subscription</h2>
              <p>
                You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p className="mt-2">
                Paid subscriptions are billed monthly. You can cancel at any time, and your subscription will remain active until the end of the current billing period.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">6. Refund Policy</h2>
              <p>
                We offer a 14-day money-back guarantee for paid plans. If you are not satisfied with the Service within 14 days of your first payment, contact us at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>{' '}
                for a full refund.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">7. Intellectual Property</h2>
              <p>
                The Service, including its original content, features, and functionality, is owned by {SITE_NAME} and is protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, {SITE_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, profits, or business opportunities, resulting from your use of the Service.
              </p>
              <p className="mt-2">
                We do not guarantee that the Service will capture all member request data or that Google Sheets / Gmail integration will work without interruption. Facebook and Google may change their interfaces or policies at any time, which could affect the Service&apos;s functionality.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">9. Disclaimer</h2>
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">10. Account Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at any time if you violate these Terms of Service or engage in any activity that we determine to be harmful to the Service, to other users, or to recipients of campaign emails sent through {SITE_NAME}.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Service after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which {SITE_NAME} operates, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">13. Contact Us</h2>
              <p>
                Questions about these Terms of Service can be sent to{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
