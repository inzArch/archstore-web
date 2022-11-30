import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import leftArrowIcon from '../../assets/images/home/carousel/left-arrow-icon.png';
import playIcon from '../../assets/images/home/carousel/play-button.png';
import './index.css';

export function EmblaCarousel({ children, hideControls, dragFree }) {
	const [emblaRef, emblaAPI] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			dragFree,
		},
		[ClassNames()]
	);

	const scrollNext = useCallback(
		() => emblaAPI && emblaAPI.scrollNext(),
		[emblaAPI]
	);

	const scrollPrev = useCallback(
		() => emblaAPI && emblaAPI.scrollPrev(),
		[emblaAPI]
	);

	return (
		<div className='embla'>
			<div className='embla__viewport' ref={emblaRef}>
				<div className='embla__container'>{children}</div>
				<div className={`embla__prev ${hideControls ? 'd-none' : ''}`}>
					<button
						type='button'
						className='embla__control__button'
						onClick={scrollPrev}
					>
						<img src={leftArrowIcon} alt='Left Arrow icon' />
					</button>
				</div>
				<div className={`embla__next ${hideControls ? 'd-none' : ''}`}>
					<button
						type='button'
						className='embla__control__button'
						onClick={scrollNext}
					>
						<img src={leftArrowIcon} alt='Left Arrow icon' />
					</button>
				</div>
			</div>
		</div>
	);
}

const videos = [
	{
		img: 'https://i.ytimg.com/vi/0DAB2inYKPo/mqdefault.jpg',
		title: 'Philippe Starck presents the new Donald crystal tables',
	},
	{
		img: 'https://i.ytimg.com/vi/UhEXlpjcc9c/mqdefault.jpg',
		title: 'Fuorisalone 2022 | EDRA - Francesco Binfaré presents the new Standalto sofa',
	},
	{
		img: 'https://i.ytimg.com/vi/dyNBceD80hI/mqdefault.jpg',
		title: 'CEO Roberto Banditelli presents new furnishings and accessories',
	},
	{
		img: 'https://i.ytimg.com/vi/_ViTGz6dyO4/mqdefault.jpg',
		title: 'Studio Zaven presents the new Za:Za sofa.',
	},
	{
		img: 'https://i.ytimg.com/vi/H6XE8wZiaY8/mqdefault.jpg',
		title: 'Gabriele Salvatori presents the furnishings in marble, wood, leather',
	},
	{
		img: 'https://i.ytimg.com/vi/dJBenyXd19I/mqdefault.jpg',
		title: 'Henry Walther presents Nappa and New Century',
	},
	{
		img: 'https://i.ytimg.com/vi/Jr0mXevV180/mqdefault.jpg',
		title: 'Coverings, the Secret Gardens collection',
	},
];

export default function () {
	return (
		<div className='company-video-section px-3'>
			<h2 className='fw-bold fs-3 my-4'>Video B&B Italia</h2>
			<EmblaCarousel>
				{videos.map(({ img: imgSrc, title }, i) => (
					<div className='video-card border' key={i}>
						<div className='video-thumb-img position-relative'>
							<img src={imgSrc} alt={title} className='img-fluid' />
							<div className='play-icon-wrapper position-absolute top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center'>
								<img src={playIcon} alt='Play Icon' />
							</div>
						</div>
						<div className='video-title py-2 px-3 pb-3'>{title}</div>
					</div>
				))}
			</EmblaCarousel>
		</div>
	);
}
