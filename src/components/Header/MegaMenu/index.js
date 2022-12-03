import './index.css';
import MenuContent from '../MenuContent';
import { MenuItemActiveStatusContext } from 'App.js';
import { useContext, useState } from 'react';

const EvokLogo = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/evok-logo.1d6324a83018f152d4f49dc4283c7eb5.svg";
const godrejInterioLogo = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/godrej-interio-logo.93160edd2de52dc89dff2be1c0c82ed6.svg";
const pepperfryLogo = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/pepperfry-logo.f387e992c49667949af1e7bf1d6100d5.svg";
const urbanLadderLogo = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/urban-ladder-logo.0d3382e8efd0a61399d0ac47d9b64761.svg";
const arrowRightIcon = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/arrow-right.acd632891a6a7552043e0b1ac1233bdc.svg";
const arrowRightDarkIcon = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/arrow-right-dark.5674e34f5ae487458385ce79798afb88.svg";
const longRightArrowIcon = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/long-right-arrow.59fe8229924a92779bde9a025cc7c2ad.svg";
const chairImg = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/chair.ee14c960a363857579ee60074b574a44.svg";
const designersIcon = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/designers.00452872acc1c18d119dcb34471af8bc.svg";
const retailersIcon = "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/retailers.00c10a2ffae6131f51ab0cf82c3e2753.svg";


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
