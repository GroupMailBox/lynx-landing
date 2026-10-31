/* eslint-disable @next/next/no-img-element -- static export with unoptimized images */
// Product visuals shared by How It Works, Features and Integrations: real side panel screenshots
// (fictional sample data) and drawn illustrations. Illustrations are generic, never copies of
// Facebook's or Gmail's interface.

// Real side panel screenshots, taken with fictional sample data.
export function PanelShot({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="rounded-[20px] border border-black/[0.08] bg-white p-2 shadow-[0_24px_60px_-20px_rgba(37,56,120,0.35)]">
        <div className="flex items-center gap-1.5 px-2 pb-2 pt-1" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="ml-2 text-[11px] font-medium text-text-muted">Chrome side panel</span>
        </div>
        <img src={src} alt={alt} width={width} height={height} loading="lazy" className="block h-auto w-full rounded-[14px]" />
      </div>
    </div>
  );
}

function Answer({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] font-medium text-text-muted">{q}</div>
      <div className="text-[13px] text-text-primary">{a}</div>
    </div>
  );
}

// Illustration of a join request being captured. Generic, not a copy of Facebook's interface.
export function CaptureVisual() {
  return (
    <div className="mx-auto w-full max-w-[440px] space-y-3">
      <div className="rounded-2xl border border-black/[0.08] bg-white p-4 shadow-card">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#6f9bff] to-[#a78bfa] text-sm font-bold text-white" aria-hidden>
            JL
          </span>
          <div>
            <div className="text-sm font-semibold text-text-primary">Jordan Lee</div>
            <div className="text-[11px] text-text-muted">Requested to join · 2 min ago</div>
          </div>
          <span className="ml-auto rounded-full bg-accent-green/10 px-2 py-0.5 text-[11px] font-semibold text-accent-green">Captured</span>
        </div>
        <div className="mt-3 space-y-2 border-t border-black/[0.06] pt-3">
          <Answer q="What is your biggest challenge right now?" a="Getting my first 10 coaching clients" />
          <Answer q="Want our free starter guide? Share your email (optional)" a={<>Sure, it&apos;s <span className="rounded bg-accent-blue/10 px-1 font-semibold text-accent-blue">jordan@example.com</span>.</>} />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-dashed border-accent-blue/30 bg-accent-blue/[0.04] px-4 py-2.5 text-[12px] text-text-secondary">
        <svg className="h-4 w-4 shrink-0 text-accent-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Email found inside the sentence and saved with every answer.
      </div>
    </div>
  );
}

export function SheetVisual() {
  const rows = [
    ['Jordan Lee', 'jordan@example.com', 'First 10 coaching clients'],
    ['Priya Shah', 'priya@example.com', 'Launching a course'],
    ['Sam Ortiz', '', 'Just browsing'],
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-black/[0.08] bg-white text-[12px] shadow-card">
      <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#f3f8f4] px-3 py-2 font-semibold text-[#1e7a45]">
        <span className="grid h-4 w-4 place-items-center rounded-sm bg-[#1e7a45] text-[9px] text-white" aria-hidden>▦</span>
        Group leads (Google Sheet)
      </div>
      <table className="w-full whitespace-nowrap">
        <thead className="text-left text-text-muted">
          <tr>
            <th className="px-3 py-1.5 font-medium">Name</th>
            <th className="px-3 py-1.5 font-medium">Email</th>
            <th className="hidden px-3 py-1.5 font-medium sm:table-cell">Answer</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-black/[0.05] text-text-primary">
              <td className="px-3 py-1.5">{r[0]}</td>
              <td className="px-3 py-1.5 text-text-secondary">{r[1] || '—'}</td>
              <td className="hidden px-3 py-1.5 text-text-secondary sm:table-cell">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ApproveVisual() {
  return (
    <div className="mx-auto w-full max-w-[440px] rounded-2xl border border-black/[0.08] bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-text-primary">Auto-approve</div>
        <span className="inline-flex h-6 w-11 items-center rounded-full bg-accent-blue p-0.5" aria-hidden>
          <span className="ml-auto h-5 w-5 rounded-full bg-white shadow" />
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ['18', 'approved'],
          ['3–8s', 'between each'],
          ['50/hr', 'safety limit'],
        ].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-navy-light px-2 py-3">
            <div className="font-sora text-lg font-bold text-text-primary">{n}</div>
            <div className="text-[11px] text-text-muted">{l}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-accent-amber/10 px-3 py-2.5 text-[12px] text-text-secondary">
        <span className="font-semibold text-accent-amber">Backs off automatically.</span> If Facebook stops accepting approvals,
        auto-approve pauses for 6 hours instead of retrying.
      </div>
    </div>
  );
}


// A follow-up thread: welcome, day-3 nudge, reply, then the sequence stops.
export function ThreadVisual() {
  const msgs = [
    { from: 'You', when: 'Day 0', text: 'Welcome to the group, Jordan! You mentioned getting your first 10 clients, so start here…' },
    { from: 'You', when: 'Day 3', text: 'Quick follow-up in case my last email got buried. Anything specific you are stuck on?' },
    { from: 'Jordan', when: 'Day 3', text: 'Thanks! Honestly, pricing my first offer. Can we talk?', reply: true },
  ];
  return (
    <div className="mx-auto w-full max-w-[440px] rounded-2xl border border-black/[0.08] bg-white p-4 shadow-card">
      <div className="flex items-center gap-2 border-b border-black/[0.06] pb-3 text-sm font-semibold text-text-primary">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-[#EA4335] text-[10px] font-bold text-white" aria-hidden>M</span>
        Welcome to the group, Jordan
        <span className="ml-auto text-[11px] font-medium text-text-muted">3 messages</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {msgs.map((m) => (
          <div key={m.when + m.from} className={`rounded-xl px-3 py-2.5 text-[13px] ${m.reply ? 'bg-accent-blue/[0.07]' : 'bg-navy-light'}`}>
            <div className="mb-0.5 flex text-[11px] font-semibold text-text-muted">
              <span className={m.reply ? 'text-accent-blue' : ''}>{m.from}</span>
              <span className="ml-auto font-medium">{m.when}</span>
            </div>
            <div className="text-text-primary">{m.text}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-accent-green/10 px-3 py-2 text-[12px] font-semibold text-accent-green">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Reply received: day 7 follow-up cancelled
      </div>
    </div>
  );
}
