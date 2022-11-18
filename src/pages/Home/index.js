import React from 'react';
import CustomersFav from '../../components/Home/CustomersFav';
import Header from '../../components/Header';
import HomeCarousel from '../../components/Home/HomeCarousel';
import HowItWorks from '../../components/Home/HowItWorks';
import './index.css';

const Home = () => {
  return (
    <div className='Home-container'>
        <Header />
        <HomeCarousel />
        <HowItWorks />
        <CustomersFav />
    </div>
  )
}

export default Home