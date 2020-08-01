import React, { Component } from 'react';
import Channel from './Channel/Channel';

class ChannelList extends Component{

  /* state is an obj 
     state is editable
     changing state will result in re-render 
     states are available in class comp 
     --- after react hooks introduced states are available to fn components 
  */

  state = {
    tvChannelList: [
      { name: 'Star Sports', info: '#1 Sports Channel', logo: 'star.png'},
      { name: 'HBO', info: 'Entertainment Channel', logo: 'hbo.png'},
      { name: 'NatGeo', info: 'Infotainment Channel', logo: 'natgeo.png'}
    ],
    number: 10
  }


  // public method -- event handler
  increaseCount = () => {
    // console.log(this);  // context of this -- around ChannelList class
    // changing state -- should use setState method
    // setState will result in re-rendering
    // setState will merge the existing state data 
    this.setState({
      number: 20
    }, () => {
      console.log(this.state.number ); 
    });
  }

  render(){
   

    return (
      <div className='container text-left'>
        <div className="row">

          <Channel 
            name={this.state.tvChannelList[0].name}
            info={this.state.tvChannelList[0].info} 
            logo={this.state.tvChannelList[0].logo}
            >
          </Channel>
          
          <Channel 
            name={this.state.tvChannelList[1].name}
            info={this.state.tvChannelList[1].info} 
            logo={this.state.tvChannelList[1].logo}
            >
          </Channel>
        </div>

        <p>{this.state.number}</p>
        <button className='btn btn-danger' 
        onClick={this.increaseCount}>Increase Count</button>
      </div>

    )
  }

}

export default ChannelList;