import React from "react";
import classes from "./Overview.module.css";

const Overview = ({ size }) => {
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
        Gym, a place that a hundred percent pops up in everyone’s mind when
        fitness and muscles are the topic of the conversations.
      </p>

      {/* Overview content small */}
      <p
        className={`${
          size.width >= 1280 ? "desktop-body-medium" : "mobile-body-medium"
        } ${classes.content_small}`}
      >
        I’m also a gym enthusiast and like everyone else the goal is to put lean
        mass on the muscles. So since the gym is a social service place, it
        apparently needs a management system or an app to govern and manage
        customer memberships alongside all the activities that happen at the
        gym. As a gym goer and a student studying technology at the university,
        I have always been excited to have a chance to build a management
        system, or at least according to my current preference, develop UI for a
        gym app. And hooray a course at university asked to build a prototype
        for a mobile home gym app.
      </p>
    </div>
  );
};

export default Overview;
