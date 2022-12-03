import { Dropdown, DropdownButton, Form } from 'react-bootstrap';

import './index.css';
import '../BrandsListing/bs-textfield-reset.css';

import heartFilledIcon from 'assets/icons/heart-filled.png';
import placeholderIcon from 'assets/icons/placeholder.png';
import folderIcon from 'assets/icons/folder.png';
import deleteIcon from 'assets/icons/trash.png';
import editIcon from 'assets/icons/pencil.png';
import plusIcon from 'assets/icons/plus.png';
import searchIcon from 'assets/icons/search.png';
import cancelIcon from 'assets/icons/cross.png';
import checkIcon from 'assets/icons/check.png';
import whiteCheckIcon from 'assets/icons/check-mark-white.png';

import { useCallback, useState } from 'react';

export default function WishlistPage() {
	const [orderBy, setOrderBy] = useState('Most Recent');
	const [moveTo, setMoveTo] = useState('dumdum');
	const [searchQuery, setSearchQuery] = useState('');
	const [products, setProducts] = useState(_products_);
	const [numSelected, setNumSelected] = useState(0);

	function handleSelect(productId) {
		const i = products.findIndex(({ id }) => id === productId);
		setNumSelected(v => (products[i].checked ? v - 1 : v + 1));

		setProducts([
			...products.slice(0, i),
			{
				...products[i],
				checked: !products[i].checked,
			},
			...products.slice(i + 1),
		]);
	}

	function clearSelections() {
		setProducts(products.map(product => ({ ...product, checked: false })));
		setNumSelected(0);
	}

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
				<div
					className={`aside ${
						numSelected > 0 ? 'pe-none opacity-50' : ''
					}`}
				>
					<button type='button' className='mb-3' id='all-products-btn'>
						All Products ({products.length})
					</button>

					<button type='button' id='not-assigned-btn'>
						Not Assigned ({3})
					</button>

					<h3 className='text-uppercase'>Groups</h3>
					<Groups>{['dumdum', 'pompom', 'hello_world']}</Groups>
				</div>
				<div className='wl-card-container'>
					<div className='wl-card-container-grid'>
						{numSelected > 0 && (
							<div className='span-cols d-flex align-items-center flex-wrap gap-y-3'>
								<span className='wl-btn w-auto mr-4'>
									{numSelected} Product{numSelected > 1 && 's'}{' '}
									selected
								</span>
								<button type='button' className='wl-btn w-auto mr-4'>
									Delete
								</button>
								<button
									type='button'
									className='wl-btn w-auto'
									onClick={clearSelections}
								>
									Cancel
								</button>
								<span className='d-inline-flex align-items-center ml-auto pl-3'>
									<span className='text-secondary'>Move to: </span>
									<DropdownButton
										id='move-to-dropdown'
										align='end'
										title={moveTo}
									>
										{['dumdum', 'pompom', 'hello_world'].map(v => (
											<Dropdown.Item
												href='#'
												onClick={() => setMoveTo(v)}
											>
												{v}
											</Dropdown.Item>
										))}
									</DropdownButton>
								</span>
							</div>
						)}

						{numSelected === 0 && (
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
						)}
						{products.map(({ id, ...v }, i) => (
							<Card
								product={v}
								key={i}
								onSelect={() => handleSelect(id)}
							/>
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

function Card({
	product: { name, manufacturer, desc, price, checked },
	onSelect,
}) {
	return (
		<div className='wl-product-card'>
			<div className='img-wrapper d-flex justify-content-center align-items-center'>
				<img src={placeholderIcon} alt={name} width='45' height='45' />
			</div>
			<div className='wl-product-details'>
				<div className='wl-product-manufacturer fw-bold'>
					{manufacturer}
				</div>
				<div className='wl-product-name text-secondary'>
					{`${name} - ${desc}`}
				</div>
				<span className='wl-product-price'>
					{price ? price : <>&nbsp;</>}
				</span>
			</div>
			<button
				type='button'
				className={`w-check-icon ${checked ? 'checked' : ''}`}
				onClick={onSelect}
			>
				<img src={whiteCheckIcon} alt='Check Icon' width='14' height='14' />
			</button>
		</div>
	);
}

const _products_ = [
	{
		name: "ALANDA '18",
		manufacturer: 'B&B Italia',
		price: '',
		desc: 'Rectangular glass and steel coffee table',
		id: 0,
	},
	{
		name: 'ALEX | Rectangular table',
		manufacturer: 'B&B Italia',
		price: '$ 2481.11',
		desc: 'Rectangular marble table',
		id: 1,
	},
	{
		name: 'ALEX | Round table',
		manufacturer: 'B&B Italia',
		price: '$ 4218.30',
		desc: 'Round oak living room table',
		id: 2,
	},
	{
		name: 'ALLURE O" | Rectangular table',
		manufacturer: 'B&B Italia',
		price: '',
		desc: 'Rectangular table',
		id: 3,
	},
	{
		name: 'ALLURE O’ | Square table',
		manufacturer: 'B&B Italia',
		price: '$ 4820.91',
		desc: 'Square table',
		id: 4,
	},
	{
		name: 'ALMORA | Armchair',
		manufacturer: 'B&B Italia',
		price: '',
		desc: 'Swivel armchair with 5-spoke base with headrest',
		id: 5,
	},
	{
		name: 'ALMORA | Armchair',
		manufacturer: 'B&B Italia',
		price: '',
		desc: 'Swivel armchair with 5-spoke base with headrest',
		id: 6,
	},
];
