import { useState, useRef, useCallback, useEffect } from 'react';
import { EmblaCarousel } from '../../EmblaCarousel';
import { use3DCarousel } from 'customHooks/3DCarousel';
import Autoplay from 'embla-carousel-autoplay';

import './index.css';
import './3d-carousel-styles.css';

const rightArrowIcon = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/arrow-right.acd632891a6a7552043e0b1ac1233bdc.svg';
const rArrowControlIcon = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/r-arrow.9a92afceee1fffdd6f26fb09aa4cd576.svg';

const fancyKitchen = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/fancy-kitchen.5989497136771fbe6fd4.png';
const fancyLivingRoom = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/fancy-living-room.e77658bdee9306fb7798.png';
const fancyBlackKitchen = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/fancy-black-kitchen.2f8f492154aca37c2ad5.png';
const fancyBenchAccounting = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/bench-accounting.732ffd2612c79130a1e5.png';

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
	const [c_ref, c_api] = use3DCarousel();

	const [scrollHistory, setScrollHistory] = useState('left');
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
					</div>
				))}
			</EmblaCarousel>
			<div id='carousel__3D' ref={c_ref}>
				{data.map(({ title, subtitle, imgSrc, link }, i) => (
					<div key={i}>
						<img className='img-fluid' src={imgSrc} alt={title} />

						<div className='wt-card-info-wrapper'>
							<div className='wt-card-info'>
								<h3 className='title pt-0 fs-2'>{title}</h3>
								<p className='subtitle'>{subtitle}</p>
								<a href={link} className='learn-more'>
									<span>Learn More</span>
									<img src={rightArrowIcon} alt='Right Arrow Icon' />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='carousel-control d-lg-none'>
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

			<div className='carousel-control d-none d-lg-flex'>
				<button
					type='button'
					onClick={() => {
						c_api.prev();
						setScrollHistory('left');
					}}
				>
					<img src={rArrowControlIcon} alt='Left arrow' />
					<span
						className={scrollHistory === 'left' ? 'last-active' : ''}
					></span>
				</button>
				<button
					type='button'
					onClick={() => {
						c_api.next();
						setScrollHistory('right');
					}}
				>
					<img src={rArrowControlIcon} alt='right arrow' />
					<span
						className={scrollHistory === 'right' ? 'last-active' : ''}
					></span>
				</button>
			</div>
		</div>
	);
}

export function Carousel() {
	const [c_ref, c_api] = use3DCarousel();

	useEffect(() => {
		window.c_api = c_api;
	}, []);

	return (
		<>
			<div id='carousel__3D' ref={c_ref}>
				{data.map(({ title, subtitle, imgSrc, link }, i) => (
					<div key={i}>
						<img className='img-fluid' src={imgSrc} alt={title} />

						<div className='wt-card-info-wrapper'>
							<div className='wt-card-info'>
								<h3 className='title pt-0 fs-2'>{title}</h3>
								<p className='subtitle'>{subtitle}</p>
								<a href={link} className='learn-more'>
									<span>Learn More</span>
									<img src={rightArrowIcon} alt='Right Arrow Icon' />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<button type='button' onClick={c_api.prev}>
				prev
			</button>
			<button type='button' onClick={c_api.next}>
				next
			</button>
		</>
	);
}
