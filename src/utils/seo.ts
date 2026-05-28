import { SITE_URL } from '../config/site';

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function canonicalUrl(path: string): string {
  const normalized = path === '/' ? '' : path.replace(/^\//, '');
  return normalized ? `${SITE_URL}/${normalized}` : `${SITE_URL}/`;
}

export function travelAgencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Bimini Shore Excursion',
    url: SITE_URL,
    description:
      'Authentic Bimini shore excursions and local tours for cruise passengers visiting Bimini, Bahamas.',
    areaServed: {
      '@type': 'Place',
      name: 'Bimini, Bahamas',
    },
    knowsAbout: [
      'Bimini shore excursions',
      'Bimini cruise port tours',
      'Bahamian island culture',
    ],
  };
}

export function touristTripSchema({
  name,
  description,
  path,
  image,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    url: canonicalUrl(path),
    image: `${SITE_URL}${image}`,
    touristType: 'Cruise passengers',
    itinerary: {
      '@type': 'ItemList',
      name: `${name} itinerary`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Bimini, Bahamas',
        },
      ],
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Bimini Shore Excursion',
      url: SITE_URL,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
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
  };
}
