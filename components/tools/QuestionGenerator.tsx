'use client';

import { useMemo, useState } from 'react';

type Kind = 'coaching' | 'course' | 'business' | 'local' | 'hobby' | 'realestate';

const TYPES: Record<Kind, { label: string; filter: string[]; goal: string[] }> = {
  coaching: {
    label: 'Coaching or consulting',
    filter: ['Which best describes you: just starting with {topic}, growing, or scaling?', 'Have you worked with a coach on {topic} before? (Yes / No)'],
    goal: ['What is the one result you want with {topic} in the next 90 days?', 'What is your biggest challenge with {topic} right now?'],
  },
  course: {
    label: 'Online course or creator',
    filter: ['How did you hear about this group?', 'Are you already learning {topic}, or just getting started?'],
    goal: ['Which part of {topic} do you most want help with?', 'What would make this group worth checking every day for you?'],
  },
  business: {
    label: 'Business or professional',
    filter: ['What is your role? (Founder, marketer, freelancer, other)', 'What does your company do, in one line?'],
    goal: ['What is the main thing you want to improve in {topic} this quarter?', 'What would you like to get from other members here?'],
  },
  local: {
    label: 'Local community',
    filter: ['Which neighbourhood or area do you live or work in?', 'Do you agree to keep posts local and respectful? (Yes / No)'],
    goal: ['Are you joining to connect, to buy, or to sell?', 'What would you most like to see shared in this group?'],
  },
  hobby: {
    label: 'Hobby or interest',
    filter: ['How experienced are you with {topic}: beginner, intermediate or expert?', 'Do you agree not to post ads without permission? (Yes / No)'],
    goal: ['What got you into {topic}?', 'What would you love to learn or share about {topic} here?'],
  },
  realestate: {
    label: 'Real estate or property',
    filter: ['Are you buying, selling, renting or investing?', 'Are you a licensed agent? (Yes / No)'],
    goal: ['Which area are you interested in, and what is your timeframe?', 'What price range are you looking at?'],
  },
};

function CopyRow({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <li className="rounded-xl border border-black/[0.08] bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-blue">{label}</p>
          <p className="mt-1.5 text-[15.5px] font-medium text-text-primary">{text}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(text).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            });
          }}
          className="shrink-0 rounded-lg border border-black/[0.1] px-3 py-1.5 text-sm font-semibold hover:bg-navy-light"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </li>
  );
}

/** Free tool: three membership questions (filter, goal, optional email with consent). Runs in the browser. */
export default function QuestionGenerator() {
  const [kind, setKind] = useState<Kind>('coaching');
  const [topic, setTopic] = useState('');
  const [offer, setOffer] = useState('');
  const [variant, setVariant] = useState(0);

  const qs = useMemo(() => {
    const t = TYPES[kind];
    const fill = (s: string) => s.replace(/\{topic\}/g, topic.trim() || 'this topic');
    const gift = offer.trim() || 'our free starter guide';
    return [
      { label: 'Question 1 · filter', text: fill(t.filter[variant % t.filter.length]) },
      { label: 'Question 2 · goal', text: fill(t.goal[variant % t.goal.length]) },
      {
        label: 'Question 3 · email (optional, with consent)',
        text: `Want ${gift}? Leave your email and we will send it. You can unsubscribe any time (optional).`,
      },
    ];
  }, [kind, topic, offer, variant]);

  return (
    <div className="rounded-2xl border border-black/[0.08] bg-navy-light/60 p-6 shadow-card md:p-8">
      <div className="grid gap-5 md:grid-cols-3">
        <label className="block text-sm font-semibold">
          Type of group
          <select value={kind} onChange={(e) => setKind(e.target.value as Kind)} className="mt-2 w-full rounded-xl border border-black/[0.12] bg-white px-3 py-2.5 font-normal">
            {(Object.keys(TYPES) as Kind[]).map((k) => (
              <option key={k} value={k}>{TYPES[k].label}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Your topic
          <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Instagram marketing" className="mt-2 w-full rounded-xl border border-black/[0.12] bg-white px-3 py-2.5 font-normal" />
        </label>
        <label className="block text-sm font-semibold">
          What you&apos;ll email (optional)
          <input value={offer} onChange={(e) => setOffer(e.target.value)} placeholder="e.g. our free 7-day plan" className="mt-2 w-full rounded-xl border border-black/[0.12] bg-white px-3 py-2.5 font-normal" />
        </label>
      </div>
      <ul className="mt-7 space-y-3" aria-live="polite">
        {qs.map((q) => (
          <CopyRow key={q.label} label={q.label} text={q.text} />
        ))}
      </ul>
      <button type="button" onClick={() => setVariant((v) => v + 1)} className="mt-5 text-sm font-semibold text-accent-blue hover:underline">
        Show different wording ↻
      </button>
    </div>
  );
}
