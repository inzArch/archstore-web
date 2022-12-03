import React from 'react';
import './index.css';
import MyMoodBoardIcon from 'assets/images/home/moodboard/MyMoodBoardIcon.svg';
import { MyMoodBoardData } from './MyMoodBoardData';

const MyMoodBoard = () => {
  return (
    <div className='MyMoodBoard-container'>
        <p className='MyMoodBoard-heading'>My MoodBoard</p>
        <div className="MyMoodBoard-cards">
            {
                MyMoodBoardData.map((MoodBoard)=>(
                    <div className="MyMoodBoard-card">
                        <img src={MoodBoard.img} alt="residence" />
                        <p>{MoodBoard.name}</p>
                    </div>
                ))
            }
            <div className="MyMoodBoard-card">
                <img src={MyMoodBoardIcon} alt="residence" />
                <p>+ Create New</p>
            </div>
        </div>
    </div>
  )
}

export default MyMoodBoard