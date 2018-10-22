import React from "react";

import AssessInvest from "./AssessInvest";
import AlignInvest from "./AlignInvest";
import DevelopInvest from "./DevelopInvest";

const Resources = () => {
  return (
    <div className="content">
      <section className="wrapper">
        <h1 className="section-heading">Resources</h1>
        <article>
          <h1 className="article-heading">
            Sales Training Does Not Equal Sales Performance
          </h1>

          <AssessInvest />

          <AlignInvest />

          <DevelopInvest />
        </article>
      </section>
      <footer>&copy; 2018 Thanx 4 the Opportunity Haiz</footer>
    </div>
  );
};

export default Resources;
