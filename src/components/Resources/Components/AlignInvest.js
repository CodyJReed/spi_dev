import React from "react";

import triangle from "../../../img/img-bermuda-sales-triangle.svg";

const AlignInvest = () => {
  return (
    <section>
      <h4>Aligning Training Investments with Critical Business Goals</h4>
      <p>
        In our three decades of observation, most companies struggle to “connect
        the dots” between key functional areas that have a stake in sales
        training and transformation. As depicted below, each of these areas tend
        to have a different “lens” and perspective driving their priorities. As
        a result, the organizational forces that are driving and funding sales
        training investments can have a major impact on the approach taken (and
        results attained).
      </p>
      <figure className="img-container">
        <img src={triangle} alt="Bermuda Sales Triangle" />
        <figcaption>"The Bermuda Triangle Sales Diagram"</figcaption>
      </figure>
      <p>
        Transforming sales training into performance development requires a
        fundamental shift in mindset – beginning with a clear understanding of
        business goals (growth strategy), which lead to related sales metrics.
        While it may seem obvious, many sales training initiatives fail to
        identify clear business outcomes and lack a systemic view of how new
        knowledge and behaviors will impact those results.
      </p>
      <p>
        Different growth strategies (e.g., market penetration) drive variation
        in the specific sales goals and metrics that define success. In turn,
        these goals and metrics can require very different competency emphasis
        for professional development.
      </p>
    </section>
  );
};

export default AlignInvest;
