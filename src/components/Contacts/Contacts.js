import React from 'react'
import ContactList from '../../containers/Contacts/ContactList';
import ContactList from '../../containers/Contacts/ContactForm'

function Contacts() {
  return (
    <div>
      <div className='container'>
        <h1>Contacts</h1>
        <div className='row'>
          <div className='col-md-4'>
            <ContactForm></ContactForm>
          </div>
          <div className='col-md-8'>
            <ContactList></ContactList>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
