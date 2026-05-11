'use client';

import Button from '@/components/ui/Button';

export default function CheckoutSuccessPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <section className="px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-green/15 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-green">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="font-sora text-3xl md:text-4xl mb-3">
            <span className="font-normal">You&apos;re </span>
            <span className="font-extrabold text-gradient-teal">in.</span>
          </h1>
          <p className="text-text-secondary text-base mb-8">
            Your plan is active. Open the GroupMailBox extension — your new features
            will unlock the moment the side panel reloads.
          </p>

          <div className="bg-navy-light/60 backdrop-blur-xl border border-white/[0.06] rounded-[12px] p-6 text-left mb-8">
            <div className="text-text-primary font-semibold mb-3">Next steps</div>
            <ol className="text-sm text-text-secondary space-y-2">
              <li><span className="text-text-primary font-semibold">1.</span> Close this tab.</li>
              <li><span className="text-text-primary font-semibold">2.</span> Open the GroupMailBox side panel.</li>
              <li><span className="text-text-primary font-semibold">3.</span> Auto-approve and email campaigns are now enabled.</li>
            </ol>
          </div>

          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </section>
    </div>
  );
}
