import React from 'react';
import Cards from './TrendingCards';
import './index.css';
const TrendingMoodBoards = () => {
  return (
    <div className='trending-moodboards-container'>
      <div className='trending-moodboards-heading-container'>
            <div className="trending-moodboards-heading">
                <h1>TOP TRENDING MOODBOARDS <span></span></h1>
            </div>
            <div className='trending-moodboards-view-all-button'>
               <button>View All</button>
            </div> 
      </div>          
           <Cards />  
              
          <div className='trending-moodboards-view-all-button-responsive'>
               <button>View All</button>
          </div> 
    </div>
  )
}

export default TrendingMoodBoards