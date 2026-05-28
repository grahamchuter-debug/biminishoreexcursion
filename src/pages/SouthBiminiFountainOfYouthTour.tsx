import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import FAQSection from '../components/FAQSection';
import { IMAGES } from '../config/site';
import { touristTripSchema, faqSchema } from '../utils/seo';
import { TOUR_FAQ } from '../data/faq';

const PATH = '/south-bimini-fountain-of-youth-tour';
const TITLE = 'South Bimini & Fountain of Youth Tour';
const DESCRIPTION =
  'Visit South Bimini on a unique shore excursion featuring the Fountain of Youth legend, quiet island scenery, nature, local stories and authentic Bimini charm.';

export default function SouthBiminiFountainOfYouthTour() {
  return (
    <>
      <SEO
        title="South Bimini Fountain of Youth Tour | Bimini Shore Excursion"
        description={DESCRIPTION}
        path={PATH}
        image={IMAGES.fountainOfYouth.src}
        imageAlt={IMAGES.fountainOfYouth.alt}
        jsonLd={[
          touristTripSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
            image: IMAGES.fountainOfYouth.src,
          }),
          faqSchema(TOUR_FAQ),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / South Bimini Fountain of Youth Tour
          </p>
          <h1>South Bimini &amp; Fountain of Youth Tour</h1>
          <p>
            Cross to quiet South Bimini for nature, island scenery, and the legendary Fountain of Youth
            — a unique shore excursion away from the cruise port crowds.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <div className="content-block">
            <h2>Discover the Quieter Side of Bimini</h2>
            <p className="lead">
              While most cruise passengers stay near the North Bimini pier, South Bimini offers a
              completely different atmosphere — peaceful scenery, local legends, and the famous Fountain
              of Youth that has captivated explorers for centuries.
            </p>
            <p>
              This shore excursion takes you across the island to experience the Bimini that feels worlds
              away from the port, yet is close enough to fit comfortably within a cruise day. Your local
              guide brings the legends to life with stories passed down through Bahamian families.
            </p>
          </div>
          <div className="split__image">
            <img
              src={IMAGES.fountainOfYouth.src}
              alt={IMAGES.fountainOfYouth.alt}
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
              <h3>Fountain of Youth</h3>
              <p>Visit the legendary natural spring that drew Ponce de León and continues to inspire island lore.</p>
            </div>
            <div className="tour-highlight">
              <h3>South Bimini Scenery</h3>
              <p>Experience the quieter, greener side of the island with nature stops and ocean views.</p>
            </div>
            <div className="tour-highlight">
              <h3>Local Legends</h3>
              <p>Hear the stories of Bimini Road, lost civilizations, and Bahamian folklore from your guide.</p>
            </div>
            <div className="tour-highlight">
              <h3>Nature &amp; Wildlife</h3>
              <p>Enjoy South Bimini&apos;s natural beauty — a contrast to the busier North Bimini port area.</p>
            </div>
            <div className="tour-highlight">
              <h3>Authentic Charm</h3>
              <p>See residential Bimini and experience genuine island life away from tourist hotspots.</p>
            </div>
            <div className="tour-highlight">
              <h3>Photo Stops</h3>
              <p>Capture scenic viewpoints and the unique character of South Bimini.</p>
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
                <li>Local Bimini guide with South Bimini expertise</li>
                <li>Transport to South Bimini</li>
                <li>Fountain of Youth visit</li>
                <li>Scenic and nature stops</li>
                <li>Legend and history commentary</li>
                <li>Cruise-friendly return timing</li>
              </ul>
            </div>
            <div className="highlight-box">
              <h2>Why Book This Tour</h2>
              <ul className="feature-list">
                <li>Unique experience most cruise passengers skip</li>
                <li>Perfect for travellers interested in history and legends</li>
                <li>Escape the port crowds for authentic island scenery</li>
                <li>Efficient cross-island routing saves you time</li>
                <li>Combines culture, nature, and storytelling</li>
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
              Reaching South Bimini independently takes planning — golf cart rentals, navigation, and
              timing all matter. This guided tour handles the logistics so you can focus on the experience,
              with a schedule built around your ship&apos;s departure and plenty of buffer time to return
              to the cruise port.
            </p>
          </div>
          <div className="btn-group">
            <CTAButton to="/#excursions">View This Bimini Tour</CTAButton>
            <CTAButton to="/history-of-bimini" variant="outline">
              Learn Bimini History
            </CTAButton>
          </div>
        </div>
      </section>

      <FAQSection
        items={TOUR_FAQ}
        title="South Bimini Tour FAQ"
        subtitle="Common questions about visiting South Bimini and the Fountain of Youth."
      />

      <section className="section section--sand">
        <div className="container">
          <div className="cta-banner">
            <h2>Visit South Bimini &amp; the Fountain of Youth</h2>
            <p>
              A unique Bimini shore excursion combining legends, nature, and authentic island charm —
              perfect for curious cruise passengers.
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
            <Link to="/ultimate-bimini-island-tour">Ultimate Bimini Island Tour</Link>
            <Link to="/history-of-bimini">History of Bimini</Link>
            <Link to="/bimini-cruise-port-guide">Bimini Cruise Port Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
