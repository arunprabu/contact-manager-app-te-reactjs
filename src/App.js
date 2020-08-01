import React from 'react';   // to develop comp 
import './App.css';

import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import ProgramList from './components/ProgramList/ProgramList';
import ChannelList from './components/ChannelList/ChannelList';
import TrendingShows from './components/TrendingShows/TrendingShows';

// ideal place for you to do layout 

// component -- named function
function App() { 
  // should return template
  return (
    <div>
      <Header />
      <div className='topMargin'>
        <div className='container'>
          <h2>Program List | Props Example </h2> 
          <ProgramList></ProgramList>

          <h2>Channel List | Class Comp, States and Event Example </h2> 
          <ChannelList></ChannelList>

          <br/><br/>
          <h2>Trending Shows List | Lists and Keys Example </h2>
          <TrendingShows></TrendingShows>
        </div>
      </div>
      <Footer year='2020' />
    </div>
  );
}

export default App; 
