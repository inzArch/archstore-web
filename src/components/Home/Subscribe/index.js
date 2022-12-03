import React from 'react';
import './index.css';
const SubscribeBgImg = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/Subscribe.407a3b70a74baf1c92c2.png";

const Subscribe = () => {
  return (
    <div className='Subscribe-outer-container'>
    <div className='Subscribe-container'>
        <div className="Subscribe-content-section">
            <h1>Subscribe to our newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <div className="Subscribe-input-section">
                <input type="text" placeholder='Your Email' />
                <button>Submit</button>
            </div>
        </div>
        <img src={SubscribeBgImg} alt="subscribe" />
    </div>
    </div>
  )
}

export default Subscribe