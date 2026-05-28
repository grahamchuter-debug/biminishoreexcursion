export const SITE_URL = 'https://www.biminishoreexcursion.com';
export const SITE_NAME = 'Bimini Shore Excursion';
export const SITE_TAGLINE = 'The Authentic Bimini Experience for Cruise Passengers';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Excursions', path: '/#excursions' },
  { label: 'Port Guide', path: '/bimini-cruise-port-guide' },
  { label: 'One Day in Bimini', path: '/one-day-in-bimini-from-a-cruise' },
  { label: 'History', path: '/history-of-bimini' },
  { label: 'FAQ', path: '/bimini-shore-excursions-faq' },
] as const;

export const TOURS = [
  {
    slug: 'north-bimini-heritage-tour',
    title: 'North Bimini Heritage Tour',
    shortDescription:
      'Walk colourful Alice Town, hear local stories, and experience authentic Bahamian island life on this cruise-friendly heritage tour.',
    image: '/images/bimini-heritage-tour.jpg',
    imageAlt: 'Aerial view of North Bimini Bahamas coastline',
    highlights: ['Alice Town', 'Local culture', 'Historic landmarks', 'Conch traditions'],
  },
  {
    slug: 'south-bimini-fountain-of-youth-tour',
    title: 'South Bimini & Fountain of Youth Tour',
    shortDescription:
      'Cross to quiet South Bimini for nature, island scenery, and the legendary Fountain of Youth — a unique shore excursion away from the crowds.',
    image: '/images/south-bimini-fountain-of-youth.jpg',
    imageAlt: 'Circular stone Fountain of Youth well with wooden windlass in South Bimini',
    highlights: ['Fountain of Youth', 'South Bimini scenery', 'Local legends', 'Nature stops'],
  },
  {
    slug: 'ultimate-bimini-island-tour',
    title: 'Ultimate Bimini Island Tour',
    shortDescription:
      'Our premium best-of-Bimini experience combining north and south highlights, beaches, culture, and hidden gems in one unforgettable day.',
    image: '/images/bimini-island-tour.jpg',
    imageAlt: 'Beachfront villas with white roofs along turquoise water on the Bimini coastline',
    highlights: ['Full island coverage', 'Beaches & culture', 'Hidden gems', 'Premium experience'],
  },
] as const;

export const IMAGES = {
  turquoiseWater: {
    src: '/images/bimini-turquoise-water.jpg',
    alt: 'Aerial view of vibrant turquoise Bimini water with coral reefs, boats, and the narrow island strip with white buildings and sandy beach',
  },
  localStreet: {
    src: '/images/bimini-local-street.jpg',
    alt: 'Colourful Alice Town street with marine life mural — turtle, jellyfish, shark, coral, and starfish — beside pink and yellow buildings in Bimini Bahamas',
  },
  beach: {
    src: '/images/bimini-beach.jpg',
    alt: 'White sand beach with turquoise water, palm trees, and a pier in the distance — a Bimini shore for cruise passengers',
  },
  golfCart: {
    src: '/images/bimini-golf-cart.jpg',
    alt: 'Golf cart tour around Bimini Bahamas',
  },
  heritageTour: {
    src: '/images/bimini-heritage-tour.jpg',
    alt: 'Aerial view of North Bimini Bahamas coastline',
  },
  fountainOfYouth: {
    src: '/images/south-bimini-fountain-of-youth.jpg',
    alt: 'Circular stone Fountain of Youth well with wooden windlass in South Bimini',
  },
  islandTour: {
    src: '/images/bimini-island-tour.jpg',
    alt: 'Beachfront villas with white roofs along turquoise water on the Bimini coastline',
  },
  conchFood: {
    src: '/images/bimini-conch-food.jpg',
    alt: 'Fresh conch and local Bahamian food in Bimini',
  },
} as const;
