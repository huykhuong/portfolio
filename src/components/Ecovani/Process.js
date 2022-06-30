import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const Process = ({ children }) => {
  const size = useWindowSize();
  return (
    <div className="process_container">
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
      {children}
    </div>
  );
};

export default Process;
