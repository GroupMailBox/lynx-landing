// Integration catalogue for the site. Shared by server pages and the client grid.
type Status = 'live' | 'request';
export interface Integration { name: string; category: string; status: Status; body: string; initials: string; color: string; logo?: string }

// Only 'live' entries are real integrations today. 'request' cards collect demand; never mark one live until it ships.
export const INTEGRATIONS: Integration[] = [
  { name: 'Google Sheets', category: 'Spreadsheets', status: 'live', initials: 'GS', color: 'bg-[#34A853]', logo: '/integrations/googlesheets.svg', body: 'Every member request and its answers lands in your own sheet, one row per person.' },
  { name: 'Gmail', category: 'Email', status: 'live', initials: 'GM', color: 'bg-[#EA4335]', logo: '/integrations/gmail.svg', body: 'Welcome emails and follow-ups sent from your own Gmail, stopping when someone replies.' },
  { name: 'Google Workspace', category: 'Email', status: 'live', initials: 'GW', color: 'bg-[#4285F4]', body: 'Works with business Gmail accounts on Google Workspace.' },
  { name: 'Google Chrome', category: 'Browser', status: 'live', initials: 'CH', color: 'bg-[#4285F4]', logo: '/integrations/googlechrome.svg', body: 'Runs as a Chrome extension with a side panel next to your member requests.' },
  { name: 'CSV / Excel export', category: 'Spreadsheets', status: 'live', initials: 'CSV', color: 'bg-[#217346]', body: 'Download your sheet as CSV or Excel to import anywhere else.' },
  { name: 'Mailchimp', category: 'Email marketing', status: 'request', initials: 'MC', color: 'bg-[#FFE01B]', logo: '/integrations/mailchimp.svg', body: 'Send captured members straight to a Mailchimp audience.' },
  { name: 'GoHighLevel', category: 'CRM', status: 'request', initials: 'GHL', color: 'bg-[#1B6CFF]', body: 'Create contacts in GoHighLevel when members join.' },
  { name: 'Kit (ConvertKit)', category: 'Email marketing', status: 'request', initials: 'KT', color: 'bg-[#000000]', logo: '/integrations/kit.svg', body: 'Add members to a Kit form or sequence.' },
  { name: 'HubSpot', category: 'CRM', status: 'request', initials: 'HS', color: 'bg-[#FF7A59]', logo: '/integrations/hubspot.svg', body: 'Sync members to HubSpot contacts.' },
  { name: 'MailerLite', category: 'Email marketing', status: 'request', initials: 'ML', color: 'bg-[#09C269]', body: 'Add members to a MailerLite group.' },
  { name: 'ActiveCampaign', category: 'Email marketing', status: 'request', initials: 'AC', color: 'bg-[#356AE6]', body: 'Add members to an ActiveCampaign list.' },
  { name: 'Zapier / webhooks', category: 'Automation', status: 'request', initials: 'ZP', color: 'bg-[#FF4F00]', logo: '/integrations/zapier.svg', body: 'Trigger any workflow when a member is captured.' },
];
