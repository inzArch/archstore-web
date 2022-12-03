import React from 'react';
import './index.css';
import CustomersFav from '../../components/Home/CustomersFav';
import HomeCarousel from '../../components/Home/HomeCarousel';
import HowItWorks from '../../components/Home/HowItWorks';
import Brands from '../../components/Home/Brands';
import Subscribe from '../../components/Home/Subscribe';
import Magazines from '../../components/Home/Magazines';
import WeeklyTrendsCarousel from '../../components/Home/WeeklyTrendsCarousel';
import TrendingMoodBoards from '../../components/Home/TrendingMoodBoards';
import DesignOfTheMonth from '../../components/Home/DesignOfTheMonth';


const Home = () => {

	return (
			<div className='Home-container'>
				<HomeCarousel />
				<HowItWorks />
				<CustomersFav />
				<WeeklyTrendsCarousel />
				<TrendingMoodBoards />
				<DesignOfTheMonth />
				<Magazines />
				<Brands />
				<Subscribe />
			</div>
	);
};

export default Home;
