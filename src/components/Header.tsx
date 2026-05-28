import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from '../config/site';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand">
          <span className="header__logo">{SITE_NAME}</span>
          <span className="header__tagline">{SITE_TAGLINE}</span>
        </Link>
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                {link.path.startsWith('/#') ? (
                  <a href={link.path}>{link.label}</a>
                ) : (
                  <Link to={link.path}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
