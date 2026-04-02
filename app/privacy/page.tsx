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
          <p className="text-text-muted mb-12">Last updated: April 2, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">1. Introduction</h2>
              <p>
                {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the {SITE_NAME} Chrome extension and the {SITE_NAME} website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our products and services.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">2. Information We Collect</h2>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-4 mb-2">2.1 Chrome Extension Data</h3>
              <p>When you use the {SITE_NAME} Chrome extension, we collect:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Facebook Group member request data visible to you as a group admin (names, profile URLs, screening question answers)</li>
                <li>Your Google account information (email address) for Sheets authentication</li>
                <li>Extension settings and preferences</li>
              </ul>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-4 mb-2">2.2 Website Data</h3>
              <p>When you visit our website, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Email address (if you subscribe to our newsletter)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide the lead capture and Google Sheets integration functionality</li>
                <li>To authenticate your Google account via OAuth2</li>
                <li>To store your extension settings and preferences</li>
                <li>To improve our products and services</li>
                <li>To send you product updates and support communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">4. Google API Usage Disclosure</h2>
              <p>
                {SITE_NAME} uses the Google Sheets API to push captured lead data to your Google Sheets. Our use and transfer of information received from Google APIs adheres to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
              <p className="mt-2">Specifically:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>We only request the minimum permissions necessary (Google Sheets read/write)</li>
                <li>We do not use Google user data for advertising purposes</li>
                <li>We do not sell Google user data to third parties</li>
                <li>We do not use Google user data for any purpose other than providing the {SITE_NAME} service</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">5. Data Storage and Security</h2>
              <p>
                Your data is stored securely using Supabase, which provides encrypted database storage. All data transmission between the extension, our servers, and Google APIs uses HTTPS encryption.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Database: Supabase (PostgreSQL with row-level security)</li>
                <li>Authentication: Google OAuth2 with encrypted tokens</li>
                <li>Transmission: HTTPS/TLS encryption</li>
                <li>Extension data: Stored locally in Chrome storage API</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">6. Data Retention and Deletion</h2>
              <p>
                We retain your data for as long as you maintain an active account. You can request deletion of your data at any time by contacting us at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>.
              </p>
              <p className="mt-2">
                When you uninstall the extension, locally stored data (Chrome storage) is automatically removed. Server-side data will be deleted within 30 days of account deletion request.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">7. Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Supabase</strong> — Database and authentication infrastructure</li>
                <li><strong>Google Sheets API</strong> — To push lead data to your spreadsheets</li>
                <li><strong>Google OAuth2</strong> — For secure authentication</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">8. GDPR Rights (EEA Users)</h2>
              <p>If you are located in the European Economic Area, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Right of Access</strong> — Request a copy of your personal data</li>
                <li><strong>Right to Rectification</strong> — Request correction of inaccurate data</li>
                <li><strong>Right to Erasure</strong> — Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing</strong> — Request limitation of data processing</li>
                <li><strong>Right to Data Portability</strong> — Request transfer of your data</li>
                <li><strong>Right to Object</strong> — Object to processing of your personal data</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, contact us at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
