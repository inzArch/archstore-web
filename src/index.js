import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';
// import BrandsListingPage from './pages/BrandsListingPage';
 import Carousel from './components/EmblaCarousel';
 import RecentlyViewedSection from './components/RecentlyViewedSection';
import CompanyCatalogueSection from './components/CompanyCatalogueSection';
import CategoryPageSaleSection from './components/CategoryPageSaleSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <CoverPage /> */}
		{/* <BrandsListingPage /> */}
		<Carousel />
		<RecentlyViewedSection />
		<CompanyCatalogueSection />
		<CategoryPageSaleSection />
	</React.StrictMode>
);
