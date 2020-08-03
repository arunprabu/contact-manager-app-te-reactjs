import React from 'react';   // to develop comp 
import './App.css';

import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './components/Home/Home';

// ideal place for you to do layout 

// component -- named function
function App() { 
  // should return template
  return (
    <div>
      <Header />
      <div className='topMargin'>

        <Home></Home>
       
      </div>
      <Footer year='2020' />
    </div>
  );
}

export default App; 
