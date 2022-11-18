import React from 'react';
import CreateMoodBoardImg from '../../../assets/images/home/howitworks/CreateMoodBoardImg.svg';
import InspirationsImg from '../../../assets/images/home/howitworks/InspirationsImg.svg';
import OrderProductsImg from '../../../assets/images/home/howitworks/OrderProductsImg.svg';
import ConnectVendorsImg from '../../../assets/images/home/howitworks/ConnectVendorsImg.svg';
import HowItWorksImg from '../../../assets/images/home/howitworks/HowItWorksImg.svg';
import './index.css';

const HowItWorks = () => {
  return (
    <div className='howitworks-container'>
        <div className="howitworks-contents">
            <div className="howitworks-leftSection">
                <img src={HowItWorksImg} alt="how it works" />
            </div>
            <div className="howitworks-rightSection">
                <div className="howitworks-headings">
                    <h1>How it works</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className="howitworks-rightSection-cards">
                    <div className="howitworks-card">
                        <div className="howitworks-card-header">
                            <img src={CreateMoodBoardImg} alt="create mood board" />
                            <p>Create Moodboard</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="howitworks-card">
                        <div className="howitworks-card-header">
                            <img src={InspirationsImg} alt="create mood board" />
                            <p>Add Inspirations</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="howitworks-card">
                        <div className="howitworks-card-header">
                            <img src={ConnectVendorsImg} alt="create mood board" />
                            <p>Connect with vendors</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="howitworks-card">
                        <div className="howitworks-card-header">
                            <img src={OrderProductsImg} alt="create mood board" />
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