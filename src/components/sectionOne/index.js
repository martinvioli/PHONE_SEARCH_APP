import React from "react";
import TopComp from "./topComp";

export default function SectionOne() {
  return (
    <div id="sectionOne">
      <h1>
        Welcome to the fastest, coolest, and prettiest phone (and also tabs &
        smartwatches) comparing web.
      </h1>
      <h3>
        💻This webpage was made just only for personal studying purpouses, but
        its fully functional & responsive. The data is providen by a public API
        ("phone-specs-api" by Azharimm. Thank you! *). For creating this app i
        used: React, Redux (with Thunk mw), CSS Modules and GHPages. Thank you
        for visiting it!. 🤍{" "}
      </h3>
      <h4>*All the data is taken indirectly from GSMArena.</h4>
      <h3 id="linkedin">
        <a
          href="https://www.linkedin.com/in/martin-violi-b1a580221/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
            alt="linkedinLink"
          />{" "}
          Martin.
        </a>
      </h3>
      <div id="lists">
        <TopComp
          list="https://api-mobilespecs.azharimm.site/v2/latest"
          text="LATEST ONES"
          icon="🚀"
        />
        <TopComp
          list="https://api-mobilespecs.azharimm.site/v2/top-by-interest"
          text="POPULAR NOW"
          icon="🥇"
        />
      </div>
    </div>
  );
}
