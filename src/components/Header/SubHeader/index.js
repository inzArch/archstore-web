import React from 'react';
import './index.css';
import { SubHeaderOptions } from './SubHeaderOptions';
import DownArrow from 'assets/images/header/DownArrow.svg';
import Search from 'assets/images/header/search.svg';

const SubHeader = () => {
  return (
    <div className='subheader-container'>
      <div className="subheader-options">
        {SubHeaderOptions.map((option,i)=>(
          <span>{option.name}</span>
        ))}
      </div>
      <div className="subheader-searchbar-container">
          <div className="subheader-searchbar">
            <img src={Search} alt="search" />
            <input type="text" placeholder='Search' />
            <div className="subheader-dropdown">
              <span>{SubHeaderOptions[0].name}</span>
              <ul className="subheader-dropdown-items">
              {SubHeaderOptions.map((option,i)=>(
                  <li>{option.name}</li>
                ))}
              </ul>
              <img src={DownArrow} alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default SubHeader