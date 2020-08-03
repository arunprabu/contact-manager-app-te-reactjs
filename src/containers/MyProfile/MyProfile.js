import React, { Component } from 'react';
import axios from 'axios';

class MyProfile extends Component {

  constructor(){
    super();
    console.log('======== Life Cycle Demo --1. Inside Constructor ====');
    this.state = {
      personName: 'Arun',
      accountCreated: '4/July/2020'
    }
  }

  componentDidMount(){
    // ideal place for you to have ajax calls
    console.log('======== Life Cycle Demo -- 3. Inside componentDidMount ====');
    
    // Make an ajax request 
    axios.get( 'http://jsonplaceholder.typicode.com/users' )  // hit the url
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log('it\'s over');
      });
  }

  component

  profileNameChangeHandler(e){   // work with event object
    console.log(e.target.value);
    this.setState(
      {
        personName: e.target.value
      }
    )
  }

  render() {
    console.log('======== Life Cycle Demo -- 2. Inside Render ====');
    return (
      <div>
        <p>My Name: {this.state.personName}</p>
        <input type='text' value={this.state.personName} 
        onChange={this.profileNameChangeHandler.bind(this)}/>
        
      </div>
    )
  }
}

export default MyProfile;
