'use client';

import dynamic from 'next/dynamic';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Accordion from '@/components/ui/Accordion';
import { SoftwareApplicationSchema, FAQPageSchema } from '@/components/seo/JsonLd';
import { CHROME_STORE_URL, FAQ_DATA } from '@/lib/constants';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => null,
});

const FEATURES = [
  {
    icon: (
      <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'One-Click Lead Capture',
    description: 'Hit one button and every pending member request gets scraped — names, profiles, answers. No copy-pasting.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M12 12v-1.5c0-.621-.504-1.125-1.125-1.125M9.75 8.625c0 .621.504 1.125 1.125 1.125" />
      </svg>
    ),
    title: 'Google Sheets Integration',
    description: 'Push captured leads straight into Google Sheets. Names, profiles, screening answers — neatly organized, zero manual entry.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Auto-Approve Members',
    description: 'Let the extension approve requests for you with smart safety delays that look human. Wake up to a bigger group.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Screening Answers',
    description: 'Captures all 3 screening question-answer pairs automatically. No more squinting at tiny Facebook modals.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Instant Detection',
    description: 'New member requests appear the moment they come in. No refreshing, no waiting — the extension watches for you.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: 'Side Panel Dashboard',
    description: 'Manage settings, view lead counts, and connect Google Sheets — all from a slide-out panel without leaving Facebook.',
  },
];

const STEPS = [
  {
    step: '01',
    title: 'Install from Chrome Web Store',
    description: 'Two clicks. No account creation needed upfront. Connect Google when you are ready to export.',
  },
  {
    step: '02',
    title: 'Open your member requests page',
    description: 'Navigate to your Facebook Group admin page like you normally would. GroupMailBox wakes up automatically.',
  },
  {
    step: '03',
    title: 'Watch the leads roll in',
    description: 'The extension spots every new request as it appears and grabs the data before you even scroll down.',
  },
  {
    step: '04',
    title: 'Export to Google Sheets',
    description: 'One click sends everything to a spreadsheet. Names, profile links, screening answers — all there.',
  },
];

const COMPARISON = [
  { feature: 'Price', gmb: 'Free tier', gc: '$19/mo', gl: '$27/mo', gb: '$9.99/mo' },
  { feature: 'Instant Detection', gmb: 'Yes', gc: 'No', gl: 'No', gb: 'No' },
  { feature: 'Screening Answers', gmb: '3 Q&A pairs', gc: 'Limited', gl: 'Yes', gb: 'Yes' },
  { feature: 'Google Sheets', gmb: 'Native', gc: 'CSV export', gl: 'Yes', gb: 'Yes' },
  { feature: 'Auto-Approve', gmb: 'Yes (Pro)', gc: 'Yes', gl: 'Yes', gb: 'No' },
  { feature: 'Side Panel UI', gmb: 'Yes', gc: 'No', gl: 'No', gb: 'No' },
];

