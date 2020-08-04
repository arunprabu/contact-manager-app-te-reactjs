// Step 12
// ajax 
// api end point - http://jsonplaceholder.typicode.com/users
// http method -- POST
// payload - form data
// thru what tool? -- HTTPClient -- Axios

import axios from 'axios';
import { ADD_CONTACT } from "../actions/types";

const CONTACTS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const createContact = (data) => {
  console.log(data);
  return (dispatch) => {
    return axios.post(CONTACTS_API_URL, data )
      .then(response => {
        console.log(response);
          console.log('Submission SUCCESS');
          dispatch({
            type: ADD_CONTACT,
            payload: {
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