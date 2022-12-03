import React, { useContext, useCallback } from 'react';
import MenuContent from './MenuContent.js';
import { Bell, Heart, Profile } from './MenuContent.js';
import MenuIcon from 'assets/images/header/MenuIcon.svg';
import './index.css';
import SubHeader from './SubHeader';

import { MenuItemActiveStatusContext } from 'pages/Home';

const Header = () => {
	const { activeMenuItem, setActiveMenuItem } = useContext(
		MenuItemActiveStatusContext
	);
	const mouseOverHandler = useCallback(name_ => {
		setActiveMenuItem(name_);
		const { colors } = MenuContent.find(({ name }) => name === name_);
		const root = document.documentElement;

		for (let [k, v] of Object.entries(colors)) {
			root.style.setProperty(`--${k}-color`, v);
		}
	}, [setActiveMenuItem]);

	return (
		<nav className='main-header-container'>
			<div className='header-container'>
				<div className='header-logo-section'>
					<img className='header-menu-icon' src={MenuIcon} alt='' />
					<img src={"https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/Logo_Blue.png"} alt='logo' />
				</div>
				<div className='header-menu-items'>
					{MenuContent.map((content, i) => (
						<div
							className={`header-menu-item ${
								activeMenuItem === content.name
									? 'opacity-100'
									: 'opacity-75'
							}`}
							onMouseOver={() => mouseOverHandler(content.name)}
						>
							<img src={content.icon} alt='livingroom' />
							<p>{content.name}</p>
						</div>
					))}
				</div>
				<div className='header-options-section'>
					<div className='header-buttons-section'>
						<img src={Profile} alt='profile' />
						<img src={Bell} alt='bell' />
						<img src={Heart} alt='heart' />
					</div>
					<button>Login</button>
				</div>
			</div>
			<SubHeader />
		</nav>
	);
};

export default Header;
