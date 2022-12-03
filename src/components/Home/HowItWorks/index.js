import React from 'react';
// import CreateMoodBoardImg from 'assets/images/home/howitworks/CreateMoodBoardImg.png';
// import InspirationsImg from 'assets/images/home/howitworks/InspirationsImg.png';
// import OrderProductsImg from 'assets/images/home/howitworks/OrderProductsImg.png';
// import ConnectVendorsImg from 'assets/images/home/howitworks/ConnectVendorsImg.png';
// import HowItWorksImg from 'assets/images/home/howitworks/HowItWorksImg.png';
import './index.css';
import { HowItWorksData } from './HowItWorksData.js';

const HowItWorks = () => {
  return (
    <div className='howitworks-container'>
        <div className="howitworks-contents">
            <div className="howitworks-leftSection">
                <img src={ HowItWorksData.HowItWorksImg} alt="how it works" />
            </div>
            <div className="howitworks-rightSection">
                <div className="howitworks-headings">
                    <h1>How it works</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className="howitworks-rightSection-cards">
                    <div className="howitworks-card">
                        <div className="howitworks-card-header">
                            <img src={ HowItWorksData.CreateMoodBoardImg} alt="create mood board" />
                            <p>Create Moodboard</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="howitworks-card">
                        <div className="howitworks-card-header">
                            <img src={ HowItWorksData.InspirationsImg} alt="create mood board" />
                            <p>Add Inspirations</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="howitworks-card">
                        <div className="howitworks-card-header">
                            <img src={ HowItWorksData.ConnectVendorsImg} alt="create mood board" />
                            <p>Connect with vendors</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="howitworks-card">
                        <div className="howitworks-card-header">
                            <img src={ HowItWorksData.OrderProductsImg} alt="create mood board" />
                            <p>Order Products</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks