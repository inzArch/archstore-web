import React from "react";
import "./index.css";

import { EmblaCarousel } from "../../EmblaCarousel";
import Autoplay from 'embla-carousel-autoplay';

const LeftArrowIcon =  "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/left-arrow-icon.png";

const brandURL =
  "https://business.archiproducts.com/wp-content/uploads/2019/09/";
const brands = [
  { brandImg: "DePadova.svg" },
  { brandImg: "diabla.svg" },
  { brandImg: "Duravit.svg" },
  { brandImg: "DePadova.svg" },
  { brandImg: "Flos.svg" },
  { brandImg: "Duravit.svg" },
  { brandImg: "diabla.svg" },
  { brandImg: "Flos.svg" },
  { brandImg: "Glas.svg" },
  { brandImg: "Grohe.svg" },
  { brandImg: "Glas.svg" },
  { brandImg: "Grohe.svg" },
];

const AboutUsandBrands = () => {
  return (
    <>
      <div className="about-us-and-brands">
        <div className="about-us-and-brands-image">
          <img src="https://business.archiproducts.com/wp-content/uploads/2022/09/06-Brands@2x.png" />
        </div>
        <div className="about-us-and-brands-details">
          <h2>We team up with 3,000 brands worldwide</h2>
          <p>
            We partner with and assist brands to boost their visibility and
            reach the right target with the right product at the right time.
          </p>
          <button className="d-flex align-items-center justify-content-center">
            <span>REQUEST MEDIA KIT</span>
            <span>
              <img className="right-arrow" src={LeftArrowIcon} />
            </span>
          </button>
        </div>
      </div>
      <div className="about-us-and-brands-carousel">
        <EmblaCarousel
          hideControls
          dragFree
          plugins={[
            Autoplay({
              delay: 3000,
              playOnInit: true,
              stopOnInteraction: false,
            }),
          ]}
        >
          {brands.map(({ brandImg }, i) => (
            <div className="about-us-and-brands-carousel-card">
              <img src={brandURL + brandImg} />
            </div>
          ))}
        </EmblaCarousel>
      </div>
      <hr />
    </>
  );
};

export default AboutUsandBrands;
