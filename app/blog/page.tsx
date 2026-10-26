import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  alternates: { canonical: '/blog/' },
  title: 'Blog — Tips, Guides & Updates',
  description:
    'Read the GroupMailBox blog for tips on Facebook Group lead capture, Google Sheets automation, and growing your community.',
};

// Only articles that exist. The old list had six placeholder posts linking to '#'.
const BLOG_POSTS = [
  {
    slug: '/blog/google-sheets-crm-for-facebook-groups/',
    title: 'Use Google Sheets as a Simple CRM for Your Facebook Group',
    excerpt: 'The columns to use, how to tag members by their answers, and statuses that tell you who to follow up with.',
    category: 'Guide',
    date: 'October 26, 2026',
    readTime: '6 min read',
  },
  {
    slug: '/blog/email-facebook-group-members/',
    title: 'How to Email Your Facebook Group Members (Without Spamming Them)',
    excerpt: 'Collect emails with consent at join time, then send a short welcome sequence from Gmail that stops when people reply. Includes 3 templates.',
    category: 'Guide',
    date: 'October 26, 2026',
    readTime: '8 min read',
  },
  {
    slug: '/blog/export-facebook-group-members/',
    title: 'How to Export Facebook Group Members to Google Sheets, Excel or CSV',
    excerpt: 'Why there is no export button, why scraping is risky, and the consent-first way to build a member spreadsheet that keeps growing.',
    category: 'Guide',
    date: 'October 26, 2026',
    readTime: '7 min read',
  },
  {
    slug: '/blog/facebook-group-welcome-message-templates/',
    title: 'Facebook Group Welcome Message Templates: 18 Examples to Copy',
    excerpt: 'Weekly welcome posts, thank-you-for-joining notes and welcome emails for every kind of group.',
    category: 'Templates',
    date: 'October 26, 2026',
    readTime: '7 min read',
  },
  {
    slug: '/blog/facebook-group-membership-questions/',
    title: 'Facebook Group Membership Questions: 60 Examples by Niche',
    excerpt:
      'Copy-and-paste membership questions for coaching, business, local, hobby and course groups, plus how to ask for an email address with clear consent.',
    category: 'Templates',
    date: 'October 25, 2026',
    readTime: '9 min read',
  },
  {
    slug: '/compare/groupkit-alternative/',
    title: 'GroupKit Shut Down: What to Use Instead',
    excerpt:
      'GroupKit closed on 23 October 2026. How to keep capturing Facebook group leads without losing a week of new members.',
    category: 'Guide',
    date: 'October 25, 2026',
    readTime: '4 min read',
  },
];

const categoryColors: Record<string, 'blue' | 'amber' | 'red'> = {
  Tutorial: 'blue',
  Comparison: 'amber',
  Strategy: 'blue',
  Technical: 'amber',
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <Badge className="mb-4">Blog</Badge>
            <h1 className="font-sora font-extrabold text-4xl md:text-5xl mb-6">
              Tips, Guides & <span className="text-gradient-teal">Updates</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Learn how to capture more leads, grow your Facebook Group, and make the most of GroupMailBox.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <AnimateIn key={post.title} delay={i * 0.1}>
              <Link href={post.slug} className="block h-full">
                <Card className="h-full flex flex-col">
                  {/* Category image placeholder */}
                  <div className="bg-navy-lighter rounded-sm aspect-video mb-4 flex items-center justify-center">
                    <span className="text-text-muted text-sm">Article Image</span>
                  </div>

                  <Badge variant={categoryColors[post.category] || 'blue'} className="mb-3 self-start">
                    {post.category}
                  </Badge>

                  <h2 className="font-sora font-semibold text-lg mb-2 text-text-primary group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-text-muted text-xs">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Card>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}
