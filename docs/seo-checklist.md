# GroupMailBox SEO and site quality checklist

The website-steward agent works through this list. **[auto]** items are checked by `node scripts/seo-audit.mjs` after `npm run build`. Everything else is checked by hand or in Search Console.

## 1. Crawling and indexing
- [auto] `robots.txt` exists, does not block the site, and points to the sitemap
- [auto] Sitemap lists every indexable page, excludes noindex pages, and uses the same host as the canonicals
- [auto] Every indexable page has a self-referencing canonical
- [ ] One host only. Both `groupmailbox.com` and `www.groupmailbox.com` return 200 today. In Vercel → Domains, redirect www → apex (308), so Google sees one site
- [ ] Sitemap submitted in Google Search Console and Bing Webmaster Tools; the domain property is verified with a DNS TXT record at Namecheap
- [ ] Coverage report has no "Discovered – currently not indexed" pile-up. If one grows, add internal links to those pages
- [ ] `/auth/*` and `/checkout/*` are noindex (done) and stay out of the sitemap (done)
- [ ] A custom 404 page exists (done) and returns a real 404 status on Vercel
- [ ] No redirect chains; old URLs 301 to new ones when pages move
- [ ] Trailing-slash style is consistent (the site uses trailing slashes)

## 2. On-page, for every page
- [auto] `<title>` is 30–60 characters, unique, and has the main keyword near the start
- [auto] Meta description is 70–160 characters, unique, and says what the reader gets
- [auto] Exactly one `<h1>`; H2/H3 follow in order
- [auto] `og:title`, `og:description`, `og:image` (1200×630) and `twitter:card` are present
- [auto] `<html lang>` is set
- [ ] The main keyword appears in the first 100 words, written naturally
- [ ] The URL slug is short, lowercase, hyphenated, and contains the keyword
- [ ] 3+ internal links to related pages with descriptive anchor text (not "click here")
- [ ] One clear call to action: install free, or see pricing

## 3. Content quality (Google's helpful-content and E-E-A-T)
- [auto] Blog guides have 800+ words of body text
- [ ] Every factual claim about competitors is dated and sourced (as on the compare pages); no unverified numbers
- [ ] No fake reviews, ratings, user counts or testimonials. `aggregateRating` only once real reviews exist
- [ ] Each post answers the search intent in the first screen, then goes deeper
- [ ] Shows experience: real screenshots, real templates, specific numbers
- [ ] An author or "about" signal and a visible "updated" date on guides
- [ ] Refresh posts with a year in the title every January
- [ ] No keyword stuffing; the text reads as written for a group admin
- [ ] Legal or consent topics carry "not legal advice"

## 4. Structured data
- [auto] All JSON-LD parses
- [auto] Blog posts have Article/BlogPosting schema
- [ ] Organization and SoftwareApplication schema on the home page (no fake rating)
- [ ] BreadcrumbList on articles (done via the Article component)
- [ ] FAQPage only where the FAQ is visible on the page
- [ ] Validate with Google's Rich Results Test after major changes

## 5. Images and creatives
- [auto] Every `<img>` has alt text, plus width and height (prevents layout shift)
- [ ] Real product screenshots with fictional sample data, labelled as such: `scripts/store-screenshots.mjs`, How It Works images
- [ ] Per-post share cards: `node scripts/og-images.mjs` after adding or renaming a post
- [ ] PNG for UI screenshots, WebP or AVIF for photos, each under ~200 KB where possible
- [ ] Descriptive file names (`push-to-sheets.png`, not `image1.png`)

## 6. Performance (Core Web Vitals)
- [ ] LCP < 2.5 s, INP < 200 ms, CLS < 0.1 on mobile, checked with PageSpeed Insights on the home, pricing and one blog page
- [ ] No heavy JS libraries for decoration (three.js was removed for this reason)
- [ ] Fonts self-hosted or `display=swap`; at most two families
- [ ] Animations respect `prefers-reduced-motion` (done)

## 7. Mobile and accessibility
- [ ] No horizontal scroll at 390 px; tap targets ≥ 44 px
- [ ] Text contrast ≥ 4.5:1; focus states visible
- [ ] Forms and buttons have labels; the keyboard can reach everything

## 8. Keywords and topics
- [ ] One primary keyword per page; no two pages target the same keyword
- [ ] Keep the topic map in `docs/seo-topics.md` (agent-maintained): pillar → cluster posts → feature or compare page
- [ ] Commercial pages: "<competitor> alternative", "auto approve facebook group members", "facebook group lead capture"
- [ ] Informational guides: membership questions, welcome messages, emailing members, exporting members, consent, Sheets CRM
- [ ] Check volume and difficulty in Google Keyword Planner or Ahrefs' free tools before writing; search demand in this niche is small, so favour buyer-intent long-tail terms

## 9. Off-page and listings
- [ ] Chrome Web Store listing keeps the same claims as the site (`docs/chrome-web-store-listing.md`)
- [ ] G2 (feeds Capterra and GetApp), SaaSHub, AlternativeTo, Product Hunt, then niche directories
- [ ] Guest posts and podcasts with coaches who teach Facebook-group businesses (the affiliate list)
- [ ] Never buy links or join link schemes

## 10. Before every merge
- [ ] `npm run build` passes
- [ ] `node scripts/seo-audit.mjs` shows 0 errors
- [ ] New or changed pages checked in a headless screenshot at 1440 px and 390 px
- [ ] Changes are on a branch with a pull request; never push straight to `main`
