'use client';

import { useMemo, useState } from 'react';
import { SUPPORT_EMAIL } from '@/lib/constants';
import { INTEGRATIONS } from '@/lib/integrations';
import IntegrationLogo from './IntegrationLogo';



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
              <IntegrationLogo i={i} />
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
