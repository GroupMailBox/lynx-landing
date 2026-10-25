/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://groupmailbox.com',
  generateRobotsTxt: false, // We already have a manual robots.txt
  outDir: './out',
  trailingSlash: true,
  // Sign-in and checkout are noindex; keep them out of the sitemap too.
  exclude: ['/auth/*', '/checkout', '/checkout/*'],
};
