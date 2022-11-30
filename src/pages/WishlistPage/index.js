import './index.css';

import heartFilledIcon from '../../assets/icons/heart-filled.png';
import placeholderImg from '../../assets/icons/placeholder.png';

export default function WishlistPage() {
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
			<p>
				<b>Sign in</b> to save your preferred products and store them into
				your account!
			</p>
			<main className='main-content'>
				<div className='aside'></div>
				<div className='card-container'>
					<div className='card-container-grid'>
						{products.map((v, i) => (
							<Card product={v} key={i} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

function Card({ product: { name, manufacturer, desc, price } }) {
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
