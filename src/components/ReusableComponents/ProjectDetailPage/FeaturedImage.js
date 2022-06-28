import React from "react";
import classes from "./FeaturedImage.module.css";

const FeaturedImage = ({ imageURL, imageName }) => {
  return (
    <section id="featured-image" className={classes.container}>
      <img className={classes.image} src={imageURL} alt={imageName} />
    </section>
  );
};

export default FeaturedImage;
