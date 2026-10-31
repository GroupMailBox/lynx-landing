import type { Metadata } from 'next';
import Link from 'next/link';
import Article from '@/components/blog/Article';
import { FAQPageSchema } from '@/components/seo/JsonLd';

const TITLE = 'Use Google Sheets as a Simple CRM for Your Facebook Group';
const DESCRIPTION =
  'A free, practical CRM for group admins: the columns to use, how to tag members by their answers, statuses that tell you who to follow up with, and when you actually need a paid CRM.';

export const metadata: Metadata = {
  alternates: { canonical: '/blog/google-sheets-crm-for-facebook-groups/' },
  title: { absolute: "Google Sheets CRM for Facebook Groups (Free Setup)" },
  description: "Turn a Google Sheet into a simple CRM for your Facebook group: columns, statuses, filters and follow-ups, with a free template layout.",
  openGraph: { type: 'article', title: TITLE, description: DESCRIPTION, url: '/blog/google-sheets-crm-for-facebook-groups/', images: ['/og/google-sheets-crm-for-facebook-groups.png'] },
};

const COLUMNS = [
  ['A', 'Joined', 'Date the request was approved. Sort by it to see who is new this week.'],
  ['B', 'Name', 'As shown on the request.'],
  ['C', 'Profile link', 'So you can find the person on Facebook later.'],
  ['D–F', 'Q1, Q2, Q3', 'One column per membership question, holding the answer.'],
  ['G', 'Email', 'Only if they chose to share it in your email question.'],
  ['H', 'Segment', 'Your tag, based on their answers (for example: beginner, agency, local).'],
  ['I', 'Status', 'Where they are: new, welcomed, replied, customer, not interested.'],
  ['J', 'Last contact', 'Date of your last email or message.'],
  ['K', 'Notes', 'Anything you learned in a reply or call.'],
];

const FAQ = [
  {
    question: 'Is there a free template?',
    answer:
      'Use the column layout in this guide: create a blank Google Sheet, type the headers into row 1, then add the dropdowns and colour rules described here. It takes about ten minutes.',
  },
  {
    question: 'Can co-admins work in the same sheet?',
    answer:
      'Yes. Share it with each co-admin from the Share button. Give everyone a filter view of their own, so filtering does not change what others see.',
  },
  {
    question: 'Does GroupMailBox update the Status column for me?',
    answer:
      'No. GroupMailBox adds new members and their answers to your sheet. Who replied, who is still in a follow-up sequence and who unsubscribed is shown in its side panel, not written back to the sheet.',
  },
  {
    question: 'How many rows can a Google Sheet hold?',
    answer:
      'Far more than a group CRM needs. If the sheet gets slow, move older rows to an archive tab rather than deleting them.',
  },
];

