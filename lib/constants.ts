export const SITE_NAME = 'GroupMailBox';
export const SITE_TAGLINE = 'Turn Facebook Group Members into Customers';
export const SITE_DESCRIPTION =
  'GroupMailBox captures every Facebook Group member request, syncs it to Google Sheets, and follows up from your own Gmail until they reply. Free to install.';
export const SITE_URL = 'https://groupmailbox.com';
export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/groupmailbox/nbiakohglicfbphghphgjijckccnknbp';
export const SUPPORT_EMAIL = 'support@groupmailbox.com';

// Backend (viper-core) base URL — read at build time. Override via
// NEXT_PUBLIC_BACKEND_URL in .env.local for local dev.
export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

export type PlanId = 'free' | 'pro' | 'agency';

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Blog', href: '/blog' },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Auto-approve', href: '/features/auto-approve-facebook-group-members' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How It Works', href: '/how-it-works' },
  ],
  compare: [
    { label: 'vs GroupConvert', href: '/compare/groupconvert-alternative' },
    { label: 'vs GroupLeads', href: '/compare/groupleads-alternative' },
    { label: 'vs GroupBoss', href: '/compare/groupboss-alternative' },
    { label: 'GroupKit alternative', href: '/compare/groupkit-alternative' },
    { label: 'vs Group Collector', href: '/compare/group-collector-alternative' },
    { label: 'GMass alternative', href: '/compare/gmass-alternative' },
    { label: 'Mailmeteor alternative', href: '/compare/mailmeteor-alternative' },
  ],
  resources: [
    { label: 'Affiliates (40%)', href: '/affiliates' },
    { label: 'Follow-up calculator', href: '/tools/follow-up-cadence-calculator' },
    { label: 'Question generator', href: '/tools/membership-question-generator' },
    { label: 'Blog', href: '/blog' },
    { label: 'Support', href: '/support' },
    { label: 'About', href: '/about' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

export const PRICING_PLANS = [
  {
    id: 'free' as PlanId,
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with one group.',
    features: [
      '1 Facebook Group',
      '100 leads/month',
      'Google Sheets export',
      'Screening answers capture',
      'Side panel dashboard',
    ],
    notIncluded: [
      'Auto-approve members',
      'Gmail campaigns & follow-ups',
      'Priority support',
    ],
    cta: 'Install Free',
    highlighted: false,
  },
  {
    id: 'pro' as PlanId,
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious group admins who want automation.',
    features: [
      '5 Facebook Groups',
      'Unlimited leads',
      'Google Sheets export',
      'Screening answers capture',
      'Side panel dashboard',
      'Auto-approve members',
      'Gmail campaigns with follow-ups',
      'Stop-on-reply sequences',
    ],
    notIncluded: ['Priority support'],
    cta: 'Get Pro',
    highlighted: true,
  },
  {
    id: 'agency' as PlanId,
    name: 'Advanced',
    price: '$99',
    period: '/month',
    description: 'For power users and agencies running multiple groups.',
    features: [
      'Unlimited Facebook Groups',
      'Unlimited leads',
      'Google Sheets export',
      'Screening answers capture',
      'Side panel dashboard',
      'Auto-approve members',
      'Gmail campaigns with follow-ups',
      'Stop-on-reply sequences',
      'Priority support',
    ],
    notIncluded: [],
    cta: 'Start Advanced Plan',
    highlighted: false,
  },
] as const;

export const FAQ_DATA = [
  {
    question: 'What is GroupMailBox?',
    answer:
      'GroupMailBox is a Chrome extension that automatically captures leads from Facebook Group member requests. It extracts member data including names, profile links, and screening question answers, then pushes them directly to Google Sheets.',
  },
  {
    question: 'Is GroupMailBox free to use?',
    answer:
      'Yes! GroupMailBox offers a free plan that supports 1 Facebook Group with up to 100 leads per month. Paid plans start at $29/month for more groups and unlimited leads.',
  },
  {
    question: 'How does GroupMailBox capture leads?',
    answer:
      'GroupMailBox watches your Facebook Group admin page in the background and detects new member requests the moment they appear — no page refresh needed. It automatically grabs names, profile links, and screening answers as they come in.',
  },
  {
    question: 'Does GroupMailBox work with Google Sheets?',
    answer:
      'Yes! GroupMailBox integrates directly with Google Sheets. With one click, you can push all captured leads to a spreadsheet, including names, profile URLs, and screening question answers.',
  },
  {
    question: 'Is my data safe with GroupMailBox?',
    answer:
      'Absolutely. GroupMailBox only accesses data from Facebook Group member requests that you can already see as an admin. Data is securely transmitted using HTTPS and stored in encrypted databases. We never sell your data.',
  },
  {
    question: 'Can GroupMailBox email new members for me?',
    answer:
      'Yes. Paid plans send personal emails from your own Gmail to the members you capture, with up to 4 automatic follow-ups in the same thread. Follow-ups stop the moment someone replies or unsubscribes.',
  },
  {
    question: 'Do I still need Mailchimp or Zapier?',
    answer:
      'Not for following up with new members. GroupMailBox captures the member, adds them to your Google Sheet and runs the Gmail follow-ups itself. You can still export the sheet to any other tool.',
  },
  {
    question: 'Can GroupMailBox auto-approve member requests?',
    answer:
      'Yes, on the Pro and Advanced plans. It spaces approvals a few seconds apart, stops at 50 per hour, and pauses for 6 hours if Facebook stops accepting approvals, so your account is never pushed past a rate limit.',
  },
] as const;
