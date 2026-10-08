function WhyChooseUs() {
  const benefits = [
    {
      mark: "01",
      title: "Expert Faculty",
      description:
        "Learn from ACCA specialists who make complex ideas clear and practical.",
    },
    {
      mark: "02",
      title: "Complete Success Package",
      description:
        "Get structured lessons, exam practice, and support throughout your ACCA journey.",
    },
    {
      mark: "03",
      title: "Career Support",
      description:
        "Build practical job-search skills and get guidance as you plan your next step.",
    },
  ];

  const courseFacts = [
    { label: "Levels", value: "3", detail: "13 ACCA papers" },
    { label: "Duration", value: "6–18", detail: "months" },
    { label: "Exams", value: "13", detail: "in the full qualification" },
    { label: "Exemptions", value: "Up to 9", detail: "may be available" },
  ];

  return (
    <section className="why-section section-pad reference-why-section" id="why">
      <div className="page-width">
        <div className="reference-section-heading">
          <span className="section-kicker">
            YOUR ACCA JOURNEY, WELL SUPPORTED
          </span>
          <h2>Why Choose Us?</h2>
          <span className="reference-heading-rule" aria-hidden="true"></span>
        </div>
        <div className="why-card-grid">
          {benefits.map((benefit) => (
            <article className="why-card" key={benefit.mark}>
              <span className="why-card-mark" aria-hidden="true">
                {benefit.mark}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
        <div className="course-facts">
          {courseFacts.map((fact) => (
            <div className="course-fact" key={fact.label}>
              <span className="course-fact-label">{fact.label}</span>
              <strong>{fact.value}</strong>
              <span className="course-fact-detail">{fact.detail}</span>
            </div>
          ))}
        </div>
        <p className="course-facts-note">
          Exemptions depend on your previous qualifications and ACCA’s
          assessment.
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
