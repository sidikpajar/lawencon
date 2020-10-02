import axios from 'axios';

import { 
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE,
 } from './contactTypes';

export const fetchContactRequest = () => {
  return {
    type: FETCH_CONTACT_REQUEST
  }
}

export const fetchContactSuccess = contact => {
  return {
    type: FETCH_CONTACT_SUCCESS,
    payload: contact,
  }
}


export const fetchContactFailure = error => {
  return {
    type: FETCH_CONTACT_FAILURE,
    payload: error
  }
}

export const fetchContact = () => {
  return (dispatch) => {
    dispatch(fetchContactRequest)
    axios({
      method: 'get',
      url: `https://simple-contact-crud.herokuapp.com/contact`,
      data: {},
      validateStatus: () => true,
    })
    .then(response => {
      const contact = response
      dispatch(fetchContactSuccess(contact))
    })
    .catch(errors => {
      dispatch(fetchContactFailure(errors))
    })
  }
}


