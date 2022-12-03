import './App.css';
import React from 'react';
import Home from './pages/Home';
import FAQ from './components/FAQ';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Routes,
//   Route,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Home />} errorElement={<h1>Error Page</h1>} />
//       <Route path="/faq" element={<FAQ />} errorElement={<h1>Error Page</h1>} />
//     </>
//   )
// );

function App() {
    
    return (
      <div className='main-page-container'>
        {/* <RouterProvider router={router} /> */}
        <Home />
        {/* <FAQ /> */}
      </div>
  );
}

export default App;
