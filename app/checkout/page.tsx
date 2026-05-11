'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QRCodeSVG } from 'qrcode.react';
import Button from '@/components/ui/Button';
import { PRICING_PLANS, type PlanId } from '@/lib/constants';
import {
  createOrder,
  getOrderStatus,
  submitUtr,
  type Order,
} from '@/lib/api';
import { getStoredAuth, setStoredAuth, signInWithGoogle } from '@/lib/auth';

// The token and plan arrive via URL hash (#token=...&plan=pro). Hash is used
// instead of query so the JWT never lands in server access logs along the way.
function readHashParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) return {};
  const params = new URLSearchParams(hash);
  const out: Record<string, string> = {};
  params.forEach((v, k) => {
    out[k] = v;
  });
  return out;
}

type Step = 'loading' | 'pay' | 'submitting' | 'verifying' | 'done' | 'error';

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('loading');
  const [error, setError] = useState<string>('');
  const [order, setOrder] = useState<Order | null>(null);
  const [plan, setPlan] = useState<PlanId | null>(null);
  const [token, setToken] = useState<string>('');
  const [utr, setUtr] = useState<string>('');
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const planDetails = useMemo(
    () => (plan ? PRICING_PLANS.find((p) => p.id === plan) : null),
    [plan],
  );

  useEffect(() => {
    const params = readHashParams();
    const p = params.plan as PlanId | undefined;

    if (!p || (p !== 'pro' && p !== 'agency')) {
      setStep('error');
      setError(
        'Missing plan. Open this page from the pricing page or the extension Upgrade button.',
      );
      return;
    }

    // Token resolution order:
    //  1. URL hash token (extension flow — extension only passes `token`)
    //  2. localStorage (visitor signed in on the landing site)
    //  3. None → trigger Google sign-in with return_to back to this URL.
    let t = params.token;
    if (!t) {
      const stored = getStoredAuth();
      if (stored) {
        t = stored.token;
      }
    } else if (params.userId && params.email) {
      // Rare case: hash includes full identity. Persist for future tabs.
      setStoredAuth({ token: t, user: { userId: params.userId, email: params.email } });
      try {
        history.replaceState(null, '', `${window.location.pathname}#plan=${p}`);
      } catch {
        // non-fatal
      }
    }

    if (!t) {
      // Send the user through Google sign-in, then bring them back here.
      signInWithGoogle(`/checkout/#plan=${p}`);
      return;
    }

    setToken(t);
    setPlan(p);

    createOrder(t, p)
      .then((ord) => {
        setOrder(ord);
        if (ord.status === 'paid') {
          setStep('done');
        } else {
          setStep('pay');
        }
      })
      .catch((err) => {
        setError(err.message || 'Could not create order');
        setStep('error');
      });
  }, []);

  // Poll status every 5s once an order exists, so admin/webhook flips
  // show up without a manual refresh.
  useEffect(() => {
    if (!order || !token) return;
    if (step === 'done' || step === 'error') return;

    pollRef.current = setInterval(async () => {
      try {
        const fresh = await getOrderStatus(token, order.orderId);
        if (fresh.status === 'paid') {
          if (pollRef.current) clearInterval(pollRef.current);
          router.push('/checkout/success/');
        } else if (fresh.status === 'expired' || fresh.status === 'failed') {
          if (pollRef.current) clearInterval(pollRef.current);
          setStep('error');
          setError(`Order ${fresh.status}. Please start a new one.`);
        }
      } catch {
        // transient; the next tick can recover
      }
    }, 5000);

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [order, token, step, router]);

  const onSubmitUtr = async () => {
    if (!order || !token) return;
    const cleaned = utr.trim();
    if (!/^[A-Za-z0-9]{6,32}$/.test(cleaned)) {
      setError('UTR should be 6–32 alphanumeric characters (find it in your UPI app after paying)');
      return;
    }
    setError('');
    setStep('submitting');
    try {
      const res = await submitUtr(token, order.orderId, cleaned);
      // Backend auto-confirms on UTR submit (MVP). Either status is 'paid'
      // (just activated) or alreadyPaid was true.
      if (res.status === 'paid' || res.alreadyPaid) {
        router.push('/checkout/success/');
        return;
      }
      // Fallback for the legacy path: an admin still has to flip it. Poll.
      setStep('verifying');
    } catch (err) {
      setStep('pay');
      setError(err instanceof Error ? err.message : 'Could not submit UTR');
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <section className="px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-sora text-3xl md:text-4xl mb-2">
            <span className="font-normal">Upgrade to </span>
            <span className="font-extrabold text-gradient-teal">
              {planDetails?.name || 'Pro'}
            </span>
          </h1>
          <p className="text-text-secondary text-sm mb-8">
            Pay via UPI — scan the QR with any UPI app (GPay / PhonePe / Paytm), then paste
            the transaction ID below.
          </p>

          {step === 'loading' && (
            <div className="text-text-secondary">Preparing your order…</div>
          )}

          {step === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5 text-red-300 text-sm">
              {error || 'Something went wrong'}
            </div>
          )}

          {(step === 'pay' || step === 'submitting' || step === 'verifying') && order && (
            <div className="bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] p-8">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-white p-3 rounded-lg mb-4">
                  <QRCodeSVG value={order.upiUri} size={224} level="M" includeMargin={false} />
                </div>
                <div className="text-3xl font-extrabold text-text-primary">
                  ₹{order.amountRupees}
                </div>
                <div className="text-xs text-text-muted mt-1">
                  Paying to <span className="text-text-secondary">{order.payeeName}</span> ({order.upiVpa})
                </div>
              </div>

              <ol className="text-sm text-text-secondary space-y-2 mb-6">
                <li><span className="text-text-primary font-semibold">1.</span> Scan the QR with any UPI app and confirm the payment.</li>
                <li><span className="text-text-primary font-semibold">2.</span> Copy the 12-digit UTR / transaction reference from your UPI app.</li>
                <li><span className="text-text-primary font-semibold">3.</span> Paste it below — we&apos;ll verify and activate your plan.</li>
              </ol>

              <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">
                UPI Transaction ID (UTR)
              </label>
              <div className="flex gap-2">
                <input
                  className="flex-1 bg-navy/60 border border-white/[0.08] rounded-md px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent-blue/50 disabled:opacity-50"
                  type="text"
                  value={utr}
                  onChange={(e) => setUtr(e.target.value)}
                  placeholder="e.g. 423112345678"
                  disabled={step !== 'pay'}
                />
                <button
                  className="px-4 py-2 rounded-md bg-accent-blue text-navy text-sm font-semibold disabled:opacity-50"
                  onClick={onSubmitUtr}
                  disabled={step !== 'pay' || !utr.trim()}>
                  {step === 'submitting' ? 'Submitting…' : 'Submit'}
                </button>
              </div>

              {error && (
                <div className="text-red-300 text-xs mt-3">{error}</div>
              )}

              {step === 'verifying' && (
                <div className="mt-5 bg-accent-blue/10 border border-accent-blue/30 rounded-lg p-4 text-sm">
                  <div className="font-semibold text-accent-blue mb-1">UTR submitted ✓</div>
                  <div className="text-text-secondary text-xs">
                    We&apos;re verifying with our bank. This usually takes a few minutes — this page will update
                    automatically when your plan activates. You can close this tab and check back later.
                  </div>
                </div>
              )}

              <div className="mt-6 text-xs text-text-muted">
                Trouble paying? Email us at <a className="text-accent-blue" href="mailto:support@groupmailbox.com">support@groupmailbox.com</a> with your transaction ID.
              </div>
            </div>
          )}

          {step === 'error' && (
            <div className="mt-6">
              <Button href="/pricing/" variant="secondary">
                Back to pricing
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
