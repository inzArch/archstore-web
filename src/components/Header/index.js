<<<<<<< HEAD
import React, { useCallback, useContext } from 'react';
import Logo from '../../assets/images/header/Logo_Blue.svg';
=======
import React, { useContext } from 'react';
import Logo from '../../assets/images/header/Logo_Blue.png';
>>>>>>> 095bcd84ff551070da7e71ba4815c8c797eca4af
import MenuContent from './MenuContent.js';
import { Bell, Heart, Profile } from './MenuContent.js';
import MenuIcon from '../../assets/images/header/MenuIcon.svg';
import './index.css';
import SubHeader from './SubHeader';

import { MenuItemActiveStatusContext } from '../../pages/Home';

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
	}, []);

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
