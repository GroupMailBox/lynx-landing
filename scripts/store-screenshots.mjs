// Chrome Web Store screenshots (1280x800) built from the real side panel captures.
import { chromium } from 'playwright';
import { readFileSync } from 'fs';
const PUB = new URL('../public/how-it-works/', import.meta.url).pathname;
const OUT = new URL('../docs/store-assets/', import.meta.url).pathname;
const logo = 'data:image/png;base64,' + readFileSync(new URL('../public/logo.png', import.meta.url).pathname).toString('base64');
const img = (f) => 'data:image/png;base64,' + readFileSync(PUB + f).toString('base64');
const approve = `<div class="card"><div class="row"><b>Auto-approve</b><span class="tog"><i></i></span></div>
  <div class="stats"><div><b>18</b><span>approved</span></div><div><b>3–8s</b><span>between each</span></div><div><b>50/hr</b><span>safety limit</span></div></div>
  <div class="warn"><b>Backs off automatically.</b> If Facebook stops accepting approvals, auto-approve pauses for 6 hours.</div></div>`;
const slides = [
  ['01-sheets.png', 'Every join request,<br>in your Google Sheet', 'Names, profile links and all three screening answers, captured while you review requests. One click to push.', `<img src="${img('push-to-sheets.png')}">`],
  ['02-follow-ups.png', 'Follow up from Gmail.<br>Stops when they reply.', 'A welcome email plus up to four follow-ups in the same thread, sent from your own Gmail.', `<img src="${img('follow-ups.png')}">`],
  ['03-auto-approve.png', 'Approve members<br>at a safe pace', 'Answers saved first, then approvals a few seconds apart, capped at 50 an hour.', approve],
  ['04-sign-in.png', 'Set up in a minute', 'Sign in with Google and pick the one sheet your leads go to. We never see the rest of your Drive.', `<img src="${img('sign-in.png')}">`],
];
const css = `*{box-sizing:border-box;margin:0}body{width:1280px;height:800px;font-family:-apple-system,"Segoe UI",Inter,sans-serif;
background:radial-gradient(900px 600px at 15% 10%,#dfe8ff,transparent),radial-gradient(800px 600px at 95% 90%,#ece4ff,transparent),#f7f8fc;
display:flex;align-items:center;gap:64px;padding:0 90px;overflow:hidden;color:#0E1222}
.l{flex:1}.brand{display:flex;gap:10px;align-items:center;font-weight:800;font-size:22px;margin-bottom:36px}.brand span{color:#4F6BFF}
.logo{width:40px;height:40px;border-radius:10px}
h1{font-size:54px;line-height:1.08;letter-spacing:-1.5px;margin-bottom:22px}p{font-size:22px;line-height:1.45;color:#4a5068;max-width:500px}
.r{width:420px;display:flex;justify-content:center}.r img{width:380px;border-radius:18px;box-shadow:0 30px 80px -20px rgba(37,56,120,.45);max-height:700px;object-fit:cover;object-position:top}
.note{position:absolute;bottom:22px;left:90px;font-size:13px;color:#8a90a6}
.card{width:420px;background:#fff;border-radius:20px;padding:28px;box-shadow:0 30px 80px -20px rgba(37,56,120,.35)}.row{display:flex;justify-content:space-between;align-items:center;font-size:20px}
.tog{width:52px;height:30px;border-radius:99px;background:#2F6BFF;display:flex;align-items:center;justify-content:flex-end;padding:3px}.tog i{width:24px;height:24px;border-radius:50%;background:#fff}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:22px 0}.stats div{background:#F6F7FB;border-radius:14px;padding:16px 6px;text-align:center}
.stats b{display:block;font-size:24px}.stats span{font-size:13px;color:#8a90a6}.warn{background:#fdf1dc;border-radius:14px;padding:14px;font-size:15px;line-height:1.4;color:#4a5068}.warn b{color:#E8920C}`;
const b = await chromium.launch({ channel: 'chrome' });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
for (const [file, h, sub, right] of slides) {
  await p.setContent(`<style>${css}</style><div class="l"><div class="brand"><img class="logo" src="${logo}"><b>Group<span>MailBox</span></b></div><h1>${h}</h1><p>${sub}</p></div><div class="r">${right}</div><div class="note">Sample data. Names and emails are fictional.</div>`);
  await p.screenshot({ path: OUT + file });
}
await b.close(); console.log('done');
