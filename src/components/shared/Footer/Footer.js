import React from 'react';
import Menu from '../Menu/Menu';

// Component with Arrow Function
// 'this' keyword 
const Footer = ( props ) => { // props -- an obj 
  console.log(props);
  console.log(props.year);
  let companyName = 'Tata Elxsi';  // static data is within the component 

  return (
    <footer className='text-center'>
      <hr />
      <Menu></Menu>
      <p>Copyright {props.year} | {companyName} </p>
      <p>Built with passion during lockdown</p>
    </footer>
  )
}

export default Footer;