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
          <p className="text-text-muted mb-2">Last updated: May 9, 2026</p>
          <p className="text-text-muted mb-12">Effective date: May 9, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">

            <section className="border border-accent-blue/30 rounded-md p-5 bg-accent-blue/5">
              <p className="text-text-primary font-semibold mb-2">In plain language</p>
              <p>
                We&apos;re {SITE_NAME}. Our Chrome extension helps Facebook Group administrators move new-member screening answers into a Google Sheet they own, and (optionally) send follow-up emails from their own Gmail account. We don&apos;t sell data, we don&apos;t use it to train AI, we don&apos;t share it with advertisers or Meta, and we don&apos;t read group content beyond what is needed for that single purpose. The members of your groups are <em>your</em> contacts — not ours.
              </p>
            </section>

            <section>
              <p>
                This Privacy Policy describes how <strong>Leadseeder, LLC</strong>, a limited liability company organized under the laws of the State of <strong>Delaware</strong>, with a principal place of business at <strong>1111b South Governors Avenue, Dover, DE 19904, USA</strong> (&quot;{SITE_NAME},&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, discloses, and protects information when you (&quot;you,&quot; &quot;User,&quot; or &quot;Customer&quot;) access or use the {SITE_NAME} website (the &quot;Site&quot;), the {SITE_NAME} Chrome browser extension (the &quot;Extension&quot;), and any related backend services (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-3">
                By accessing or using the Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree, do not use the Services.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">1. Scope and Roles</h2>
              <p>
                {SITE_NAME} provides software-as-a-service tools that enable administrators of Facebook™ groups (&quot;Group Admins&quot;) to capture answers to membership screening questions submitted by prospective members of <em>their own</em> groups, append those answers to a Google Sheet they pick (or one created for them), and (optionally) send email campaigns to those leads from the Group Admin&apos;s own Gmail account.
              </p>
              <p className="mt-3">For the purposes of the EU/UK General Data Protection Regulation (&quot;GDPR&quot;) and analogous laws:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>(a) Member &amp; Recipient Data.</strong> When you use the Services to process personal data of prospective Facebook-group members, your existing leads, or campaign recipients (&quot;Member Data&quot;), <strong>you are the &quot;controller&quot;</strong> and {SITE_NAME} acts as a &quot;processor&quot; or &quot;service provider.&quot; Our processing of Member Data on your behalf is governed by our Data Processing Agreement.</li>
                <li><strong>(b) Account Data.</strong> When we process information about you as the {SITE_NAME} account holder — registration, license, OAuth tokens you authorized, billing, and product-usage data (&quot;Account Data&quot;) — {SITE_NAME} is the &quot;controller.&quot;</li>
              </ul>
              <p className="mt-3">This Privacy Policy primarily describes our processing of Account Data and gives a high-level summary of our processing of Member Data; the full Member Data terms are in the Data Processing Agreement.</p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">2. Information We Collect</h2>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-4 mb-2">2.1 Information you provide directly to us</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Account registration data: license key, the email address Google returns at OAuth, and the ID of the Google Sheet you pick or create.</li>
                <li>Customer-support communications you initiate.</li>
                <li>Marketing preferences (e.g. newsletter opt-in).</li>
              </ul>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-6 mb-2">2.2 Information collected automatically</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Device and browser metadata (browser type, version, operating system).</li>
                <li>IP address and approximate geolocation derived from IP.</li>
                <li>Log data: timestamps, requests, error reports, and counters used to enforce rate limits and the daily 450-message Gmail send cap.</li>
                <li>Cookies and similar technologies on the Site (see Section 11).</li>
              </ul>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-6 mb-2">2.3 Information processed by the Extension on your device</h3>
              <p>The Extension activates only on Facebook Group member-request administration pages, only when you (the logged-in Group Admin) navigate there. It does not run on any other website or any other Facebook page, and does not browse, crawl, or fetch Facebook content in the background.</p>
              <p className="mt-3"><strong className="text-text-primary">When active, the Extension reads only:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The display names and public Facebook profile URLs of pending members shown to you.</li>
                <li>The screening-question answers those pending members have voluntarily submitted to your group.</li>
                <li>The Facebook Group ID of the page you are viewing.</li>
                <li>Your Extension settings (selected sheet, mapping, filters, UI preferences).</li>
              </ul>
              <p className="mt-3"><strong className="text-text-primary">The Extension does NOT access:</strong> your private Facebook messages, your news feed, your friends list, your photos, your notifications, content from any Facebook page outside member-requests, or any Facebook account credentials or session tokens.</p>
              <p className="mt-3">Captured rows stay in your local browser (<code>chrome.storage.local</code>) until you click <strong>Capture &amp; Push</strong>. On that explicit action, the rows are sent over HTTPS to {SITE_NAME}&apos;s backend, written to your account record, and appended to the Google Sheet you picked or created.</p>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-6 mb-2">2.4 Information from third-party integrations you authorize</h3>
              <p>When you connect Google services to your {SITE_NAME} account via OAuth 2.0, we receive and store:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The access token and refresh token Google returns for the scopes you granted (<code>drive.file</code> and, if you connect Gmail, <code>gmail.send</code>). Tokens are encrypted at rest and used only to fulfill your requests.</li>
                <li>The ID of the Google Sheet(s) you explicitly select via the Google Picker (or that {SITE_NAME} creates for you), and the Gmail address Google returns at OAuth.</li>
                <li>For email campaigns you create: templates, campaigns, recipient lists, rendered messages, send-log entries (recipient address, status, Gmail message ID, error if any), and unsubscribe records.</li>
              </ul>

              <h3 className="font-sora font-semibold text-lg text-text-primary mt-6 mb-2">2.5 Website data</h3>
              <p>When you visit the Site, we may collect standard request metadata such as browser type, pages visited, and referring URL. If you subscribe to our newsletter we collect the email address you provide for that purpose only.</p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">3. How We Use Account Data</h2>
              <p>We use Account Data to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide, maintain, and improve the Services you initiate (lead capture to Sheets, sending Gmail campaigns you compose).</li>
                <li>Authenticate you with Google via OAuth 2.0 and administer your account.</li>
                <li>Enforce rate limits and quotas (e.g., the daily 450-message Gmail send cap) so the Services stay within Google&apos;s API policies.</li>
                <li>Honor unsubscribe requests across your future campaigns.</li>
                <li>Diagnose errors and maintain reliability.</li>
                <li>Communicate with you about service updates, security alerts, and customer support.</li>
                <li>Send marketing communications (which you may opt out of at any time).</li>
                <li>Comply with legal obligations and enforce our Terms of Service.</li>
              </ul>
              <p className="mt-3">We rely on the following lawful bases under GDPR: performance of contract (Art. 6(1)(b)); legitimate interests (Art. 6(1)(f)) in operating, securing, and improving the Services; consent (Art. 6(1)(a)) for marketing where required; and compliance with legal obligations (Art. 6(1)(c)).</p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">4. Member Data — Limited Processing on Your Behalf</h2>
              <p>Member Data captured by the Extension or supplied by you is processed only on your documented instructions. Specifically, {SITE_NAME}:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Will <strong>not</strong> sell, rent, or trade Member Data.</li>
                <li>Will <strong>not</strong> use Member Data to train artificial-intelligence or machine-learning models.</li>
                <li>Will <strong>not</strong> share Member Data with advertisers, data brokers, information resellers, Meta, Facebook, or any advertising network.</li>
                <li>Will only retain Member Data as necessary to deliver it to your selected destinations and for the retention period configured (see Section 6), after which it is deleted.</li>
                <li>Transmits Member Data using HTTPS/TLS in transit and stores OAuth tokens encrypted at rest.</li>
              </ul>
              <p className="mt-3">
                You represent and warrant that you have a lawful basis (such as legitimate interest, your group&apos;s stated rules, or recipient consent) to collect, store, and contact these individuals, and that your use of {SITE_NAME} to email them complies with applicable laws including the CAN-SPAM Act, GDPR, the UK Privacy and Electronic Communications Regulations (PECR), CCPA/CPRA, and CASL. Recipients can opt out at any time using the unsubscribe link in every campaign email; opt-outs are honored automatically across all of your future campaigns.
              </p>

              <p className="mt-4 font-semibold text-text-primary">Limited Use of Google API and Chrome Web Store data.</p>
              <p className="mt-2">
                {SITE_NAME}&apos;s use and transfer to any other app of information received from Google APIs and from users of its Chrome extension will adhere to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements. We do not transfer this information to third parties except as necessary to provide or improve user-facing features, to comply with applicable law, or as part of a merger, acquisition, or sale of assets with prior user consent. We do not use or transfer this information for serving advertisements, including retargeted, personalized, or interest-based advertising. We do not use or transfer this information to determine credit-worthiness or for lending purposes. We do not allow humans to read this information except (i) with the user&apos;s affirmative agreement for specific messages, (ii) as necessary for security purposes, (iii) to comply with applicable law, or (iv) where the information has been aggregated and anonymized for internal operations.
              </p>
              <p className="mt-3"><strong className="text-text-primary">Google Drive-specific:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The <code>drive.file</code> scope is per-file: {SITE_NAME} can only open the specific sheet(s) you pick in the Google Picker or that it created for you. It cannot see, list, or read any other file in your Google Drive.</li>
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
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">5. How We Share Information</h2>
              <p>We share information only as follows:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>To Google, on your explicit instruction</strong> — to write rows to <em>your</em> Google Sheet, or to send an email from <em>your</em> Gmail account to a recipient <em>you</em> specified in a campaign.</li>
                <li><strong>To the email recipient&apos;s mail provider</strong> — when you send a campaign, the message is delivered to the recipient&apos;s inbox via Gmail, the same way any email from you reaches them.</li>
                <li><strong>Service providers (sub-processors) strictly necessary to run the Services</strong> — Supabase (managed PostgreSQL hosting), Render (application hosting), and the Redis provider used for our outbound mail queue. These vendors process data only as our service providers, under contractual confidentiality, and never for their own purposes.</li>
                <li><strong>Legal compliance</strong> — to comply with applicable law, lawful requests by public authorities, court orders, or to protect our or others&apos; rights, property, or safety.</li>
                <li><strong>Business transfers</strong> — in connection with a merger, acquisition, financing, reorganization, or sale of assets, with notice to you and an opportunity to object where required by law.</li>
                <li><strong>With your consent</strong>.</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> sell Account Data or Member Data, and we do not &quot;share&quot; Account Data or Member Data for cross-context behavioral advertising, as those terms are defined under the California Consumer Privacy Act, as amended (&quot;CCPA&quot;).
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">6. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Account Data:</strong> retained while your account is active and for up to twenty-four (24) months thereafter, unless a longer period is required by law. You may request earlier deletion as described in Section 8.</li>
                <li><strong>Member Data (leads, templates, campaigns, send logs, unsubscribes):</strong> retained per your instructions; absent specific instructions, deleted within ninety (90) days of capture or thirty (30) days after account termination, whichever is earlier. Unsubscribe records are retained for as long as needed to honor opt-outs.</li>
                <li><strong>Log data:</strong> retained for up to twelve (12) months for security and debugging purposes.</li>
                <li><strong>Backups:</strong> rotated and overwritten on a rolling basis not to exceed ninety (90) days.</li>
                <li><strong>Locally cached data</strong> in <code>chrome.storage</code> is removed automatically when you uninstall the Extension.</li>
              </ul>
              <p className="mt-3">On account deletion we revoke OAuth tokens server-side and remove all records, except where retention is required for legal or fraud-prevention purposes.</p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">7. Security</h2>
              <p>
                We implement administrative, technical, and physical safeguards designed to protect information, including TLS 1.2+ in transit, encryption at rest for OAuth tokens and other sensitive credentials, role-based access controls, and periodic security review. No method of transmission or storage is perfectly secure; we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">8. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>GDPR / UK GDPR (EEA, UK, Switzerland):</strong> rights of access, rectification, erasure, restriction, objection, portability, and withdrawal of consent. You may also lodge a complaint with your local supervisory authority.</li>
                <li><strong>CCPA / CPRA (California):</strong> rights to know, delete, correct, opt out of sale or sharing (we do not sell or share — see Section 5), limit use of sensitive personal information (we do not collect SPI for the purposes that trigger this right), and non-discrimination for exercising your rights. We have not sold or shared personal information in the preceding twelve (12) months.</li>
                <li><strong>Other U.S. state privacy laws</strong> (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, Texas TDPSA, and others as enacted): similar rights of access, correction, deletion, and opt-out of targeted advertising; we honor these rights subject to applicable verification.</li>
              </ul>
              <p className="mt-3">
                To exercise any right, email{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a> with the subject line &quot;Privacy Rights Request.&quot; We will respond within the time required by applicable law (generally 30–45 days). We may need to verify your identity before fulfilling certain requests. You may use an authorized agent where permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">9. International Transfers</h2>
              <p>
                We are based in the United States and process information in the United States and other countries where our service providers operate. For transfers of personal data from the EEA, UK, or Switzerland to the United States or other non-adequate countries, we rely on the Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914) and any approved UK Addendum issued by the Information Commissioner&apos;s Office, supplemented by appropriate technical and organizational measures.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">10. Children&apos;s Privacy</h2>
              <p>
                The Services are intended for users 18 years of age or older and are not directed to children. We do not knowingly collect personal information from children under 13 (or under 16 in the EEA). If we learn we have collected such information, we will delete it.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">11. Cookies and Tracking</h2>
              <p>
                The Site uses strictly-necessary cookies for authentication and session security, and may use privacy-respecting aggregate analytics. The Extension itself does not set tracking cookies on facebook.com; it uses <code>chrome.storage.local</code> only for your settings and the local lead queue. We honor Global Privacy Control (GPC) signals as opt-out signals where required by law.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">12. Trademarks &amp; Facebook / Meta Disclaimer</h2>
              <p>
                &quot;Facebook,&quot; &quot;Meta,&quot; &quot;Instagram,&quot; and related marks are trademarks of Meta Platforms, Inc. {SITE_NAME} is <strong>not affiliated with, endorsed by, sponsored by, or in any way officially connected to</strong> Meta Platforms, Inc. or any of its subsidiaries. {SITE_NAME} operates only on group-administration pages that you, as a Group Admin, are already authorized to view.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be communicated by updating the &quot;Last updated&quot; date and, where appropriate, by direct notice to your account email or a prominent in-product notice.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">14. Contact Us</h2>
              <p>
                <strong>Leadseeder, LLC</strong><br />
                Attn: Privacy Officer<br />
                1111b South Governors Avenue, Dover, DE 19904, USA<br />
                Email: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-blue hover:underline">{SUPPORT_EMAIL}</a>
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-text-primary mb-3">15. Limited Use Statement</h2>
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
