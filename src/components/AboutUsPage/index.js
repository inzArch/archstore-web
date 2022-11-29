import React from "react";
import "./index.css";
import VideoWrapper from "./VideoWrapper";
import UserStatistics from "./UserStatistics";
const AboutUsPage = () => {
  return (
    <div className="about-us">
      <VideoWrapper />
      <UserStatistics />
    </div>
  );
};

export default AboutUsPage;