/** Organic SVG blob for visual interest between sections */
function BlobDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M305.3,63.5C370.8,82.5,411.5,143.8,439.3,206.8C467.1,269.8,482.1,334.5,458.3,389.2C434.5,443.9,371.9,488.7,305.3,498.5C238.7,508.3,168.1,483.2,121.5,437.2C74.9,391.2,52.3,324.3,57.5,261.5C62.7,198.7,95.7,139.9,147.3,100.5C198.9,61.1,239.8,44.5,305.3,63.5Z"
        fill="rgba(79,140,255,0.03)"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <FAQPageSchema items={FAQ_DATA.map(f => ({ question: f.question, answer: f.answer }))} />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 hidden md:block" aria-hidden="true">
          <HeroScene />
        </div>

        {/* Gradient fallback for mobile / low-power */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-br from-navy via-navy-light to-navy-lighter" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center pt-32 pb-12">
          <AnimateIn animation="scale">
            <Badge className="mb-6">Chrome Extension</Badge>
          </AnimateIn>

          <AnimateIn delay={0.1} animation="scale">
            <h1 className="font-sora leading-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="font-normal">Stop losing leads from your</span>{' '}
              <span className="font-extrabold text-gradient-teal">Facebook Group</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              You know that feeling when 200 join requests pile up and you forgot to grab emails from the first 50? GroupMailBox captures every member request automatically and pushes them to Google Sheets.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={CHROME_STORE_URL} size="lg" external>
                Install Free for Chrome
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
            {/* TODO: Replace with real demo video link */}
            <p className="mt-4 text-text-muted text-sm">
              <a href="#how-it-works" className="underline underline-offset-4 hover:text-accent-blue transition-colors">
                Watch a 30-second walkthrough
              </a>
              {' '}&middot; No account required to start
            </p>
          </AnimateIn>

          {/* TODO: Replace with real product screenshot */}
          <AnimateIn delay={0.5}>
            <div
              className="mt-12 mx-auto max-w-3xl aspect-video rounded-[12px] border border-white/[0.08] bg-navy-light/40 flex items-center justify-center"
              role="img"
              aria-label="Product screenshot placeholder"
            >
              <p className="text-text-muted text-sm">
                {/* TODO: Replace with real hero screenshot of extension in action */}
                [Product screenshot: GroupMailBox capturing leads from Facebook Group member requests]
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      {/* Tighter transition from hero — no extra padding */}
      <section className="relative z-20 -mt-4 pb-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* No AnimateIn on social proof — static elements feel confident */}
          <div className="glass rounded-[12px] px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <p className="text-text-muted text-sm font-medium">Trusted by Facebook Group admins</p>
            <div className="flex items-center gap-10">
              {/* TODO: Replace these placeholder stats with real Chrome Web Store data once published */}
              <div className="text-center">
                <p className="font-sora font-bold text-5xl text-accent-blue">500+</p>
                <p className="text-text-muted text-xs">Active Users</p>
              </div>
              <div className="text-center">
                <p className="font-sora font-bold text-5xl text-accent-blue">50K+</p>
                <p className="text-text-muted text-xs">Leads Captured</p>
              </div>
              <div className="text-center">
                <p className="font-sora font-bold text-5xl text-accent-blue">4.8</p>
                <p className="text-text-muted text-xs">Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      {/* More breathing room before features — asymmetric padding */}
      <section className="pt-32 pb-20 px-4" id="features">
        {/* Full-bleed width for visual contrast */}
        <div className="max-w-7xl mx-auto">
          {/* No badge on Features — break the Badge > H2 > Subtitle pattern */}
          <div className="text-center mb-14">
            <AnimateIn animation="scale">
              <h2 className="font-sora text-3xl md:text-4xl mb-4">
                <span className="font-normal">Stop losing members to</span>{' '}
                <span className="font-extrabold text-gradient-teal">a broken spreadsheet workflow</span>
              </h2>
            </AnimateIn>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Built for Facebook Group admins who are tired of manually copying member data one-by-one.
            </p>
          </div>

          {/* Hero features: first 2 are wider with horizontal layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {FEATURES.slice(0, 2).map((feature, i) => (
              <AnimateIn key={feature.title} delay={i * 0.1} direction={i === 0 ? 'left' : 'right'}>
                <Card variant={i === 0 ? 'highlight' : 'glass'} tilt className="h-full">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-sora font-semibold text-xl mb-2 text-text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      {/* TODO: Replace with real screenshot of this feature */}
                      <div
                        className="mt-4 aspect-[16/9] rounded-[8px] border border-white/[0.06] bg-navy/40 flex items-center justify-center"
                        role="img"
                        aria-label={`${feature.title} screenshot placeholder`}
                      >
                        <p className="text-text-muted text-xs">
                          [Screenshot: {feature.title} in action]
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimateIn>
            ))}
          </div>

          {/* Remaining 4 features as cards with variation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.slice(2).map((feature, i) => {
              const variants: Array<'glass' | 'transparent' | 'accent-top' | 'highlight'> = ['accent-top', 'transparent', 'glass', 'accent-top'];
              return (
                <AnimateIn key={feature.title} delay={0.2 + i * 0.08}>
                  <Card variant={variants[i]} tilt className="h-full">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="font-sora font-semibold text-lg mb-2 text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organic blob decoration between sections */}
      <div className="relative" aria-hidden="true">
        <BlobDecoration className="absolute -top-48 -left-32 w-[500px] h-[500px] opacity-60" />
      </div>

      {/* ===== HOW IT WORKS ===== */}
      {/* Full-bleed background to break constrained-section monotony */}
      <section className="pt-20 pb-28 px-4 bg-navy-light/30" id="how-it-works">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <AnimateIn animation="scale">
              <h2 className="font-sora text-3xl md:text-4xl mb-3">
                <span className="font-normal">Get set up in</span>{' '}
                <span className="font-extrabold text-gradient-teal">under two minutes</span>
              </h2>
            </AnimateIn>
            <p className="text-text-secondary max-w-lg mx-auto">
              No complicated onboarding. Install, open your group, and leads start flowing.
            </p>
          </div>

          <div className="space-y-14">
            {STEPS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 0.12} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                    <span className="font-sora font-bold text-2xl text-accent-blue">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`text-center md:text-left ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                      <h3 className="font-sora font-semibold text-xl mb-2">{step.title}</h3>
                      <p className="text-text-secondary max-w-md">{step.description}</p>
                    </div>
                    {/* TODO: Replace with real annotated screenshot of this step */}
                    <div
                      className={`mt-4 aspect-[2/1] max-w-sm rounded-[8px] border border-white/[0.06] bg-navy/30 flex items-center justify-center ${i % 2 !== 0 ? 'md:ml-auto' : ''}`}
                      role="img"
                      aria-label={`Step ${step.step} screenshot placeholder`}
                    >
                      <p className="text-text-muted text-xs">
                        [Screenshot: {step.title}]
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Another blob between sections */}
      <div className="relative" aria-hidden="true">
        <BlobDecoration className="absolute -top-32 right-0 w-[400px] h-[400px] opacity-40 scale-x-[-1]" />
      </div>

      {/* ===== COMPARISON TEASER ===== */}
      {/* Visually "louder" section — full-bleed, more padding */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimateIn animation="scale">
            <div className="text-center mb-12">
              <Badge className="mb-4">Compare</Badge>
              <h2 className="font-sora text-3xl md:text-4xl mb-4">
                <span className="font-extrabold">Why admins switch</span>{' '}
                <span className="font-normal text-gradient-teal">to GroupMailBox</span>
              </h2>
              <p className="text-text-secondary">Real feature comparison. No marketing fluff.</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            {/* Mobile scroll indicator */}
            <div className="scroll-hint overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <p className="text-text-muted text-xs mb-2 md:hidden">Scroll to see all columns &rarr;</p>
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-4 px-4 text-text-muted font-medium">Feature</th>
                    <th className="py-4 px-4 text-accent-blue font-sora font-semibold">GroupMailBox</th>
                    <th className="py-4 px-4 text-text-muted font-medium">GroupConvert</th>
                    <th className="py-4 px-4 text-text-muted font-medium">GroupLeads</th>
                    <th className="py-4 px-4 text-text-muted font-medium">GroupBoss</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.feature} className="border-b border-white/[0.04]">
                      <td className="py-3 px-4 text-text-secondary">{row.feature}</td>
                      <td className="py-3 px-4 text-center text-accent-blue font-medium">{row.gmb}</td>
                      <td className="py-3 px-4 text-center text-text-muted">{row.gc}</td>
                      <td className="py-3 px-4 text-center text-text-muted">{row.gl}</td>
                      <td className="py-3 px-4 text-center text-text-muted">{row.gb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <div className="flex justify-center mt-8">
            <Button href="/compare/groupconvert-alternative" variant="outline" size="sm">
              See Full Comparisons
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS PLACEHOLDER ===== */}
      {/* TODO: Replace with real testimonials from Chrome Web Store reviews or direct user feedback */}
      <section className="pt-12 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sora font-bold text-2xl text-center mb-10">
            What group admins are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Testimonial slot 1 */}
            <Card variant="transparent" hover={false} className="p-6">
              <p className="text-text-secondary text-sm italic leading-relaxed mb-4">
                &ldquo;TODO: Add real testimonial quote from a verified user.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy-lighter" />
                <div>
                  <p className="text-text-primary text-sm font-medium">User Name</p>
                  <p className="text-text-muted text-xs">Group Admin</p>
                </div>
              </div>
            </Card>
            {/* Testimonial slot 2 */}
            <Card variant="glass" hover={false} className="p-6">
              <p className="text-text-secondary text-sm italic leading-relaxed mb-4">
                &ldquo;TODO: Add real testimonial quote from a verified user.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy-lighter" />
                <div>
                  <p className="text-text-primary text-sm font-medium">User Name</p>
                  <p className="text-text-muted text-xs">Community Manager</p>
                </div>
              </div>
            </Card>
            {/* Testimonial slot 3 */}
            <Card variant="transparent" hover={false} className="p-6">
              <p className="text-text-secondary text-sm italic leading-relaxed mb-4">
                &ldquo;TODO: Add real testimonial quote from a verified user.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy-lighter" />
                <div>
                  <p className="text-text-primary text-sm font-medium">User Name</p>
                  <p className="text-text-muted text-xs">Course Creator</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      {/* No badge on FAQ — it doesn't need one */}
      <section className="pt-16 pb-24 px-4 bg-navy-light/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-2">
              Got questions?
            </h2>
            <p className="text-text-secondary">The stuff people actually ask us.</p>
          </div>

          <Accordion items={FAQ_DATA.map(f => ({ question: f.question, answer: f.answer }))} />
        </div>
      </section>

      {/* Third organic blob */}
      <div className="relative" aria-hidden="true">
        <BlobDecoration className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-30" />
      </div>

      {/* ===== FINAL CTA ===== */}
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sora text-3xl md:text-5xl mb-6">
            <span className="font-normal">Ready to stop copy-pasting</span>{' '}
            <span className="font-extrabold text-gradient-teal">member requests?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of group admins who ditched the spreadsheet grind. Free plan, no credit card.
          </p>
          <Button href={CHROME_STORE_URL} size="lg" external>
            Install Free for Chrome
          </Button>
        </div>
      </section>
    </>
  );
}
