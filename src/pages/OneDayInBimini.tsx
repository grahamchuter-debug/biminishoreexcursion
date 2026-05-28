import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import { IMAGES } from '../config/site';

const PATH = '/one-day-in-bimini-from-a-cruise';

export default function OneDayInBimini() {
  return (
    <>
      <SEO
        title="One Day in Bimini From a Cruise | Perfect Bimini Itinerary"
        description="Plan the perfect one-day Bimini cruise itinerary with local sightseeing, beaches, history, culture, food, photo stops and cruise-friendly excursion ideas."
        path={PATH}
        image={IMAGES.islandTour.src}
        imageAlt={IMAGES.islandTour.alt}
      />

      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / One Day in Bimini From a Cruise
          </p>
          <h1>One Day in Bimini From a Cruise</h1>
          <p>
            A practical, cruise-friendly itinerary to help you experience the best of Bimini, Bahamas
            in a single port day — culture, beaches, food, and island stories.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <h2>How Much Time Do You Have?</h2>
          <p>
            Most cruise ships spend between four and eight hours in Bimini. Your exact window depends on
            your ship&apos;s arrival and all-aboard times. This itinerary assumes a typical six-hour port
            call and builds in buffer time to return to the pier comfortably.
          </p>
          <p>
            For the most efficient day, consider the{' '}
            <Link to="/ultimate-bimini-island-tour">Ultimate Bimini Island Tour</Link> — it covers North
            and South Bimini highlights with expert local routing. Alternatively, mix independent
            exploration with a focused half-day tour.
          </p>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container content-block--wide">
          <h2>Morning: Arrive &amp; Explore North Bimini</h2>
          <div className="split">
            <div>
              <p>
                <strong>Step off the ship and orient yourself.</strong> The Bimini cruise port puts you
                near Alice Town and the resort district. Take a few minutes to get your bearings, check
                the all-aboard time, and decide your plan for the day.
              </p>
              <p>
                <strong>Option A — Heritage Tour:</strong> Join a{' '}
                <Link to="/north-bimini-heritage-tour">North Bimini Heritage Tour</Link> for a guided
                walk through Alice Town, historic landmarks, and local culture. Your guide handles the
                routing and timing.
              </p>
              <p>
                <strong>Option B — Self-guided walk:</strong> Stroll the colourful streets near the port,
                browse local shops, and grab a coffee or conch snack. This works well if you prefer a
                relaxed pace and plan to stay close to the pier area.
              </p>
            </div>
            <div className="split__image">
              <img
                src={IMAGES.localStreet.src}
                alt={IMAGES.localStreet.alt}
                loading="lazy"
                width={560}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <h2>Midday: Culture, Food &amp; South Bimini</h2>
          <div className="split">
            <div className="split__image">
              <img
                src={IMAGES.conchFood.src}
                alt={IMAGES.conchFood.alt}
                loading="lazy"
                width={560}
                height={400}
              />
            </div>
            <div>
              <p>
                <strong>Lunch like a local.</strong> Bimini is famous for conch. Look for a spot serving
                conch salad, cracked conch, or fritters in Alice Town. Ask your guide or a local for
                recommendations — the best spots are not always the most obvious ones near the port.
              </p>
              <p>
                <strong>Head to South Bimini.</strong> If you have not already, this is the time to
                cross to South Bimini for the{' '}
                <Link to="/south-bimini-fountain-of-youth-tour">Fountain of Youth</Link> and quieter
                island scenery. A guided tour is the most time-efficient option.
              </p>
              <p>
                <strong>Learn the legends.</strong> Ask about Bimini Road, Ponce de León, and the island
                stories that make Bimini unique. Our{' '}
                <Link to="/history-of-bimini">History of Bimini</Link> page covers the background.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--turquoise">
        <div className="container content-block--wide">
          <h2>Afternoon: Beach &amp; Photo Stops</h2>
          <div className="split">
            <div>
              <p>
                <strong>Beach time.</strong> No Bimini port day is complete without turquoise water and
                white sand. Radio Beach and Spook Hill Beach on North Bimini are popular choices. If
                your tour includes a beach stop, take advantage of it — your guide knows the best spots
                for the current conditions.
              </p>
              <p>
                <strong>Capture the moment.</strong> Bimini offers stunning photo opportunities — colourful
                streets, ocean panoramas, conch stalls, and the Fountain of Youth. Share your favourites
                and tag your cruise memories.
              </p>
              <p>
                <strong>Last-minute shopping.</strong> Pick up a souvenir or local craft in Alice Town
                before heading back. Keep an eye on the time.
              </p>
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
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <h2>Before All-Aboard: Return to Ship</h2>
          <p>
            Aim to be back at the Bimini cruise pier at least 45 minutes before your all-aboard time.
            Factor in golf cart returns, walking from the port entrance, and potential queues on busy
            cruise days.
          </p>
          <div className="reassurance">
            <p>
              <strong>Pro tip:</strong> Set a phone alarm for one hour before all-aboard. If you booked
              a shore excursion, your guide manages the return timing — one less thing to worry about.
            </p>
          </div>
          <p>
            Read our full <Link to="/bimini-cruise-port-guide">Bimini Cruise Port Guide</Link> for more
            details on transport, safety, and port logistics.
          </p>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container content-block--wide">
          <h2>Sample Itinerary Summary</h2>
          <div className="highlight-box">
            <ol>
              <li><strong>Arrival:</strong> Disembark, check all-aboard time, grab a map or join your tour</li>
              <li><strong>Morning:</strong> North Bimini heritage walk or Alice Town exploration</li>
              <li><strong>Midday:</strong> Conch lunch + South Bimini / Fountain of Youth</li>
              <li><strong>Afternoon:</strong> Beach time, photo stops, light shopping</li>
              <li><strong>Return:</strong> Head back to pier with 45+ minute buffer before all-aboard</li>
            </ol>
          </div>
          <p>
            This is a flexible framework — adjust based on your ship&apos;s schedule and interests. For a
            guided version of this itinerary, the{' '}
            <Link to="/ultimate-bimini-island-tour">Ultimate Bimini Island Tour</Link> hits all the
            highlights in one organized day.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="cta-banner">
            <h2>Make Your Bimini Port Day Unforgettable</h2>
            <p>
              Choose a local shore excursion and let Bimini&apos;s stories, beaches, and culture fill your
              one day in port.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <CTAButton to="/#excursions">Plan Your Bimini Shore Excursion</CTAButton>
              <CTAButton to="/bimini-cruise-port-guide" variant="secondary">
                Read the Port Guide
              </CTAButton>
            </div>
          </div>
          <div className="internal-links">
            <Link to="/north-bimini-heritage-tour">North Bimini Heritage Tour</Link>
            <Link to="/south-bimini-fountain-of-youth-tour">South Bimini Tour</Link>
            <Link to="/ultimate-bimini-island-tour">Ultimate Island Tour</Link>
            <Link to="/bimini-shore-excursions-faq">FAQ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
