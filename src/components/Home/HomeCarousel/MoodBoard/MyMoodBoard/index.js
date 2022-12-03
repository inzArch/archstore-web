import React from 'react';
import './index.css';
import { MyMoodBoardData } from './MyMoodBoardData.js';
const MyMoodBoardIcon = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/MyMoodBoardIcon.89ca0e04e01e26d7acaacf43a037f197.svg";


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