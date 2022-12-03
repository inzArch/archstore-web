import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import App from './App';
import BrandsListing from './pages/BrandsListing';
import ProductsListing from 'pages/ProductsListing';
import CoverPage from 'pages/CoverPage';
import Home from 'pages/Home';
import AboutUsPage from './components/AboutUsPage';
import WishlistPage from 'pages/WishlistPage';
import FAQ from 'components/FAQ';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
				<Route path='wishlist' element={<WishlistPage />} />
				<Route path='brands-listing' element={<BrandsListing />} />
				<Route path='products-listing' element={<ProductsListing />} />
			</Route>
			<Route path='about-us' element={<AboutUsPage />} />
			<Route path='cover' element={<CoverPage />} />
			<Route path='faq' element={<FAQ />} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
