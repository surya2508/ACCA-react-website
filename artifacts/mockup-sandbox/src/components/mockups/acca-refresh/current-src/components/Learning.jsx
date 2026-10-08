function Learning() {
  const papers = [
    {
      code: "01",
      title: "Applied Knowledge",
      sub: "Build your business foundation",
      papers: "Business · Management · Accounting",
    },
    {
      code: "02",
      title: "Applied Skills",
      sub: "Put your knowledge to work",
      papers: "Law · Tax · Audit · Performance",
    },
    {
      code: "03",
      title: "Strategic Professional",
      sub: "Think and lead at a higher level",
      papers: "Strategic · Leadership · Ethics",
    },
  ];

  return (
    <section className="learning-section section-pad" id="learning">
      <div className="page-width">
        <div className="learning-header">
          <div>
            <span className="section-kicker">A QUALIFICATION WITH RANGE</span>
            <h2>
              What Will You Learn
              <br />
              <span>in ACCA?</span>
            </h2>
          </div>
          <p>
            From the fundamentals of accounting to strategic leadership, gain a
            toolkit designed for the real world of business.
          </p>
        </div>
        <div className="learning-path">
          <div className="path-rail">
            <span>YOUR LEARNING PATH</span>
            <div>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="paper-grid">
            {papers.map((paper) => (
              <article className="paper-card" key={paper.code}>
                <div className="paper-code">
                  {paper.code}
                  <span> / 03</span>
                </div>
                <div className="paper-mark" aria-hidden="true">
                  {paper.code === "01" ? "▤" : paper.code === "02" ? "⌁" : "↗"}
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.sub}</p>
                <div className="paper-divider"></div>
                <span className="paper-subjects">{paper.papers}</span>
              </article>
            ))}
          </div>
          <div className="learning-bottom">
            <span>PLUS</span>
            <p>Ethics &amp; Professional Skills module</p>
            <span className="learning-bottom-note">
              Because how you work matters just as much as what you know.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learning;
