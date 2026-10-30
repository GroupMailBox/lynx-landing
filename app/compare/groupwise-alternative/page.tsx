import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';

// Facts checked 30 Oct 2026: groupwisefb.com is a parked "Coming Soon" page; the Chrome Web Store listing
// (about 155 users, 3.4 from 5 ratings) was last updated 24 Jun 2024 and lists capture only.
export const metadata: Metadata = {
  alternates: { canonical: '/compare/groupwise-alternative/' },
  title: 'Groupwise Alternative for Facebook Group Admins (2026)',
  description:
    'Groupwise has not been updated since June 2024 and its website is parked. GroupMailBox captures member requests, syncs to Google Sheets, auto-approves and follows up from Gmail. Free plan.',
};

export default function GroupwiseAlternativePage() {
  return (
    <ComparisonPage
      competitorName="Groupwise"
      competitorSlug="groupwise"
      intro="Groupwise collected names, profile links, emails and answers from your member requests page. Its Chrome extension has not been updated since June 2024 and its website is a parked page. Facebook changes its pages often, so an unmaintained capture tool tends to stop working without warning."
      comparison={[
        { feature: 'Last update (checked 30 Oct 2026)', gmb: 'Updated regularly', competitor: '24 Jun 2024' },
        { feature: 'Capture requests + answers', gmb: 'Yes', competitor: 'Yes' },
        { feature: 'Google Sheets sync', gmb: 'Native', competitor: 'Not listed' },
        { feature: 'Auto-approve', gmb: 'Yes, at a safe pace (Pro)', competitor: 'Not listed' },
        { feature: 'Follow-up emails', gmb: 'From your Gmail, stops on reply', competitor: 'Not listed' },
        { feature: 'Free plan', gmb: 'Yes, 1 group', competitor: '—' },
      ]}
      gmbPros={[
        'Actively maintained as Facebook changes its pages',
        'Sheets sync, auto-approve and Gmail follow-ups in one place',
        'Finds emails even inside a sentence',
        'Free plan for one group',
      ]}
      competitorPros={['Simple capture of names, emails and answers']}
      gmbCons={['Newer in the market']}
      competitorCons={['No update since June 2024', 'Website is a parked page', 'Sheets, approval and email not listed']}
      faq={[
        {
          question: 'Is Groupwise still maintained?',
          answer: 'Its Chrome Web Store listing shows a last update of 24 June 2024, and groupwisefb.com shows a parked “Coming Soon” page (checked 30 October 2026).',
        },
        {
          question: 'Can I move my Groupwise data to GroupMailBox?',
          answer: 'Yes. Put your existing export in a Google Sheet, then connect that same sheet in GroupMailBox so new members land beside your old list.',
        },
      ]}
    />
  );
}
