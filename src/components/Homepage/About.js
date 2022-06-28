import React from "react";
import classes from "./About.module.css";

const About = ({ size }) => {
  return (
    <section id="homepage-about" className={classes.container}>
      {/* Heading */}
      <h2
        className={`${
          size.width >= 1280
            ? "desktop-heading-medium"
            : "mobile-heading-medium"
        } ${classes.heading}`}
      >
        About
      </h2>

      <div className={classes.paragraph_container}>
        {/* First paragraph */}
        <p
          className={`${
            size.width >= 1280
              ? "desktop-heading-large"
              : "mobile-heading-large"
          } ${classes.first_paragraph}`}
        >
          The story began when I stumbled upon some mind-blowing designed
          websites featured on “Awwwards”,
        </p>

        {/* Second paragraph */}
        <p
          className={`${
            size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
          }
         ${classes.second_paragraph}`}
        >
          which is a playground for insanely splendidly made websites to be
          nominated and win awards). A fire started inside me and urged me to
          follow this path of making marvelous user interfaces. I have been
          practicing in this field ever since the start of Year 2 during
          university.
          <br />
          <br />
          Although, I am not anywhere near as good as those developers whose
          projects are featured world wide, but according to the old saying
          “Practice makes perfect”, I am confident that a guy who would usually
          get in the habit of feeling gloomy like me can one day make it there.
          <br />
          <br />A quick description of my characteristics would humbly be a
          passionate, determined, persistent and a willing-to-listen guy. So
          anyone who needs a pair of reliable ears to confide in, you can “yeah”
          reach out to me “wink”.
        </p>
      </div>
    </section>
  );
};

export default About;
