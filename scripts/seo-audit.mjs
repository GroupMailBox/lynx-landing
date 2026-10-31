#!/usr/bin/env node
// Technical SEO audit of the static export in out/. Run after `npm run build`:
//   node scripts/seo-audit.mjs            human-readable report
//   node scripts/seo-audit.mjs --json     machine-readable (for the website-steward agent)
// Exit code 1 when any error-level issue is found, so it can gate CI.
//
// Checks per indexable page: title and description length and uniqueness, one H1,
// self-referencing canonical on the site host, Open Graph and Twitter tags, image
// alt text and dimensions, parseable JSON-LD, internal links that resolve, thin
// content, and noindex pages kept out of the sitemap. Site-wide: robots.txt,
// sitemap coverage, and host consistency between canonicals, sitemap and robots.

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';

const OUT = new URL('../out/', import.meta.url).pathname;
const JSON_MODE = process.argv.includes('--json');
const issues = [];
const add = (level, page, rule, detail) => issues.push({ level, page, rule, detail });

if (!existsSync(OUT)) {
  console.error('out/ not found. Run `npm run build` first.');
  process.exit(2);
}

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return name === '_next' ? [] : htmlFiles(p);
    return name.endsWith('.html') ? [p] : [];
  });
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const meta = (html, attr, key) => {
  const m =
    html.match(new RegExp(`<meta[^>]*${attr}="${key}"[^>]*content="([^"]*)"`, 'i')) ||
    html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${key}"`, 'i'));
  return m ? decode(m[1]) : null;
};
const urlPath = (file) => {
  const rel = '/' + relative(OUT, file).replace(/index\.html$/, '').replace(/\.html$/, '/');
  return rel === '//' ? '/' : rel;
};
const textOf = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  ).replace(/\s+/g, ' ').trim();

// ---- site-wide files ---------------------------------------------------------
const robots = existsSync(join(OUT, 'robots.txt')) ? readFileSync(join(OUT, 'robots.txt'), 'utf8') : '';
if (!robots) add('error', '/robots.txt', 'robots-missing', 'No robots.txt in out/');
if (/Disallow:\s*\/\s*$/m.test(robots)) add('error', '/robots.txt', 'robots-blocks-all', 'robots.txt disallows the whole site');
const robotsSitemap = (robots.match(/^Sitemap:\s*(\S+)/im) || [])[1];
if (!robotsSitemap) add('warn', '/robots.txt', 'robots-no-sitemap', 'robots.txt does not point to the sitemap');

const sitemapXml = ['sitemap.xml', 'sitemap-0.xml']
  .map((f) => (existsSync(join(OUT, f)) ? readFileSync(join(OUT, f), 'utf8') : ''))
  .join('\n');
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !u.endsWith('.xml'));
if (!sitemapUrls.length) add('error', '/sitemap.xml', 'sitemap-empty', 'No page URLs found in the sitemap');
const sitemapPaths = new Set(sitemapUrls.map((u) => new URL(u).pathname));
const sitemapHost = sitemapUrls[0] ? new URL(sitemapUrls[0]).host : null;
if (robotsSitemap && sitemapHost && new URL(robotsSitemap).host !== sitemapHost)
  add('error', '/robots.txt', 'host-mismatch', `robots.txt sitemap host ${new URL(robotsSitemap).host} ≠ sitemap host ${sitemapHost}`);

