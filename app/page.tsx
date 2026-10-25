import Link from 'next/link';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';
import Accordion from '@/components/ui/Accordion';
import FlowMock from '@/components/home/FlowMock';
import { SoftwareApplicationSchema, FAQPageSchema } from '@/components/seo/JsonLd';
import { CHROME_STORE_URL, FAQ_DATA, PRICING_PLANS } from '@/lib/constants';

const icon = (d: string) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
);

const PILLARS = [
  {
    eyebrow: 'Capture',
    title: 'Every member request, the moment it arrives',
    body: 'Names, profile links and all three screening answers, grabbed from your admin page while you approve.',
  },
  {
    eyebrow: 'Organise',
    title: 'A clean Google Sheet, kept up to date',
    body: 'Each lead lands as a row with its answers, and its email status is written back as the conversation moves.',
  },
  {
    eyebrow: 'Follow up',
    title: 'Personal emails from your Gmail, until they reply',
    body: 'A welcome email plus up to four follow-ups in the same thread. Anyone who replies or unsubscribes drops out automatically.',
  },
];

const FEATURES = [
  { title: 'One-click capture', body: 'Grab every pending request at once. No copying and pasting from tiny Facebook modals.', d: 'M12 4v16m8-8H4' },
  { title: 'Screening answers', body: 'All three question-and-answer pairs captured with each member, so you know who is a buyer.', d: 'M8 10h8M8 14h5M21 12a9 9 0 1 1-4.2-7.6L21 3v5h-5' },
  { title: 'Google Sheets sync', body: 'Leads arrive in your own spreadsheet with tidy columns, ready for your CRM or team.', d: 'M4 4h16v16H4zM4 10h16M10 4v16' },
  { title: 'Gmail follow-ups', body: 'Sequences that send from your Gmail at a human pace and stop the moment someone replies.', d: 'M4 6h16v12H4zM4 7l8 6 8-6' },
  { title: 'Auto-approve', body: 'Approve requests for you with safety delays that look human. Wake up to a bigger group.', d: 'M5 13l4 4L19 7' },
  { title: 'Unsubscribe built in', body: 'Every email carries a one-click unsubscribe, and opted-out people are never emailed again.', d: 'M18.4 5.6 5.6 18.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
];

const STEPS = [
  { n: '1', title: 'Install the extension', body: 'Add GroupMailBox to Chrome. No account needed to start capturing.' },
  { n: '2', title: 'Open your member requests', body: 'Go to your group admin page as usual. The side panel opens beside it.' },
  { n: '3', title: 'Capture and sync', body: 'New requests are captured and pushed to your Google Sheet in one click.' },
  { n: '4', title: 'Follow up from Gmail', body: 'Pick a template and a few follow-ups. Replies land in your inbox, as normal.' },
];

const COMPARISON = [
  { feature: 'Free plan', gmb: 'Yes, 1 group', gc: 'No', gl: 'No', gb: 'No' },
  { feature: 'Google Sheets push', gmb: 'Native', gc: 'Yes', gl: 'Yes', gb: 'Yes' },
  { feature: 'Screening answers', gmb: 'All 3 Q&A', gc: 'Limited', gl: 'Yes', gb: 'Yes' },
  { feature: 'Try without an account', gmb: 'Yes', gc: 'No', gl: 'No', gb: 'No' },
  { feature: 'Auto-approve members', gmb: 'Pro plan', gc: 'Yes', gl: 'Yes', gb: 'Yes' },
  { feature: 'Starting price', gmb: 'Free', gc: 'Paid only', gl: '$27/mo', gb: '$45/quarter' },
];

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">{eyebrow}</p>
      <h2 className="font-sora text-3xl font-bold tracking-tight md:text-[42px] md:leading-[1.1]">{title}</h2>
      {sub && <p className="mt-4 text-lg text-text-secondary">{sub}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <FAQPageSchema items={FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer }))} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pt-40">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(47,107,242,0.12)_0%,rgba(124,92,255,0.06)_40%,transparent_75%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(14,18,34,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,18,34,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-4xl text-center">
            <Link
              href="#follow-up"
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-xs font-medium text-text-secondary shadow-card hover:border-accent-blue/30"
            >
              <span className="rounded-full bg-accent-blue px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">New</span>
              Gmail follow-ups that stop on reply
              <span aria-hidden>→</span>
            </Link>
                      <h1 className="font-sora text-[42px] font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Turn Facebook group members{' '}
              <span className="text-gradient-teal">into customers.</span>
            </h1>
                      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
              GroupMailBox captures every member request, syncs it to Google Sheets, and follows up from your own Gmail
              until they reply. One Chrome extension, no Zapier.
            </p>
                      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={CHROME_STORE_URL} size="lg" external>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 6.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" /></svg>
                Add to Chrome, it&apos;s free
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
            <p className="mt-4 text-sm text-text-muted">Free plan for one group · No credit card · No account to try</p>
                  </div>
          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-[32px] bg-gradient-to-b from-navy-light to-transparent" aria-hidden />
            <FlowMock />
          </div>
              </section>

      {/* ===== WORKS WITH ===== */}
      <section className="border-y border-black/[0.06] bg-navy-light/60 px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-text-muted">
          <span className="text-xs font-medium uppercase tracking-[0.14em]">Works with</span>
          <span>Facebook Groups</span>
          <span>Google Sheets</span>
          <span>Gmail &amp; Google Workspace</span>
          <span>Google Chrome</span>
        </div>
      </section>

      {/* ===== THE LOOP ===== */}
      <section className="px-4 py-24 md:py-28" id="follow-up">
        <SectionHead
          eyebrow="One loop, one tool"
          title="From join request to conversation"
          sub="Other group tools stop at the spreadsheet and send you off to Mailchimp or Zapier. GroupMailBox closes the loop."
        />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <AnimateIn key={p.eyebrow} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-black/[0.08] bg-white p-7 shadow-card">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-blue/10 font-sora text-sm font-bold text-accent-blue">
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">{p.eyebrow}</span>
                </div>
                <h3 className="font-sora text-xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-text-secondary">{p.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="bg-navy-light/60 px-4 py-24 md:py-28" id="features">
        <SectionHead eyebrow="Features" title="Everything a group admin needs to sell" />
        <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <AnimateIn key={f.title} delay={(i % 3) * 0.05}>
              <div>
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-black/[0.06] bg-white text-accent-blue shadow-card">
                  {icon(f.d)}
                </span>
                <h3 className="font-sora text-lg font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-text-secondary">{f.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-4 py-24 md:py-28" id="how-it-works">
        <SectionHead eyebrow="How it works" title="Set up in five minutes" />
        <ol className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <AnimateIn key={s.n} delay={i * 0.06}>
              <li className="relative h-full rounded-2xl border border-black/[0.08] bg-white p-6">
                <span className="font-sora text-4xl font-bold text-accent-blue/20">{s.n}</span>
                <h3 className="mt-3 font-sora text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{s.body}</p>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </section>

      {/* ===== COMPARE ===== */}
      <section className="bg-navy-light/60 px-4 py-24 md:py-28">
        <SectionHead eyebrow="Compare" title="Why admins switch to GroupMailBox" />
        <AnimateIn>
          <div className="mx-auto max-w-5xl overflow-x-auto rounded-2xl border border-black/[0.08] bg-white shadow-card">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-black/[0.06] text-left">
                  <th className="px-6 py-4 font-medium text-text-muted">Feature</th>
                  <th className="bg-accent-blue/[0.05] px-6 py-4 font-sora font-bold text-accent-blue">GroupMailBox</th>
                  <th className="px-6 py-4 font-medium text-text-muted">GroupConvert</th>
                  <th className="px-6 py-4 font-medium text-text-muted">GroupLeads</th>
                  <th className="px-6 py-4 font-medium text-text-muted">Groupboss</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.feature} className="border-b border-black/[0.04] last:border-0">
                    <td className="px-6 py-3.5 text-text-secondary">{r.feature}</td>
                    <td className="bg-accent-blue/[0.05] px-6 py-3.5 font-semibold text-text-primary">{r.gmb}</td>
                    <td className="px-6 py-3.5 text-text-muted">{r.gc}</td>
                    <td className="px-6 py-3.5 text-text-muted">{r.gl}</td>
                    <td className="px-6 py-3.5 text-text-muted">{r.gb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link href="/compare/groupboss-alternative" className="text-accent-blue hover:underline">Groupboss alternative</Link>
          <span className="text-text-muted">·</span>
          <Link href="/compare/groupleads-alternative" className="text-accent-blue hover:underline">GroupLeads alternative</Link>
          <span className="text-text-muted">·</span>
          <Link href="/compare/groupconvert-alternative" className="text-accent-blue hover:underline">GroupConvert alternative</Link>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="px-4 py-24 md:py-28">
        <SectionHead eyebrow="Pricing" title="Start free. Upgrade when it pays for itself." />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {PRICING_PLANS.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col rounded-2xl border bg-white p-7 ${p.highlighted ? 'border-accent-blue shadow-pop ring-4 ring-accent-blue/10' : 'border-black/[0.08] shadow-card'}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-sora text-lg font-bold">{p.name}</h3>
                {p.highlighted && <span className="rounded-full bg-accent-blue/10 px-2.5 py-1 text-xs font-semibold text-accent-blue">Most popular</span>}
              </div>
              <p className="mt-1 text-sm text-text-muted">{p.description}</p>
              <p className="mt-6">
                <span className="font-sora text-4xl font-bold">{p.price}</span>
                <span className="text-text-muted"> {p.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-[15px] text-text-secondary">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="mt-0.5 text-accent-green" aria-hidden>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/pricing" variant={p.highlighted ? 'primary' : 'secondary'} className="mt-7 w-full">
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-navy-light/60 px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="FAQ" title="Questions admins ask first" />
          <Accordion items={FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer }))} />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="px-4 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-ink px-6 py-16 text-center text-white md:px-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-blue/40 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#7C5CFF]/30 blur-3xl" aria-hidden />
          <h2 className="relative font-sora text-3xl font-bold tracking-tight md:text-5xl">Your group is full of customers.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/70">
            Capture them, sync them and follow up, all from the side panel you already use to approve members.
          </p>
          <div className="relative mt-8 flex justify-center">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-ink transition hover:-translate-y-px"
            >
              Add to Chrome, it&apos;s free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
