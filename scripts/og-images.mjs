#!/usr/bin/env node
// Generates a 1200x630 social share card per blog post into public/og/<slug>.png.
// Reads each post's TITLE and category from its page.tsx so cards stay in sync.
//   node scripts/og-images.mjs
// Needs Playwright with Chrome installed (npx playwright install chromium, or channel 'chrome').

import { chromium } from 'playwright';
import { readFileSync, readdirSync, existsSync, mkdirSync } from 'fs';

const ROOT = new URL('..', import.meta.url).pathname;
const BLOG = ROOT + 'app/blog/';
const OUT = ROOT + 'public/og/';
mkdirSync(OUT, { recursive: true });

const logo = 'data:image/png;base64,' + readFileSync(ROOT + 'public/logo.png').toString('base64');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const posts = readdirSync(BLOG)
  .filter((d) => existsSync(`${BLOG}${d}/page.tsx`))
  .map((slug) => {
    const src = readFileSync(`${BLOG}${slug}/page.tsx`, 'utf8');
    const title = (src.match(/const TITLE\s*=\s*'([^']+)'/) || src.match(/const TITLE\s*=\s*"([^"]+)"/) || [])[1];
    const category = (src.match(/category="([^"]+)"/) || [])[1] || 'Guide';
    return title && { slug, title, category };
  })
  .filter(Boolean);

const css = `*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;font-family:-apple-system,"Segoe UI",Inter,sans-serif;color:#0E1222;
background:radial-gradient(700px 500px at 0% 0%,#dfe8ff,transparent),radial-gradient(700px 500px at 100% 100%,#ece4ff,transparent),#f7f8fc;
padding:70px 80px;display:flex;flex-direction:column;justify-content:space-between}
.top{display:flex;align-items:center;gap:14px;font-weight:800;font-size:28px}.top img{width:52px;height:52px;border-radius:12px}.top span{color:#4F6BFF}
.cat{display:inline-block;background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:99px;padding:8px 18px;font-size:22px;font-weight:600;color:#4a5068;margin-bottom:22px}
h1{font-size:64px;line-height:1.06;letter-spacing:-1.8px;max-width:1000px}
.foot{font-size:24px;color:#4a5068}`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const p of posts) {
  await page.setContent(
    `<style>${css}</style><div class="top"><img src="${logo}"><b>Group<span>MailBox</span></b></div>` +
      `<div><div class="cat">${esc(p.category)}</div><h1>${esc(p.title)}</h1></div>` +
      `<div class="foot">groupmailbox.com/blog</div>`,
  );
  // Shrink long titles until they fit in three lines.
  await page.evaluate(() => {
    const h = document.querySelector('h1');
    let size = 64;
    while (h.scrollHeight > 64 * 1.06 * 3 + 4 && size > 40) h.style.fontSize = `${(size -= 2)}px`;
  });
  await page.screenshot({ path: `${OUT}${p.slug}.png` });
  console.log('og/' + p.slug + '.png');
}
await browser.close();
