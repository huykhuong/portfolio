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
        Want More ?
      </h2>

      <button>
        <Link to={href}>Next Project</Link>
      </button>
    </div>
  );
};

export default WantMore;
