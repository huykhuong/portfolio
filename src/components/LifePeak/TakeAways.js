import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import classes from "./TakeAways.module.css";

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

      <p
        className={`${
          size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
        }`}
      >
        Overall, looking back it was quite an experience and my final prototype
        was not bad at all (at least that’s what I think). Nevertheless, I would
        gladly accept any opportunity to create a prototype that sends my way in
        the future.
      </p>
    </div>
  );
};

export default TakeAways;
