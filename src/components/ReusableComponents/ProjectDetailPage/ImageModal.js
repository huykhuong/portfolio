import React from "react";
import classes from "./ImageModal.module.css";

const ImageModal = ({ openModal }) => {
  return (
    <div
      className={`${classes.image_modal} ${openModal && classes.open_modal}`}
    ></div>
  );
};

export default ImageModal;
