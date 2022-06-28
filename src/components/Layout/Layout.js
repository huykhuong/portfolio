import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import classes from "./Layout.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";

const Layout = () => {
  const size = useWindowSize();
  return (
    <React.Fragment>
      <Navigation size={size} />
      <div className={classes.padding}>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer size={size} />
    </React.Fragment>
  );
};

export default Layout;
