import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import FAQSection from '../components/FAQSection';
import { faqSchema } from '../utils/seo';
import { FAQ_PAGE_ITEMS } from '../data/faq';

const PATH = '/bimini-shore-excursions-faq';

export default function BiminiShoreExcursionsFAQ() {
  return (
    <>
      <SEO
        title="Bimini Shore Excursions FAQ | Cruise Passenger Questions"
        description="Answers to common questions about Bimini shore excursions, cruise port transport, beaches, golf carts, local tours, safety and getting back to the ship on time."
        path={PATH}
        jsonLd={faqSchema(FAQ_PAGE_ITEMS)}
      />

      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Bimini Shore Excursions FAQ
          </p>
          <h1>Bimini Shore Excursions FAQ</h1>
          <p>
            Answers to the most common questions from cruise passengers planning a port day in Bimini,
            Bahamas — tours, transport, beaches, safety, and more.
          </p>
        </div>
      </section>

      <FAQSection
        items={FAQ_PAGE_ITEMS}
        title="Your Bimini Questions Answered"
        subtitle="Everything cruise passengers ask about Bimini shore excursions, the port, and island exploration."
      />

      <section className="section section--sand">
        <div className="container content-block--wide">
          <h2>Still Planning Your Bimini Port Day?</h2>
          <p>
            Browse our helpful guides and shore excursions to build the perfect Bimini experience:
          </p>
          <div className="internal-links">
            <Link to="/bimini-cruise-port-guide">Bimini Cruise Port Guide</Link>
            <Link to="/one-day-in-bimini-from-a-cruise">One Day in Bimini Itinerary</Link>
            <Link to="/history-of-bimini">History of Bimini</Link>
            <Link to="/north-bimini-heritage-tour">North Bimini Heritage Tour</Link>
            <Link to="/south-bimini-fountain-of-youth-tour">South Bimini Tour</Link>
            <Link to="/ultimate-bimini-island-tour">Ultimate Island Tour</Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Explore Bimini?</h2>
            <p>
              Choose an authentic local shore excursion and discover the real Bimini beyond the cruise
              port.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <CTAButton to="/#excursions">View Bimini Shore Excursions</CTAButton>
              <CTAButton to="/bimini-cruise-port-guide" variant="secondary">
                Read the Port Guide
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
