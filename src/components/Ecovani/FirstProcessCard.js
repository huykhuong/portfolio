import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import ImageModal from "../ReusableComponents/ProjectDetailPage/ImageModal";
import classes from "./FirstProcessCard.module.css";

const FirstProcessCard = ({ content, imageURL }) => {
  const size = useWindowSize();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={`${classes.container}`}>
      {/* Image modal */}
      <ImageModal openModal={openModal} />

      {/* Content */}
      <p
        className={`${
          size.width >= 1280 ? "desktop-body-medium" : "mobile-body-medium"
        }`}
      >
        {content}
      </p>

      {/* Image */}
      <div
        className={classes.image_container}
        onClick={() => {
          setOpenModal((prevValue) => !prevValue);
          openModal
            ? document.documentElement.classList.remove("scroll-lock")
            : document.documentElement.classList.add("scroll-lock");
        }}
      >
        <img
          className={`${openModal && "modal_image"}`}
          src={imageURL}
          alt={imageURL}
        />
      </div>
    </div>
  );
};

export default FirstProcessCard;
