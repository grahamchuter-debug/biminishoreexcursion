import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import { IMAGES } from '../config/site';

const PATH = '/history-of-bimini';

export default function HistoryOfBimini() {
  return (
    <>
      <SEO
        title="History of Bimini | Bahamas Culture, Legends & Island Stories"
        description="Discover the history of Bimini, from Bahamian island culture and fishing heritage to Hemingway, rum-running legends, the Fountain of Youth and Bimini Road."
        path={PATH}
        image={IMAGES.heritageTour.src}
        imageAlt={IMAGES.heritageTour.alt}
      />

      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / History of Bimini
          </p>
          <h1>History of Bimini</h1>
          <p>
            From ancient Lucayan inhabitants to Hemingway&apos;s fishing adventures, rum-running legends,
            and the mystery of Bimini Road — the story of Bimini is as captivating as its turquoise waters.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <h2>Early Bimini &amp; Bahamian Island Culture</h2>
          <p>
            Long before cruise ships arrived at the Bimini cruise port, the islands were home to the
            Lucayan people — indigenous inhabitants of the Bahamas who lived off the sea. Spanish
            explorers arrived in the late 15th century, and the Lucayan population was largely decimated
            through disease and displacement within decades.
          </p>
          <p>
            Bimini&apos;s modern identity grew from Bahamian settlers who built a community rooted in
            fishing, boat-building, and self-reliance. The island&apos;s proximity to Florida — just 50
            miles across the Gulf Stream — shaped its economy and culture, connecting Bimini to American
            trade, tourism, and adventure for over a century.
          </p>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <div>
            <h2>Fishing Heritage &amp; the Big Game Capital</h2>
            <p>
              Bimini earned its reputation as the &quot;Big Game Fishing Capital of the World.&quot; The
              deep waters of the Gulf Stream, just offshore, attract marlin, tuna, and other trophy fish
              that draw anglers from around the globe.
            </p>
            <p>
              Fishing is not just sport in Bimini — it is the backbone of island life. Conch, lobster,
              and fresh catch sustain local families and define Bimini&apos;s culinary identity. The
              island&apos;s docks, bait shops, and conch stalls tell a story of generations tied to the
              sea.
            </p>
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

      <section className="section section--white">
        <div className="container content-block--wide">
          <h2>Hemingway &amp; the Bimini Legend</h2>
          <p>
            Ernest Hemingway visited Bimini in the 1930s, drawn by the island&apos;s fishing and rough-edged
            charm. He stayed at the Compleat Angler hotel in Alice Town — a landmark that connected
            Bimini to literary history until its destruction by fire. Hemingway&apos;s time on the island
            inspired his work and cemented Bimini&apos;s place in American cultural imagination.
          </p>
          <p>
            Today, visitors can walk the same streets Hemingway knew, fish the same waters, and feel the
            island atmosphere that attracted one of the 20th century&apos;s greatest writers. The{' '}
            <Link to="/north-bimini-heritage-tour">North Bimini Heritage Tour</Link> covers many of these
            historic connections.
          </p>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <div className="split__image">
            <img
              src={IMAGES.fountainOfYouth.src}
              alt={IMAGES.fountainOfYouth.alt}
              loading="lazy"
              width={560}
              height={400}
            />
          </div>
          <div>
            <h2>The Fountain of Youth &amp; Ponce de León</h2>
            <p>
              One of Bimini&apos;s most enduring legends is the Fountain of Youth — a natural spring on
              South Bimini said to restore youth to those who drink from it. Spanish explorer Ponce de
              León searched for this fountain in the early 1500s, and the legend persists to this day.
            </p>
            <p>
              Whether you believe the myth or appreciate it as folklore, the Fountain of Youth is a must-see
              for anyone interested in Bimini&apos;s mystical side. Visit on the{' '}
              <Link to="/south-bimini-fountain-of-youth-tour">South Bimini Fountain of Youth Tour</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-block--wide">
          <h2>Rum Running &amp; Prohibition Era</h2>
          <p>
            During American Prohibition (1920–1933), Bimini&apos;s location made it a hub for rum
            running — smuggling alcohol from the Bahamas to the United States. Fast boats, hidden coves,
            and a culture of secrecy defined this era. The island&apos;s narrow channels and proximity to
            Florida made it ideal for the trade.
          </p>
          <p>
            Rum-running stories are still told in Bimini&apos;s bars and on local tours. They add another
            layer to the island&apos;s reputation as a place of adventure, risk, and independence.
          </p>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container content-block--wide">
          <h2>Bimini Road &amp; the Lost City Mystery</h2>
          <p>
            Off the coast of Bimini lies an underwater rock formation known as Bimini Road — a linear
            arrangement of limestone blocks that some believe are the remains of an ancient civilization,
            possibly linked to the lost city of Atlantis. Others argue it is a natural geological formation.
          </p>
          <p>
            Regardless of origin, Bimini Road has become one of the island&apos;s most discussed mysteries,
            attracting divers, researchers, and curious travellers. It sits alongside the Fountain of Youth
            legend as part of Bimini&apos;s unique mystique.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <div>
            <h2>Modern Bimini &amp; Cruise Tourism</h2>
            <p>
              Today, Bimini welcomes cruise passengers from major lines, with a modern cruise port on
              North Bimini. While the port area has developed rapidly, the island&apos;s soul remains in
              Alice Town, South Bimini, local food stalls, and the stories shared by Bahamian families
              who have called Bimini home for generations.
            </p>
            <p>
              The challenge and opportunity for today&apos;s visitors is discovering the real Bimini
              beyond the pier — the authentic island that Hemingway, rum runners, and fishermen shaped
              over centuries.
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
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="cta-banner">
            <h2>Experience Bimini&apos;s History Firsthand</h2>
            <p>
              Walk the streets, hear the stories, and visit the landmarks that make Bimini one of the
              Bahamas&apos; most fascinating islands.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <CTAButton to="/north-bimini-heritage-tour">North Bimini Heritage Tour</CTAButton>
              <CTAButton to="/#excursions" variant="secondary">
                View All Bimini Tours
              </CTAButton>
            </div>
          </div>
          <div className="internal-links">
            <Link to="/south-bimini-fountain-of-youth-tour">Fountain of Youth Tour</Link>
            <Link to="/ultimate-bimini-island-tour">Ultimate Island Tour</Link>
            <Link to="/bimini-cruise-port-guide">Cruise Port Guide</Link>
            <Link to="/one-day-in-bimini-from-a-cruise">One Day in Bimini</Link>
          </div>
        </div>
      </section>
    </>
  );
}
