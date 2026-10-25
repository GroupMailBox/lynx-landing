// The capture → sheet → follow-up loop, drawn in HTML so it is sharp, fast and needs no WebGL.
// Example data only.

function Chip({ tone, children }: { tone: 'blue' | 'green' | 'gray' | 'amber'; children: React.ReactNode }) {
  const tones = {
    blue: 'bg-accent-blue/10 text-accent-blue',
    green: 'bg-accent-green/10 text-accent-green',
    gray: 'bg-navy-lighter text-text-muted',
    amber: 'bg-accent-amber/10 text-accent-amber',
  };
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${tones[tone]}`}>{children}</span>;
}

function Panel({ step, title, icon, children, className = '' }: { step: string; title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-black/[0.08] bg-white shadow-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-3">
        <span className="grid h-6 w-6 place-items-center rounded-lg bg-navy-light text-text-secondary">{icon}</span>
        <span className="text-xs font-semibold text-text-primary">{title}</span>
        <span className="ml-auto text-[11px] font-medium text-text-muted">{step}</span>
      </div>
      {children}
    </div>
  );
}

const Avatar = ({ i, c }: { i: string; c: string }) => (
  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white ${c}`} aria-hidden>
    {i}
  </span>
);

export default function FlowMock() {
  return (
    <div
      className="relative mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-3"
      role="img"
      aria-label="Example: a Facebook group member request is captured, added to a Google Sheet, then followed up in Gmail until they reply"
    >
      {/* 1. Facebook member request */}
      <Panel
        step="1 · Capture"
        title="Member requests"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C15 14.2 10.3 13 8 13Zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 1.9 2 3.4V19h6v-2.5c0-2.3-4.7-3.5-7-3.5Z" /></svg>}
      >
        <div className="space-y-3 p-4">
          <div className="flex items-start gap-3">
            <Avatar i="PS" c="bg-gradient-to-br from-pink-500 to-orange-400" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">Priya Sharma</p>
              <p className="text-[11px] text-text-muted">Wants to join · Growth Hackers India</p>
              <div className="mt-2 space-y-1.5 rounded-xl bg-navy-light p-2.5 text-[11px]">
                <p><span className="text-text-muted">Q1 · Email?</span> priya@northwind.io</p>
                <p><span className="text-text-muted">Q2 · What do you do?</span> Run a 6-person agency</p>
                <p><span className="text-text-muted">Q3 · Biggest challenge?</span> Getting clients</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-dashed border-accent-blue/30 px-3 py-2 text-[11px]">
            <span className="text-text-secondary">+ 23 more requests</span>
            <Chip tone="blue">Captured</Chip>
          </div>
        </div>
      </Panel>

      {/* 2. Google Sheet */}
      <Panel
        step="2 · Organise"
        title="Leads · Google Sheets"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 6h-6v2h6v2h-6v2h6v4h-6v-4h-2v4H5v-4h6v-2H5v-2h6V9H5V5h14Z" /></svg>}
        className="md:translate-y-8"
      >
        <table className="w-full text-left text-[11px]">
          <thead className="text-text-muted">
            <tr className="border-b border-black/[0.06]">
              <th className="px-4 py-2 font-medium">name</th>
              <th className="px-2 py-2 font-medium">email</th>
              <th className="px-4 py-2 font-medium">status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Priya S.', 'priya@north…', 'Replied', 'green'],
              ['Arjun M.', 'arjun@pixel…', 'Step 2 · Thu', 'blue'],
              ['Sara K.', 'sara@brigh…', 'Step 1 · sent', 'blue'],
              ['Dev P.', 'dev@kestre…', 'Unsubscribed', 'gray'],
              ['Neha R.', 'neha@loom…', 'Queued', 'amber'],
            ].map(([n, e, s, t]) => (
              <tr key={n} className="border-b border-black/[0.04] last:border-0">
                <td className="px-4 py-2.5 font-medium">{n}</td>
                <td className="px-2 py-2.5 text-text-muted">{e}</td>
                <td className="px-4 py-2.5"><Chip tone={t as 'blue'}>{s}</Chip></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      {/* 3. Gmail thread */}
      <Panel
        step="3 · Follow up"
        title="Gmail · same thread"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z" /></svg>}
      >
        <div className="space-y-2.5 p-4 text-[11px]">
          <div className="rounded-xl bg-navy-light p-2.5">
            <p className="font-semibold">You · Day 0</p>
            <p className="mt-0.5 text-text-secondary">Hi Priya, welcome to Growth Hackers India! Saw you run an agency…</p>
          </div>
          <div className="rounded-xl bg-navy-light p-2.5">
            <p className="font-semibold">You · Day 3 <span className="font-normal text-text-muted">· follow-up</span></p>
            <p className="mt-0.5 text-text-secondary">Quick nudge in case this got buried…</p>
          </div>
          <div className="rounded-xl border border-accent-green/30 bg-accent-green/[0.06] p-2.5">
            <p className="font-semibold">Priya · reply</p>
            <p className="mt-0.5 text-text-secondary">Yes! Can we talk Thursday?</p>
          </div>
          <div className="flex items-center gap-1.5 text-accent-green">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
            <span className="font-semibold">Follow-ups stopped automatically</span>
          </div>
        </div>
      </Panel>
    </div>
  );
}
