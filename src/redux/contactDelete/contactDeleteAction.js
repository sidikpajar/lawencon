import axios from 'axios';

import { 
  FETCH_CONTACT_DELETE_REQUEST,
  FETCH_CONTACT_DELETE_SUCCESS,
  FETCH_CONTACT_DELETE_FAILURE
 } from './contactDeleteTypes';

export const fetchContactDeleteRequest = () => {
  return {
    type: FETCH_CONTACT_DELETE_REQUEST
  }
}

export const fetchContactDeleteSuccess = contactDelete => {
  return {
    type: FETCH_CONTACT_DELETE_SUCCESS,
    payload: contactDelete,
  }
}

export const fetchContactDeleteFailure = error => {
  return {
    type: FETCH_CONTACT_DELETE_FAILURE,
    payload: error
  }
}

export const fetchContactDelete = (id) => {
  return (dispatch) => {
    dispatch(fetchContactDeleteRequest)
    axios({
      method: 'delete',
      url: `https://simple-contact-crud.herokuapp.com/contact/${id}`,
      validateStatus: () => true,
    })
    .then(response => {
      const contactDelete = response
      dispatch(fetchContactDeleteSuccess(contactDelete))
    })
    .catch(errors => {
      dispatch(fetchContactDeleteFailure(errors))
    })
  }
}

