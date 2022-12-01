import { EmblaCarousel } from 'components/EmblaCarousel';
import Autoplay from 'embla-carousel-autoplay';

import './index.css';
import artemide from 'assets/images/home/brands/artemide-logo.png';
import boffi from 'assets/images/home/brands/boffi-logo.png';
import hermanMiller from 'assets/images/home/brands/hermanmiller-logo.png';
import moroso from 'assets/images/home/brands/moroso-logo.png';
import salvatori from 'assets/images/home/brands/salvatori-logo.png';
import vitra from 'assets/images/home/brands/vitra-logo.png';
import zanotta from 'assets/images/home/brands/zanotta-logo.png';

const logos = [
	[artemide, boffi],
	[hermanMiller, moroso],
	[salvatori, vitra],
	[zanotta, moroso],
	[vitra, artemide],
	[hermanMiller, zanotta],
	[artemide, boffi],
	[hermanMiller, moroso],
	[salvatori, vitra],
	[zanotta, moroso],
	[vitra, artemide],
	[hermanMiller, zanotta],
];

export default function Brands() {
	return (
		<div className='brands'>
			<h2 className='brands-title'>Brands</h2>
			<EmblaCarousel
				hideControls
				dragFree
				plugins={[
					Autoplay({
						delay: 1500,
						playOnInit: true,
						stopOnInteraction: false,
					}),
				]}
			>
				{logos.map(([logoA, logoB], i) => (
					<div className='brand-card' key={i}>
						<div className='brand-logo align-self-end'>
							<img src={logoA} alt='Brand Logo' className='ml-auto' />
						</div>
						<div className='brand-logo align-self-start'>
							<img src={logoB} alt='Brand Logo' />
						</div>
					</div>
				))}
			</EmblaCarousel>
		</div>
	);
}
