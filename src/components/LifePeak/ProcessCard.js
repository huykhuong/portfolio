import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import classes from "./ProcessCard.module.css";

const ProcessCard = ({ content, imageURL }) => {
  const size = useWindowSize();

  return (
    <div className={classes.container}>
      {/* Content */}
      <p
        className={`${
          size.width >= 1280 ? "desktop-body-medium" : "mobile-body-medium"
        }`}
      >
        {content}
      </p>

      {/* Image */}
      <div className={classes.image_container}>
        <img src={imageURL} alt={imageURL} />
      </div>
    </div>
  );
};

export default ProcessCard;
