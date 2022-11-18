import React from 'react';
import './index.css';
import topLeaf from '../../../../assets/images/moodboard/topLeaf.svg';
import bottomLeaf from '../../../../assets/images/moodboard/bottomLeaf.svg';

const MoodBoard = () => {
  return (
    <div className='moodboard-container'>
      <div className="moodboard">
        <img src={topLeaf} alt="top leaf" className="topLeaf" />
        <img src={bottomLeaf} alt="bottom leaf" className="bottomLeaf" />
        <span>+Create New Moodboard</span>
      </div>
    </div>
  )
}

export default MoodBoard