import { useCallback, useState } from 'react';
import { Accordion } from 'react-bootstrap';

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

export default function BrandsListingPage() {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const toggleFilters = useCallback(() => setFiltersOpen(v => !v));

	return (
		<div className='brands-listing'>
			<div className={`accordion-aside ${filtersOpen ? 'full-width' : ''}`}>
				{filtersOpen && (
					<div className='d-flex justify-content-between align-items-center mb-3 mx-2'>
						<span className='fw-bold fs-5'>Filters / Orders</span>
						<button
							type='button'
							className='btn btn-outline-dark btn-sm fs-6'
							onClick={toggleFilters}
						>
							Close
						</button>
					</div>
				)}
				<AccordionAside />
			</div>

			<div className='card-container'>
				<div className='d-md-flex justify-content-between align-items-start'>
					<h2>Manufacturers</h2>
					<div className='d-flex justify-content-start mb-4'>
						<button
							type='button'
							className='d-md-none mr-4 btn btn-outline-dark btn-sm fs-6'
							onClick={toggleFilters}
						>
							Filters
						</button>

						<div className='for-sale-checkbox-pill rounded-pill'>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='for-sale-checkbox'
								/>
								<label
									className='form-check-label'
									htmlFor='for-sale-checkbox'
								>
									For Sale
								</label>
							</div>
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
		<div className='brand-card d-flex flex-col justify-content-evenly'>
			<div className='brand-logo mx-auto'>
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
					<ul className='outer-ul categories'>
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
						<div className='searchfield-wrapper'>
							<input
								type='search'
								className='search-input'
								placeholder='Search Country'
							/>
						</div>
						<ul className='outer-ul country-list'>
							{countryList.map((country, i) => (
								<li key={i}>
									<div className='form-check'>
										<input
											className='form-check-input'
											type='checkbox'
											id={`${country}-check`}
										/>
										<label
											className='form-check-label'
											htmlFor={`${country}-check`}
										>
											{country}
										</label>
									</div>
								</li>
							))}
						</ul>
					</>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
