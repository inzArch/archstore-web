import React from 'react';
import './index.css';
// import topLeaf from 'assets/images/home/moodboard/topLeaf.svg';
// import bottomLeaf from 'assets/images/home/moodboard/bottomLeaf.svg';
import { MoodBoardContent } from './MoodBoardContent.js';
import MyMoodBoard from './MyMoodBoard';

const MoodBoard = () => {
  return (
    <div className='moodboard-container'>
      <div className="moodboard">
        <img src={MoodBoardContent.topLeaf} alt="top leaf" className="topLeaf" />
        <img src={MoodBoardContent.bottomLeaf} alt="bottom leaf" className="bottomLeaf" />
        <span>+ Create New Moodboard</span>
      </div>
        {/* <MyMoodBoard /> */}
    </div>
  )
}

export default MoodBoard