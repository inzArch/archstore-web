import React from 'react';
import './index.css';
const LeftArrowIcon =  "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/left-arrow-icon.png";
const UserStatistics = () => {
  return (
    <div className="user-statistics">
        <div className='user-statistics-details'>
          <h2>
            We are the online benchmark for 3.7 million registered users
          </h2>
          <p>
            The world is our playground. Every day, professionals from every
            continent join the network to remain updated on the latest and the
            finest in Architecture and Design worldwide.
          </p>
          <button className='d-flex align-items-center justify-content-center'>
            <span>REQUEST MEDIA KIT</span>
            <span><img className='right-arrow' src={LeftArrowIcon} /></span>
          </button>
        </div>
        <div className='user-statistics-image'>
          <img
            src="https://business.archiproducts.com/wp-content/uploads/2022/02/01-Community@2x.png"
          />
          <p>Increase in the number of registered users from 2010 to today</p>
        </div>
      </div>
  )
}

export default UserStatistics