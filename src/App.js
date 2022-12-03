import './App.css';
import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from 'components/Footer';
export const MenuItemActiveStatusContext = createContext(null);

function App() {
	const [activeMenuItem, setActiveMenuItem] = useState(null);
	return (
		<MenuItemActiveStatusContext.Provider
		value={{ activeMenuItem, setActiveMenuItem }}
	>
		<div className='main-page-container'>
			<Header />
			<Outlet />
			<Footer />
		</div>
		</MenuItemActiveStatusContext.Provider>
	);
}

export default App;
