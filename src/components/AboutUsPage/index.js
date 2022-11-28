import React from "react";
import "./index.css";

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <div className="video-wrapper">
        <video autoPlay loop muted id="video">
          <source
            src="https://business.archiproducts.com/wp-content/uploads/2022/02/Comp-1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-footer">
          <svg
            viewBox="0 0 1920 119.18"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  fill="#fff"
                  class="cls-1"
                  d="M 1919.853 64.195 L 1920.037 119.453 L 0.078 119.271 L -0.178 63.889 L -0.205 64.018 C 323.756 97.143 645.91 117.953 966.259 117.82 C 1286.607 117.953 1590.191 96.168 1919.771 64.129 L 1919.816 64.062"
                ></path>
                <g id="Layer_2-2" data-name="Layer 2">
                  <g id="Layer_1-2-2" data-name="Layer 1-2">
                    <path
                      fill="#fff"
                      class="cls-2"
                      fill-opacity="0.7"
                      d="M 1920.041 51.003 L 1919.82 64.097 C 1601.387 99.829 1280.095 118.013 959.335 117.973 C 638.574 118.013 318.768 99.951 0.044 63.873 L 0.008 36.899 L 0.02 36.998 C 317.299 78.157 638.094 98.944 959.228 99.231 C 1280.362 99.518 1602.879 78.143 1920.124 36.898 L 1920.041 51.003 Z"
                    ></path>
                    <path
                      fill="#fff"
                      class="cls-3"
                      fill-opacity="0.5"
                      d="M1920,0V37.1A7415.06,7415.06,0,0,1,960,99.3,7415.06,7415.06,0,0,1,0,37.1V0L4.83.88A5297.52,5297.52,0,0,0,960,87.3,5297.52,5297.52,0,0,0,1915.17.88Z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className="about-us-details">
          <span>Web traffic & Community </span>
          <h1>Our community and web traffic</h1>
          <p>
            Web traffic is the core of our online business. These are the
            numbers of those users that have made Archiproducts their daily
            destination.
          </p>
          <div className="about-us-stats d-flex">
            <div>
              <p>Sessions</p>
              <h1>40MLN</h1>
            </div>
            <div>
              <p>Pageviews</p>
              <h1>150MLN</h1>
            </div>
            <div>
              <p>Users</p>
              <h1>25MLN</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <h2 className="fs-1"
            style={{ width: "350px" }}
          >
            We are the online benchmark for 3.7 million registered users
          </h2>
          <h5 style={{  width: "350px" }}>
            The world is our playground. Every day, professionals from every
            continent join the network to remain updated on the latest and the
            finest in Architecture and Design worldwide.
          </h5>
        </div>
        <div>
          <img style={{marginLeft:'100px'}}
            src="https://business.archiproducts.com/wp-content/uploads/2022/02/01-Community@2x.png"
            width="800px"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
