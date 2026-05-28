import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import TourCard from '../components/TourCard';
import FAQSection from '../components/FAQSection';
import { TOURS, IMAGES, SITE_TAGLINE } from '../config/site';
import { travelAgencySchema, faqSchema } from '../utils/seo';
import { HOME_FAQ } from '../data/faq';

export default function Home() {
  return (
    <>
      <SEO
        title="Bimini Shore Excursions | Authentic Local Bimini Tours"
        description="Discover authentic Bimini shore excursions for cruise passengers, including local heritage tours, South Bimini adventures, island history, culture, beaches and hidden gems."
        path="/"
        jsonLd={[travelAgencySchema(), faqSchema(HOME_FAQ)]}
      />

      <section className="hero">
        <div className="container hero__content">
          <span className="hero__eyebrow">{SITE_TAGLINE}</span>
          <h1>Discover the Real Bimini Beyond the Cruise Port</h1>
          <p>
            Skip the generic resort experience. Explore authentic Bahamian island life, local heritage,
            colourful Alice Town streets, and the legends of South Bimini — all tailored for cruise
            passengers who want more from their port day.
          </p>
          <div className="btn-group">
            <CTAButton to="/#excursions">View Bimini Shore Excursions</CTAButton>
            <CTAButton to="/bimini-cruise-port-guide" variant="secondary">
              Read the Bimini Cruise Port Guide
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="excursions" className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2>Featured Bimini Shore Excursions</h2>
            <p>
              Handpicked local tours designed for cruise passengers — heritage walks, South Bimini
              adventures, and the ultimate island experience.
            </p>
          </div>
          <div className="grid grid--3">
            {TOURS.map((tour) => (
              <TourCard
                key={tour.slug}
                slug={tour.slug}
                title={tour.title}
                description={tour.shortDescription}
                image={tour.image}
                imageAlt={tour.imageAlt}
                highlights={tour.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--turquoise">
        <div className="container split">
          <div>
            <h2>Why Cruise Guests Love Bimini</h2>
            <p>
              Bimini sits just 50 miles off the Florida coast, making it one of the most accessible
              Bahamian islands for cruise passengers. Yet its small size hides a rich tapestry of
              fishing heritage, Hemingway history, conch traditions, and legends that draw travellers
              from around the world.
            </p>
            <ul className="feature-list">
              <li>Closest Bahamas island to the United States</li>
              <li>Walkable Alice Town with colourful local character</li>
              <li>World-famous fishing and conch culture</li>
              <li>Fountain of Youth legend on South Bimini</li>
              <li>Turquoise water and white sand beaches</li>
              <li>Compact island perfect for a single port day</li>
            </ul>
          </div>
          <div className="split__image">
            <img
              src={IMAGES.beach.src}
              alt={IMAGES.beach.alt}
              loading="lazy"
              width={560}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <div className="split__image">
            <img
              src={IMAGES.localStreet.src}
              alt={IMAGES.localStreet.alt}
              loading="lazy"
              width={560}
              height={400}
            />
          </div>
          <div>
            <h2>Why Choose Local Bimini Guides</h2>
            <p>
              A local guide transforms your port day from a quick walk around the pier into a genuine
              Bimini experience. They know the stories behind every colourful street, the best conch
              spots, and how to get you back to your ship with time to spare.
            </p>
            <ul className="feature-list">
              <li>Insider knowledge of North and South Bimini</li>
              <li>Cruise-friendly itineraries with return-to-ship priority</li>
              <li>Authentic Bahamian stories and island culture</li>
              <li>Efficient routing to maximize your port time</li>
              <li>Hidden gems beyond the tourist strip</li>
            </ul>
            <CTAButton to="/#excursions">Plan Your Bimini Shore Excursion</CTAButton>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2>Explore Bimini Culture, History &amp; Island Life</h2>
            <p>
              From rum-running legends to Hemingway&apos;s fishing adventures, Bimini&apos;s history is as
              colourful as its streets.
            </p>
          </div>
          <div className="grid grid--2">
            <div className="highlight-box">
              <img
                src={IMAGES.conchFood.src}
                alt={IMAGES.conchFood.alt}
                loading="lazy"
                width={400}
                height={250}
                style={{ borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}
              />
              <h3>Local Food &amp; Conch Traditions</h3>
              <p>
                Bimini is synonymous with fresh conch. Sample conch salad, cracked conch, and Bahamian
                staples at local spots your guide knows and trusts.
              </p>
            </div>
            <div className="highlight-box">
              <img
                src={IMAGES.fountainOfYouth.src}
                alt={IMAGES.fountainOfYouth.alt}
                loading="lazy"
                width={400}
                height={250}
                style={{ borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}
              />
              <h3>Legends &amp; Landmarks</h3>
              <p>
                Visit the Fountain of Youth on South Bimini, learn about Bimini Road, and hear the
                island stories passed down through generations of Bahamian families.
              </p>
              <CTAButton to="/history-of-bimini" variant="outline">
                Read Bimini History
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <div>
            <h2>Perfect for Cruise Passengers</h2>
            <p>
              Every Bimini shore excursion on this site is built around the reality of cruise travel:
              limited time, the need to return to ship, and the desire to experience something authentic
              rather than a packaged resort day.
            </p>
            <div className="reassurance">
              <p>
                <strong>Cruise timing matters.</strong> Our recommended tours prioritize efficient
                routing and built-in buffer time so you can enjoy Bimini without watching the clock.
              </p>
            </div>
            <ul className="feature-list">
              <li>Tours aligned with typical port schedules</li>
              <li>Options for half-day and full-day exploration</li>
              <li>North Bimini, South Bimini, or both</li>
              <li>Beach, culture, and sightseeing combinations</li>
            </ul>
            <CTAButton to="/one-day-in-bimini-from-a-cruise" variant="outline">
              See One-Day Bimini Itinerary
            </CTAButton>
          </div>
          <div className="split__image">
            <img
              src={IMAGES.golfCart.src}
              alt={IMAGES.golfCart.alt}
              loading="lazy"
              width={560}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <div className="split__image">
            <img
              src={IMAGES.turquoiseWater.src}
              alt={IMAGES.turquoiseWater.alt}
              loading="lazy"
              width={560}
              height={400}
            />
          </div>
          <div>
            <h2>Bimini Cruise Port Guide</h2>
            <p>
              New to Bimini? Our practical port guide covers where ships dock, whether the island is
              walkable, the best beaches, golf cart tips, safety advice, and how to get back to your
              ship on time.
            </p>
            <CTAButton to="/bimini-cruise-port-guide">Read the Bimini Cruise Port Guide</CTAButton>
          </div>
        </div>
      </section>

      <FAQSection
        items={HOME_FAQ}
        subtitle="Common questions from cruise passengers visiting Bimini, Bahamas."
      />

      <section className="section section--sand">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Explore Authentic Bimini?</h2>
            <p>
              Choose a local shore excursion and discover the real Bimini beyond the cruise port —
              heritage, beaches, culture, and island stories waiting for you.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <CTAButton to="/#excursions">View Bimini Shore Excursions</CTAButton>
              <CTAButton to="/bimini-shore-excursions-faq" variant="secondary">
                Read the FAQ
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
