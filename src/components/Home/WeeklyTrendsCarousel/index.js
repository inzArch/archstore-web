import { useState } from 'react';
import './index.css';

import rightArrowIcon from 'assets/images/header/arrow-right.svg';
import rArrowControlIcon from 'assets/images/home/WeeklyTrendsCarousel/r-arrow.svg';
import lArrowControlIcon from 'assets/images/home/WeeklyTrendsCarousel/l-arrow.svg';

import fancyKitchen from 'assets/images/home/WeeklyTrendsCarousel/fancy-kitchen.png';
import fancyLivingRoom from 'assets/images/home/WeeklyTrendsCarousel/fancy-living-room.png';
import fancyBlackKitchen from 'assets/images/home/WeeklyTrendsCarousel/fancy-black-kitchen.png';
import fancyBenchAccounting from 'assets/images/home/WeeklyTrendsCarousel/bench-accounting.png';

/*
	data --> Array<{ title: <string>, subtitle: <string>, link: <string>, imgSrc: <string> }>
	data.length is atleast 3
*/

const data = [
	{
		title: 'The Finest Kitchens',
		subtitle:
			'Linear, compact or ultra-spacious. New inspirations for the heart of the home.',
		link: '#',
		imgSrc: fancyKitchen,
	},
	{
		title: 'Fancy Living room',
		subtitle:
			'Gummies sweet jelly lemon drops caramels apple pie sugar plum biscuit chocolate cake.',
		link: '#',
		imgSrc: fancyBlackKitchen,
	},
	{
		title: 'Hello world',
		subtitle:
			'Marzipan oat cake croissant chocolate cake jelly-o wafer. Sweet cookie chupa chups cookie.',
		link: '#',
		imgSrc: fancyLivingRoom,
	},
	{
		title: 'Cupcake Ipsum',
		subtitle:
			'Oat cake croissant chocolate cake jelly-o wafer. Sweet cookie chupa chups cookie chupa chups.',
		link: '#',
		imgSrc: fancyBenchAccounting,
	},
];

export default function WeeklyTrendsCarousel() {
	const [visibleSlides, setVisibleSlides] = useState([0, 1, 2]);
	const [l, c, r] = visibleSlides;
	const [animClass, setAnimClass] = useState('');

	function onClickNext() {
		const new_l = c;
		const new_c = (c + 1) % data.length;
		const new_r = (new_c + 1) % data.length;
		setVisibleSlides([new_l, new_c, new_r]);
		setAnimClass('slide-in-left');
	}

	function onClickPrev() {
		const new_c = l;
		const new_l = l - 1 < 0 ? data.length - 1 : l - 1;
		const new_r = (new_c + 1) % data.length;

		setVisibleSlides([new_l, new_c, new_r]);
		setAnimClass('slide-in-right');
	}

	return (
		<div className='weekly-trends'>
			<h2>Weekly Trends</h2>
			<div className='sl-center-info'>
				<h3>{data[c].title}</h3>
				<p>{data[c].subtitle}</p>
			</div>
			<ul className='sl'>
				<li
					className={`sl-left ${
						animClass === 'slide-in-left'
							? 'bg-card-slide-in-right'
							: animClass === 'slide-in-right'
							? 'bg-card-slide-in-left'
							: ''
					}`}
				>
					<img src={data[l].imgSrc} alt={data[l].title} />
				</li>
				<li
					className={`sl-center ${animClass}`}
					onAnimationEnd={() => setAnimClass('')}
				>
					<img src={data[c].imgSrc} alt={data[c].title} />
					<a href={data[c].href} className='learn-more'>
						<span>Learn More</span>
						<img src={rightArrowIcon} alt='Right Arrow Icon' />
					</a>

					<div className='sl-center-info'>
						<h3>{data[c].title}</h3>
						<p>{data[c].subtitle}</p>
						<a href={data[c].href} className='learn-more'>
							<span>Learn More</span>
							<img src={rightArrowIcon} alt='Right Arrow Icon' />
						</a>
					</div>
				</li>
				<li
					className={`sl-right ${
						animClass === 'slide-in-left'
							? 'bg-card-slide-in-right'
							: animClass === 'slide-in-right'
							? 'bg-card-slide-in-left'
							: ''
					}`}
				>
					<img src={data[r].imgSrc} alt={data[r].title} />
				</li>
			</ul>
			<div className='carousel-control'>
				<button type='button' onClick={onClickPrev}>
					<img src={lArrowControlIcon} alt='Left arrow' />
				</button>
				<button type='button' onClick={onClickNext}>
					<img src={rArrowControlIcon} alt='right arrow' />
				</button>
			</div>
		</div>
	);
}
