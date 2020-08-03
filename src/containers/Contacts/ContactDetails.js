import React, { Component } from 'react'

class ContactDetails extends Component {
  render() {
    return (
      <div className='container text-left'>
        <h1>Contact Details</h1>
        <div>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">John</h5>
                <small>Contact Id: 1</small>
              </div>
              <p className="mb-1">
                John is from NZ
              </p>
              <br />
              <button className='btn btn-primary' data-toggle='modal' 
              data-target='#editModal'>Edit</button> &nbsp;
              <button className='btn btn-danger'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactDetails;
