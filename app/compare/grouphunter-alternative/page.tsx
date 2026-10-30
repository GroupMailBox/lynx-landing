import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';

// Facts checked 30 Oct 2026: grouphunter.io now serves an unrelated site; WHOIS shows the domain re-registered
// on 6 Oct 2026. Earlier it described itself as capture + auto-approve + CRM sync (search index snapshots).
export const metadata: Metadata = {
  alternates: { canonical: '/compare/grouphunter-alternative/' },
  title: 'GroupHunter Alternative: GroupHunter Is Gone, What Now? (2026)',
  description:
    'GroupHunter’s website no longer hosts the Facebook group tool. GroupMailBox captures member requests and answers, auto-approves safely and follows up from Gmail. Free plan.',
};

export default function GroupHunterAlternativePage() {
  return (
    <ComparisonPage
      competitorName="GroupHunter"
      competitorSlug="grouphunter"
      intro="GroupHunter turned Facebook group members into leads: it captured join requests, auto-approved members and synced them to a CRM. Its website no longer hosts the product, and the domain was re-registered by someone else in October 2026. If you used it, here is a replacement that does the same job and adds email follow-up."
      comparison={[
        { feature: 'Status (checked 30 Oct 2026)', gmb: 'Active and updated', competitor: 'Website no longer hosts the product' },
        { feature: 'Capture member requests + answers', gmb: 'Yes', competitor: 'No longer available' },
        { feature: 'Auto-approve', gmb: 'Yes, at a safe pace (Pro)', competitor: 'No longer available' },
        { feature: 'Where leads go', gmb: 'Your Google Sheet', competitor: 'No longer available' },
        { feature: 'Follow-up emails', gmb: 'From your Gmail, stops on reply', competitor: 'No longer available' },
        { feature: 'Free plan', gmb: 'Yes, 1 group', competitor: '—' },
      ]}
      gmbPros={[
        'Same core job: capture, approve, keep every lead',
        'Leads saved to a Google Sheet you own, so a tool shutting down never takes your list with it',
        'Welcome email and follow-ups from your Gmail',
        'Free plan to start today',
      ]}
      competitorPros={['Combined capture, approval and CRM sync in one tool']}
      gmbCons={['Newer in the market', 'No built-in CRM; your sheet is the list']}
      competitorCons={['Website no longer hosts the product', 'Domain now owned by an unrelated site']}
      faq={[
        {
          question: 'What happened to GroupHunter?',
          answer: 'As of 30 October 2026 grouphunter.io shows an unrelated website, and domain records show it was registered again on 6 October 2026, so the original product is no longer available there.',
        },
        {
          question: 'How do I replace GroupHunter?',
          answer: 'Install GroupMailBox from the Chrome Web Store, open your member requests page and connect a Google Sheet. Requests and answers are saved from then on, and you can turn on auto-approve and follow-up emails when you are ready.',
        },
      ]}
    />
  );
}
