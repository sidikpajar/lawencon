import axios from 'axios';

import { 
  FETCH_CONTACT_DETAIL_REQUEST,
  FETCH_CONTACT_DETAIL_SUCCESS,
  FETCH_CONTACT_DETAIL_FAILURE
 } from './contactDetailTypes';

export const fetchContactDetailRequest = () => {
  return {
    type: FETCH_CONTACT_DETAIL_REQUEST
  }
}

export const fetchContactDetailSuccess = contentDetail => {
  return {
    type: FETCH_CONTACT_DETAIL_SUCCESS,
    payload: contentDetail,
  }
}

export const fetchContactDetailFailure = error => {
  return {
    type: FETCH_CONTACT_DETAIL_FAILURE,
    payload: error
  }
}

export const fetchContactDetail = (id) => {
  return (dispatch) => {
    dispatch(fetchContactDetailRequest)
    axios({
      method: 'get',
      url: `https://simple-contact-crud.herokuapp.com/contact/${id}`,
      data: {},
      validateStatus: () => true,
    })
    .then(response => {
      const contactDetail = response
      dispatch(fetchContactDetailSuccess(contactDetail))
    })
    .catch(errors => {
      dispatch(fetchContactDetailFailure(errors))
    })
  }
}