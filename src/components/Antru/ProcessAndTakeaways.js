import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import ImageModal from "../ReusableComponents/ProjectDetailPage/ImageModal";
import classes from "./ProcessAndTakeaways.module.css";
import ProcessCard from "./ProcessCard";

const ProcessAndTakeaways = () => {
  const size = useWindowSize();
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState(null);

  return (
    <div className={classes.container}>
      {/* Image modal */}
      <ImageModal openModal={openModal} />

      {/* Heading */}
      <h2
        className={`${
          size.width >= 1280
            ? "desktop-heading-medium"
            : "mobile-heading-medium"
        }`}
      >
        Process & Takeaways
      </h2>

      {/* Process Cards */}
      <ProcessCard
        text="The color I can instantly think of when it comes to “vegetarian” is green. Besides that my friend also wanted to have the color “red” and “yellow” in the color scheme. Red represents the “brick” and according to scientific articles, Yellow color helps elicit cheerful and enjoyable thoughts which lead to customers feeling delighted and are able to savor their dishes. The restaurant emphasizes Korean and Japanese cuisines, bringing along a new trend in vegetarian eating by transforming contemporary foods that the youths love into vegetable-only dishes."
        row_reverse={false}
      >
        <div
          onClick={() => {
            setOpenModal((prevValue) => !prevValue);
            setImage(1);
            openModal
              ? document.documentElement.classList.remove("scroll-lock")
              : document.documentElement.classList.add("scroll-lock");
          }}
          className={`${classes.image1_container} ${classes.image_container}`}
        >
          <img
            src="./Antru4.png"
            alt="antru-image1"
            className={`${openModal && image === 1 && "modal_image"}`}
          />
        </div>
      </ProcessCard>

      <ProcessCard
        text="The first version of the website was rather simple in the way it operates (the typical website filled with contents and the ability to scroll up and down - that’s it). At this version, I built it based on a coffee shop website template on Bootstrap and after finishing building, the outcome looks pretty neat and sleek and we were satisfied."
        row_reverse={true}
      >
        <div
          onClick={() => {
            setOpenModal((prevValue) => !prevValue);
            setImage(2);
            openModal
              ? document.documentElement.classList.remove("scroll-lock")
              : document.documentElement.classList.add("scroll-lock");
          }}
          className={`${classes.image2_container} ${classes.image_container}`}
        >
          <img
            className={`${openModal && image === 2 && "modal_image"}`}
            src="./Antru3.png"
            alt="antru-image2"
          />
        </div>
        <div
          onClick={() => {
            setOpenModal((prevValue) => !prevValue);
            setImage(3);
            openModal
              ? document.documentElement.classList.remove("scroll-lock")
              : document.documentElement.classList.add("scroll-lock");
          }}
          className={`${classes.image3_container} ${classes.image_container}`}
        >
          <img
            className={`${openModal && image === 3 && "modal_image"}`}
            src="./Antru7.png"
            alt="antru-image3"
          />
        </div>
      </ProcessCard>

      <ProcessCard
        text="Although the first version was beautifully constructed, I felt something was missing and it was the lack of animations. A website that includes some animations such as during page changing definitely scores more. Animations make the websites look vibrant and lively, significantly improving users’ interactions with the website. Because of this, I was motivated to build the second version. This time I took inspiration from a fashion website, I renovated everything from layouts to website flows and added a bunch of animations. Unfortunately, this version was not a success since I was not able to implement all the animations I planned and even some libraries clash with one another resulting in some weird behaviors."
        row_reverse={false}
      >
        <div
          onClick={() => {
            setOpenModal((prevValue) => !prevValue);
            setImage(4);
            openModal
              ? document.documentElement.classList.remove("scroll-lock")
              : document.documentElement.classList.add("scroll-lock");
          }}
          className={`${classes.image4_container} ${classes.image_container}`}
        >
          <img
            className={`${openModal && image === 4 && "modal_image"}`}
            src="./Antru5.png"
            alt="antru-image4"
          />
        </div>
      </ProcessCard>

      <ProcessCard
        text="The final version comes into development right after the failure of the second one. This time, I wanted to make a one page, section-oriented website. I learned from this website called 'Restaurant Frantzén' (props to them for such a glamorous website). This time around, I managed to balance between the animations and the layouts. I included parallax scrolling to make the website “feels” smooth while scrolling and put a plethora of images into use because images can convey more than texts."
        row_reverse={true}
      >
        <div
          onClick={() => {
            setOpenModal((prevValue) => !prevValue);
            setImage(5);
            openModal
              ? document.documentElement.classList.remove("scroll-lock")
              : document.documentElement.classList.add("scroll-lock");
          }}
          className={`${classes.image5_container} ${classes.image_container}`}
        >
          <img
            className={`${openModal && image === 5 && "modal_image"}`}
            src="./Antru6.png"
            alt="antru-image5"
          />
        </div>
      </ProcessCard>
    </div>
  );
};

export default ProcessAndTakeaways;
