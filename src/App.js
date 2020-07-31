import React from 'react';   // to develop comp 
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// ideal place for you to do layout 

// component -- named function
function App() { 
  // should return template
  return (
    <div>
      <Header />
      <div className='topMargin'>
        <h1>Success!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App; 