export default function SheetsCrmArticle() {
  return (
    <Article
      slug="google-sheets-crm-for-facebook-groups"
      title={TITLE}
      description={DESCRIPTION}
      category="Guide"
      published="2026-10-26"
      updated="2026-10-31"
      readMinutes={8}
    >
      <FAQPageSchema items={FAQ} />
      <p>
        Most Facebook group admins do not need a full CRM. They need one place that answers three questions: who joined, what
        do they want, and have I followed up? A well-structured Google Sheet does that for free, and your co-admins can work
        in it with you. This guide gives you the columns, then the four Sheets features that turn a list into a CRM:
        dropdowns, filter views, colour rules and a frozen header.
      </p>

      <h2>The columns that matter</h2>
      <p>Create a blank sheet, name the tab <em>Members</em>, and type these headers into row 1:</p>
      <table>
        <thead>
          <tr>
            <th>Col</th>
            <th>Header</th>
            <th>What goes in it</th>
          </tr>
        </thead>
        <tbody>
          {COLUMNS.map(([l, c, d]) => (
            <tr key={c}>
              <td className="whitespace-nowrap">{l}</td>
              <td><strong>{c}</strong></td>
              <td>{d}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        Keep one row per person and never delete rows. Change the <strong>Status</strong> instead, so your history stays intact.
      </div>
      <p>
        Then freeze the header so it stays visible as the list grows: <strong>View → Freeze → 1 row</strong>. Format column
        A and column J as dates (<strong>Format → Number → Date</strong>) so sorting and the colour rules below work.
      </p>

      <h2>Tag members by their answers</h2>
      <p>
        Your membership questions already tell you who people are. Turn the answers into a <strong>Segment</strong> so you can
        welcome each group differently. For example, if Q2 asks “Which best describes you: starting, growing or scaling?”, the
        segment is simply that answer. If you are still choosing questions, see our{' '}
        <Link href="/blog/facebook-group-membership-questions/">60 membership question examples</Link>.
      </p>
      <p>
        Keep segments few: three to five is plenty. If you cannot say how you would treat a segment differently, merge it with
        another.
      </p>

      <h2>Statuses that tell you what to do next</h2>
      <ol>
        <li><strong>New</strong>: joined, not contacted yet.</li>
        <li><strong>Welcomed</strong>: welcome email or message sent.</li>
        <li><strong>Replied</strong>: they answered. Talk to them like a person, no more automated nudges.</li>
        <li><strong>Customer</strong>: they bought or booked.</li>
        <li><strong>Not interested / unsubscribed</strong>: never contact them again.</li>
      </ol>

      <h2>Step 1: Make Status and Segment dropdowns</h2>
      <p>
        Free text drifts: “replied”, “Replied!” and “rep” all mean the same thing but break your filters. A dropdown keeps
        values consistent. Following Google&apos;s{' '}
        <a href="https://support.google.com/docs/answer/186103" rel="noopener">dropdown help page</a>:
      </p>
      <ol>
        <li>Select the Status cells below the header, for example I2:I1000.</li>
        <li>Click <strong>Insert → Dropdown</strong>. The Data validation rules panel opens.</li>
        <li>Under Criteria, choose <strong>Dropdown</strong> and type each status, clicking <em>Add another item</em> between them.</li>
        <li>Pick a colour for each option if you like, then click <strong>Done</strong>.</li>
      </ol>
      <p>
        By default Sheets rejects values that are not on the list. Repeat for column H with your segments. If you want to
        manage the lists in one place, put them on a tab called <em>Lists</em> and choose <strong>Dropdown (from a range)</strong> instead.
      </p>

      <h2>Step 2: Save filter views for your daily lists</h2>
      <p>
        A normal filter changes the sheet for everyone who has it open. A filter view only changes your own view, so co-admins
        can each have theirs. From Google&apos;s{' '}
        <a href="https://support.google.com/docs/answer/3540681" rel="noopener">filter help page</a>:
      </p>
      <ol>
        <li>Click <strong>Data → Create filter view</strong>.</li>
        <li>Click the filter icon on the Status header and keep only <em>New</em>.</li>
        <li>Sort by Joined, oldest first, so nobody waits longest.</li>
        <li>Name the view “To welcome” and save it.</li>
      </ol>
      <p>
        Useful views to add: <em>Replied</em> (people waiting for a personal answer), <em>Customer</em>, and one per segment.
        Each filter view has its own link, which you can send to a co-admin.
      </p>

      <h2>Step 3: Colour rows that are going cold</h2>
      <p>
        Conditional formatting shows at a glance who needs attention. Using Google&apos;s{' '}
        <a href="https://support.google.com/docs/answer/78413" rel="noopener">conditional formatting help page</a>:
      </p>
      <ol>
        <li>Select A2:K1000.</li>
        <li>Click <strong>Format → Conditional formatting</strong>.</li>
        <li>Under “Format cells if”, choose <strong>Custom formula is</strong>.</li>
        <li>
          Enter <code>=AND($I2=&quot;Welcomed&quot;, $J2&lt;TODAY()-7)</code> and choose a light orange fill.
        </li>
        <li>Click <strong>Done</strong>.</li>
      </ol>
      <p>
        The dollar sign before the column letter locks the rule to columns I and J while it moves down the rows, so the whole
        row lights up. Add a second rule, <code>=$I2=&quot;Replied&quot;</code> in green, so replies stand out, and a third
        with <code>=AND($G2&lt;&gt;&quot;&quot;, COUNTIF($G$2:$G,$G2)&gt;1)</code> to flag an email that appears twice.
      </p>

      <h2>Keep it up to date without copy-pasting</h2>
      <p>
        The weak point of a spreadsheet CRM is data entry. Copying each request and its answers by hand works for a few people
        a week. GroupMailBox fills the sheet for you while the member requests page is open on your desktop, including emails
        written inside a sentence. When you send{' '}
        <Link href="/blog/email-facebook-group-members/">welcome emails from Gmail</Link>, up to four follow-ups go in the
        same thread and stop on a reply, unsubscribe or bounce. Who replied, who is still in the sequence and who unsubscribed
        is tracked in the side panel, not written back to the sheet, so you only update the Status column for people who
        need a personal touch.
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
        <Link href="/blog/export-facebook-group-members/">exporting group members to Sheets, Excel or CSV</Link>. The sheet
        holds personal data, so share it only with people who need it, and only email members who opted in (our{' '}
        <Link href="/blog/facebook-group-email-consent/">consent guide</Link> explains why).
      </p>

      <h2>FAQ</h2>
      {FAQ.map((f) => (
        <div key={f.question}>
          <h3>{f.question}</h3>
          <p>{f.answer}</p>
        </div>
      ))}
    </Article>
  );
}
