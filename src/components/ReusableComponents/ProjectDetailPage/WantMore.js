import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";
import classes from "./WantMore.module.css";

const WantMore = ({ href }) => {
  const size = useWindowSize();
  return (
    <div className={classes.container}>
      <h2
        className={`${
          size.width >= 1280 ? "desktop-heading-large" : "mobile-heading-large"
        }`}
      >
        Another One ?
      </h2>

      <Link to={href}>
        <button>Next Project</button>
      </Link>
    </div>
  );
};

export default WantMore;
