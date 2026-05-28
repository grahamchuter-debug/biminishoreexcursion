import { Link } from 'react-router-dom';
import { SITE_NAME, TOURS } from '../config/site';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'North Bimini Heritage Tour', path: '/north-bimini-heritage-tour' },
  { label: 'South Bimini Fountain of Youth Tour', path: '/south-bimini-fountain-of-youth-tour' },
  { label: 'Ultimate Bimini Island Tour', path: '/ultimate-bimini-island-tour' },
  { label: 'Bimini Cruise Port Guide', path: '/bimini-cruise-port-guide' },
  { label: 'One Day in Bimini', path: '/one-day-in-bimini-from-a-cruise' },
  { label: 'History of Bimini', path: '/history-of-bimini' },
  { label: 'FAQ', path: '/bimini-shore-excursions-faq' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <h2 className="footer__title">{SITE_NAME}</h2>
          <p>
            Your guide to authentic Bimini shore excursions for cruise passengers. Discover the real
            Bimini beyond the cruise port — local heritage, island culture, beaches, and hidden
            gems in the Bahamas&apos; closest island to Florida.
          </p>
        </div>
        <div className="footer__links">
          <h3>Bimini Tours &amp; Guides</h3>
          <ul>
            {TOURS.map((tour) => (
              <li key={tour.slug}>
                <Link to={`/${tour.slug}`}>{tour.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__links">
          <h3>Plan Your Visit</h3>
          <ul>
            {FOOTER_LINKS.slice(4).map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} Bimini Shore Excursion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
