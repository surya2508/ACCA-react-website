import CallbackForm from "./CallbackForm";

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
            Become ACCA in
            <br />
            <span>18 Months</span>
          </h1>
          <p className="hero-lede">
            A globally respected qualification. A smarter way to prepare. Build
            the skills and confidence to shape your future in finance.
          </p>
          <div className="hero-actions">
            <a className="button" href="#learning">
              Explore the ACCA course <span aria-hidden="true">→</span>
            </a>
            <a className="text-button" href="#eligibility">
              Check your eligibility <span aria-hidden="true">→</span>
            </a>
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
        <div className="hero-art">
          <CallbackForm onSubmit={onRequestCallback} />
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