// ---- per page ----------------------------------------------------------------
const files = htmlFiles(OUT);
const existing = new Set(files.map(urlPath));
const titles = new Map();
const descriptions = new Map();
const canonicalHosts = new Set();

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const page = urlPath(file);
  if (page === '/404/' || page === '/404') continue;
  const robotsMeta = (meta(html, 'name', 'robots') || '').toLowerCase();
  const noindex = robotsMeta.includes('noindex');

  if (noindex) {
    if (sitemapPaths.has(page)) add('error', page, 'noindex-in-sitemap', 'noindex page is listed in the sitemap');
    continue;
  }
  if (!sitemapPaths.has(page)) add('warn', page, 'not-in-sitemap', 'Indexable page missing from the sitemap');

  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '').trim();
  if (!title) add('error', page, 'title-missing', 'No <title>');
  else {
    if (title.length > 60) add('warn', page, 'title-long', `${title.length} chars (aim 30–60): ${title}`);
    if (title.length < 25) add('warn', page, 'title-short', `${title.length} chars: ${title}`);
    titles.set(title, [...(titles.get(title) || []), page]);
  }

  const desc = meta(html, 'name', 'description');
  if (!desc) add('error', page, 'description-missing', 'No meta description');
  else {
    if (desc.length > 160) add('warn', page, 'description-long', `${desc.length} chars (aim 70–160)`);
    if (desc.length < 70) add('warn', page, 'description-short', `${desc.length} chars (aim 70–160)`);
    descriptions.set(desc, [...(descriptions.get(desc) || []), page]);
  }

  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1s !== 1) add(h1s ? 'warn' : 'error', page, 'h1-count', `${h1s} <h1> elements (want exactly 1)`);

  const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i) || [])[1];
  if (!canonical) add('error', page, 'canonical-missing', 'No canonical link');
  else {
    const c = new URL(canonical, 'https://placeholder.invalid');
    canonicalHosts.add(c.host);
    if (c.pathname !== page) add('warn', page, 'canonical-not-self', `canonical points to ${c.pathname}`);
    if (sitemapHost && c.host !== sitemapHost) add('error', page, 'host-mismatch', `canonical host ${c.host} ≠ sitemap host ${sitemapHost}`);
  }

  for (const [attr, key] of [['property', 'og:title'], ['property', 'og:description'], ['property', 'og:image'], ['name', 'twitter:card']])
    if (!meta(html, attr, key)) add('warn', page, 'social-tag-missing', `${key} missing`);

  if (!/<html[^>]*lang="/i.test(html)) add('warn', page, 'html-lang', '<html> has no lang attribute');

  for (const img of html.match(/<img\b[^>]*>/gi) || []) {
    if (!/\balt="/i.test(img)) add('error', page, 'img-alt', `image without alt: ${img.slice(0, 80)}`);
    if (!/\bwidth="/i.test(img) || !/\bheight="/i.test(img)) add('warn', page, 'img-size', `image without width/height (layout shift): ${img.slice(0, 80)}`);
  }

  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(m[1]);
    } catch {
      add('error', page, 'jsonld-invalid', 'JSON-LD block does not parse');
    }
  }

  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/gi)) {
    let href = m[1];
    if (/\.(png|jpe?g|svg|webp|xml|txt|ico|pdf)$/i.test(href)) {
      if (!existsSync(join(OUT, href))) add('error', page, 'broken-asset-link', href);
      continue;
    }
    if (!href.endsWith('/')) href += '/';
    if (!existing.has(href)) add('error', page, 'broken-internal-link', href);
  }

  if (page.startsWith('/blog/') && page !== '/blog/') {
    const words = textOf(html).split(' ').length;
    if (words < 800) add('warn', page, 'thin-content', `${words} words in body (aim 800+ for guides)`);
    if (!/"@type":"(Article|BlogPosting)"/.test(html)) add('warn', page, 'article-schema', 'No Article/BlogPosting JSON-LD');
  }
}

for (const [t, pages] of titles) if (pages.length > 1) add('error', pages.join(', '), 'title-duplicate', t);
for (const [d, pages] of descriptions) if (pages.length > 1) add('warn', pages.join(', '), 'description-duplicate', d.slice(0, 80));
if (canonicalHosts.size > 1) add('error', '(site)', 'host-mismatch', `canonicals use several hosts: ${[...canonicalHosts].join(', ')}`);

// ---- report ------------------------------------------------------------------
const errors = issues.filter((i) => i.level === 'error');
if (JSON_MODE) {
  console.log(JSON.stringify({ pages: files.length, errors: errors.length, warnings: issues.length - errors.length, issues }, null, 2));
} else {
  const byRule = {};
  for (const i of issues) (byRule[`${i.level.toUpperCase()} ${i.rule}`] ||= []).push(i);
  console.log(`SEO audit: ${files.length} pages, ${errors.length} errors, ${issues.length - errors.length} warnings\n`);
  for (const [rule, list] of Object.entries(byRule).sort()) {
    console.log(`${rule} (${list.length})`);
    for (const i of list.slice(0, 8)) console.log(`  ${i.page}  ${i.detail}`);
    if (list.length > 8) console.log(`  … ${list.length - 8} more`);
  }
}
process.exit(errors.length ? 1 : 0);
