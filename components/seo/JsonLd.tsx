interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'GroupMailBox',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Chrome extension',
        operatingSystem: 'Chrome',
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '0',
          highPrice: '99',
          priceCurrency: 'USD',
          offerCount: '3',
        },
        description:
          'Chrome extension that captures Facebook Group member requests and screening answers, syncs them to Google Sheets, and sends Gmail follow-ups that stop when someone replies.',
        url: 'https://groupmailbox.com/',
        // No aggregateRating: ratings in markup must match real, visible reviews
        // (the hard-coded 4.8 / 50 did not). Add it only from live Chrome Web Store data.
      }}
    />
  );
}

export function FAQPageSchema({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GroupMailBox',
        url: 'https://groupmailbox.com/',
        logo: 'https://groupmailbox.com/logo.png',
        sameAs: ['https://chromewebstore.google.com/detail/groupmailbox/nbiakohglicfbphghphgjijckccnknbp'],
      }}
    />
  );
}
