import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';

// Facts checked 30 Oct 2026 (Chrome Web Store + groupdoorman.com): 201 users, 4.4 from 8 ratings, v1.3.11
// updated 8 Jun 2026; approval rules + autorun; Sheets and 20–30+ email platforms; email verification;
// no public prices; 14-day trial, 30-day money-back.
export const metadata: Metadata = {
  alternates: { canonical: '/compare/group-doorman-alternative/' },
  title: 'Group Doorman Alternative with Gmail Follow-ups (2026)',
  description:
    'Compare Group Doorman and GroupMailBox for Facebook group lead capture. GroupMailBox shows its prices, has a free plan and sends follow-ups from your Gmail that stop when members reply.',
};

export default function GroupDoormanAlternativePage() {
  return (
    <ComparisonPage
      competitorName="Group Doorman"
      competitorSlug="group-doorman"
      intro="Group Doorman collects membership answers, approves members by rule and sends them to Google Sheets or one of many email platforms, with email verification built in. GroupMailBox does the capture and approval too, and then follows up from your own Gmail, so you do not need a separate email platform."
      comparison={[
        { feature: 'Capture requests + answers', gmb: 'Yes', competitor: 'Yes' },
        { feature: 'Approval', gmb: 'Auto-approve at a safe pace (Pro)', competitor: 'Rules (all, some or all questions answered) with an autorun schedule' },
        { feature: 'Google Sheets', gmb: 'Native', competitor: 'Yes' },
        { feature: 'Email platforms', gmb: 'Sends from your Gmail, stops on reply', competitor: '20+ platforms such as Mailchimp, ActiveCampaign, ConvertKit' },
        { feature: 'Public pricing', gmb: 'Free, $29 and $99 a month', competitor: 'Not shown on its site (14-day trial)' },
        { feature: 'Free plan', gmb: 'Yes, 1 group', competitor: 'Trial only' },
      ]}
      gmbPros={[
        'No email platform needed: welcome and follow-ups go from your Gmail',
        'Follow-ups stop automatically when a member replies',
        'Prices on the page, plus a free plan',
        'Finds emails even inside a sentence',
      ]}
      competitorPros={['Many email platform integrations', 'Verifies emails before sending them on', 'Flexible approval rules and schedule']}
      gmbCons={['Fewer native email platform integrations (export from Sheets instead)', 'No email verification step yet']}
      competitorCons={['Prices not shown publicly', 'Small user base (about 200 Chrome users)']}
      faq={[
        {
          question: 'What is the difference between Group Doorman and GroupMailBox?',
          answer: 'Both capture member answers and approve members. Group Doorman hands the email address to your email platform. GroupMailBox sends the welcome email and follow-ups itself, from your Gmail, and stops when someone replies.',
        },
        {
          question: 'How much does Group Doorman cost?',
          answer: 'Its website did not show prices when we checked on 30 October 2026; it offers a 14-day free trial and a 30-day money-back guarantee. GroupMailBox is free for one group, then $29 or $99 a month.',
        },
      ]}
    />
  );
}
