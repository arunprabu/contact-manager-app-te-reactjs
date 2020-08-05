import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contact from '../../components/Contacts/Contact';

class ContactList extends Component {

  render(){
    console.log(this.props);

    let contacts = null; 

    contacts = this.props.contacts.map((contact, index) => {
      console.log(contact);

      return (
       <Contact id={contact.id} 
            name={contact.name} 
            email={contact.email} 
            index={index} key={index}/>
      )
    })

    return (
      <div className='text-left'>
        <h2>Contact List</h2>
        <div className="list-group">

          { this.props.contacts && this.props.contacts.length > 0? 
            contacts
            :
            <div className='alert alert-danger'>Contacts Not Found. You can add one!</div> 
          }
        </div>
        
      </div>
    )
  }
  
}

// converts state to the read-only props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    contacts: state.contacts
  }
} 

export default connect(mapStateToProps)(ContactList);
