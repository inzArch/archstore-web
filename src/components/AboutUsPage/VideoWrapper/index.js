import React from 'react';
import './index.css';
import TransparentVideoFooter from '../../../assets/images/About Us Page/VideoWrapper/transparentvideofooter.svg';
import DownArrowIcon from '../../../assets/images/About Us Page/VideoWrapper/down-arrow.png';
const VideoWrapper = () => {
  return (
    <div className="video-wrapper" style={{marginBottom:'120px'}}>
    <video autoPlay loop muted id="video" className='video'>
      <source
        src="https://business.archiproducts.com/wp-content/uploads/2022/02/Comp-1.mp4"
        type="video/mp4"
      />
    </video>
    <div className="video-footer">
      <img src={TransparentVideoFooter} />
    </div>

    <div className="about-us-details">
      <h5>Web traffic & Community</h5>
      <span className="border-dash"></span>
      <h1>Our community and web traffic</h1>
      <p>
        Web traffic is the core of our online business. These are the
        numbers of those users that have made Archiproducts their daily
        destination.
      </p>
      <div className="about-us-stats">
        <div className="statistics">
          <h3 className="text-center d-flex align-items-center justify-content-center">
            <span className="d-inline-block dash"></span>
            <span>SESSIONS</span></h3>
          <h1 >40MLN</h1>
        </div>
        <div className="statistics">
          <h3 className="text-center d-flex align-items-center justify-content-center">
            <span className="d-inline-block dash"></span>
            <span>PAGEVIEWS</span></h3>
          <h1>150MLN</h1>
        </div>
        <div className="statistics">
          <h3 className="text-center d-flex align-items-center justify-content-center">
            <span className="d-inline-block dash"></span>
            <span>USERS</span></h3>
          <h1 >25MLN</h1>
        </div>
      </div>
      <img src={DownArrowIcon}/>
    </div>
  </div>
  )
}

export default VideoWrapper