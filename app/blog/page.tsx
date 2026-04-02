import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateIn from '@/components/ui/AnimateIn';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Blog — Tips, Guides & Updates',
  description:
    'Read the GroupMailBox blog for tips on Facebook Group lead capture, Google Sheets automation, and growing your community.',
};

const BLOG_POSTS = [
  {
    slug: '#',
    title: 'How to Capture Leads from Facebook Group Member Requests',
    excerpt:
      'Learn the best strategies for turning Facebook Group member requests into actionable leads for your business.',
    category: 'Tutorial',
    date: 'March 28, 2026',
    readTime: '5 min read',
  },
  {
    slug: '#',
    title: 'GroupMailBox vs Manual Lead Capture: Time Comparison',
    excerpt:
      'We compared the time it takes to manually capture leads vs using GroupMailBox. The results may surprise you.',
    category: 'Comparison',
    date: 'March 20, 2026',
    readTime: '4 min read',
  },
  {
    slug: '#',
    title: '5 Ways to Grow Your Facebook Group in 2026',
    excerpt:
      'Proven strategies to grow your Facebook Group and attract high-quality members who engage with your content.',
    category: 'Strategy',
    date: 'March 15, 2026',
    readTime: '7 min read',
  },
  {
    slug: '#',
    title: 'Automating Your Facebook Group Workflow with Google Sheets',
    excerpt:
      'Discover how to build automated workflows using GroupMailBox and Google Sheets to manage your group efficiently.',
    category: 'Tutorial',
    date: 'March 10, 2026',
    readTime: '6 min read',
  },
  {
    slug: '#',
    title: 'The Complete Guide to Facebook Group Screening Questions',
    excerpt:
      'How to write effective screening questions that qualify leads and protect your group from spam.',
    category: 'Strategy',
    date: 'March 5, 2026',
    readTime: '8 min read',
  },
  {
    slug: '#',
    title: 'What is MutationObserver and Why It Matters for Lead Capture',
    excerpt:
      'A non-technical explanation of the technology behind GroupMailBox\'s real-time member detection.',
    category: 'Technical',
    date: 'February 28, 2026',
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
