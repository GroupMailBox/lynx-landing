import type { Metadata } from 'next';
import Link from 'next/link';
import Article from '@/components/blog/Article';
import { FAQPageSchema } from '@/components/seo/JsonLd';
import { CHROME_STORE_URL } from '@/lib/constants';

const PATH = '/facebook-group-follow-up-emails/';
const TITLE = 'Facebook Group Follow-Up Emails That Stop When Members Reply';
const DESCRIPTION =
  'A plain-English guide to following up with new Facebook group members by email: when to send, what to say, and how to stop automatically the moment someone replies.';

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: { absolute: 'Facebook Group Follow-Up Emails (Stop on Reply)' },
  description:
    'How to follow up with new Facebook group members by email: timing, a 4-step sequence, and how to stop the moment they reply. Built in, no Zapier needed.',
  openGraph: {
    type: 'article',
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: ['/og.png'],
  },
};

const FAQ = [
  {
    question: 'Can I send follow-up emails to everyone in my Facebook group?',
    answer:
      'No. Facebook does not give admins member email addresses, and joining a group is not permission to email someone. Follow up only with people who chose to share their email, for example in a membership question that explained what they would receive.',
  },
  {
    question: 'How many follow-up emails should I send?',
    answer:
      'Three or four is plenty for a new-member welcome: a welcome on day 0, then short nudges a few days apart. GroupMailBox supports up to four follow-ups after the first email, and every one stops when the member replies or unsubscribes.',
  },
  {
    question: 'Do I need Zapier or a separate autoresponder?',
    answer:
      'Not with GroupMailBox. The extension captures the request and answers, saves them to your Google Sheet and sends the follow-ups itself. There is no email account to connect.',
  },
  {
    question: 'Is email follow-up available on the Free plan?',
    answer:
      'No. The Free plan captures answers to Google Sheets for 1 group (up to 100 leads a month). Email campaigns with follow-ups are on the Pro and Advanced plans.',
  },
  {
    question: 'What happens if someone replies?',
    answer:
      'The sequence stops for that person straight away, so they never get a “just checking in” email after they have already answered. You reply from your own inbox as normal.',
  },
];

