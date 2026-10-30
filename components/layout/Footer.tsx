'use client';

import Link from 'next/link';
import Logo from './Logo';
import { CHROME_STORE_URL, FOOTER_LINKS, SITE_NAME, SUPPORT_EMAIL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-navy-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Logo size={32} />
              <span className="font-sora text-lg font-bold">
                <span className="text-text-primary">Group</span>
                <span className="text-gradient-teal">MailBox</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Capture every lead from your Facebook Group member requests. Push to Google Sheets with one click.
            </p>

            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-blue hover:bg-teal-dim text-white font-bold text-sm rounded-[4px] hover:shadow-[0_4px_16px_rgba(79,140,255,0.3)] transition-all">
              Add to Chrome, free
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-sora font-semibold text-text-primary text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="font-sora font-semibold text-text-primary text-sm mb-4">Compare</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.compare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-sora font-semibold text-text-primary text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sora font-semibold text-text-primary text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Email */}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              aria-label="Email"
              className="text-text-muted hover:text-accent-blue transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark: decorative, sized to the viewport so it spans edge to edge. */}
      <div aria-hidden="true" className="overflow-hidden select-none pointer-events-none">
        <div className="font-sora font-extrabold lowercase leading-[0.8] tracking-[-0.06em] text-center whitespace-nowrap text-[14.5vw] bg-gradient-to-b from-text-primary/[0.2] to-text-primary/[0.02] bg-clip-text text-transparent -mb-[2.2vw]">
          groupmailbox
        </div>
      </div>
    </footer>
  );
}
