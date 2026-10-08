function Learning() {
  const levels = [
    {
      title: "Knowledge Level",
      sections: [
        {
          title: "",
          papers: [
            "Business and Technology (BT)",
            "Management Accounting (MA)",
            "Financial Accounting (FA)",
          ],
        },
      ],
      count: "3 papers",
    },
    {
      title: "Skill Level",
      sections: [
        {
          title: "",
          papers: [
            "Corporate and Business Law (LW)",
            "Performance Management (PM)",
            "Taxation (TX)",
            "Financial Reporting (FR)",
            "Audit and Assurance (AA)",
            "Financial Management (FM)",
          ],
        },
      ],
      count: "6 papers",
    },
    {
      title: "Professional Level",
      sections: [
        {
          title: "Compulsory",
          papers: [
            "Strategic Business Leader (SBL)",
            "Strategic Business Reporting (SBR)",
          ],
        },
        {
          title: "Choose two",
          papers: [
            "Advanced Financial Management (AFM)",
            "Advanced Performance Management (APM)",
            "Advanced Taxation (ATX)",
            "Advanced Audit and Assurance (AAA)",
          ],
        },
      ],
      count: "4 papers",
    },
  ];

  return (
    <section
      className="learning-section section-pad reference-learning"
      id="learning"
    >
      <div className="page-width">
        <div className="reference-section-heading">
          <span className="section-kicker">THE ACCA QUALIFICATION</span>
          <h2>What Will You Learn in ACCA?</h2>
          <span className="reference-heading-rule" aria-hidden="true"></span>
        </div>
        <div className="curriculum-grid">
          {levels.map((level) => (
            <article className="curriculum-card" key={level.title}>
              <h3>{level.title}</h3>
              <div className="curriculum-content">
                {level.sections.map((section) => (
                  <div
                    className="curriculum-subject-group"
                    key={section.title || level.title}
                  >
                    {section.title && <h4>{section.title}</h4>}
                    <ul>
                      {section.papers.map((paper) => (
                        <li key={paper}>{paper}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="curriculum-footer">{level.count}</div>
            </article>
          ))}
        </div>
        <p className="curriculum-note">
          ACCA members also complete the Ethics and Professional Skills module.
        </p>
      </div>
    </section>
  );
}

export default Learning;
