import React from 'react';
import CustomersFav from '../../components/Home/CustomersFav';
import Header from '../../components/Header';
import HomeCarousel from '../../components/Home/HomeCarousel';
import HowItWorks from '../../components/Home/HowItWorks';
import Brands from '../../components/Home/Brands';
import './index.css';
import Subscribe from '../../components/Home/Subscribe';

const Home = () => {
	return (
		<div className='Home-container'>
			<Header />
			<HomeCarousel />
			<HowItWorks />
			<CustomersFav />
			<Brands />
			<Subscribe />
		</div>
	);
};

export default Home;
