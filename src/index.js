import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
// import BrandsListingPage from './pages/BrandsListingPage';
// import CategoryPage from './pages/CategoryPage';
// import Carousel from './components/EmblaCarousel';
// import CoverPage from './pages/CoverPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		{/* <CoverPage /> */}
		{/* <BrandsListingPage /> */}
		{/* <CategoryPage /> */}
		{/* <Carousel /> */}
	</React.StrictMode>
);
