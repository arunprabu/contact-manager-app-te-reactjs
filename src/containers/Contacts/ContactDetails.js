import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getContactById, updateContact, deleteContact } from '../../services/contactService';

class ContactDetails extends Component {

  componentDidMount(){
    console.log('Inside componentDidMount');
    // read url params -- find id
    this.props.onGetContact( this.props.match.params.id  );
  }

  updateContactHandler = (e) => {
    e.preventDefault();
    
    // update flow 
    const updatableContactData = {
      name: this.getContactName.value,
      email: this.getContactEmail.value,
      phone: this.getContactPhone.value,
    }

    console.log(updatableContactData);

    // hit the service method with the above data
    this.props.onUpdateContact(this.props.match.params.id, updatableContactData);
  }

  deleteHandler = () => {
    this.props.onDelete(this.props.match.params.id); 
  }

  render() {
    console.log(this.props);

    return (
      <div className='container text-left'>
        <h1>Contact Details</h1>
        <div>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.contact.name}</h5>
                <small>Contact Id: {this.props.contact.id}</small>
              </div>
              <p className="mb-1">
                E-Mail: {this.props.contact.email }  - Phone: {this.props.contact.phone}
              </p>
              <br />
              <button className='btn btn-primary' data-toggle='modal'
                data-target='#editModal'>Edit</button> &nbsp;
              <button className='btn btn-danger' onClick={this.deleteHandler}>Delete</button>
            </div>
          </div>
        </div>

        <div className="modal fade" id="editModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Contact
                  </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.updateContactHandler}>
                  <input required type="text"
                    placeholder="Enter Name" 
                    defaultValue={this.props.contact.name}
                    ref={(input) => this.getContactName = input} 
                    className='form-control'
                  /><br />
                  <input required type="text"
                    placeholder="Enter E-Mail"
                    defaultValue={this.props.contact.email}
                    ref={(input) => this.getContactEmail = input} 
                    className='form-control'
                  /><br />
                  <input required type="text"
                    placeholder="Enter Phone"
                    defaultValue={this.props.contact.phone}
                    ref={(input) => this.getContactPhone = input}
                    className='form-control'
                  /><br />
                  <button className='btn btn-primary'
                    type='submit'>Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// we can create custom event handlers -- they will be available in props
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    onGetContact: (id) => dispatch(getContactById(id)),
    onUpdateContact: (id, contactData) => {
      dispatch(updateContact(id, contactData));
    },
    onDelete: (id) => dispatch(deleteContact(id))
  };
};

// converts state to the read-only props
const mapStateToProps = (state) => {
  return {
    contact: state.contacts
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
