import React from "react";
import "./index.css";
import VideoWrapper from "./VideoWrapper";
import UserStatistics from "./UserStatistics";
import PercentageOfSubscribers from "./PercentageOfSubscribers";
import AboutUsandBrands from "./AboutUsAndBrands";
import AboutUsCommunity from "./AboutUsCommunity";
import AboutUsSocialMedia from "./AboutUsSocialMedia";
import AboutUsTestimonials from "./AboutUsTestimonials";
import RequestMediaKit from "./RequestMediaKit";
const AboutUsPage = () => {
  return (
    <div className="about-us">
      <VideoWrapper />
      <UserStatistics />
      <PercentageOfSubscribers/>
      <AboutUsCommunity />
      <AboutUsSocialMedia />
      <AboutUsandBrands />
      <AboutUsTestimonials />
      <RequestMediaKit />
    </div>
  );
};

export default AboutUsPage;
