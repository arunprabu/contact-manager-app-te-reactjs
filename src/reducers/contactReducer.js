// Step 3:
// Reducer
/*
What's a Reducer?
  It is a function that takes the current state and 
  an action that was dispatched as it’s parameters and returns the new state.
*/

// Setting up contactReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state. 

// the initial data for the entire contacts feature
// let contactsData = {
//   contactsList: [],
//   contact: {
//   }
// }

// Step8 : make use of the actions/types.js file. 
// Have reducers/contactReducer.js to have better switch case statement 
 // with much more scalable code by using the action types 
import { ADD_CONTACT, GET_CONTACTS, GET_CONTACT_BY_ID, EDIT_CONTACT, DELETE_CONTACT } from "../actions/types";

const contactReducer = (state = [], action) => { 
  // Step 8.1 
  //now it is time to understand the concept called 'Actions'
  //What are Actions? 
    //Actions are plain Javascript objects with a type property. 
    //This type property describes the event that is taking place 
    //in the application.

  // todo:  work on retaining the previous state of all contacts
  
  
  switch(action.type) {  
    case ADD_CONTACT:
      //Step 8.2 - clarification - of the following code, 
      //action.type = Event and action.data = Form Data from Add CONTACT
      return state.concat([action.contact]);  
    case GET_CONTACTS: 
      return action.contacts;  
    case GET_CONTACT_BY_ID: 
      return action.contact;
    case EDIT_CONTACT: 
      return action.contact;
    case DELETE_CONTACT:
      console.log(action.contact);
      return action.contact;
    default:
      return state;
  }
}
export default contactReducer;

// Step 4: Refer reducers/index.js 
