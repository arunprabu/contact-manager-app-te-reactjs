import React from 'react';   // to develop comp 
import './App.css';

import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ideal place for you to do layout 

// component -- named function
function App() { 
  // should return template
  return (
    <Router>
      <div>
        <Header />
        <div className='topMargin'>
        
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contacts' component={Contacts}></Route>
        </Switch>

        </div>
        <Footer year='2020' />
      </div>
    </Router>
  );
}

export default App; 
