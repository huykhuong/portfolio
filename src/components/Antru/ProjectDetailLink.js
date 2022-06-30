import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const ProjectDetailLink = ({ title, href }) => {
  const size = useWindowSize();
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`${
        size.width >= 1280 ? "desktop-body-large" : "mobile-body-large"
      } external_a`}
    >
      {title}
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
  );
};

export default ProjectDetailLink;
