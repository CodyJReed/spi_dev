import React from "react";

import loop from "../img/img-continuous-improvement-loop.svg";

const DevelopInvest = () => {
  return (
    <section>
      <h4>Moving from Learning Journey to Performance Journey</h4>
      <p>
        Many sales training programs tend to provide “general” education for the
        sales organization, but don’t identify which capabilities are the most
        critical to meet specific sales goals. In addition, training projects
        rarely include a rigorous approach to apply observable behavior change –
        from both the seller and manager perspective.
      </p>
      <p>
        As a result, adoption and behavior change take place on an ad hoc basis
        – from team to team and individual to individual. This approach leads to
        the random outcomes that characterize many improvement initiatives. Five
        key steps can help ensure that training investments translate
        consistently to desired business outcomes:
      </p>
      <ol>
        <li>Align high impact competencies with specific sales goals.</li>
        <li>Objectively assess the current state of sales talent.</li>
        <li>
          Incorporate a Learn>Practice>Apply>Coach methodology for attainment of
          mastery.
        </li>
        <li>
          Use technology-enabled tools to reinforce and accelerate daily
          application.
        </li>
        <li>
          “Close the loop” by continually measuring competency progress versus
          sales results.
        </li>
      </ol>
      <p>
        With the help of integrated technology, it is now possible to apply a
        rational, data-driven approach for continuous sales improvement in your
        organization.
      </p>
      <figure className="img-container">
        <img
          className="img-loop"
          src={loop}
          alt="The Continuous Improvement Model"
        />
        <figcaption>"The Continuous Improvement Model"</figcaption>
      </figure>
    </section>
  );
};

export default DevelopInvest;
