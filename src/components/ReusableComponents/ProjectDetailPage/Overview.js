import React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import classes from "./Overview.module.css";

const Overview = ({ primary_content, secondary_content }) => {
  const size = useWindowSize();

  return (
    <div className={classes.container}>
      {/* Overview heading */}
      <h2
        className={`${
          size.width >= 1280
            ? "desktop-heading-medium"
            : "mobile-heading-medium"
        } ${classes.overview_heading}`}
      >
        Overview
      </h2>

      {/* Overview content large */}
      <p
        className={`${
          size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
        } `}
      >
        {primary_content}
      </p>

      {/* Overview content small */}
      <p
        className={`${
          size.width >= 1280 ? "desktop-body-medium" : "mobile-body-medium"
        } ${classes.content_small}`}
      >
        {secondary_content}
      </p>
    </div>
  );
};

export default Overview;
