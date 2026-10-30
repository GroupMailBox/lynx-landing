import type { Metadata } from 'next';
import Link from 'next/link';
import Article from '@/components/blog/Article';

const TITLE = 'How to Email Your Facebook Group Members (Without Spamming Them)';
const DESCRIPTION =
  'Facebook has no way to email every member, so here is the method that works: collect emails with consent at join time, then send a short welcome sequence from your own Gmail that stops when people reply. Includes 3 templates.';

export const metadata: Metadata = {
  alternates: { canonical: '/blog/email-facebook-group-members/' },
  title: `${TITLE} (2026)`,
  description: DESCRIPTION,
  openGraph: { type: 'article', title: TITLE, description: DESCRIPTION, url: '/blog/email-facebook-group-members/' },
};

const SEQUENCE = [
  {
    when: 'Day 0, right after they join',
    subject: 'Welcome to {{group name}}, {{first name}}',
    body: `Hi {{first name}},

Thanks for joining {{group name}}! You mentioned you want help with {{their answer}}, so here is the one post I'd start with: {{link}}.

What's the one thing you'd love to get out of the group this month? Just hit reply, I read every answer.

{{your name}}`,
  },
  {
    when: 'Day 3, if they have not replied',
    subject: 'Re: Welcome to {{group name}}, {{first name}}',
    body: `Hi {{first name}}, quick follow-up in case my first email got buried.

Members who are working on {{their answer}} usually find {{resource}} the most useful. It takes about ten minutes.

Anything specific you're stuck on? A one-line reply is plenty.`,
  },
  {
    when: 'Day 7, last nudge',
    subject: 'Re: Welcome to {{group name}}, {{first name}}',
    body: `Hi {{first name}}, last note from me so I don't crowd your inbox.

If {{their answer}} is still a priority, {{your offer: a free call / the course / the guide}} is here: {{link}}.

Either way, glad to have you in the group.`,
  },
];

export default function EmailMembersArticle() {
  return (
    <Article
      slug="email-facebook-group-members"
      title={TITLE}
      description={DESCRIPTION}
      category="Guide"
      published="2026-10-26"
      readMinutes={8}
    >
      <p>
        Facebook does not let group admins send an email to all members. Posts and announcements stay inside Facebook, and
        only a fraction of members see each one. If your group is part of how you earn a living (as a coach, creator,
        consultant or local business), you need a way to reach people directly. Here is how to do it without buying a list
        or annoying anyone.
      </p>

      <div className="callout">
        <strong>The method in one line:</strong> ask for an email with clear consent when people join, then send a short,
        personal welcome sequence from your own Gmail that stops the moment someone replies.
      </div>

      <h2>Step 1: Collect emails with consent at join time</h2>
      <p>
        Add an optional email question to your membership questions and say what people will get. For example: “Want our
        free starter guide? Leave your email and we will send it. Unsubscribe any time.” Only email the people who answered
        it. Joining your group alone is not permission to email someone. For wording ideas, see our{' '}
        <Link href="/blog/facebook-group-membership-questions/">membership question examples</Link>.
      </p>

      <h2>Step 2: Keep every new member in one sheet</h2>
      <p>
        Save each request with its answers and email to a Google Sheet as you approve members. That sheet becomes your list:
        who joined, what they want, and whether you have followed up. Our guide on{' '}
        <Link href="/blog/export-facebook-group-members/">exporting group members to Google Sheets</Link> covers the setup.
      </p>

      <h2>Step 3: Send a short welcome sequence from Gmail</h2>
      <p>
        You do not need a newsletter platform to welcome new members. A few plain, personal emails sent from your own Gmail
        land like a message from a person, because they are. Three emails is enough:
      </p>
      {SEQUENCE.map((e) => (
        <section key={e.when}>
          <h3>{e.when}</h3>
          <p>
            <strong>Subject:</strong> {e.subject}
          </p>
          <pre className="callout whitespace-pre-wrap font-sans text-[15.5px] text-text-primary">{e.body}</pre>
        </section>
      ))}
      <p>
        Send the follow-ups in the <strong>same thread</strong> (a reply to your first email), so the conversation reads
        naturally, and <strong>stop as soon as someone replies</strong>. Nothing undoes a warm welcome faster than an
        automatic “just checking in” after they have already answered.
      </p>

      <h2>Step 4: Stay within Gmail&apos;s limits and keep a good reputation</h2>
      <ul>
        <li>
          <strong>Mind the daily limit.</strong> Google Workspace accounts can send up to 2,000 messages a day; personal
          Gmail accounts have a lower limit. A welcome sequence for new members rarely comes close, but pace large sends.
        </li>
        <li>
          <strong>Include an unsubscribe link</strong> in every email and honour it straight away.
        </li>
        <li>
          <strong>Write like a person.</strong> Short paragraphs, one link, a question they can answer in a line.
        </li>
        <li>
          <strong>Never import people who did not opt in.</strong> Spam complaints hurt the delivery of every email you send,
          including your one-to-one mail.
        </li>
      </ul>

      <h2>Doing it by hand vs. automating it</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>By hand</th>
            <th>With GroupMailBox</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Saving requests and answers</td>
            <td>Copy each one into a sheet</td>
            <td>Captured automatically as you review requests</td>
          </tr>
          <tr>
            <td>Welcome email</td>
            <td>Write and send each one</td>
            <td>Personalised from the sheet, sent from your Gmail</td>
          </tr>
          <tr>
            <td>Follow-ups</td>
            <td>Remember who to nudge, and when</td>
            <td>Sent on day 3 and 7 in the same thread</td>
          </tr>
          <tr>
            <td>Stopping when they reply</td>
            <td>Check your inbox before every nudge</td>
            <td>Automatic</td>
          </tr>
          <tr>
            <td>Unsubscribes</td>
            <td>Track them yourself</td>
            <td>One-click link in every email, never emailed again</td>
          </tr>
        </tbody>
      </table>
      <p>
        Other Facebook group tools stop at the spreadsheet and send you to a separate email marketing tool. GroupMailBox
        does the follow-up itself, from the Gmail account you already use. Compare it with{' '}
        <Link href="/compare/groupboss-alternative/">Groupboss</Link> or{' '}
        <Link href="/compare/groupleads-alternative/">Group Leads</Link>, or see{' '}
        <Link href="/pricing/">pricing</Link>.
      </p>

      <h2>FAQ</h2>
      <h3>Can I message all group members on Facebook instead?</h3>
      <p>
        Mass private messages from your personal profile look like spam to Facebook and to members, and can get your account
        restricted. Use group posts and announcements inside Facebook, and email only people who opted in.
      </p>
      <h3>Do I need Mailchimp or another email marketing tool?</h3>
      <p>
        Not for welcoming and following up with new members. A newsletter tool makes sense when you send designed campaigns
        to thousands of people; personal one-to-one follow-ups work better from Gmail.
      </p>
      <h3>How soon should I send the first email?</h3>
      <p>Within a day of approving someone, while they still remember joining and why.</p>
    </Article>
  );
}
