import { 
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE
 } from './contactTypes';

const initialState = {
  loading: false,
  contact: [],
  error: ''
}

const contactReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CONTACT_REQUEST : return {
      ...state,
      loading: true
    }
    case FETCH_CONTACT_SUCCESS : return {
      loading: false,
      contact: action.payload,
      error: ''
    }
    case FETCH_CONTACT_FAILURE : return {
      loading: false,
      contact: [],
      error: action.payload
    }
    default: return state
  }
}

export default contactReducer