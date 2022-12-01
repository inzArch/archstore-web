import React from "react";
import "./index.css";
import VideoWrapper from "./VideoWrapper";
import UserStatistics from "./UserStatistics";
import PercentageOfSubscribers from "./PercentageOfSubscribers";
import AboutUsandBrands from "./AboutUsAndBrands";
import AboutUsCommunity from "./AboutUsCommunity";
import AboutUsSocialMedia from "./AboutUsSocialMedia";
const AboutUsPage = () => {
  return (
    <div className="about-us">
      <VideoWrapper />
      <UserStatistics />
      <PercentageOfSubscribers/>
      <AboutUsandBrands />
      <AboutUsCommunity />
      <AboutUsSocialMedia />
    </div>
  );
};

export default AboutUsPage;
