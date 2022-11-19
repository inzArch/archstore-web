import React, { useContext } from 'react';
import Logo from '../../assets/images/header/Logo_Blue.svg';
import MenuContent from './MenuContent.js';
import { Bell, Heart, Profile } from './MenuContent.js';
import MenuIcon from '../../assets/images/header/MenuIcon.svg';
import './index.css';
import SubHeader from './SubHeader';

import { MenuItemActiveStatusContext } from '../../pages/Home';

const Header = () => {
	const { setActiveMenuItem } = useContext(MenuItemActiveStatusContext);

	return (
		<nav className='main-header-container'>
			<div className='header-container'>
				<div className='header-logo-section'>
					<img className='header-menu-icon' src={MenuIcon} alt='' />
					<img src={Logo} alt='logo' />
				</div>
				<div className='header-menu-items'>
					{MenuContent.map((content, i) => (
						<div
							className='header-menu-item'
							onMouseOver={() => setActiveMenuItem(content.name)}
						>
							<img src={content.img} alt='livingroom' />
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
