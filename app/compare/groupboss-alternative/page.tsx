import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';

export const metadata: Metadata = {
  title: 'GroupMailBox vs GroupBoss — Best Alternative (2024)',
  description:
    'Compare GroupMailBox vs GroupBoss: features, pricing, and capabilities. See why GroupMailBox is the best GroupBoss alternative with a free plan and real-time detection.',
};

export default function GroupBossAlternativePage() {
  return (
    <ComparisonPage
      competitorName="GroupBoss"
      competitorSlug="groupboss"
      intro="Looking for a GroupBoss alternative? GroupMailBox offers real-time detection, auto-approve, and a free tier that GroupBoss doesn't provide."
      comparison={[
        { feature: 'Starting Price', gmb: 'Free', competitor: '$9.99/mo' },
        { feature: 'Real-Time Detection', gmb: 'Yes (MutationObserver)', competitor: 'No' },
        { feature: 'Google Sheets', gmb: 'Native integration', competitor: 'Yes' },
        { feature: 'Screening Answers', gmb: '3 Q&A pairs', competitor: 'Yes' },
        { feature: 'Auto-Approve', gmb: 'Yes (Pro plan)', competitor: 'No' },
        { feature: 'Side Panel UI', gmb: 'Yes', competitor: 'No' },
        { feature: 'Free Plan', gmb: '100 leads/mo', competitor: 'No free plan' },
        { feature: 'Email Integration', gmb: 'Yes (Pro+)', competitor: 'Limited' },
      ]}
      gmbPros={[
        'Free plan with 100 leads/month',
        'Real-time detection (MutationObserver)',
        'Auto-approve members (Pro plan)',
        'Modern side panel dashboard',
        'Native Google Sheets integration',
      ]}
      competitorPros={[
        'Low starting price ($9.99/mo)',
        'Simple and straightforward',
        'Screening answer capture',
        'Google Sheets support',
      ]}
      gmbCons={[
        'Newer in the market',
        'Auto-approve is Pro-only feature',
      ]}
      competitorCons={[
        'No free plan',
        'No real-time member detection',
        'No auto-approve feature',
        'No side panel interface',
        'Limited email integration',
      ]}
      faq={[
        {
          question: 'Is GroupMailBox better than GroupBoss?',
          answer: 'GroupMailBox offers several advantages over GroupBoss: a free tier, real-time MutationObserver-based detection, auto-approve functionality, and a modern Chrome side panel. GroupBoss is simpler but lacks these advanced features.',
        },
        {
          question: 'Does GroupMailBox have auto-approve like GroupBoss?',
          answer: 'GroupMailBox actually offers auto-approve on Pro and Agency plans, which GroupBoss does not offer at any price point. The auto-approve includes configurable safety delays.',
        },
        {
          question: 'How much does GroupMailBox cost compared to GroupBoss?',
          answer: 'GroupMailBox offers a free plan (100 leads/month) while GroupBoss starts at $9.99/month. For unlimited leads and auto-approve, GroupMailBox Pro is $29/month.',
        },
      ]}
    />
  );
}
