import React from "react";
import classes from "./ProjectDetail.module.css";

const ProjectDetail = ({ title, description, children, size }) => {
  return (
    <div className={classes.container}>
      {/* Title */}
      <p
        className={`${
          size.width >= 1280 ? "desktop-heading-small" : "mobile-heading-small"
        } ${classes.title}`}
      >
        {title}
      </p>

      {/* Description */}
      <div className={classes.description_container}>
        <p
          className={`${
            size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
          } ${classes.description}`}
        >
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default ProjectDetail;
