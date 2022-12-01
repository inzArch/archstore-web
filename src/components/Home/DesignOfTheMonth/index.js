import React from 'react';
import "./index.css";
import DesignOfTheMonthImage1 from "assets/images/home/DesignOfTheMonth/DOTM1.png";
import DesignOfTheMonthImage2 from "assets/images/home/DesignOfTheMonth/DOTM2.png";
import DesignOfTheMonthImage3 from "assets/images/home/DesignOfTheMonth/DOTM3.png";
import DesignOfTheMonthImage4 from "assets/images/home/DesignOfTheMonth/DOTM4.png";
import DesignOfTheMonthImage5 from "assets/images/home/DesignOfTheMonth/DOTM5.svg";

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