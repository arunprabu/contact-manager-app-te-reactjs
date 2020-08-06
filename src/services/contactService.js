// Step 12
// ajax 
// api end point - http://jsonplaceholder.typicode.com/users
// http method -- POST, GET, UPDATE, DELETE 
// payload - form data
// thru what tool? -- HTTPClient -- Axios

import axios from 'axios';
import { ADD_CONTACT, GET_CONTACTS, GET_CONTACT_BY_ID, EDIT_CONTACT, DELETE_CONTACT } from "../actions/types";

const CONTACTS_API_URL = 'https://jsonplaceholder.typicode.com/users';

// CREATE CONTACT
export const createContact = (data) => {
  console.log(data);
  return (dispatch) => {
    return axios.post(CONTACTS_API_URL, data )
      .then(response => {
        console.log(response);
        console.log('Submission SUCCESS');
        dispatch({
          type: ADD_CONTACT,
          contact: {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone
          }
        });
      })
      .catch(error => {
        throw (error);
      })
      .finally( () => {
        console.log('Add Contact service call is over');
      }) 
  }
}

// GET CONTACTS
export const getContacts = () => {
  // work with axios 
  return (dispatch) => {
    return axios.get(CONTACTS_API_URL )
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_CONTACTS,
          contacts: response.data
        })
      })
      .catch( (error) => {
         throw (error);
      })
      .finally( () => {
        console.log('It is over');
      })
  }
}

// GET CONTACT DETAILS 
export const getContactById = ( contactId ) => {
  console.log(contactId);
  // work with axios 
  return (dispatch) => {
    return axios.get(CONTACTS_API_URL + '/' + contactId )
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_CONTACT_BY_ID,
          contact: response.data
        })
      })
      .catch( (error) => {
         throw (error);
      })
      .finally( () => {
        console.log('It is over');
      })
  }
}

// UPDATE CONTACT
export const updateContact = ( id, contactData ) => {
  console.log(contactData);
  // work with axios 
  return (dispatch) => {
    return axios.put(`${CONTACTS_API_URL}/${id}`, contactData)
      .then(response => {
        console.log(response);
        dispatch({
          type: EDIT_CONTACT,
          contact: response.data
        })
      })
      .catch( (error) => {
         throw (error);
      })
      .finally( () => {
        console.log('It is over');
      })
  }
}


// DELETE CONTACT
export const deleteContact = (id) => {
  return (dispatch) => {
    return axios.delete(CONTACTS_API_URL+'/'+id)
      .then(response => {
        console.log(response);
        //without util method, you can try like the following
        // this will hit the postReducer
        dispatch({
          type: DELETE_CONTACT,
          contact: response.data
        })
      })
      .catch(error => {
        throw(error);
      }).
      finally( () => {
        console.log(' It is over');
      })
  };
};
