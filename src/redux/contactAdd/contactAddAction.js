import axios from 'axios';

import { 
  FETCH_CONTACT_ADD_REQUEST,
  FETCH_CONTACT_ADD_SUCCESS,
  FETCH_CONTACT_ADD_FAILURE,
 } from './contactAddTypes';

export const fetchContactAddRequest = () => {
  return {
    type: FETCH_CONTACT_ADD_REQUEST
  }
}

export const fetchContactAddSuccess = contactAdd => {
  return {
    type: FETCH_CONTACT_ADD_SUCCESS,
    payload: contactAdd,
  }
}


export const fetchContactAddFailure = error => {
  return {
    type: FETCH_CONTACT_ADD_FAILURE,
    payload: error
  }
}

export const fetchContactAdd = (data) => {
  return (dispatch) => {
    dispatch(fetchContactAddRequest)
    axios({
      method: 'post',
      url: `https://simple-contact-crud.herokuapp.com/contact`,
      data,
      validateStatus: () => true,
    })
    .then(response => {
      const contactAdd = response
      dispatch(fetchContactAddSuccess(contactAdd))
    })
    .catch(errors => {
      console.log(errors)
      dispatch(fetchContactAddFailure(errors))
    })
  }
}
