import React from "react";

import classes from "./Introduction.module.css";

const Introduction = ({ size }) => {
  return (
    <section id="homepage-introduction" className={classes.container}>
      {/* Image */}
      {size.width >= 1280 ? (
        <img src="/Logo4.png" alt="homepage-backgroundLogo" />
      ) : (
        <img src="/Logo3.png" alt="homepage-backgroundLogo" />
      )}

      {/* Text  */}
      <div className={classes.text_container}>
        <h1
          className={`${
            size.width >= 1280
              ? "desktop-heading-xlarge"
              : "mobile-heading-xlarge"
          } ${classes.intro}`}
        >
          Hello there, I'm Junius
        </h1>
        <div
          className={`${
            size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
          } ${classes.summary}`}
        >
          Just an ordinary person who dreams to be a professional front-end
          developer.
        </div>
      </div>
    </section>
  );
};

export default Introduction;
