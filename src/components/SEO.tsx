import { Helmet } from 'react-helmet-async';
import { canonicalUrl, type SEOProps } from '../utils/seo';
import { SITE_NAME, SITE_URL } from '../config/site';

const DEFAULT_IMAGE = '/images/bimini-turquoise-water.jpg';
const DEFAULT_IMAGE_ALT = 'Aerial view of vibrant turquoise Bimini water with coral reefs, boats, and the narrow island strip with white buildings and sandy beach';

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  type = 'website',
  jsonLd,
}: SEOProps) {
  const url = canonicalUrl(path);
  const fullTitle = title.includes('Bimini') ? title : `${title} | ${SITE_NAME}`;
  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
