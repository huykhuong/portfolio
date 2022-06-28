import React from "react";
import classes from "./Work.module.css";

const Work = ({ children, size }) => {
  return (
    <section id="homepage-work" className={classes.container}>
      {/* Heading */}
      <h2
        className={`${
          size.width >= 1280
            ? "desktop-heading-medium"
            : "mobile-heading-medium"
        } ${classes.heading}`}
      >
        Work
      </h2>
      {children}
    </section>
  );
};

export default Work;
