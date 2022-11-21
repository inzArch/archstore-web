import React, { useState, createContext } from 'react';
import CustomersFav from '../../components/Home/CustomersFav';
import Header from '../../components/Header';
import HomeCarousel from '../../components/Home/HomeCarousel';
import HowItWorks from '../../components/Home/HowItWorks';
import Brands from '../../components/Home/Brands';
import './index.css';
import Subscribe from '../../components/Home/Subscribe';
import Footer from '../../components/Footer';
import Magazines from '../../components/Home/Magazines';
import MegaMenu from '../../components/Header/MegaMenu';

export const MenuItemActiveStatusContext = createContext(null);

const Home = () => {
	const [activeMenuItem, setActiveMenuItem] = useState(null);

	return (
		<MenuItemActiveStatusContext.Provider
			value={{ activeMenuItem, setActiveMenuItem }}
		>
			<div className='Home-container'>
				<Header />
				<MegaMenu />
				<HomeCarousel />
				<HowItWorks />
				<CustomersFav />
				<Brands />
				<Magazines />
				<Subscribe />
				<Footer />
			</div>
		</MenuItemActiveStatusContext.Provider>
	);
};

export default Home;
