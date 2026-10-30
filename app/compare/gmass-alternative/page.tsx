import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';

// Facts checked 25 Oct 2026 (GMass pricing page and published plan history).
export const metadata: Metadata = {
  alternates: { canonical: '/compare/gmass-alternative/' },
  title: 'GMass Alternative for Facebook Group Follow-ups (2026)',
  description:
    'Following up with Facebook group members from Gmail? Compare GMass, a general Gmail mail-merge tool, with GroupMailBox, which captures new members and their answers and follows up until they reply.',
};

export default function GmassAlternativePage() {
  return (
    <ComparisonPage
      competitorName="GMass"
      competitorSlug="gmass"
      intro="GMass is a powerful, general-purpose mail merge for Gmail. If the people you email are new members of your Facebook group, GroupMailBox does the whole job in one place: it captures each member and their answers, then follows up from your Gmail until they reply."
      comparison={[
        { feature: 'Built for', gmb: 'Facebook group admins', competitor: 'Any Gmail mail merge' },
        { feature: 'Captures Facebook group members and answers', gmb: 'Yes', competitor: 'No' },
        { feature: 'Free plan', gmb: 'Yes, 1 group', competitor: 'No (trial only since Dec 2023)' },
        { feature: 'Follow-ups that stop on reply', gmb: 'Yes', competitor: 'Yes, on Premium and above' },
        { feature: 'Sends from your own Gmail', gmb: 'Yes', competitor: 'Yes' },
        { feature: 'Large campaigns and advanced reporting', gmb: 'Not the focus', competitor: 'Yes' },
      ]}
      gmbPros={[
        'Captures new members and their screening answers automatically',
        'Welcome email and follow-ups personalised from their answers',
        'Free plan for one group',
        'Built around one job, so setup takes minutes',
      ]}
      competitorPros={[
        'Very capable mail merge with many campaign settings',
        'Detailed reporting for large sends',
        'Established and widely used',
      ]}
      gmbCons={['Not a general mail-merge tool for any list', 'Lighter reporting than GMass']}
      competitorCons={['No permanent free plan', 'Does not capture Facebook group members: you bring the list']}
      faq={[
        {
          question: 'Is GroupMailBox a GMass alternative?',
          answer: 'For one use case, yes: following up with people who join your Facebook group. For general mail merges to any list, or large campaigns with detailed reporting, GMass is the more complete tool.',
        },
        {
          question: 'Does GMass have a free plan?',
          answer: 'GMass ended its permanent free plan in December 2023 and now offers a trial capped at 50 emails per 24 hours (checked 25 Oct 2026). GroupMailBox has a free plan for one Facebook group.',
        },
        {
          question: 'Can I use both?',
          answer: 'Yes. Many admins keep their member list in Google Sheets; GroupMailBox fills that sheet and handles welcome follow-ups, and you can still run other campaigns from the same sheet with any tool.',
        },
      ]}
    />
  );
}
