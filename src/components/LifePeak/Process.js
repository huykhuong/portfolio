import React from "react";

const Process = ({ size, children }) => {
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
