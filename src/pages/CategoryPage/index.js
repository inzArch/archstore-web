import { EmblaCarousel } from '../../components/EmblaCarousel';
import leftArrowIcon from '../../assets/images/home/carousel/left-arrow-icon.png';
import './index.css';

const furniture = [
	{
		name: 'Sofas and Armchairs',
		products: ['Sofas', 'Armchairs', 'Easy Chairs', 'Chaise Longues'],
		imgURL: 'https://www.archiproducts.com/images/category-b/779@2x.jpg',
	},
	{
		name: 'Tables and Chairs',
		products: ['Chairs', 'Stools', 'Indoor Benches', 'Tables'],
		imgURL: 'https://www.archiproducts.com/images/category-b/1394@2x.jpg',
	},
	{
		name: 'Storage Systems and units',
		products: ['Bookcases', 'Storage Walls', 'Sideboards', 'Tv Cabinets'],
		imgURL: 'https://www.archiproducts.com/images/category-b/1395@2x.jpg',
	},
	{
		name: 'Sleeping Area and Childrens bedrooms',
		products: ['Beds', 'Bedside Tables', 'Wardrobes', 'Chests of Drawers'],
		imgURL: 'https://www.archiproducts.com/images/category-b/1396@2x.jpg',
	},
	{
		name: 'Kids Furniture',
		products: [
			'Kids Bedroom',
			'Kids Bedroom accessories',
			'Kids Tables and Chairs',
			'Kids TableWare',
		],
		imgURL: 'https://www.archiproducts.com/images/category-b/749@2x.jpg',
	},
	{
		name: 'Furniture Components and Hardware',
		products: ['Drawers', 'Cabinet Doors', 'Table tops', 'Table bases'],
		imgURL: 'https://www.archiproducts.com/images/category-b/1558@2x.jpg',
	},
];

function Category() {
	return (
		<>
			<div className='category-header-wrapper'>
				<div className='category-header py-5 d-flex justify-content-between gap-5'>
					<div>
						<h2 className='fw-bold'>Furniture</h2>
						<p>
							From the hallway to the bedroom, each room of our home
							speaks volumes about us, makes our tastes visible and
							conveys our style through the choices we make with regards
							to furnishing. From the hallway to the bedroom, each room
							of our home speaks volumes about us, makes our tastes
							visible and conveys our style through the choices we make
							with regards to furnishing.
						</p>
					</div>
					<div className='category-logo flex-shrink-0 d-none d-lg-block'>
						<img
							src='https://www.archiproducts.com/images/category/1390.png'
							alt='Furniture Logo'
						/>
					</div>
				</div>
			</div>
			<div className='category'>
				{furniture.map(({ name, products, imgURL }) => (
					<div className='category-card'>
						<div>
							<img src={imgURL} alt={name} />
						</div>
						<span>{name}</span>
						<ul className='pl-0 mt-2'>
							{products.map((v, i) => (
								<li key={i} className='my-1'>
									<a href='#'>{v}</a>
								</li>
							))}
							<li>
								<a href='#'>View all...</a>
							</li>
						</ul>
					</div>
				))}
			</div>
		</>
	);
}

export default function () {
	return (
		<>
			<Category />
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
