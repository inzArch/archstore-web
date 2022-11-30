import React from 'react';
import './index.css';
import DownArrowIcon from '../../../assets/images/About Us Page/VideoWrapper/down-arrow.png';


const AboutUsCommunity = () => {
  return (
    <div className='about-us-community'>
        <div className='about-us-community-content'>
        <div className='about-us-community-image'>
          <img
            src="https://business.archiproducts.com/wp-content/uploads/2022/06/02-Utenti@2x-2.png"
            />
       </div>
    <div className='about-us-community-details'>
    <h2>
    A community of brands and professionals that is growing every day
    </h2>
    <p>
    Designers, Architects, Interior Designers, Decorators, Lighting Designers, Outdoor Designers, Industrial Designers, Retailers, Distributors, Agents, and Specialised Companies. Our Community is a professional melting pot.
    </p>
    <p>A constantly growing network of 3.7 million registered passionate and interested users with international profiles.</p>
    <button className='d-flex align-items-center justify-content-center'>
      <span>REQUEST MEDIA KIT</span>
      <span><img className='right-arrow-white' src={DownArrowIcon}/></span>
    </button>
  </div>
        </div>
    </div>
  )
}

export default AboutUsCommunity