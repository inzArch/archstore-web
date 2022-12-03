import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselContent } from './CarouselContent.js';
import './index.css';
import MoodBoard from './MoodBoard';

const HomeCarousel = () => {
	return (
		<div className='carousel-container'>
			<Carousel>
				{CarouselContent.map((content, i) => (
					<Carousel.Item>
						<img src={content.img} alt='bg img' />
					</Carousel.Item>
				))}
			</Carousel>
			<MoodBoard />
		</div>
	);
};

export default HomeCarousel;
