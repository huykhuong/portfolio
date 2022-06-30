import React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import classes from "./IntroSection.module.css";

const IntroSection = ({
  imageURL,
  imageName,
  project_name,
  width,
  height,
  setOpenModal,
}) => {
  const size = useWindowSize();

  return (
    <section id="intro-section">
      <div className={classes.img_container}>
        <img
          onClick={() => {
            setOpenModal(true);
            document.documentElement.classList.add("scroll-lock");
          }}
          width={width}
          height={height}
          src={imageURL}
          alt={imageName}
        />
      </div>

      {/* Project Title */}
      <h1
        className={`${
          size.width >= 1280
            ? "desktop-heading-xlarge"
            : "mobile-heading-xlarge"
        } ${classes.project_title}`}
      >
        {project_name}
      </h1>
    </section>
  );
};

export default IntroSection;