export default function FollowUpEmailsPage() {
  return (
    <Article
      slug="facebook-group-follow-up-emails"
      path={PATH}
      section={{ name: 'Features', href: '/features/' }}
      title={TITLE}
      description={DESCRIPTION}
      category="Guide"
      published="2026-11-26"
      readMinutes={6}
    >
      <FAQPageSchema items={FAQ} />

      <p>
        Someone joins your Facebook group, you approve them, and then… nothing. They scroll past your welcome post, forget
        why they joined, and never hear from you again. A short run of follow-up emails fixes that. This guide covers who
        you can email, when to send, what to write, and how to make the whole thing stop automatically when a member
        replies.
      </p>

      <div className="callout">
        <strong>The short version:</strong> email only members who opted in, send a welcome straight away, follow up a few
        days apart in the same thread, and stop the moment they answer.
      </div>

      <h2>Why email beats another Facebook post</h2>
      <p>
        Posts and announcements stay inside Facebook, and only some members ever see them. An email lands in an inbox the
        member checks anyway, and a personal one reads like a note from a person. That is why a few well-timed emails to
        new members usually do more for engagement than another pinned post.
      </p>

      <h2>Who you can follow up with</h2>
      <p>
        Facebook does not hand admins a member&apos;s email address. The clean way to get one is to ask for it in your
        membership questions and say what people will get: for example, “Want our free starter guide? Leave your email.
        Unsubscribe any time.” Follow up only with people who answered. Our guides on{' '}
        <Link href="/blog/facebook-group-email-consent/">email consent</Link> and{' '}
        <Link href="/blog/facebook-group-membership-questions/">membership question examples</Link> cover the wording.
        This is general information, not legal advice, so check the rules that apply where you and your members live.
      </p>

      <h2>A simple four-step sequence</h2>
      <p>Here is a pattern that works for most coaches, creators and local businesses. Adjust the timing to suit your group.</p>
      <ol>
        <li>
          <strong>Day 0, welcome.</strong> Thank them, mention what they said they wanted help with, and link to one
          resource. End with a question they can answer in a line.
        </li>
        <li>
          <strong>Day 3, a gentle nudge.</strong> Same thread, short. Offer the most useful thing for people with their goal.
        </li>
        <li>
          <strong>Day 7, a helpful follow-up.</strong> Share an example, a short story or a quick win. Keep it about them.
        </li>
        <li>
          <strong>Day 14, the last note.</strong> Tell them it is your last email, restate your offer once, and wish them
          well.
        </li>
      </ol>
      <p>
        Want full copy to start from? The{' '}
        <Link href="/blog/email-facebook-group-members/">email templates guide</Link> has a three-email sequence, and the{' '}
        <Link href="/tools/follow-up-cadence-calculator/">follow-up cadence calculator</Link> helps you pick the gaps.
      </p>

      <h2>Stop on reply is the rule that matters most</h2>
      <p>
        The fastest way to ruin a warm start is to send an automatic “just checking in” to someone who already replied. In
        GroupMailBox, each member&apos;s sequence stops when they reply, unsubscribe or the address bounces. Replies come
        to your own inbox, so the conversation continues like any other.
      </p>

      <h2>How GroupMailBox runs the follow-ups for you</h2>
      <ul>
        <li>
          <strong>Capture:</strong> each request and its screening answers are saved to your Google Sheet as you review
          requests.
        </li>
        <li>
          <strong>Welcome email:</strong> sent with your name on it to members who shared an address, using their answers to
          personalise it.
        </li>
        <li>
          <strong>Up to four follow-ups</strong> in the same thread, so it reads as one conversation.
        </li>
        <li>
          <strong>Unsubscribe link in every email</strong>, honoured straight away.
        </li>
        <li>
          <strong>Results you can see</strong> for each step of a campaign, including replies.
        </li>
      </ul>
      <p>
        Other Facebook group tools typically save answers to a sheet and leave the emailing to a separate autoresponder,
        often connected through Zapier. Here the follow-up is part of the same extension, so there are fewer moving parts to
        set up and fewer places for a lead to get lost. See how it compares with{' '}
        <Link href="/compare/groupboss-alternative/">Groupboss</Link>,{' '}
        <Link href="/compare/groupleads-alternative/">Group Leads</Link> and{' '}
        <Link href="/compare/groupconvert-alternative/">Group Convert</Link>.
      </p>

      <h2>Writing follow-ups people reply to</h2>
      <ul>
        <li>Use their own words from the membership answer. It proves a person is writing.</li>
        <li>One link per email, and one question at the end.</li>
        <li>Keep it under 100 words after the first email.</li>
        <li>Use a normal subject line, such as “Re: Welcome to the group”, not a sales headline.</li>
        <li>If you add a big backlog of old members, spread the sends over a few days.</li>
      </ul>

      <h2>Pair it with auto-approve</h2>
      <p>
        If your group gets a steady stream of requests,{' '}
        <Link href="/features/auto-approve-facebook-group-members/">auto-approve</Link> clears the queue after each answer is
        saved, so the follow-up sequence starts for every new member without extra clicking.
      </p>

      <h2>Pricing and how to start</h2>
      <p>
        You can <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">install GroupMailBox from the Chrome
        Web Store</a> free and capture answers to Google Sheets for one group. Email campaigns with follow-ups come with the
        Pro plan ($29/month) and the Advanced plan ($99/month). Full details are on the{' '}
        <Link href="/pricing/">pricing page</Link>, and <Link href="/how-it-works/">how it works</Link> walks through each
        step.
      </p>

      <h2>FAQ</h2>
      {FAQ.map((f) => (
        <section key={f.question}>
          <h3>{f.question}</h3>
          <p>{f.answer}</p>
        </section>
      ))}
    </Article>
  );
}
