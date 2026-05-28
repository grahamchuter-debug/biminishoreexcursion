import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import FAQSection from '../components/FAQSection';
import { IMAGES } from '../config/site';
import { touristTripSchema, faqSchema } from '../utils/seo';
import { TOUR_FAQ } from '../data/faq';

const PATH = '/north-bimini-heritage-tour';
const TITLE = 'North Bimini Heritage Tour';
const DESCRIPTION =
  'Explore North Bimini with a local heritage tour featuring Alice Town, island culture, Bahamian history, local stories, beaches and cruise-friendly sightseeing.';

export default function NorthBiminiHeritageTour() {
  return (
    <>
      <SEO
        title="North Bimini Heritage Tour | Bimini Shore Excursion"
        description={DESCRIPTION}
        path={PATH}
        image={IMAGES.heritageTour.src}
        imageAlt={IMAGES.heritageTour.alt}
        jsonLd={[
          touristTripSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
            image: IMAGES.heritageTour.src,
          }),
          faqSchema(TOUR_FAQ),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / North Bimini Heritage Tour
          </p>
          <h1>North Bimini Heritage Tour</h1>
          <p>
            Our flagship authentic local tour — walk colourful Alice Town, hear Bahamian stories, and
            experience the real North Bimini that cruise passengers often miss.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <div className="content-block">
            <h2>Experience Authentic North Bimini</h2>
            <p className="lead">
              Step beyond the cruise port and into the heart of Bimini island life. This heritage tour
              takes you through Alice Town&apos;s colourful streets, past historic landmarks, and into the
              stories that define this Bahamian community.
            </p>
            <p>
              North Bimini is where fishing heritage meets modern island culture. Your local guide
              shares personal stories, points out conch traditions passed down through generations, and
              shows you the Bimini that brochures never capture — all on a schedule designed for cruise
              passengers.
            </p>
          </div>
          <div className="split__image">
            <img
              src={IMAGES.heritageTour.src}
              alt={IMAGES.heritageTour.alt}
              loading="lazy"
              width={560}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <h2>Tour Highlights</h2>
          <div className="tour-highlights">
            <div className="tour-highlight">
              <h3>Alice Town</h3>
              <p>Explore the colourful main settlement of North Bimini with a local who knows every corner.</p>
            </div>
            <div className="tour-highlight">
              <h3>Island Culture</h3>
              <p>Experience Bahamian island life — friendly locals, vibrant streets, and authentic community spirit.</p>
            </div>
            <div className="tour-highlight">
              <h3>Historic Landmarks</h3>
              <p>Visit sites connected to Bimini&apos;s fishing heritage, rum-running past, and Hemingway legacy.</p>
            </div>
            <div className="tour-highlight">
              <h3>Conch Traditions</h3>
              <p>Learn about Bimini&apos;s world-famous conch culture and where locals go for the freshest catch.</p>
            </div>
            <div className="tour-highlight">
              <h3>Beach Stops</h3>
              <p>Enjoy time at a North Bimini beach with turquoise water and soft white sand.</p>
            </div>
            <div className="tour-highlight">
              <h3>Photo Opportunities</h3>
              <p>Capture the colourful streets, ocean views, and island scenery that make Bimini unforgettable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <div className="grid grid--2">
            <div className="highlight-box">
              <h2>What&apos;s Included</h2>
              <ul className="feature-list">
                <li>Knowledgeable local Bimini guide</li>
                <li>Guided walk through Alice Town</li>
                <li>Heritage and cultural commentary</li>
                <li>Historic landmark visits</li>
                <li>Beach stop (time permitting)</li>
                <li>Cruise-friendly return timing</li>
              </ul>
            </div>
            <div className="highlight-box">
              <h2>Why Book This Tour</h2>
              <ul className="feature-list">
                <li>Flagship authentic local experience</li>
                <li>Perfect introduction to Bimini for first-time visitors</li>
                <li>More depth than a self-guided walk from the port</li>
                <li>Local insider tips on food, beaches, and culture</li>
                <li>Designed specifically for cruise passengers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--turquoise">
        <div className="container">
          <div className="reassurance">
            <h2>Cruise Passenger Reassurance</h2>
            <p>
              Your ship&apos;s schedule comes first. This North Bimini heritage tour is structured around
              typical cruise port timings, with efficient routing through Alice Town and built-in buffer
              time to return to the pier comfortably. Your guide understands the importance of getting
              back on board on time.
            </p>
          </div>
          <div className="btn-group">
            <CTAButton to="/#excursions">View This Bimini Tour</CTAButton>
            <CTAButton to="/bimini-cruise-port-guide" variant="outline">
              Read the Port Guide
            </CTAButton>
          </div>
        </div>
      </section>

      <FAQSection
        items={TOUR_FAQ}
        title="North Bimini Heritage Tour FAQ"
        subtitle="Questions about this Bimini shore excursion for cruise passengers."
      />

      <section className="section section--sand">
        <div className="container">
          <div className="cta-banner">
            <h2>Book the North Bimini Heritage Tour</h2>
            <p>
              Discover Alice Town, local culture, and Bahamian island heritage on the most authentic
              shore excursion in Bimini.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <CTAButton to="/#excursions">Check Availability</CTAButton>
              <CTAButton to="/ultimate-bimini-island-tour" variant="secondary">
                Explore More Bimini Tours
              </CTAButton>
            </div>
          </div>
          <div className="internal-links">
            <Link to="/south-bimini-fountain-of-youth-tour">South Bimini Fountain of Youth Tour</Link>
            <Link to="/ultimate-bimini-island-tour">Ultimate Bimini Island Tour</Link>
            <Link to="/bimini-cruise-port-guide">Bimini Cruise Port Guide</Link>
            <Link to="/history-of-bimini">History of Bimini</Link>
          </div>
        </div>
      </section>
    </>
  );
}
