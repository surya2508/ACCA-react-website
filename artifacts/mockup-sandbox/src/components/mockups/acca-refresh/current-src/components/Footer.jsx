function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">i</span>
          <span className="brand-name">
            Indigo<span>Learn</span>
            <small>ACCA · Learn without limits</small>
          </span>
        </a>
        <p className="footer-statement">
          A clearer path to a<br />
          career that counts.
        </p>
        <div className="footer-nav">
          <span>EXPLORE</span>
          <a href="#why">Why IndigoLearn</a>
          <a href="#eligibility">Eligibility</a>
          <a href="#learning">The ACCA course</a>
          <a href="#placements">Career support</a>
        </div>
        <div className="footer-note">
          <span>YOUR NEXT CHAPTER</span>
          <p>Make room for what’s possible.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>
          © {new Date().getFullYear()} IndigoLearn. All rights reserved.
        </span>
        <span>Learn with purpose. Go further.</span>
      </div>
    </footer>
  );
}

export default Footer;
