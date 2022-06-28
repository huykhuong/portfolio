import React from "react";
import classes from "./WorkCard.module.css";
import { Link } from "react-router-dom";

const WorkCard = ({ imageURL, type, name, href, size }) => {
  return (
    <div className={classes.container}>
      {/* Image div */}
      <div className={classes.image_container}>
        <img className={classes.image} src={imageURL} alt={imageURL} />
      </div>

      {/* Text div */}
      <div>
        <p
          className={`${
            size.width >= 1280
              ? "desktop-heading-small"
              : "mobile-heading-small"
          } ${classes.type}`}
        >
          {type}
        </p>
        <p
          className={`${
            size.width >= 1280
              ? "desktop-heading-large"
              : "mobile-heading-large"
          } ${classes.name}`}
        >
          {name}
        </p>

        {/* View project button */}
        <button className={classes.button}>
          <Link to={href}>View Project</Link>
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
