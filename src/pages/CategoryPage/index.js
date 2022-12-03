import { EmblaCarousel } from '../../components/EmblaCarousel';
import './index.css';
const leftArrowIcon =  "https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/left-arrow-icon.png";

export default function () {
	return (
		<>
			<div className='px-3 browse-brands mb-5'>
				<h2 className='fw-bold fs-3 my-4'>Browse by Brand</h2>
				<EmblaCarousel>
					{brands.map(({ name, img: imgSrc }, i) => (
						<div className='brand-card' key={i}>
							<div className='brand-img img-fluid'>
								<img src={baseURL + imgSrc} alt={name} />
							</div>
							<div className='brand-name text-dark'>{name}</div>
						</div>
					))}
				</EmblaCarousel>
				<div className='d-flex justify-content-center mt-4 mt-lg-5'>
					<button className='border rounded-pill px-3 py-1 fw-bold'>
						<span>View all</span>
						<span className='d-inline-block l-arrow-icon ml-2'>
							<img
								src={leftArrowIcon}
								alt='Left Arrow icon'
								className='img-fluid'
							/>
						</span>
					</button>
				</div>
			</div>
			<SelectionsAndGuides />
		</>
	);
}

function SelectionsAndGuides() {
	return (
		<div style={{ backgroundColor: '#f2e4e0' }}>
			<div className='sg'>
				<h2 className='fw-bold'>Selections & Guides</h2>
				{data.map(row => (
					<div className='sg-card-row d-md-flex'>
						{row.map(({ img: imgSrc, title, desc, href }) => (
							<div className='sg-card'>
								<div className='img-wrapper'>
									<img
										className='img-fluid'
										src={imgSrc}
										alt={title}
									/>
								</div>
								<h3 className='fw-bold fs-5'>{title}</h3>
								{desc && <p>{desc}</p>}
								<a
									href={href}
									className='fw-bolder text-dark d-inline-flex align-items-baseline'
								>
									<span>Discover the products</span>
									<span className='l-arrow-icon d-inline-block ml-2'>
										<img
											src={leftArrowIcon}
											alt='Left Arrow icon'
											className='img-fluid'
										/>
									</span>
								</a>
							</div>
						))}
					</div>
				))}
			</div>
			<div className='d-flex justify-content-center mt-5'>
				<button className='rounded-pill px-3 py-1 fw-bold'>
					<span>View all</span>
					<span className='d-inline-block l-arrow-icon ml-2'>
						<img
							src={leftArrowIcon}
							alt='Left Arrow icon'
							className='img-fluid'
						/>
					</span>
				</button>
			</div>
		</div>
	);
}

const baseURL = 'https://cdn.archilovers.com/people/';
const brands = [
	{ name: 'Moroso', img: '67b17ebc-a8a0-45c6-a686-4aaf9507e4ec-brand.jpg' },
	{ name: 'Zanotta', img: 'c34c6013-8565-4a33-827e-9bb5d802f57a-brand.jpg' },
	{ name: 'De Padova', img: 'a816adc7-4e78-488d-9390-a962dda833de-brand.jpg' },
	{ name: 'Wittman', img: '3782add0-6803-4087-a75c-531eb97a1835-brand.jpg' },
	{ name: 'Thonet', img: '2d7e82ee-53f6-4356-9831-75a4d27f0fd7-brand.jpg' },
	{
		name: 'Roche Bobois',
		img: '62416f2a-ebed-407a-b6f2-953965243fbd-brand.jpg',
	},
	{
		name: 'B&B Italia',
		img: '0459ff2a-ff45-41ad-88f5-be302b75e2e5-brand.jpg',
	},
	{ name: 'Poliform', img: '77689527-b35a-4490-afc0-52e783e2fb7a-brand.jpg' },
	{ name: 'Flexform', img: 'ffdd6fe1-d33b-42ab-92df-0039a993ef78-brand.jpg' },
	{
		name: 'Molteni & C',
		img: '7426a81f-1bc5-4639-8a6d-66b449fc36ae-brand.jpg',
	},
	{
		name: 'Minotti',
		img: 'ba78af94-75a1-48c5-b3e1-ab0a29f12efe-brand.jpg',
	},
	{ name: 'Hay', img: 'f94a6d78-a288-4da6-83b1-4006e928be67-brand.jpg' },
];

const data = [
	[
		{
			img: 'https://img.edilportale.com/focus/Design-for-Kids_594040_Fb.jpg',
			title: 'Design for Kids',
			desc: 'The kids room becomes a world to explore. Beds that resemble nests. Wallpapers like fantasy worlds. Playful lamps. Hyper-coloured seating. Flexible and intelligent furniture for the little ones',
			href: '#',
		},
		{
			img: 'https://img.edilportale.com/focus/Stile-Pugliese_594039_Fb.jpg',
			title: 'Puglia style',
			desc: 'Made-in-Puglia is a true style between rustic and country chic. Its flavours become calm hues, its fragrances recall greenery, and its natural stones speak of history. Design and reuse have made the r...',
			href: '#',
		},
	],
	[
		{
			img: 'https://img.edilportale.com/focus/Design-for-Kids_594040_Fb.jpg',
			title: 'The Art of Nature',
			href: '#',
		},
		{
			img: 'https://img.edilportale.com/focus/Tendenze-colore-2022_594004_Fb.jpg',
			title: 'Autumn Palette',
			href: '#',
		},
		{
			img: 'https://img.edilportale.com/focus/L-amore-continua_594002_Fb.jpg',
			title: 'Enduring Love',
			href: '#',
		},
	],
];
