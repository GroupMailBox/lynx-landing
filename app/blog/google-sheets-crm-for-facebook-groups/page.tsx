import type { Metadata } from 'next';
import Link from 'next/link';
import Article from '@/components/blog/Article';

const TITLE = 'Use Google Sheets as a Simple CRM for Your Facebook Group';
const DESCRIPTION =
  'A free, practical CRM for group admins: the columns to use, how to tag members by their answers, statuses that tell you who to follow up with, and when you actually need a paid CRM.';

export const metadata: Metadata = {
  alternates: { canonical: '/blog/google-sheets-crm-for-facebook-groups/' },
  title: `${TITLE} (2026)`,
  description: DESCRIPTION,
  openGraph: { type: 'article', title: TITLE, description: DESCRIPTION, url: '/blog/google-sheets-crm-for-facebook-groups/' },
};

const COLUMNS = [
  ['Joined', 'Date the request was approved. Sort by it to see who is new this week.'],
  ['Name', 'As shown on the request.'],
  ['Profile link', 'So you can find the person on Facebook later.'],
  ['Q1, Q2, Q3', 'One column per membership question, holding the answer.'],
  ['Email', 'Only if they chose to share it in your email question.'],
  ['Segment', 'Your tag, based on their answers (for example: beginner, agency, local).'],
  ['Status', 'Where they are: new, welcomed, replied, customer, not interested.'],
  ['Last contact', 'Date of your last email or message.'],
  ['Notes', 'Anything you learned in a reply or call.'],
];

export default function SheetsCrmArticle() {
  return (
    <Article
      slug="google-sheets-crm-for-facebook-groups"
      title={TITLE}
      description={DESCRIPTION}
      category="Guide"
      published="2026-10-26"
      readMinutes={6}
    >
      <p>
        Most Facebook group admins do not need a full CRM. They need one place that answers three questions: who joined, what
        do they want, and have I followed up? A well-structured Google Sheet does that for free, and your co-admins can work
        in it with you.
      </p>

      <h2>The columns that matter</h2>
      <table>
        <thead>
          <tr>
            <th>Column</th>
            <th>What goes in it</th>
          </tr>
        </thead>
        <tbody>
          {COLUMNS.map(([c, d]) => (
            <tr key={c}>
              <td><strong>{c}</strong></td>
              <td>{d}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        Keep one row per person and never delete rows. Change the <strong>Status</strong> instead, so your history stays intact.
      </div>

      <h2>Tag members by their answers</h2>
      <p>
        Your membership questions already tell you who people are. Turn the answers into a <strong>Segment</strong> so you can
        welcome each group differently. For example, if Q2 asks “Which best describes you: starting, growing or scaling?”, the
        segment is simply that answer. If you are still choosing questions, see our{' '}
        <Link href="/blog/facebook-group-membership-questions/">60 membership question examples</Link>.
      </p>

      <h2>Statuses that tell you what to do next</h2>
      <ol>
        <li><strong>New</strong>: joined, not contacted yet.</li>
        <li><strong>Welcomed</strong>: welcome email or message sent.</li>
        <li><strong>Replied</strong>: they answered. Talk to them like a person, no more automated nudges.</li>
        <li><strong>Customer</strong>: they bought or booked.</li>
        <li><strong>Not interested / unsubscribed</strong>: never contact them again.</li>
      </ol>
      <p>
        Add a filter view for <em>Status = New</em> and you have your daily to-do list. Conditional formatting (for example,
        highlighting rows where Last contact is more than 7 days ago) shows who is going cold.
      </p>

      <h2>Keep it up to date without copy-pasting</h2>
      <p>
        The weak point of a spreadsheet CRM is data entry. Copying each request and its answers by hand works for a few people
        a week. GroupMailBox fills the sheet for you as you review member requests, and when you send{' '}
        <Link href="/blog/email-facebook-group-members/">welcome emails from Gmail</Link>, it tracks who replied, who is still in the sequence and who unsubscribed in the side panel, so you only update the Status column for people who need a personal touch.
      </p>

      <h2>When you actually need a paid CRM</h2>
      <ul>
        <li>Several people sell to the same leads and need deal stages, tasks and reminders.</li>
        <li>You track pipeline value and forecast revenue.</li>
        <li>You need integrations with calendars, invoicing or phone systems.</li>
      </ul>
      <p>
        Until then, a sheet is faster to set up and easier for co-admins to use. When you do outgrow it, export it as CSV and
        import it into the CRM of your choice: see{' '}
        <Link href="/blog/export-facebook-group-members/">exporting group members to Sheets, Excel or CSV</Link>.
      </p>
    </Article>
  );
}
