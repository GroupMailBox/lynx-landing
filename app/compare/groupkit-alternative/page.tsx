import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';

// GroupKit announced its shutdown on groupkit.com: closed 23 Oct 2026, data no longer accessible (checked 25 Oct 2026).
export const metadata: Metadata = {
  alternates: { canonical: '/compare/groupkit-alternative/' },
  title: 'GroupKit Alternative: GroupKit Shut Down, What Now? (2026)',
  description:
    'GroupKit shut down on 23 October 2026. Move your Facebook group lead capture to GroupMailBox in minutes: capture member requests, sync to Google Sheets and follow up from Gmail. Free plan.',
};

export default function GroupKitAlternativePage() {
  return (
    <ComparisonPage
      competitorName="GroupKit"
      competitorSlug="groupkit"
      intro="GroupKit shut down on 23 October 2026 after nearly seven years, and accounts are no longer accessible. If you used it to capture Facebook group leads, here is how to keep going without losing a week of new members."
      comparison={[
        { feature: 'Status', gmb: 'Active and updated', competitor: 'Shut down 23 Oct 2026' },
        { feature: 'Capture member requests + answers', gmb: 'Yes', competitor: 'No longer available' },
        { feature: 'Google Sheets sync', gmb: 'Native', competitor: 'No longer available' },
        { feature: 'Auto-approve', gmb: 'Yes (Pro plan)', competitor: 'No longer available' },
        { feature: 'Follow up by email', gmb: 'From your Gmail, stops on reply', competitor: 'No longer available' },
        { feature: 'Free plan', gmb: 'Yes, 1 group', competitor: '—' },
      ]}
      gmbPros={[
        'Set up in about five minutes: install, open member requests, connect Google Sheets',
        'Free plan to start capturing today',
        'Gmail follow-ups, so you can email new members without another tool',
        'Your leads live in your own Google Sheet, so you always keep a copy',
      ]}
      competitorPros={['Served Facebook group admins for nearly seven years']}
      gmbCons={['Newer in the market', 'Fewer direct integrations than some alternatives']}
      competitorCons={['Shut down on 23 October 2026', 'Accounts and stored data are no longer accessible']}
      faq={[
        {
          question: 'Did GroupKit shut down?',
          answer: 'Yes. GroupKit announced on groupkit.com that it officially shut down on 23 October 2026. Customers were given 30 days notice to export their data, and accounts are no longer accessible.',
        },
        {
          question: 'How do I switch from GroupKit to GroupMailBox?',
          answer: 'Install GroupMailBox from the Chrome Web Store, open your group’s member requests page, and connect a Google Sheet. New requests are captured from that moment. If you exported your GroupKit data, keep it in the same sheet so all your leads stay in one place.',
        },
        {
          question: 'What are the alternatives to GroupKit?',
          answer: 'GroupKit itself pointed customers to Group Leads, Groupboss and GroupTrack CRM. GroupMailBox is another option, and the only one of these that sends follow-up emails from your own Gmail and stops when someone replies.',
        },
      ]}
    />
  );
}
