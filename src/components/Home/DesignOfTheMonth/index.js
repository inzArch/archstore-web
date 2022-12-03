import React from 'react';
import "./index.css";
const DesignOfTheMonthImage1 = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/DOTM1.659302aac1ee5e6dfa96.png";
const DesignOfTheMonthImage2 = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/DOTM2.6b071460e0e72dddeb79.png";
const DesignOfTheMonthImage3 = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/DOTM3.895c13e89b9871319ce7.png";
const DesignOfTheMonthImage4 = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/DOTM4.014bda36ad7224899045.png";
const DesignOfTheMonthImage5 = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/DOTM5.40f678591d5d8754a24710a1974b3121.svg";

const DesignOfTheMonth = () => {
  return (
    <div className='design-of-the-month-container'>
        <div className='design-of-the-month-details'>
        <h1>DESIGN OF THE MONTH</h1>
        <h3>Orgatec 2022 Special</h3>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
        <p>- by Rishi Saxena</p>
        <button>Discover More <img src={DesignOfTheMonthImage5} alt="discover more" /></button>
        </div>
        <div className='design-of-the-month-card'>
            <div className='design-of-the-month-item'><img src={DesignOfTheMonthImage1} alt="design"></img></div>
            <div className='design-of-the-month-item'>
            <div className='design-of-the-month-img'><img src={DesignOfTheMonthImage2} alt="design"></img></div>
            <div className='design-of-the-month-img'><img src={DesignOfTheMonthImage3} alt="design"></img></div>
            <div className='design-of-the-month-img'><img src={DesignOfTheMonthImage4} alt="design"></img></div>
            </div>
        </div>
    </div>
  )
}

export default DesignOfTheMonth