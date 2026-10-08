function Hero({ onRequestCallback }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-backdrop"></div>
      <div className="hero-inner page-width">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span> YOUR NEXT CHAPTER STARTS HERE
          </div>
          <h1>
            Become ACCA
            <br />
            <span>in 18 Months</span>
          </h1>
          <p className="hero-lede">
            A globally respected qualification. A smarter way to prepare. Build
            the skills and confidence to shape your future in finance.
          </p>
          <div className="hero-actions">
            <a className="button" href="#learning">
              Explore the ACCA course <span aria-hidden="true">→</span>
            </a>
            <button
              className="text-button"
              type="button"
              onClick={onRequestCallback}
            >
              Request Call Back <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              <span>AK</span>
              <span>NS</span>
              <span>RM</span>
            </div>
            <p>
              <strong>Learn alongside future finance leaders</strong>
              <br />
              Expert-led. Career focused. Made for you.
            </p>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Illustration of a finance professional's learning journey"
        >
          <div className="art-orbit orbit-one"></div>
          <div className="art-orbit orbit-two"></div>
          <div className="art-accent"></div>
          <div className="art-panel">
            <div className="panel-top">
              <span>YOUR ACCA JOURNEY</span>
              <span className="panel-dots">•••</span>
            </div>
            <div className="journey-title">
              One goal.
              <br />
              <strong>A world of opportunity.</strong>
            </div>
            <div className="progress-line">
              <span></span>
            </div>
            <div className="progress-labels">
              <span>START</span>
              <b>18 MONTHS</b>
              <span>QUALIFIED</span>
            </div>
            <div className="mini-chart">
              <div className="chart-label">
                <span>Career possibilities</span>
                <strong>↑ 24%</strong>
              </div>
              <div className="chart-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className="chart-months">
                <span>NOW</span>
                <span>THEN</span>
              </div>
            </div>
          </div>
          <div className="floating-note note-exam">
            <span className="note-icon">01</span>
            <div>
              <strong>Exam-ready</strong>
              <small>With every lesson</small>
            </div>
          </div>
          <div className="floating-note note-world">
            <span className="world-icon">◎</span>
            <div>
              <strong>180+ countries</strong>
              <small>Your qualification travels</small>
            </div>
          </div>
          <div className="hero-stamp">
            <span>THE</span>
            <strong>ACCA</strong>
            <span>ADVANTAGE</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom page-width">
        <span>01 — YOUR FUTURE, IN FOCUS</span>
        <span className="scroll-cue">
          SCROLL TO EXPLORE <b>↓</b>
        </span>
      </div>
    </section>
  );
}

export default Hero;
