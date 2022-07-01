import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import ImageModal from "../ReusableComponents/ProjectDetailPage/ImageModal";
import classes from "./ProcessAndTakeaways.module.css";

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

      <div className={classes.content_container}>
        {/* Text section */}
        <div className={classes.text_section_container}>
          <p
            className={`${
              size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
            }`}
          >
            All I did was pretty much code along with Sonny. I followed his
            instructions and successfully built out the home page and the search
            page with real input staying/leaving dates. The clone was 99% if not
            100% exactly the same as the real one at that time: the iconic
            pastel pink color, the room cards, etc.
          </p>
          <p
            className={`${
              size.width >= 1280 ? "desktop-body-medium" : "mobile-body-medium"
            }`}
          >
            This cloning project is where I got to learn about TailwindCSS, I
            didn’t not really much like it at first due to its inline styling
            syntax leading to a messy code structure but once I got the hang of
            it, it’s beyond convenient. Sonny also taught me how to leverage
            third-party API to boost up productivity such as the Mapbox API. One
            interesting thing I also learned was SSR (server-side rendering).
            This is provided by NextJS and briefly it is a technique to load and
            prepare every contents at the server before showing to the user’s
            screen instead of using the client-side resources to load contents.
          </p>
        </div>

        {/* Images Section */}
        <div>
          <div
            onClick={() => {
              setOpenModal((prevValue) => !prevValue);
              setImage(1);
              openModal
                ? document.documentElement.classList.remove("scroll-lock")
                : document.documentElement.classList.add("scroll-lock");
            }}
            className={`${classes.image_container}`}
          >
            <img
              id={classes["image1"]}
              className={`${openModal && image === 1 && "modal_image"}`}
              src="/Airbnb3.png"
              alt="antru-image5"
            />
          </div>

          <div
            onClick={() => {
              setOpenModal((prevValue) => !prevValue);
              setImage(2);
              openModal
                ? document.documentElement.classList.remove("scroll-lock")
                : document.documentElement.classList.add("scroll-lock");
            }}
            className={`${classes.image_container}`}
          >
            <img
              id={classes["image2"]}
              className={`${openModal && image === 2 && "modal_image"}`}
              src="/AirBnb4.png"
              alt="antru-image5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAndTakeaways;
