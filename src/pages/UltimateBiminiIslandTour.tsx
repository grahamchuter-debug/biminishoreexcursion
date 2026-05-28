import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import FAQSection from '../components/FAQSection';
import { IMAGES } from '../config/site';
import { touristTripSchema, faqSchema } from '../utils/seo';
import { TOUR_FAQ } from '../data/faq';

const PATH = '/ultimate-bimini-island-tour';
const TITLE = 'Ultimate Bimini Island Tour';
const DESCRIPTION =
  'See the best of Bimini in one cruise-friendly island tour, combining local culture, history, hidden gems, beaches, stories and authentic Bahamian charm.';

export default function UltimateBiminiIslandTour() {
  return (
    <>
      <SEO
        title="Ultimate Bimini Island Tour | Best Bimini Shore Excursion"
        description={DESCRIPTION}
        path={PATH}
        image={IMAGES.islandTour.src}
        imageAlt={IMAGES.islandTour.alt}
        jsonLd={[
          touristTripSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
            image: IMAGES.islandTour.src,
          }),
          faqSchema(TOUR_FAQ),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Ultimate Bimini Island Tour
          </p>
          <h1>Ultimate Bimini Island Tour</h1>
          <p>
            Our premium best-of-Bimini experience — North and South Bimini highlights, beaches, culture,
            and hidden gems in one unforgettable cruise-friendly day.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <div className="content-block">
            <h2>The Complete Bimini Experience</h2>
            <p className="lead">
              Why choose between North Bimini heritage and South Bimini legends when you can experience
              both? The Ultimate Bimini Island Tour is our premium shore excursion that covers the
              island&apos;s greatest highlights in a single, well-paced day.
            </p>
            <p>
              From colourful Alice Town streets to the Fountain of Youth, from conch traditions to
              turquoise beaches — this is the Bimini tour for cruise passengers who want it all, guided
              by locals who know how to make every hour count.
            </p>
          </div>
          <div className="split__image">
            <img
              src={IMAGES.islandTour.src}
              alt={IMAGES.islandTour.alt}
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
              <h3>North Bimini Heritage</h3>
              <p>Walk Alice Town, visit historic landmarks, and experience Bahamian island culture.</p>
            </div>
            <div className="tour-highlight">
              <h3>South Bimini &amp; Fountain of Youth</h3>
              <p>Cross to South Bimini for the legendary spring and quieter island scenery.</p>
            </div>
            <div className="tour-highlight">
              <h3>Beach Time</h3>
              <p>Relax on Bimini&apos;s white sand with turquoise water — the perfect port day moment.</p>
            </div>
            <div className="tour-highlight">
              <h3>Hidden Gems</h3>
              <p>Discover spots that independent travellers and port-area wanderers rarely find.</p>
            </div>
            <div className="tour-highlight">
              <h3>Local Food Insights</h3>
              <p>Learn where to find the best conch and Bahamian dishes on the island.</p>
            </div>
            <div className="tour-highlight">
              <h3>Island Stories</h3>
              <p>Hear tales of Hemingway, rum runners, Bimini Road, and Bahamian folklore.</p>
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
                <li>Expert local Bimini guide for the full day</li>
                <li>North Bimini heritage sightseeing</li>
                <li>South Bimini and Fountain of Youth visit</li>
                <li>Beach stop with free time</li>
                <li>Cultural and historical commentary</li>
                <li>Efficient island-wide transport</li>
                <li>Cruise-friendly return timing</li>
              </ul>
            </div>
            <div className="highlight-box">
              <h2>Why Book This Tour</h2>
              <ul className="feature-list">
                <li>Best value for a comprehensive Bimini port day</li>
                <li>Covers both North and South Bimini efficiently</li>
                <li>Premium experience with maximum island coverage</li>
                <li>Ideal for first-time Bimini visitors</li>
                <li>No need to choose between heritage and legends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--turquoise">
        <div className="container split">
          <div>
            <div className="reassurance">
              <h2>Cruise Passenger Reassurance</h2>
              <p>
                Covering both islands in one port day requires expert planning. The Ultimate Bimini Island
                Tour is carefully routed to maximize your time while ensuring you return to the cruise
                pier with a comfortable buffer before ship departure. Your guide monitors the schedule
                throughout the day.
              </p>
            </div>
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
        <div className="container" style={{ marginTop: '2rem' }}>
          <div className="btn-group">
            <CTAButton to="/#excursions">View This Bimini Tour</CTAButton>
            <CTAButton to="/one-day-in-bimini-from-a-cruise" variant="outline">
              See One-Day Itinerary
            </CTAButton>
          </div>
        </div>
      </section>

      <FAQSection
        items={TOUR_FAQ}
        title="Ultimate Bimini Island Tour FAQ"
        subtitle="Questions about our premium best-of-Bimini shore excursion."
      />

      <section className="section section--sand">
        <div className="container">
          <div className="cta-banner">
            <h2>Experience the Best of Bimini</h2>
            <p>
              The ultimate shore excursion for cruise passengers who want the complete Bimini story —
              culture, beaches, legends, and local charm in one day.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <CTAButton to="/#excursions">Check Availability</CTAButton>
              <CTAButton to="/north-bimini-heritage-tour" variant="secondary">
                Explore More Bimini Tours
              </CTAButton>
            </div>
          </div>
          <div className="internal-links">
            <Link to="/north-bimini-heritage-tour">North Bimini Heritage Tour</Link>
            <Link to="/south-bimini-fountain-of-youth-tour">South Bimini Fountain of Youth Tour</Link>
            <Link to="/bimini-cruise-port-guide">Bimini Cruise Port Guide</Link>
            <Link to="/one-day-in-bimini-from-a-cruise">One Day in Bimini</Link>
          </div>
        </div>
      </section>
    </>
  );
}
