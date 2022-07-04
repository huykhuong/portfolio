import React from "react";
import About from "../components/Homepage/About";
import Contact from "../components/Homepage/Contact";
import Introduction from "../components/Homepage/Introduction";
import Work from "../components/Homepage/Work";
import WorkCard from "../components/ReusableComponents/HomepageWorkCard/WorkCard";
import { useWindowSize } from "../hooks/useWindowSize";
import classes from "./Home.module.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Home = () => {
  const size = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Helmet>
        <title>Junius Khuong</title>
        <meta
          name="description"
          content="I'm Junius, welcome to my portfolio. I'm an ordinary boy who dreams to be a professional front-end developer."
        />
      </Helmet>

      {/* Introduction section */}
      <Introduction size={size} />

      {/* Work section */}
      <Work size={size}>
        {WorkCardObject.map((object, i) => (
          <div key={i}>
            <WorkCard
              imageURL={object.imageURL}
              type={object.type}
              name={object.name}
              href={object.href}
              size={size}
            />
            <div className={classes.blank}></div>
          </div>
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
