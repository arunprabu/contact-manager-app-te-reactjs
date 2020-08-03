import React from 'react';

import ProgramList from './ProgramList/ProgramList';
import ChannelList from '../../containers/ChannelList/ChannelList';
import TrendingShows from '../../containers/TrendingShows/TrendingShows';
import MyProfile from '../../containers/MyProfile/MyProfile';

function Home() {
  return (
    <div className='container'>
      <h2>Program List | Props Example </h2> 
      <ProgramList></ProgramList>

      <h2>Channel List | Class Comp, States and Event Example </h2> 
      <ChannelList premiumChannels='5'></ChannelList>

      <br/><br/>
      <h2>Trending Shows List | Lists and Keys Example </h2>
      <TrendingShows></TrendingShows>

      <br/><br/>
      <h2>My Profile |  Two Way Binding Example </h2>
      <MyProfile></MyProfile>
    </div>

  )
}

export default Home;
