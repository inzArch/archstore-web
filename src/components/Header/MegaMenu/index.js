import './index.css';
import arrowRightIcon from '../../../assets/images/header/arrow-right.svg';
import arrowRightDarkIcon from '../../../assets/images/header/arrow-right-dark.svg';
import retailersIcon from '../../../assets/images/header/retailers.svg';
import designersIcon from '../../../assets/images/header/designers.svg';
import longRightArrowIcon from '../../../assets/images/header/long-right-arrow.svg';
import chairImg from '../../../assets/images/header/chair.svg';

import urbanLadderLogo from '../../../assets/images/header/urban-ladder-logo.svg';
import pepperfryLogo from '../../../assets/images/header/pepperfry-logo.svg';
import godrejInterioLogo from '../../../assets/images/header/godrej-interio-logo.svg';
import EvokLogo from '../../../assets/images/header/evok-logo.svg';

import MenuContent from '../MenuContent';
import { MenuItemActiveStatusContext } from '../../../pages/Home';
import { useContext, useState } from 'react';

export default function MegaMenu() {
	const [activeCategory, setActiveCategory] = useState(null);
	const { activeMenuItem, setActiveMenuItem } = useContext(
		MenuItemActiveStatusContext
	);

	if (!activeMenuItem) return null;

	const { categories } = MenuContent.find(
		({ name }) => name === activeMenuItem
	);

	return (
		<div className='megamenu-container'>
			<div
				className='megamenu-inner-container'
				onMouseLeave={() => setActiveMenuItem(null)}
			>
				<div className='megamenu-left'>
					<ul>
						{categories.map(({ name }, i) => (
							<li
								key={i}
								onMouseOver={() => setActiveCategory(name)}
								className={
									activeCategory === name ? 'active' : 'inactive'
								}
							>
								<span>{name}</span>
								<img
									src={arrowRightIcon}
									alt='Right arrow icon'
									className='arrow-icon-light'
								/>
								<img
									src={arrowRightDarkIcon}
									alt='Right arrow icon'
									className='arrow-icon-dark'
								/>
							</li>
						))}
					</ul>
					<div className='img-btn'>
						<span>
							<img src={retailersIcon} alt='Retailers Icon' />
						</span>
						<span>
							<span>Retailers</span>
							<span className='browse-all'>
								<span>Browse all</span>
								<img src={longRightArrowIcon} alt='Long Arrow Icon' />
							</span>
						</span>
					</div>

					<div className='img-btn'>
						<span>
							<img src={designersIcon} alt='Retailers Icon' />
						</span>
						<span>
							<span>Designers</span>
							<span className='browse-all'>
								<span>Browse all</span>
								<img src={longRightArrowIcon} alt='Long Arrow Icon' />
							</span>
						</span>
					</div>
				</div>
				<div className='megamenu-right'>
					<div className='mmt'>
						<div className='multi-col-container'>
							{(activeCategory
								? categories.find(({ name }) => name === activeCategory)
								: categories[0]
							).products.map(({ name }, i) => (
								<div key={i}>
									<a href='#'>{name}</a>
								</div>
							))}
						</div>
						<div className='img-container'>
							<img src={chairImg} alt='An Illustration' />
						</div>
					</div>
					<div className='mmb'>
						<h2>Brands</h2>
						<div className='mm-brand-logos'>
							{[
								EvokLogo,
								godrejInterioLogo,
								urbanLadderLogo,
								pepperfryLogo,
							].map((logoSrc, i) => (
								<img key={i} src={logoSrc} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
