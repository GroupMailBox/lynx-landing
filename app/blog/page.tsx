import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import PageHero from "@/components/ui/PageHero";
import { Orb, TiltCard } from "@/components/visuals/Scene3D";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/" },
  title: "Blog — Tips, Guides & Updates",
  description:
    "Read the GroupMailBox blog for tips on Facebook Group lead capture, Google Sheets automation, and growing your community.",
};

// Only articles that exist. The old list had six placeholder posts linking to '#'.
const BLOG_POSTS = [
  {
    slug: "/blog/facebook-group-email-consent/",
    title: "Can You Email Facebook Group Members? A Consent-First Guide",
    excerpt:
      "How to ask for consent in your membership questions, what every email must include, and the basics of US, UK/EU and Canadian rules.",
    category: "Guide",
    date: "October 26, 2026",
    readTime: "6 min read",
  },
  {
    slug: "/blog/google-sheets-crm-for-facebook-groups/",
    title: "Use Google Sheets as a Simple CRM for Your Facebook Group",
    excerpt:
      "The columns to use, how to tag members by their answers, and statuses that tell you who to follow up with.",
    category: "Guide",
    date: "October 26, 2026",
    readTime: "6 min read",
  },
  {
    slug: "/blog/email-facebook-group-members/",
    title: "How to Email Your Facebook Group Members (Without Spamming Them)",
    excerpt:
      "Collect emails with consent at join time, then send a short welcome sequence from Gmail that stops when people reply. Includes 3 templates.",
    category: "Guide",
    date: "October 26, 2026",
    readTime: "8 min read",
  },
  {
    slug: "/blog/export-facebook-group-members/",
    title:
      "How to Export Facebook Group Members to Google Sheets, Excel or CSV",
    excerpt:
      "Why there is no export button, why scraping is risky, and the consent-first way to build a member spreadsheet that keeps growing.",
    category: "Guide",
    date: "October 26, 2026",
    readTime: "7 min read",
  },
  {
    slug: "/blog/facebook-group-welcome-message-templates/",
    title: "Facebook Group Welcome Message Templates: 18 Examples to Copy",
    excerpt:
      "Weekly welcome posts, thank-you-for-joining notes and welcome emails for every kind of group.",
    category: "Templates",
    date: "October 26, 2026",
    readTime: "7 min read",
  },
  {
    slug: "/blog/facebook-group-membership-questions/",
    title: "Facebook Group Membership Questions: 60 Examples by Niche",
    excerpt:
      "Copy-and-paste membership questions for coaching, business, local, hobby and course groups, plus how to ask for an email address with clear consent.",
    category: "Templates",
    date: "October 25, 2026",
    readTime: "9 min read",
  },
  {
    slug: "/compare/groupkit-alternative/",
    title: "GroupKit Shut Down: What to Use Instead",
    excerpt:
      "GroupKit closed on 23 October 2026. How to keep capturing Facebook group leads without losing a week of new members.",
    category: "Guide",
    date: "October 25, 2026",
    readTime: "4 min read",
  },
];

// Share card for each post (scripts/og-images.mjs); pages without one use the site card.
const coverOf = (slug: string) => {
  const m = slug.match(/^\/blog\/([^/]+)\/$/);
  return m ? `/og/${m[1]}.png` : "/og.png";
};

const categoryColors: Record<string, "blue" | "amber" | "red"> = {
  Tutorial: "blue",
  Comparison: "amber",
  Strategy: "blue",
  Technical: "amber",
};

export default function BlogPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Guides for Facebook{" "}
            <span className="text-shimmer">group admins</span>
          </>
        }
        subtitle="Membership questions, welcome messages, emailing members with consent, and running your group from Google Sheets."
        decor={
          <>
            <Orb
              size={200}
              className="absolute left-[6%] top-36 hidden lg:block"
            />
            <Orb
              size={150}
              rings={6}
              className="absolute right-[8%] top-60 hidden lg:block"
            />
          </>
        }
      />

      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((p) => ({ ...p, cover: coverOf(p.slug) })).map(
            (post, i) => (
              <AnimateIn key={post.title} delay={i * 0.1}>
                <Link href={post.slug} className="block h-full">
                  <TiltCard>
                    <Card className="h-full flex flex-col">
                      {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                      <img
                        src={post.cover}
                        alt=""
                        width={1200}
                        height={630}
                        loading="lazy"
                        className="mb-4 aspect-[1200/630] w-full rounded-lg border border-black/[0.06] object-cover"
                      />

                      <Badge
                        variant={categoryColors[post.category] || "blue"}
                        className="mb-3 self-start"
                      >
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
                  </TiltCard>
                </Link>
              </AnimateIn>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
