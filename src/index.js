import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';
import BrandsListingPage from './pages/BrandsListingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <CoverPage /> */}
		<BrandsListingPage />
	</React.StrictMode>
);
