import React from "react";
import classes from "./HomepageContactElement.module.css";

const HomepageContactElement = ({ title, content, href, size }) => {
  return (
    <div>
      <p
        className={`${
          size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
        } ${classes.title}`}
      >
        {title}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          size.width >= 1280
            ? `${classes.desktop_body}`
            : `${classes.mobile_body}`
        }`}
      >
        {content}
      </a>
    </div>
  );
};

export default HomepageContactElement;
