import React from 'react';
import SideBar from './SideBar';
import FAQQuestions from './FAQQuestions';
import './index.css';
const FAQ = () => {
  return (
    <div className='faq-section'>
        <SideBar />
        <FAQQuestions />
    </div>
  )
}

export default FAQ