function Placement({ onRequestCallback }) {
  return (
    <section className="placement-section section-pad" id="placements">
      <div className="page-width placement-layout">
        <div className="placement-copy">
          <span className="section-kicker">LEARNING THAT LOOKS AHEAD</span>
          <h2>
            100% Placement
            <br />
            <span>Assistance</span>
          </h2>
          <p className="placement-lede">
            Your career deserves more than a qualification. Get practical
            support as you take your next step into the world of work.
          </p>
          <button className="button" type="button" onClick={onRequestCallback}>
            Request Call Back <span aria-hidden="true">↗</span>
          </button>
          <div className="placement-footnote">
            We support your journey. Your career path is uniquely yours.
          </div>
        </div>
        <div className="career-board">
          <div className="board-top">
            <span>CAREER TOOLKIT</span>
            <span>INDIGOLEARN / 04</span>
          </div>
          <div className="board-heading">
            Make your next
            <br />
            <i>move count.</i>
          </div>
          <div className="career-items">
            <div className="career-item">
              <span className="career-number">01</span>
              <div>
                <strong>Career guidance</strong>
                <small>Know where your skills can take you</small>
              </div>
              <span className="career-check">✓</span>
            </div>
            <div className="career-item">
              <span className="career-number">02</span>
              <div>
                <strong>CV &amp; interview preparation</strong>
                <small>Show up ready to make an impression</small>
              </div>
              <span className="career-check">✓</span>
            </div>
            <div className="career-item">
              <span className="career-number">03</span>
              <div>
                <strong>Employer connections</strong>
                <small>Explore opportunities with our support</small>
              </div>
              <span className="career-check">✓</span>
            </div>
          </div>
          <div className="board-footer">
            <span>YOUR AMBITION, WITH A PLAN.</span>
            <b>↑</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placement;
