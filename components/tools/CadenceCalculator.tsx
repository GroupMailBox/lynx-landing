'use client';

import { useMemo, useState } from 'react';

const PRESETS: Record<string, { label: string; gaps: number[] }> = {
  gentle: { label: 'Gentle (communities, coaches)', gaps: [4, 7, 10, 14] },
  standard: { label: 'Standard', gaps: [3, 4, 7, 10] },
  quick: { label: 'Quick (time-sensitive offers)', gaps: [2, 2, 3, 5] },
};

const fmt = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
const toInput = (d: Date) => d.toISOString().slice(0, 10);

function addDays(d: Date, n: number, skipWeekends: boolean) {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  if (skipWeekends) {
    while (out.getDay() === 0 || out.getDay() === 6) out.setDate(out.getDate() + 1);
  }
  return out;
}

/** Free tool: plan a welcome email and follow-ups with real dates. Runs entirely in the browser. */
export default function CadenceCalculator() {
  const [start, setStart] = useState(toInput(new Date()));
  const [count, setCount] = useState(2);
  const [preset, setPreset] = useState('standard');
  const [gaps, setGaps] = useState<number[]>(PRESETS.standard.gaps);
  const [skipWeekends, setSkipWeekends] = useState(true);

  const plan = useMemo(() => {
    const steps = [{ n: 1, date: addDays(new Date(`${start}T09:00:00`), 0, skipWeekends), gap: 0 }];
    for (let i = 0; i < count; i++) {
      steps.push({ n: i + 2, date: addDays(steps[i].date, gaps[i], skipWeekends), gap: gaps[i] });
    }
    return steps;
  }, [start, count, gaps, skipWeekends]);

  const totalDays = Math.round((plan[plan.length - 1].date.getTime() - plan[0].date.getTime()) / 86400000);

  return (
    <div className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-card md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-semibold">
          First email goes out
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="mt-2 w-full rounded-xl border border-black/[0.12] px-3 py-2.5 font-normal" />
        </label>
        <label className="block text-sm font-semibold">
          Follow-ups after the first email
          <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-black/[0.12] px-3 py-2.5 font-normal">
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Pace
          <select
            value={preset}
            onChange={(e) => {
              setPreset(e.target.value);
              if (PRESETS[e.target.value]) setGaps(PRESETS[e.target.value].gaps);
            }}
            className="mt-2 w-full rounded-xl border border-black/[0.12] px-3 py-2.5 font-normal"
          >
            {Object.entries(PRESETS).map(([k, p]) => (
              <option key={k} value={k}>{p.label}</option>
            ))}
            <option value="custom">Custom</option>
          </select>
        </label>
        <label className="flex items-center gap-3 self-end pb-2.5 text-sm font-semibold">
          <input type="checkbox" checked={skipWeekends} onChange={(e) => setSkipWeekends(e.target.checked)} className="h-4 w-4" />
          Move sends off weekends
        </label>
      </div>

      {preset === 'custom' && (
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {Array.from({ length: count }).map((_, i) => (
            <label key={i} className="flex items-center gap-2">
              Wait
              <input
                type="number"
                min={1}
                max={30}
                value={gaps[i]}
                onChange={(e) => setGaps(gaps.map((g, j) => (j === i ? Math.min(30, Math.max(1, Number(e.target.value) || 1)) : g)))}
                className="w-16 rounded-lg border border-black/[0.12] px-2 py-1.5 text-center"
              />
              days → follow-up {i + 1}
            </label>
          ))}
        </div>
      )}

      <ol className="mt-8 space-y-3" aria-live="polite">
        {plan.map((s) => (
          <li key={s.n} className="flex items-center gap-4 rounded-xl bg-navy-light px-4 py-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-blue text-sm font-bold text-white">{s.n}</span>
            <div className="flex-1">
              <p className="font-semibold">{s.n === 1 ? 'Welcome email' : `Follow-up ${s.n - 1}`}</p>
              <p className="text-sm text-text-muted">{s.n === 1 ? 'Subject: Welcome to {group}, {first name}' : `Subject: Re: Welcome to {group}, {first name} · ${s.gap} days after the previous email`}</p>
            </div>
            <span className="text-sm font-semibold text-text-secondary">{fmt(s.date)}</span>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm text-text-secondary">
        {plan.length} emails over {totalDays} days. Stop the sequence for anyone who replies or unsubscribes.
      </p>
    </div>
  );
}
