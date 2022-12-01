import BusinessCardImg from '../../assets/images/BusinessCard/archstore-coming-soon.png';
import './index.css';

export default function CoverPage() {
	return (
		<div className='ua-app mx-lg-auto'>
			<p className='mt-4 my-2 text-center fs-4 fw-bold'>
				Take a demo of our product&nbsp;today.
			</p>
			<div className='d-flex justify-content-center mb-4'>
				<button type='button'>Archstore User Login</button>
			</div>

			<div className='biz-card-img mb-5'>
				<img src={BusinessCardImg} alt='Archstore Business Card' />
			</div>

			<p className='fs-4 mb-0 fw-bold'>Explainer Video</p>
			<hr className='my-1' />
			<p>
				Check out this video to get a better understanding of our upcoming
				product.
			</p>

			<div className='iframe-container mb-5'>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/BVwJNu5tRo0'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
					allowfullscreen
				></iframe>
			</div>

			<form className='signup-form mb-4'>
				<label
					htmlFor='email-input'
					className='d-block fs-4 text-center mb-2 fw-bold'
				>
					Sign up for early bird benefits.
				</label>
				<div className='d-flex justify-content-center gap-2'>
					<div className='email-input-wrapper flex-grow-1'>
						<input
							type='email'
							className='email-input w-100 h-100'
							id='email-input'
						/>
						<span className='p-holder'>Email</span>
					</div>
					<button type='submit' className='flex-shrink-0'>
						Sign up
					</button>
				</div>
			</form>

			<hr className='pt-2' />

			<div className='footer d-flex justify-content-center mb-4'>
				<small>
					Copyright &copy; 2022 Archstore - All Rights Reserved.
				</small>
			</div>
		</div>
	);
}
