import React from "react";
import About from "../components/Homepage/About";
import Contact from "../components/Homepage/Contact";
import Introduction from "../components/Homepage/Introduction";
import Work from "../components/Homepage/Work";
import WorkCard from "../components/ReusableComponents/HomepageWorkCard/WorkCard";
import { useWindowSize } from "../hooks/useWindowSize";
import classes from "./Home.module.css";

const Home = () => {
  const size = useWindowSize();

  const WorkCardObject = [
    {
      imageURL: "/LifePeak.png",
      type: "Prototyping",
      name: "LifePeak Gym App",
      href: "lifepeak",
    },
    {
      imageURL: "/Ecovani5.png",
      type: "front-end",
      name: "Ecovani Ecommerce Site",
      href: "ecovani",
    },
    {
      imageURL: "/Antru.png",
      type: "front-end",
      name: "An Trú Restaurant",
      href: "antru",
    },
    {
      imageURL: "/Airbnb.png",
      type: "front-end",
      name: "AirBnB Clone",
      href: "airbnb",
    },
  ];

  return (
    <React.Fragment>
      {/* Introduction section */}
      <Introduction size={size} />

      {/* Work section */}
      <Work size={size}>
        {WorkCardObject.map((object, i) => (
          <>
            <WorkCard
              key={i}
              imageURL={object.imageURL}
              type={object.type}
              name={object.name}
              href={object.href}
              size={size}
            />
            <div className={classes.blank}></div>
          </>
        ))}
      </Work>

      {/* About section */}
      <About size={size} />

      {/* Contact section */}
      <Contact size={size} />
    </React.Fragment>
  );
};

export default Home;
