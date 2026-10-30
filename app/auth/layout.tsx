import type { Metadata } from 'next';

// Sign-in and checkout steps are not landing pages: keep them out of search results.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
