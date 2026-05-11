'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import { setStoredAuth, consumeStoredReturnTo } from '@/lib/auth';

function isSafeNextPath(p: string | null | undefined): p is string {
  // Only allow same-origin paths, not full URLs or protocol-relative ones.
  return !!p && p.startsWith('/') && !p.startsWith('//');
}

function CallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // The backend (or extension) redirects here with
    // ?next=/some/path#token=...&userId=...&email=...&isNew=...
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) {
      setError('Missing sign-in token. Please try again.');
      return;
    }
    const params = new URLSearchParams(hash);
    const token = params.get('token');
    const userId = params.get('userId');
    const email = params.get('email');

    if (!token || !userId || !email) {
      setError('Incomplete sign-in response. Please try again.');
      return;
    }

    setStoredAuth({ token, user: { userId, email } });

    // Strip the token out of the URL before navigating anywhere else.
    try {
      history.replaceState(null, '', window.location.pathname);
    } catch {
      // non-fatal
    }

    // Pick destination: ?next= query param (used by the extension) >
    // sessionStorage (used by landing-page sign-in) > "/".
    const nextQuery = searchParams.get('next');
    const next = isSafeNextPath(nextQuery) ? nextQuery : consumeStoredReturnTo();
    router.replace(next);
  }, [router, searchParams]);

  if (error) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <section className="px-4">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="font-sora text-2xl md:text-3xl mb-4 font-extrabold text-gradient-teal">
              Sign-in failed
            </h1>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5 text-red-300 text-sm mb-6">
              {error}
            </div>
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <section className="px-4">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-sora text-2xl md:text-3xl mb-2 font-extrabold text-gradient-teal">
            Signing you in…
          </h1>
          <p className="text-text-secondary text-sm">One moment while we finish up.</p>
        </div>
      </section>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-24 pb-16 min-h-screen">
          <section className="px-4">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="font-sora text-2xl md:text-3xl mb-2 font-extrabold text-gradient-teal">
                Signing you in…
              </h1>
            </div>
          </section>
        </div>
      }
    >
      <CallbackInner />
    </Suspense>
  );
}
