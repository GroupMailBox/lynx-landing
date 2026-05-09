import type { Metadata } from 'next';
import { SUPPORT_EMAIL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'GroupMailBox privacy policy. Learn how we collect, use, and protect your data when using our Chrome extension and website.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sora font-extrabold text-4xl mb-4">Privacy Policy</h1>
          <p className="text-text-muted mb-12">Last updated: May 9, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">1. Introduction</h2>
              <p>
                {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the {SITE_NAME} Chrome extension and the {SITE_NAME} website. This Privacy Policy explains what we collect, why, how we use it, and the choices you have. {SITE_NAME} is a productivity tool for Facebook Group administrators, designed to make admin workflows you already perform faster — not to collect data beyond what those workflows require.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">2. Information We Collect</h2>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-4 mb-2">2.1 Facebook Group Data — What We Access and When</h3>
              <p>
                We only access content that you, as an authorized administrator of a Facebook Group, can already see in your own browser on Facebook&apos;s website.
              </p>
              <p className="mt-3"><strong className="text-text-primary">When the extension activates:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Activation is scoped to <code>facebook.com</code> pages and the Facebook Group member-requests page in particular. The extension does not run on any other website or any other Facebook page.</li>
                <li>Activation is initiated by you — by navigating to your group&apos;s member-requests page. We do not crawl, browse, or fetch Facebook content in the background or on your behalf.</li>
              </ul>
              <p className="mt-3"><strong className="text-text-primary">What we read from the page (only when active):</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Applicant display name (as shown to you)</li>
                <li>Public Facebook profile URL</li>
                <li>Facebook Group ID</li>
                <li>Answers the applicant submitted to the group&apos;s screening questions</li>
              </ul>
              <p className="mt-3"><strong className="text-text-primary">What we do NOT access:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Your private Facebook messages, posts, friends list, photos, or notifications.</li>
                <li>Any Facebook data outside the Member Requests page.</li>
                <li>Any Facebook account credentials or session tokens.</li>
              </ul>
              <p className="mt-3"><strong className="text-text-primary">What happens to that data:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>It is stored in your local browser (<code>chrome.storage.local</code>) until you click <strong>Capture &amp; Push</strong>.</li>
                <li>On your explicit action, the captured rows are sent over HTTPS to {SITE_NAME}&apos;s backend, written to your account record, and appended to <em>your</em> Google Sheet (the one you connected).</li>
                <li>If you create an email campaign, a lead&apos;s email is used to send the message you composed, from your Gmail account, to that recipient — and only to that recipient.</li>
              </ul>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-6 mb-2">2.2 Account &amp; Service Data</h3>
              <p>To operate the service for you, we store:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Your account: license key, the email address Google returns at OAuth, and the Google Sheet ID you select.</li>
                <li>Google OAuth tokens (access and refresh tokens for Google Sheets and, if you connect Gmail, <code>gmail.send</code>). Tokens are encrypted at rest and used only to fulfill your requests.</li>
                <li>Email-campaign data you create: templates, campaigns, recipient lists, rendered messages, send-log entries (recipient address, status, Gmail message ID, error if any), and unsubscribe records.</li>
                <li>Operational data: timestamps, request counts (used for rate limits and the daily 450-message Gmail send cap), and limited error logs.</li>
              </ul>
              <p className="mt-3">Locally in your browser (<code>chrome.storage.local</code>) we also keep your auth token, user ID, the captured-lead queue, and UI preferences.</p>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-6 mb-2">2.3 Information About Third Parties (Lead Recipients)</h3>
              <p>
                By using {SITE_NAME} you provide us with personal information about third parties — Facebook Group applicants and email recipients — for the limited purpose of operating the service on your behalf. You are the data controller for this information; {SITE_NAME} acts as your data processor.
              </p>
              <p className="mt-3">
                You represent and warrant that you have a lawful basis (such as legitimate interest, your group&apos;s stated rules, or recipient consent) to collect, store, and contact these individuals, and that your use of {SITE_NAME} to email them complies with applicable laws including the CAN-SPAM Act, GDPR, CASL, and any other laws that apply to you and your recipients. Recipients can opt out at any time using the unsubscribe link in every campaign email; opt-outs are honored automatically across all of your future campaigns.
              </p>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-6 mb-2">2.4 Website Data</h3>
              <p>When you visit our website, we may collect standard request metadata such as browser type, pages visited, and referring URL. If you subscribe to a newsletter we collect the email address you provide for that purpose only.</p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">3. We Do Not Sell or Share Your Data</h2>
              <p>
                We do not sell, rent, trade, or otherwise transfer your data — or the data of your leads — to any third party for advertising, marketing, analytics, scoring, or any unrelated purpose. We do not share data with data brokers. We do not share data with Meta, Facebook, or any advertising network.
              </p>
              <p className="mt-3">The only times your data leaves {SITE_NAME} infrastructure are:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>To Google, on your explicit instruction</strong> — to write rows to <em>your</em> Google Sheet, or to send an email from <em>your</em> Gmail account to a recipient <em>you</em> specified in a campaign.</li>
                <li><strong>To the email recipient&apos;s mail provider</strong> — when you send a campaign, the message is delivered to the recipient&apos;s inbox via Gmail, the same way any email from you reaches them.</li>
                <li><strong>To the infrastructure providers strictly necessary to run the service</strong> — Supabase (database), Render (application hosting), and the Redis provider used for our outbound mail queue. These vendors process data only as our service providers, under contractual confidentiality, and never for their own purposes.</li>
                <li><strong>When required by law</strong> (valid legal process), or to investigate and prevent fraud, abuse, or security incidents.</li>
              </ul>
              <p className="mt-3">
                We do not allow human review of your data except: with your explicit consent for a specific message, when necessary for security investigations, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide the lead-capture and Google Sheets append functionality you initiate.</li>
                <li>To authenticate you with Google via OAuth 2.0.</li>
                <li>To send the email campaigns you compose, from your Gmail account, to the recipients you specify.</li>
                <li>To enforce rate limits and quotas (e.g., the daily 450-message Gmail send cap) so the service stays within Google&apos;s API policies.</li>
                <li>To honor unsubscribe requests across your future campaigns.</li>
                <li>To diagnose errors and improve the service&apos;s reliability.</li>
                <li>To send you product updates and support communications related to your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">5. Google API Services &amp; Limited Use Disclosure</h2>
              <p>
                {SITE_NAME} accesses your Google account using OAuth 2.0 to provide two features you explicitly authorize:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Google Sheets API</strong> — to append captured lead data to a spreadsheet you choose. Scope: <code>https://www.googleapis.com/auth/spreadsheets</code>.</li>
                <li><strong>Gmail API (campaign sending)</strong> — to send email messages on your behalf from your Gmail account when you create and run a campaign. Scope: <code>https://www.googleapis.com/auth/gmail.send</code>.</li>
              </ul>
              <p className="mt-3">
                {SITE_NAME}&apos;s use and transfer to any other app of information received from Google APIs adheres to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
              <p className="mt-3">Specifically:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>We use Google user data only to provide and improve user-facing features that are prominent in our product (lead capture to Sheets; sending emails you compose and trigger).</li>
                <li>We do not use Google user data for serving advertisements.</li>
                <li>We do not transfer Google user data to third parties except as necessary to provide the service, to comply with applicable law, or as part of a merger, acquisition, or sale of assets with notice to you.</li>
                <li>We do not allow humans to read Google user data except: (a) with your explicit consent for specific messages; (b) when necessary for security purposes such as investigating abuse; (c) to comply with applicable law; or (d) when the data has been aggregated and anonymized.</li>
              </ul>
              <p className="mt-3"><strong className="text-text-primary">Gmail-specific:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>We never read, list, or modify your existing emails. The <code>gmail.send</code> scope only permits sending new messages.</li>
                <li>Sent-message metadata (Gmail message ID, timestamp, recipient, subject, status) is logged so we can show you delivery status and handle retries.</li>
                <li>Email-template body content is stored in our database so the same template can be reused across recipients.</li>
                <li>You can revoke access at any time at{' '}
                  <a href="https://myaccount.google.com/permissions" className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    https://myaccount.google.com/permissions
                  </a>{' '}or via the Disconnect Google action in the extension. Revocation halts sending immediately.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">6. Data Storage and Security</h2>
              <p>Your data is stored in:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Supabase</strong> — managed PostgreSQL with row-level security and encryption at rest.</li>
                <li><strong>Redis</strong> — a transient queue for outgoing email jobs; jobs are deleted after processing.</li>
              </ul>
              <p className="mt-3">All transport between the extension, our servers, and Google APIs uses HTTPS/TLS. Google OAuth tokens are stored encrypted at rest. Locally cached data lives in Chrome&apos;s extension storage and is removed when you uninstall the extension.</p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">7. Data Retention and Deletion</h2>
              <p>
                We retain your account data, OAuth tokens, leads, templates, campaigns, send logs, and unsubscribe records while your account is active. To request deletion of your account or specific data, email{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>. We will action verified requests within <strong>30 days</strong>. On account deletion we revoke OAuth tokens server-side and remove all records, except where retention is required for legal or fraud-prevention purposes.
              </p>
              <p className="mt-3">Locally cached data (<code>chrome.storage</code>) is removed automatically when you uninstall the extension.</p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">8. Third-Party Services</h2>
              <p>We rely on the following third parties strictly to operate the service:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Supabase</strong> — database hosting</li>
                <li><strong>Render</strong> — application hosting for our backend</li>
                <li><strong>Redis</strong> (managed instance) — outbound mail job queue</li>
                <li><strong>Google APIs</strong> — Sheets API v4 and Gmail API, accessed via OAuth 2.0 with your authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">9. GDPR Rights (EEA Users)</h2>
              <p>If you are located in the European Economic Area, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Right of Access</strong> — request a copy of your personal data</li>
                <li><strong>Right to Rectification</strong> — request correction of inaccurate data</li>
                <li><strong>Right to Erasure</strong> — request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing</strong> — request limitation of data processing</li>
                <li><strong>Right to Data Portability</strong> — request transfer of your data</li>
                <li><strong>Right to Object</strong> — object to processing of your personal data</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, contact us at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">10. Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be communicated by updating the &quot;Last updated&quot; date and, where appropriate, by direct notice to you.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">12. Contact Us</h2>
              <p>
                Questions about this Privacy Policy can be sent to{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">13. Limited Use Statement</h2>
              <p>
                {SITE_NAME}&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
