function Placement({ onRequestCallback }) {
  const supportAreas = [
    {
      title: "Resume Building",
      description:
        "Get practical guidance to create an effective resume and present your strengths clearly.",
    },
    {
      title: "Career Counselling",
      description:
        "Explore career paths that fit your interests, experience, and ACCA goals.",
    },
    {
      title: "Jobs",
      description:
        "Prepare for your search with interview practice and support finding relevant opportunities.",
    },
  ];

  return (
    <section
      className="placement-section section-pad reference-placement"
      id="placements"
    >
      <div className="page-width">
        <div className="reference-section-heading">
          <span className="section-kicker">CAREER SUPPORT</span>
          <h2>100% Placement Assistance</h2>
          <span className="reference-heading-rule" aria-hidden="true"></span>
        </div>
        <div className="placement-support-list">
          {supportAreas.map((area) => (
            <article className="placement-support-row" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
        <div className="placement-action">
          <button className="button" type="button" onClick={onRequestCallback}>
            Request Call Back
          </button>
          <p>
            Get personalized guidance from our team as you plan your next step.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Placement;
