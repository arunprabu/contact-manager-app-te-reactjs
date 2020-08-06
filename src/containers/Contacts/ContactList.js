import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contact from '../../components/Contacts/Contact';

import { getContacts } from '../../services/contactService';

class ContactList extends Component {

  componentDidMount(){
    // ideal place for ajax call
    this.props.dispatch(getContacts());
  }

  render(){

    let contacts = null; 
    let err  = null;

    if(this.props.contacts && this.props.contacts.length > 0){
      contacts = this.props.contacts.map((contact, index) => {
        console.log(contact);

        return (
          <Contact id={contact.id} 
              name={contact.name} 
              email={contact.email} 
              index={index} key={index}/>
        )
      })
    }else{
     err = <div className='alert alert-danger'>Contacts Not Found. You can add one!</div> ;
    }
    

    return (
      <div className='text-left'>
        <h2>Contact List</h2>
        <div className="list-group">

          { this.props.contacts && this.props.contacts.length > 0? 
            contacts
            :
            err
          }
        </div>
        
      </div>
    )
  }
  
}

// converts state to the read-only props
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
} 

export default connect(mapStateToProps)(ContactList);
