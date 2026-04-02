export const SITE_NAME = 'GroupMailBox';
export const SITE_TAGLINE = 'Capture Every Lead from Your Facebook Group';
export const SITE_DESCRIPTION =
  'GroupMailBox is a Chrome extension that automatically captures leads from Facebook Group member requests and pushes them to Google Sheets. Free to install.';
export const SITE_URL = 'https://samarjeetmohite.github.io/GroupBoxWebsite';
export const CHROME_STORE_URL = '#'; // TODO: replace with real Chrome Web Store URL
export const SUPPORT_EMAIL = 'support@groupmailbox.com';

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Blog', href: '/blog' },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How It Works', href: '/how-it-works' },
  ],
  compare: [
    { label: 'vs GroupConvert', href: '/compare/groupconvert-alternative' },
    { label: 'vs GroupLeads', href: '/compare/groupleads-alternative' },
    { label: 'vs GroupBoss', href: '/compare/groupboss-alternative' },
  ],
  resources: [
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
      'Email campaigns',
      'Priority support',
    ],
    cta: 'Install Free',
    highlighted: false,
  },
  {
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
      '500 email campaigns/mo',
    ],
    notIncluded: ['Priority support'],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Agency',
    price: '$99',
    period: '/month',
    description: 'For agencies managing multiple client groups.',
    features: [
      'Unlimited Facebook Groups',
      'Unlimited leads',
      'Google Sheets export',
      'Screening answers capture',
      'Side panel dashboard',
      'Auto-approve members',
      '5,000 email campaigns/mo',
      'Priority support',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
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
    question: 'Can GroupMailBox auto-approve member requests?',
    answer:
      'Yes, the Pro and Agency plans include auto-approve functionality. It includes safety delays to mimic human behavior and protect your group from spam.',
  },
] as const;
