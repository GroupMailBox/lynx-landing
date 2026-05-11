import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Free, Pro & Advanced Plans',
  description:
    'GroupMailBox pricing: Free plan for 1 group, Pro at $29/mo for 5 groups with auto-approve, Advanced at $99/mo for unlimited groups. Start free today.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
