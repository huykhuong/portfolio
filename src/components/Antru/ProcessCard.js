import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import classes from "./ProcessCard.module.css";

const ProcessCard = ({ text, row_reverse, children }) => {
  const size = useWindowSize();

  return (
    <div
      className={`${classes.container} ${
        row_reverse && `${classes.flex_reverse}`
      }`}
    >
      {/* Text  */}
      <p
        className={`${
          size.width >= 1280 ? "desktop-body-medium" : "mobile-body-medium"
        }`}
      >
        {text}
      </p>

      {/* Image children */}
      {children}
    </div>
  );
};

export default ProcessCard;
