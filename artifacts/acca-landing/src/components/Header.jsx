import { useState } from "react";

function Header({ onRequestCallback }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label="IndigoLearn home"
        >
          <span className="brand-mark">i</span>
          <span className="brand-name">
            Indigo<span>Learn</span>
            <small>ACCA · Learn without limits</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#why" onClick={closeMenu}>
            Why IndigoLearn
          </a>
          <a href="#eligibility" onClick={closeMenu}>
            Eligibility
          </a>
          <a href="#learning" onClick={closeMenu}>
            The ACCA course
          </a>
          <a href="#placements" onClick={closeMenu}>
            Careers
          </a>
          <button
            className="button button-small"
            type="button"
            onClick={() => {
              closeMenu();
              onRequestCallback();
            }}
          >
            Request Call Back <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
