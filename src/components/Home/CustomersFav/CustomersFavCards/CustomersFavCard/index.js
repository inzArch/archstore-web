import React from 'react';
import './index.css';

const CustomersFavCard = ({cardDetail:{img,logo,name,description}}) => {
  return (
    <div className='CustomersFavCard'>
        <div className="CustomersFavCard-top-img-section">
          <img src={logo} alt="logo" />
          <img src={img} alt="main" />
        </div>
        <div className="CustomersFavCard-bottom-content">
          <p>Arcmchair</p>
          <p>Lorem ipsum dolor sit amet, conseasstetur adipderiscing elit.</p>
        </div>
    </div>
  )
}

export default CustomersFavCard