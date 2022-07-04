import React, { useEffect } from "react";
import Process from "../components/LifePeak/Process";
import ProcessCard from "../components/LifePeak/ProcessCard";
import TakeAways from "../components/LifePeak/TakeAways";
import IntroSection from "../components/ReusableComponents/ProjectDetailPage/IntroSection";
import Overview from "../components/ReusableComponents/ProjectDetailPage/Overview";
import ProjectDetail from "../components/ReusableComponents/ProjectDetailPage/ProjectDetail";
import WantMore from "../components/ReusableComponents/ProjectDetailPage/WantMore";
import { useWindowSize } from "../hooks/useWindowSize";
import { Helmet } from "react-helmet";

const LifePeak = () => {
  const size = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Junius Khuong - LifePeak</title>
      </Helmet>

      {/* Featured Image */}
      <IntroSection
        imageURL="/LifePeak2.png"
        imageName="life-peak-featured-image"
        project_name="LifePeak Gym App"
        height={size.width >= 1280 ? 578.03 : 190.32}
        width={size.width >= 1280 ? 770.71 : 253.76}
      />

      {/* Project Detail and Overview wrapper */}
      <div className="project_detail_overview_wrapper">
        {/* Project Detail Wrapper */}
        <section className="project_detail_wrapper" id="project-detail-wrapper">
          <ProjectDetail
            title="Duration"
            description="Approximately 1 and a half month"
            size={size}
          />
          <ProjectDetail
            title="Technologies"
            description="Axure RP 9"
            size={size}
          />
          <ProjectDetail
            title="Market/Audience"
            description="People who would love to work out right at their comfy home with highly curated exercise programs."
            size={size}
          />

          <div>
            <p
              className={`${
                size.width >= 1280
                  ? "desktop-heading-small"
                  : "mobile-heading-small"
              } external_p`}
            >
              Prototype
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gx3cyw.axshare.com/#id=ogf1rq&p=login_page"
              className={`${
                size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
              } external_a`}
            >
              Click here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={size.width > 1280 ? 25 : 22}
                width={size.width > 1280 ? 25 : 22}
                className="external_icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Overview */}
        <section id="overview">
          <Overview
            primary_content="Gym, a place that a hundred percent pops up in everyone’s mind when fitness and muscles are the topic of the conversations."
            secondary_content="I’m also a gym enthusiast and like everyone else the goal is to put lean mass on the muscles. So since the gym is a social service place, it apparently needs a management system or an app to govern and manage customer memberships alongside all the activities that happen at the gym. As a gym goer and a student studying technology at the university, I have always been excited to have a chance to build a management system, or at least according to my current preference, develop UI for a gym app. And hooray a course at university asked to build a prototype for a mobile home gym app."
          />
        </section>
      </div>

      {/* Process */}
      <section id="process">
        <Process size={size}>
          {/* First  */}
          <ProcessCard
            content="As a guy following a front-end career, it is natural for me to be curious about UI/UX. Besides training myself to efficiently code based on the various designed web pages on the Internet, I have also made some explorations of prototyping and I must say I fell in love right away with the whole process of it. I love to see how visually-appealing user interfaces are made from the early stages (putting texts, visual elements onto the screen and mixing colors) and watch the progress of transforming messy ideas into a neat and actual product."
            imageURL="LifePeak4.png"
            row_reverse={false}
            expanded_image_container={true}
          />

          {/* Second */}
          <ProcessCard
            content="The whole prototyping thing did not really fit with me at first to be honest. I struggled a lot in finding inspirations, learning how to use the prototyping tool and a bunch of other things to take care of. As a general fact, panic is not a friend in any situation so I started to take baby steps by choosing 3 gym app designs on Dribbble as my inspiration sources. I then had to go through a long and tiring collection of tutorial videos of Axure to get to know how this tool operates. The remaining steps are choosing the color scheme, font, and everything that the “designing process” requires. "
            imageURL="LifePeak5.png"
            row_reverse={true}
            expanded_image_container={false}
          />

          {/* Third */}
          <ProcessCard
            content="The journey of reaching completion for this prototype was such an emotional rollercoaster, but mostly fun. Devastated then joyful, demotivated then motivated, are how I have been through and for that I deeply appreciate the effort of those real designers out there who made it through the dark period called “out of idea”. Obviously, after successfully creating a prototype, I unlocked a new personal achievement. I honed my skills in designing, raised my aesthetics instinct and sharpened my intuition of recognizing a sleek design. The one thing that completely caught me off guard during the process was I did not expect making animations was so difficult. It requires perfect timing and skillful animation arrangement. Sometimes the animation I had in mind turned out completely bad when applied to reality and I bursted out laughing at how bad my imagination was. "
            imageURL="LifePeak3.png"
            row_reverse={false}
            expanded_image_container={false}
          />
        </Process>
      </section>

      {/* Takeaways */}
      <section id="takeaways">
        <TakeAways />
      </section>

      <section id="want-more">
        <WantMore href="/ecovani" />
      </section>
    </React.Fragment>
  );
};

export default LifePeak;
