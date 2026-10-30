import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { CHROME_STORE_URL, SITE_URL } from '@/lib/constants';

interface ArticleProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string; // ISO date
  updated?: string;
  readMinutes: number;
  /** Full path for pages outside /blog/, e.g. '/features/x/'. */
  path?: string;
  /** Breadcrumb parent; defaults to the blog. */
  section?: { name: string; href: string };
  children: React.ReactNode;
}

/** Shared layout for real blog posts: breadcrumbs, Article + BreadcrumbList schema, readable typography, CTA. */
export default function Article({ slug, title, description, category, published, updated, readMinutes, path, section = { name: 'Blog', href: '/blog/' }, children }: ArticleProps) {
  const url = `${SITE_URL}${path || `/blog/${slug}/`}`;
  return (
    <article className="px-4 pb-24 pt-32">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          datePublished: published,
          dateModified: updated || published,
          mainEntityOfPage: url,
          author: { '@type': 'Organization', name: 'GroupMailBox', url: `${SITE_URL}/` },
          publisher: { '@type': 'Organization', name: 'GroupMailBox', logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
          image: `${SITE_URL}/og.png`,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: section.name, item: `${SITE_URL}${section.href}` },
            { '@type': 'ListItem', position: 3, name: title, item: url },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl">
        <nav className="mb-6 text-sm text-text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-blue">Home</Link> <span aria-hidden>/</span>{' '}
          <Link href={section.href} className="hover:text-accent-blue">{section.name}</Link>
        </nav>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">{category}</p>
        <h1 className="font-sora text-4xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-text-secondary">{description}</p>
        <p className="mt-4 text-sm text-text-muted">
          Updated {new Date(updated || published).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {readMinutes} min read
        </p>
        <div className="article mt-10">{children}</div>
        <aside className="mt-14 rounded-2xl bg-ink p-8 text-white md:p-10">
          <p className="font-sora text-2xl font-bold">Capture every answer automatically</p>
          <p className="mt-2 text-white/70">
            GroupMailBox saves each member request and its answers to Google Sheets, then follows up from your Gmail until they reply.
          </p>
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-ink">
            Add to Chrome, it&apos;s free
          </a>
        </aside>
      </div>
    </article>
  );
}
