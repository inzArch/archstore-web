import React from 'react';
import CustomersFavCards from './CustomersFavCards';
import './index.css';

const CustomersFav = () => {
  return (
    <div className="customersFav-outerContainer">
        <div className='customersFav-container'>
            <div className="customersFav-heading">
                <h1>Customer’s Favourites</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="customersFav-categories">
              <span>Living Room</span>
              <span>Bath Room</span>
              <span>Bedroom</span>
              <span>Office</span>
              <span>Outdoor</span>
              <span>Kitchen</span>
              <span>Planters</span>
              <span>Fabric</span>
            </div>
            <div className="customersFav-type-options">
              <span>Latest</span>
              <span>Best Sellers</span>
              <span>Trending</span>
              <span>Events</span>
              <span>Stories</span>
            </div>
            <CustomersFavCards />
            <div className='CustomersFav-viewall-btn'>
              <button>View All</button>
            </div>
        </div>
    </div>
  )
}

export default CustomersFav