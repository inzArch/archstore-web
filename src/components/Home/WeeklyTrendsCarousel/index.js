import { useState, useRef, useCallback } from 'react';
import { EmblaCarousel } from '../../EmblaCarousel';
import Autoplay from 'embla-carousel-autoplay';

import './index.css';

import rightArrowIcon from '../../../assets/images/header/arrow-right.svg';
import rArrowControlIcon from '../../../assets/images/home/WeeklyTrendsCarousel/r-arrow.svg';

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
	const emblaRef = useRef(null);
	const [scrollHistory, setScrollHistory] = useState(null);
	const scrollNext = useCallback(() => {
		if (emblaRef.current) emblaRef.current.scrollNext();
		setScrollHistory('right');
	}, []);

	const scrollPrev = useCallback(() => {
		if (emblaRef.current) emblaRef.current.scrollPrev();
		setScrollHistory('left');
	}, []);

	return (
		<div className='weekly-trends'>
			<h2>Weekly Trends</h2>
			<EmblaCarousel
				reqAPI={emblaRef}
				hideControls
				plugins={[
					Autoplay({
						playOnInit: true,
						stopOnInteraction: false,
					}),
				]}
			>
				{data.map(({ title, subtitle, link, imgSrc }, i) => (
					<div className='wt-card' key={i}>
						<h3 className='title'>{title}</h3>
						<p className='subtitle'>{subtitle}</p>
						<div className='img-wrapper'>
							<img src={imgSrc} alt={title} />
							<a href={link} className='learn-more'>
								<span>Learn More</span>
								<img src={rightArrowIcon} alt='Right Arrow Icon' />
							</a>
						</div>
						<div className='wt-card-info'>
							<h3 className='title pt-0 fs-1'>{title}</h3>
							<p className='subtitle'>{subtitle}</p>
							<a href={link} className='learn-more'>
								<span>Learn More</span>
								<img src={rightArrowIcon} alt='Right Arrow Icon' />
							</a>
						</div>
					</div>
				))}
			</EmblaCarousel>
			<div className='carousel-control'>
				<button type='button' onClick={scrollPrev}>
					<img src={rArrowControlIcon} alt='Left arrow' />
					<span
						className={scrollHistory === 'left' ? 'last-active' : ''}
					></span>
				</button>
				<button type='button' onClick={scrollNext}>
					<img src={rArrowControlIcon} alt='right arrow' />
					<span
						className={scrollHistory === 'right' ? 'last-active' : ''}
					></span>
				</button>
			</div>
		</div>
	);
}
