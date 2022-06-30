import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import ImageModal from "../ReusableComponents/ProjectDetailPage/ImageModal";
import classes from "./SecondProcessCard.module.css";

const SecondProcessCard = ({ content1, content2, imageURL1, imageURL2 }) => {
  const size = useWindowSize();
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState(null);

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
        {content1}
        <br></br>
        <br></br>
        {content2}
      </p>

      {/* Image */}
      <div>
        <div
          className={`${classes.image_container}`}
          onClick={() => {
            setOpenModal((prevValue) => !prevValue);
            setImage(1);
            openModal
              ? document.documentElement.classList.remove("scroll-lock")
              : document.documentElement.classList.add("scroll-lock");
          }}
        >
          <img
            className={`${openModal && image === 1 && "modal_image"}`}
            src={imageURL1}
            alt={imageURL1}
          />
        </div>

        <div
          className={`${classes.image_container}`}
          onClick={() => {
            setOpenModal((prevValue) => !prevValue);
            setImage(2);
            openModal
              ? document.documentElement.classList.remove("scroll-lock")
              : document.documentElement.classList.add("scroll-lock");
          }}
        >
          <img
            className={`${openModal && image === 2 && "modal_image"}`}
            src={imageURL2}
            alt={imageURL2}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondProcessCard;
