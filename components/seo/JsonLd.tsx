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
        applicationCategory: 'BrowserApplication',
        operatingSystem: 'Chrome',
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '0',
          highPrice: '99',
          priceCurrency: 'USD',
          offerCount: '3',
        },
        description:
          'Chrome extension that automatically captures leads from Facebook Group member requests and pushes them to Google Sheets.',
        url: 'https://samarjeetmohite.github.io/GroupBoxWebsite/',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '50',
        },
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
        url: 'https://samarjeetmohite.github.io/GroupBoxWebsite/',
        logo: 'https://samarjeetmohite.github.io/GroupBoxWebsite/logo.svg',
        sameAs: [],
      }}
    />
  );
}
