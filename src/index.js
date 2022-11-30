import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';
// import BrandsListing from './pages/BrandsListing';
// import ProductsListing from './pages/ProductsListing';
import WishlistPage from './pages/WishlistPage';
// import CategoryPage from './pages/CategoryPage';
// import Carousel from './components/EmblaCarousel';
// import CoverPage from './pages/CoverPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <CoverPage /> */}
		{/* <BrandsListing /> */}
		{/* <ProductsListing /> */}
		<WishlistPage />
		{/* <CategoryPage /> */}
		{/* <Carousel /> */}
	</React.StrictMode>
);
