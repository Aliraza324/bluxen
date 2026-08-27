import React from "react";
import Loader from "./Loader";

/**
 * PageLoader Component
 * Designed for full-page transitions, route loading, and initial app bootstrap.
 */
const PageLoader = ({
  isLoading = true,
  onComplete,
  minDuration = 1800,
  message = "Curating Exceptional Living",
}) => {
  return (
    <Loader
      isLoading={isLoading}
      onComplete={onComplete}
      minDuration={minDuration}
      message={message}
    />
  );
};

export default PageLoader;
