'use client';

import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import { FAQPageSchema } from '@/components/seo/JsonLd';
import { CHROME_STORE_URL } from '@/lib/constants';

interface ComparisonRow {
  feature: string;
  gmb: string;
  competitor: string;
}

interface ComparisonPageProps {
  competitorName: string;
  competitorSlug: string;
  intro: string;
  comparison: ComparisonRow[];
  gmbPros: string[];
  competitorPros: string[];
  gmbCons: string[];
  competitorCons: string[];
  faq: { question: string; answer: string }[];
}

export default function ComparisonPage({
  competitorName,
  intro,
  comparison,
  gmbPros,
  competitorPros,
  gmbCons,
  competitorCons,
  faq,
}: ComparisonPageProps) {
  return (
    <div className="pt-24 pb-16">
      <FAQPageSchema items={faq} />

      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <Badge className="mb-4">Compare</Badge>
            <h1 className="font-sora font-extrabold text-3xl md:text-5xl mb-6">
              GroupMailBox vs {competitorName} —{' '}
              <span className="text-gradient-teal">Honest Comparison</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">{intro}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-4 px-4 text-text-muted font-medium">Feature</th>
                    <th className="py-4 px-4 text-accent-blue font-sora font-semibold">GroupMailBox</th>
                    <th className="py-4 px-4 text-text-muted font-medium">{competitorName}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature} className="border-b border-white/[0.04]">
                      <td className="py-3 px-4 text-text-secondary">{row.feature}</td>
                      <td className="py-3 px-4 text-center text-accent-blue font-medium">{row.gmb}</td>
                      <td className="py-3 px-4 text-center text-text-muted">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimateIn direction="left">
            <div className="bg-navy-light/60 backdrop-blur-xl border border-accent-blue/20 rounded-[12px] p-6">
              <h3 className="font-sora font-semibold text-lg mb-4 text-accent-blue">GroupMailBox</h3>
              <div className="mb-4">
                <p className="text-xs uppercase text-text-muted font-semibold tracking-wider mb-2">Pros</p>
                <ul className="space-y-2">
                  {gmbPros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-accent-blue mt-0.5">+</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase text-text-muted font-semibold tracking-wider mb-2">Cons</p>
                <ul className="space-y-2">
                  {gmbCons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-danger mt-0.5">-</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right">
            <div className="bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] p-6">
              <h3 className="font-sora font-semibold text-lg mb-4 text-text-secondary">{competitorName}</h3>
              <div className="mb-4">
                <p className="text-xs uppercase text-text-muted font-semibold tracking-wider mb-2">Pros</p>
                <ul className="space-y-2">
                  {competitorPros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-accent-blue mt-0.5">+</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase text-text-muted font-semibold tracking-wider mb-2">Cons</p>
                <ul className="space-y-2">
                  {competitorCons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-danger mt-0.5">-</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-navy-light/30">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-sora font-bold text-2xl md:text-3xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Accordion items={faq} />
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-6">
              Try <span className="text-gradient-teal">GroupMailBox</span> Free
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              See the difference for yourself. Install GroupMailBox and start capturing leads today.
            </p>
            <Button href={CHROME_STORE_URL} size="lg" external>
              Install Free for Chrome
            </Button>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
