import './index.css';
import artemideLogo from '../../../assets/images/home/brands/artemide-logo.svg';
import boffiLogo from '../../../assets/images/home/brands/boffi-logo.svg';
import hermanMillerLogo from '../../../assets/images/home/brands/hermanmiller-logo.svg';
import morosoLogo from '../../../assets/images/home/brands/moroso-logo.svg';
import salvatoriLogo from '../../../assets/images/home/brands/salvatori-logo.svg';
import vitraLogo from '../../../assets/images/home/brands/vitra-logo.svg';
import zanottaLogo from '../../../assets/images/home/brands/zanotta-logo.svg';

export default function Brands() {
	return (
		<div className='brands-container'>
			<h2 className='brands-title'>Brands</h2>
			<div className='brand-logos-container'>
				<div className='brand-logos'>
					<div>
						{[zanottaLogo, artemideLogo, vitraLogo, salvatoriLogo].map(
							(logo, i) => (
								<div key={i} className='brand-logo'>
									<img src={logo} alt='A brand Logo' />
								</div>
							)
						)}
					</div>
					<div>
						{[
							artemideLogo,
							boffiLogo,
							hermanMillerLogo,
							morosoLogo,
							vitraLogo,
						].map((logo, i) => (
							<div key={i} className='brand-logo'>
								<img src={logo} alt='A brand Logo' />
							</div>
						))}
					</div>
				</div>
				<div className='brand-logos'>
					<div>
						{[zanottaLogo, artemideLogo, vitraLogo, salvatoriLogo].map(
							(logo, i) => (
								<div key={i} className='brand-logo'>
									<img src={logo} alt='A brand Logo' />
								</div>
							)
						)}
					</div>
					<div>
						{[
							artemideLogo,
							boffiLogo,
							hermanMillerLogo,
							morosoLogo,
							vitraLogo,
						].map((logo, i) => (
							<div key={i} className='brand-logo'>
								<img src={logo} alt='A brand Logo' />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
