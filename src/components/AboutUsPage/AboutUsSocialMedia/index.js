import React from 'react';
import './index.css';
import LeftArrowIcon from '../../../assets/images/home/carousel/left-arrow-icon.png';


const AboutUsSocialMedia = () => {
  return (
    <div className='about-us-social-media'>
    <div className='about-us-social-media-details'>
    <h2>
    Let’s get Social with our 5.4 million followers
    </h2>
    <p>
    Our social media community counts over 5 million users worldwide, 
    reaching out to us through the Archiproducts and Archilovers official accounts on Facebook, 
    Instagram, Pinterest and Twitter.
    </p>
    <button className='d-flex align-items-center justify-content-center'>
      <span>REQUEST MEDIA KIT</span>
      <span><img className='right-arrow' src={LeftArrowIcon} /></span>
    </button>
  </div>
  <div className='d-flex about-us-social-media-image'>
    <img
      src="https://business.archiproducts.com/wp-content/uploads/2022/04/04-2204-Social@2x.png"
    />
    {/* <img src='https://business.archiproducts.com/wp-content/uploads/2022/02/Social-page-hands@2x.png' /> */}
  </div>
  </div>
  )
}

export default AboutUsSocialMedia