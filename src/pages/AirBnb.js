import React from "react";
import { Helmet } from "react-helmet";
import ProcessAndTakeaways from "../components/Airbnb/ProcessAndTakeaways";
import IntroSection from "../components/ReusableComponents/ProjectDetailPage/IntroSection";
import Overview from "../components/ReusableComponents/ProjectDetailPage/Overview";
import ProjectDetail from "../components/ReusableComponents/ProjectDetailPage/ProjectDetail";
import WantMore from "../components/ReusableComponents/ProjectDetailPage/WantMore";
import { useWindowSize } from "../hooks/useWindowSize";

const AirBnb = () => {
  const size = useWindowSize();

  return (
    <React.Fragment>
      <Helmet>
        <title>Junius Khuong - Airbnb</title>
      </Helmet>

      <IntroSection
        imageURL="/Airbnb2.png"
        imageName="airbnb"
        project_name="AirBnB Clone"
        height={size.width >= 1280 ? 519.44 : 190.32}
        width={size.width >= 1280 ? 778.09 : 253.76}
      />

      {/* Project Detail and Overview wrapper */}
      <div className="project_detail_overview_wrapper">
        {/* Project Detail Wrapper */}
        <section className="project_detail_wrapper" id="project-detail-wrapper">
          <ProjectDetail title="Duration" description="2 days" size={size} />
          <ProjectDetail
            title="Technologies"
            description="ReactJS, NextJS, CSS, TailwindCSS, Mapbox, Vercel"
            size={size}
          />
          <ProjectDetail
            title="Market/Audience"
            description="For practicing purpose"
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
              href="https://airbnb-clone-nu-ecru.vercel.app/"
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
            primary_content="Cloning, the best way to practice a skill, using a successful product in the market as a reference and trying to build a copy exactly like it can dramatically enhance one’s skills in any field. "
            secondary_content="And this technique is used widely in programming. There is a channel on Youtube named Sonny Sangha and the guy really nailed his programming tutorial videos. I learnt a lot by watching him. He clones lots of prestigious websites and AirBnB is one of those."
          />
        </section>
      </div>

      <section id="process-and-takeaways">
        <ProcessAndTakeaways />
      </section>

      <section id="want-more">
        <WantMore href="/lifepeak" />
      </section>
    </React.Fragment>
  );
};

export default AirBnb;
