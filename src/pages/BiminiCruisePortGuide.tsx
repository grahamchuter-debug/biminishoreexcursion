import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import FAQSection from '../components/FAQSection';
import { IMAGES } from '../config/site';
import { faqSchema } from '../utils/seo';
import { PORT_GUIDE_FAQ } from '../data/faq';

const PATH = '/bimini-cruise-port-guide';

export default function BiminiCruisePortGuide() {
  return (
    <>
      <SEO
        title="Bimini Cruise Port Guide | What to Do in Bimini Bahamas"
        description="Plan your cruise day in Bimini with this practical port guide covering shore excursions, beaches, golf carts, local tours, safety, timings and what to do near the port."
        path={PATH}
        image={IMAGES.turquoiseWater.src}
        imageAlt={IMAGES.turquoiseWater.alt}
        jsonLd={faqSchema(PORT_GUIDE_FAQ)}
      />

      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Bimini Cruise Port Guide
          </p>
          <h1>Bimini Cruise Port Guide</h1>
          <p>
            Everything cruise passengers need to know about visiting Bimini, Bahamas — from where ships
            dock to beaches, golf carts, shore excursions, and getting back on board on time.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <div className="split">
            <div>
              <h2>Where Cruise Ships Dock in Bimini</h2>
              <p>
                Cruise ships arrive at the Bimini Cruise Port on North Bimini, positioned near Alice Town
                and the Resorts World Bimini area. From the pier, you can walk to restaurants, bars,
                shops, and the immediate resort district within minutes.
              </p>
              <p>
                The port area is modern and well-developed, but the most authentic Bimini experiences —
                local food stalls, heritage sites, South Bimini, and quieter beaches — often lie a short
                ride away. That is why many cruise passengers choose a local shore excursion or golf cart
                rental to explore further.
              </p>
            </div>
            <div className="split__image">
              <img
                src={IMAGES.turquoiseWater.src}
                alt={IMAGES.turquoiseWater.alt}
                loading="lazy"
                width={560}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container content-block--wide">
          <h2>Is Bimini Walkable from the Cruise Port?</h2>
          <p>
            Yes — the area immediately around the Bimini cruise port and Alice Town is walkable on foot.
            You can reach restaurants, a casino, marina views, and some beaches without transport. However,
            Bimini is spread across two main islands (North and South Bimini), connected by a narrow
            channel. Reaching South Bimini, the Fountain of Youth, and beaches further from the port
            requires a golf cart, taxi, or organized tour.
          </p>
          <p>
            For a first visit with limited time, a guided Bimini shore excursion is often the most
            efficient way to see both the walkable port area and the island highlights beyond it.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <h2>Best Things to Do in Bimini on a Cruise Day</h2>
          <div className="grid grid--2">
            <div className="highlight-box">
              <h3>Heritage &amp; Culture</h3>
              <p>
                Walk Alice Town&apos;s colourful streets, learn about Bahamian fishing heritage, and hear
                local stories on a{' '}
                <Link to="/north-bimini-heritage-tour">North Bimini Heritage Tour</Link>.
              </p>
            </div>
            <div className="highlight-box">
              <h3>Fountain of Youth</h3>
              <p>
                Visit the legendary spring on South Bimini with a{' '}
                <Link to="/south-bimini-fountain-of-youth-tour">Fountain of Youth shore excursion</Link>.
              </p>
            </div>
            <div className="highlight-box">
              <h3>Beaches</h3>
              <p>
                Relax on white sand beaches with turquoise water — Radio Beach and Spook Hill Beach are
                popular on North Bimini.
              </p>
            </div>
            <div className="highlight-box">
              <h3>Local Food</h3>
              <p>
                Try fresh conch salad, cracked conch, and Bahamian staples at local restaurants and food
                stalls in Alice Town.
              </p>
            </div>
            <div className="highlight-box">
              <h3>Full Island Tour</h3>
              <p>
                See it all with the{' '}
                <Link to="/ultimate-bimini-island-tour">Ultimate Bimini Island Tour</Link> — our
                premium best-of-Bimini experience.
              </p>
            </div>
            <div className="highlight-box">
              <h3>Island History</h3>
              <p>
                Dive deeper into Bimini&apos;s past with our{' '}
                <Link to="/history-of-bimini">History of Bimini</Link> guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--turquoise">
        <div className="container content-block--wide">
          <h2>Should You Book a Shore Excursion in Bimini?</h2>
          <p>
            Bimini rewards both independent explorers and guided tour guests. If you enjoy wandering at
            your own pace, the port area and Alice Town offer enough for a pleasant half-day. But if you
            want to reach South Bimini, understand local history, find the best conch, and maximize a
            short port call, a local Bimini guide makes a significant difference.
          </p>
          <p>
            Shore excursions also remove the stress of golf cart navigation, parking, and timing your
            return to the ship — especially on busy days when multiple cruise ships are in port.
          </p>
          <CTAButton to="/#excursions">View Bimini Shore Excursions</CTAButton>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <div>
            <h2>Golf Carts in Bimini</h2>
            <p>
              Golf carts are the most popular independent transport on Bimini. Rentals are available near
              the cruise port, and driving around the island is part of the fun. Keep in mind:
            </p>
            <ul>
              <li>Availability can be limited on busy cruise days</li>
              <li>You will need to navigate narrow roads and plan your route</li>
              <li>South Bimini requires crossing from North Bimini</li>
              <li>Allow extra time to return the cart and walk back to the pier</li>
              <li>US dollars are accepted for rentals</li>
            </ul>
            <p>
              A guided tour eliminates these logistics while giving you local insights you would not
              get driving alone.
            </p>
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

      <section className="section section--sand">
        <div className="container split">
          <div className="split__image">
            <img
              src={IMAGES.beach.src}
              alt={IMAGES.beach.alt}
              loading="lazy"
              width={560}
              height={400}
            />
          </div>
          <div>
            <h2>Best Beaches in Bimini</h2>
            <p>
              Bimini&apos;s beaches are a major draw for cruise passengers. North Bimini offers several
              accessible options:
            </p>
            <ul>
              <li><strong>Radio Beach</strong> — popular, close to Alice Town, good for a quick swim</li>
              <li><strong>Spook Hill Beach</strong> — another North Bimini favourite with calm water</li>
              <li><strong>Beaches near the port</strong> — convenient but can be busier on cruise days</li>
            </ul>
            <p>
              For quieter sand and clearer water, ask a local guide about beaches further from the
              immediate port area. Many Bimini shore excursions include a beach stop.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <div>
            <h2>Local Culture &amp; Food in Bimini</h2>
            <p>
              Bimini&apos;s culture is rooted in fishing, conch, and close-knit Bahamian community life.
              The island has attracted writers, anglers, and adventurers for decades — most famously Ernest
              Hemingway, who fished Bimini&apos;s waters in the 1930s.
            </p>
            <p>Must-try local food includes:</p>
            <ul>
              <li>Conch salad — fresh, citrusy, and uniquely Bahamian</li>
              <li>Cracked conch — battered and fried, a island staple</li>
              <li>Conch fritters — perfect as a snack between sightseeing stops</li>
              <li>Fresh catch of the day with peas and rice</li>
            </ul>
          </div>
          <div className="split__image">
            <img
              src={IMAGES.conchFood.src}
              alt={IMAGES.conchFood.alt}
              loading="lazy"
              width={560}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container content-block--wide">
          <h2>Safety Tips for Bimini Cruise Passengers</h2>
          <ul className="feature-list">
            <li>Bimini is generally welcoming — use common travel sense</li>
            <li>Keep valuables secure and avoid leaving items unattended on beaches</li>
            <li>Stay hydrated and wear sunscreen — the tropical sun is strong</li>
            <li>Confirm your return transport and allow buffer time before ship departure</li>
            <li>Stick to well-travelled areas if exploring independently</li>
            <li>US dollars are widely accepted; carry cash for smaller vendors</li>
            <li>Follow your guide&apos;s advice on local customs and etiquette</li>
          </ul>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <h2>How to Get Back to Your Ship on Time</h2>
          <p>
            Missing your ship is every cruise passenger&apos;s nightmare. Here is how to stay on schedule
            in Bimini:
          </p>
          <ol>
            <li>
              <strong>Know your all-aboard time</strong> — this is typically 30–60 minutes before departure,
              not the departure time itself
            </li>
            <li>
              <strong>Build in buffer time</strong> — aim to be back at the pier at least 45 minutes
              before all-aboard
            </li>
            <li>
              <strong>Book a cruise-friendly tour</strong> — local guides plan around ship schedules
            </li>
            <li>
              <strong>Set a phone alarm</strong> — a simple reminder can save your vacation
            </li>
            <li>
              <strong>Account for golf cart return</strong> — if renting independently, factor in return
              and walk time
            </li>
            <li>
              <strong>Watch for multiple ships</strong> — busy days mean longer queues at the pier
            </li>
          </ol>
          <div className="reassurance">
            <p>
              All Bimini shore excursions featured on this site prioritize return-to-ship timing. When
              in doubt, choose a guided tour over independent exploration on your first visit.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        items={PORT_GUIDE_FAQ}
        title="Bimini Cruise Port FAQ"
        subtitle="Practical answers for planning your Bimini port day."
      />

      <section className="section section--sand">
        <div className="container">
          <div className="cta-banner">
            <h2>Plan Your Perfect Bimini Port Day</h2>
            <p>
              Browse our local shore excursions or read our one-day itinerary to make the most of your
              time in Bimini, Bahamas.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <CTAButton to="/#excursions">View Bimini Shore Excursions</CTAButton>
              <CTAButton to="/one-day-in-bimini-from-a-cruise" variant="secondary">
                One Day in Bimini Itinerary
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
