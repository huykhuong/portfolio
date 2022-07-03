import React from "react";
import { Helmet } from "react-helmet";
import ProcessAndTakeaways from "../components/Antru/ProcessAndTakeaways";
import ProjectDetailLink from "../components/Antru/ProjectDetailLink";
import IntroSection from "../components/ReusableComponents/ProjectDetailPage/IntroSection";
import Overview from "../components/ReusableComponents/ProjectDetailPage/Overview";
import ProjectDetail from "../components/ReusableComponents/ProjectDetailPage/ProjectDetail";
import WantMore from "../components/ReusableComponents/ProjectDetailPage/WantMore";
import { useWindowSize } from "../hooks/useWindowSize";

const AnTru = () => {
  const size = useWindowSize();

  return (
    <React.Fragment>
      <Helmet>
        <title>Junius Khuong - An Tru Restaurant</title>
      </Helmet>

      <IntroSection
        imageURL="/Antru8.png"
        imageName="antru"
        project_name="An Trú Restaurant"
        height={size.width >= 1280 ? 519.44 : 190.32}
        width={size.width >= 1280 ? 778.09 : 253.76}
      />

      {/* Project Detail and Overview wrapper */}
      <div className="project_detail_overview_wrapper">
        {/* Project Detail Wrapper */}
        <section className="project_detail_wrapper" id="project-detail-wrapper">
          <ProjectDetail
            title="Duration"
            description="4 and a half months"
            size={size}
          />
          <ProjectDetail
            title="Technologies"
            description="ReactJS, NextJS, Firebase, CSS, TailwindCSS, Animation Libraries, Vercel "
            size={size}
          />
          <ProjectDetail
            title="Market/Audience"
            description="For visitors of the restaurant on the Internet"
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
              Links
            </p>

            <ProjectDetailLink
              title="Second Version"
              href="https://an-tru-2.vercel.app/"
            />

            <ProjectDetailLink
              title="Third Version"
              href="https://antru-final.vercel.app/"
            />
          </div>
        </section>

        {/* Overview */}
        <section id="overview">
          <Overview
            primary_content="A project for a friend’s business, An Tru is a start-up restaurant that is planned to be opened early next year."
            secondary_content="During this time of health crisis, An Tru’s main purpose is to guide people to vegetarian foods because the “greens” are, without a doubt, always have better impacts on health than animal meats. As soon as I completed my time at university last December, my friend contacted me and I got offered a chance to create a first “real” website for them. The project took quite a long time, from January to May because I had to produce 3 versions of it."
          />
        </section>
      </div>

      <section id="process-and-takeaways">
        <ProcessAndTakeaways />
      </section>

      <section id="want-more">
        <WantMore href="/airbnb" />
      </section>
    </React.Fragment>
  );
};

export default AnTru;
