import { Accordion, Form, DropdownButton, Dropdown } from 'react-bootstrap';

import './index.css';
import placeholderImg from './placeholder-picture.png';
import filterIcon from './filter-icon.png';
import closeIcon from './close-icon.png';
import heartOutlinedIcon from './heart-outline.png';
import heartFilledIcon from './heart-filled.png';

import MenuContent from '../../components/Header/MenuContent';
import { products } from './products';
import { useState, useCallback } from 'react';

export default function ProductsListingPage() {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [sortBy, setSortBy] = useState('Relevance');
	const toggleFilters = useCallback(() => setFiltersOpen(v => !v), []);

	return (
		<div className='products-listing'>
			<div className={`accordion-aside ${filtersOpen ? 'full-width' : ''}`}>
				{filtersOpen && (
					<div className='d-flex justify-content-between align-items-center mb-3 mx-2'>
						<span className='fw-bold fs-5'>Filters / Orders</span>
						<button
							type='button'
							className='close-btn'
							onClick={toggleFilters}
						>
							<img
								src={closeIcon}
								alt='Close Icon'
								width='15'
								height='15'
							/>
						</button>
					</div>
				)}
				<AccordionAside />
			</div>
			<div className='card-container'>
				<div>
					<h2 className='mb-3 fw-bold fs-3'>Products by Artemide</h2>
					<div className='d-flex align-items-center mb-3'>
						<button
							type='button'
							className='d-md-none d-inline-flex align-items-center filter-btn align-self-stretch'
							onClick={toggleFilters}
						>
							<img
								src={filterIcon}
								alt='Filter Icon'
								width='22'
								height='22'
							/>
							<span className='ml-2'>Filters</span>
						</button>

						{/* <div className='ml-auto'> */}
						{/* <span className='fw-bold'>297 Products</span> */}
						<span className='d-inline-flex align-items-center ml-auto'>
							<span className='text-secondary'>Sort by: </span>
							<DropdownButton
								id='sort-by-dropdown'
								align='end'
								title={sortBy}
							>
								{['Relevance', 'A - Z', 'Newest', 'Popularity'].map(
									(v, i) => (
										<Dropdown.Item
											key={i}
											onClick={() => setSortBy(v)}
										>
											{v}
										</Dropdown.Item>
									)
								)}
							</DropdownButton>
						</span>
						{/* </div> */}
					</div>
				</div>

				<div className='card-container-grid'>
					{products.map(p => (
						<Card key={p.id} product={p} />
					))}
				</div>
			</div>
		</div>
	);
}

function Card({ product: { manufacturer, name, desc } }) {
	const { random, round } = Math;

	return (
		<div className='product-card'>
			<div className='img-wrapper d-flex justify-content-center align-items-center'>
				<img src={placeholderImg} alt={name} width='45' height='45' />
			</div>
			<div className='product-details'>
				<div className='product-manufacturer fw-bold'>{manufacturer}</div>
				<div className='product-name text-secondary'>
					{`${name} - ${desc}`}
				</div>
				<button type='button' className='request-info-btn fw-bold'>
					Request info
				</button>
			</div>
			{!!round(random()) && <span className='new-tag'>new</span>}
			<button type='button' className='fav-btn'>
				<img
					src={heartOutlinedIcon}
					className='heart-outlined'
					alt='Heart Icon'
				/>
				<img
					src={heartFilledIcon}
					className='heart-filled'
					alt='Heart Icon'
				/>
			</button>
		</div>
	);
}

function AccordionAside() {
	return (
		<Accordion defaultActiveKey='2'>
			<Accordion.Item eventKey='0'>
				<Accordion.Header>Solutions</Accordion.Header>
				<Accordion.Body>
					<Form.Control
						type='text'
						placeholder='Search Solution'
						className='mb-3'
					/>
					<ul className='ps-0 solutions'>
						{solutions.map((solution, i) => (
							<li key={i}>
								<Form.Check
									type='checkbox'
									label={solution}
									id={solution}
								/>
							</li>
						))}
					</ul>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='1'>
				<Accordion.Header>Collections</Accordion.Header>
				<Accordion.Body>
					<Form.Control
						type='text'
						placeholder='Search Collection'
						className='mb-3'
					/>
					<ul className='ps-0 collections'>
						{collections.map((collection, i) => (
							<li key={i}>
								<Form.Check
									type='checkbox'
									label={collection}
									id={collection}
								/>
							</li>
						))}
					</ul>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='2'>
				<Accordion.Header>Categories</Accordion.Header>
				<Accordion.Body>
					<ul className='ps-0 categories'>
						<li>
							<a href='#'>All Categories</a>
							<ul>
								{MenuContent.map(({ name, categories }, i) => (
									<li key={i}>
										<a href='#'>{name}</a>
										<ul>
											{categories.map(
												({ name, link, products }, j) => (
													<li key={j}>
														<a href={link}>{name}</a>
														<ul>
															{products.map(
																({ name, link }, k) => (
																	<li key={k}>
																		<a href={link}>{name}</a>
																	</li>
																)
															)}
														</ul>
													</li>
												)
											)}
										</ul>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

const solutions = [
	'Armchairs & Lounge chairs',
	'Beds',
	'Chairs',
	'Coffee tables',
	'Furnishing accessories',
	'New Products 2022',
	'Sofas',
	'Storage units',
	'Systems',
	'Tables',
	'Wardrobes',
];

const collections = [
	'Almora',
	'Alys',
	"Andy '13",
	'Area',
	'Arne',
	'Athos',
	'Atoll',
	'Backstage',
	'Bend',
	'Beverly',
	'Bunch',
	'Button',
	'Camaleonda',
	'Charles Large',
	'Charles',
	'Coronado',
	'Cratis',
	'Dado',
	'Diesis',
	'Digitable',
	'Dock',
	'Doyl',
	'Eileen',
	'El',
	'Eucalipto',
	'Fat Sofa',
	'Fat',
	'Flat.C',
	'Gold',
	'Harbor',
	'Harry',
	'Hive',
	'Husk',
	'Inside',
	'Iuta',
	'J.J.',
	'Jens',
	'Joker',
	'Landscape',
	"Lazy '05",
	'Le Bambole',
	'Lens',
	'Liagò',
	'Link',
	'Loop',
	'Lys',
	'Mart',
	'Maru',
	'Mera',
	'Metropolitan',
	'Michel',
	'Mirto Indoor',
	'Moon System',
	'Nix',
	'Noonu',
	'Oskar',
	'Outside',
	'Overscale',
	'P60',
	'PAB',
	'Papilio Shell',
	'Papilio',
	'Parallel Structure',
	'Pyllon',
	'Ray',
	'Richard',
	'SAKé',
	'Seven',
	'Shelf',
	'Siena',
	'Surface',
	'Terminal',
	'Tetra',
	'The Table',
	'Theo',
	'Tobi-Ishi',
	'Tufty Time',
	'Tufty-Too',
	'Tulip',
	'Up',
	'Vertigo',
	'Vol Au Vent',
	'Édouard',
];
