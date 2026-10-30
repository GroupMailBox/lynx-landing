'use client';

import { useMemo, useState } from 'react';
import { SUPPORT_EMAIL } from '@/lib/constants';

type Status = 'live' | 'request';
interface Integration { name: string; category: string; status: Status; body: string; initials: string; color: string }

// Only 'live' entries are real integrations today. 'request' cards collect demand; never mark one live until it ships.
export const INTEGRATIONS: Integration[] = [
  { name: 'Google Sheets', category: 'Spreadsheets', status: 'live', initials: 'GS', color: 'bg-[#0F9D58]', body: 'Every member request and its answers lands in your own sheet, one row per person.' },
  { name: 'Gmail', category: 'Email', status: 'live', initials: 'GM', color: 'bg-[#EA4335]', body: 'Welcome emails and follow-ups sent from your own Gmail, stopping when someone replies.' },
  { name: 'Google Workspace', category: 'Email', status: 'live', initials: 'GW', color: 'bg-[#4285F4]', body: 'Works with business Gmail accounts on Google Workspace.' },
  { name: 'Google Chrome', category: 'Browser', status: 'live', initials: 'CH', color: 'bg-[#FBBC05]', body: 'Runs as a Chrome extension with a side panel next to your member requests.' },
  { name: 'CSV / Excel export', category: 'Spreadsheets', status: 'live', initials: 'CSV', color: 'bg-[#217346]', body: 'Download your sheet as CSV or Excel to import anywhere else.' },
  { name: 'Mailchimp', category: 'Email marketing', status: 'request', initials: 'MC', color: 'bg-[#241C15]', body: 'Send captured members straight to a Mailchimp audience.' },
  { name: 'GoHighLevel', category: 'CRM', status: 'request', initials: 'GHL', color: 'bg-[#1B6CFF]', body: 'Create contacts in GoHighLevel when members join.' },
  { name: 'Kit (ConvertKit)', category: 'Email marketing', status: 'request', initials: 'KT', color: 'bg-[#FB6970]', body: 'Add members to a Kit form or sequence.' },
  { name: 'HubSpot', category: 'CRM', status: 'request', initials: 'HS', color: 'bg-[#FF7A59]', body: 'Sync members to HubSpot contacts.' },
  { name: 'MailerLite', category: 'Email marketing', status: 'request', initials: 'ML', color: 'bg-[#09C269]', body: 'Add members to a MailerLite group.' },
  { name: 'ActiveCampaign', category: 'Email marketing', status: 'request', initials: 'AC', color: 'bg-[#356AE6]', body: 'Add members to an ActiveCampaign list.' },
  { name: 'Zapier / webhooks', category: 'Automation', status: 'request', initials: 'ZP', color: 'bg-[#FF4F00]', body: 'Trigger any workflow when a member is captured.' },
];

export default function IntegrationsGrid() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const cats = ['All', ...Array.from(new Set(INTEGRATIONS.map((i) => i.category)))];
  const list = useMemo(
    () => INTEGRATIONS.filter((i) => (cat === 'All' || i.category === cat) && i.name.toLowerCase().includes(q.toLowerCase())),
    [q, cat]
  );
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${cat === c ? 'bg-ink text-white' : 'border border-black/[0.1] bg-white text-text-secondary hover:border-black/25'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search integrations"
          aria-label="Search integrations"
          className="w-full rounded-xl border border-black/[0.12] bg-white px-4 py-2.5 md:w-64"
        />
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((i) => (
          <div key={i.name} className="flex flex-col rounded-2xl border border-black/[0.08] bg-white p-6 shadow-card">
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-xl text-xs font-bold text-white ${i.color}`} aria-hidden>{i.initials}</span>
              <div>
                <p className="font-sora font-bold">{i.name}</p>
                <p className="text-xs text-text-muted">{i.category}</p>
              </div>
              <span className={`ml-auto rounded-full px-2.5 py-1 text-xs font-semibold ${i.status === 'live' ? 'bg-accent-green/10 text-accent-green' : 'bg-navy-lighter text-text-muted'}`}>
                {i.status === 'live' ? 'Live' : 'Not yet'}
              </span>
            </div>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text-secondary">{i.body}</p>
            {i.status === 'request' && (
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`Integration request: ${i.name}`)}`}
                className="mt-5 text-sm font-semibold text-accent-blue hover:underline"
              >
                Request this integration →
              </a>
            )}
          </div>
        ))}
        {list.length === 0 && <p className="text-text-muted">No integrations match “{q}”.</p>}
      </div>
    </div>
  );
}
