import React, { useState, useEffect, useCallback, useReducer } from 'react';

import MyTasks from './MyTasks.js';
import Todo from './Todo.js';

function About() {
  const myProfile = {
    name: 'Arun',
    city: 'Chennai'
  }

  // state with fn comp using useState hook 
  const [profile, setProfile] = useState(myProfile);

  const updateProfile = () =>{
    setProfile({
      name: 'John'
    });
  }

  useEffect( () => { // equivalent to componentDidMount and componentDidUpdate
    document.title = `You changed ${profile.name}`;
  })


  return (
    <div>
      <h1>About us page</h1>
      <p>{profile.name}</p>
      <p>{profile.city}</p>
      <button type='button' onClick={updateProfile}>Update Profile</button>

      <hr/>
      <MyTasks />

      <hr/>
      <Todo />
    </div>
  )
}

export default About;