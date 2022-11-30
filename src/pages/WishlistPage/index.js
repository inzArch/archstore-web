import { Dropdown, DropdownButton, Form } from 'react-bootstrap';

import './index.css';
import '../BrandsListing/bs-textfield-reset.css';

import heartFilledIcon from '../../assets/icons/heart-filled.png';
import placeholderIcon from '../../assets/icons/placeholder.png';
import folderIcon from '../../assets/icons/folder.png';
import deleteIcon from '../../assets/icons/trash.png';
import editIcon from '../../assets/icons/pencil.png';
import plusIcon from '../../assets/icons/plus.png';
import searchIcon from '../../assets/icons/search.png';
import cancelIcon from '../../assets/icons/cross.png';
import checkIcon from '../../assets/icons/check.png';

import { useCallback, useState } from 'react';

export default function WishlistPage() {
	const [orderBy, setOrderBy] = useState('Most Recent');
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<div className='wishlist'>
			<h2 className='d-flex align-items-center'>
				<img
					src={heartFilledIcon}
					alt='Heart Icon'
					width='24'
					height='24'
				/>
				<span className='ml-3 fw-bold'>Wishlist</span>
			</h2>
			<p className='mb-4'>
				<b>Sign in</b> to save your preferred products and store them into
				your account!
			</p>
			<main className='main-content'>
				<div className='aside'>
					<button type='button' className='mb-3' id='all-products-btn'>
						All Products ({products.length})
					</button>

					<button type='button' id='not-assigned-btn'>
						Not Assigned ({3})
					</button>

					<h3 className='text-uppercase'>Groups</h3>
					<Groups>{['dumdum', 'pompom']}</Groups>
				</div>
				<div className='card-container'>
					<div className='card-container-grid'>
						<div className='span-cols d-flex'>
							<button
								type='button'
								className='d-flex align-items-center d-inline-block w-auto px-4 flex-shrink-0'
								id='add-product-btn'
							>
								<img
									src={plusIcon}
									alt='Plus Icon'
									width='14'
									height='14'
									className='mr-2'
								/>
								<span>Add Product</span>
							</button>

							<div className='search-field ml-4 d-none d-md-flex position-relative'>
								<Form.Control
									type='text'
									placeholder='Search'
									value={searchQuery}
									onChange={e => setSearchQuery(e.target.value)}
								/>
								<span className='d-flex align-items-center search-icon position-absolute pr-3'>
									<img
										src={searchIcon}
										alt='Search Icon'
										width='25'
										height='25'
										className={
											searchQuery === ''
												? 'opacity-50'
												: 'opacity-100'
										}
									/>
								</span>
							</div>

							<span className='d-none d-md-inline-flex align-items-center ml-auto'>
								<span className='text-secondary'>Order by: </span>
								<DropdownButton
									id='order-by-dropdown'
									align='end'
									title={orderBy}
								>
									{['Most Recent', 'Less Recent', 'Brands A-Z'].map(
										v => (
											<Dropdown.Item
												href='#'
												onClick={() => setOrderBy(v)}
											>
												{v}
											</Dropdown.Item>
										)
									)}
								</DropdownButton>
							</span>
						</div>
						{products.map((v, i) => (
							<Card product={v} key={i} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

function Groups({ children: groups }) {
	const [showField, setShowField] = useState(false);
	const toggleFieldVisibility = useCallback(() => setShowField(v => !v), []);

	return (
		<>
			<ul className='groups pl-0'>
				{groups.map(v => (
					<li className='group'>
						<img
							src={folderIcon}
							alt='Folder Icon'
							width='20'
							height='20'
						/>
						<input readOnly value={v} />
						<button type='button' className='delete-icon'>
							<img src={deleteIcon} alt='Delete Icon' />
						</button>
						<button type='button' className='edit-icon'>
							<img src={editIcon} alt='Edit Icon' />
						</button>
					</li>
				))}
			</ul>
			{showField ? (
				<div id='add-group-field' className='group b-dashed'>
					<img src={folderIcon} alt='Folder Icon' width='20' height='20' />
					<input type='text' placeHolder='Enter group name' />
					<button type='button' className='check-icon'>
						<img src={checkIcon} alt='Edit Icon' />
					</button>
					<button
						type='button'
						className='cancel-icon'
						onClick={toggleFieldVisibility}
					>
						<img src={cancelIcon} alt='Delete Icon' />
					</button>
				</div>
			) : (
				<button
					type='button'
					className='d-flex justify-content-center align-items-center b-dashed'
					id='add-group-btn'
					onClick={toggleFieldVisibility}
				>
					<img
						src={plusIcon}
						alt='Plus Icon'
						width='14'
						height='14'
						className='mr-2'
					/>
					<span>Add Group</span>
				</button>
			)}
		</>
	);
}

function Card({ product: { name, manufacturer, desc, price } }) {
	return (
		<div className='product-card'>
			<div className='img-wrapper d-flex justify-content-center align-items-center'>
				<img src={placeholderIcon} alt={name} width='45' height='45' />
			</div>
			<div className='product-details'>
				<div className='product-manufacturer fw-bold'>{manufacturer}</div>
				<div className='product-name text-secondary'>
					{`${name} - ${desc}`}
				</div>
				<span className='product-price'>{price ? price : <>&nbsp;</>}</span>
			</div>
		</div>
	);
}

const products = [
	{
		name: "ALANDA '18",
		manufacturer: 'B&B Italia',
		price: '',
		desc: 'Rectangular glass and steel coffee table',
	},
	{
		name: 'ALEX | Rectangular table',
		manufacturer: 'B&B Italia',
		price: '$ 2481.11',
		desc: 'Rectangular marble table',
	},
	{
		name: 'ALEX | Round table',
		manufacturer: 'B&B Italia',
		price: '$ 4218.30',
		desc: 'Round oak living room table',
	},
	{
		name: 'ALLURE O" | Rectangular table',
		manufacturer: 'B&B Italia',
		price: '',
		desc: 'Rectangular table',
	},
	{
		name: 'ALLURE O’ | Square table',
		manufacturer: 'B&B Italia',
		price: '$ 4820.91',
		desc: 'Square table',
	},
	{
		name: 'ALMORA | Armchair',
		manufacturer: 'B&B Italia',
		price: '',
		desc: 'Swivel armchair with 5-spoke base with headrest',
	},
	{
		name: 'ALMORA | Armchair',
		manufacturer: 'B&B Italia',
		price: '',
		desc: 'Swivel armchair with 5-spoke base with headrest',
	},
];
