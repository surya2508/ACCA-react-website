function CTA({ onRequestCallback }) {
  return (
    <section className="cta-section">
      <div className="cta-grid" aria-hidden="true"></div>
      <div className="page-width cta-inner">
        <div className="cta-index">
          A FUTURE IN FINANCE
          <br />
          <span>STARTS WITH ONE STEP.</span>
        </div>
        <h2>
          Kick off your ACCA Prep
          <br />
          Journey with <em>IndigoLearn.</em>
        </h2>
        <p>Let’s figure out the right start for you.</p>
        <button
          className="button button-orange"
          type="button"
          onClick={onRequestCallback}
        >
          Request Call Back <span aria-hidden="true">↗</span>
        </button>
        <div className="cta-orbit" aria-hidden="true">
          <span></span>
          <b>i</b>
        </div>
      </div>
    </section>
  );
}

export default CTA;
