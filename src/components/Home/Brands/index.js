import { EmblaCarousel } from 'components/EmblaCarousel';
import Autoplay from 'embla-carousel-autoplay';

import './index.css';
const artemide = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/artemide-logo.png';
const boffi = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/boffi-logo.png';
const hermanMiller = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/hermanmiller-logo.png';
const moroso = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/moroso-logo.png';
const salvatori = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/salvatori-logo.png';
const vitra = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/vitra-logo.png';
const zanotta = 'https://archstore-website.s3.ap-south-1.amazonaws.com/static/media/zanotta-logo.png';

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
						delay: 1250,
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
