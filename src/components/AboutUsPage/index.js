import React from "react";
import "./index.css";
import VideoWrapper from "./VideoWrapper";
import UserStatistics from "./UserStatistics";
import PercentageOfSubscribers from "./PercentageOfSubscribers";
import AboutUsandBrands from "./AboutUsAndBrands";
const AboutUsPage = () => {
  return (
    <div className="about-us">
      <VideoWrapper />
      <UserStatistics />
      <PercentageOfSubscribers/>
      <AboutUsandBrands />
    </div>
  );
};

export default AboutUsPage;
