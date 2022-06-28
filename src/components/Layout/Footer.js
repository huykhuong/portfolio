import React from "react";
import classes from "./Footer.module.css";

const Footer = ({ size }) => {
  return (
    <footer className={classes.footer}>
      <img src="/Logo2.png" alt="footer-logo" />
      <p
        className={`${
          size.width >= 1280 ? "desktop-body-small" : "mobile-body-small"
        } ${classes.footer_info}`}
      >
        &copy;Huy Khương 2022
      </p>
    </footer>
  );
};

export default Footer;
