import React from "react";
import Overview from "../components/LifePeak/Overview";
import Process from "../components/LifePeak/Process";
import TakeAways from "../components/LifePeak/TakeAways";
import FeaturedImage from "../components/ReusableComponents/ProjectDetailPage/FeaturedImage";
import ProjectDetail from "../components/ReusableComponents/ProjectDetailPage/ProjectDetail";
import WantMore from "../components/ReusableComponents/ProjectDetailPage/WantMore";
import { useWindowSize } from "../hooks/useWindowSize";
import classes from "./LifePeak.module.css";

const LifePeak = () => {
  const size = useWindowSize();

  return (
    <React.Fragment>
      {/* Featured Image */}
      <FeaturedImage
        imageURL="/LifePeak2.png"
        imageName="life-peak-featured-image"
      />

      {/* Project Title */}
      <h1
        className={`${
          size.width >= 1280
            ? "desktop-heading-xlarge"
            : "mobile-heading-xlarge"
        } ${classes.project_title}`}
      >
        LifePeak Gym App
      </h1>

      {/* Project Detail and Overview wrapper */}
      <div>
        {/* Project Detail Wrapper */}
        <section id="lifepeak-project-detail-wrapper">
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
              } ${classes.external_p}`}
            >
              Prototype
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gx3cyw.axshare.com/#id=ogf1rq&p=login_page"
              className={`${
                size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
              } ${classes.external_a}`}
            >
              Click here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={22}
                width={22}
                className={classes.external_icon}
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
        <section id="lifepeak-overview">
          <Overview size={size} />
        </section>
      </div>

      {/* Process */}
      <section id="lifepeak-process">
        <Process size={size} />
      </section>

      {/* Takeaways */}
      <section id="lifepeak-takeaways">
        <TakeAways />
      </section>

      <section>
        <WantMore href="/ecovani" />
      </section>
    </React.Fragment>
  );
};

export default LifePeak;
