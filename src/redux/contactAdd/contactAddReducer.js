import { 
  FETCH_CONTACT_ADD_REQUEST,
  FETCH_CONTACT_ADD_SUCCESS,
  FETCH_CONTACT_ADD_FAILURE
 } from './contactAddTypes';

const initialState = {
  loading: false,
  contactAdd: [],
  error: ''
}

const contactAddReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CONTACT_ADD_REQUEST : return {
      ...state,
      loading: true
    }
    case FETCH_CONTACT_ADD_SUCCESS : return {
      loading: false,
      contactAdd: action.payload,
      error: ''
    }
    case FETCH_CONTACT_ADD_FAILURE : return {
      loading: false,
      contactAdd: [],
      error: action.payload
    }
    default: return state
  }
}

export default contactAddReducer