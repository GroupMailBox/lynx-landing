import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { OrganizationSchema } from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';

const sora = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const dmSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}: Turn Facebook Group Members into Customers`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME}: Turn Facebook Group Members into Customers`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME}: Turn Facebook Group Members into Customers`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans bg-navy text-text-primary antialiased`}
      >
        {/* Skip navigation link for accessibility (WCAG 2.4.1) */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
