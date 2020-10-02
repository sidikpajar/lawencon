import axios from 'axios';

import { 
  FETCH_CONTACT_UPDATE_REQUEST,
  FETCH_CONTACT_UPDATE_SUCCESS,
  FETCH_CONTACT_UPDATE_FAILURE
 } from './contactUpdateTypes';

export const fetchContactUpdateRequest = () => {
  return {
    type: FETCH_CONTACT_UPDATE_REQUEST
  }
}

export const fetchContactUpdateSuccess = contactUpdate => {
  return {
    type: FETCH_CONTACT_UPDATE_SUCCESS,
    payload: contactUpdate,
  }
}

export const fetchContactUpdateFailure = error => {
  return {
    type: FETCH_CONTACT_UPDATE_FAILURE,
    payload: error
  }
}

export const fetchContactUpdate = (id,data) => {
  console.log('fetch',data)
  return (dispatch) => {
    dispatch(fetchContactUpdateRequest)
    axios({
      method: 'put',
      url: `https://simple-contact-crud.herokuapp.com/contact/${id}`,
      data,
      validateStatus: () => true,
    })
    .then(response => {
      const contactUpdate = response
      dispatch(fetchContactUpdateSuccess(contactUpdate))
    })
    .catch(errors => {
      dispatch(fetchContactUpdateFailure(errors))
    })
  }
}