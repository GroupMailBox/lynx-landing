import type { Metadata } from 'next';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { PRICING_PLANS, CHROME_STORE_URL } from '@/lib/constants';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Pricing — Free, Pro & Agency Plans',
  description:
    'GroupMailBox pricing: Free plan for 1 group, Pro at $29/mo for 5 groups with auto-approve, Agency at $99/mo for unlimited groups. Start free today.',
};

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'GroupMailBox Pricing',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '0',
            highPrice: '99',
            priceCurrency: 'USD',
            offerCount: '3',
          },
        }}
      />

      <section className="pt-16 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn animation="scale">
            <Badge className="mb-4">Pricing</Badge>
            <h1 className="font-sora text-4xl md:text-5xl mb-6">
              <span className="font-normal">Start free,</span>{' '}
              <span className="font-extrabold text-gradient-teal">upgrade when you need to</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Every plan includes lead capture and Google Sheets integration. Pick the one that fits how many groups you run.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-4 pb-24">
        {/* Mobile: reorder to show Pro first via CSS order */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 0.15}>
              <div
                className={`relative bg-navy-light/60 backdrop-blur-xl border rounded-[12px] p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-accent-blue/30 shadow-[0_0_40px_rgba(79,140,255,0.15)] order-first md:order-none'
                    : 'border-white/[0.06] hover:border-accent-blue/20 hover:shadow-[0_0_30px_rgba(79,140,255,0.1)]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-sora font-semibold text-xl mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-sora font-extrabold text-4xl text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-text-muted text-sm">{plan.period}</span>
                  </div>
                  <p className="text-text-secondary text-sm mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-40">
                      <svg
                        className="w-5 h-5 text-text-muted mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={CHROME_STORE_URL}
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                  external
                >
                  {plan.cta}
                </Button>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}
