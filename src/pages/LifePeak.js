import React from "react";
import FeaturedImage from "../components/ReusableComponents/ProjectDetailPage/FeaturedImage";
import ProjectDetail from "../components/ReusableComponents/ProjectDetailPage/ProjectDetail";
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
          <ProjectDetail title="Prototype" description="Click here" size={size}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              width={24}
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
          </ProjectDetail>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LifePeak;
