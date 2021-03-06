import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import ImageModal from "../ReusableComponents/ProjectDetailPage/ImageModal";
import classes from "./ProcessCard.module.css";

const ProcessCard = ({
  content,
  imageURL,
  row_reverse,
  expanded_image_container,
}) => {
  const size = useWindowSize();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className={`${classes.container} ${
        size.width >= 1280 && row_reverse && `${classes.flex_reverse}`
      }`}
    >
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
        className={`${classes.image_container} ${
          expanded_image_container &&
          size.width >= 1280 &&
          `${classes.expanded_image_container}`
        }`}
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

export default ProcessCard;
