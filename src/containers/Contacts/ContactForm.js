import React, { Component } from 'react';
// Step 10: 
import { connect } from 'react-redux';

// Step 13: 
// Dispatch the action in submission logic
import { createContact } from '../../services/contactService';

//Step 9:
  // Almost  done... 
  // to dispatch action, let's write form submit logic 

class ContactForm extends Component {

  // Step 9.2 then, work on addContactHandler method 
  addContactHandler = (e) => {
    e.preventDefault();

    // making the payload ready
    const contactFormData = {
      name: this.getName.value,
      email: this.getEmail.value,
      phone: this.getPhone.value
    }

    console.log(contactFormData);

    console.log(this.props);  // Step 11: props exists because of connect method
    // Step 13: dispatch method will be in the above props 
    this.props.dispatch(createContact( contactFormData )); // this is the service method
  }

  render() {
    return (
      // Step 9.1
      // form code can be  the following with ref's and submission logic 
      <div>
        <div className='container text-left'>
          <div className='row'>
            <div className='col-md-12'>
              <h3>Create Contact!</h3>
              <form onSubmit={this.addContactHandler}>
                <input required type="text"
                  placeholder="Enter Name"
                  className='form-control' defaultValue='arun'
                  ref={(input) => this.getName = input } /><br />
                <input required type="text"
                  placeholder="Enter EMail" defaultValue='a@b.com'
                  className='form-control'
                  ref={(input) => this.getEmail = input } /><br />

                <input required type="text"
                  placeholder="Enter Phone" defaultValue='123'
                  className='form-control'
                  ref={(input) => this.getPhone = input }/><br />
                <button className='btn btn-primary' 
                type='submit' 
              >Add Contact</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Step 10.1
//last line of the component should be the following. 
// after connecting props will be available in this component. 
export default connect()(ContactForm);