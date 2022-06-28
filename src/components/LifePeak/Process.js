import React from "react";
import classes from "./Process.module.css";
import ProcessCard from "./ProcessCard";

const Process = ({ size }) => {
  return (
    <div className={classes.container}>
      {/* Heading */}
      <h2
        className={`${
          size.width >= 1280
            ? "desktop-heading-medium"
            : "mobile-heading-medium"
        }`}
      >
        Process
      </h2>

      {/* First  */}
      <ProcessCard
        content="As a guy following a front-end career, it is natural for me to be curious about UI/UX. Besides training myself to efficiently code based on the various designed web pages on the Internet, I have also made some explorations of prototyping and I must say I fell in love right away with the whole process of it. I love to see how visually-appealing user interfaces are made from the early stages (putting texts, visual elements onto the screen and mixing colors) and watch the progress of transforming messy ideas into a neat and actual product."
        imageURL="LifePeak4.png"
      />

      {/* Second */}
      <ProcessCard
        content="The whole prototyping thing did not really fit with me at first to be honest. I struggled a lot in finding inspirations, learning how to use the prototyping tool and a bunch of other things to take care of. As a general fact, panic is not a friend in any situation so I started to take baby steps by choosing 3 gym app designs on Dribbble as my inspiration sources. I then had to go through a long and tiring collection of tutorial videos of Axure to get to know how this tool operates. The remaining steps are choosing the color scheme, font, and everything that the “designing process” requires. "
        imageURL="LifePeak5.png"
      />

      {/* Third */}
      <ProcessCard
        content="The journey of reaching completion for this prototype was such an emotional rollercoaster, but mostly fun. Devastated then joyful, demotivated then motivated, are how I have been through and for that I deeply appreciate the effort of those real designers out there who made it through the dark period called “out of idea”. Obviously, after successfully creating a prototype, I unlocked a new personal achievement. I honed my skills in designing, raised my aesthetics instinct and sharpened my intuition of recognizing a sleek design. The one thing that completely caught me off guard during the process was I did not expect making animations was so difficult. It requires perfect timing and skillful animation arrangement. Sometimes the animation I had in mind turned out completely bad when applied to reality and I bursted out laughing at how bad my imagination was. "
        imageURL="LifePeak3.png"
      />
    </div>
  );
};

export default Process;
