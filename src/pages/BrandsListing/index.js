import { useCallback, useState } from 'react';
import { Accordion, Form } from 'react-bootstrap';

import filterIcon from '../../assets/icons/filter-icon.png';
import closeIcon from '../../assets/icons/close-icon.png';

import ArtemideLogo from '../../assets/images/home/brands/artemide-logo.svg';
import BenchAccounting from '../../assets/images/home/WeeklyTrendsCarousel/bench-accounting.png';
import FancyBlackKitchen from '../../assets/images/home/WeeklyTrendsCarousel/fancy-black-kitchen.png';
import FancyKitchen from '../../assets/images/home/WeeklyTrendsCarousel/fancy-kitchen.png';
import FancyLivingRoom from '../../assets/images/home/WeeklyTrendsCarousel/fancy-living-room.png';
import MenuContent from '../../components/Header/MenuContent';

import './index.css';

const letters = ['*', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), '0-9', '&@#'];
const countryList = [
	'Italy',
	'Spain',
	'France',
	'Germany',
	'Portugal',
	'Belgium',
	'Denmark',
	'Netherlands',
	'United Kingdom',
	'Sweden',
	'Poland',
	'Turkey',
	'Switzerland',
	'United States',
	'Lithuania',
	'China',
	'Finland',
	'Czech Republic',
	'Japan',
	'Australia',
	'Estonia',
	'Greece',
	'Bosnia',
	'India',
	'Ukraine',
	'Serbia',
	'Austria',
	'San Marino',
	'Canada',
	'Indonesia',
	'Iceland',
	'Latvia',
	'Romania',
	'Slovenia',
	'Croatia',
	'Albania',
	'Brazil',
	'Cyprus',
	'Egypt',
	'Hong Kong',
	'Republic of Macedonia',
	'Monaco',
	'South Africa',
	'Vietnam',
];

export default function BrandsListing() {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const toggleFilters = useCallback(() => setFiltersOpen(v => !v), []);

	return (
		<div className='brands-listing'>
			<div
				className={`accordion-aside ${
					filtersOpen ? 'd-block full-width' : ''
				}`}
			>
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
				<div className='d-md-flex justify-content-between align-items-start'>
					<h2 className='fs-3 fw-bold'>Manufacturers</h2>
					<div className='d-flex justify-content-start mb-4'>
						<button
							type='button'
							className='d-md-none d-inline-flex align-items-center filter-btn mr-4'
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

						<div className='for-sale-checkbox-pill rounded-pill'>
							<Form.Check
								type='checkbox'
								label='For Sale'
								id='for-sale-checkbox'
							/>
						</div>
					</div>
				</div>
				<ul className='letter-pagination d-none d-md-flex'>
					{letters.map(letter => (
						<li key={letter} className='letter'>
							{letter}
						</li>
					))}
				</ul>

				<div className='card-container-grid'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

function Card() {
	return (
		<div className='bl-brand-card d-flex flex-col justify-content-evenly'>
			<div className='bl-brand-logo mx-auto'>
				<img src={ArtemideLogo} alt='A brand Logo' />
			</div>

			<div className='product-img-container d-flex flex-wrap gap-2'>
				<div className='product-img'>
					<img src={BenchAccounting} alt='A Product Image' />
				</div>
				<div className='product-img'>
					<img src={FancyBlackKitchen} alt='A Product Image' />
				</div>
				<div className='product-img'>
					<img src={FancyKitchen} alt='A Product Image' />
				</div>
				<div className='product-img'>
					<img src={FancyLivingRoom} alt='A Product Image' />
				</div>
			</div>

			<div className='brand-info text-center'>
				<span className='brand-name d-block fw-bolder fs-5'>Artemide</span>
				<span className='brand-location d-block'>Beijing / China</span>
			</div>
		</div>
	);
}

function AccordionAside() {
	return (
		<Accordion defaultActiveKey='1'>
			<Accordion.Item eventKey='0'>
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
			<Accordion.Item eventKey='1'>
				<Accordion.Header>Countries</Accordion.Header>
				<Accordion.Body>
					<>
						<Form.Control
							type='text'
							placeholder='Search Country'
							className='mb-3'
						/>
						<ul className='ps-0 country-list'>
							{countryList.map((country, i) => (
								<li key={i}>
									<Form.Check
										type='checkbox'
										id={`${country}-check`}
										label={country}
									/>
								</li>
							))}
						</ul>
					</>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
