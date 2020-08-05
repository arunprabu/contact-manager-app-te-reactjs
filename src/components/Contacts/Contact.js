import React from 'react';
import { Link } from 'react-router-dom';

function Contact( {index, id, name, email} ) {

  return (
    
     <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          <Link to={`/contacts/${index+1}`}>{name}</Link>
        </h5>
        <small>Contact Id: {id}</small>
      </div>
      <p className="mb-1">
        {email}
      </p>
    </div>
  )
}

export default Contact;
