function WhyChooseUs() {
  const benefits = [
    {
      number: "01",
      title: "Built around you",
      description:
        "Flexible learning that fits alongside work, university, and everything life brings.",
    },
    {
      number: "02",
      title: "Experts who make it click",
      description:
        "Learn from experienced faculty who turn complex concepts into clear next steps.",
    },
    {
      number: "03",
      title: "Progress you can see",
      description:
        "Structured study plans, practice, and support keep you moving with purpose.",
    },
  ];

  return (
    <section className="why-section section-pad" id="why">
      <div className="page-width why-layout">
        <div className="section-intro">
          <span className="section-kicker">A BETTER WAY TO GET THERE</span>
          <h2>
            Why choose
            <br />
            <span>IndigoLearn?</span>
          </h2>
          <p>
            The right support makes a world of difference. We bring the
            structure, people, and practical learning to help you do your best
            work.
          </p>
          <a className="underlined-link" href="#learning">
            See how we teach <span>→</span>
          </a>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <article className="benefit-row" key={benefit.number}>
              <span className="benefit-number">{benefit.number}</span>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
              <span className="benefit-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
      <div className="stats-strip page-width">
        <div>
          <strong>13</strong>
          <span>ACCA exams, one clear plan</span>
        </div>
        <div>
          <strong>
            180<span>+</span>
          </strong>
          <span>Countries recognize ACCA</span>
        </div>
        <div>
          <strong>
            7,400<span>+</span>
          </strong>
          <span>Approved employers worldwide</span>
        </div>
        <p>
          Numbers that open doors.
          <br />
          <b>A qualification that goes further.</b>
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
