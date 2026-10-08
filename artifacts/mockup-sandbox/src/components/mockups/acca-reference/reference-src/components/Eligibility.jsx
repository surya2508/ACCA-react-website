function Eligibility() {
  return (
    <section className="eligibility-section section-pad" id="eligibility">
      <div className="page-width eligibility-layout">
        <div className="eligibility-heading">
          <span className="section-kicker">YOUR STARTING POINT</span>
          <h2>
            ACCA
            <br />
            <span>Eligibility</span>
          </h2>
          <p>
            There’s more than one way to begin. Find the route that fits where
            you are today.
          </p>
          <div className="eligibility-note">
            <span className="note-check">✓</span>
            <p>
              <strong>Not sure which route is yours?</strong>
              <br />
              Our team can help you understand your options.
            </p>
          </div>
        </div>
        <div className="route-cards">
          <article className="route-card route-primary">
            <div className="route-card-top">
              <span>ROUTE 01</span>
              <span className="route-symbol">↗</span>
            </div>
            <h3>
              Start after
              <br />
              Class 12
            </h3>
            <p>
              Begin your ACCA journey after higher secondary education. Your
              entry route depends on your qualifications and ACCA’s registration
              requirements.
            </p>
            <div className="route-tags">
              <span>After Class 12</span>
              <span>Check entry criteria</span>
            </div>
          </article>
          <article className="route-card route-light">
            <div className="route-card-top">
              <span>ROUTE 02</span>
              <span className="route-symbol">↗</span>
            </div>
            <h3>
              Continue after
              <br />
              graduation
            </h3>
            <p>
              Already have a degree? You may be eligible for exemptions that can
              help you move ahead sooner.
            </p>
            <div className="route-tags">
              <span>Degree holders</span>
              <span>Exemptions may apply</span>
            </div>
          </article>
          <div className="eligibility-footnote">
            <span className="orange-dash"></span>Eligibility and exemptions
            depend on your previous qualifications. We’ll help you check.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eligibility;
