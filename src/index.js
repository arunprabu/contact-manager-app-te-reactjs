import React from 'react';  // core package -- we'' use this to develop components 
import ReactDOM from 'react-dom'; // responsible rendering the components
import './index.css';
import App from './App'; // component import 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />  
  // what comp to be rendered
  ,
  document.getElementById('root')  // where the component should be injected 
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
