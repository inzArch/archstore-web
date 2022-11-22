import './App.css';
import React from 'react';
import Home from './pages/Home';
import FAQ from './components/FAQ';

function App() {
    
    return (
      <div className='main-page-container'>
        <Home />
        <FAQ />
      </div>
  );
}

export default App;
