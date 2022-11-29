import React from 'react';
import './index.css';
import LeftArrowIcon from '../../../assets/images/home/carousel/left-arrow-icon.png';


const AboutUsandBrands = () => {
  return (
    <div className='about-us-and-brands'>
    <div className='about-us-and-brands-image'>
    <img
      src="https://business.archiproducts.com/wp-content/uploads/2022/09/06-Brands@2x.png"
    />
  </div>
    <div className='about-us-and-brands-details'>
    <h2>
    We team up with 3,000 brands worldwide
    </h2>
    <p>
    We partner with and assist brands to boost their visibility and reach the right target with the right product at the right time.
    </p>
    <button className='d-flex align-items-center justify-content-center'>
      <span>REQUEST MEDIA KIT</span>
      <span><img className='right-arrow' src={LeftArrowIcon} /></span>
    </button>
  </div>

  </div>
  )
}

export default AboutUsandBrands