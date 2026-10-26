import type { Metadata } from 'next';
import Link from 'next/link';
import Article from '@/components/blog/Article';

const TITLE = 'Facebook Group Welcome Message Templates: 18 Examples to Copy';
const DESCRIPTION =
  'Welcome post, thank-you-for-joining and welcome email templates for Facebook groups, for coaches, communities, businesses and hobby groups, plus when to send each one.';

export const metadata: Metadata = {
  alternates: { canonical: '/blog/facebook-group-welcome-message-templates/' },
  title: `${TITLE} (2026)`,
  description: DESCRIPTION,
  openGraph: { type: 'article', title: TITLE, description: DESCRIPTION, url: '/blog/facebook-group-welcome-message-templates/' },
};

const SECTIONS: { name: string; intro: string; items: { label: string; text: string }[] }[] = [
  {
    name: 'Weekly welcome posts (inside the group)',
    intro: 'Tag the week’s new members in one post. It makes them feel seen and gets them commenting early.',
    items: [
      { label: 'Friendly community', text: 'Welcome to everyone who joined this week! 👋 {{tags}}\n\nTell us one thing: where are you from, and what brought you here? Drop it in the comments so we can say hi.' },
      { label: 'Coaching group', text: 'A big welcome to our newest members {{tags}}!\n\nStart here: {{link to welcome guide}}. Then comment with the #1 result you want in the next 90 days. I read every one.' },
      { label: 'Business / professional', text: 'Welcome {{tags}}! This group is for {{who it is for}} who want to {{outcome}}.\n\nIntroduce yourself: what do you do, and what are you working on this month?' },
      { label: 'Hobby group', text: 'New members alert! 🎉 {{tags}}\n\nShare a photo of your latest {{hobby thing}} and tell us how long you have been at it.' },
      { label: 'Local group', text: 'Welcome to our new neighbours {{tags}}!\n\nPlease read the rules (pinned) and tell us which part of {{area}} you are in.' },
      { label: 'Course / creator group', text: 'Welcome aboard {{tags}}! 🙌\n\nYour first step: watch {{lesson}} ({{minutes}} min). Then post your biggest takeaway below.' },
    ],
  },
  {
    name: 'Thank-you-for-joining messages',
    intro: 'Short notes for when you approve someone. Keep them personal and give one next step.',
    items: [
      { label: 'Simple', text: 'Thanks for joining {{group name}}, {{first name}}! Start with the pinned post and say hi in this week’s welcome thread.' },
      { label: 'Uses their answer', text: 'Hi {{first name}}, thanks for joining! You said you want help with {{their answer}}, so this post is a great place to start: {{link}}.' },
      { label: 'Sets expectations', text: 'Welcome, {{first name}}! We post {{what}} every {{day}}. Turn on notifications for the group so you do not miss it.' },
      { label: 'Invites a question', text: 'Glad you are here, {{first name}}. What is one question you would like answered in the group? Post it and tag me.' },
      { label: 'Points to the freebie', text: 'Thanks for joining! As promised, here is the free {{resource}}: {{link}}. Enjoy, and let us know what you think.' },
      { label: 'Community rules first', text: 'Welcome, {{first name}}! Quick favour: read our three rules (pinned). They keep the group useful for everyone.' },
    ],
  },
  {
    name: 'Welcome emails (for members who shared their email)',
    intro: 'Only for people who opted in through your membership questions. Send the first within a day, from your own inbox.',
    items: [
      { label: 'Day 0 welcome', text: 'Subject: Welcome to {{group name}}, {{first name}}\n\nHi {{first name}}, thanks for joining {{group name}}! You mentioned {{their answer}}, so start here: {{link}}.\n\nWhat is the one thing you would love to get from the group this month? Just hit reply.' },
      { label: 'Day 0, freebie delivery', text: 'Subject: Your {{resource}} is here\n\nHi {{first name}}, here is the {{resource}} you asked for when you joined: {{link}}.\n\nReply and tell me which part was most useful. I read every reply.' },
      { label: 'Day 3 follow-up', text: 'Subject: Re: Welcome to {{group name}}\n\nHi {{first name}}, quick follow-up in case my last email got buried. Members working on {{their answer}} usually find {{resource}} the most useful. Anything specific you are stuck on?' },
      { label: 'Day 7 last nudge', text: 'Subject: Re: Welcome to {{group name}}\n\nLast note from me so I do not crowd your inbox. If {{their answer}} is still a priority, {{offer}} is here: {{link}}. Either way, glad to have you.' },
      { label: 'Local / event group', text: 'Subject: What is on in {{area}} this month\n\nHi {{first name}}, welcome to {{group name}}! Here are the next three events: {{list}}. Hope to see you at one.' },
      { label: 'B2B / professional', text: 'Subject: Welcome, and a quick question\n\nHi {{first name}}, thanks for joining {{group name}}. What are you working on right now? I will point you to the most relevant threads and members.' },
    ],
  },
];

export default function WelcomeTemplatesArticle() {
  return (
    <Article
      slug="facebook-group-welcome-message-templates"
      title={TITLE}
      description={DESCRIPTION}
      category="Templates"
      published="2026-10-26"
      readMinutes={7}
    >
      <p>
        The first 48 hours after someone joins your Facebook group decide whether they become an active member or forget the
        group exists. A good welcome does two things: it makes people feel noticed, and it gives them one clear next step.
        Below are 18 templates you can copy, in three formats: the weekly welcome post, the thank-you note, and the welcome
        email.
      </p>
      <div className="callout">
        Replace the <code>{'{{placeholders}}'}</code> with your details. The best welcomes mention something the member told
        you in their <Link href="/blog/facebook-group-membership-questions/">membership answers</Link>.
      </div>

      {SECTIONS.map((s) => (
        <section key={s.name}>
          <h2>{s.name}</h2>
          <p>{s.intro}</p>
          {s.items.map((it) => (
            <div key={it.label}>
              <h3>{it.label}</h3>
              <pre className="callout whitespace-pre-wrap font-sans text-[15.5px] text-text-primary">{it.text}</pre>
            </div>
          ))}
        </section>
      ))}

      <h2>When to use each one</h2>
      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>When</th>
            <th>Who sees it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weekly welcome post</td>
            <td>Once a week</td>
            <td>Everyone in the group</td>
          </tr>
          <tr>
            <td>Thank-you note</td>
            <td>When you approve someone</td>
            <td>The new member</td>
          </tr>
          <tr>
            <td>Welcome email</td>
            <td>Within a day, then day 3 and 7 if no reply</td>
            <td>Members who opted in with their email</td>
          </tr>
        </tbody>
      </table>

      <h2>Send welcome emails automatically</h2>
      <p>
        Writing each welcome email by hand works for a few members a week. GroupMailBox captures new members and their
        answers as you approve them, personalises the welcome email from those answers, sends it from your Gmail, and follows
        up on day 3 and 7 only if they have not replied. Read the full method in{' '}
        <Link href="/blog/email-facebook-group-members/">how to email your Facebook group members</Link>.
      </p>
    </Article>
  );
}
