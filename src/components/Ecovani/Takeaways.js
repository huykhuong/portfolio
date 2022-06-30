import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import classes from "./Takeaways.module.css";

const TakeAways = () => {
  const size = useWindowSize();
  return (
    <div className={classes.container}>
      <h2
        className={`${
          size.width >= 1280
            ? "desktop-heading-medium"
            : "mobile-heading-medium"
        }`}
      >
        Takeaways
      </h2>

      <div className={classes.content_container}>
        <p
          className={`${
            size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
          }`}
        >
          To be honest, not a single day passed by during the time I worked on
          this project that I did not whine. I was so frustrated with getting
          stuck while the Internet provided unmeaningful programming solutions.
          Fortunately, I went by the stage of developing the user interfaces
          like a breeze.
        </p>
        <p
          className={`${
            size.width >= 1280 ? "desktop-body-medium" : "mobile-body-medium"
          }`}
        >
          The back-end is where I started to get in trouble. So many unanswered
          questions that I have to figure out myself in order to build a
          function. It took so much patience and gave me countless headaches to
          set up the database and build functionalities. Nonetheless, looking
          back from now I only remember the good memories “sad face inserted”.{" "}
        </p>
      </div>
    </div>
  );
};

export default TakeAways;
